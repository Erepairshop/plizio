import React, { useState, useRef, ReactNode } from 'react';
import { motion, PanInfo } from 'framer-motion';

export interface DragItem<T = any> {
  id: string;
  label: string;
  data?: T;
}

export interface DropZone<U = any> {
  id: string;
  label: string;
  accepts?: (item: DragItem) => boolean;
  data?: U;
}

interface Props<T, U> {
  items: DragItem<T>[];
  zones: DropZone<U>[];
  onDrop: (item: DragItem<T>, zone: DropZone<U>) => void;
  renderItem: (item: DragItem<T>) => ReactNode;
  renderZone: (zone: DropZone<U>, droppedItems: DragItem<T>[], isHovering: boolean) => ReactNode;
  className?: string;
}

export function DragAndDropContainer<T, U>({
  items,
  zones,
  onDrop,
  renderItem,
  renderZone,
  className,
}: Props<T, U>) {
  const [droppedItems, setDroppedItems] = useState<Record<string, DragItem<T>[]>>(() => {
    const initialState: Record<string, DragItem<T>[]> = {};
    zones.forEach(zone => {
      initialState[zone.id] = [];
    });
    return initialState;
  });
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const zoneRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleDrop = (item: DragItem<T>, info: PanInfo) => {
    const { point } = info;
    let droppedInZone = false;

    for (const zone of zones) {
      const zoneEl = zoneRefs.current[zone.id];
      if (zoneEl) {
        const { left, top, right, bottom } = zoneEl.getBoundingClientRect();
        if (point.x >= left && point.x <= right && point.y >= top && point.y <= bottom) {
          if (!zone.accepts || zone.accepts(item)) {
            onDrop(item, zone);
            setDroppedItems(prev => ({
              ...prev,
              [zone.id]: [...(prev[zone.id] || []), item],
            }));
            droppedInZone = true;
            break; 
          }
        }
      }
    }
    setHoveredZone(null);
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { point } = info;
    let overZone = false;
    for (const zone of zones) {
        const zoneEl = zoneRefs.current[zone.id];
        if (zoneEl) {
            const { left, top, right, bottom } = zoneEl.getBoundingClientRect();
            if (point.x >= left && point.x <= right && point.y >= top && point.y <= bottom) {
                setHoveredZone(zone.id);
                overZone = true;
                break;
            }
        }
    }
    if (!overZone) {
        setHoveredZone(null);
    }
  };


  return (
    <div className={className}>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        {items.map(item => (
          <motion.div
            key={item.id}
            drag
            onDragEnd={(event, info) => handleDrop(item, info)}
            onDrag={handleDrag}
            whileDrag={{ scale: 1.1, zIndex: 10 }}
            dragSnapToOrigin={true}
            style={{ touchAction: 'none', minWidth: '44px', minHeight: '44px' }}
          >
            {renderItem(item)}
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {zones.map(zone => (
          <div
            key={zone.id}
            ref={(el: HTMLDivElement | null) => { zoneRefs.current[zone.id] = el; }}
            style={{
              transition: 'background-color 0.2s',
              minWidth: '44px', 
              minHeight: '44px'
            }}
          >
            {renderZone(zone, droppedItems[zone.id] || [], hoveredZone === zone.id)}
          </div>
        ))}
      </div>
    </div>
  );
}
