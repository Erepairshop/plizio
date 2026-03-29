"use client";
import DynamicExplorer from "@/components/DynamicExplorer";
import { 
  BIO_I1_POOL, BIO_I1_LABELS,
  BIO_I2_POOL, BIO_I2_LABELS,
  BIO_I3_POOL, BIO_I3_LABELS,
  BIO_I4_POOL, BIO_I4_LABELS,
  BIO_I5_POOL, BIO_I5_LABELS,
  BIO_I6_POOL, BIO_I6_LABELS,
  BIO_I7_POOL, BIO_I7_LABELS,
  BIO_I8_POOL, BIO_I8_LABELS,
  BIO_I9_POOL, BIO_I9_LABELS 
} from "@/lib/explorerPools/biologieK5";

interface Props {
  islandId: string;
  color: string;
  lang: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function BioK5Explorer({ islandId, color, lang, onDone, onClose }: Props) {
  let pool = BIO_I1_POOL;
  let labels = BIO_I1_LABELS;
  let icon = "🐟";
  let title = "explorer_title";

  switch (islandId) {
    case "i1": pool = BIO_I1_POOL; labels = BIO_I1_LABELS; icon = "🐟"; break;
    case "i2": pool = BIO_I2_POOL; labels = BIO_I2_LABELS; icon = "🦎"; break;
    case "i3": pool = BIO_I3_POOL; labels = BIO_I3_LABELS; icon = "🐘"; break;
    case "i4": pool = BIO_I4_POOL; labels = BIO_I4_LABELS; icon = "🍃"; break;
    case "i5": pool = BIO_I5_POOL; labels = BIO_I5_LABELS; icon = "🌸"; break;
    case "i6": pool = BIO_I6_POOL; labels = BIO_I6_LABELS; icon = "🦴"; break;
    case "i7": pool = BIO_I7_POOL; labels = BIO_I7_LABELS; icon = "🫀"; break;
    case "i8": pool = BIO_I8_POOL; labels = BIO_I8_LABELS; icon = "👁️"; break;
    case "i9": pool = BIO_I9_POOL; labels = BIO_I9_LABELS; icon = "🥗"; break;
  }

  return (
    <DynamicExplorer
      pool={pool}
      labels={labels}
      title={title}
      icon={icon}
      explorerId={`bio_k5_${islandId}`}
      color={color}
      lang={lang}
      grade={5}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
