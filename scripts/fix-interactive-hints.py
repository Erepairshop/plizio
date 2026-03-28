#!/usr/bin/env python3
"""
Fix missing hint1, hint2, and instruction fields in AstroDeutsch pool files.

Properly handles nested structures (e.g., buckets: [{ id: "v", label: "t2_bv" }]).
"""

import re
import os
import sys
from pathlib import Path

def extract_labels(content):
    """Extract all label keys from LABELS object."""
    # Match: export const LETTER_LABELS: Record<string, Record<string, string>> = { de: { ... } }
    labels_match = re.search(r'export const \w+_LABELS.*?\n\s*de:\s*\{(.*?)\n\s*\}\s*\};', content, re.DOTALL)
    if not labels_match:
        return set()

    labels_str = labels_match.group(1)
    labels = set()
    for match in re.finditer(r'(\w+):\s*"', labels_str):
        labels.add(match.group(1))
    return labels

def find_interactive_blocks(content):
    """Find all interactive blocks with their positions, handling nested structures by counting braces."""
    blocks = []
    i = 0
    while True:
        # Find start of interactive block
        start = content.find('interactive: {', i)
        if start == -1:
            break

        # Find matching closing brace by counting braces AND tracking strings
        brace_count = 1  # We've already opened with 'interactive: {'
        in_string = False
        escape_next = False
        end = -1

        for j in range(start + len('interactive: {'), len(content)):
            c = content[j]

            # Handle escape sequences
            if escape_next:
                escape_next = False
                continue

            if c == '\\':
                escape_next = True
                continue

            # Track string boundaries
            if c == '"' and not escape_next:
                in_string = not in_string
                continue

            # Only count braces outside of strings
            if not in_string:
                if c == '{':
                    brace_count += 1
                elif c == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        end = j
                        break

        if end == -1:
            print(f"⚠️  Could not find closing brace for interactive block at position {start}")
            break

        block_content = content[start:end+1]
        line_num = content[:start].count('\n') + 1
        blocks.append({
            'start': start,
            'end': end + 1,
            'content': block_content,
            'line': line_num
        })

        i = end + 1

    return blocks

def extract_topic_prefix(block_content):
    """Extract topic prefix (e.g., 't2_') from keys in the block."""
    # Look for keys like "t2_e", "t3_inst", etc.
    keys = re.findall(r'"(t\d+_[^"]*)"', block_content)
    if keys:
        match = re.match(r'(t\d+_)', keys[0])
        if match:
            return match.group(1)
    return None

def has_field(block_content, field_name):
    """Check if a field exists in the block."""
    return f'{field_name}:' in block_content

def add_missing_hints(block_content, prefix, available_labels):
    """Add missing hint1, hint2, and instruction fields."""
    # Check what needs to be added
    missing = []

    if prefix:
        inst_key = f'{prefix}inst'
        h1_key = f'{prefix}h1'
        h2_key = f'{prefix}h2'

        if inst_key in available_labels and not has_field(block_content, 'instruction'):
            missing.append(f'instruction: "{inst_key}"')

        if h1_key in available_labels and not has_field(block_content, 'hint1'):
            missing.append(f'hint1: "{h1_key}"')

        if h2_key in available_labels and not has_field(block_content, 'hint2'):
            missing.append(f'hint2: "{h2_key}"')

    if not missing:
        return block_content

    # Insert before the closing brace
    # Find the last closing brace
    insert_pos = block_content.rfind('}')
    if insert_pos == -1:
        return block_content

    # Add indentation to match surrounding code
    indent = '      '
    insertion = ',\n' + ',\n'.join(f'{indent}{field}' for field in missing)

    new_content = block_content[:insert_pos] + insertion + '\n    ' + block_content[insert_pos:]
    return new_content

def process_file(filepath):
    """Process a single deutschK*.ts file."""
    with open(filepath, 'r') as f:
        content = f.read()

    labels = extract_labels(content)
    if not labels:
        print(f"❌ {filepath.name}: Could not extract labels")
        return 0

    blocks = find_interactive_blocks(content)
    if not blocks:
        print(f"✅ {filepath.name}: No interactive blocks found")
        return 0

    total_added = 0
    modified_content = content
    offset = 0

    for block in blocks:
        prefix = extract_topic_prefix(block['content'])
        new_content = add_missing_hints(block['content'], prefix, labels)

        if new_content != block['content']:
            # Count fields added
            added_count = len(new_content) - len(block['content'])
            if added_count > 0:
                total_added += (new_content.count('instruction:') - block['content'].count('instruction:') +
                               new_content.count('hint1:') - block['content'].count('hint1:') +
                               new_content.count('hint2:') - block['content'].count('hint2:'))
                print(f"  L{block['line']}: Added {added_count} bytes ({total_added} fields total so far)")

            # Replace in the full content with offset
            old_start = block['start'] + offset
            old_end = block['end'] + offset
            modified_content = modified_content[:old_start] + new_content + modified_content[old_end:]
            offset += len(new_content) - (block['end'] - block['start'])

    if total_added > 0:
        with open(filepath, 'w') as f:
            f.write(modified_content)
        print(f"  ✅ Saved {filepath.name}")
    else:
        print(f"  ✅ {filepath.name} is complete")

    return total_added

def main():
    pools_dir = Path('/home/user/plizio/lib/explorerPools')
    files = sorted(pools_dir.glob('deutschK[1-8].ts'))

    if not files:
        print("❌ No deutschK*.ts files found")
        sys.exit(1)

    total_fixed = 0
    print("Fixing missing hint1, hint2, and instruction fields...\n")

    for filepath in files:
        added = process_file(filepath)
        total_fixed += added

    print(f"\n✅ Done! Fixed {total_fixed} field(s) across {len(files)} file(s).")

if __name__ == '__main__':
    main()
