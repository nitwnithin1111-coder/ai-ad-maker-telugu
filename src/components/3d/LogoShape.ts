import * as THREE from 'three';

/**
 * Creates the stylized 'A' Play-Button shape for extrusion
 */
export function createBrandLogoShape(): THREE.Shape {
  const shape = new THREE.Shape();

  // Outer stylized 'A' / Play triangle
  shape.moveTo(0, 2.4);
  // Curve down to right apex
  shape.quadraticCurveTo(0.2, 2.3, 2.1, -1.5);
  shape.quadraticCurveTo(2.3, -1.9, 1.9, -2.1);
  // Bottom horizontal bar
  shape.lineTo(-1.7, -2.1);
  shape.quadraticCurveTo(-2.1, -2.1, -2.0, -1.7);
  // Left leg back to top
  shape.lineTo(-0.2, 2.3);
  shape.quadraticCurveTo(-0.1, 2.4, 0, 2.4);

  // Inner cutout to form the 'A' crossbar and play window
  const hole = new THREE.Path();
  hole.moveTo(0, 1.2);
  hole.lineTo(1.1, -0.9);
  hole.lineTo(-1.0, -0.9);
  hole.closePath();

  shape.holes.push(hole);

  return shape;
}

export const extrudeSettings: THREE.ExtrudeGeometryOptions = {
  depth: 0.6,
  bevelEnabled: true,
  bevelSegments: 6,
  steps: 2,
  bevelSize: 0.12,
  bevelThickness: 0.14,
};
