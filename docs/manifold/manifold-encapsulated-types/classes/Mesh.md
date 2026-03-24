[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold-encapsulated-types](../README.md) / Mesh

# Class: Mesh

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1245

**`Internal`**

An alternative to Mesh for output suitable for pushing into graphics
libraries directly. This may not be manifold since the verts are duplicated
along property boundaries that do not match. The additional merge vectors
store this missing information, allowing the manifold to be reconstructed.

## See

[C++ API: MeshGLP\< Precision, I \> Struct Template Reference](https://manifoldcad.org/docs/html/structmanifold_1_1_mesh_g_l_p.html)

## Constructors

### Constructor

> **new Mesh**(`options`): `Mesh`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1246

#### Parameters

##### options

[`MeshOptions`](../interfaces/MeshOptions.md)

#### Returns

`Mesh`

## Properties

### faceID

> **faceID**: `Uint32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1314

Optional: Length NumTri, contains the source face ID this triangle comes
from. Simplification will maintain all edges between triangles with
different faceIDs. Input faceIDs will be maintained to the outputs, but if
none are given, they will be filled in with Manifold's coplanar face
calculation based on mesh tolerance.

***

### halfedgeTangent

> **halfedgeTangent**: `Float32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1322

Optional: The X-Y-Z-W weighted tangent vectors for smooth Refine(). If
non-empty, must be exactly four times as long as Mesh.triVerts. Indexed
as 4 * (3 * tri + i) + j, i < 3, j < 4, representing the tangent value
Mesh.triVerts[tri][i] along the CCW edge. If empty, mesh is faceted.

***

### mergeFromVert

> **mergeFromVert**: `Uint32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1270

Optional: A list of only the vertex indicies that need to be merged to
reconstruct the manifold.

***

### mergeToVert

> **mergeToVert**: `Uint32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1277

Optional: The same length as mergeFromVert, and the corresponding value
contains the vertex to merge with. It will have an identical position, but
the other properties may differ.

***

### numProp

> **numProp**: `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1251

Number of properties per vertex, always >= 3.

***

### runIndex

> **runIndex**: `Uint32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1288

Optional: Indicates runs of triangles that correspond to a particular
input mesh instance. The runs encompass all of triVerts and are sorted
by runOriginalID. Run i begins at triVerts[runIndex[i]] and ends at
triVerts[runIndex[i+1]]. All runIndex values are divisible by 3. Returned
runIndex will always be 1 longer than runOriginalID, but same length is
also allowed as input: triVerts.size() will be automatically appended in
this case.

***

### runOriginalID

> **runOriginalID**: `Uint32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1297

Optional: The OriginalID of the mesh this triangle run came from. This ID
is ideal for reapplying materials to the output mesh. Multiple runs may
have the same ID, e.g. representing different copies of the same input
mesh. If you create an input MeshGL that you want to be able to reference
as one or more originals, be sure to set unique values from ReserveIDs().

***

### runTransform

> **runTransform**: `Float32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1305

Optional: For each run, a 3x4 transform is stored representing how the
corresponding original mesh was transformed to create this triangle run.
This matrix is stored in column-major order and the length of the overall
vector is 12 * runOriginalID.size().

***

### tolerance

> **tolerance**: `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1330

Tolerance for mesh simplification. When creating a Manifold, the tolerance
used will be the maximum of this and a baseline tolerance from the size of
the bounding box. Any edge shorter than tolerance may be collapsed.
Tolerance may be enlarged when floating point error accumulates.

***

### triVerts

> **triVerts**: `Uint32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1264

The vertex indices of the three triangle corners in CCW (from the outside)
order, for each triangle.

***

### vertProperties

> **vertProperties**: `Float32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1258

Flat, GL-style interleaved list of all vertex properties: propVal =
vertProperties[vert * numProp + propIdx]. The first three properties are
always the position x, y, z.

## Accessors

### numRun

#### Get Signature

> **get** **numRun**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1346

Number of triangle runs. Each triangle run is a set of consecutive
triangles that all come from the same instance of the same input mesh.

##### Returns

`number`

***

### numTri

#### Get Signature

> **get** **numTri**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1335

Number of triangles

##### Returns

`number`

***

### numVert

#### Get Signature

> **get** **numVert**(): `number`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1340

Number of property vertices

##### Returns

`number`

## Methods

### extras()

> **extras**(`vert`): `Float32Array`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1383

Gets any other properties associated with this vertex.

#### Parameters

##### vert

`number`

vertex index.

#### Returns

`Float32Array`

***

### merge()

> **merge**(): `boolean`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1362

Updates the mergeFromVert and mergeToVert vectors in order to create a
manifold solid. If the MeshGL is already manifold, no change will occur and
the function will return false. Otherwise, this will merge verts along open
edges within tolerance (the maximum of the MeshGL tolerance and the
baseline bounding-box tolerance), keeping any from the existing merge
vectors.

There is no guarantee the result will be manifold - this is a best-effort
helper function designed primarily to aid in the case where a manifold
multi-material MeshGL was produced, but its merge vectors were lost due to
a round-trip through a file format. Constructing a Manifold from the result
will report a Status if it is not manifold.

#### Returns

`boolean`

***

### position()

> **position**(`vert`): `object`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1376

Gets the x, y, z position of this vertex.

#### Parameters

##### vert

`number`

vertex index.

#### Returns

##### length

> **length**: `3`

The length of the array.

***

### tangent()

> **tangent**(`halfedge`): `object`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1391

Gets the tangent vector starting at verts(tri)[j] pointing to the next
Bezier point along the CCW edge. The fourth value is its weight.

#### Parameters

##### halfedge

`number`

halfedge index: 3 * tri + j, where j is 0, 1, or 2.

#### Returns

##### length

> **length**: `4`

The length of the array.

***

### transform()

> **transform**(`run`): [`Mat4`](../../manifold-global-types/type-aliases/Mat4.md)

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1399

Gets the column-major 4x4 matrix transform from the original mesh to these
related triangles.

#### Parameters

##### run

`number`

triangle run index.

#### Returns

[`Mat4`](../../manifold-global-types/type-aliases/Mat4.md)

***

### verts()

> **verts**(`tri`): `object`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:1369

Gets the three vertex indices of this triangle in CCW order.

#### Parameters

##### tri

`number`

triangle index.

#### Returns

##### length

> **length**: `3`

The length of the array.
