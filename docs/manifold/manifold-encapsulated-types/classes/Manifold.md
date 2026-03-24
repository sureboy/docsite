[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold-encapsulated-types](../README.md) / Manifold

# Class: Manifold

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:465


本库对**有向二维流形三角网格**的内部表示——一种用于实体对象的简易边界表示法。使用此类来存储实体并对其进行操作；输入输出可使用 **MeshGL**，若仅需基础几何功能，也可选用 **Mesh**。

除几何数据外，**Manifold（流形）** 还可存储任意数量的顶点属性。这些属性可以是任意类型，例如法向量、UV 坐标、颜色等，但本库对此不做任何语义限定。所有属性均为按通道编号索引的浮点数值，通道编号与具体含义的对应关系由用户自行定义。

Manifold 支持**共享顶点属性**以实现高效存储，也允许单个几何顶点关联多个属性顶点，从而在布尔运算相交处等场景下实现属性突变，且不会破坏流形特性。

流形还会通过 **OriginalID（原始ID）** 以及可经由 MeshGL 获取的 **faceID（面ID）** 和变换信息，记录其与输入数据之间的关联关系。这使得对象级属性在经过多次运算后仍能重新关联到输出结果，对材质处理尤为实用。由于不同对象的属性不会混合，因此无需保证各输入之间的通道含义保持一致。

## See

[C++ API: Manifold Class Reference](https://manifoldcad.org/docs/html/classmanifold_1_1_manifold.html)

## Constructors

### decompose()

> **decompose**(): `Manifold`[]

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1033

This operation returns a vector of Manifolds that are topologically
disconnected. If everything is connected, the vector is length one,
containing a copy of the original. It is the inverse operation of
Compose().

#### Returns

`Manifold`[]

***

### ~~compose()~~

> `static` **compose**(`manifolds`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1023

Constructs a new manifold from a list of other manifolds. This is a purely
topological operation, so care should be taken to avoid creating
overlapping results. It is the inverse operation of Decompose().

#### Parameters

##### manifolds

readonly `Manifold`[]

A list of Manifolds to lazy-union together.

#### Returns

`Manifold`

#### Deprecated

Please use [add](#add) or [union](#union) instead.

***

### cube()

> `static` **cube**(`size?`, `center?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:498

Constructs a unit cube (edge lengths all one), by default in the first
octant, touching the origin.

#### Parameters

##### size?

`number` \| readonly \[`number`, `number`, `number`\]

The X, Y, and Z dimensions of the box.

##### center?

`boolean`

Set to true to shift the center to the origin.

#### Returns

`Manifold`

***

### cylinder()

> `static` **cylinder**(`height`, `radiusLow`, `radiusHigh?`, `circularSegments?`, `center?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:514

A convenience constructor for the common case of extruding a circle. Can
also form cones if both radii are specified.

#### Parameters

##### height

`number`

Z-extent

##### radiusLow

`number`

Radius of bottom circle. Must be positive.

##### radiusHigh?

`number`

Radius of top circle. Can equal zero. Default is equal to
radiusLow.

##### circularSegments?

`number`

How many line segments to use around the circle.
Default is calculated by the static Defaults.

##### center?

`boolean`

Set to true to shift the center to the origin. Default is
origin at the bottom.

#### Returns

`Manifold`

***

### levelSet()

> `static` **levelSet**(`sdf`, `bounds`, `edgeLength`, `level?`, `tolerance?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:647

Constructs a level-set Mesh from the input Signed-Distance Function (SDF).
This uses a form of Marching Tetrahedra (akin to Marching Cubes, but better
for manifoldness). Instead of using a cubic grid, it uses a body-centered
cubic grid (two shifted cubic grids). This means if your function's
interior exceeds the given bounds, you will see a kind of egg-crate shape
closing off the manifold, which is due to the underlying grid.

#### Parameters

##### sdf

(`point`) => `number`

The signed-distance function which returns the signed distance
    of
a given point in R^3. Positive values are inside, negative outside.

##### bounds

[`Box`](../../manifold-global-types/type-aliases/Box.md)

An axis-aligned box that defines the extent of the grid.

##### edgeLength

`number`

Approximate maximum edge length of the triangles in the
final result. This affects grid spacing, and hence has a strong effect on
performance.

##### level?

`number`

You can inset your Mesh by using a positive value, or outset
it with a negative value.

##### tolerance?

`number`

Ensure each vertex is within this distance of the true
surface. Defaults to -1, which will return the interpolated
crossing-point based on the two nearest grid points. Small positive values
will require more sdf evaluations per output vertex.

#### Returns

`Manifold`

***

### sphere()

> `static` **sphere**(`radius`, `circularSegments?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:529

Constructs a geodesic sphere of a given radius.

#### Parameters

##### radius

`number`

Radius of the sphere. Must be positive.

##### circularSegments?

`number`

Number of segments along its
diameter. This number will always be rounded up to the nearest factor of
four, as this sphere is constructed by refining an octahedron. This means
there are a circle of vertices on all three of the axis planes. Default is
calculated by the static Defaults.

#### Returns

`Manifold`

***

### tetrahedron()

> `static` **tetrahedron**(): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:488

Constructs a tetrahedron centered at the origin with one vertex at (1,1,1)
and the rest at similarly symmetric points.

#### Returns

`Manifold`

## Properties

### calculateCurvature()

> **calculateCurvature**(`gaussianIdx`, `meanIdx`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:835

Curvature is the inverse of the radius of curvature, and signed such that
positive is convex and negative is concave. There are two orthogonal
principal curvatures at any point on a manifold, with one maximum and the
other minimum. Gaussian curvature is their product, while mean
curvature is their sum. This approximates them for every vertex and assigns
them as vertex properties on the given channels.

#### Parameters

##### gaussianIdx

`number`

The property channel index in which to store the
    Gaussian curvature. An index < 0 will be ignored (stores nothing). The
    property set will be automatically expanded to include the channel
    index specified.

##### meanIdx

`number`

The property channel index in which to store the mean
    curvature. An index < 0 will be ignored (stores nothing). The property
    set will be automatically expanded to include the channel index
    specified.

#### Returns

`Manifold`

***

### calculateNormals()

> **calculateNormals**(`normalIdx`, `minSharpAngle`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:854

Fills in vertex properties for normal vectors, calculated from the mesh
geometry. Flat faces composed of three or more triangles will remain flat.

#### Parameters

##### normalIdx

`number`

The property channel in which to store the X
values of the normals. The X, Y, and Z channels will be sequential. The
property set will be automatically expanded to include up through normalIdx
+ 2.

##### minSharpAngle

`number`

Any edges with angles greater than this value will
remain sharp, getting different normal vector properties on each side of
the edge. By default, no edges are sharp and all normals are shared. With a
value of zero, the model is faceted and all normals match their triangle
normals, but in this case it would be better not to calculate normals at
all.

#### Returns

`Manifold`

***

### setProperties()

> **setProperties**(`numProp`, `propFunc`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:812

Create a new copy of this manifold with updated vertex properties by
supplying a function that takes the existing position and properties as
input. You may specify any number of output properties, allowing creation
and removal of channels. Note: undefined behavior will result if you read
past the number of input properties or write past the number of output
properties.

#### Parameters

##### numProp

`number`

The new number of properties per vertex.

##### propFunc

(`newProp`, `position`, `oldProp`) => `void`

A function that modifies the properties of a given vertex.

#### Returns

`Manifold`

## Basics

### Constructor

> **new Manifold**(`mesh`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:479

Convert a Mesh into a Manifold, retaining its properties and merging only
the positions according to the merge vectors. Will throw an error if the
result is not an oriented 2-manifold. Will collapse degenerate triangles
and unnecessary vertices.

All fields are read, making this structure suitable for a lossless
round-trip of data from getMesh(). For multi-material input, use
reserveIDs() to set a unique originalID for each material, and sort the
materials into triangle runs.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

#### Returns

`Manifold`

***

### delete()

> **delete**(): `void`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1214

Frees the WASM memory of this Manifold, since these cannot be
garbage-collected automatically.

#### Returns

`void`

## Boolean

### add()

> **add**(`other`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:863

Boolean union

#### Parameters

##### other

`Manifold`

#### Returns

`Manifold`

***

### intersect()

> **intersect**(`other`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:877

Boolean intersection

#### Parameters

##### other

`Manifold`

#### Returns

`Manifold`

***

### minkowskiDifference()

> **minkowskiDifference**(`other`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:974

Subtract the sweep of the other manifold across this manifold's surface.
This corresponds to the morphological erosion of the manifold.

#### Parameters

##### other

`Manifold`

The other manifold to minkowski subtract from this one.

#### Returns

`Manifold`

***

### minkowskiSum()

> **minkowskiSum**(`other`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:965

Compute the minkowski sum of this manifold with another.
This corresponds to the morphological dilation of the manifold.

#### Parameters

##### other

`Manifold`

The other manifold to minkowski sum to this one.

#### Returns

`Manifold`

***

### split()

> **split**(`cutter`): \[`Manifold`, `Manifold`\]

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:929

Split cuts this manifold in two using the cutter manifold. The first result
is the intersection, second is the difference. This is more efficient than
doing them separately.

#### Parameters

##### cutter

`Manifold`

#### Returns

\[`Manifold`, `Manifold`\]

***

### splitByPlane()

> **splitByPlane**(`normal`, `originOffset`): \[`Manifold`, `Manifold`\]

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:942

Convenient version of Split() for a half-space.

#### Parameters

##### normal

readonly \[`number`, `number`, `number`\]

This vector is normal to the cutting plane and its length
    does
not matter. The first result is in the direction of this vector, the second
result is on the opposite side.

##### originOffset

`number`

The distance of the plane from the origin in the
direction of the normal vector.

#### Returns

\[`Manifold`, `Manifold`\]

***

### subtract()

> **subtract**(`other`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:870

Boolean difference

#### Parameters

##### other

`Manifold`

#### Returns

`Manifold`

***

### trimByPlane()

> **trimByPlane**(`normal`, `originOffset`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:956

Removes everything behind the given half-space plane.

#### Parameters

##### normal

readonly \[`number`, `number`, `number`\]

This vector is normal to the cutting plane and its length
    does not matter. The result is in the direction of this vector from the
    plane.

##### originOffset

`number`

The distance of the plane from the origin in the
    direction of the normal vector.

#### Returns

`Manifold`

***

### difference()

#### Call Signature

> `static` **difference**(`a`, `b`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:891

Boolean difference of the manifold b from the manifold a

##### Parameters

###### a

`Manifold`

###### b

`Manifold`

##### Returns

`Manifold`

#### Call Signature

> `static` **difference**(`manifolds`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:912

Boolean difference of the tail of a list of manifolds from its head

##### Parameters

###### manifolds

readonly `Manifold`[]

##### Returns

`Manifold`

***

### intersection()

#### Call Signature

> `static` **intersection**(`a`, `b`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:898

Boolean intersection of the manifolds a and b

##### Parameters

###### a

`Manifold`

###### b

`Manifold`

##### Returns

`Manifold`

#### Call Signature

> `static` **intersection**(`manifolds`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:919

Boolean intersection of a list of manifolds

##### Parameters

###### manifolds

readonly `Manifold`[]

##### Returns

`Manifold`

***

### union()

#### Call Signature

> `static` **union**(`a`, `b`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:884

Boolean union of the manifolds a and b

##### Parameters

###### a

`Manifold`

###### b

`Manifold`

##### Returns

`Manifold`

#### Call Signature

> `static` **union**(`manifolds`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:905

Boolean union of a list of manifolds

##### Parameters

###### manifolds

readonly `Manifold`[]

##### Returns

`Manifold`

## Convex Hull

### hull()

> **hull**(): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1002

Compute the convex hull of all points in this Manifold.

#### Returns

`Manifold`

***

### hull()

> `static` **hull**(`points`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1010

Compute the convex hull of all points contained within a set of Manifolds
and point vectors.

#### Parameters

##### points

readonly ([`Vec3`](../../manifold-global-types/type-aliases/Vec3.md) \| `Manifold`)[]

#### Returns

`Manifold`

## Information

### boundingBox()

> **boundingBox**(): [`Box`](../../manifold-global-types/type-aliases/Box.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1079

Returns the axis-aligned bounding box of all the Manifold's vertices.

#### Returns

[`Box`](../../manifold-global-types/type-aliases/Box.md)

***

### genus()

> **genus**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1117

The genus is a topological property of the manifold, representing the
number of "handles". A sphere is 0, torus 1, etc. It is only meaningful for
a single mesh, so it is best to call Decompose() first.

#### Returns

`number`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1041

Does the Manifold have any triangles?

#### Returns

`boolean`

***

### numEdge()

> **numEdge**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1059

The number of edges in the Manifold.

#### Returns

`number`

***

### numProp()

> **numProp**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1065

The number of properties per vertex in the Manifold.

#### Returns

`number`

***

### numPropVert()

> **numPropVert**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1073

The number of property vertices in the Manifold. This will always be >=
numVert, as some physical vertices may be duplicated to account for
different properties on different neighboring triangles.

#### Returns

`number`

***

### numTri()

> **numTri**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1053

The number of triangles in the Manifold.

#### Returns

`number`

***

### numVert()

> **numVert**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1047

The number of vertices in the Manifold.

#### Returns

`number`

***

### status()

> **status**(): [`ErrorStatus`](../../manifold-global-types/type-aliases/ErrorStatus.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1149

Returns the reason for an input Mesh producing an empty Manifold. This
Status will carry on through operations like NaN propogation, ensuring an
errored mesh doesn't get mysteriously lost. Empty meshes may still show
NoError, for instance the intersection of non-overlapping meshes.

#### Returns

[`ErrorStatus`](../../manifold-global-types/type-aliases/ErrorStatus.md)

***

### tolerance()

> **tolerance**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1090

Returns the tolerance of this Manifold's vertices, which tracks the
approximate rounding error over all the transforms and operations that have
led to this state. Any triangles that are colinear within this tolerance
are considered degenerate and removed. This is the value of &epsilon;
defining
[&epsilon;-valid](https://github.com/elalish/manifold/wiki/Manifold-Library#definition-of-%CE%B5-valid).

#### Returns

`number`

## Input & Output

### getMesh()

> **getMesh**(`normalIdx?`): [`Mesh`](Mesh.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1168

Returns a Mesh that is designed to easily push into a renderer, including
all interleaved vertex properties that may have been input. It also
includes relations to all the input meshes that form a part of this result
and the transforms applied to each.

#### Parameters

##### normalIdx?

`number`

If the original MeshGL inputs that formed this manifold
had properties corresponding to normal vectors, you can specify the first
of the three consecutive property channels forming the (x, y, z) normals,
which will cause this output MeshGL to automatically update these normals
according to the applied transforms and front/back side. normalIdx + 3 must
be \<\= numProp, and all original MeshGLs must use the same channels for
their normals.

#### Returns

[`Mesh`](Mesh.md)

***

### ofMesh()

> `static` **ofMesh**(`mesh`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:588

Convert a Mesh into a Manifold, retaining its properties and merging only
the positions according to the merge vectors. Will throw an error if the
result is not an oriented 2-manifold. Will collapse degenerate triangles
and unnecessary vertices.

All fields are read, making this structure suitable for a lossless
round-trip of data from getMesh(). For multi-material input, use
reserveIDs() to set a unique originalID for each material, and sort the
materials into triangle runs.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

#### Returns

`Manifold`

## Measurement

### minGap()

> **minGap**(`other`, `searchLength`): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1139

Returns the minimum gap between two manifolds. Returns a float between
0 and searchLength.

#### Parameters

##### other

`Manifold`

##### searchLength

`number`

#### Returns

`number`

***

### surfaceArea()

> **surfaceArea**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1124

Returns the surface area of the manifold.

#### Returns

`number`

***

### volume()

> **volume**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1131

Returns the volume of the manifold.

#### Returns

`number`

## Mesh ID

### asOriginal()

> **asOriginal**(): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1187

If you copy a manifold, but you want this new copy to have new properties
(e.g. a different UV mapping), you can reset its IDs to a new original,
meaning it will now be referenced by its descendants instead of the meshes
it was built from, allowing you to differentiate the copies when applying
your properties to the final result.

This function also condenses all coplanar faces in the relation, and
collapses those edges. If you want to have inconsistent properties across
these faces, meaning you want to preserve some of these edges, you should
instead call GetMesh(), calculate your properties and use these to
construct a new manifold.

#### Returns

`Manifold`

***

### originalID()

> **originalID**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1196

If this mesh is an original, this returns its ID that can be referenced
by product manifolds. If this manifold is a product, this
returns -1.

#### Returns

`number`

***

### reserveIDs()

> `static` **reserveIDs**(`count`): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1205

Returns the first of n sequential new unique mesh IDs for marking sets of
triangles that can be looked up after further operations. Assign to
Mesh.runOriginalID vector.

#### Parameters

##### count

`number`

#### Returns

`number`

## Polygons

### project()

> **project**(): [`CrossSection`](CrossSection.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:993

Returns a cross section representing the projected outline of this object
onto the X-Y plane.

#### Returns

[`CrossSection`](CrossSection.md)

***

### slice()

> **slice**(`height`): [`CrossSection`](CrossSection.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:985

Returns the cross section of this object parallel to the X-Y plane at the
specified height. Using a height equal to the bottom
of the bounding box will return the bottom faces, while using a height
equal to the top of the bounding box will return empty.

#### Parameters

##### height

`number`

Z-level of slice.

#### Returns

[`CrossSection`](CrossSection.md)

***

### extrude()

> `static` **extrude**(`polygons`, `height`, `nDivisions?`, `twistDegrees?`, `scaleTop?`, `center?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:552

Constructs a manifold from a set of polygons/cross-section by extruding
them along the Z-axis.

#### Parameters

##### polygons

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| [`CrossSection`](CrossSection.md)

A set of non-overlapping polygons to extrude.

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

`Manifold`

***

### revolve()

> `static` **revolve**(`polygons`, `circularSegments?`, `revolveDegrees?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:570

Constructs a manifold from a set of polygons/cross-section by revolving
them around the Y-axis and then setting this as the Z-axis of the resulting
manifold. If the polygons cross the Y-axis, only the part on the positive X
side is used. Geometrically valid input will result in geometrically valid
output.

#### Parameters

##### polygons

[`Polygons`](../../manifold-global-types/type-aliases/Polygons.md) \| [`CrossSection`](CrossSection.md)

A set of non-overlapping polygons to revolve.

##### circularSegments?

`number`

Number of segments along its diameter. Default is
calculated by the static Defaults.

##### revolveDegrees?

`number`

Number of degrees to revolve. Default is 360 degrees.

#### Returns

`Manifold`

## Smoothing

### refine()

> **refine**(`n`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:770

Increase the density of the mesh by splitting every edge into n pieces. For
instance, with n = 2, each triangle will be split into 4 triangles. These
will all be coplanar (and will not be immediately collapsed) unless the
Mesh/Manifold has halfedgeTangents specified (e.g. from the Smooth()
constructor), in which case the new vertices will be moved to the
interpolated surface according to their barycentric coordinates.

#### Parameters

##### n

`number`

The number of pieces to split every edge into. Must be > 1.

#### Returns

`Manifold`

***

### refineToLength()

> **refineToLength**(`length`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:783

Increase the density of the mesh by splitting each edge into pieces of
roughly the input length. Interior verts are added to keep the rest of the
triangulation edges also of roughly the same length. If halfedgeTangents
are present (e.g. from the Smooth() constructor), the new vertices will be
moved to the interpolated surface according to their barycentric
coordinates.

#### Parameters

##### length

`number`

The length that edges will be broken down to.

#### Returns

`Manifold`

***

### refineToTolerance()

> **refineToTolerance**(`tolerance`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:798

Increase the density of the mesh by splitting each edge into pieces such
that any point on the resulting triangles is roughly within tolerance of
the smoothly curved surface defined by the tangent vectors. This means
tightly curving regions will be divided more finely than smoother regions.
If halfedgeTangents are not present, the result will simply be a copy of
the original. Quads will ignore their interior triangle bisector.

#### Parameters

##### tolerance

`number`

The desired maximum distance between the faceted mesh
produced and the exact smoothly curving surface. All vertices are exactly
on the surface, within rounding error.

#### Returns

`Manifold`

***

### smoothByNormals()

> **smoothByNormals**(`normalIdx`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:737

Smooths out the Manifold by filling in the halfedgeTangent vectors. The
geometry will remain unchanged until Refine or RefineToLength is called to
interpolate the surface. This version uses the supplied vertex normal
properties to define the tangent vectors.

#### Parameters

##### normalIdx

`number`

The first property channel of the normals. NumProp must be
at least normalIdx + 3. Any vertex where multiple normals exist and don't
agree will result in a sharp edge.

#### Returns

`Manifold`

***

### smoothOut()

> **smoothOut**(`minSharpAngle?`, `minSmoothness?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:757

Smooths out the Manifold by filling in the halfedgeTangent vectors. The
geometry will remain unchanged until Refine or RefineToLength is called to
interpolate the surface. This version uses the geometry of the triangles
and pseudo-normals to define the tangent vectors.

#### Parameters

##### minSharpAngle?

`number`

degrees, default 60. Any edges with angles greater
than this value will remain sharp. The rest will be smoothed to G1
continuity, with the caveat that flat faces of three or more triangles will
always remain flat. With a value of zero, the model is faceted, but in this
case there is no point in smoothing.

##### minSmoothness?

`number`

range: 0 - 1, default 0. The smoothness applied to
sharp angles. The default gives a hard edge, while values > 0 will give a
small fillet on these sharp edges. A value of 1 is equivalent to a
minSharpAngle of 180 - all edges will be smooth.

#### Returns

`Manifold`

***

### smooth()

> `static` **smooth**(`mesh`, `sharpenedEdges?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:620

Constructs a smooth version of the input mesh by creating tangents; this
method will throw if you have supplied tangents with your mesh already. The
actual triangle resolution is unchanged; use the Refine() method to
interpolate to a higher-resolution curve.

By default, every edge is calculated for maximum smoothness (very much
approximately), attempting to minimize the maximum mean Curvature
magnitude. No higher-order derivatives are considered, as the interpolation
is independent per triangle, only sharing constraints on their boundaries.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

input Mesh.

##### sharpenedEdges?

readonly [`Smoothness`](../../manifold-global-types/type-aliases/Smoothness.md)[]

If desired, you can supply a vector of sharpened
halfedges, which should in general be a small subset of all halfedges.
Order of entries doesn't matter, as each one specifies the desired
smoothness (between zero and one, with one the default for all unspecified
halfedges) and the halfedge index (3 * triangle index + [0,1,2] where 0 is
the edge between triVert 0 and 1, etc).

At a smoothness value of zero, a sharp crease is made. The smoothness is
interpolated along each edge, so the specified value should be thought of
as an average. Where exactly two sharpened edges meet at a vertex, their
tangents are rotated to be colinear so that the sharpened edge can be
continuous. Vertices with only one sharpened edge are completely smooth,
allowing sharpened edges to smoothly vanish at termination. A single vertex
can be sharpened by sharping all edges that are incident on it, allowing
cones to be formed.

#### Returns

`Manifold`

## Transformations

### mirror()

> **mirror**(`normal`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:712

Mirror this Manifold over the plane described by the unit form of the given
normal vector. If the length of the normal is zero, an empty Manifold is
returned. This operation can be chained. Transforms are combined and
applied lazily.

#### Parameters

##### normal

readonly \[`number`, `number`, `number`\]

The normal vector of the plane to be mirrored over

#### Returns

`Manifold`

***

### rotate()

#### Call Signature

> **rotate**(`v`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:691

Applies an Euler or Tait-Bryan angle rotation to the manifold.  This
operation can be chained. Transforms are combined and applied lazily.

We use degrees so that we can minimize rounding error, and eliminate it
completely for any multiples of 90 degrees. Additionally, more efficient
code paths are used to update the manifold when the transforms only rotate
by multiples of 90 degrees.

From the reference frame of the model being rotated, rotations are applied
in *z-y'-x"* order. That is yaw first, then pitch and finally roll.

From the global reference frame, a model will be rotated in *x-y-z* order.
That is about the global X axis, then global Y axis, and finally global Z.

##### Parameters

###### v

readonly \[`number`, `number`, `number`\]

[X, Y, Z] rotation in degrees.

##### Returns

`Manifold`

#### Call Signature

> **rotate**(`x`, `y?`, `z?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:692

Applies an Euler or Tait-Bryan angle rotation to the manifold.  This
operation can be chained. Transforms are combined and applied lazily.

We use degrees so that we can minimize rounding error, and eliminate it
completely for any multiples of 90 degrees. Additionally, more efficient
code paths are used to update the manifold when the transforms only rotate
by multiples of 90 degrees.

From the reference frame of the model being rotated, rotations are applied
in *z-y'-x"* order. That is yaw first, then pitch and finally roll.

From the global reference frame, a model will be rotated in *x-y-z* order.
That is about the global X axis, then global Y axis, and finally global Z.

##### Parameters

###### x

`number`

###### y?

`number`

###### z?

`number`

##### Returns

`Manifold`

***

### scale()

> **scale**(`v`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:701

Scale this Manifold in space. This operation can be chained. Transforms are
combined and applied lazily.

#### Parameters

##### v

`number` \| readonly \[`number`, `number`, `number`\]

The vector to multiply every vertex by per component.

#### Returns

`Manifold`

***

### setTolerance()

> **setTolerance**(`tolerance`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1097

Return a copy of the manifold with the set tolerance value.
This performs mesh simplification when the tolerance value is increased.

#### Parameters

##### tolerance

`number`

#### Returns

`Manifold`

***

### simplify()

> **simplify**(`tolerance?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1109

Return a copy of the manifold simplified to the given tolerance, but with
its actual tolerance value unchanged. The result will contain a subset of
the original verts and all surfaces will have moved by less than tolerance.

#### Parameters

##### tolerance?

`number`

The maximum distance between the original and simplified
    meshes. If not given or is less than the current tolerance, the current
    tolerance is used.

#### Returns

`Manifold`

***

### transform()

> **transform**(`m`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:661

Transform this Manifold in space. Stored in column-major order. This
operation can be chained. Transforms are combined and applied lazily.

#### Parameters

##### m

[`Mat4`](../../manifold-global-types/type-aliases/Mat4.md)

The affine transformation matrix to apply to all the vertices. The
    last row is ignored.

#### Returns

`Manifold`

***

### translate()

#### Call Signature

> **translate**(`v`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:670

Move this Manifold in space. This operation can be chained. Transforms are
combined and applied lazily.

##### Parameters

###### v

readonly \[`number`, `number`, `number`\]

The vector to add to every vertex.

##### Returns

`Manifold`

#### Call Signature

> **translate**(`x`, `y?`, `z?`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:671

Move this Manifold in space. This operation can be chained. Transforms are
combined and applied lazily.

##### Parameters

###### x

`number`

###### y?

`number`

###### z?

`number`

##### Returns

`Manifold`

***

### warp()

> **warp**(`warpFunc`): `Manifold`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:724

This function does not change the topology, but allows the vertices to be
moved according to any arbitrary input function. It is easy to create a
function that warps a geometrically valid object into one which overlaps,
but that is not checked here, so it is up to the user to choose their
function with discretion.

#### Parameters

##### warpFunc

(`vert`) => `void`

A function that modifies a given vertex position.

#### Returns

`Manifold`
