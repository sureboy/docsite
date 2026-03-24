[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold](../README.md) / triangulate

# Function: triangulate()

> **triangulate**(`polygons`, `epsilon?`, `allowConvex?`): [`Vec3`](../type-aliases/Vec3.md)[]

Defined in: manifold-3d/manifold.d.ts:1500

Triangulates a set of /epsilon-valid polygons.

## Parameters

### polygons

[`Polygons`](../type-aliases/Polygons.md)

The set of polygons, wound CCW and representing multiple
polygons and/or holes.

### epsilon?

`number`

The value of epsilon, bounding the uncertainty of the input.

### allowConvex?

`boolean`

If true (default), the triangulator will use a fast
triangulation if the input is convex, falling back to ear-clipping if not.
The triangle quality may be lower, so set to false to disable this
optimization.

## Returns

[`Vec3`](../type-aliases/Vec3.md)[]

The triangles, referencing the original polygon points in order.

## See

[C++ API: Triangulation](https://manifoldcad.org/docs/html/group___triangulation.html)
