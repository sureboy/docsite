[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold-encapsulated-types](../README.md) / CrossSection

# Class: CrossSection

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:102

二维横截面，保证从构建之初起就不存在自相交以及多边形之间的重叠现象。该类借助 Clipper2 库实现多边形裁剪（布尔运算）和偏移操作。

## See

 - [C++ API: CrossSection Class Reference](https://manifoldcad.org/docs/html/classmanifold_1_1_cross_section.html)
 - [Clipper2 - Polygon Clipping Offsetting & Triangulating](https://www.angusj.com/clipper2/Docs/Overview.htm)

## Constructors

### decompose()

> **decompose**(): `CrossSection`[]

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:370

This operation returns a vector of CrossSections that are topologically
disconnected, each containing one outline contour with zero or more
holes.

#### Returns

`CrossSection`[]

***

### circle()

> `static` **circle**(`radius`, `circularSegments?`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:138

Constructs a circle of a given radius.

#### Parameters

##### radius

`number`

Radius of the circle. Must be positive.

##### circularSegments?

`number`

Number of segments along its diameter. Default is
calculated by the static Quality defaults according to the radius.

#### Returns

`CrossSection`

***

### square()

> `static` **square**(`size?`, `center?`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:128

Constructs a square with the given XY dimensions. By default it is
positioned in the first quadrant, touching the origin. If any dimensions in
size are negative, or if all are zero, an empty Manifold will be returned.

#### Parameters

##### size?

`number` \| readonly \[`number`, `number`\]

The X, and Y dimensions of the square.

##### center?

`boolean`

Set to true to shift the center to the origin.

#### Returns

`CrossSection`

## Basics

### Constructor

> **new CrossSection**(`contours`, `fillRule?`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:115

Create a 2d cross-section from a set of contours (complex polygons). A
boolean union operation (with Positive filling rule by default) is
performed to combine overlapping polygons and ensure the resulting
CrossSection is free of intersections.

#### Parameters

##### contours

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md)

A set of closed paths describing zero or more complex
polygons.

##### fillRule?

[`FillRule`](../../manifold-global-types/type-aliases/FillRule.md)

The filling rule used to interpret polygon sub-regions in
contours.

#### Returns

`CrossSection`

***

### delete()

> **delete**(): `void`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:435

Frees the WASM memory of this CrossSection, since these cannot be
garbage-collected automatically.

#### Returns

`void`

## Boolean

### add()

> **add**(`other`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:288

Boolean union

#### Parameters

##### other

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

#### Returns

`CrossSection`

***

### intersect()

> **intersect**(`other`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:300

Boolean intersection

#### Parameters

##### other

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

#### Returns

`CrossSection`

***

### subtract()

> **subtract**(`other`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:294

Boolean difference

#### Parameters

##### other

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

#### Returns

`CrossSection`

***

### compose()

> `static` **compose**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:362

Construct a CrossSection from a vector of other Polygons (batch
boolean union).

#### Parameters

##### polygons

readonly ([`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`)[]

#### Returns

`CrossSection`

***

### difference()

#### Call Signature

> `static` **difference**(`a`, `b`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:313

Boolean difference of the cross-section b from the cross-section a

##### Parameters

###### a

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

###### b

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

##### Returns

`CrossSection`

#### Call Signature

> `static` **difference**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:333

Boolean difference of the tail of a list of cross-sections from its head

##### Parameters

###### polygons

readonly ([`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`)[]

##### Returns

`CrossSection`

***

### intersection()

#### Call Signature

> `static` **intersection**(`a`, `b`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:320

Boolean intersection of the cross-sections a and b

##### Parameters

###### a

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

###### b

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

##### Returns

`CrossSection`

#### Call Signature

> `static` **intersection**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:338

Boolean intersection of a list of cross-sections

##### Parameters

###### polygons

readonly ([`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`)[]

##### Returns

`CrossSection`

***

### union()

#### Call Signature

> `static` **union**(`a`, `b`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:306

Boolean union of the cross-sections a and b

##### Parameters

###### a

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

###### b

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`

##### Returns

`CrossSection`

#### Call Signature

> `static` **union**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:327

Boolean union of a list of cross-sections

##### Parameters

###### polygons

readonly ([`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`)[]

##### Returns

`CrossSection`

## Convex Hull

### hull()

> **hull**(): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:347

Compute the convex hull of the contours in this CrossSection.

#### Returns

`CrossSection`

***

### hull()

> `static` **hull**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:353

Compute the convex hull of all points in a list of polygons/cross-sections.

#### Parameters

##### polygons

readonly ([`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| `CrossSection`)[]

#### Returns

`CrossSection`

## Information

### area()

> **area**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:401

Return the total area covered by complex polygons making up the
CrossSection.

#### Returns

`number`

***

### bounds()

> **bounds**(): [`Rect`](../../manifold-global-types/type-aliases/Rect.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:426

Returns the axis-aligned bounding rectangle of all the CrossSection's
vertices.

#### Returns

[`Rect`](../../manifold-global-types/type-aliases/Rect.md)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:407

Does the CrossSection (not) have any contours?

#### Returns

`boolean`

***

### numContour()

> **numContour**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:419

The number of contours in the CrossSection.

#### Returns

`number`

***

### numVert()

> **numVert**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:413

The number of vertices in the CrossSection.

#### Returns

`number`

## Input & Output

### toPolygons()

> **toPolygons**(): [`SimplePolygon`](../../manifold-global-types/type-aliases/SimplePolygon.md)[]

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:392

Return the contours of this CrossSection as a list of simple polygons.

#### Returns

[`SimplePolygon`](../../manifold-global-types/type-aliases/SimplePolygon.md)[]

***

### ofPolygons()

> `static` **ofPolygons**(`contours`, `fillRule?`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:386

Create a 2d cross-section from a set of contours (complex polygons). A
boolean union operation (with Positive filling rule by default) is
performed to combine overlapping polygons and ensure the resulting
CrossSection is free of intersections.

#### Parameters

##### contours

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md)

A set of closed paths describing zero or more complex
polygons.

##### fillRule?

[`FillRule`](../../manifold-global-types/type-aliases/FillRule.md)

The filling rule used to interpret polygon sub-regions in
contours.

#### Returns

`CrossSection`

## Transformations

### extrude()

> **extrude**(`height`, `nDivisions?`, `twistDegrees?`, `scaleTop?`, `center?`): [`Manifold`](Manifold.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:159

Constructs a manifold by extruding the cross-section along Z-axis.

#### Parameters

##### height

`number`

Z-extent of extrusion.

##### nDivisions?

`number`

Number of extra copies of the crossSection to insert into
the shape vertically; especially useful in combination with twistDegrees to
avoid interpolation artifacts. Default is none.

##### twistDegrees?

`number`

Amount to twist the top crossSection relative to the
bottom, interpolated linearly for the divisions in between.

##### scaleTop?

`number` \| readonly \[`number`, `number`\]

Amount to scale the top (independently in X and Y). If the
scale is {0, 0}, a pure cone is formed with only a single vertex at the
top. Default {1, 1}.

##### center?

`boolean`

If true, the extrusion is centered on the z-axis through the
    origin
as opposed to resting on the XY plane as is default.

#### Returns

[`Manifold`](Manifold.md)

***

### mirror()

> **mirror**(`ax`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:225

Mirror this CrossSection over the arbitrary axis described by the unit form
of the given vector. If the length of the vector is zero, an empty
CrossSection is returned. This operation can be chained. Transforms are
combined and applied lazily.

#### Parameters

##### ax

readonly \[`number`, `number`\]

the axis to be mirrored over

#### Returns

`CrossSection`

***

### offset()

> **offset**(`delta`, `joinType?`, `miterLimit?`, `circularSegments?`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:259

Inflate the contours in CrossSection by the specified delta, handling
corners according to the given JoinType.

#### Parameters

##### delta

`number`

Positive deltas will cause the expansion of outlining contours
to expand, and retraction of inner (hole) contours. Negative deltas will
have the opposite effect.

##### joinType?

[`JoinType`](../../manifold-global-types/type-aliases/JoinType.md)

The join type specifying the treatment of contour joins
(corners). Defaults to Round

##### miterLimit?

`number`

The maximum distance in multiples of delta that vertices
can be offset from their original positions with before squaring is
applied, **when the join type is Miter** (default is 2, which is the
minimum allowed). See the [Clipper2
MiterLimit](http://www.angusj.com/clipper2/Docs/Units/Clipper.Offset/Classes/ClipperOffset/Properties/MiterLimit.htm)
page for a visual example.

##### circularSegments?

`number`

Number of segments per 360 degrees of
*JoinType::Round*  corners (roughly, the number of vertices that
will be added to each contour). Default is calculated by the static Quality
defaults according to the radius.

#### Returns

`CrossSection`

***

### revolve()

> **revolve**(`circularSegments?`, `revolveDegrees?`): [`Manifold`](Manifold.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:173

Constructs a manifold by revolving this cross-section around its Y-axis and
then setting this as the Z-axis of the resulting manifold. If the contours
cross the Y-axis, only the part on the positive X side is used.
Geometrically valid input will result in geometrically valid output.

#### Parameters

##### circularSegments?

`number`

Number of segments along its diameter. Default is
calculated by the static Defaults.

##### revolveDegrees?

`number`

#### Returns

[`Manifold`](Manifold.md)

***

### rotate()

> **rotate**(`degrees`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:204

Applies a (Z-axis) rotation to the CrossSection, in degrees. This operation
can be chained. Transforms are combined and applied lazily.

#### Parameters

##### degrees

`number`

degrees about the Z-axis to rotate.

#### Returns

`CrossSection`

***

### scale()

> **scale**(`v`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:213

Scale this CrossSection in space. This operation can be chained. Transforms
are combined and applied lazily.

#### Parameters

##### v

`number` \| readonly \[`number`, `number`\]

The vector to multiply every vertex by per component.

#### Returns

`CrossSection`

***

### simplify()

> **simplify**(`epsilon?`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:280

Remove vertices from the contours in this CrossSection that are less than
the specified distance epsilon from an imaginary line that passes through
its two adjacent vertices. Near duplicate vertices and collinear points
will be removed at lower epsilons, with elimination of line segments
becoming increasingly aggressive with larger epsilons.

It is recommended to apply this function following Offset, in order to
clean up any spurious tiny line segments introduced that do not improve
quality in any meaningful way. This is particularly important if further
offseting operations are to be performed, which would compound the issue.

#### Parameters

##### epsilon?

`number`

minimum distance vertices must diverge from the hypothetical
    outline without them in order to be included in the output (default
    1e-6)

#### Returns

`CrossSection`

***

### transform()

> **transform**(`m`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:185

Transform this CrossSection in space. Stored in column-major order. This
operation can be chained. Transforms are combined and applied lazily.

#### Parameters

##### m

[`Mat3`](../../manifold-global-types/type-aliases/Mat3.md)

The affine transformation matrix to apply to all the vertices. The
    last row is ignored.

#### Returns

`CrossSection`

***

### translate()

#### Call Signature

> **translate**(`v`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:194

Move this CrossSection in space. This operation can be chained. Transforms
are combined and applied lazily.

##### Parameters

###### v

readonly \[`number`, `number`\]

The vector to add to every vertex.

##### Returns

`CrossSection`

#### Call Signature

> **translate**(`x`, `y?`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:195

Move this CrossSection in space. This operation can be chained. Transforms
are combined and applied lazily.

##### Parameters

###### x

`number`

###### y?

`number`

##### Returns

`CrossSection`

***

### warp()

> **warp**(`warpFunc`): `CrossSection`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:236

Move the vertices of this CrossSection (creating a new one) according to
any arbitrary input function, followed by a union operation (with a
Positive fill rule) that ensures any introduced intersections are not
included in the result.

#### Parameters

##### warpFunc

(`vert`) => `void`

A function that modifies a given vertex position.

#### Returns

`CrossSection`
