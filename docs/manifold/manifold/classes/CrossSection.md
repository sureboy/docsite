[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold](../README.md) / CrossSection

# Class: CrossSection

Defined in: manifold-3d/manifold.d.ts:32

二维横截面，确保从构建开始就不存在自相交以及多边形之间的重叠。该类使用 Clipper2 库来实现多边形裁剪（布尔运算）与偏移操作。

## See

 - [C++ API: CrossSection Class Reference](https://manifoldcad.org/docs/html/classmanifold_1_1_cross_section.html)
 - [Clipper2 - Polygon Clipping Offsetting & Triangulating](https://www.angusj.com/clipper2/Docs/Overview.htm)

## Constructors

### decompose()

> **decompose**(): `CrossSection`[]

Defined in: manifold-3d/manifold.d.ts:300

该操作返回一个截面（CrossSection）向量，这些截面在拓扑上彼此不连通，每个截面包含一条外轮廓线以及零个或多个内孔。

#### Returns

`CrossSection`[]

***

### circle()

> `static` **circle**(`radius`, `circularSegments?`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:68

构造一个具有给定半径的圆。

#### Parameters

##### radius

`number`

圆的半径。必须为正数。

##### circularSegments?

`number`

沿直径方向的分段数量。默认值由静态质量默认参数根据半径计算得出。

#### Returns

`CrossSection`

***

### square()

> `static` **square**(`size?`, `center?`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:58

根据给定的XY尺寸构建一个正方形。默认情况下，它位于第一象限并与原点相切。如果尺寸中的任意值为负数，或所有值均为零，则将返回一个空的流形（Manifold）对象。

#### Parameters

##### size?

`number` \| readonly \[`number`, `number`\]

正方形的 **X 轴和 Y 轴尺寸**。

##### center?

`boolean`

设为 `true` 可将中心移至原点。

#### Returns

`CrossSection`

## Basics

### Constructor

> **new CrossSection**(`contours`, `fillRule?`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:45

根据一组轮廓线（复杂多边形）创建二维截面。
系统将执行布尔并集运算（默认采用**正向填充规则**），以合并重叠的多边形，并确保最终生成的截面无相交情况。

#### Parameters

##### contours

[`Polygons`](../type-aliases/Polygons.md)

一组闭合路径，用于描述零个或多个复杂多边形。

##### fillRule?

[`FillRule`](../type-aliases/FillRule.md)

用于解析轮廓中多边形子区域的**填充规则**。

#### Returns

`CrossSection`

***

### delete()

> **delete**(): `void`

Defined in: manifold-3d/manifold.d.ts:365

释放此截面（CrossSection）的WASM内存，因其无法被自动垃圾回收。

#### Returns

`void`

## Boolean

### add()

> **add**(`other`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:218

Boolean union

#### Parameters

##### other

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

#### Returns

`CrossSection`

***

### intersect()

> **intersect**(`other`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:230

Boolean intersection

#### Parameters

##### other

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

#### Returns

`CrossSection`

***

### subtract()

> **subtract**(`other`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:224

Boolean difference

#### Parameters

##### other

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

#### Returns

`CrossSection`

***

### compose()

> `static` **compose**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:292

基于一组其他多边形向量构建截面（批量布尔并集运算）。

#### Parameters

##### polygons

readonly (`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md))[]

#### Returns

`CrossSection`

***

### difference()

#### Call Signature

> `static` **difference**(`a`, `b`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:243

截面 **b** 相对于截面 **a** 的**布尔差集**

##### Parameters

###### a

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

###### b

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

##### Returns

`CrossSection`

#### Call Signature

> `static` **difference**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:263

截面列表中，**头部截面与尾部所有截面的布尔差集**

##### Parameters

###### polygons

readonly (`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md))[]

##### Returns

`CrossSection`

***

### intersection()

#### Call Signature

> `static` **intersection**(`a`, `b`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:250

截面 **a** 与 **b** 的**布尔交集**

##### Parameters

###### a

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

###### b

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

##### Returns

`CrossSection`

#### Call Signature

> `static` **intersection**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:268

一组截面的**布尔交集**

##### Parameters

###### polygons

readonly (`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md))[]

##### Returns

`CrossSection`

***

### union()

#### Call Signature

> `static` **union**(`a`, `b`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:236

截面 **a** 与 **b** 的**布尔并集**

##### Parameters

###### a

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

###### b

`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md)

##### Returns

`CrossSection`

#### Call Signature

> `static` **union**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:257

Boolean union of a list of cross-sections

##### Parameters

###### polygons

readonly (`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md))[]

##### Returns

`CrossSection`

## Convex Hull

### hull()

> **hull**(): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:277

Compute the convex hull of the contours in this CrossSection.

#### Returns

`CrossSection`

***

### hull()

> `static` **hull**(`polygons`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:283

Compute the convex hull of all points in a list of polygons/cross-sections.

#### Parameters

##### polygons

readonly (`CrossSection` \| [`Polygons`](../type-aliases/Polygons.md))[]

#### Returns

`CrossSection`

## Information

### area()

> **area**(): `number`

Defined in: manifold-3d/manifold.d.ts:331

Return the total area covered by complex polygons making up the
CrossSection.

#### Returns

`number`

***

### bounds()

> **bounds**(): [`Rect`](../type-aliases/Rect.md)

Defined in: manifold-3d/manifold.d.ts:356

Returns the axis-aligned bounding rectangle of all the CrossSection's
vertices.

#### Returns

[`Rect`](../type-aliases/Rect.md)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: manifold-3d/manifold.d.ts:337

Does the CrossSection (not) have any contours?

#### Returns

`boolean`

***

### numContour()

> **numContour**(): `number`

Defined in: manifold-3d/manifold.d.ts:349

The number of contours in the CrossSection.

#### Returns

`number`

***

### numVert()

> **numVert**(): `number`

Defined in: manifold-3d/manifold.d.ts:343

The number of vertices in the CrossSection.

#### Returns

`number`

## Input & Output

### toPolygons()

> **toPolygons**(): [`SimplePolygon`](../type-aliases/SimplePolygon.md)[]

Defined in: manifold-3d/manifold.d.ts:322

Return the contours of this CrossSection as a list of simple polygons.

#### Returns

[`SimplePolygon`](../type-aliases/SimplePolygon.md)[]

***

### ofPolygons()

> `static` **ofPolygons**(`contours`, `fillRule?`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:316

根据一组轮廓线（复杂多边形）创建二维截面。
程序会执行布尔并集运算（默认采用**正向填充规则**），合并重叠的多边形，并确保最终生成的截面无自相交问题。

#### Parameters

##### contours

[`Polygons`](../type-aliases/Polygons.md)

一组闭合路径，用于描述**零个或多个复杂多边形**。

##### fillRule?

[`FillRule`](../type-aliases/FillRule.md)

用于解析轮廓中多边形子区域的**填充规则**。

#### Returns

`CrossSection`

## Transformations

### extrude()

> **extrude**(`height`, `nDivisions?`, `twistDegrees?`, `scaleTop?`, `center?`): [`Manifold`](Manifold.md)

Defined in: manifold-3d/manifold.d.ts:89

Constructs a manifold by extruding the cross-section along Z-axis.

#### Parameters

##### height

`number`

Z-extent of extrusion.

##### nDivisions?

`number`

需沿竖直方向向几何体中插入的截面额外副本数量；
在与扭转角度配合使用时尤为实用，可避免插值失真。
默认无额外副本。

##### twistDegrees?

`number`

顶部截面相对于底部截面的**扭转角度**，中间各分段将进行线性插值。

##### scaleTop?

`number` \| readonly \[`number`, `number`\]

顶部的缩放比例（**X、Y方向独立缩放**）。
若缩放值为 `{0, 0}`，则会形成顶部仅有单个顶点的标准锥体。
默认值为 `{1, 1}`。

##### center?

`boolean`

若为 `true`，挤出体将以**穿过原点的Z轴为中心**，
而非默认的放置在XY平面上。

#### Returns

[`Manifold`](Manifold.md)

***

### mirror()

> **mirror**(`ax`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:155

沿给定向量的单位向量所表示的任意轴对该截面进行**镜像**。
若向量长度为零，则返回一个空截面。
该操作可链式调用。变换会被合并并延迟执行。

#### Parameters

##### ax

readonly \[`number`, `number`\]

the axis to be mirrored over

#### Returns

`CrossSection`

***

### offset()

> **offset**(`delta`, `joinType?`, `miterLimit?`, `circularSegments?`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:189

按照指定的偏移量对截面中的轮廓进行**膨胀**处理，并根据给定的**连接类型**处理拐角。

#### Parameters

##### delta

`number`

正值偏移量会使**外轮廓膨胀**，同时使**内部孔轮廓收缩**。
负值偏移量则会产生相反的效果。

##### joinType?

[`JoinType`](../type-aliases/JoinType.md)

指定轮廓连接处（拐角）处理方式的**连接类型**，默认为**圆角**。

##### miterLimit?

`number`

当**连接类型为斜接（Miter）**时，该值表示顶点在进行直角化处理前，可从原始位置偏移的最大距离（以偏移量 delta 的倍数计）。
默认值为 2，同时也是允许的最小值。
直观示例可参见 [Clipper2 斜接限制](http://www.angusj.com/clipper2/Docs/Units/Clipper.Offset/Classes/ClipperOffset/Properties/MiterLimit.htm) 页面。

##### circularSegments?

`number`

*JoinType::Round* 圆角每旋转360度对应的分段数量（大致为每个轮廓上新增的顶点数量）。默认值由静态质量默认设置根据半径自动计算。

#### Returns

`CrossSection`

***

### revolve()

> **revolve**(`circularSegments?`, `revolveDegrees?`): [`Manifold`](Manifold.md)

Defined in: manifold-3d/manifold.d.ts:103

将此截面绕其 **Y 轴** 旋转生成流形，
并将该旋转轴设为最终流形的 **Z 轴**。
若轮廓跨越 Y 轴，则仅使用 **X 轴正方向** 的部分。
几何合法的输入将得到几何合法的输出。

#### Parameters

##### circularSegments?

`number`

沿直径方向的分段数量。默认值由静态默认参数计算得出。

##### revolveDegrees?

`number`

#### Returns

[`Manifold`](Manifold.md)

***

### rotate()

> **rotate**(`degrees`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:134

对截面施加（绕Z轴）旋转，单位为**度**。该操作可链式调用，多个变换会被合并并延迟执行。

#### Parameters

##### degrees

`number`

degrees about the Z-axis to rotate.

#### Returns

`CrossSection`

***

### scale()

> **scale**(`v`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:143

对该截面在空间中进行**缩放**。此操作可链式调用，多个变换会被合并并延迟执行。

#### Parameters

##### v

`number` \| readonly \[`number`, `number`\]

The vector to multiply every vertex by per component.

#### Returns

`CrossSection`

***

### simplify()

> **simplify**(`epsilon?`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:210


移除该截面轮廓中，与穿过其两个相邻顶点的假想直线距离小于指定阈值 **epsilon** 的顶点。
在较小的 epsilon 阈值下，邻近的重复顶点与共线点将被移除；epsilon 越大，线段剔除效果会越显著。

建议在执行**偏移**操作后调用此函数，以清理那些不会有效提升模型质量、却被额外生成的微小杂散线段。
若后续还需进行多次偏移操作，这一步尤为关键，否则问题会不断累积放大。

#### Parameters

##### epsilon?

`number`

顶点必须与**不包含该顶点时的假想轮廓**偏离至少此最小距离，才会被保留在输出结果中（默认值为 1e-6）。

#### Returns

`CrossSection`

***

### transform()

> **transform**(`m`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:115

对该截面执行**空间变换**。变换矩阵以**列优先**顺序存储。
该操作可链式调用，多个变换会被合并并延迟执行。

#### Parameters

##### m

[`Mat3`](../type-aliases/Mat3.md)

应用于所有顶点的**仿射变换矩阵**，**最后一行将被忽略**。

#### Returns

`CrossSection`

***

### translate()

#### Call Signature

> **translate**(`v`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:124

对该截面执行**空间平移**。此操作可链式调用，多个变换会被合并并延迟执行。

##### Parameters

###### v

readonly \[`number`, `number`\]

The vector to add to every vertex.

##### Returns

`CrossSection`

#### Call Signature

> **translate**(`x`, `y?`): `CrossSection`

Defined in: manifold-3d/manifold.d.ts:125

对该截面进行**空间平移**。该操作支持链式调用，多个变换会被合并并延迟执行。

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

Defined in: manifold-3d/manifold.d.ts:166

根据任意输入函数移动此截面的顶点（并创建一个新截面），随后执行**并集运算**（采用**正向填充规则**），以确保结果中不包含运算引入的任何相交部分。

#### Parameters

##### warpFunc

(`vert`) => `void`

一个用于修改给定顶点位置的函数。

#### Returns

`CrossSection`
