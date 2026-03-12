## Modules
Module | Description
------ | -----------
[modeling/minkowski] | Minkowski sum operations for 3D geometries.

## Functions

Name | Description
------ | -----------
[minkowskiSumNonConvexConvex()] | Compute Minkowski sum of non-convex A with convex B.
[decomposeIntoTetrahedra()] | Decompose a geom3 into tetrahedra using face-local apex points. Each resulting tetrahedron is guaranteed to be convex.
[createTetrahedronPolygons()] | Create the 4 triangular faces of a tetrahedron.
[minkowskiSumConvex()] | Compute Minkowski sum of two convex polyhedra.
[extractUniqueVertices()] | Extract unique vertices from a geom3. Uses a Set with string keys for deduplication.


## modeling/minkowski

Minkowski sum operations for 3D geometries.

The Minkowski sum of two shapes A and B is the set of all points that are
the sum of a point in A and a point in B. This is useful for:
- Offsetting/inflating shapes (using a sphere creates rounded edges)
- Collision detection (shapes collide iff their Minkowski difference contains origin)
- Motion planning and swept volumes

**Example**  
```js
const { minkowskiSum } = require('@jscad/modeling').minkowski
const rounded = minkowskiSum(cube, sphere)
```

### modeling/minkowski.minkowskiSum(...geometries)

Compute the Minkowski sum of two 3D geometries.

The Minkowski sum A ⊕ B is the set of all points a + b where a ∈ A and b ∈ B.
Geometrically, this "inflates" geometry A by the shape of geometry B.

Common use cases:
- Offset a solid by a sphere to round all edges and corners
- Offset a solid by a cube to create chamfered edges
- Collision detection (if Minkowski sum contains origin, shapes overlap)

For best performance, use convex geometries. Non-convex geometries are supported
when the second operand is convex, but require decomposition and are slower.

**Kind**: static method of [`modeling/minkowski`]  
**Returns**: `geom3` - new 3D geometry representing the Minkowski sum  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | two geom3 geometries (second should be convex for non-convex first) |

**Example**  
```js
const { primitives, minkowski } = require('@jscad/modeling')
const cube = primitives.cuboid({ size: [10, 10, 10] })
const sphere = primitives.sphere({ radius: 2, segments: 16 })
const rounded = minkowski.minkowskiSum(cube, sphere)
```

## minkowskiSumNonConvexConvex()

Compute Minkowski sum of non-convex A with convex B.

Decomposes A into tetrahedra, computes Minkowski sum of each with B,
then unions all results.

**Kind**: global function  

## decomposeIntoTetrahedra()

Decompose a geom3 into tetrahedra using face-local apex points.
Each resulting tetrahedron is guaranteed to be convex.

Unlike centroid-based decomposition, this approach works correctly for
shapes where the centroid is outside the geometry (e.g., torus, U-shapes).
Each polygon gets its own apex point, offset inward along its normal.

**Kind**: global function  

## createTetrahedronPolygons()

Create the 4 triangular faces of a tetrahedron.

**Kind**: global function  

## minkowskiSumConvex()

Compute Minkowski sum of two convex polyhedra.

For convex polyhedra, the Minkowski sum equals the convex hull of
all pairwise vertex sums. This is O(n*m) for n and m vertices,
plus the cost of the convex hull algorithm.

**Kind**: global function  

## extractUniqueVertices()

Extract unique vertices from a geom3.
Uses a Set with string keys for deduplication.

**Kind**: global function  
<!-- LINKS -->

[modeling/minkowski]:#modelingminkowski
[`modeling/minkowski`]:#modelingminkowski
[minkowskiSumNonConvexConvex()]:#minkowskisumnonconvexconvex
[decomposeIntoTetrahedra()]:#decomposeintotetrahedra
[createTetrahedronPolygons()]:#createtetrahedronpolygons
[minkowskiSumConvex()]:#minkowskisumconvex
[extractUniqueVertices()]:#extractuniquevertices
