"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  type ReactElement,
  type ReactNode,
  type SVGProps,
} from "react";

type ElementWithProps = ReactElement<Record<string, unknown>>;

function scopeReference(value: string, prefix: string): string {
  return value
    .replace(/url\(#([^)]+)\)/g, `url(#${prefix}-$1)`)
    .replace(/^#(.+)$/, `#${prefix}-$1`);
}

function scopeNode(node: ReactNode, prefix: string): ReactNode {
  if (!isValidElement(node)) return node;

  const element = node as ElementWithProps;
  const nextProps: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(element.props)) {
    if (key === "children") continue;

    if (key === "id" && typeof value === "string") {
      nextProps.id = `${prefix}-${value}`;
    } else if (
      typeof value === "string" &&
      (value.includes("url(#") ||
        ((key === "href" || key === "xlinkHref") && value.startsWith("#")))
    ) {
      nextProps[key] = scopeReference(value, prefix);
    }
  }

  if ("children" in element.props) {
    nextProps.children = Children.map(element.props.children as ReactNode, (child) =>
      scopeNode(child, prefix),
    );
  }

  return cloneElement(element, nextProps);
}

export default function ScopedSvg({
  children,
  ...props
}: SVGProps<SVGSVGElement>) {
  const prefix = `svg-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      {Children.map(children, (child) => scopeNode(child, prefix))}
    </svg>
  );
}
