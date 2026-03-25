
## modeling/primitives

基本图元为复杂零件提供了构建基础。
每个基本图元都是一个可通过数学方式描述的几何对象，因此具有精确性。
基本图元可以进行逻辑组合、变换、拉伸等操作。

**Example**  
```js
const { cube, ellipse, star } = require('@jscad/modeling').primitives
```

* [modeling/primitives]
    * [.arc(\[options\])]
    * [.circle(\[options\])]
    * [.cube(\[options\])]
    * [.cuboid(\[options\])]
    * [.cylinder(\[options\])]
    * [.cylinderElliptic(\[options\])]
    * [.ellipse(\[options\])]
    * [.ellipsoid(\[options\])]
    * [.geodesicSphere(\[options\])]
    * [.line(points)]
    * [.polygon(options)]
    * [.polyhedron(options)]
    * [.rectangle(\[options\])]
    * [.roundedCuboid(\[options\])]
    * [.roundedCylinder(\[options\])]
    * [.roundedRectangle(\[options\])]
    * [.sphere(\[options\])]
    * [.square(\[options\])]
    * [.star(\[options\])]
    * [.torus(\[options\])]
    * [.triangle(\[options\])]


### modeling/primitives.arc(\[options\])

在二维空间中构造一条圆弧，其上所有点到圆心的距离都相等。

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `path2` - new 2D path  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0]` | center of arc |
| \[options.radius\] | `Number` | `1` | radius of arc |
| \[options.startAngle\] | `Number` | `0` | starting angle of the arc, in radians |
| \[options.endAngle\] | `Number` | `TAU` | ending angle of the arc, in radians |
| \[options.segments\] | `Number` | `32` | 每完整旋转一圈所创建的段数 |
| \[options.makeTangent\] | `Boolean` | `false` | 在圆弧的两端添加线段，以确保边缘处的渐变方向相切。 |

**Example**  
```js
let myshape = arc({ center: [-1, -1], radius: 2, endAngle: (TAU / 4)})
```

### modeling/primitives.circle(\[options\])

在二维空间中构造一个圆，其上所有点到圆心的距离都相等。

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom2` - new 2D geometry  
**See**: [ellipse] for more options  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0]` | center of circle |
| \[options.radius\] | `Number` | `1` | radius of circle |
| \[options.startAngle\] | `Number` | `0` | start angle of circle, in radians |
| \[options.endAngle\] | `Number` | `TAU` | end angle of circle, in radians |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |

**Example**  
```js
let myshape = circle({radius: 10})
```

### modeling/primitives.cube(\[options\])

Construct an axis-aligned solid cube in three dimensional space with six square faces.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  
**See**: [cuboid] for more options  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0,0]` | center of cube |
| \[options.size\] | `Number` | `2` | dimension of cube |

**Example**  
```js
let myshape = cube({size: 10})
```

### modeling/primitives.cuboid(\[options\])

Construct an axis-aligned solid cuboid in three dimensional space.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0,0]` | center of cuboid |
| \[options.size\] | `Array` | `[2,2,2]` | dimensions of cuboid; width, depth, height |

**Example**  
```js
let myshape = cuboid({size: [5, 10, 5]})
```

### modeling/primitives.cylinder(\[options\])

Construct a Z axis-aligned cylinder in three dimensional space.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new geometry  
**See**: [cylinderElliptic] for more options  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0,0]` | center of cylinder |
| \[options.height\] | `Number` | `2` | height of cylinder |
| \[options.radius\] | `Number` | `1` | radius of cylinder (at both start and end) |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |

**Example**  
```js
let myshape = cylinder({height: 2, radius: 10})
```

### modeling/primitives.cylinderElliptic(\[options\])

Construct a Z axis-aligned elliptic cylinder in three dimensional space.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0,0]` | center of cylinder |
| \[options.height\] | `Number` | `2` | height of cylinder |
| \[options.startRadius\] | `Array` | `[1,1]` | radius of rounded start, must be two dimensional array |
| \[options.startAngle\] | `Number` | `0` | start angle of cylinder, in radians |
| \[options.endRadius\] | `Array` | `[1,1]` | radius of rounded end, must be two dimensional array |
| \[options.endAngle\] | `Number` | `TAU` | end angle of cylinder, in radians |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |

**Example**  
```js
let myshape = cylinderElliptic({height: 2, startRadius: [10,5], endRadius: [8,3]})
```

### modeling/primitives.ellipse(\[options\])

Construct an axis-aligned ellipse in two dimensional space.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom2` - new 2D geometry  
**See**: https://en.wikipedia.org/wiki/Ellipse  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0]` | center of ellipse |
| \[options.radius\] | `Array` | `[1,1]` | radius of ellipse, along X and Y |
| \[options.startAngle\] | `Number` | `0` | start angle of ellipse, in radians |
| \[options.endAngle\] | `Number` | `TAU` | end angle of ellipse, in radians |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |

**Example**  
```js
let myshape = ellipse({radius: [5,10]})
```

### modeling/primitives.ellipsoid(\[options\])

Construct an axis-aligned ellipsoid in three dimensional space.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0,0]` | center of ellipsoid |
| \[options.radius\] | `Array` | `[1,1,1]` | radius of ellipsoid, along X, Y and Z |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |
| \[options.axes\] | `Array` |  | an array with three vectors for the x, y and z base vectors |

**Example**  
```js
let myshape = ellipsoid({radius: [5, 10, 20]})
```

### modeling/primitives.geodesicSphere(\[options\])

Construct a geodesic sphere based on icosahedron symmetry.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.radius\] | `Number` | `1` | target radius of sphere |
| \[options.frequency\] | `Number` | `6` | subdivision frequency per face, multiples of 6 |

**Example**  
```js
let myshape = geodesicSphere({radius: 15, frequency: 18})
```

### modeling/primitives.line(points)

Construct a new line in two dimensional space from the given points.
The points must be provided as an array, where each element is a 2D point.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `path2` - new 2D path  

| Param | Type | Description |
| --- | --- | --- |
| points | `Array` | array of points from which to create the path |

**Example**  
```js
let myshape = line([[10, 10], [-10, 10]])
```

### modeling/primitives.polygon(options)

Construct a polygon in two dimensional space from a list of points, or a list of points and paths.

NOTE: The ordering of points is important, and must define a counter clockwise rotation of points.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom2` - new 2D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for construction |
| options.points | `Array` |  | points of the polygon : either flat or nested array of 2D points |
| \[options.paths\] | `Array` |  | paths of the polygon : either flat or nested array of point indexes |
| \[options.orientation\] | `String` | `&#x27;counterclockwise&#x27;` | orientation of points |

**Example**  
```js
let roof = [[10,11], [0,11], [5,20]]
let wall = [[0,0], [10,0], [10,10], [0,10]]

let poly = polygon({ points: roof })
or
let poly = polygon({ points: [roof, wall] })
or
let poly = polygon({ points: roof, paths: [0, 1, 2] })
or
let poly = polygon({ points: [roof, wall], paths: [[0, 1, 2], [3, 4, 5, 6]] })
```

### modeling/primitives.polyhedron(options)

Construct a polyhedron in three dimensional space from the given set of 3D points and faces.

The faces can define outward or inward facing polygons (orientation).
However, each face must define a counter clockwise rotation of points which follows the right hand rule.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for construction |
| options.points | `Array` |  | list of points in 3D space |
| options.faces | `Array` |  | list of faces, where each face is a set of indexes into the points |
| \[options.colors\] | `Array` |  | list of RGBA colors to apply to each face |
| \[options.orientation\] | `String` | `&#x27;outward&#x27;` | orientation of faces |

**Example**  
```js
let mypoints = [ [10, 10, 0], [10, -10, 0], [-10, -10, 0], [-10, 10, 0], [0, 0, 10] ]
let myfaces = [ [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4], [1, 0, 3], [2, 1, 3] ]
let myshape = polyhedron({points: mypoints, faces: myfaces, orientation: 'inward'})
```

### modeling/primitives.rectangle(\[options\])

Construct an axis-aligned rectangle in two dimensional space with four sides at right angles.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom2` - new 2D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0]` | center of rectangle |
| \[options.size\] | `Array` | `[2,2]` | dimension of rectangle, width and length |

**Example**  
```js
let myshape = rectangle({size: [10, 20]})
```

### modeling/primitives.roundedCuboid(\[options\])

Construct an axis-aligned solid cuboid in three dimensional space with rounded corners.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0,0]` | center of rounded cube |
| \[options.size\] | `Array` | `[2,2,2]` | dimension of rounded cube; width, depth, height |
| \[options.roundRadius\] | `Number` | `0.2` | radius of rounded edges |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |

**Example**  
```js
let mycube = roundedCuboid({size: [10, 20, 10], roundRadius: 2, segments: 16})
```

### modeling/primitives.roundedCylinder(\[options\])

Construct a Z axis-aligned solid cylinder in three dimensional space with rounded ends.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0,0]` | center of cylinder |
| \[options.height\] | `Number` | `2` | height of cylinder |
| \[options.radius\] | `Number` | `1` | radius of cylinder |
| \[options.roundRadius\] | `Number` | `0.2` | radius of rounded edges |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |

**Example**  
```js
let myshape = roundedCylinder({ height: 10, radius: 2, roundRadius: 0.5 })
```

### modeling/primitives.roundedRectangle(\[options\])

Construct an axis-aligned rectangle in two dimensional space with rounded corners.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom2` - new 2D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0]` | center of rounded rectangle |
| \[options.size\] | `Array` | `[2,2]` | dimension of rounded rectangle; width and length |
| \[options.roundRadius\] | `Number` | `0.2` | round radius of corners |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |

**Example**  
```js
let myshape = roundedRectangle({size: [10, 20], roundRadius: 2})
```

### modeling/primitives.sphere(\[options\])

Construct a sphere in three dimensional space where all points are at the same distance from the center.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  
**See**: [ellipsoid] for more options  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0,0]` | center of sphere |
| \[options.radius\] | `Number` | `1` | radius of sphere |
| \[options.segments\] | `Number` | `32` | number of segments to create per full rotation |
| \[options.axes\] | `Array` |  | an array with three vectors for the x, y and z base vectors |

**Example**  
```js
let myshape = sphere({radius: 5})
```

### modeling/primitives.square(\[options\])

Construct an axis-aligned square in two dimensional space with four equal sides at right angles.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom2` - new 2D geometry  
**See**: [rectangle] for more options  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0]` | center of square |
| \[options.size\] | `Number` | `2` | dimension of square |

**Example**  
```js
let myshape = square({size: 10})
```

### modeling/primitives.star(\[options\])

Construct a star in two dimensional space.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom2` - new 2D geometry  
**See**: https://en.wikipedia.org/wiki/Star_polygon  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.center\] | `Array` | `[0,0]` | center of star |
| \[options.vertices\] | `Number` | `5` | number of vertices (P) on the star |
| \[options.density\] | `Number` | `2` | density (Q) of star |
| \[options.outerRadius\] | `Number` | `1` | outer radius of vertices |
| \[options.innerRadius\] | `Number` | `0` | inner radius of vertices, or zero to calculate |
| \[options.startAngle\] | `Number` | `0` | starting angle for first vertice, in radians |

**Example**  
```js
let star1 = star({vertices: 8, outerRadius: 10}) // star with 8/2 density
let star2 = star({vertices: 12, outerRadius: 40, innerRadius: 20}) // star with given radius
```

### modeling/primitives.torus(\[options\])

Construct a torus by revolving a small circle (inner) about the circumference of a large (outer) circle.

**Kind**: static method of [`modeling/primitives`]  
**Returns**: `geom3` - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.innerRadius\] | `Number` | `1` | radius of small (inner) circle |
| \[options.outerRadius\] | `Number` | `4` | radius of large (outer) circle |
| \[options.innerSegments\] | `Integer` | `32` | number of segments to create per rotation |
| \[options.outerSegments\] | `Integer` | `32` | number of segments to create per rotation |
| \[options.innerRotation\] | `Integer` | `0` | rotation of small (inner) circle in radians |
| \[options.outerRotation\] | `Number` | `TAU` | rotation (outer) of the torus (RADIANS) |
| \[options.startAngle\] | `Number` | `0` | start angle of the torus (RADIANS) |

**Example**  
```js
let myshape = torus({ innerRadius: 10, outerRadius: 100 })
```

### modeling/primitives.triangle(\[options\])

Construct a triangle in two dimensional space from the given options.
The triangle is always constructed CCW from the origin, [0, 0, 0].

**Kind**: static method of [`modeling/primitives`][1]  
**Returns**: `geom2` - new 2D geometry  
**See**: https://www.mathsisfun.com/algebra/trig-solving-triangles.html  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.type\] | `String` | `&#x27;SSS&#x27;` | type of triangle to construct; A ~ angle, S ~ side |
| \[options.values\] | `Array` | `[1,1,1]` | angle (radians) of corners or length of sides |

**Example**  
```js
let myshape = triangle({type: 'AAS', values: [degToRad(62), degToRad(35), 7]})
```
<!-- LINKS -->

[modeling/primitives]:#modelingprimitives
[`modeling/primitives`]:#modelingprimitives
[ellipse]:#module_modeling/primitives.ellipse
[cuboid]:#module_modeling/primitives.cuboid
[cylinderElliptic]:#module_modeling/primitives.cylinderElliptic
[ellipsoid]:#module_modeling/primitives.ellipsoid
[rectangle]:#module_modeling/primitives.rectangle
[1]:#modelingprimitives
[.arc(\[options\])]:#modelingprimitivesarcoptions
[.circle(\[options\])]:#modelingprimitivescircleoptions
[.cube(\[options\])]:#modelingprimitivescubeoptions
[.cuboid(\[options\])]:#modelingprimitivescuboidoptions
[.cylinder(\[options\])]:#modelingprimitivescylinderoptions
[.cylinderElliptic(\[options\])]:#modelingprimitivescylinderellipticoptions
[.ellipse(\[options\])]:#modelingprimitivesellipseoptions
[.ellipsoid(\[options\])]:#modelingprimitivesellipsoidoptions
[.geodesicSphere(\[options\])]:#modelingprimitivesgeodesicsphereoptions
[.line(points)]:#modelingprimitiveslinepoints
[.polygon(options)]:#modelingprimitivespolygonoptions
[.polyhedron(options)]:#modelingprimitivespolyhedronoptions
[.rectangle(\[options\])]:#modelingprimitivesrectangleoptions
[.roundedCuboid(\[options\])]:#modelingprimitivesroundedcuboidoptions
[.roundedCylinder(\[options\])]:#modelingprimitivesroundedcylinderoptions
[.roundedRectangle(\[options\])]:#modelingprimitivesroundedrectangleoptions
[.sphere(\[options\])]:#modelingprimitivessphereoptions
[.square(\[options\])]:#modelingprimitivessquareoptions
[.star(\[options\])]:#modelingprimitivesstaroptions
[.torus(\[options\])]:#modelingprimitivestorusoptions
[.triangle(\[options\])]:#modelingprimitivestriangleoptions
