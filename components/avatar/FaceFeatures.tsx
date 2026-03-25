'use client';
import * as THREE from 'three';
import type { FaceDef } from '@/lib/faces';

export function FaceFeatures({
  face,
  skinColor,
  mouthRef,
  leftLidRef,
  rightLidRef,
  leftIrisRef,
  rightIrisRef,
  leftBrowRef,
  rightBrowRef,
}: {
  face: FaceDef | null;
  skinColor: string;
  mouthRef: React.RefObject<THREE.Object3D | null>;
  leftLidRef: React.RefObject<THREE.Mesh | null>;
  rightLidRef: React.RefObject<THREE.Mesh | null>;
  leftIrisRef: React.RefObject<THREE.Mesh | null>;
  rightIrisRef: React.RefObject<THREE.Mesh | null>;
  leftBrowRef: React.RefObject<THREE.Object3D | null>;
  rightBrowRef: React.RefObject<THREE.Object3D | null>;
}) {
  const eyeCol   = face?.eyeColor   || '#2a2a2a';
  const mouthCol = face?.mouthColor || '#b06060';
  const eyeType   = face?.eyeType   || 'dot';
  const mouthType = face?.mouthType || 'smile';
  const skinDark  = new THREE.Color(skinColor).multiplyScalar(0.82).getStyle();

  // ── Eyebrow params ────────────────────────────────────
  const browY =
    eyeType === 'surprised' ? 0.130 :
    eyeType === 'angry'     ? 0.111 :
    eyeType === 'sad'       ? 0.112 : 0.115;

  const leftBrowRotZ =
    eyeType === 'angry'     ?  0.22 :
    eyeType === 'sad'       ? -0.15 :
    eyeType === 'surprised' ?  0.04 :
    eyeType === 'happy'     ?  0.03 : 0.05;
  const rightBrowRotZ = -leftBrowRotZ;

  const irisSize = eyeType === 'round' ? 0.028 : eyeType === 'dot' ? 0.018 : 0.024;
  const specialEye = eyeType === 'happy' || eyeType === 'x' || eyeType === 'heart' || eyeType === 'star';

  // ── Per-eye renderer — sphere-conforming pivot ────────
  // The head sphere has radius 0.18. Eyes at ±0.08 X need to be rotated
  // so they lie on the sphere surface instead of floating on a flat Z plane.
  //
  // Pivot group is placed at [0, eyeY, 0] then rotated ±Y so its local Z
  // axis points outward through the eye position on the sphere.
  // Inside the pivot, z ≈ sphere_radius means "at the surface".
  //
  // Angle: atan( eye_x / sphere_z_at_eye ) ≈ atan(0.08 / 0.156) ≈ 0.47 rad
  const EYE_PIVOT_Y = 0.04;
  const EYE_ROT_Y   = 0.44;   // radians — sphere-conforming tilt for ±0.08 X eyes

  const renderEye = (
    side: -1 | 1,
    irisRef: React.RefObject<THREE.Mesh | null>,
    lidRef:  React.RefObject<THREE.Mesh | null>,
    browRef: React.RefObject<THREE.Object3D | null>,
  ) => {
    const rotY = side * EYE_ROT_Y;
    const isWinkClosed = eyeType === 'wink' && side === -1;
    const browRotZ     = side === -1 ? leftBrowRotZ : rightBrowRotZ;
    // browY_local: brow Y offset relative to EYE_PIVOT_Y (used for positioning group)
    const browY_local  = browY - EYE_PIVOT_Y;  // ≈ 0.071–0.090
    // Specular offset toward nasal side in local space
    const sxLocal      = side * 0.006;

    return (
      // ── Pivot group: rotate outward along sphere surface ──
      <group position={[0, EYE_PIVOT_Y, 0]} rotation={[0, rotY, 0]}>

        {/* Eye white — embedded slightly inside sphere (z < sphere radius) */}
        {!specialEye && !isWinkClosed && (
          <group position={[0, 0, 0.160]}>
            <mesh scale={[0.72, 0.44, 0.14]} position={[0, -0.002, -0.001]}>
              <sphereGeometry args={[0.048, 10, 8]} />
              <meshStandardMaterial color={skinDark} roughness={0.8} />
            </mesh>
            <mesh scale={[0.72, 0.40, 0.16]}>
              <sphereGeometry args={[0.048, 10, 8]} />
              <meshStandardMaterial color="#f5f0ea" roughness={0.3} />
            </mesh>
            <mesh position={[0, 0.016, 0.004]} scale={[0.74, 0.22, 0.18]}>
              <sphereGeometry args={[0.048, 8, 6]} />
              <meshStandardMaterial color={skinColor} roughness={0.6} />
            </mesh>
            <mesh position={[0, -0.014, 0.003]} scale={[0.68, 0.14, 0.16]}>
              <sphereGeometry args={[0.048, 8, 6]} />
              <meshStandardMaterial color={skinColor} roughness={0.6} transparent opacity={0.6} />
            </mesh>
          </group>
        )}

        {/* Angry squint overlay */}
        {eyeType === 'angry' && (
          <mesh position={[0, 0.033, 0.208]}>
            <boxGeometry args={[0.094, 0.048, 0.009]} />
            <meshStandardMaterial color={skinColor} roughness={0.6} />
          </mesh>
        )}

        {/* Iris — at sphere surface (gaze animation moves .x/.y in local space) */}
        <mesh ref={irisRef} position={[0, 0, 0.176]}>
          <sphereGeometry args={[specialEye || isWinkClosed ? 0.001 : irisSize, 8, 8]} />
          <meshStandardMaterial color={eyeCol} roughness={0.3} />
        </mesh>

        {/* Pupil */}
        {!specialEye && !isWinkClosed && (
          <mesh position={[0, 0, 0.183]}>
            <sphereGeometry args={[irisSize * 0.45, 6, 6]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.4} />
          </mesh>
        )}

        {/* Happy arc — ^‿^ style eyes */}
        {eyeType === 'happy' && (
          <mesh position={[0, 0, 0.197]}>
            <torusGeometry args={[0.027, 0.009, 6, 12, Math.PI]} />
            <meshStandardMaterial color={eyeCol} roughness={0.35} />
          </mesh>
        )}

        {/* Wink closed — horizontal line */}
        {isWinkClosed && (
          <mesh position={[0, 0, 0.197]}>
            <boxGeometry args={[0.068, 0.011, 0.006]} />
            <meshStandardMaterial color={eyeCol} roughness={0.4} />
          </mesh>
        )}

        {/* X eyes */}
        {eyeType === 'x' && (
          <>
            <mesh position={[0, 0, 0.190]} rotation={[0, 0,  Math.PI / 4]}>
              <boxGeometry args={[0.058, 0.013, 0.005]} />
              <meshStandardMaterial color={eyeCol} roughness={0.4} />
            </mesh>
            <mesh position={[0, 0, 0.190]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.058, 0.013, 0.005]} />
              <meshStandardMaterial color={eyeCol} roughness={0.4} />
            </mesh>
          </>
        )}

        {/* Heart eyes */}
        {eyeType === 'heart' && (
          <>
            <mesh position={[-0.011, 0.010, 0.194]}>
              <sphereGeometry args={[0.019, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[0.011, 0.010, 0.194]}>
              <sphereGeometry args={[0.019, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.008, 0.191]} scale={[1.4, 1.15, 1]}>
              <sphereGeometry args={[0.020, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
          </>
        )}

        {/* Star eyes */}
        {eyeType === 'star' && (
          <>
            {([0, Math.PI / 4, Math.PI / 2, Math.PI * 3 / 4] as number[]).map((rot, i) => (
              <mesh key={i} position={[0, 0, 0.192]} rotation={[0, 0, rot]}>
                <boxGeometry args={[0.064, 0.013, 0.005]} />
                <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={1.0} roughness={0.1} />
              </mesh>
            ))}
            <mesh position={[0, 0, 0.196]}>
              <sphereGeometry args={[0.011, 6, 6]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.5} roughness={0.05} />
            </mesh>
          </>
        )}

        {/* Specular highlights */}
        {!isWinkClosed && eyeType !== 'happy' && eyeType !== 'x' && (
          <>
            <mesh position={[sxLocal, 0.008, 0.190]}>
              <sphereGeometry args={[0.008, 6, 6]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[sxLocal * 0.5, -0.008, 0.188]}>
              <sphereGeometry args={[0.004, 5, 5]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
            </mesh>
          </>
        )}

        {/* Eyelid (blink target) — scale.y driven by animation */}
        <mesh ref={lidRef} position={[0, 0.025, 0.178]} scale={[1, 0.01, 1]}>
          <sphereGeometry args={[0.052, 8, 4, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} side={THREE.DoubleSide} />
        </mesh>

        {/* Eyebrow — outer group positions on sphere, inner ref driven by animation */}
        <group position={[0, browY_local, 0.182]}>
          {/* browRef.position.y is animated for blink lift and mouse tracking */}
          <group ref={browRef} rotation={[0, 0, browRotZ]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <capsuleGeometry args={[0.006, 0.038, 2, 8]} />
              <meshStandardMaterial color="#5a4030" roughness={0.65} />
            </mesh>
            {/* Inner thicker head (medial/nasal end) */}
            <mesh position={[side * -0.018, 0.001, 0]}>
              <sphereGeometry args={[0.009, 6, 5]} />
              <meshStandardMaterial color="#5a4030" roughness={0.65} />
            </mesh>
          </group>
        </group>

      </group>
    );
  };

  // ── Mouth renderer — sphere-conforming pivot ─────────
  // Pivot at [0, 0, 0] rotated +X (downward tilt toward chin) so the mouth
  // surface follows the lower hemisphere of the head sphere.
  // Angle ≈ atan(0.10 / sqrt(0.18²-0.10²)) = atan(0.10/0.149) ≈ 0.59 rad → use 0.55
  // Small X rotation tilts the mouth group downward toward the chin,
  // reducing the visible gap between the flat mouth plane and the sphere surface.
  const MOUTH_ROT_X = 0.15;
  const MOUTH_Z     = 0.178; // local z — sphere surface at mouth area is ~0.150, +0.028 protrusion

  const wrapMouth = (inner: React.ReactNode) => (
    <group rotation={[MOUTH_ROT_X, 0, 0]}>
      {/* ref group — animation moves position.y to -0.10/-0.11 in pivot local space */}
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.10, 0]}>
        {inner}
      </group>
    </group>
  );

  const renderMouth = () => {
    if (mouthType === 'none') return null;

    if (mouthType === 'smile') return wrapMouth(
      <>
        <mesh position={[0, 0.012, MOUTH_Z + 0.006]} scale={[0.85, 0.45, 0.5]}>
          <sphereGeometry args={[0.038, 10, 6]} />
          <meshStandardMaterial color={mouthCol} roughness={0.45} />
        </mesh>
        <mesh position={[0, -0.006, MOUTH_Z + 0.008]} scale={[0.90, 0.42, 0.55]}>
          <sphereGeometry args={[0.038, 10, 6]} />
          <meshStandardMaterial color={mouthCol} roughness={0.42} />
        </mesh>
        <mesh position={[0, 0.003, MOUTH_Z + 0.010]}>
          <boxGeometry args={[0.055, 0.005, 0.003]} />
          <meshStandardMaterial color="#8a4040" roughness={0.6} />
        </mesh>
      </>
    );

    if (mouthType === 'grin') return wrapMouth(
      <>
        <mesh position={[0, 0.012, MOUTH_Z + 0.011]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.050, 0.011, 6, 16, Math.PI]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.014, MOUTH_Z + 0.016]}>
          <boxGeometry args={[0.076, 0.022, 0.007]} />
          <meshStandardMaterial color="#f4f0e8" roughness={0.3} />
        </mesh>
      </>
    );

    if (mouthType === 'sad') return wrapMouth(
      <mesh position={[0, -0.012, MOUTH_Z + 0.011]}>
        <torusGeometry args={[0.036, 0.010, 6, 16, Math.PI]} />
        <meshStandardMaterial color={mouthCol} roughness={0.5} />
      </mesh>
    );

    if (mouthType === 'neutral') return wrapMouth(
      <mesh position={[0, 0, MOUTH_Z + 0.007]}>
        <boxGeometry args={[0.066, 0.011, 0.009]} />
        <meshStandardMaterial color={mouthCol} roughness={0.5} />
      </mesh>
    );

    if (mouthType === 'open') return wrapMouth(
      <>
        <mesh position={[0, 0, MOUTH_Z + 0.012]} scale={[1, 0.75, 1]}>
          <torusGeometry args={[0.034, 0.014, 6, 12]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, MOUTH_Z + 0.010]}>
          <circleGeometry args={[0.028, 10]} />
          <meshStandardMaterial color="#1a0808" roughness={0.9} />
        </mesh>
      </>
    );

    if (mouthType === 'tongue') return wrapMouth(
      <>
        <mesh position={[0, 0, MOUTH_Z + 0.010]}>
          <boxGeometry args={[0.075, 0.022, 0.010]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.026, MOUTH_Z + 0.008]}>
          <sphereGeometry args={[0.026, 8, 6]} />
          <meshStandardMaterial color="#FF6B8A" roughness={0.6} />
        </mesh>
      </>
    );

    if (mouthType === 'cat') return wrapMouth(
      <>
        <mesh position={[-0.026, 0, MOUTH_Z + 0.010]} rotation={[0, 0, -0.42]}>
          <boxGeometry args={[0.034, 0.013, 0.008]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0.026, 0, MOUTH_Z + 0.010]} rotation={[0, 0, 0.42]}>
          <boxGeometry args={[0.034, 0.013, 0.008]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, MOUTH_Z + 0.010]}>
          <sphereGeometry args={[0.013, 6, 6]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
      </>
    );

    if (mouthType === 'bunny') return (
      <group rotation={[MOUTH_ROT_X, 0, 0]}>
        <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.082, 0]}>
          <mesh position={[0, 0.012, MOUTH_Z + 0.020]}>
            <sphereGeometry args={[0.018, 8, 6]} />
            <meshStandardMaterial color={mouthCol} roughness={0.4} />
          </mesh>
          <mesh position={[0, -0.018, MOUTH_Z + 0.016]}>
            <boxGeometry args={[0.008, 0.024, 0.006]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          <mesh position={[-0.014, -0.032, MOUTH_Z + 0.016]} rotation={[0, 0, 0.5]}>
            <boxGeometry args={[0.024, 0.008, 0.006]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          <mesh position={[0.014, -0.032, MOUTH_Z + 0.016]} rotation={[0, 0, -0.5]}>
            <boxGeometry args={[0.024, 0.008, 0.006]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          {/* Whiskers */}
          {([-1, 1] as const).map((wside, si) => (
            [0.005, -0.008].map((dy, di) => (
              <mesh key={`${si}-${di}`} position={[wside * 0.06, dy, MOUTH_Z + 0.013]} rotation={[0, 0, wside * (di === 0 ? -0.1 : 0.1)]}>
                <boxGeometry args={[0.06, 0.004, 0.003]} />
                <meshStandardMaterial color="#999" roughness={0.6} transparent opacity={0.5} />
              </mesh>
            ))
          ))}
        </group>
      </group>
    );

    if (mouthType === 'fangs') return wrapMouth(
      <>
        <mesh position={[0, 0, MOUTH_Z + 0.011]}>
          <boxGeometry args={[0.090, 0.028, 0.012]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        {([-0.025, 0.025] as number[]).map((fx, i) => (
          <mesh key={i} position={[fx, -0.025, MOUTH_Z + 0.011]}>
            <coneGeometry args={[0.011, 0.032, 4]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
          </mesh>
        ))}
      </>
    );

    return null;
  };

  return (
    <>
      {/* Blush — pivot-rotated to conform to sphere curvature at x=±0.12 */}
      {face?.blush && (
        <>
          {([-1, 1] as const).map((side, i) => (
            <group key={i} position={[0, 0, 0]} rotation={[0, side * 0.72, 0]}>
              <mesh position={[0, 0, 0.152]}>
                <sphereGeometry args={[0.042, 8, 6]} />
                <meshStandardMaterial color={face.blushColor || '#FF9999'} transparent opacity={0.42} roughness={0.9} />
              </mesh>
            </group>
          ))}
        </>
      )}
      {renderEye(-1, leftIrisRef,  leftLidRef,  leftBrowRef)}
      {renderEye( 1, rightIrisRef, rightLidRef, rightBrowRef)}
      {renderMouth()}
    </>
  );
}
