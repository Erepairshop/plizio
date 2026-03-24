'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { SkinDef } from '@/lib/skins';
import type { FaceDef } from '@/lib/faces';
import type { TopDef, BottomDef, ShoeDef, CapeDef, GlassesDef, GloveDef } from '@/lib/clothing';
import type { HatDef, TrailDef } from '@/lib/accessories';
import type { HairDef } from '@/lib/hair';
import { type AvatarGender, getAvatarScale } from '@/lib/gender';
import { AVATAR_DEFAULTS } from '@/lib/avatarDefaults';
import { HatMesh } from './avatar/HatMesh';
import { GlassesMesh } from './avatar/GlassesMesh';
import { CapeMesh, TrailMesh } from './avatar/CapeMesh';
import { FaceFeatures } from './avatar/FaceFeatures';

export interface AvatarCompanionProps {
  mood: 'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing';
  // Movement
  isWalking?: boolean;
  facing?: 'se' | 'sw' | 'ne' | 'nw';
  // Legacy fallback colors
  skinColor?: string;
  outfitColor?: string;
  fixed?: boolean;
  jumpTrigger?: { reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null; timestamp: number };
  // Gender
  gender?: AvatarGender;
  // Full shop customization
  activeSkin?: SkinDef | null;
  activeFace?: FaceDef | null;
  activeTop?: TopDef | null;
  activeBottom?: BottomDef | null;
  activeShoe?: ShoeDef | null;
  activeCape?: CapeDef | null;
  activeGlasses?: GlassesDef | null;
  activeGloves?: GloveDef | null;
  activeHat?: HatDef | null;
  activeTrail?: TrailDef | null;
  activeHair?: HairDef | null;
  // When true, the avatar canvas passes clicks through to underlying elements
  passThrough?: boolean;
  // When true, enables touch/mouse orbit controls for 360° rotation
  orbitControls?: boolean;
}

function nextBlink() {
  return 3 + Math.random() * 4;
}

// ── MAIN CHARACTER ────────────────────────────────────────
function Character({
  mood,
  isWalking = false,
  facing,
  skinColor: legacySkinColor = AVATAR_DEFAULTS.skinColor,
  outfitColor: legacyOutfitColor = AVATAR_DEFAULTS.outfitColor,
  jumpTrigger,
  gender = 'girl',
  activeSkin,
  activeFace,
  activeTop,
  activeBottom,
  activeShoe,
  activeCape,
  activeGlasses,
  activeGloves,
  activeHat,
  activeTrail,
  activeHair,
}: AvatarCompanionProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const leftLidRef = useRef<THREE.Mesh | null>(null);
  const rightLidRef = useRef<THREE.Mesh | null>(null);
  const leftIrisRef = useRef<THREE.Mesh | null>(null);
  const rightIrisRef = useRef<THREE.Mesh | null>(null);
 const leftBrowRef = useRef<THREE.Object3D | null>(null);
const rightBrowRef = useRef<THREE.Object3D | null>(null);
  const mouthRef = useRef<THREE.Mesh | null>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftForearmRef = useRef<THREE.Group | null>(null);
  const rightForearmRef = useRef<THREE.Group | null>(null);
  const leftShoulderRef = useRef<THREE.Mesh>(null);
  const rightShoulderRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const moodRef = useRef(mood);
  const isWalkingRef = useRef(isWalking);
  const facingRef = useRef(facing);
  const tRef = useRef(0);
  const blinkTimer = useRef(0);
  const blinkNext = useRef(nextBlink());
  const blinkPhase = useRef(-1);
  const jumpTimer = useRef(-1);
  const reactionDurationRef = useRef(0.6);
  const reactionMoodRef = useRef<'idle' | 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin'>('idle');
  const [frameT, setFrameT] = useState(0);

  // ── Ambient idle behavior system ──────────────────────
  // triggers a random idle animation every 60-90 seconds
  const idleSeqTimerRef = useRef(65 + Math.random() * 35);
  const ambientPhaseRef = useRef(-1);   // -1 = inactive, 0..1 = progress
  const ambientTypeRef = useRef('');
  const ambientDurRef = useRef(3);
  const capeGroupRef = useRef<THREE.Group | null>(null);
  const activeCapeRef = useRef(activeCape);
  const activeHatRef = useRef(activeHat);

  // ── Resolve colors from items ──────────────────────────
  // Default skin (id='default') = treat same as no skin → warm fallback colors
  const hasRealSkin = activeSkin && activeSkin.id !== 'default';
  const actualSkinColor = hasRealSkin ? activeSkin!.headColor : legacySkinColor;
  const actualLimbColor = hasRealSkin ? activeSkin!.limbColor : legacySkinColor;
  const skinEmissive = hasRealSkin ? activeSkin!.emissive : null;
  const skinEmissiveIntensity = hasRealSkin ? activeSkin!.emissiveIntensity * 0.3 : 0;

  const actualBodyColor = activeTop ? activeTop.color : (hasRealSkin ? activeSkin!.bodyColor : legacyOutfitColor);
  const actualBodyAccent = activeTop?.accent || actualBodyColor;
  const actualLegColor = activeBottom ? activeBottom.color : (hasRealSkin ? activeSkin!.limbColor : AVATAR_DEFAULTS.legColor);
  const actualShoeColor = activeShoe ? activeShoe.color : (hasRealSkin ? activeSkin!.shoeColor : AVATAR_DEFAULTS.shoeColor);
  const actualHandColor = activeGloves ? activeGloves.color : actualLimbColor;
  const skinDark = new THREE.Color(actualSkinColor).multiplyScalar(0.82).getStyle();

  // Hair color (warm chestnut brown for default, or skin's headColor for fantasy skins)
  // activeHair overrides skin headColor and default
  const hairColor = activeHair ? activeHair.color : (hasRealSkin ? activeSkin!.headColor : AVATAR_DEFAULTS.hairColor);

  useEffect(() => {
    moodRef.current = mood;
    tRef.current = 0;
  }, [mood]);

  useEffect(() => { isWalkingRef.current = isWalking; }, [isWalking]);
  useEffect(() => { facingRef.current = facing; }, [facing]);
  useEffect(() => { activeCapeRef.current = activeCape; }, [activeCape]);
  useEffect(() => { activeHatRef.current = activeHat; }, [activeHat]);

  useEffect(() => {
    if (jumpTrigger?.reaction) {
      jumpTimer.current = 0;
      reactionMoodRef.current = jumpTrigger.reaction;
      reactionDurationRef.current = ['wave', 'dance', 'spin'].includes(jumpTrigger.reaction) ? 1.4 : 0.6;
    }
  }, [jumpTrigger?.timestamp]);

  useFrame((_state, delta) => {
    if (!groupRef.current || !headRef.current || !bodyRef.current) return;

    tRef.current += delta;
    blinkTimer.current += delta;
    setFrameT(tRef.current);

    if (jumpTimer.current >= 0) {
      jumpTimer.current += delta / reactionDurationRef.current;
      if (jumpTimer.current > 1) jumpTimer.current = -1;
    }

    const t = tRef.current;
    type AnyMood = 'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin';
    let m: AnyMood = moodRef.current;
    if (jumpTimer.current >= 0) m = reactionMoodRef.current;

    const lerp = THREE.MathUtils.lerp;

    let jumpHeight = 0;
    if (jumpTimer.current >= 0) {
      jumpHeight = Math.sin(jumpTimer.current * Math.PI) * 0.35;
    }

    groupRef.current.position.y = lerp(groupRef.current.position.y, jumpHeight, 0.15);
    // Facing direction (only when not in a reaction and not in a turn/strut ambient anim)
    if (jumpTimer.current < 0 && !(ambientPhaseRef.current >= 0 && (ambientTypeRef.current === 'turnAround' || ambientTypeRef.current === 'strut'))) {
      // se=screen-right (+45°), sw=screen-left (-45°), ne=away-right (+135°), nw=away-left (-135°)
      const facingMap: Record<string, number> = {
        se:  Math.PI / 4,        //  +45° — right profile toward camera
        sw: -Math.PI / 4,        //  -45° — left profile toward camera
        ne:  Math.PI * 3 / 4,    // +135° — back-right (away from camera)
        nw: -Math.PI * 3 / 4,    // -135° — back-left  (away from camera)
      };
      const facingTargetY = facingRef.current ? (facingMap[facingRef.current] ?? 0) : 0;
      // Normalize angle diff so lerp always takes the shortest rotation path
      const curY = groupRef.current.rotation.y;
      let diff = facingTargetY - curY;
      while (diff >  Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      groupRef.current.rotation.y = lerp(curY, curY + diff, 0.14);
    }
    groupRef.current.rotation.z = lerp(groupRef.current.rotation.z, 0, 0.1);
    headRef.current.rotation.x = lerp(headRef.current.rotation.x, 0, 0.1);
    headRef.current.rotation.y = lerp(headRef.current.rotation.y, 0, 0.1);
    headRef.current.rotation.z = lerp(headRef.current.rotation.z, 0, 0.1);
    bodyRef.current.scale.x = lerp(bodyRef.current.scale.x, 1, 0.12);
    bodyRef.current.scale.y = lerp(bodyRef.current.scale.y, 1, 0.12);
    bodyRef.current.position.y = lerp(bodyRef.current.position.y, 0, 0.1);

    if (leftLegRef.current && rightLegRef.current) {
      let legScale = 1;
      if (jumpTimer.current >= 0) legScale = 1 - 0.3 * Math.sin(jumpTimer.current * Math.PI);
      leftLegRef.current.scale.y = lerp(leftLegRef.current.scale.y, legScale, 0.15);
      rightLegRef.current.scale.y = lerp(rightLegRef.current.scale.y, legScale, 0.15);
      if (jumpTimer.current >= 0) {
        leftLegRef.current.position.y = lerp(leftLegRef.current.position.y, -0.52, 0.15);
        rightLegRef.current.position.y = lerp(rightLegRef.current.position.y, -0.52, 0.15);
      }
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.15, 0.1);
      leftArmRef.current.rotation.x = lerp(leftArmRef.current.rotation.x, 0.12, 0.1);
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.15, 0.1);
      rightArmRef.current.rotation.x = lerp(rightArmRef.current.rotation.x, 0.12, 0.1);
    }
    if (leftForearmRef.current) {
      leftForearmRef.current.rotation.x = lerp(leftForearmRef.current.rotation.x, 0, 0.1);
      leftForearmRef.current.rotation.z = lerp(leftForearmRef.current.rotation.z, 0, 0.1);
    }
    if (rightForearmRef.current) {
      rightForearmRef.current.rotation.x = lerp(rightForearmRef.current.rotation.x, 0, 0.1);
      rightForearmRef.current.rotation.z = lerp(rightForearmRef.current.rotation.z, 0, 0.1);
    }
    // Leg rotation reset (when not in reaction and not walking)
    if (jumpTimer.current < 0 && !isWalkingRef.current && leftLegRef.current && rightLegRef.current) {
      leftLegRef.current.rotation.x = lerp(leftLegRef.current.rotation.x || 0, 0, 0.08);
      rightLegRef.current.rotation.x = lerp(rightLegRef.current.rotation.x || 0, 0, 0.08);
    }

    // Walk animation — alternating arms and legs
    if (isWalkingRef.current && jumpTimer.current < 0 &&
        leftArmRef.current && rightArmRef.current &&
        leftLegRef.current && rightLegRef.current) {
      const wf = Math.PI * 3.2; // walk cycle frequency
      const armSwing = Math.sin(t * wf) * 0.48;
      const legSwing = Math.sin(t * wf) * 0.38;
      leftArmRef.current.rotation.x = armSwing;
      rightArmRef.current.rotation.x = -armSwing;
      leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.08, 0.12);
      rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.08, 0.12);
      leftLegRef.current.rotation.x = -legSwing;
      rightLegRef.current.rotation.x = legSwing;
      // Subtle body bob
      if (bodyRef.current) {
        bodyRef.current.position.y = lerp(bodyRef.current.position.y, Math.abs(Math.sin(t * wf)) * 0.012, 0.2);
      }
    }

    if (leftShoulderRef.current && rightShoulderRef.current) {
      leftShoulderRef.current.rotation.z = lerp(leftShoulderRef.current.rotation.z, 0, 0.1);
      leftShoulderRef.current.rotation.x = lerp(leftShoulderRef.current.rotation.x, 0, 0.1);
      rightShoulderRef.current.rotation.z = lerp(rightShoulderRef.current.rotation.z, 0, 0.1);
      rightShoulderRef.current.rotation.x = lerp(rightShoulderRef.current.rotation.x, 0, 0.1);
    }

    // Blink
    if (blinkPhase.current < 0) {
      if (blinkTimer.current >= blinkNext.current) {
        blinkPhase.current = 0;
        blinkTimer.current = 0;
      }
    }
    if (blinkPhase.current >= 0) {
      blinkPhase.current += delta / 0.12;
      if (blinkPhase.current > 2) {
        blinkPhase.current = -1;
        blinkTimer.current = 0;
        blinkNext.current = nextBlink();
      }
    }
    const lidClose = blinkPhase.current >= 0
      ? (blinkPhase.current <= 1 ? blinkPhase.current : 2 - blinkPhase.current)
      : 0;
    if (leftLidRef.current) leftLidRef.current.scale.y = 0.01 + lidClose * 1.2;
    if (rightLidRef.current) rightLidRef.current.scale.y = 0.01 + lidClose * 1.2;
    // Eyebrow raise during blink
    if (leftBrowRef.current) leftBrowRef.current.position.y = 0.1 + lidClose * 0.025;
    if (rightBrowRef.current) rightBrowRef.current.position.y = 0.1 + lidClose * 0.025;

    // Gaze
    if (leftIrisRef.current && rightIrisRef.current) {
      const gazeX = Math.sin(t * 0.4) * 0.008;
      const gazeY = Math.sin(t * 0.3 + 0.7) * 0.005;
      leftIrisRef.current.position.x = -0.08 + gazeX;
      leftIrisRef.current.position.y = 0.04 + gazeY;
      rightIrisRef.current.position.x = 0.08 + gazeX;
      rightIrisRef.current.position.y = 0.04 + gazeY;
    }

    // Mouth reset
    if (mouthRef.current) {
      mouthRef.current.scale.x = lerp(mouthRef.current.scale.x, 1, 0.12);
      mouthRef.current.scale.y = lerp(mouthRef.current.scale.y, 1, 0.12);
      mouthRef.current.position.y = lerp(mouthRef.current.position.y, -0.1, 0.12);
    }

    // Jump reactions — full body
    if (jumpTimer.current >= 0) {
      const jp = jumpTimer.current;
      switch (reactionMoodRef.current) {
        case 'happy': {
          headRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.15;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 3) * 0.07;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - Math.sin(jp * Math.PI) * 1.1;
            rightArmRef.current.rotation.z = 0.15 + Math.sin(jp * Math.PI) * 1.1;
            leftArmRef.current.rotation.x = -Math.sin(jp * Math.PI) * 0.35;
            rightArmRef.current.rotation.x = -Math.sin(jp * Math.PI) * 0.35;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.45;
            rightForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 2 + 0.6) * 0.45;
          }
          if (leftLegRef.current && rightLegRef.current) {
            leftLegRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.28;
            rightLegRef.current.rotation.x = Math.sin(jp * Math.PI * 2 + Math.PI) * 0.28;
          }
          break;
        }
        case 'surprised': {
          const shoot = Math.min(1, jp * 5);
          headRef.current.rotation.x = -0.3 * shoot;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 2) * 0.04;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - shoot * 1.0;
            rightArmRef.current.rotation.z = 0.15 + shoot * 1.0;
            leftArmRef.current.rotation.x = -shoot * 0.55;
            rightArmRef.current.rotation.x = -shoot * 0.55;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = -shoot * 0.7;
            rightForearmRef.current.rotation.x = -shoot * 0.7;
          }
          if (leftLegRef.current && rightLegRef.current) {
            leftLegRef.current.rotation.x = shoot * 0.12;
            rightLegRef.current.rotation.x = -shoot * 0.12;
          }
          break;
        }
        case 'victory': {
          const arm = Math.min(1, jp * 2.5);
          headRef.current.rotation.x = -0.3 * Math.min(1, jp * 2);
          groupRef.current.rotation.y += 0.08;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - arm * 1.4;
            rightArmRef.current.rotation.z = 0.15 + arm * 1.4;
            leftArmRef.current.rotation.x = -arm * 0.55;
            rightArmRef.current.rotation.x = -arm * 0.55;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = -Math.min(1, jp * 3) * 0.5;
            rightForearmRef.current.rotation.x = -Math.min(1, jp * 3) * 0.5;
          }
          if (leftLegRef.current && rightLegRef.current) {
            leftLegRef.current.rotation.x = Math.sin(jp * Math.PI * 4) * 0.22;
            rightLegRef.current.rotation.x = Math.sin(jp * Math.PI * 4 + Math.PI) * 0.22;
          }
          break;
        }
        case 'confused': {
          headRef.current.rotation.x = 0.2;
          headRef.current.rotation.z = 0.22 * Math.min(1, jp * 3);
          if (rightArmRef.current) {
            rightArmRef.current.rotation.z = 0.15 + Math.min(1, jp * 3) * 0.75;
            rightArmRef.current.rotation.x = -Math.min(1, jp * 3) * 0.65;
          }
          if (rightForearmRef.current) {
            rightForearmRef.current.rotation.x = -Math.min(1, jp * 2) * 0.85;
          }
          if (leftArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - Math.min(1, jp * 2) * 0.18;
            leftArmRef.current.rotation.x = 0.18;
          }
          if (leftForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 3) * 0.12;
          }
          break;
        }
        case 'laughing': {
          headRef.current.rotation.y = Math.sin(jp * Math.PI * 5) * 0.18;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 5 + 0.5) * 0.13;
          groupRef.current.rotation.z = Math.sin(jp * Math.PI * 3) * 0.07;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.x = 0.5 + Math.sin(jp * Math.PI * 4) * 0.1;
            rightArmRef.current.rotation.x = 0.5 + Math.sin(jp * Math.PI * 4) * 0.1;
            leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.08, 0.15);
            rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.08, 0.15);
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = 0.65 + Math.sin(jp * Math.PI * 4) * 0.12;
            rightForearmRef.current.rotation.x = 0.65 + Math.sin(jp * Math.PI * 4) * 0.12;
          }
          break;
        }
        case 'wave': {
          headRef.current.rotation.y = -0.18;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 2) * 0.05;
          groupRef.current.rotation.y = Math.sin(jp * Math.PI) * 0.1;
          if (rightArmRef.current) {
            rightArmRef.current.rotation.z = 0.15 + Math.min(1, jp * 4) * 1.2;
            rightArmRef.current.rotation.x = -Math.min(1, jp * 4) * 0.35;
          }
          if (rightForearmRef.current) {
            rightForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 6) * 0.55;
            rightForearmRef.current.rotation.z = Math.sin(jp * Math.PI * 6) * 0.18;
          }
          if (leftArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 + Math.sin(jp * Math.PI * 1.5) * 0.08;
            leftArmRef.current.rotation.x = 0.1;
          }
          if (leftForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.1;
          }
          break;
        }
        case 'dance': {
          const dFreq = jp * Math.PI * 4;
          headRef.current.rotation.z = Math.sin(dFreq) * 0.13;
          headRef.current.rotation.y = Math.sin(dFreq * 0.5) * 0.15;
          groupRef.current.rotation.z = Math.sin(dFreq * 0.5) * 0.06;
          bodyRef.current.position.y = Math.abs(Math.sin(dFreq)) * 0.045;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - Math.abs(Math.sin(dFreq)) * 0.75;
            rightArmRef.current.rotation.z = 0.15 + Math.abs(Math.sin(dFreq + Math.PI)) * 0.75;
            leftArmRef.current.rotation.x = Math.sin(dFreq) * 0.22;
            rightArmRef.current.rotation.x = Math.sin(dFreq + Math.PI) * 0.22;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(dFreq + Math.PI * 0.5) * 0.45;
            rightForearmRef.current.rotation.x = Math.sin(dFreq - Math.PI * 0.5) * 0.45;
          }
          if (leftLegRef.current && rightLegRef.current) {
            leftLegRef.current.rotation.x = Math.sin(dFreq) * 0.18;
            rightLegRef.current.rotation.x = Math.sin(dFreq + Math.PI) * 0.18;
          }
          if (leftShoulderRef.current && rightShoulderRef.current) {
            leftShoulderRef.current.position.y = 0.26 + Math.sin(dFreq) * 0.022;
            rightShoulderRef.current.position.y = 0.26 + Math.sin(dFreq + Math.PI) * 0.022;
          }
          break;
        }
        case 'spin': {
          groupRef.current.rotation.y += 0.11;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -1.0, 0.15);
            rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 1.0, 0.15);
            leftArmRef.current.rotation.x = 0;
            rightArmRef.current.rotation.x = 0;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 4) * 0.3;
            rightForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 4 + Math.PI) * 0.3;
          }
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 6) * 0.1;
          bodyRef.current.position.y = Math.sin(jp * Math.PI * 2) * 0.03;
          break;
        }
      }
    }

    // Mood animations
    switch (m) {
      case 'idle': {
        const breathA = Math.sin(t * 1.3) * 0.02;
        bodyRef.current.position.y = breathA;
        headRef.current.position.y = 0.58 + breathA * 0.5;
        groupRef.current.rotation.z = Math.sin(t * 0.65) * 0.035;
        headRef.current.rotation.z = Math.sin(t * 0.55 + 1.2) * 0.025;
        headRef.current.rotation.y = Math.sin(t * 0.4 + 0.5) * 0.02;
        if (leftArmRef.current && rightArmRef.current) {
          leftArmRef.current.rotation.z = -0.15 + Math.sin(t * 0.75) * 0.045;
          rightArmRef.current.rotation.z = 0.15 - Math.sin(t * 0.75 + 0.8) * 0.045;
          leftArmRef.current.rotation.x = 0.1 + Math.sin(t * 0.6 + 0.3) * 0.03;
          rightArmRef.current.rotation.x = 0.1 + Math.sin(t * 0.55) * 0.03;
        }
        if (leftForearmRef.current && rightForearmRef.current) {
          leftForearmRef.current.rotation.x = Math.sin(t * 0.9) * 0.07;
          rightForearmRef.current.rotation.x = Math.sin(t * 0.85 + 0.6) * 0.07;
        }
        if (leftShoulderRef.current && rightShoulderRef.current) {
          const sBreath = Math.sin(t * 1.3) * 0.006;
          leftShoulderRef.current.position.y = 0.26 + sBreath;
          rightShoulderRef.current.position.y = 0.26 + sBreath;
        }
        if (leftLegRef.current && rightLegRef.current) {
          const wShift = Math.sin(t * 0.5) * 0.007;
          leftLegRef.current.position.y = -0.52 + wShift;
          rightLegRef.current.position.y = -0.52 - wShift;
        }
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.1 + Math.sin(t * 1.0) * 0.04;
          mouthRef.current.scale.y = 0.7;
          mouthRef.current.position.y = -0.1;
        }
        break;
      }
      case 'focused': {
        const fBreath = Math.sin(t * 1.8) * 0.012;
        bodyRef.current.position.y = fBreath;
        headRef.current.rotation.y = Math.sin(t * 0.3) * 0.01;
        headRef.current.rotation.z = Math.sin(t * 0.25 + 0.5) * 0.01;
        groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.012;
        if (mouthRef.current) {
          mouthRef.current.scale.x = 0.85;
          mouthRef.current.scale.y = 0.45;
          mouthRef.current.position.y = -0.1;
        }
        break;
      }
      case 'happy': {
        if (t < 1.4) {
          const p = t / 1.4;
          const jumpH = Math.sin(p * Math.PI) * 0.38;
          const ss = Math.sin(p * Math.PI);
          bodyRef.current.scale.y = 1 + ss * 0.1;
          bodyRef.current.scale.x = 1 - ss * 0.06;
          groupRef.current.position.y = Math.max(0, jumpH);
          groupRef.current.rotation.y = p * Math.PI * 0.3;
          if (leftArmRef.current && rightArmRef.current) {
            const armUp = Math.min(1, p * 1.8);
            leftArmRef.current.rotation.z = -0.15 - armUp * 0.8;
            rightArmRef.current.rotation.z = 0.15 + armUp * 0.8;
            leftArmRef.current.rotation.x = 0;
            rightArmRef.current.rotation.x = 0;
          }
          if (leftShoulderRef.current && rightShoulderRef.current) {
            leftShoulderRef.current.position.y = 0.26 + p * 0.02;
            rightShoulderRef.current.position.y = 0.26 + p * 0.02;
          }
        }
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.5;
          mouthRef.current.scale.y = 1.2;
          mouthRef.current.position.y = -0.11;
        }
        break;
      }
      case 'disappointed': {
        if (t < 2.0) {
          const p = Math.min(1, t / 2.0);
          const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
          headRef.current.rotation.x = lerp(headRef.current.rotation.x, eased * 0.24, 0.08);
          if (leftShoulderRef.current && rightShoulderRef.current) {
            const shoulderTilt = eased * 0.08;
            leftShoulderRef.current.rotation.z = shoulderTilt;
            rightShoulderRef.current.rotation.z = shoulderTilt;
          }
        }
        bodyRef.current.position.y = lerp(bodyRef.current.position.y, -0.008, 0.12);
        if (leftArmRef.current && rightArmRef.current) {
          leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.1, 0.12);
          rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.1, 0.12);
          leftArmRef.current.rotation.x = lerp(leftArmRef.current.rotation.x, 0.08, 0.12);
          rightArmRef.current.rotation.x = lerp(rightArmRef.current.rotation.x, 0.08, 0.12);
        }
        if (mouthRef.current) {
          mouthRef.current.scale.x = 0.75;
          mouthRef.current.scale.y = 0.3;
          mouthRef.current.position.y = -0.1;
        }
        break;
      }
      case 'victory': {
        if (t < 2.8) {
          const p = t / 2.8;
          const jumpH = Math.sin(p * Math.PI) * 0.6;
          groupRef.current.position.y = Math.max(0, jumpH);
          groupRef.current.rotation.y += 0.065;
          if (leftArmRef.current && rightArmRef.current) {
            const arm = Math.min(1, p * 2.5);
            leftArmRef.current.rotation.z = -0.15 - arm * 1.1;
            rightArmRef.current.rotation.z = 0.15 + arm * 1.1;
            leftArmRef.current.rotation.x = -arm * 0.3;
            rightArmRef.current.rotation.x = -arm * 0.3;
          }
          if (leftShoulderRef.current && rightShoulderRef.current) {
            leftShoulderRef.current.position.y = 0.26 + (t / 2.8) * 0.03;
            rightShoulderRef.current.position.y = 0.26 + (t / 2.8) * 0.03;
          }
        }
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.6;
          mouthRef.current.scale.y = 1.5;
          mouthRef.current.position.y = -0.11;
        }
        break;
      }
    }

    if (m !== 'disappointed') {
      groupRef.current.rotation.x = lerp(groupRef.current.rotation.x, 0, 0.1);
    }

    // ── Ambient idle behaviors ─────────────────────────────
    // Only schedule when fully at rest (no reaction, not walking, idle mood)
    if (jumpTimer.current < 0 && !isWalkingRef.current && moodRef.current === 'idle') {
      idleSeqTimerRef.current -= delta;
      if (idleSeqTimerRef.current <= 0 && ambientPhaseRef.current < 0) {
        const pool: string[] = ['turnAround', 'lookAround', 'stretch', 'shrug'];
        if (activeCapeRef.current) { pool.push('capeWhoosh'); pool.push('capeWhoosh'); }
        if (activeHatRef.current) pool.push('hatTip');
        ambientTypeRef.current = pool[Math.floor(Math.random() * pool.length)];
        const durMap: Record<string, number> = {
          turnAround: 6, lookAround: 3.5, stretch: 3,
          shrug: 2.5, capeWhoosh: 5, hatTip: 3,
        };
        ambientDurRef.current = durMap[ambientTypeRef.current] ?? 3;
        ambientPhaseRef.current = 0;
        idleSeqTimerRef.current = 60 + Math.random() * 60;
      }
    }
    // If a reaction fires, cancel ambient animation
    if (jumpTimer.current >= 0 && ambientPhaseRef.current >= 0) {
      ambientPhaseRef.current = -1;
    }

    // ── Run ambient animation ───────────────────────────────
    if (ambientPhaseRef.current >= 0 && jumpTimer.current < 0 && !isWalkingRef.current) {
      ambientPhaseRef.current += delta / ambientDurRef.current;
      if (ambientPhaseRef.current > 1) {
        ambientPhaseRef.current = -1;
      } else {
        const ap = ambientPhaseRef.current;
        // Ease-in / ease-out envelope: 0→1→0 over animation duration
        const ease = Math.sin(ap * Math.PI);
        switch (ambientTypeRef.current) {

          // ── Slow 360° catwalk turn ─────────────────────────
          case 'turnAround': {
            // Slow incremental turn — 2π over full duration
            const speed = (Math.PI * 2) / ambientDurRef.current;
            groupRef.current.rotation.y += speed * delta;
            // Light walk sway while turning
            const tf = Math.PI * 2.5;
            if (leftLegRef.current && rightLegRef.current) {
              leftLegRef.current.rotation.x = Math.sin(t * tf) * 0.22;
              rightLegRef.current.rotation.x = -Math.sin(t * tf) * 0.22;
            }
            if (leftArmRef.current && rightArmRef.current) {
              leftArmRef.current.rotation.x = -Math.sin(t * tf) * 0.25;
              rightArmRef.current.rotation.x = Math.sin(t * tf) * 0.25;
            }
            // Confident chin-up near midway
            headRef.current.rotation.x = -ease * 0.12;
            break;
          }

          // ── Curious look around ────────────────────────────
          case 'lookAround': {
            const cycle = ap * Math.PI * 2.5;
            headRef.current.rotation.y = Math.sin(cycle) * 0.6;
            headRef.current.rotation.x = Math.sin(cycle * 0.6 + 0.8) * 0.18;
            headRef.current.rotation.z = Math.sin(cycle * 0.4) * 0.1;
            // Slight body follow
            if (bodyRef.current) bodyRef.current.position.y = Math.sin(ap * Math.PI) * 0.01;
            break;
          }

          // ── Big stretch ────────────────────────────────────
          case 'stretch': {
            if (leftArmRef.current && rightArmRef.current) {
              leftArmRef.current.rotation.z = -0.15 - ease * 1.7;
              rightArmRef.current.rotation.z = 0.15 + ease * 1.7;
              leftArmRef.current.rotation.x = -ease * 0.45;
              rightArmRef.current.rotation.x = -ease * 0.45;
            }
            if (leftForearmRef.current && rightForearmRef.current) {
              leftForearmRef.current.rotation.x = -ease * 0.35;
              rightForearmRef.current.rotation.x = -ease * 0.35;
            }
            headRef.current.rotation.x = -ease * 0.22;
            bodyRef.current.position.y = ease * 0.04;
            bodyRef.current.scale.y = 1 + ease * 0.06;
            // Slight yawn tilt
            headRef.current.rotation.z = Math.sin(ap * Math.PI * 3) * 0.08;
            break;
          }

          // ── Exaggerated shrug ──────────────────────────────
          case 'shrug': {
            if (leftArmRef.current && rightArmRef.current) {
              leftArmRef.current.rotation.z = -0.15 - ease * 0.9;
              rightArmRef.current.rotation.z = 0.15 + ease * 0.9;
              leftArmRef.current.rotation.x = ease * 0.15;
              rightArmRef.current.rotation.x = ease * 0.15;
            }
            if (leftForearmRef.current && rightForearmRef.current) {
              leftForearmRef.current.rotation.z = ease * 0.55;
              rightForearmRef.current.rotation.z = -ease * 0.55;
            }
            if (leftShoulderRef.current && rightShoulderRef.current) {
              leftShoulderRef.current.position.y = 0.26 + ease * 0.05;
              rightShoulderRef.current.position.y = 0.26 + ease * 0.05;
            }
            // Exaggerated head waggle
            headRef.current.rotation.z = Math.sin(ap * Math.PI * 3) * 0.18;
            headRef.current.rotation.y = Math.sin(ap * Math.PI * 2) * 0.1;
            break;
          }

          // ── Cape whoosh (slow spin + cape toss) ────────────
          case 'capeWhoosh': {
            // First quarter: turn around to show cape
            // Middle: hold showing back + cape swoosh
            // Last quarter: turn back to front
            const halfPI = Math.PI;
            if (ap < 0.25) {
              groupRef.current.rotation.y = lerp(0, halfPI, ap / 0.25);
            } else if (ap < 0.75) {
              groupRef.current.rotation.y = lerp(halfPI, halfPI * 3, (ap - 0.25) / 0.5);
              // Cape group swoosh while showing back
              if (capeGroupRef.current) {
                const capePhase = (ap - 0.25) / 0.5;
                capeGroupRef.current.rotation.x = Math.sin(capePhase * Math.PI * 2) * 0.35;
                capeGroupRef.current.rotation.z = Math.sin(capePhase * Math.PI * 3) * 0.18;
              }
              // Arms flair outward
              if (leftArmRef.current && rightArmRef.current) {
                const mid = Math.sin(((ap - 0.25) / 0.5) * Math.PI);
                leftArmRef.current.rotation.z = -0.15 - mid * 0.8;
                rightArmRef.current.rotation.z = 0.15 + mid * 0.8;
              }
            } else {
              groupRef.current.rotation.y = lerp(halfPI * 3, Math.PI * 2, (ap - 0.75) / 0.25);
              if (capeGroupRef.current) {
                capeGroupRef.current.rotation.x = lerp(capeGroupRef.current.rotation.x, 0, 0.1);
                capeGroupRef.current.rotation.z = lerp(capeGroupRef.current.rotation.z, 0, 0.1);
              }
            }
            break;
          }

          // ── Hat tip ────────────────────────────────────────
          case 'hatTip': {
            // Raise → hold → lower
            const raise = ap < 0.35 ? ap / 0.35 : ap < 0.65 ? 1 : 1 - (ap - 0.65) / 0.35;
            if (rightArmRef.current) {
              rightArmRef.current.rotation.z = 0.15 + raise * 1.4;
              rightArmRef.current.rotation.x = -raise * 0.65;
            }
            if (rightForearmRef.current) {
              rightForearmRef.current.rotation.x = -raise * 0.45;
            }
            // Charming head tilt
            headRef.current.rotation.z = -raise * 0.12;
            headRef.current.rotation.y = raise * 0.1;
            break;
          }
        }
      }
    }
  });

  // Boy hair: short, spiky
  // Girl hair: longer with side tufts
  const isGirl = gender === 'girl';
  // Body shape: boy slightly wider, girl default — human proportions
  const bodyW = isGirl ? 0.40 : 0.43;
  const bodyH = isGirl ? 0.58 : 0.60;

  return (
    <group ref={groupRef} position={[0, -0.05, 0]} scale={0.78}>

      {/* ══ TRAIL ════════════════════════════════════════ */}
      {activeTrail && <TrailMesh trail={activeTrail} t={frameT} />}

      {/* ══ TOON OUTLINE — BackSide meshes for dark bg ══ */}
      {/* These slightly oversized BackSide meshes create a crisp edge           */}
      {/* outline visible against any dark background. They complement the       */}
      {/* CSS drop-shadow filter (which handles the outer glow / soft halo).     */}
      {/* Head outline — moved to headRef group below so it follows breathing */}
      {/* (was here as a sibling, caused forehead bump during breathing)      */}
      {/* Torso */}
      <mesh scale={[1.08, 1.06, 1.09]}>
        <cylinderGeometry args={[bodyW * 0.46, bodyW * 0.50, bodyH * 0.75, 10]} />
        <meshBasicMaterial color="#ddeeff" side={THREE.BackSide} transparent opacity={0.17} />
      </mesh>
      {/* Left leg */}
      <mesh position={[-0.11, -0.52, 0.015]} scale={1.08}>
        <cylinderGeometry args={[0.072, 0.082, 0.52, 6]} />
        <meshBasicMaterial color="#ddeeff" side={THREE.BackSide} transparent opacity={0.17} />
      </mesh>
      {/* Right leg */}
      <mesh position={[0.11, -0.52, 0.015]} scale={1.08}>
        <cylinderGeometry args={[0.072, 0.082, 0.52, 6]} />
        <meshBasicMaterial color="#ddeeff" side={THREE.BackSide} transparent opacity={0.17} />
      </mesh>

      {/* ══ CAPE (behind body) ═══════════════════════════ */}
      <group ref={capeGroupRef}>
        {activeCape && <CapeMesh cape={activeCape} t={frameT} />}
      </group>

      {/* ══ BODY — rounded torso ═══════════════════════ */}
<group ref={bodyRef} position={[0, 0, 0]}>
  {/* Main torso cylinder — rounded sides */}
  <mesh>
    <cylinderGeometry args={[bodyW * 0.46, bodyW * 0.50, bodyH * 0.75, 10]} />
    <meshStandardMaterial
      color={actualBodyColor}
      emissive={skinEmissive || '#000000'}
      emissiveIntensity={skinEmissiveIntensity}
      roughness={0.68}
      metalness={0.04}
    />
  </mesh>
  {/* Chest — subtle forward volume */}
  <mesh position={[0, 0.08, 0.04]} scale={[bodyW * 2.2, 0.70, 0.85]}>
    <sphereGeometry args={[0.14, 10, 8]} />
    <meshStandardMaterial
      color={actualBodyColor}
      emissive={skinEmissive || '#000000'}
      emissiveIntensity={skinEmissiveIntensity}
      roughness={0.68}
      metalness={0.04}
    />
  </mesh>
  {/* Hip area — slightly wider at bottom */}
  <mesh position={[0, -0.18, 0]} scale={[bodyW * 2.4, 0.55, 0.92]}>
    <sphereGeometry args={[0.14, 10, 8]} />
    <meshStandardMaterial
      color={actualBodyColor}
      emissive={skinEmissive || '#000000'}
      emissiveIntensity={skinEmissiveIntensity}
      roughness={0.68}
      metalness={0.04}
    />
  </mesh>
</group>


{/* ── Shirt collar — rounded ring instead of boxes ─── */}
{activeTop && (
  <mesh position={[0, 0.33, 0]} rotation={[0.1, 0, 0]}>
    <torusGeometry args={[0.10, 0.022, 6, 12]} />
    <meshStandardMaterial color={actualBodyAccent} roughness={0.6} />
  </mesh>
)}

{/* ── Gombok ────────────────────────────────────── */}
{[0.18, 0.08, -0.02].map((y, i) => (
  <mesh key={i} position={[0, y, 0.145]}>
    <cylinderGeometry args={[0.012, 0.012, 0.008, 8]} />
    <meshStandardMaterial color={actualBodyAccent} roughness={0.4} metalness={0.3} />
  </mesh>
))}

{/* ── Bal zseb ──────────────────────────────────── */}
<mesh position={[-0.10, 0.05, 0.145]}>
  <boxGeometry args={[0.072, 0.065, 0.008]} />
  <meshStandardMaterial color={actualBodyColor} roughness={0.72} />
</mesh>
{/* Bal zseb szegély */}
<mesh position={[-0.10, 0.05, 0.148]}>
  <boxGeometry args={[0.075, 0.068, 0.004]} />
  <meshStandardMaterial color={actualBodyAccent} roughness={0.65} transparent opacity={0.5} />
</mesh>

{/* ── Jobb zseb ─────────────────────────────────── */}
<mesh position={[0.10, 0.05, 0.145]}>
  <boxGeometry args={[0.072, 0.065, 0.008]} />
  <meshStandardMaterial color={actualBodyColor} roughness={0.72} />
</mesh>
{/* Jobb zseb szegély */}
<mesh position={[0.10, 0.05, 0.148]}>
  <boxGeometry args={[0.075, 0.068, 0.004]} />
  <meshStandardMaterial color={actualBodyAccent} roughness={0.65} transparent opacity={0.5} />
</mesh>

{/* ── Nadrág öv — henger gyűrű ─────────────────── */}
<mesh position={[0, -0.26, 0]} rotation={[Math.PI / 2, 0, 0]}>
  <cylinderGeometry args={[bodyW * 0.52, bodyW * 0.52, 0.018, 16, 1, true]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.78} side={2} />
</mesh>
{/* Övcsat — lekerekített lapos korong */}
<mesh position={[0, -0.256, bodyW * 0.52]} rotation={[Math.PI / 2, 0, 0]}>
  <cylinderGeometry args={[0.020, 0.020, 0.006, 12]} />
  <meshStandardMaterial color="#9a8060" roughness={0.3} metalness={0.6} />
</mesh>
{/* Övcsat belső keret (négyzetes torus) */}
<mesh position={[0, -0.256, bodyW * 0.52 + 0.004]} rotation={[0, 0, Math.PI / 4]}>
  <torusGeometry args={[0.011, 0.003, 4, 4]} />
  <meshStandardMaterial color="#d4aa70" roughness={0.2} metalness={0.8} />
</mesh>

      {/* ══ SHOULDERS ══════════════════════════════════════ */}
      <mesh ref={leftShoulderRef} position={[-0.24, 0.26, 0]}>
        <sphereGeometry args={[0.085, 8, 6]} />
        <meshStandardMaterial
          color={actualBodyColor}
          emissive={skinEmissive || '#000000'}
          emissiveIntensity={skinEmissiveIntensity}
          roughness={0.7}
          metalness={0.04}
        />
      </mesh>
      <mesh ref={rightShoulderRef} position={[0.24, 0.26, 0]}>
        <sphereGeometry args={[0.085, 8, 6]} />
        <meshStandardMaterial
          color={actualBodyColor}
          emissive={skinEmissive || '#000000'}
          emissiveIntensity={skinEmissiveIntensity}
          roughness={0.7}
          metalness={0.04}
        />
      </mesh>

      {/* ══ HEAD GROUP (includes neck so both move together) ═══ */}
      <group ref={headRef} position={[0, 0.58, 0]}>
        {/* Head outline — inside headRef so it follows breathing */}
        <mesh scale={1.095}>
          <sphereGeometry args={[0.18, 12, 8]} />
          <meshBasicMaterial color="#ddeeff" side={THREE.BackSide} transparent opacity={0.22} />
        </mesh>
        {/* Neck — inside headRef so it follows head movement */}
        <mesh position={[0, -0.18, 0]}>
          <cylinderGeometry args={[0.07, 0.085, 0.20, 8]} />
          <meshStandardMaterial
            color={actualSkinColor}
            emissive={skinEmissive || '#000000'}
            emissiveIntensity={skinEmissiveIntensity * 0.3}
            roughness={0.6}
            metalness={0.02}
          />
        </mesh>
        {/* Head */}
        <mesh>
          <sphereGeometry args={[0.18, 16, 12]} />
          <meshStandardMaterial
            color={actualSkinColor}
            emissive={skinEmissive || '#000000'}
            emissiveIntensity={skinEmissiveIntensity * 0.5}
            roughness={0.55}
            metalness={0.02}
          />
        </mesh>
{/* Chin */}
<mesh position={[0, -0.12, 0.05]} scale={[0.65, 0.32, 0.60]}>
  <sphereGeometry args={[0.10, 10, 6]} />
  <meshStandardMaterial color={skinDark} roughness={0.7} metalness={0} />
</mesh>

{/* ── ARCCSONT bal ──────────────────────────── */}
<mesh position={[-0.10, -0.03, 0.155]} scale={[0.45, 0.35, 0.28]}>
  <sphereGeometry args={[0.055, 8, 6]} />
  <meshStandardMaterial color={actualSkinColor} roughness={0.58} metalness={0.01} />
</mesh>

{/* ── ARCCSONT jobb ─────────────────────────── */}
<mesh position={[0.10, -0.03, 0.155]} scale={[0.45, 0.35, 0.28]}>
  <sphereGeometry args={[0.055, 8, 6]} />
  <meshStandardMaterial color={actualSkinColor} roughness={0.58} metalness={0.01} />
</mesh>

{/* ── HOMLOK enyhe kiemelkedés ──────────────── */}
<mesh position={[0, 0.06, 0.165]} scale={[0.70, 0.22, 0.12]}>
  <sphereGeometry args={[0.09, 8, 6]} />
  <meshStandardMaterial color={actualSkinColor} roughness={0.55} metalness={0.01} />
</mesh>

        {/* Face features (eyes, mouth, blush) */}
        <FaceFeatures
          face={activeFace || null}
          skinColor={actualSkinColor}
          mouthRef={mouthRef}
          leftLidRef={leftLidRef}
          rightLidRef={rightLidRef}
          leftIrisRef={leftIrisRef}
          rightIrisRef={rightIrisRef}
          leftBrowRef={leftBrowRef}
          rightBrowRef={rightBrowRef}
        />

        {/* Glasses on face */}
        {activeGlasses && <GlassesMesh glasses={activeGlasses} />}

        {/* ── HAIR ─────────────────────────────────── */}
        {isGirl ? (
          /* Girl: long hair — dome cap + side curtains + fringe */
          <>
            {/* Main cap — top half of head only, pulled back */}
            <mesh position={[0, 0.02, -0.02]} scale={[1.07, 1.05, 1.02]}>
              <sphereGeometry args={[0.18, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.48]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Back volume */}
            <mesh position={[0, -0.02, -0.06]} scale={[1.04, 1.08, 0.95]}>
              <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Left long curtain — pulled back, thinner */}
            <mesh position={[-0.16, -0.10, -0.02]} scale={[0.36, 1.1, 0.42]}>
              <sphereGeometry args={[0.13, 10, 8]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Right long curtain — pulled back, thinner */}
            <mesh position={[0.16, -0.10, -0.02]} scale={[0.36, 1.1, 0.42]}>
              <sphereGeometry args={[0.13, 10, 8]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Front fringe — small, above eyebrows only */}
            <mesh position={[0, 0.10, 0.16]} rotation={[0.65, 0, 0]} scale={[1.05, 0.28, 0.32]}>
              <sphereGeometry args={[0.09, 8, 6]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
          </>
        ) : (
          /* Boy: clean short cap + small fringe */
          <>
            {/* Main cap — top of head, not covering face */}
            <mesh position={[0, 0.02, -0.02]} scale={[1.07, 1.05, 1.02]}>
              <sphereGeometry args={[0.18, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.44]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
            {/* Back volume — gives shape */}
            <mesh position={[0, 0, -0.04]} scale={[1.05, 1.04, 0.92]}>
              <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.48]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
            {/* Front fringe strip — smaller, above eyebrows */}
            <mesh position={[0, 0.10, 0.15]} rotation={[0.70, 0, 0]} scale={[0.95, 0.25, 0.30]}>
              <sphereGeometry args={[0.09, 8, 6]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
          </>
        )}
{/* ── NOSE — small bridge + tip ────────────── */}
<group position={[0, -0.01, 0.18]}>
  {/* Nose bridge */}
  <mesh position={[0, 0.015, 0]} scale={[0.35, 0.55, 0.35]}>
    <sphereGeometry args={[0.030, 8, 6]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.50} />
  </mesh>
  {/* Nose tip — slightly warmer/darker */}
  <mesh position={[0, -0.008, 0.006]} scale={[0.48, 0.35, 0.38]}>
    <sphereGeometry args={[0.030, 8, 6]} />
    <meshStandardMaterial color={skinDark} roughness={0.55} transparent opacity={0.7} />
  </mesh>
</group>
        {/* ── BAL FÜL ───────────────────────────────── */}
<group position={[-0.178, 0.01, 0]}>
  <mesh scale={[0.38, 0.62, 0.22]}>
    <sphereGeometry args={[0.10, 10, 8]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.65} />
  </mesh>
  <mesh position={[0.018, 0, 0.005]} scale={[0.22, 0.38, 0.18]}>
    <sphereGeometry args={[0.10, 8, 6]} />
    <meshStandardMaterial color={skinDark} roughness={0.75} />
  </mesh>
  <mesh position={[0.025, -0.018, 0.022]} scale={[0.18, 0.22, 0.15]}>
    <sphereGeometry args={[0.06, 6, 5]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.65} />
  </mesh>
</group>

{/* ── JOBB FÜL ──────────────────────────────── */}
<group position={[0.178, 0.01, 0]}>
  <mesh scale={[0.38, 0.62, 0.22]}>
    <sphereGeometry args={[0.10, 10, 8]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.65} />
  </mesh>
  <mesh position={[-0.018, 0, 0.005]} scale={[0.22, 0.38, 0.18]}>
    <sphereGeometry args={[0.10, 8, 6]} />
    <meshStandardMaterial color={skinDark} roughness={0.75} />
  </mesh>
  <mesh position={[-0.025, -0.018, 0.022]} scale={[0.18, 0.22, 0.15]}>
    <sphereGeometry args={[0.06, 6, 5]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.65} />
  </mesh>
</group>
        {/* Hat on top of head */}
        {activeHat && <HatMesh hat={activeHat} skinColor={actualSkinColor} />}
      </group>

      {/* ══ LEFT ARM (shoulder→elbow→hand) ══════════════════ */}
      <group ref={leftArmRef} position={[-0.28, 0.22, 0]} rotation={[0.12, 0, -0.15]}>
{/* Upper arm */}
<mesh position={[0, -0.12, 0]}>
  <cylinderGeometry args={[0.045, 0.052, 0.24, 6]} />
  <meshStandardMaterial
    color={actualLimbColor}
    emissive={skinEmissive || '#000000'}
    emissiveIntensity={skinEmissiveIntensity * 0.4}
    roughness={0.62}
    metalness={0.02}
  />
</mesh>
{/* Könyök bump */}
<mesh position={[0, -0.24, -0.01]} scale={[0.72, 0.52, 0.62]}>
  <sphereGeometry args={[0.052, 8, 6]} />
  <meshStandardMaterial
    color={actualLimbColor}
    emissive={skinEmissive || '#000000'}
    emissiveIntensity={skinEmissiveIntensity * 0.4}
    roughness={0.68}
    metalness={0.02}
  />
</mesh>
        {/* Forearm + hand (pivot = elbow at y=-0.24) */}
        <group ref={leftForearmRef} position={[0, -0.24, 0]}>
          <mesh position={[0, -0.09, 0]}>
            <cylinderGeometry args={[0.04, 0.045, 0.18, 6]} />
            <meshStandardMaterial
              color={actualLimbColor}
              emissive={skinEmissive || '#000000'}
              emissiveIntensity={skinEmissiveIntensity * 0.4}
              roughness={0.62}
              metalness={0.02}
            />
          </mesh>
{/* ── BAL KÉZFEJ & UJJAK ───────────────────── */}
<group position={[0, -0.20, 0]}>
  {/* Tenyér */}
  <mesh scale={[1.1, 0.72, 0.62]}>
    <sphereGeometry args={[0.058, 10, 8]} />
    <meshStandardMaterial color={actualHandColor} emissive={skinEmissive || '#000000'} emissiveIntensity={skinEmissiveIntensity * 0.3} roughness={0.55} />
  </mesh>
  {/* Mutatóujj */}
  <mesh position={[-0.030, -0.062, 0.008]} rotation={[0.15, 0, 0.08]}>
    <cylinderGeometry args={[0.013, 0.016, 0.072, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Középső ujj */}
  <mesh position={[-0.010, -0.068, 0.008]} rotation={[0.12, 0, 0.02]}>
    <cylinderGeometry args={[0.014, 0.016, 0.078, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Gyűrűsujj */}
  <mesh position={[0.012, -0.064, 0.008]} rotation={[0.14, 0, -0.05]}>
    <cylinderGeometry args={[0.013, 0.015, 0.072, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Kisujj */}
  <mesh position={[0.032, -0.056, 0.006]} rotation={[0.18, 0, -0.12]}>
    <cylinderGeometry args={[0.011, 0.013, 0.058, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Hüvelykujj */}
  <mesh position={[-0.052, -0.022, 0.010]} rotation={[0.1, 0, -0.75]}>
    <cylinderGeometry args={[0.013, 0.016, 0.056, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
</group>
        </group>
      </group>

      {/* ══ RIGHT ARM (shoulder→elbow→hand) ══════════════════ */}
      <group ref={rightArmRef} position={[0.28, 0.22, 0]} rotation={[0.12, 0, 0.15]}>
        {/* Upper arm */}
        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.045, 0.052, 0.24, 6]} />
          <meshStandardMaterial
            color={actualLimbColor}
            emissive={skinEmissive || '#000000'}
            emissiveIntensity={skinEmissiveIntensity * 0.4}
            roughness={0.62}
            metalness={0.02}
          />
        </mesh>
        {/* Forearm + hand (pivot = elbow at y=-0.24) */}
        <group ref={rightForearmRef} position={[0, -0.24, 0]}>
          <mesh position={[0, -0.09, 0]}>
            <cylinderGeometry args={[0.04, 0.045, 0.18, 6]} />
            <meshStandardMaterial
              color={actualLimbColor}
              emissive={skinEmissive || '#000000'}
              emissiveIntensity={skinEmissiveIntensity * 0.4}
              roughness={0.62}
              metalness={0.02}
            />
          </mesh>
{/* ── JOBB KÉZFEJ & UJJAK ──────────────────── */}
<group position={[0, -0.20, 0]}>
  {/* Tenyér */}
  <mesh scale={[1.1, 0.72, 0.62]}>
    <sphereGeometry args={[0.058, 10, 8]} />
    <meshStandardMaterial color={actualHandColor} emissive={skinEmissive || '#000000'} emissiveIntensity={skinEmissiveIntensity * 0.3} roughness={0.55} />
  </mesh>
  {/* Mutatóujj */}
  <mesh position={[-0.030, -0.062, 0.008]} rotation={[0.15, 0, 0.08]}>
    <cylinderGeometry args={[0.013, 0.016, 0.072, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Középső ujj */}
  <mesh position={[-0.010, -0.068, 0.008]} rotation={[0.12, 0, 0.02]}>
    <cylinderGeometry args={[0.014, 0.016, 0.078, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Gyűrűsujj */}
  <mesh position={[0.012, -0.064, 0.008]} rotation={[0.14, 0, -0.05]}>
    <cylinderGeometry args={[0.013, 0.015, 0.072, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Kisujj */}
  <mesh position={[0.032, -0.056, 0.006]} rotation={[0.18, 0, -0.12]}>
    <cylinderGeometry args={[0.011, 0.013, 0.058, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Hüvelykujj — tükrözve */}
  <mesh position={[0.052, -0.022, 0.010]} rotation={[0.1, 0, 0.75]}>
    <cylinderGeometry args={[0.013, 0.016, 0.056, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
</group>
        </group>
      </group>

      {/* ══ LEFT LEG ════════════════════════════════════════ */}
<mesh ref={leftLegRef} position={[-0.11, -0.52, 0.015]}>
  <cylinderGeometry args={[0.068, 0.086, 0.52, 10]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.82} />
</mesh>
{/* Bal térd bump */}
<mesh position={[-0.11, -0.58, 0.038]} scale={[0.68, 0.48, 0.52]}>
  <sphereGeometry args={[0.075, 8, 6]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.85} />
</mesh>
   {/* Bal talp */}
<mesh position={[-0.11, -0.795, 0.05]}>
  <boxGeometry args={[0.13, 0.055, 0.22]} />
  <meshStandardMaterial color={activeShoe?.sole || '#222222'} roughness={0.95} />
</mesh>
{/* Bal cipőfelsőrész */}
<mesh position={[-0.11, -0.755, 0.04]} scale={[1.0, 0.72, 0.88]}>
  <sphereGeometry args={[0.075, 10, 7]} />
  <meshStandardMaterial color={actualShoeColor} roughness={0.75} />
</mesh>
{/* Bal cipőorr */}
<mesh position={[-0.11, -0.768, 0.115]} scale={[0.88, 0.52, 0.48]}>
  <sphereGeometry args={[0.065, 8, 6]} />
  <meshStandardMaterial color={actualShoeColor} roughness={0.72} />
</mesh>
{/* Bal cipőfűző */}
<mesh position={[-0.11, -0.748, 0.042]}>
  <boxGeometry args={[0.072, 0.008, 0.072]} />
  <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
</mesh>
{/* Bal cipőfűző kereszt */}
<mesh position={[-0.11, -0.748, 0.042]} rotation={[0, Math.PI / 2, 0]}>
  <boxGeometry args={[0.072, 0.008, 0.022]} />
  <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
</mesh>

      {/* ══ RIGHT LEG ═══════════════════════════════════════ */}
<mesh ref={rightLegRef} position={[0.11, -0.52, -0.015]}>
  <cylinderGeometry args={[0.068, 0.086, 0.52, 10]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.82} />
</mesh>
{/* Jobb térd bump */}
<mesh position={[0.11, -0.58, 0.038]} scale={[0.68, 0.48, 0.52]}>
  <sphereGeometry args={[0.075, 8, 6]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.85} />
</mesh>
{/* Jobb talp */}
<mesh position={[0.11, -0.795, 0.05]}>
  <boxGeometry args={[0.13, 0.055, 0.22]} />
  <meshStandardMaterial color={activeShoe?.sole || '#222222'} roughness={0.95} />
</mesh>
{/* Jobb cipőfelsőrész */}
<mesh position={[0.11, -0.755, 0.04]} scale={[1.0, 0.72, 0.88]}>
  <sphereGeometry args={[0.075, 10, 7]} />
  <meshStandardMaterial color={actualShoeColor} roughness={0.75} />
</mesh>
{/* Jobb cipőorr */}
<mesh position={[0.11, -0.768, 0.115]} scale={[0.88, 0.52, 0.48]}>
  <sphereGeometry args={[0.065, 8, 6]} />
  <meshStandardMaterial color={actualShoeColor} roughness={0.72} />
</mesh>
{/* Jobb cipőfűző */}
<mesh position={[0.11, -0.748, 0.042]}>
  <boxGeometry args={[0.072, 0.008, 0.072]} />
  <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
</mesh>
{/* Jobb cipőfűző kereszt */}
<mesh position={[0.11, -0.748, 0.042]} rotation={[0, Math.PI / 2, 0]}>
  <boxGeometry args={[0.072, 0.008, 0.022]} />
  <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
</mesh>
    </group>
  );
}

export default function AvatarCompanion({
  mood = 'idle',
  isWalking = false,
  facing,
  skinColor = '#e8c9a0',
  outfitColor = '#6b8fad',
  fixed = true,
  jumpTrigger,
  gender = 'girl',
  activeSkin,
  activeFace,
  activeTop,
  activeBottom,
  activeShoe,
  activeCape,
  activeGlasses,
  activeGloves,
  activeHat,
  activeTrail,
  activeHair,
  passThrough = false,
  orbitControls = false,
}: AvatarCompanionProps) {
  const positionClass = fixed ? 'fixed z-50' : 'relative w-full h-full';
  const [avatarScale] = useState(() => fixed ? getAvatarScale() : 1);
  const [localJump, setLocalJump] = useState<{
    reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null;
    timestamp: number;
  }>({ reaction: null, timestamp: 0 });

  const effectiveJump = jumpTrigger || localJump;

  const reactions: Array<'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin'> = [
    'happy', 'surprised', 'victory', 'confused', 'laughing', 'wave', 'dance', 'spin',
  ];

  const handleClick = () => {
    const r = reactions[Math.floor(Math.random() * reactions.length)];
    setLocalJump({ reaction: r, timestamp: Date.now() });
  };

  // CSS drop-shadow: creates an automatic glow outline around all rendered pixels
  // (works because the canvas background is transparent / alpha:true)
  // Matches the active skin's emissive color for a cohesive look
  const glowCol = (activeSkin && activeSkin.id !== 'default') ? activeSkin.emissive : '#88aaff';
  const glowFilter = `drop-shadow(0 0 5px ${glowCol}60) drop-shadow(0 0 14px ${glowCol}28) drop-shadow(0 0 28px ${glowCol}10)`;

  return (
    <div
      className={`${positionClass} ${passThrough ? 'pointer-events-none' : 'pointer-events-auto cursor-pointer'} ${fixed ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' : ''}`}
      style={fixed ? {
        bottom: 'max(20px, calc(env(safe-area-inset-bottom) + 20px))',
        right: '20px',
        filter: glowFilter,
        transform: avatarScale !== 1 ? `scale(${avatarScale})` : undefined,
        transformOrigin: 'bottom right',
      } : {
        filter: glowFilter,
      }}
      onClick={passThrough ? undefined : handleClick}
    >
      <Canvas
        camera={{ position: [0, 0.15, 2.6], fov: 44 }}
        frameloop="always"
        gl={{ antialias: false, powerPreference: 'low-power', alpha: true, stencil: false }}
        style={{ background: 'transparent', ...(passThrough ? { pointerEvents: 'none' as const } : {}) }}
      >
        {/* ── LIGHTING SETUP ────────────────────────────────── */}
        {/* Ambient fill — brighter so dark clothes stay readable */}
        <hemisphereLight color="#f8f0e8" groundColor="#c0b0a0" intensity={1.1} />
        <ambientLight intensity={0.7} />
        {/* Key light — main front-left */}
        <directionalLight position={[-3, 5, 3]} intensity={0.9} color="#fff8ee" />
        {/* Front fill point light near camera — eliminates dark front faces */}
        <pointLight position={[0.3, 0.9, 2.0]} intensity={0.65} color="#fff4e8" distance={5} decay={1.8} />
        {/* Secondary fill */}
        <directionalLight position={[2, 1, -2]} intensity={0.3} color="#ccdaff" />
        {/* Under fill — prevents pitch-black legs/shoes */}
        <directionalLight position={[0, -1, 2]} intensity={0.35} color="#ffeedd" />
        {/* Strong back rim — silhouette separation against dark bg */}
        <directionalLight position={[0, 1, -3]} intensity={0.95} color="#aac8ff" />
        <directionalLight position={[-2, 0, -2]} intensity={0.45} color="#c0d8ff" />
        <directionalLight position={[2, 0.5, -2.5]} intensity={0.35} color="#b8d0ff" />
        {orbitControls && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={1.5}
            maxDistance={4.5}
            minPolarAngle={Math.PI * 0.15}
            maxPolarAngle={Math.PI * 0.85}
            target={[0, 0.15, 0]}
          />
        )}
        <Character
          mood={mood}
          isWalking={isWalking}
          facing={facing}
          skinColor={skinColor}
          outfitColor={outfitColor}
          jumpTrigger={effectiveJump}
          gender={gender}
          activeSkin={activeSkin}
          activeFace={activeFace}
          activeTop={activeTop}
          activeBottom={activeBottom}
          activeShoe={activeShoe}
          activeCape={activeCape}
          activeGlasses={activeGlasses}
          activeGloves={activeGloves}
          activeHat={activeHat}
          activeTrail={activeTrail}
          activeHair={activeHair}
        />
      </Canvas>
    </div>
  );
}
