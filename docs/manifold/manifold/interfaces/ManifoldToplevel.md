[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold](../README.md) / ManifoldToplevel

# Interface: ManifoldToplevel

Defined in: manifold-3d/manifold.d.ts:1169

## Properties

### CrossSection

> **CrossSection**: *typeof* [`CrossSection`](../classes/CrossSection.md)

Defined in: manifold-3d/manifold.d.ts:1170

***

### getCircularSegments

> **getCircularSegments**: (`radius`) => `number`

Defined in: manifold-3d/manifold.d.ts:1177

Determine the result of the [setMinCircularAngle](../functions/setMinCircularAngle.md),
[setMinCircularEdgeLength](../functions/setMinCircularEdgeLength.md), and [setCircularSegments](../functions/setCircularSegments.md) defaults.

#### Parameters

##### radius

`number`

针对指定的圆半径，确定其将使用的默认分段数量。

#### Returns

`number`

***

### Manifold

> **Manifold**: *typeof* [`Manifold`](../classes/Manifold.md)

Defined in: manifold-3d/manifold.d.ts:1171

***

### Mesh

> **Mesh**: *typeof* [`Mesh`](../classes/Mesh.md)

Defined in: manifold-3d/manifold.d.ts:1172

***

### resetToCircularDefaults

> **resetToCircularDefaults**: () => `void`

Defined in: manifold-3d/manifold.d.ts:1178

Resets the circular construction parameters to their defaults if
[setMinCircularAngle](../functions/setMinCircularAngle.md), [setMinCircularEdgeLength](../functions/setMinCircularEdgeLength.md), or [setCircularSegments](../functions/setCircularSegments.md) have been called.

#### Returns

`void`

***

### setCircularSegments

> **setCircularSegments**: (`segments`) => `void`

Defined in: manifold-3d/manifold.d.ts:1176

Sets the default number of circular segments for the
[CrossSection.circle](../classes/CrossSection.md#circle), [Manifold.cylinder](../classes/Manifold.md#cylinder), [Manifold.sphere](../classes/Manifold.md#sphere), and
[Manifold.revolve](../classes/Manifold.md#revolve) constructors. Overrides the edge length and angle
constraints and sets the number of segments to exactly this value.

#### Parameters

##### segments

`number`

Number of circular segments. Default is 0, meaning no
constraint is applied.

#### Returns

`void`

***

### setMinCircularAngle

> **setMinCircularAngle**: (`angle`) => `void`

Defined in: manifold-3d/manifold.d.ts:1174

Sets an angle constraint the default number of circular segments for the
[CrossSection.circle](../classes/CrossSection.md#circle), [Manifold.cylinder](../classes/Manifold.md#cylinder), [Manifold.sphere](../classes/Manifold.md#sphere), and
[Manifold.revolve](../classes/Manifold.md#revolve) constructors. The number of segments will be rounded
up to the nearest factor of four.

#### Parameters

##### angle

`number`

The minimum angle in degrees between consecutive segments. The
angle will increase if the the segments hit the minimum edge length.
Default is 10 degrees.

#### Returns

`void`

***

### setMinCircularEdgeLength

> **setMinCircularEdgeLength**: (`length`) => `void`

Defined in: manifold-3d/manifold.d.ts:1175

Sets a length constraint the default number of circular segments for the
[CrossSection.circle](../classes/CrossSection.md#circle), [Manifold.cylinder](../classes/Manifold.md#cylinder), [Manifold.sphere](../classes/Manifold.md#sphere), and
[Manifold.revolve](../classes/Manifold.md#revolve) constructors. The number of segments will be rounded
up to the nearest factor of four.

#### Parameters

##### length

`number`

The minimum length of segments. The length will
increase if the the segments hit the minimum angle. Default is 1.0.

#### Returns

`void`

***

### setup

> **setup**: () => `void`

Defined in: manifold-3d/manifold.d.ts:1179

#### Returns

`void`

***

### triangulate

> **triangulate**: (`polygons`, `epsilon?`, `allowConvex?`) => [`Vec3`](../type-aliases/Vec3.md)[]

Defined in: manifold-3d/manifold.d.ts:1173

Triangulates a set of /epsilon-valid polygons.

#### Parameters

##### polygons

[`Polygons`](../type-aliases/Polygons.md)

The set of polygons, wound CCW and representing multiple
polygons and/or holes.

##### epsilon?

`number`

The value of epsilon, bounding the uncertainty of the input.

##### allowConvex?

`boolean`

If true (default), the triangulator will use a fast
triangulation if the input is convex, falling back to ear-clipping if not.
The triangle quality may be lower, so set to false to disable this
optimization.

#### Returns

[`Vec3`](../type-aliases/Vec3.md)[]

The triangles, referencing the original polygon points in order.

#### See

[C++ API: Triangulation](https://manifoldcad.org/docs/html/group___triangulation.html)
