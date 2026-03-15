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
两个形状 A 与 B 的闵可夫斯基和，是所有由 A 中一点与 B 中一点相加得到的点的集合。该运算常用于：
- 形状的偏移 / 膨胀（使用球体可生成圆角边）
- 碰撞检测（当且仅当两个形状的闵可夫斯基差包含原点时，它们发生碰撞）
- 运动规划与扫掠体积计算

**Example**  
```js
const { minkowskiSum } = require('@jscad/modeling').minkowski
const rounded = minkowskiSum(cube, sphere)
```

### modeling/minkowski.minkowskiSum(...geometries)

计算两个三维几何体的闵可夫斯基和。

闵可夫斯基和 A⊕B 是所有满足 a+b 的点的集合，其中 a∈A，b∈B。
从几何上看，这相当于用几何体 B 的形状 **“膨胀”** 几何体 A。

Common use cases:
- Offset a solid by a sphere to round all edges and corners
- Offset a solid by a cube to create chamfered edges
- Collision detection (if Minkowski sum contains origin, shapes overlap)

为获得最佳性能，请使用凸几何体。当第二个操作数是凸几何体时，也支持非凸几何体，但需要进行分解处理，速度会更慢。

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
