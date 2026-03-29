import type { HatDef, TrailDef } from '@/lib/accessories';
import type { HairDef } from '@/lib/hair';
import type { FaceDef } from '@/lib/faces';
import type {
  TopDef,
  BottomDef,
  ShoeDef,
  CapeDef,
  GlassesDef,
  GloveDef,
} from '@/lib/clothing';

export type AvatarAttachmentBone =
  | 'Head'
  | 'Spine01'
  | 'Spine02'
  | 'Hips'
  | 'LeftHand'
  | 'RightHand'
  | 'LeftFoot'
  | 'RightFoot';

export interface AvatarAttachmentSpec {
  id: string;
  slot: 'hat' | 'glasses' | 'cape' | 'trail' | 'hair' | 'face' | 'top' | 'bottom' | 'shoe' | 'gloves';
  anchor: AvatarAttachmentBone;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number | [number, number, number];
  variant: string;
  color?: string;
  secondaryColor?: string;
  emissive?: string;
  emissiveIntensity?: number;
  assetPath?: string;
}

export function getHatAttachmentSpec(hat: HatDef | null): AvatarAttachmentSpec | null {
  if (!hat) return null;
  const variantMap: Record<HatDef['type'], string> = {
    crown: 'crown',
    cap: 'cap',
    halo: 'halo',
    horns: 'horns',
    tophat: 'tophat',
    helmet: 'helmet',
    antenna: 'antenna',
    wizard: 'wizard',
    beanie: 'beanie',
    bucket: 'bucket',
    party: 'party',
    fedora: 'fedora',
    viking: 'viking',
    ninja: 'ninja',
    snapback: 'cap',
    bandana: 'ninja',
    bunnyears: 'bunnyears',
  };
  const useCapTestModel = ['cap', 'snapback'].includes(hat.type);
  const useTopHatModel = ['tophat', 'fedora'].includes(hat.type);
  return {
    id: hat.id,
    slot: 'hat',
    anchor: 'Head',
    position: useTopHatModel ? [0, 1.5, 0] : [0, 0, 0],
    rotation: [0, 0, 0],
    scale: useTopHatModel ? 5.0 : 1,
    variant: variantMap[hat.type] || 'crown',
    color: hat.color,
    secondaryColor: hat.color,
    emissive: hat.emissive,
    emissiveIntensity: hat.emissiveIntensity,
    assetPath: useTopHatModel ? '/models/hat.glb' : useCapTestModel ? '/models/tester_cap.glb' : undefined,
  };
}

export function getGlassesAttachmentSpec(glasses: GlassesDef | null): AvatarAttachmentSpec | null {
  if (!glasses) return null;
  return {
    id: glasses.id,
    slot: 'glasses',
    anchor: 'Head',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: glasses.type,
    color: glasses.color,
    secondaryColor: glasses.lensColor,
    emissive: glasses.type === 'visor' ? glasses.color : glasses.lensColor,
    emissiveIntensity: glasses.type === 'visor' ? 0.35 : 0.08,
  };
}

export function getCapeAttachmentSpec(cape: CapeDef | null): AvatarAttachmentSpec | null {
  if (!cape) return null;
  return {
    id: cape.id,
    slot: 'cape',
    anchor: 'Spine02',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: cape.id.includes('angel') ? 'angel' : cape.id.includes('demon') ? 'demon' : 'cape',
    color: cape.color,
    secondaryColor: cape.color,
    emissive: cape.emissive,
    emissiveIntensity: cape.emissiveIntensity,
  };
}

export function getTrailAttachmentSpec(trail: TrailDef | null): AvatarAttachmentSpec | null {
  if (!trail) return null;
  return {
    id: trail.id,
    slot: 'trail',
    anchor: 'Hips',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: trail.type,
    color: trail.color,
    secondaryColor: trail.color,
    emissive: trail.emissive,
    emissiveIntensity: 0.7,
  };
}

export function getHairAttachmentSpec(hair: HairDef | null): AvatarAttachmentSpec | null {
  if (!hair) return null;
  return {
    id: hair.id,
    slot: 'hair',
    anchor: 'Head',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: hair.id,
    color: hair.color,
    secondaryColor: hair.highlight || hair.color,
    emissive: hair.highlight || hair.color,
    emissiveIntensity: hair.id.includes('neon') || hair.id.includes('rainbow') || hair.id.includes('galaxy') ? 0.3 : 0.04,
  };
}

export function getFaceAttachmentSpec(face: FaceDef | null): AvatarAttachmentSpec | null {
  if (!face || face.id === 'default') return null;
  return {
    id: face.id,
    slot: 'face',
    anchor: 'Head',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: face.id,
    color: face.eyeColor,
    secondaryColor: face.mouthColor,
    emissive: face.eyeColor,
    emissiveIntensity: 0.08,
  };
}

export function getTopAttachmentSpec(top: TopDef | null): AvatarAttachmentSpec | null {
  if (!top || top.id === 'tshirt_white') return null;
  return {
    id: top.id,
    slot: 'top',
    anchor: 'Spine01',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: top.type,
    color: top.color,
    secondaryColor: top.accent || top.color,
  };
}

export function getBottomAttachmentSpec(bottom: BottomDef | null): AvatarAttachmentSpec | null {
  if (!bottom || bottom.id === 'pants_default') return null;
  return {
    id: bottom.id,
    slot: 'bottom',
    anchor: 'Hips',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: bottom.type,
    color: bottom.color,
    secondaryColor: bottom.color,
  };
}

export function getShoeAttachmentSpec(shoe: ShoeDef | null): AvatarAttachmentSpec | null {
  if (!shoe || shoe.id === 'sneaker_default') return null;
  return {
    id: shoe.id,
    slot: 'shoe',
    anchor: 'LeftFoot',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: shoe.type,
    color: shoe.color,
    secondaryColor: shoe.sole || shoe.color,
  };
}

export function getGloveAttachmentSpec(glove: GloveDef | null): AvatarAttachmentSpec | null {
  if (!glove) return null;
  return {
    id: glove.id,
    slot: 'gloves',
    anchor: 'LeftHand',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    variant: glove.id,
    color: glove.color,
    secondaryColor: glove.color,
  };
}
