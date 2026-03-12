## Modules
Module | Description
------ | -----------
[modeling/geometries/geom2] | Represents a 2D geometry consisting of a list of sides.
[modeling/geometries/geom3] | Represents a 3D geometry consisting of a list of polygons.
[modeling/geometries] | Geometries are objects that represent the contents of primitives or the results of operations. Note: Geometries are considered immutable, so never change the contents directly.
[modeling/geometries/path2] | Represents a 2D geometry consisting of a list of ordered points.
[modeling/geometries/poly2] | Represents a 2D polygon consisting of a list of ordered vertices.
[modeling/geometries/poly3] | Represents a convex 3D polygon consisting of a list of ordered vertices.

## Typedefs

Name | Description
------ | -----------
[geom2] | Represents a 2D geometry consisting of a list of sides.
[geom3] | Represents a 3D geometry consisting of a list of polygons.
[path2] | Represents a 2D geometry consisting of a list of ordered points.
[poly2] | Represents a convex 2D polygon consisting of a list of ordered vertices.
[poly3] | Represents a convex 3D polygon. The vertices used to initialize a polygon must be coplanar and form a convex shape. The vertices do not have to be `vec3` instances but they must behave similarly.


## modeling/geometries/geom2

Represents a 2D geometry consisting of a list of sides.

**See**: [geom2] for data structure information.  
**Example**  
```js
colorize([0.5,0,1,1], square()) // purple square
```
**Example**  
```js
{
  "sides": [[[-1,1],[-1,-1]],[[-1,-1],[1,-1]],[[1,-1],[1,1]],[[1,1],[-1,1]]],
  "transforms": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  "color": [0.5,0,1,1]
}
```

* [modeling/geometries/geom2][1]
    * [.clone(geometry)]
    * [.create(\[sides\])]
    * [.fromCompactBinary(data)]
    * [.fromPoints(points)]
    * [.isA(object)]
    * [.reverse(geometry)]
    * [.toCompactBinary(geometry)]
    * [.toOutlines(geometry)]
    * [.toPoints(geometry)]
    * [.toSides(geometry)]
    * [.toString(geometry)]
    * [.transform(matrix, geometry)]
    * [.validate(object)]


### modeling/geometries/geom2.clone(geometry)

Performs a shallow clone of the given geometry.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: [`geom2`] - new geometry  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom2`] | the geometry to clone |


### modeling/geometries/geom2.create(\[sides\])

Create a new 2D geometry composed of unordered sides (two connected points).

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: [`geom2`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| \[sides\] | `Array` | list of sides where each side is an array of two points |


### modeling/geometries/geom2.fromCompactBinary(data)

Create a new 2D geometry from the given compact binary data.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: [`geom2`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array` | compact binary data |


### modeling/geometries/geom2.fromPoints(points)

Create a new 2D geometry from the given points.
The direction (rotation) of the points is not relevant,
as the points can define a convex or a concave polygon.
The geometry must not self intersect, i.e. the sides cannot cross.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: [`geom2`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| points | `Array` | list of points in 2D space |


### modeling/geometries/geom2.isA(object)

Determine if the given object is a 2D geometry.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: `Boolean` - true, if the object matches a geom2 based object  

| Param | Type | Description |
| --- | --- | --- |
| object | `Object` | the object to interrogate |


### modeling/geometries/geom2.reverse(geometry)

Reverses the given geometry so that the sides are flipped in the opposite order.
This swaps the left (interior) and right (exterior) edges.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: [`geom2`] - the new reversed geometry  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom2`] | the geometry to reverse |

**Example**  
```js
let newgeometry = reverse(geometry)
```

### modeling/geometries/geom2.toCompactBinary(geometry)

Produces a compact binary representation from the given geometry.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: `TypedArray` - compact binary representation  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom2`] | the geometry |


### modeling/geometries/geom2.toOutlines(geometry)

Create the outline(s) of the given geometry.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: `Array` - an array of outlines, where each outline is an array of ordered points  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom2`] | geometry to create outlines from |

**Example**  
```js
let geometry = subtract(rectangle({size: [5, 5]}), rectangle({size: [3, 3]}))
let outlines = toOutlines(geometry) // returns two outlines
```

### modeling/geometries/geom2.toPoints(geometry)

Produces an array of points from the given geometry.
The returned array should not be modified as the points are shared with the geometry.
NOTE: The points returned do NOT define an order. Use toOutlines() for ordered points.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: `Array` - an array of points  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom2`] | the geometry |

**Example**  
```js
let sharedpoints = toPoints(geometry)
```

### modeling/geometries/geom2.toSides(geometry)

Produces an array of sides from the given geometry.
The returned array should not be modified as the data is shared with the geometry.
NOTE: The sides returned do NOT define an order. Use toOutlines() for ordered points.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: `Array` - an array of sides  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom2`] | the geometry |

**Example**  
```js
let sharedsides = toSides(geometry)
```

### modeling/geometries/geom2.toString(geometry)

Create a string representing the contents of the given geometry.

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: `String` - a representative string  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom2`] | the geometry |

**Example**  
```js
console.out(toString(geometry))
```

### modeling/geometries/geom2.transform(matrix, geometry)

Transform the given geometry using the given matrix.
This is a lazy transform of the sides, as this function only adjusts the transforms.
The transforms are applied when accessing the sides via toSides().

**Kind**: static method of [`modeling/geometries/geom2`]  
**Returns**: [`geom2`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| matrix | `mat4` | the matrix to transform with |
| geometry | [`geom2`] | the geometry to transform |

**Example**  
```js
let newgeometry = transform(fromZRotation(degToRad(90)), geometry)
```

### modeling/geometries/geom2.validate(object)

Determine if the given object is a valid geom2.
Checks for closedness, self-edges, and valid data points.

**If the geometry is not valid, an exception will be thrown with details of the geometry error.**

**Kind**: static method of [`modeling/geometries/geom2`]  
**Throws**:

- `Error` error if the geometry is not valid


| Param | Type | Description |
| --- | --- | --- |
| object | `Object` | the object to interrogate |


## modeling/geometries/geom3

Represents a 3D geometry consisting of a list of polygons.

**See**: [geom3] for data structure information.  
**Example**  
```js
colorize([0,0.5,1,0.6], cube()) // transparent ice cube
```
**Example**  
```js
{
  "polygons": [
    {"vertices": [[-1,-1,-1], [-1,-1,1], [-1,1,1], [-1,1,-1]]},
    {"vertices": [[1,-1,-1], [1,1,-1], [1,1,1], [1,-1,1]]},
    {"vertices": [[-1,-1,-1], [1,-1,-1], [1,-1,1], [-1,-1,1]]},
    {"vertices": [[-1,1,-1], [-1,1,1], [1,1,1], [1,1,-1]]},
    {"vertices": [[-1,-1,-1], [-1,1,-1], [1,1,-1], [1,-1,-1]]},
    {"vertices": [[-1,-1,1], [1,-1,1], [1,1,1], [-1,1,1]]}
  ],
  "transforms": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  "color": [0,0.5,1,0.6]
}
```

* [modeling/geometries/geom3][2]
    * [.clone(geometry)]
    * [.create(\[polygons\])]
    * [.fromCompactBinary(data)]
    * [.fromPoints(listofpoints)]
    * [.fromPointsConvex(uniquePoints)]
    * [.invert(geometry)]
    * [.isA(object)]
    * [.isConvex(geometry)]
    * [.toCompactBinary(geometry)]
    * [.toPoints(geometry)]
    * [.toPolygons(geometry)]
    * [.toString(geometry)]
    * [.transform(matrix, geometry)]
    * [.validate(object)]


### modeling/geometries/geom3.clone(geometry)

Performs a shallow clone of the given geometry.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: [`geom3`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom3`] | the geometry to clone |


### modeling/geometries/geom3.create(\[polygons\])

Create a new 3D geometry composed of the given polygons.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: [`geom3`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| \[polygons\] | `Array` | list of polygons, or undefined |


### modeling/geometries/geom3.fromCompactBinary(data)

Construct a new 3D geometry from the given compact binary data.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: [`geom3`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| data | `TypedArray` | compact binary data |


### modeling/geometries/geom3.fromPoints(listofpoints)

Construct a new 3D geometry from a list of points.
The list of points should contain sub-arrays, each defining a single polygon of points.
In addition, the points should follow the right-hand rule for rotation in order to
define an external facing polygon.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: [`geom3`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| listofpoints | `Array` | list of lists, where each list is a set of points to construct a polygon |


### modeling/geometries/geom3.fromPointsConvex(uniquePoints)

Construct a new convex 3D geometry from a list of unique points.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: [`geom3`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| uniquePoints | `Array` | list of points to construct convex 3D geometry |


### modeling/geometries/geom3.invert(geometry)

Invert the given geometry, transposing solid and empty space.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: [`geom3`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom3`] | the geometry to invert |


### modeling/geometries/geom3.isA(object)

Determine if the given object is a 3D geometry.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: `Boolean` - true if the object matches a geom3  

| Param | Type | Description |
| --- | --- | --- |
| object | `Object` | the object to interrogate |


### modeling/geometries/geom3.isConvex(geometry)

Test if a 3D geometry is convex.

A polyhedron is convex if every vertex lies on or behind every face plane
(i.e., on the interior side of the plane).

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: `boolean` - true if the geometry is convex  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom3`] | the geometry to test |

**Example**  
```js
const { geom3, primitives } = require('@jscad/modeling')
const cube = primitives.cuboid({ size: [10, 10, 10] })
console.log(geom3.isConvex(cube)) // true
```

### modeling/geometries/geom3.toCompactBinary(geometry)

Return the given geometry in compact binary representation.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: `TypedArray` - compact binary representation  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom3`] | the geometry |


### modeling/geometries/geom3.toPoints(geometry)

Return the given geometry as a list of points, after applying transforms.
The returned array should not be modified as the points are shared with the geometry.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: `Array` - list of points, where each sub-array represents a polygon  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom3`] | the geometry |


### modeling/geometries/geom3.toPolygons(geometry)

Produces an array of polygons from the given geometry, after applying transforms.
The returned array should not be modified as the polygons are shared with the geometry.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: `Array` - an array of polygons  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom3`] | the geometry |

**Example**  
```js
let sharedpolygons = toPolygons(geometry)
```

### modeling/geometries/geom3.toString(geometry)

Create a string representing the contents of the given geometry.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: `String` - a representative string  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`geom3`] | the geometry |

**Example**  
```js
console.out(toString(geometry))
```

### modeling/geometries/geom3.transform(matrix, geometry)

Transform the given geometry using the given matrix.
This is a lazy transform of the polygons, as this function only adjusts the transforms.
See applyTransforms() for the actual application of the transforms to the polygons.

**Kind**: static method of [`modeling/geometries/geom3`]  
**Returns**: [`geom3`] - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| matrix | `mat4` | the matrix to transform with |
| geometry | [`geom3`] | the geometry to transform |

**Example**  
```js
let newgeometry = transform(fromXRotation(degToRad(90)), geometry)
```

### modeling/geometries/geom3.validate(object)

Determine if the given object is a valid 3D geometry.
Checks for valid data structure, convex polygon faces, and manifold edges.

**If the geometry is not valid, an exception will be thrown with details of the geometry error.**

**Kind**: static method of [`modeling/geometries/geom3`]  
**Throws**:

- `Error` error if the geometry is not valid


| Param | Type | Description |
| --- | --- | --- |
| object | `Object` | the object to interrogate |


## modeling/geometries

Geometries are objects that represent the contents of primitives or the results of operations.
Note: Geometries are considered immutable, so never change the contents directly.

**See**

- [geom2] - 2D geometry consisting of sides
- [geom3] - 3D geometry consisting of polygons
- [path2] - 2D geometry consisting of ordered points
- [poly2] - 2D polygon consisting of ordered vertices
- [poly3] - 3D polygon consisting of ordered vertices

**Example**  
```js
const { geom2, geom3, path2, poly2, poly3 } = require('@jscad/modeling').geometries
```

## modeling/geometries/path2

Represents a 2D geometry consisting of a list of ordered points.

**See**: [path2] for data structure information.  
**Example**  
```js
colorize([0,0,0,1], path2.fromPoints({ closed: true }, [[0,0], [4,0], [4,3]]))
```
**Example**  
```js
{
  "points": [[0,0], [4,0], [4,3]],
  "isClosed": true,
  "transforms": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  "color": [0,0,0,1]
}
```

* [modeling/geometries/path2][3]
    * [.appendArc(options, geometry)]
    * [.appendBezier(options, geometry)]
    * [.appendPoints(points, geometry)]
    * [.clone(geometry)]
    * [.close(geometry)]
    * [.concat(...paths)]
    * [.create()]
    * [.equals(a, b)]
    * [.fromCompactBinary(data)]
    * [.fromPoints(options, points)]
    * [.isA(object)]
    * [.reverse(geometry)]
    * [.toCompactBinary(geometry)]
    * [.toPoints(geometry)]
    * [.toString(geometry)]
    * [.transform(matrix, geometry)]
    * [.validate(object)]


### modeling/geometries/path2.appendArc(options, geometry)

Append a series of points to the given geometry that represent an arc.
This implementation follows the SVG specifications.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path with the appended points  
**See**: http://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for construction |
| options.endpoint | `vec2` |  | end point of arc (REQUIRED) |
| \[options.radius\] | `vec2` | `[0,0]` | radius of arc (X and Y) |
| \[options.xaxisrotation\] | `Number` | `0` | rotation (RADIANS) of the X axis of the arc with respect to the X axis of the coordinate system |
| \[options.clockwise\] | `Boolean` | `false` | draw an arc clockwise with respect to the center point |
| \[options.large\] | `Boolean` | `false` | draw an arc longer than TAU / 2 radians |
| \[options.segments\] | `Number` | `16` | number of segments per full rotation |
| geometry | [`path2`] |  | the path of which to append the arc |

**Example**  
```js
let p1 = path2.fromPoints({}, [[27.5,-22.96875]]);
p1 = path2.appendPoints([[27.5,-3.28125]], p1);
p1 = path2.appendArc({endpoint: [12.5, -22.96875], radius: [15, -19.6875]}, p1);
```

### modeling/geometries/path2.appendBezier(options, geometry)

Append a series of points to the given geometry that represent a Bezier curve.
The Bézier curve starts at the last point in the given geometry, and ends at the last control point.
The other control points are intermediate control points to transition the curve from start to end points.
The first control point may be null to ensure a smooth transition occurs. In this case,
the second to last point of the given geometry is mirrored into the control points of the Bezier curve.
In other words, the trailing gradient of the geometry matches the new gradient of the curve.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path with the appended points  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for construction |
| options.controlPoints | `Array` |  | list of control points (2D) for the bezier curve |
| \[options.segment\] | `Number` | `16` | number of segments per 360 rotation |
| geometry | [`path2`] |  | the path of which to appended points |

**Example**  
```js
let p5 = path2.create({}, [[10,-20]])
p5 = path2.appendBezier({controlPoints: [[10,-10],[25,-10],[25,-20]]}, p5);
p5 = path2.appendBezier({controlPoints: [null, [25,-30],[40,-30],[40,-20]]}, p5)
```

### modeling/geometries/path2.appendPoints(points, geometry)

Append the given list of points to the end of the given geometry.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path with the appended points  

| Param | Type | Description |
| --- | --- | --- |
| points | `Array` | the points (2D) to append to the given path |
| geometry | [`path2`] | the given path |

**Example**  
```js
let newpath = appendPoints([[3, 4], [4, 5]], oldpath)
```

### modeling/geometries/path2.clone(geometry)

Performs a shallow clone of the give geometry.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`path2`] | the geometry to clone |


### modeling/geometries/path2.close(geometry)

Close the given geometry.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`path2`] | the path to close |


### modeling/geometries/path2.concat(...paths)

Concatenate the given paths.

If both contain the same point at the junction, merge it into one.
A concatenation of zero paths is an empty, open path.
A concatenation of one closed path to a series of open paths produces a closed path.
A concatenation of a path to a closed path is an error.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path  

| Param | Type | Description |
| --- | --- | --- |
| ...paths | [`path2`] | the paths to concatenate |

**Example**  
```js
let newpath = concat(fromPoints({}, [[1, 2]]), fromPoints({}, [[3, 4]]))
```

### modeling/geometries/path2.create()

Create an empty, open path.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path  
**Example**  
```js
let newpath = create()
```

### modeling/geometries/path2.equals(a, b)

Determine if the given paths are equal.
For closed paths, this includes equality under point order rotation.

**Kind**: static method of [`modeling/geometries/path2`]  

| Param | Type | Description |
| --- | --- | --- |
| a | [`path2`] | the first path to compare |
| b | [`path2`] | the second path to compare |


### modeling/geometries/path2.fromCompactBinary(data)

Create a new path from the given compact binary data.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path  

| Param | Type | Description |
| --- | --- | --- |
| data | `TypedArray` | compact binary data |


### modeling/geometries/path2.fromPoints(options, points)

Create a new path from the given points.
The points must be provided an array of points,
where each point is an array of two numbers.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path  
**Example:**: `my newpath = fromPoints({closed: true}, [[10, 10], [-10, 10]])` 

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for construction |
| \[options.closed\] | `Boolean` | `false` | if the path should be open or closed |
| points | `Array` |  | array of points (2D) from which to create the path |


### modeling/geometries/path2.isA(object)

Determine if the given object is a path2 geometry.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: `Boolean` - true if the object matches a path2  

| Param | Type | Description |
| --- | --- | --- |
| object | `Object` | the object to interrogate |


### modeling/geometries/path2.reverse(geometry)

Reverses the path so that the points are in the opposite order.
This swaps the left (interior) and right (exterior) edges.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`path2`] | the path to reverse |

**Example**  
```js
let newpath = reverse(mypath)
```

### modeling/geometries/path2.toCompactBinary(geometry)

Produce a compact binary representation from the given path.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: `TypedArray` - compact binary representation  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`path2`] | the path geometry |


### modeling/geometries/path2.toPoints(geometry)

Produces an array of points from the given geometry.
The returned array should not be modified as the data is shared with the geometry.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: `Array` - an array of points  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`path2`] | the geometry |

**Example**  
```js
let sharedpoints = toPoints(geometry)
```

### modeling/geometries/path2.toString(geometry)

Create a string representing the contents of the given path.

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: `String` - a representative string  

| Param | Type | Description |
| --- | --- | --- |
| geometry | [`path2`] | the path |

**Example**  
```js
console.out(toString(path))
```

### modeling/geometries/path2.transform(matrix, geometry)

Transform the given geometry using the given matrix.
This is a lazy transform of the points, as this function only adjusts the transforms.
The transforms are applied when accessing the points via toPoints().

**Kind**: static method of [`modeling/geometries/path2`]  
**Returns**: [`path2`] - a new path  

| Param | Type | Description |
| --- | --- | --- |
| matrix | `mat4` | the matrix to transform with |
| geometry | [`path2`] | the geometry to transform |

**Example**  
```js
let newpath = transform(fromZRotation(TAU / 8), path)
```

### modeling/geometries/path2.validate(object)

Determine if the given object is a valid path2.
Checks for valid data points, and duplicate points.

**If the geometry is not valid, an exception will be thrown with details of the geometry error.**

**Kind**: static method of [`modeling/geometries/path2`]  
**Throws**:

- `Error` error if the geometry is not valid


| Param | Type | Description |
| --- | --- | --- |
| object | `Object` | the object to interrogate |


## modeling/geometries/poly2

Represents a 2D polygon consisting of a list of ordered vertices.

**See**: [poly2] for data structure information.  
**Example**  
```js
poly2.create([[0,0], [4,0], [4,3]])
```
**Example**  
```js
{"vertices": [[0,0], [4,0], [4,3]]}
```

* [modeling/geometries/poly2][4]
    * [.measureArea]
    * [.arePointsInside(points, polygon)]
    * [.create(\[vertices\])]
    * [.flip(polygon)]


### modeling/geometries/poly2.measureArea

Measure the area under the given polygon.

**Kind**: static constant of [`modeling/geometries/poly2`]  
**Returns**: `Number` - the area of the polygon  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly2`] | the polygon to measure |


### modeling/geometries/poly2.arePointsInside(points, polygon)

Determine if the given points are inside the given polygon.

**Kind**: static method of [`modeling/geometries/poly2`]  
**Returns**: `Integer` - 1 if all points are inside, 0 if some or none are inside  

| Param | Type | Description |
| --- | --- | --- |
| points | `Array` | a list of points, where each point is an array with X and Y values |
| polygon | [`poly2`] | a 2D polygon |


### modeling/geometries/poly2.create(\[vertices\])

Creates a new polygon with initial values.

**Kind**: static method of [`modeling/geometries/poly2`]  
**Returns**: [`poly2`] - a new polygon  

| Param | Type | Description |
| --- | --- | --- |
| \[vertices\] | `Array` | list of vertices (2D) |

**Example**  
```js
let polygon = create()
```

### modeling/geometries/poly2.flip(polygon)

Flip the give polygon, rotating the opposite direction.

**Kind**: static method of [`modeling/geometries/poly2`]  
**Returns**: [`poly2`] - a new polygon  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly2`] | the polygon to flip |


## modeling/geometries/poly3

Represents a convex 3D polygon consisting of a list of ordered vertices.

**See**: [poly3] for data structure information.  
**Example**  
```js
poly3.create([[0,0,0], [4,0,0], [4,3,12]])
```
**Example**  
```js
{"vertices": [[0,0,0], [4,0,0], [4,3,12]]}
```

* [modeling/geometries/poly3][5]
    * [.clone(\[out\], polygon)]
    * [.create(\[vertices\])]
    * [.fromPoints(points)]
    * [.fromPointsAndPlane(vertices, plane)]
    * [.invert(polygon)]
    * [.isA(object)]
    * [.isConvex(polygon)]
    * [.measureArea(polygon)]
    * [.measureBoundingBox(polygon)]
    * [.measureBoundingSphere(polygon)]
    * [.measureSignedVolume(polygon)]
    * [.toPoints(polygon)]
    * [.toString(polygon)]
    * [.transform(matrix, polygon)]
    * [.validate(object)]


### modeling/geometries/poly3.clone(\[out\], polygon)

Create a deep clone of the given polygon

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: [`poly3`] - a new polygon  

| Param | Type | Description |
| --- | --- | --- |
| \[out\] | [`poly3`] | receiving polygon |
| polygon | [`poly3`] | polygon to clone |


### modeling/geometries/poly3.create(\[vertices\])

Creates a new 3D polygon with initial values.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: [`poly3`] - a new polygon  

| Param | Type | Description |
| --- | --- | --- |
| \[vertices\] | `Array` | a list of vertices (3D) |


### modeling/geometries/poly3.fromPoints(points)

Create a polygon from the given points.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: [`poly3`] - a new polygon  

| Param | Type | Description |
| --- | --- | --- |
| points | `Array` | list of points (3D) |

**Example**  
```js
const points = [
  [0,  0, 0],
  [0, 10, 0],
  [0, 10, 10]
]
const polygon = fromPoints(points)
```

### modeling/geometries/poly3.fromPointsAndPlane(vertices, plane)

Create a polygon from the given vertices and plane.
NOTE: No checks are performed on the parameters.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: [`poly3`] - a new polygon  

| Param | Type | Description |
| --- | --- | --- |
| vertices | `Array` | list of vertices (3D) |
| plane | `plane` | plane of the polygon |


### modeling/geometries/poly3.invert(polygon)

Invert the give polygon to face the opposite direction.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: [`poly3`] - a new poly3  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly3`] | the polygon to invert |


### modeling/geometries/poly3.isA(object)

Determine if the given object is a polygon.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: `Boolean` - true if the object matches a poly3  

| Param | Type | Description |
| --- | --- | --- |
| object | `Object` | the object to interrogate |


### modeling/geometries/poly3.isConvex(polygon)

Check whether the given polygon is convex.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: `Boolean` - true if convex  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly3`] | the polygon to interrogate |


### modeling/geometries/poly3.measureArea(polygon)

Measure the area of the given polygon.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: `Number` - area of the polygon  
**See**: 2000 softSurfer http://geomalgorithms.com  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly3`] | the polygon to measure |


### modeling/geometries/poly3.measureBoundingBox(polygon)

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: `Array` - an array of two vectors (3D);  minimum and maximum coordinates  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly3`] | the polygon to measure |


### modeling/geometries/poly3.measureBoundingSphere(polygon)

Measure the bounding sphere of the given polygon.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: `vec4` - the computed bounding sphere; center point (3D) and radius  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly3`] | the polygon to measure |


### modeling/geometries/poly3.measureSignedVolume(polygon)

Measure the signed volume of the given polygon, which must be convex.
The volume is that formed by the tetrahedron connected to the axis [0,0,0],
and will be positive or negative based on the rotation of the vertices.

**Kind**: static method of [`modeling/geometries/poly3`][5]  
**Returns**: `Number` - volume of the polygon  
**See**: http://chenlab.ece.cornell.edu/Publication/Cha/icip01_Cha.pdf  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly3`] | the polygon to measure |


### modeling/geometries/poly3.toPoints(polygon)

Return the given polygon as a list of points.
NOTE: The returned array should not be modified as the points are shared with the geometry.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: `Array` - list of points (3D)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly3`] | the polygon |


### modeling/geometries/poly3.toString(polygon)

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: `String` - the string representation  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [`poly3`] | the polygon to measure |


### modeling/geometries/poly3.transform(matrix, polygon)

Transform the given polygon using the given matrix.

**Kind**: static method of [`modeling/geometries/poly3`]  
**Returns**: [`poly3`] - a new polygon  

| Param | Type | Description |
| --- | --- | --- |
| matrix | `mat4` | the matrix to transform with |
| polygon | [`poly3`] | the polygon to transform |


### modeling/geometries/poly3.validate(object)

Determine if the given object is a valid polygon.
Checks for valid data structure, convex polygons, and duplicate points.

**If the geometry is not valid, an exception will be thrown with details of the geometry error.**

**Kind**: static method of [`modeling/geometries/poly3`]  
**Throws**:

- `Error` error if the geometry is not valid


| Param | Type | Description |
| --- | --- | --- |
| object | `Object` | the object to interrogate |


## geom2

Represents a 2D geometry consisting of a list of sides.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sides | `Array` | list of sides, each side containing two points |
| transforms | `mat4` | transforms to apply to the sides, see transform() |


## geom3

Represents a 3D geometry consisting of a list of polygons.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| polygons | `Array` | list of polygons, each polygon containing three or more points |
| transforms | `mat4` | transforms to apply to the polygons, see transform() |


## path2

Represents a 2D geometry consisting of a list of ordered points.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| points | `Array` | list of ordered points |
| isClosed | `Boolean` | true if the path is closed where start and end points are the same |
| transforms | `mat4` | transforms to apply to the points, see transform() |


## poly2

Represents a convex 2D polygon consisting of a list of ordered vertices.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vertices | `Array` | list of ordered vertices (2D) |


## poly3

Represents a convex 3D polygon. The vertices used to initialize a polygon must
be coplanar and form a convex shape. The vertices do not have to be `vec3`
instances but they must behave similarly.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vertices | `Array` | list of ordered vertices (3D) |

<!-- LINKS -->

[modeling/geometries/geom2]:#modelinggeometriesgeom2
[modeling/geometries/geom3]:#modelinggeometriesgeom3
[modeling/geometries]:#modelinggeometries
[modeling/geometries/path2]:#modelinggeometriespath2
[modeling/geometries/poly2]:#modelinggeometriespoly2
[modeling/geometries/poly3]:#modelinggeometriespoly3
[geom2]:#geom2
[geom3]:#geom3
[path2]:#path2
[poly2]:#poly2
[poly3]:#poly3
[1]:#modelinggeometriesgeom2
[`modeling/geometries/geom2`]:#modelinggeometriesgeom2
[`geom2`]:#geom2
[2]:#modelinggeometriesgeom3
[`modeling/geometries/geom3`]:#modelinggeometriesgeom3
[`geom3`]:#geom3
[3]:#modelinggeometriespath2
[`modeling/geometries/path2`]:#modelinggeometriespath2
[`path2`]:#path2
[4]:#modelinggeometriespoly2
[.measureArea]:#modelinggeometriespoly2measurearea
[`modeling/geometries/poly2`]:#modelinggeometriespoly2
[`poly2`]:#poly2
[5]:#modelinggeometriespoly3
[`modeling/geometries/poly3`]:#modelinggeometriespoly3
[`poly3`]:#poly3
[.clone(geometry)]:#modelinggeometriespath2clonegeometry
[.create(\[sides\])]:#modelinggeometriesgeom2createsides
[.fromCompactBinary(data)]:#modelinggeometriespath2fromcompactbinarydata
[.fromPoints(points)]:#modelinggeometriespoly3frompointspoints
[.isA(object)]:#modelinggeometriespoly3isaobject
[.reverse(geometry)]:#modelinggeometriespath2reversegeometry
[.toCompactBinary(geometry)]:#modelinggeometriespath2tocompactbinarygeometry
[.toOutlines(geometry)]:#modelinggeometriesgeom2tooutlinesgeometry
[.toPoints(geometry)]:#modelinggeometriespath2topointsgeometry
[.toSides(geometry)]:#modelinggeometriesgeom2tosidesgeometry
[.toString(geometry)]:#modelinggeometriespath2tostringgeometry
[.transform(matrix, geometry)]:#modelinggeometriespath2transformmatrix-geometry
[.validate(object)]:#modelinggeometriespoly3validateobject
[.create(\[polygons\])]:#modelinggeometriesgeom3createpolygons
[.fromPoints(listofpoints)]:#modelinggeometriesgeom3frompointslistofpoints
[.fromPointsConvex(uniquePoints)]:#modelinggeometriesgeom3frompointsconvexuniquepoints
[.invert(geometry)]:#modelinggeometriesgeom3invertgeometry
[.isConvex(geometry)]:#modelinggeometriesgeom3isconvexgeometry
[.toPolygons(geometry)]:#modelinggeometriesgeom3topolygonsgeometry
[.appendArc(options, geometry)]:#modelinggeometriespath2appendarcoptions-geometry
[.appendBezier(options, geometry)]:#modelinggeometriespath2appendbezieroptions-geometry
[.appendPoints(points, geometry)]:#modelinggeometriespath2appendpointspoints-geometry
[.close(geometry)]:#modelinggeometriespath2closegeometry
[.concat(...paths)]:#modelinggeometriespath2concatpaths
[.create()]:#modelinggeometriespath2create
[.equals(a, b)]:#modelinggeometriespath2equalsa-b
[.fromPoints(options, points)]:#modelinggeometriespath2frompointsoptions-points
[.arePointsInside(points, polygon)]:#modelinggeometriespoly2arepointsinsidepoints-polygon
[.create(\[vertices\])]:#modelinggeometriespoly3createvertices
[.flip(polygon)]:#modelinggeometriespoly2flippolygon
[.clone(\[out\], polygon)]:#modelinggeometriespoly3cloneout-polygon
[.fromPointsAndPlane(vertices, plane)]:#modelinggeometriespoly3frompointsandplanevertices-plane
[.invert(polygon)]:#modelinggeometriespoly3invertpolygon
[.isConvex(polygon)]:#modelinggeometriespoly3isconvexpolygon
[.measureArea(polygon)]:#modelinggeometriespoly3measureareapolygon
[.measureBoundingBox(polygon)]:#modelinggeometriespoly3measureboundingboxpolygon
[.measureBoundingSphere(polygon)]:#modelinggeometriespoly3measureboundingspherepolygon
[.measureSignedVolume(polygon)]:#modelinggeometriespoly3measuresignedvolumepolygon
[.toPoints(polygon)]:#modelinggeometriespoly3topointspolygon
[.toString(polygon)]:#modelinggeometriespoly3tostringpolygon
[.transform(matrix, polygon)]:#modelinggeometriespoly3transformmatrix-polygon
