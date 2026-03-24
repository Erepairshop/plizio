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
    eyeType === 'surprised' ? 0.115 :
    eyeType === 'angry'     ? 0.096 :
    eyeType === 'sad'       ? 0.097 : 0.1;

  const leftBrowRotZ =
    eyeType === 'angry'     ?  0.40 :
    eyeType === 'sad'       ? -0.28 :
    eyeType === 'surprised' ?  0.05 :
    eyeType === 'happy'     ?  0.04 : 0.07;
  const rightBrowRotZ = -leftBrowRotZ;

  const irisSize = eyeType === 'round' ? 0.028 : eyeType === 'dot' ? 0.018 : 0.024;
  const specialEye = eyeType === 'happy' || eyeType === 'x' || eyeType === 'heart' || eyeType === 'star';

  // ── Per-eye renderer ──────────────────────────────────
  const renderEye = (
    side: -1 | 1,
    irisRef: React.RefObject<THREE.Mesh | null>,
    lidRef:  React.RefObject<THREE.Mesh | null>,
    browRef: React.RefObject<THREE.Object3D | null>,
  ) => {
    const x   = side * 0.08;
    const bx  = side * 0.085;
    const sx  = side === -1 ? -0.075 : 0.085;
    const isWinkClosed = eyeType === 'wink' && side === -1;
    const browRotZ = side === -1 ? leftBrowRotZ : rightBrowRotZ;

    return (
      <>
        {/* Eye white */}
        {!specialEye && !isWinkClosed && (
          <group position={[x, 0.04, 0.188]}>
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
          <mesh position={[x, 0.073, 0.234]}>
            <boxGeometry args={[0.094, 0.048, 0.009]} />
            <meshStandardMaterial color={skinColor} roughness={0.6} />
          </mesh>
        )}

        {/* Iris */}
        <mesh ref={irisRef} position={[x, 0.04, 0.215]}>
          <sphereGeometry args={[specialEye || isWinkClosed ? 0.001 : irisSize, 8, 8]} />
          <meshStandardMaterial color={eyeCol} roughness={0.3} />
        </mesh>

        {/* Pupil */}
        {!specialEye && !isWinkClosed && (
          <mesh position={[x, 0.04, 0.222]}>
            <sphereGeometry args={[irisSize * 0.45, 6, 6]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.4} />
          </mesh>
        )}

        {/* Happy arc */}
        {eyeType === 'happy' && (
          <mesh position={[x, 0.04, 0.236]}>
            <torusGeometry args={[0.027, 0.009, 6, 12, Math.PI]} />
            <meshStandardMaterial color={eyeCol} roughness={0.35} />
          </mesh>
        )}

        {/* Wink closed */}
        {isWinkClosed && (
          <mesh position={[x, 0.04, 0.236]}>
            <boxGeometry args={[0.068, 0.011, 0.006]} />
            <meshStandardMaterial color={eyeCol} roughness={0.4} />
          </mesh>
        )}

        {/* X eyes */}
        {eyeType === 'x' && (
          <>
            <mesh position={[x, 0.04, 0.229]} rotation={[0, 0,  Math.PI / 4]}>
              <boxGeometry args={[0.058, 0.013, 0.005]} />
              <meshStandardMaterial color={eyeCol} roughness={0.4} />
            </mesh>
            <mesh position={[x, 0.04, 0.229]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.058, 0.013, 0.005]} />
              <meshStandardMaterial color={eyeCol} roughness={0.4} />
            </mesh>
          </>
        )}

        {/* Heart eyes */}
        {eyeType === 'heart' && (
          <>
            <mesh position={[x - 0.011, 0.050, 0.233]}>
              <sphereGeometry args={[0.019, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[x + 0.011, 0.050, 0.233]}>
              <sphereGeometry args={[0.019, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[x, 0.032, 0.230]} scale={[1.4, 1.15, 1]}>
              <sphereGeometry args={[0.020, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
          </>
        )}

        {/* Star eyes */}
        {eyeType === 'star' && (
          <>
            {([0, Math.PI / 4, Math.PI / 2, Math.PI * 3 / 4] as number[]).map((rot, i) => (
              <mesh key={i} position={[x, 0.04, 0.231]} rotation={[0, 0, rot]}>
                <boxGeometry args={[0.064, 0.013, 0.005]} />
                <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={1.0} roughness={0.1} />
              </mesh>
            ))}
            <mesh position={[x, 0.04, 0.235]}>
              <sphereGeometry args={[0.011, 6, 6]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.5} roughness={0.05} />
            </mesh>
          </>
        )}

        {/* Specular highlights */}
        {!isWinkClosed && eyeType !== 'happy' && eyeType !== 'x' && (
          <>
            <mesh position={[sx, 0.048, 0.230]}>
              <sphereGeometry args={[0.008, 6, 6]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[x + side * 0.005, 0.032, 0.228]}>
              <sphereGeometry args={[0.004, 5, 5]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
            </mesh>
          </>
        )}

        {/* Eyelid (blink target) */}
        <mesh ref={lidRef} position={[x, 0.065, 0.225]} scale={[1, 0.01, 1]}>
          <sphereGeometry args={[0.052, 8, 4, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} side={THREE.DoubleSide} />
        </mesh>

        {/* Eyebrow */}
        <group ref={browRef} position={[bx, browY, 0.2]} rotation={[0, 0, browRotZ]}>
          <mesh scale={[1.0, 1.0, 1.0]}>
            <boxGeometry args={[0.052, 0.013, 0.007]} />
            <meshStandardMaterial color="#5a4030" roughness={0.7} />
          </mesh>
          <mesh position={[side * -0.016, 0.001, 0.001]} scale={[0.35, 1.2, 1.0]}>
            <boxGeometry args={[0.052, 0.013, 0.007]} />
            <meshStandardMaterial color="#5a4030" roughness={0.7} />
          </mesh>
          <mesh position={[side * 0.020, -0.002, 0.0]} scale={[0.28, 0.55, 0.8]}>
            <boxGeometry args={[0.052, 0.013, 0.007]} />
            <meshStandardMaterial color="#6a5040" roughness={0.75} />
          </mesh>
        </group>
      </>
    );
  };

  // ── Mouth renderer ────────────────────────────────────
  const renderMouth = () => {
    if (mouthType === 'none') return null;

    if (mouthType === 'smile') return (
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.17]}>
        <mesh position={[0, 0.012, 0.008]} scale={[0.85, 0.45, 0.5]}>
          <sphereGeometry args={[0.038, 10, 6]} />
          <meshStandardMaterial color={mouthCol} roughness={0.45} />
        </mesh>
        <mesh position={[0, -0.006, 0.010]} scale={[0.90, 0.42, 0.55]}>
          <sphereGeometry args={[0.038, 10, 6]} />
          <meshStandardMaterial color={mouthCol} roughness={0.42} />
        </mesh>
        <mesh position={[0, 0.003, 0.012]}>
          <boxGeometry args={[0.055, 0.005, 0.003]} />
          <meshStandardMaterial color="#8a4040" roughness={0.6} />
        </mesh>
      </group>
    );

    if (mouthType === 'grin') return (
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.17]}>
        <mesh position={[0, 0.012, 0.013]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.050, 0.011, 6, 16, Math.PI]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.014, 0.018]}>
          <boxGeometry args={[0.076, 0.022, 0.007]} />
          <meshStandardMaterial color="#f4f0e8" roughness={0.3} />
        </mesh>
      </group>
    );

    if (mouthType === 'sad') return (
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.17]}>
        <mesh position={[0, -0.012, 0.013]}>
          <torusGeometry args={[0.036, 0.010, 6, 16, Math.PI]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
      </group>
    );

    if (mouthType === 'neutral') return (
      <mesh ref={mouthRef as React.Ref<THREE.Mesh>} position={[0, -0.1, 0.183]}>
        <boxGeometry args={[0.066, 0.011, 0.009]} />
        <meshStandardMaterial color={mouthCol} roughness={0.5} />
      </mesh>
    );

    if (mouthType === 'open') return (
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.17]}>
        <mesh position={[0, 0, 0.014]} scale={[1, 0.75, 1]}>
          <torusGeometry args={[0.034, 0.014, 6, 12]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, 0.012]}>
          <circleGeometry args={[0.028, 10]} />
          <meshStandardMaterial color="#1a0808" roughness={0.9} />
        </mesh>
      </group>
    );

    if (mouthType === 'tongue') return (
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.17]}>
        <mesh position={[0, 0, 0.012]}>
          <boxGeometry args={[0.075, 0.022, 0.010]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.026, 0.010]}>
          <sphereGeometry args={[0.026, 8, 6]} />
          <meshStandardMaterial color="#FF6B8A" roughness={0.6} />
        </mesh>
      </group>
    );

    if (mouthType === 'cat') return (
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.17]}>
        <mesh position={[-0.026, 0, 0.012]} rotation={[0, 0, -0.42]}>
          <boxGeometry args={[0.034, 0.013, 0.008]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0.026, 0, 0.012]} rotation={[0, 0, 0.42]}>
          <boxGeometry args={[0.034, 0.013, 0.008]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, 0.012]}>
          <sphereGeometry args={[0.013, 6, 6]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
      </group>
    );

    if (mouthType === 'bunny') return (
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.08, 0.17]}>
        <mesh position={[0, 0.012, 0.022]}>
          <sphereGeometry args={[0.018, 8, 6]} />
          <meshStandardMaterial color={mouthCol} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.018, 0.018]}>
          <boxGeometry args={[0.008, 0.024, 0.006]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[-0.014, -0.032, 0.018]} rotation={[0, 0, 0.5]}>
          <boxGeometry args={[0.024, 0.008, 0.006]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        <mesh position={[0.014, -0.032, 0.018]} rotation={[0, 0, -0.5]}>
          <boxGeometry args={[0.024, 0.008, 0.006]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        {/* Whiskers */}
        {([-1, 1] as const).map((side, si) => (
          [0.005, -0.008].map((dy, di) => (
            <mesh key={`${si}-${di}`} position={[side * 0.06, dy, 0.015]} rotation={[0, 0, side * (di === 0 ? -0.1 : 0.1)]}>
              <boxGeometry args={[0.06, 0.004, 0.003]} />
              <meshStandardMaterial color="#999" roughness={0.6} transparent opacity={0.5} />
            </mesh>
          ))
        ))}
      </group>
    );

    if (mouthType === 'fangs') return (
      <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.17]}>
        <mesh position={[0, 0, 0.013]}>
          <boxGeometry args={[0.090, 0.028, 0.012]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>
        {([-0.025, 0.025] as number[]).map((fx, i) => (
          <mesh key={i} position={[fx, -0.025, 0.013]}>
            <coneGeometry args={[0.011, 0.032, 4]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
          </mesh>
        ))}
      </group>
    );

    return null;
  };

  return (
    <>
      {/* Blush */}
      {face?.blush && (
        <>
          {([-0.12, 0.12] as const).map((bx, i) => (
            <mesh key={i} position={[bx, 0.0, 0.18]}>
              <sphereGeometry args={[0.042, 8, 6]} />
              <meshStandardMaterial color={face.blushColor || '#FF9999'} transparent opacity={0.42} roughness={0.9} />
            </mesh>
          ))}
        </>
      )}
      {renderEye(-1, leftIrisRef,  leftLidRef,  leftBrowRef)}
      {renderEye( 1, rightIrisRef, rightLidRef, rightBrowRef)}
      {renderMouth()}
    </>
  );
}
