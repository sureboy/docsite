## Modules
Module | Description
------ | -----------
[modeling/maths] | Maths are computational units for fundamental Euclidean geometry. All maths operate upon array data structures. Note: Maths data structures are considered immutable, so never change the contents directly.
[modeling/maths/line2] | Represents a unbounded line in 2D space, positioned at a point of origin.
[modeling/maths/line3] | Represents a unbounded line in 3D space, positioned at a point of origin.
[modeling/maths/mat4] | Represents a 4x4 matrix which is column-major (when typed out it looks row-major).
[modeling/maths/plane] | Represents a plane in 3D coordinate space as determined by a normal (perpendicular to the plane) and distance from 0,0,0.
[modeling/maths/utils] | Utility functions for maths.
[modeling/maths/vec2] | Represents a two dimensional vector.
[modeling/maths/vec3] | Represents a three dimensional vector.
[modeling/maths/vec4] | Represents a four dimensional vector.

## Constants

Name | Description
------ | -----------
[TAU] | The TAU property represents the ratio of the circumference of a circle to its radius. Approximately 6.28318530717958647692

## Typedefs

Name | Description
------ | -----------
[line2] | Represents a unbounded line in 2D space, positioned at a point of origin. A line is parametrized by a normal vector (perpendicular to the line, rotated 90 degrees counter clockwise) and distance from the origin.
[line3] | Represents a unbounded line in 3D space, positioned at a point of origin. A line is parametrized by a point of origin and a directional vector.
[mat4] | Represents a 4x4 matrix which is column-major (when typed out it looks row-major). See fromValues().
[plane] | Represents a plane in 3D coordinate space as determined by a normal (perpendicular to the plane) and distance from 0,0,0.
[vec2] | Represents a two dimensional vector. See fromValues().
[vec3] | Represents a three dimensional vector. See fromValues().
[vec4] | Represents a four dimensional vector. See fromValues().


## modeling/maths

Maths are computational units for fundamental Euclidean geometry. All maths operate upon array data structures.
Note: Maths data structures are considered immutable, so never change the contents directly.

**See**: Most computations are based upon the glMatrix library (glmatrix.net)  
**Example**  
```js
const { constants, line2, line3, mat4, plane, utils, vec2, vec3, vec4 } = require('@jscad/modeling').maths
```

* [modeling/maths]
    * [.spatialResolution]
    * [.EPS]
    * [.NEPS]


### modeling/maths.spatialResolution

The resolution of space, currently one hundred nanometers.
This should be 1 / EPS.

**Kind**: static constant of [`modeling/maths`]  
**Default**: `100000`  

### modeling/maths.EPS

Epsilon used during determination of near zero distances.
This should be 1 / spacialResolution.

**Kind**: static constant of [`modeling/maths`]  
**Default**: `0.00001`  

### modeling/maths.NEPS

Smaller epsilon used for measuring near zero distances.

**Kind**: static constant of [`modeling/maths`]  
**Default**: `1e-13`  

## modeling/maths/line2

Represents a unbounded line in 2D space, positioned at a point of origin.

**See**: [line2] for data structure information.  

* [modeling/maths/line2]
    * [.clone(line)]
    * [.closestPoint(line, point)]
    * [.copy(out, line)]
    * [.create()]
    * [.direction(line)]
    * [.distanceToPoint(line, point)]
    * [.equals(line1, line2)]
    * [.fromPoints(out, point1, point2)]
    * [.fromValues(x, y, d)]
    * [.intersectPointOfLines(line1, line2)]
    * [.origin(line)]
    * [.reverse(out, line)]
    * [.toString(line)]
    * [.transform(out, line, matrix)]
    * [.xAtY(line, y)]


### modeling/maths/line2.clone(line)

Create a clone of the given line.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`line2`] - a new unbounded line  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line2`] | line to clone |


### modeling/maths/line2.closestPoint(line, point)

Determine the closest point on the given line to the given point.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`vec2`] - closest point  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line2`] | line of reference |
| point | [`vec2`] | point of reference |


### modeling/maths/line2.copy(out, line)

Copy the given line to the receiving line.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`line2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line2`] | receiving line |
| line | [`line2`] | line to copy |


### modeling/maths/line2.create()

Create a line, positioned at 0,0, and running along the X axis.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`line2`] - a new unbounded line  

### modeling/maths/line2.direction(line)

Return the direction of the given line.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`vec2`] - a vector in the direction of the line  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line2`] | line of reference |


### modeling/maths/line2.distanceToPoint(line, point)

Calculate the distance (positive) between the given point and line.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: `Number` - distance between line and point  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line2`] | line of reference |
| point | [`vec2`] | point of reference |


### modeling/maths/line2.equals(line1, line2)

Compare the given lines for equality.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: `Boolean` - true if lines are equal  

| Param | Type | Description |
| --- | --- | --- |
| line1 | [`line2`] | first line to compare |
| line2 | [`line2`] | second line to compare |


### modeling/maths/line2.fromPoints(out, point1, point2)

Create a new line that passes through the given points.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`line2`] - a new unbounded line  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line2`] | receiving line |
| point1 | [`vec2`] | start point of the line |
| point2 | [`vec2`] | end point of the line |


### modeling/maths/line2.fromValues(x, y, d)

Creates a new line initialized with the given values.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`line2`] - a new unbounded line  

| Param | Type | Description |
| --- | --- | --- |
| x | `Number` | X coordinate of the unit normal |
| y | `Number` | Y coordinate of the unit normal |
| d | `Number` | distance of the line from [0,0] |


### modeling/maths/line2.intersectPointOfLines(line1, line2)

Return the point of intersection between the given lines.

NOTES:
The point will have Infinity values if the lines are parallel.
The point will have NaN values if the lines are the same.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`vec2`] - the point of intersection  

| Param | Type | Description |
| --- | --- | --- |
| line1 | [`line2`] | line of reference |
| line2 | [`line2`] | line of reference |


### modeling/maths/line2.origin(line)

Return the origin of the given line.
The origin is the point on the line which is closest to the origin [0, 0].

**Kind**: static method of [`modeling/maths/line2`][1]  
**Returns**: [`vec2`] - the origin of the line  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line2`] | line of reference |


### modeling/maths/line2.reverse(out, line)

Create a new line in the opposite direction as the given.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`line2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line2`] | receiving line |
| line | [`line2`] | line to reverse |


### modeling/maths/line2.toString(line)

Return a string representing the given line.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: `String` - string representation  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line2`] | line of reference |


### modeling/maths/line2.transform(out, line, matrix)

Transforms the given line using the given matrix.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: [`line2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line2`] | receiving line |
| line | [`line2`] | line to transform |
| matrix | [`mat4`] | matrix to transform with |


### modeling/maths/line2.xAtY(line, y)

Determine the X coordinate of the given line at the Y coordinate.

The X coordinate will be Infinity if the line is parallel to the X axis.

**Kind**: static method of [`modeling/maths/line2`]  
**Returns**: `Number` - the X coordinate on the line  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line2`] | line of reference |
| y | `Number` | Y coordinate on the line |


## modeling/maths/line3

Represents a unbounded line in 3D space, positioned at a point of origin.

**See**: [line3] for data structure information.  

* [modeling/maths/line3]
    * [.clone(line)]
    * [.closestPoint(line, point)]
    * [.copy(out, line)]
    * [.create()]
    * [.direction(line)]
    * [.distanceToPoint(line, point)]
    * [.equals(line1, line2)]
    * [.fromPlanes(out, plane1, plane2)]
    * [.fromPointAndDirection(out, point, direction)]
    * [.fromPoints(out, point1, point2)]
    * [.intersectPointOfLineAndPlane(line, plane)]
    * [.origin(line)]
    * [.reverse(out, line)]
    * [.toString(line)]
    * [.transform(out, line, matrix)]


### modeling/maths/line3.clone(line)

Create a clone of the given line.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`line3`] - a new unbounded line  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line3`] | line to clone |


### modeling/maths/line3.closestPoint(line, point)

Determine the closest point on the given line to the given point.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`vec3`] - a point  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line3`] | line of reference |
| point | [`vec3`] | point of reference |


### modeling/maths/line3.copy(out, line)

Copy the given line into the receiving line.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`line3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line3`] | receiving line |
| line | [`line3`] | line to copy |


### modeling/maths/line3.create()

Create a line, positioned at 0,0,0 and lying on the X axis.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`line3`] - a new unbounded line  

### modeling/maths/line3.direction(line)

Return the direction of the given line.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`vec3`] - the relative vector in the direction of the line  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line3`] | line for reference |


### modeling/maths/line3.distanceToPoint(line, point)

Calculate the distance (positive) between the given point and line.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: `Number` - distance between line and point  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line3`] | line of reference |
| point | [`vec3`] | point of reference |


### modeling/maths/line3.equals(line1, line2)

Compare the given lines for equality.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: `Boolean` - true if lines are equal  

| Param | Type | Description |
| --- | --- | --- |
| line1 | [`line3`] | first line to compare |
| line2 | [`line3`] | second line to compare |


### modeling/maths/line3.fromPlanes(out, plane1, plane2)

Create a line the intersection of the given planes.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`line3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line3`] | receiving line |
| plane1 | [`plane`] | first plane of reference |
| plane2 | [`plane`] | second plane of reference |


### modeling/maths/line3.fromPointAndDirection(out, point, direction)

Create a line from the given point (origin) and direction.

The point can be any random point on the line.
The direction must be a vector with positive or negative distance from the point.

See the logic of fromPoints() for appropriate values.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`line3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line3`] | receiving line |
| point | [`vec3`] | start point of the line segment |
| direction | [`vec3`] | direction of the line segment |


### modeling/maths/line3.fromPoints(out, point1, point2)

Create a line that passes through the given points.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`line3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line3`] | receiving line |
| point1 | [`vec3`] | start point of the line segment |
| point2 | [`vec3`] | end point of the line segment |


### modeling/maths/line3.intersectPointOfLineAndPlane(line, plane)

Determine the closest point on the given plane to the given line.

NOTES:
The point of intersection will be invalid if the line is parallel to the plane, e.g. NaN.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`vec3`] - a point on the line  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line3`] | line of reference |
| plane | [`plane`] | plane of reference |


### modeling/maths/line3.origin(line)

Return the origin of the given line.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`vec3`] - the origin of the line  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line3`] | line of reference |


### modeling/maths/line3.reverse(out, line)

Create a line in the opposite direction as the given.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`line3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line3`] | receiving line |
| line | [`line3`] | line to reverse |


### modeling/maths/line3.toString(line)

Return a string representing the given line.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: `String` - string representation  

| Param | Type | Description |
| --- | --- | --- |
| line | [`line3`] | line of reference |


### modeling/maths/line3.transform(out, line, matrix)

Transforms the given line using the given matrix.

**Kind**: static method of [`modeling/maths/line3`]  
**Returns**: [`line3`] - a new unbounded line  

| Param | Type | Description |
| --- | --- | --- |
| out | [`line3`] | line to update |
| line | [`line3`] | line to transform |
| matrix | [`mat4`] | matrix to transform with |


## modeling/maths/mat4

Represents a 4x4 matrix which is column-major (when typed out it looks row-major).

**See**: [mat4] for data structure information.  

* [modeling/maths/mat4]
    * [.add(out, a, b)]
    * [.clone(matrix)]
    * [.copy(out, matrix)]
    * [.create()]
    * [.equals(a, b)]
    * [.fromRotation(out, rad, axis)]
    * [.fromScaling(out, vector)]
    * [.fromTaitBryanRotation(out, yaw, pitch, roll)]
    * [.fromTranslation(out, vector)]
    * [.fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33)]
    * [.fromVectorRotation(out, source, target)]
    * [.fromXRotation(out, radians)]
    * [.fromYRotation(out, radians)]
    * [.fromZRotation(out, radians)]
    * [.identity(out)]
    * [.invert(out, matrix)]
    * [.isIdentity(matrix)]
    * [.isMirroring(matrix)]
    * [.isOnlyTransformScale(matrix)]
    * [.mirrorByPlane(out, plane)]
    * [.multiply(out, a, b)]
    * [.rightMultiplyVec2(vector, matrix)]
    * [.rightMultiplyVec3(vector, matrix)]
    * [.rotate(out, matrix, radians, axis)]
    * [.rotateX(out, matrix, radians)]
    * [.rotateY(out, matrix, radians)]
    * [.rotateZ(out, matrix, radians)]
    * [.scale(out, matrix, dimensions)]
    * [.subtract(out, a, b)]
    * [.toString(mat)]
    * [.translate(out, matrix, offsets)]


### modeling/maths/mat4.add(out, a, b)

Adds the two matrices (A+B).

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| a | [`mat4`] | first operand |
| b | [`mat4`] | second operand |


### modeling/maths/mat4.clone(matrix)

Creates a clone of the given matrix.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - a new matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [`mat4`] | matrix to clone |


### modeling/maths/mat4.copy(out, matrix)

Creates a copy of the given matrix.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| matrix | [`mat4`] | matrix to copy |


### modeling/maths/mat4.create()

Creates a new identity matrix.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - a new matrix  

### modeling/maths/mat4.equals(a, b)

Returns whether or not the matrices have exactly the same elements in the same position.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: `Boolean` - true if the matrices are equal  

| Param | Type | Description |
| --- | --- | --- |
| a | [`mat4`] | first matrix |
| b | [`mat4`] | second matrix |


### modeling/maths/mat4.fromRotation(out, rad, axis)

Creates a matrix from a given angle around a given axis
This is equivalent to (but much faster than):

    mat4.identity(dest)
    mat4.rotate(dest, dest, rad, axis)

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| rad | `Number` | angle to rotate the matrix by |
| axis | [`vec3`] | axis of which to rotate around |

**Example**  
```js
let matrix = fromRotation(create(), TAU / 4, [0, 0, 3])
```

### modeling/maths/mat4.fromScaling(out, vector)

Creates a matrix from a vector scaling.
This is equivalent to (but much faster than):

    mat4.identity(dest)
    mat4.scale(dest, dest, vec)

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| vector | [`vec3`] | X, Y, Z factors by which to scale |

**Example**  
```js
let matrix = fromScaling([1, 2, 0.5])
```

### modeling/maths/mat4.fromTaitBryanRotation(out, yaw, pitch, roll)

Creates a matrix from the given Tait–Bryan angles.

Tait-Bryan Euler angle convention using active, intrinsic rotations around the axes in the order z-y-x.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  
**See**: https://en.wikipedia.org/wiki/Euler_angles  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| yaw | `Number` | Z rotation in radians |
| pitch | `Number` | Y rotation in radians |
| roll | `Number` | X rotation in radians |

**Example**  
```js
let matrix = fromTaitBryanRotation(create(), TAU / 4, 0, TAU / 2)
```

### modeling/maths/mat4.fromTranslation(out, vector)

Creates a matrix from a vector translation.
This is equivalent to (but much faster than):

    mat4.identity(dest)
    mat4.translate(dest, dest, vec)

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| vector | [`vec3`] | offset (vector) of translation |

**Example**  
```js
let matrix = fromTranslation(create(), [1, 2, 3])
```

### modeling/maths/mat4.fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33)

Create a matrix with the given values.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - a new matrix  

| Param | Type | Description |
| --- | --- | --- |
| m00 | `Number` | Component in column 0, row 0 position (index 0) |
| m01 | `Number` | Component in column 0, row 1 position (index 1) |
| m02 | `Number` | Component in column 0, row 2 position (index 2) |
| m03 | `Number` | Component in column 0, row 3 position (index 3) |
| m10 | `Number` | Component in column 1, row 0 position (index 4) |
| m11 | `Number` | Component in column 1, row 1 position (index 5) |
| m12 | `Number` | Component in column 1, row 2 position (index 6) |
| m13 | `Number` | Component in column 1, row 3 position (index 7) |
| m20 | `Number` | Component in column 2, row 0 position (index 8) |
| m21 | `Number` | Component in column 2, row 1 position (index 9) |
| m22 | `Number` | Component in column 2, row 2 position (index 10) |
| m23 | `Number` | Component in column 2, row 3 position (index 11) |
| m30 | `Number` | Component in column 3, row 0 position (index 12) |
| m31 | `Number` | Component in column 3, row 1 position (index 13) |
| m32 | `Number` | Component in column 3, row 2 position (index 14) |
| m33 | `Number` | Component in column 3, row 3 position (index 15) |

**Example**  
```js
let matrix = fromValues(
  1, 0, 0, 1,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
)
```

### modeling/maths/mat4.fromVectorRotation(out, source, target)

Create a matrix that rotates the given source to the given target vector.

Each vector must be a directional vector with a length greater than zero.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - a new matrix  
**See**: https://gist.github.com/kevinmoran/b45980723e53edeb8a5a43c49f134724  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| source | [`vec3`] | source vector |
| target | [`vec3`] | target vector |

**Example**  
```js
let matrix = fromVectorRotation(mat4.create(), [1, 2, 2], [-3, 3, 12])
```

### modeling/maths/mat4.fromXRotation(out, radians)

Creates a matrix from the given angle around the X axis.
This is equivalent to (but much faster than):

    mat4.identity(dest)
    mat4.rotateX(dest, dest, radians)

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| radians | `Number` | angle to rotate the matrix by |

**Example**  
```js
let matrix = fromXRotation(create(), TAU / 4)
```

### modeling/maths/mat4.fromYRotation(out, radians)

Creates a matrix from the given angle around the Y axis.
This is equivalent to (but much faster than):

    mat4.identity(dest)
    mat4.rotateY(dest, dest, radians)

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| radians | `Number` | angle to rotate the matrix by |

**Example**  
```js
let matrix = fromYRotation(create(), TAU / 4)
```

### modeling/maths/mat4.fromZRotation(out, radians)

Creates a matrix from the given angle around the Z axis.
This is equivalent to (but much faster than):

    mat4.identity(dest)
    mat4.rotateZ(dest, dest, radians)

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| radians | `Number` | angle to rotate the matrix by |

**Example**  
```js
let matrix = fromZRotation(create(), TAU / 4)
```

### modeling/maths/mat4.identity(out)

Set a matrix to the identity transform.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |


### modeling/maths/mat4.invert(out, matrix)

Creates a invert copy of the given matrix.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  
**Author**: Julian Lloyd
code from https://github.com/jlmakes/rematrix/blob/master/src/index.js  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| matrix | [`mat4`] | matrix to invert |


### modeling/maths/mat4.isIdentity(matrix)

Determine whether the given matrix is the identity transform.
This is equivalent to (but much faster than):

    mat4.equals(mat4.create(), matrix)

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: `Boolean` - true if matrix is the identity transform  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [`mat4`] | the matrix |

**Example**  
```js
if (mat4.isIdentity(mymatrix)) ...
```

### modeling/maths/mat4.isMirroring(matrix)

Determine whether the given matrix is a mirroring transformation.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: `Boolean` - true if matrix is a mirroring transformation  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [`mat4`] | matrix of reference |


### modeling/maths/mat4.isOnlyTransformScale(matrix)

Determine whether the given matrix is only translate and/or scale.
This code returns true for TAU / 2 rotation as it can be interpreted as scale.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: `Boolean` - true if matrix is for translate and/or scale  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [`mat4`] | the matrix |


### modeling/maths/mat4.mirrorByPlane(out, plane)

Create a matrix for mirroring about the given plane.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| plane | [`vec4`] | plane of which to mirror the matrix |


### modeling/maths/mat4.multiply(out, a, b)

Multiplies the two matrices.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| a | [`mat4`] | first operand |
| b | [`mat4`] | second operand |


### modeling/maths/mat4.rightMultiplyVec2(vector, matrix)

Multiply a 2D vector by a matrix (interpreted as 2 row, 1 column).

Calculation: result = v*M, where the fourth element is set to 1.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`vec2`] - a new vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec2`] | input vector |
| matrix | [`mat4`] | input matrix |


### modeling/maths/mat4.rightMultiplyVec3(vector, matrix)

Multiply a 3D vector by a matrix (interpreted as 3 row, 1 column)

Calculation: result = v*M, where the fourth element is set to 1.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`vec3`] - a new vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec3`] | input vector |
| matrix | [`mat4`] | input matrix |


### modeling/maths/mat4.rotate(out, matrix, radians, axis)

Rotates a matrix by the given angle about the given axis.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| matrix | [`mat4`] | matrix to rotate |
| radians | `Number` | angle to rotate the matrix by |
| axis | [`vec3`] | axis to rotate around |


### modeling/maths/mat4.rotateX(out, matrix, radians)

Rotates a matrix by the given angle around the X axis.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| matrix | [`mat4`] | matrix to rotate |
| radians | `Number` | angle to rotate the matrix by |


### modeling/maths/mat4.rotateY(out, matrix, radians)

Rotates a matrix by the given angle around the Y axis.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| matrix | [`mat4`] | matrix to rotate |
| radians | `Number` | angle to rotate the matrix by |


### modeling/maths/mat4.rotateZ(out, matrix, radians)

Rotates a matrix by the given angle around the Z axis.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| matrix | [`mat4`] | matrix to rotate |
| radians | `Number` | angle to rotate the matrix by |


### modeling/maths/mat4.scale(out, matrix, dimensions)

Scales the matrix by the given dimensions.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| matrix | [`mat4`] | matrix to scale |
| dimensions | [`vec3`] | dimensions to scale the matrix by |


### modeling/maths/mat4.subtract(out, a, b)

Subtracts matrix b from matrix a. (A-B)

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| a | [`mat4`] | first operand |
| b | [`mat4`] | second operand |


### modeling/maths/mat4.toString(mat)

Return a string representing the given matrix.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: `String` - string representation  

| Param | Type | Description |
| --- | --- | --- |
| mat | [`mat4`] | matrix of reference |


### modeling/maths/mat4.translate(out, matrix, offsets)

Translate the matrix by the given offset vector.

**Kind**: static method of [`modeling/maths/mat4`]  
**Returns**: [`mat4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`mat4`] | receiving matrix |
| matrix | [`mat4`] | matrix to translate |
| offsets | [`vec3`] | offset vector to translate by |


## modeling/maths/plane

Represents a plane in 3D coordinate space as determined by a normal (perpendicular to the plane)
and distance from 0,0,0.

**See**: [plane] for data structure information.  

* [modeling/maths/plane]
    * _static_
        * [.flip(out, plane)]
        * [.fromNoisyPoints(out, ...vertices)]
        * [.fromNormalAndPoint(out, normal, point)]
        * [.fromPoints(out, ...vertices)]
        * [.fromPointsRandom(out, a, b, c)]
        * [.projectionOfPoint(plane, point)]
        * [.signedDistanceToPoint(plane, point)]
        * [.transform(out, plane, matrix)]
    * _inner_
        * [~clone()]
        * [~copy()]
        * [~create()]
        * [~equals()]
        * [~fromValues()]
        * [~toString()]


### modeling/maths/plane.flip(out, plane)

Flip the given plane.

**Kind**: static method of [`modeling/maths/plane`]  
**Returns**: [`plane`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`plane`] | receiving plane |
| plane | [`plane`] | plane to flip |


### modeling/maths/plane.fromNoisyPoints(out, ...vertices)

Create a best-fit plane from the given noisy vertices.

NOTE: There are two possible orientations for every plane.
      This function always produces positive orientations.

See http://www.ilikebigbits.com for the original discussion

**Kind**: static method of [`modeling/maths/plane`]  
**Returns**: `Plane` - out  

| Param | Type | Description |
| --- | --- | --- |
| out | `Plane` | receiving plane |
| ...vertices | `Array` | list of vertices in any order or position |


### modeling/maths/plane.fromNormalAndPoint(out, normal, point)

Create a new plane from the given normal and point values.

**Kind**: static method of [`modeling/maths/plane`]  
**Returns**: [`plane`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`plane`] | receiving plane |
| normal | [`vec3`] | directional vector |
| point | [`vec3`] | origin of plane |


### modeling/maths/plane.fromPoints(out, ...vertices)

Create a plane from the given points.

**Kind**: static method of [`modeling/maths/plane`]  
**Returns**: [`plane`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`plane`] | receiving plane |
| ...vertices | `Array` | points on the plane |


### modeling/maths/plane.fromPointsRandom(out, a, b, c)

Create a new plane from the given points like fromPoints,
but allow the vectors to be on one point or one line.
In such a case, a random plane through the given points is constructed.

**Kind**: static method of [`modeling/maths/plane`]  
**Returns**: [`plane`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`plane`] | receiving plane |
| a | [`vec3`] | 3D point |
| b | [`vec3`] | 3D point |
| c | [`vec3`] | 3D point |


### modeling/maths/plane.projectionOfPoint(plane, point)

Project the given point on to the given plane.

**Kind**: static method of [`modeling/maths/plane`]  
**Returns**: [`vec3`] - projected point on plane  

| Param | Type | Description |
| --- | --- | --- |
| plane | [`plane`] | plane of reference |
| point | [`vec3`] | point of reference |


### modeling/maths/plane.signedDistanceToPoint(plane, point)

Calculate the distance to the given point.

**Kind**: static method of [`modeling/maths/plane`]  
**Returns**: `Number` - signed distance to point  

| Param | Type | Description |
| --- | --- | --- |
| plane | [`plane`] | plane of reference |
| point | [`vec3`] | point of reference |


### modeling/maths/plane.transform(out, plane, matrix)

Transform the given plane using the given matrix

**Kind**: static method of [`modeling/maths/plane`]  
**Returns**: [`plane`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`plane`] | receiving plane |
| plane | [`plane`] | plane to transform |
| matrix | [`mat4`] | matrix to transform with |


### modeling/maths/plane~clone()

**Kind**: inner method of [`modeling/maths/plane`]  
**See**: [vec4.clone()]  

### modeling/maths/plane~copy()

**Kind**: inner method of [`modeling/maths/plane`]  
**See**: [vec4.copy()]  

### modeling/maths/plane~create()

**Kind**: inner method of [`modeling/maths/plane`]  
**See**: [vec4.create()]  

### modeling/maths/plane~equals()

**Kind**: inner method of [`modeling/maths/plane`]  
**See**: [vec4.equals()]  

### modeling/maths/plane~fromValues()

**Kind**: inner method of [`modeling/maths/plane`]  
**See**: [vec4.fromValues()]  

### modeling/maths/plane~toString()

**Kind**: inner method of [`modeling/maths/plane`]  
**See**: [vec4.toString()]  

## modeling/maths/utils

Utility functions for maths.

**Example**  
```js
const { area, solve2Linear } = require('@jscad/maths').utils
```

* [modeling/maths/utils]
    * [.aboutEqualNormals(a, b)]
    * [.area(points)]
    * [.interpolateBetween2DPointsForY(point1, point2, y)]
    * [.intersect(p1, p2, p3, p4)]


### modeling/maths/utils.aboutEqualNormals(a, b)

Compare two normals (unit vectors) for near equality.

**Kind**: static method of [`modeling/maths/utils`]  
**Returns**: `Boolean` - true if a and b are nearly equal  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec3`] | normal a |
| b | [`vec3`] | normal b |


### modeling/maths/utils.area(points)

Calculate the area under the given points.

**Kind**: static method of [`modeling/maths/utils`]  
**Returns**: `Number` - area under the given points  

| Param | Type | Description |
| --- | --- | --- |
| points | `Array` | list of 2D points |


### modeling/maths/utils.interpolateBetween2DPointsForY(point1, point2, y)

Get the X coordinate of a point with a certain Y coordinate, interpolated between two points.
Interpolation is robust even if the points have the same Y coordinate

**Kind**: static method of [`modeling/maths/utils`]  
**Returns**: `Array` - X and Y of interpolated point  

| Param | Type |
| --- | --- |
| point1 | [`vec2`] | 
| point2 | [`vec2`] | 
| y | `Number` | 


### modeling/maths/utils.intersect(p1, p2, p3, p4)

Calculate the intersect point of the two line segments (p1-p2 and p3-p4), end points included.
Note: If the line segments do NOT intersect then undefined is returned.

**Kind**: static method of [`modeling/maths/utils`]  
**Returns**: [`vec2`] - intersection point of the two line segments, or undefined  
**See**: http://paulbourke.net/geometry/pointlineplane/  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [`vec2`] | first point of first line segment |
| p2 | [`vec2`] | second point of first line segment |
| p3 | [`vec2`] | first point of second line segment |
| p4 | [`vec2`] | second point of second line segment |


## modeling/maths/vec2

Represents a two dimensional vector.


* [modeling/maths/vec2]
    * [.abs(out, vector)]
    * [.add(out, a, b)]
    * [.angleDegrees(vector)]
    * [.angleRadians(vector)]
    * [.clone(vector)]
    * [.copy(out, vector)]
    * [.create()]
    * [.cross(out, a, b)]
    * [.distance(a, b)]
    * [.divide(out, a, b)]
    * [.dot(a, b)]
    * [.equals(a, b)]
    * [.fromAngleDegrees(out, degrees)]
    * [.fromAngleRadians(out, radians)]
    * [.fromScalar(out, scalar)]
    * [.fromValues(x, y)]
    * [.length(vector)]
    * [.lerp(out, a, b, t)]
    * [.max(out, a, b)]
    * [.min(out, a, b)]
    * [.multiply(out, a, b)]
    * [.negate(out, vector)]
    * [.normal(out, vector)]
    * [.normalize(out, vector)]
    * [.rotate(out, vector, origin, radians)]
    * [.scale(out, vector, amount)]
    * [.snap(out, vector, epsilon)]
    * [.squaredDistance(a, b)]
    * [.squaredLength(vector)]
    * [.subtract(out, a, b)]
    * [.toString(vector)]
    * [.transform(out, vector, matrix)]


### modeling/maths/vec2.abs(out, vector)

Calculates the absolute coordinates of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | vector of reference |


### modeling/maths/vec2.add(out, a, b)

Adds the coordinates of two vectors (A+B).

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.angleDegrees(vector)

Calculate the angle of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `Number` - angle in degrees  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec2`] | vector of reference |


### modeling/maths/vec2.angleRadians(vector)

Calculate the angle of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `Number` - angle in radians  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec2`] | vector of reference |


### modeling/maths/vec2.clone(vector)

Create a clone of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - a new vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec2`] | vector to clone |


### modeling/maths/vec2.copy(out, vector)

Create a copy of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | source vector |


### modeling/maths/vec2.create()

Creates a new vector, initialized to [0,0].

**Kind**: static method of [`modeling/maths/vec2`][2]  
**Returns**: [`vec2`] - a new vector  

### modeling/maths/vec2.cross(out, a, b)

Computes the cross product (3D) of two vectors.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector (3D) |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.distance(a, b)

Calculates the distance between two vectors.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `Number` - distance  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.divide(out, a, b)

Divides the coordinates of two vectors (A/B).

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.dot(a, b)

Calculates the dot product of two vectors.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `Number` - dot product  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.equals(a, b)

Compare the given vectors for equality.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `Boolean` - true if a and b are equal  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.fromAngleDegrees(out, degrees)

Create a new vector in the direction of the given angle.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| degrees | `Number` | angle in degrees |


### modeling/maths/vec2.fromAngleRadians(out, radians)

Create a new vector in the direction of the given angle.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| radians | `Number` | angle in radians |


### modeling/maths/vec2.fromScalar(out, scalar)

Create a vector from a single scalar value.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| scalar | `Number` | the scalar value |


### modeling/maths/vec2.fromValues(x, y)

Creates a new vector initialized with the given values.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - a new vector  

| Param | Type | Description |
| --- | --- | --- |
| x | `Number` | X coordinate |
| y | `Number` | Y coordinate |


### modeling/maths/vec2.length(vector)

Calculates the length of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `Number` - length  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec2`] | vector of reference |


### modeling/maths/vec2.lerp(out, a, b, t)

Performs a linear interpolation between two vectors.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |
| t | `Number` | interpolation amount between the two vectors |


### modeling/maths/vec2.max(out, a, b)

Returns the maximum coordinates of two vectors.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.min(out, a, b)

Returns the minimum coordinates of two vectors.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.multiply(out, a, b)

Multiplies the coordinates of two vectors (A*B).

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.negate(out, vector)

Negates the coordinates of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | vector to negate |


### modeling/maths/vec2.normal(out, vector)

Calculates the normal of the given vector.
The normal value is the given vector rotated 90 degrees.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | given value |


### modeling/maths/vec2.normalize(out, vector)

Normalize the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | vector to normalize |


### modeling/maths/vec2.rotate(out, vector, origin, radians)

Rotates the given vector by the given angle.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | vector to rotate |
| origin | [`vec2`] | origin of the rotation |
| radians | `Number` | angle of rotation (radians) |


### modeling/maths/vec2.scale(out, vector, amount)

Scales the coordinates of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | vector to scale |
| amount | `Number` | amount to scale |


### modeling/maths/vec2.snap(out, vector, epsilon)

Snaps the coordinates of the given vector to the given epsilon.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | vector to snap |
| epsilon | `Number` | epsilon of precision, less than 0 |


### modeling/maths/vec2.squaredDistance(a, b)

Calculates the squared distance between the given vectors.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `Number` - squared distance  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.squaredLength(vector)

Calculates the squared length of the given vector.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `Number` - squared length  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec2`] | vector of reference |


### modeling/maths/vec2.subtract(out, a, b)

Subtracts the coordinates of two vectors (A-B).

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| a | [`vec2`] | first operand |
| b | [`vec2`] | second operand |


### modeling/maths/vec2.toString(vector)

Convert the given vector to a representative string.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: `String` - string representation  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec2`] | vector of reference |


### modeling/maths/vec2.transform(out, vector, matrix)

Transforms the given vector using the given matrix.

**Kind**: static method of [`modeling/maths/vec2`]  
**Returns**: [`vec2`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec2`] | receiving vector |
| vector | [`vec2`] | vector to transform |
| matrix | [`mat4`] | matrix to transform with |


## modeling/maths/vec3

Represents a three dimensional vector.

**See**: [vec3] for data structure information.  

* [modeling/maths/vec3]
    * [.abs(out, vector)]
    * [.add(out, a, b)]
    * [.angle(a, b)]
    * [.clone(vector)]
    * [.copy(out, vector)]
    * [.create()]
    * [.cross(out, a, b)]
    * [.distance(a, b)]
    * [.divide(out, a, b)]
    * [.dot(a, b)]
    * [.equals(a, b)]
    * [.fromScalar(out, scalar)]
    * [.fromValues(x, y, z)]
    * [.fromVec2(out, vector, \[z\])]
    * [.length(vector)]
    * [.lerp(out, a, b, t)]
    * [.max(out, a, b)]
    * [.min(out, a, b)]
    * [.multiply(out, a, b)]
    * [.negate(out, vector)]
    * [.normalize(out, vector)]
    * [.orthogonal(out, vector)]
    * [.rotateX(out, vector, origin, radians)]
    * [.rotateY(out, vector, origin, radians)]
    * [.rotateZ(out, vector, origin, radians)]
    * [.scale(out, vector, amount)]
    * [.snap(out, vector, epsilon)]
    * [.squaredDistance(a, b)]
    * [.squaredLength(vector)]
    * [.subtract(out, a, b)]
    * [.toString(vec)]
    * [.transform(out, vector, matrix)]


### modeling/maths/vec3.abs(out, vector)

Calculates the absolute coordinates of the give vector.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector of reference |


### modeling/maths/vec3.add(out, a, b)

Adds the coordinates of two vectors (A+B).

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.angle(a, b)

Calculate the angle between two vectors.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: `Number` - angle (radians)  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.clone(vector)

Create a clone of the given vector.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - a new vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec3`] | vector to clone |


### modeling/maths/vec3.copy(out, vector)

Create a copy of the given vector.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to copy |


### modeling/maths/vec3.create()

Creates a new vector initialized to [0,0,0].

**Kind**: static method of [`modeling/maths/vec3`][3]  
**Returns**: [`vec3`] - a new vector  

### modeling/maths/vec3.cross(out, a, b)

Computes the cross product of the given vectors (AxB).

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.distance(a, b)

Calculates the Euclidian distance between the given vectors.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: `Number` - distance  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.divide(out, a, b)

Divides the coordinates of two vectors (A/B).

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| a | [`vec3`] | dividend vector |
| b | [`vec3`] | divisor vector |


### modeling/maths/vec3.dot(a, b)

Calculates the dot product of two vectors.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: `Number` - dot product  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.equals(a, b)

Compare the given vectors for equality.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: `Boolean` - true if a and b are equal  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.fromScalar(out, scalar)

Creates a vector from a single scalar value.
All components of the resulting vector have the given value.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| scalar | `Number` |  |


### modeling/maths/vec3.fromValues(x, y, z)

Creates a new vector initialized with the given values.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - a new vector  

| Param | Type | Description |
| --- | --- | --- |
| x | `Number` | X component |
| y | `Number` | Y component |
| z | `Number` | Z component |


### modeling/maths/vec3.fromVec2(out, vector, \[z\])

Create a new vector by extending a 2D vector with a Z value.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| out | [`vec3`] |  | receiving vector |
| vector | `Array` |  | 2D vector of values |
| \[z\] | `Number` | `0` | Z value |


### modeling/maths/vec3.length(vector)

Calculates the length of a vector.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: `Number` - length  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec3`] | vector to calculate length of |


### modeling/maths/vec3.lerp(out, a, b, t)

Performs a linear interpolation between two vectors.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |
| t | `Number` | interpolant (0.0 to 1.0) applied between the two inputs |


### modeling/maths/vec3.max(out, a, b)

Returns the maximum coordinates of the given vectors.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.min(out, a, b)

Returns the minimum coordinates of the given vectors.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.multiply(out, a, b)

Multiply the coordinates of the given vectors (A*B).

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.negate(out, vector)

Negates the coordinates of the given vector.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to negate |


### modeling/maths/vec3.normalize(out, vector)

Normalize the given vector.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to normalize |


### modeling/maths/vec3.orthogonal(out, vector)

Create a new vector that is orthogonal to the given vector.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector of reference |


### modeling/maths/vec3.rotateX(out, vector, origin, radians)

Rotate the given vector around the given origin, X axis only.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to rotate |
| origin | [`vec3`] | origin of the rotation |
| radians | `Number` | angle of rotation |


### modeling/maths/vec3.rotateY(out, vector, origin, radians)

Rotate the given vector around the given origin, Y axis only.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to rotate |
| origin | [`vec3`] | origin of the rotation |
| radians | `Number` | angle of rotation |


### modeling/maths/vec3.rotateZ(out, vector, origin, radians)

Rotate the given vector around the given origin, Z axis only.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to rotate |
| origin | [`vec3`] | origin of the rotation |
| radians | `Number` | angle of rotation in radians |


### modeling/maths/vec3.scale(out, vector, amount)

Scales the coordinates of the given vector by a scalar number.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to scale |
| amount | `Number` | amount to scale the vector by |


### modeling/maths/vec3.snap(out, vector, epsilon)

Snaps the coordinates of the given vector to the given epsilon.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to snap |
| epsilon | `Number` | epsilon of precision, less than 0 |


### modeling/maths/vec3.squaredDistance(a, b)

Calculates the squared distance between two vectors.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: `Number` - squared distance  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec3`] | first operand |
| b | [`vec3`] | second operand |


### modeling/maths/vec3.squaredLength(vector)

Calculates the squared length of the given vector.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: `Number` - squared length  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec3`] | vector to calculate squared length of |


### modeling/maths/vec3.subtract(out, a, b)

Subtracts the coordinates of two vectors (A-B).

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| a | [`vec3`] | minuend vector |
| b | [`vec3`] | subtrahend vector |


### modeling/maths/vec3.toString(vec)

Convert the given vector to a representative string.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: `String` - string representation  

| Param | Type | Description |
| --- | --- | --- |
| vec | [`vec3`] | vector of reference |


### modeling/maths/vec3.transform(out, vector, matrix)

Transforms the given vector using the given matrix.

**Kind**: static method of [`modeling/maths/vec3`]  
**Returns**: [`vec3`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec3`] | receiving vector |
| vector | [`vec3`] | vector to transform |
| matrix | [`mat4`] | transform matrix |


## modeling/maths/vec4

Represents a four dimensional vector.

**See**: [vec4] for data structure information.  

* [modeling/maths/vec4]
    * [.clone(vector)]
    * [.copy(out, vector)]
    * [.create()]
    * [.dot(a, b)]
    * [.equals(a, b)]
    * [.fromScalar(out, scalar)]
    * [.fromValues(x, y, z, w)]
    * [.toString(vec)]
    * [.transform(out, vector, matrix)]


### modeling/maths/vec4.clone(vector)

Create a clone of the given vector.

**Kind**: static method of [`modeling/maths/vec4`]  
**Returns**: [`vec4`] - a new vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | [`vec4`] | source vector |


### modeling/maths/vec4.copy(out, vector)

Create a copy of the given vector.

**Kind**: static method of [`modeling/maths/vec4`]  
**Returns**: [`vec4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec4`] | receiving vector |
| vector | [`vec4`] | source vector |


### modeling/maths/vec4.create()

Creates a new vector initialized to [0,0,0,0].

**Kind**: static method of [`modeling/maths/vec4`][4]  
**Returns**: [`vec4`] - a new vector  

### modeling/maths/vec4.dot(a, b)

Calculates the dot product of the given vectors.

**Kind**: static method of [`modeling/maths/vec4`]  
**Returns**: `Number` - dot product  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec4`] | first vector |
| b | [`vec4`] | second vector |


### modeling/maths/vec4.equals(a, b)

Compare the given vectors for equality.

**Kind**: static method of [`modeling/maths/vec4`]  
**Returns**: `Boolean` - true if vectors are equal  

| Param | Type | Description |
| --- | --- | --- |
| a | [`vec4`] | first vector |
| b | [`vec4`] | second vector |


### modeling/maths/vec4.fromScalar(out, scalar)

Create a new vector from the given scalar value.

**Kind**: static method of [`modeling/maths/vec4`]  
**Returns**: [`vec4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec4`] | receiving vector |
| scalar | `Number` |  |


### modeling/maths/vec4.fromValues(x, y, z, w)

Creates a new vector with the given values.

**Kind**: static method of [`modeling/maths/vec4`]  
**Returns**: [`vec4`] - a new vector  

| Param | Type | Description |
| --- | --- | --- |
| x | `Number` | X component |
| y | `Number` | Y component |
| z | `Number` | Z component |
| w | `Number` | W component |


### modeling/maths/vec4.toString(vec)

Convert the given vector to a representative string.

**Kind**: static method of [`modeling/maths/vec4`]  
**Returns**: `String` - representative string  

| Param | Type | Description |
| --- | --- | --- |
| vec | [`vec4`] | vector to convert |


### modeling/maths/vec4.transform(out, vector, matrix)

Transform the given vector using the given matrix.

**Kind**: static method of [`modeling/maths/vec4`]  
**Returns**: [`vec4`] - out  

| Param | Type | Description |
| --- | --- | --- |
| out | [`vec4`] | receiving vector |
| vector | [`vec4`] | vector to transform |
| matrix | [`mat4`] | matrix to transform with |


## TAU

The TAU property represents the ratio of the circumference of a circle to its radius.
Approximately 6.28318530717958647692

**Kind**: global constant  
**Example**  
```js
const { TAU } = require('@jscad/modeling').maths.constants
```

## line2

Represents a unbounded line in 2D space, positioned at a point of origin.
A line is parametrized by a normal vector (perpendicular to the line, rotated 90 degrees counter clockwise) and
distance from the origin.

Equation: A Point (P) is on Line (L) if dot(L.normal, P) == L.distance

The contents of the array are a normal [0,1] and a distance [2].

**Kind**: global typedef  

## line3

Represents a unbounded line in 3D space, positioned at a point of origin.
A line is parametrized by a point of origin and a directional vector.

The array contents are two 3D vectors; origin [0,0,0] and directional vector [0,0,1].

**Kind**: global typedef  
**See**: https://en.wikipedia.org/wiki/Hesse_normal_form  

## mat4

Represents a 4x4 matrix which is column-major (when typed out it looks row-major).
See fromValues().

**Kind**: global typedef  

## plane

Represents a plane in 3D coordinate space as determined by a normal (perpendicular to the plane)
and distance from 0,0,0.

The contents of the array are a normal [0,1,2] and a distance [3].

**Kind**: global typedef  
**See**: https://en.wikipedia.org/wiki/Hesse_normal_form  

## vec2

Represents a two dimensional vector.
See fromValues().

**Kind**: global typedef  

## vec3

Represents a three dimensional vector.
See fromValues().

**Kind**: global typedef  

## vec4

Represents a four dimensional vector.
See fromValues().

**Kind**: global typedef  
<!-- LINKS -->

[modeling/maths]:#modelingmaths
[modeling/maths/line2]:#modelingmathsline2
[modeling/maths/line3]:#modelingmathsline3
[modeling/maths/mat4]:#modelingmathsmat4
[modeling/maths/plane]:#modelingmathsplane
[modeling/maths/utils]:#modelingmathsutils
[modeling/maths/vec2]:#modelingmathsvec2
[modeling/maths/vec3]:#modelingmathsvec3
[modeling/maths/vec4]:#modelingmathsvec4
[TAU]:#tau
[line2]:#line2
[line3]:#line3
[mat4]:#mat4
[plane]:#plane
[vec2]:#vec2
[vec3]:#vec3
[vec4]:#vec4
[.spatialResolution]:#modelingmathsspatialresolution
[.EPS]:#modelingmathseps
[.NEPS]:#modelingmathsneps
[`modeling/maths`]:#modelingmaths
[`modeling/maths/line2`]:#modelingmathsline2
[`line2`]:#line2
[`vec2`]:#vec2
[1]:#modelingmathsline2
[`mat4`]:#mat4
[`modeling/maths/line3`]:#modelingmathsline3
[`line3`]:#line3
[`vec3`]:#vec3
[`plane`]:#plane
[`modeling/maths/mat4`]:#modelingmathsmat4
[`vec4`]:#vec4
[`modeling/maths/plane`]:#modelingmathsplane
[`modeling/maths/utils`]:#modelingmathsutils
[`modeling/maths/vec2`]:#modelingmathsvec2
[2]:#modelingmathsvec2
[`modeling/maths/vec3`]:#modelingmathsvec3
[3]:#modelingmathsvec3
[`modeling/maths/vec4`]:#modelingmathsvec4
[4]:#modelingmathsvec4
[.clone(line)]:#modelingmathsline3cloneline
[.closestPoint(line, point)]:#modelingmathsline3closestpointline-point
[.copy(out, line)]:#modelingmathsline3copyout-line
[.create()]:#modelingmathsvec4create
[.direction(line)]:#modelingmathsline3directionline
[.distanceToPoint(line, point)]:#modelingmathsline3distancetopointline-point
[.equals(line1, line2)]:#modelingmathsline3equalsline1-line2
[.fromPoints(out, point1, point2)]:#modelingmathsline3frompointsout-point1-point2
[.fromValues(x, y, d)]:#modelingmathsline2fromvaluesx-y-d
[.intersectPointOfLines(line1, line2)]:#modelingmathsline2intersectpointoflinesline1-line2
[.origin(line)]:#modelingmathsline3originline
[.reverse(out, line)]:#modelingmathsline3reverseout-line
[.toString(line)]:#modelingmathsline3tostringline
[.transform(out, line, matrix)]:#modelingmathsline3transformout-line-matrix
[.xAtY(line, y)]:#modelingmathsline2xatyline-y
[.fromPlanes(out, plane1, plane2)]:#modelingmathsline3fromplanesout-plane1-plane2
[.fromPointAndDirection(out, point, direction)]:#modelingmathsline3frompointanddirectionout-point-direction
[.intersectPointOfLineAndPlane(line, plane)]:#modelingmathsline3intersectpointoflineandplaneline-plane
[.add(out, a, b)]:#modelingmathsvec3addout-a-b
[.clone(matrix)]:#modelingmathsmat4clonematrix
[.copy(out, matrix)]:#modelingmathsmat4copyout-matrix
[.equals(a, b)]:#modelingmathsvec4equalsa-b
[.fromRotation(out, rad, axis)]:#modelingmathsmat4fromrotationout-rad-axis
[.fromScaling(out, vector)]:#modelingmathsmat4fromscalingout-vector
[.fromTaitBryanRotation(out, yaw, pitch, roll)]:#modelingmathsmat4fromtaitbryanrotationout-yaw-pitch-roll
[.fromTranslation(out, vector)]:#modelingmathsmat4fromtranslationout-vector
[.fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33)]:#modelingmathsmat4fromvaluesm00-m01-m02-m03-m10-m11-m12-m13-m20-m21-m22-m23-m30-m31-m32-m33
[.fromVectorRotation(out, source, target)]:#modelingmathsmat4fromvectorrotationout-source-target
[.fromXRotation(out, radians)]:#modelingmathsmat4fromxrotationout-radians
[.fromYRotation(out, radians)]:#modelingmathsmat4fromyrotationout-radians
[.fromZRotation(out, radians)]:#modelingmathsmat4fromzrotationout-radians
[.identity(out)]:#modelingmathsmat4identityout
[.invert(out, matrix)]:#modelingmathsmat4invertout-matrix
[.isIdentity(matrix)]:#modelingmathsmat4isidentitymatrix
[.isMirroring(matrix)]:#modelingmathsmat4ismirroringmatrix
[.isOnlyTransformScale(matrix)]:#modelingmathsmat4isonlytransformscalematrix
[.mirrorByPlane(out, plane)]:#modelingmathsmat4mirrorbyplaneout-plane
[.multiply(out, a, b)]:#modelingmathsvec3multiplyout-a-b
[.rightMultiplyVec2(vector, matrix)]:#modelingmathsmat4rightmultiplyvec2vector-matrix
[.rightMultiplyVec3(vector, matrix)]:#modelingmathsmat4rightmultiplyvec3vector-matrix
[.rotate(out, matrix, radians, axis)]:#modelingmathsmat4rotateout-matrix-radians-axis
[.rotateX(out, matrix, radians)]:#modelingmathsmat4rotatexout-matrix-radians
[.rotateY(out, matrix, radians)]:#modelingmathsmat4rotateyout-matrix-radians
[.rotateZ(out, matrix, radians)]:#modelingmathsmat4rotatezout-matrix-radians
[.scale(out, matrix, dimensions)]:#modelingmathsmat4scaleout-matrix-dimensions
[.subtract(out, a, b)]:#modelingmathsvec3subtractout-a-b
[.toString(mat)]:#modelingmathsmat4tostringmat
[.translate(out, matrix, offsets)]:#modelingmathsmat4translateout-matrix-offsets
[.flip(out, plane)]:#modelingmathsplaneflipout-plane
[.fromNoisyPoints(out, ...vertices)]:#modelingmathsplanefromnoisypointsout-vertices
[.fromNormalAndPoint(out, normal, point)]:#modelingmathsplanefromnormalandpointout-normal-point
[.fromPoints(out, ...vertices)]:#modelingmathsplanefrompointsout-vertices
[.fromPointsRandom(out, a, b, c)]:#modelingmathsplanefrompointsrandomout-a-b-c
[.projectionOfPoint(plane, point)]:#modelingmathsplaneprojectionofpointplane-point
[.signedDistanceToPoint(plane, point)]:#modelingmathsplanesigneddistancetopointplane-point
[.transform(out, plane, matrix)]:#modelingmathsplanetransformout-plane-matrix
[~clone()]:#modelingmathsplaneclone
[~copy()]:#modelingmathsplanecopy
[~create()]:#modelingmathsplanecreate
[~equals()]:#modelingmathsplaneequals
[~fromValues()]:#modelingmathsplanefromvalues
[~toString()]:#modelingmathsplanetostring
[vec4.clone()]:#module_modeling/maths/vec4.clone
[vec4.copy()]:#module_modeling/maths/vec4.copy
[vec4.create()]:#module_modeling/maths/vec4.create
[vec4.equals()]:#module_modeling/maths/vec4.equals
[vec4.fromValues()]:#module_modeling/maths/vec4.fromValues
[vec4.toString()]:#module_modeling/maths/vec4.toString
[.aboutEqualNormals(a, b)]:#modelingmathsutilsaboutequalnormalsa-b
[.area(points)]:#modelingmathsutilsareapoints
[.interpolateBetween2DPointsForY(point1, point2, y)]:#modelingmathsutilsinterpolatebetween2dpointsforypoint1-point2-y
[.intersect(p1, p2, p3, p4)]:#modelingmathsutilsintersectp1-p2-p3-p4
[.abs(out, vector)]:#modelingmathsvec3absout-vector
[.angleDegrees(vector)]:#modelingmathsvec2angledegreesvector
[.angleRadians(vector)]:#modelingmathsvec2angleradiansvector
[.clone(vector)]:#modelingmathsvec4clonevector
[.copy(out, vector)]:#modelingmathsvec4copyout-vector
[.cross(out, a, b)]:#modelingmathsvec3crossout-a-b
[.distance(a, b)]:#modelingmathsvec3distancea-b
[.divide(out, a, b)]:#modelingmathsvec3divideout-a-b
[.dot(a, b)]:#modelingmathsvec4dota-b
[.fromAngleDegrees(out, degrees)]:#modelingmathsvec2fromangledegreesout-degrees
[.fromAngleRadians(out, radians)]:#modelingmathsvec2fromangleradiansout-radians
[.fromScalar(out, scalar)]:#modelingmathsvec4fromscalarout-scalar
[.fromValues(x, y)]:#modelingmathsvec2fromvaluesx-y
[.length(vector)]:#modelingmathsvec3lengthvector
[.lerp(out, a, b, t)]:#modelingmathsvec3lerpout-a-b-t
[.max(out, a, b)]:#modelingmathsvec3maxout-a-b
[.min(out, a, b)]:#modelingmathsvec3minout-a-b
[.negate(out, vector)]:#modelingmathsvec3negateout-vector
[.normal(out, vector)]:#modelingmathsvec2normalout-vector
[.normalize(out, vector)]:#modelingmathsvec3normalizeout-vector
[.rotate(out, vector, origin, radians)]:#modelingmathsvec2rotateout-vector-origin-radians
[.scale(out, vector, amount)]:#modelingmathsvec3scaleout-vector-amount
[.snap(out, vector, epsilon)]:#modelingmathsvec3snapout-vector-epsilon
[.squaredDistance(a, b)]:#modelingmathsvec3squareddistancea-b
[.squaredLength(vector)]:#modelingmathsvec3squaredlengthvector
[.toString(vector)]:#modelingmathsvec2tostringvector
[.transform(out, vector, matrix)]:#modelingmathsvec4transformout-vector-matrix
[.angle(a, b)]:#modelingmathsvec3anglea-b
[.fromValues(x, y, z)]:#modelingmathsvec3fromvaluesx-y-z
[.fromVec2(out, vector, \[z\])]:#modelingmathsvec3fromvec2out-vector-z
[.orthogonal(out, vector)]:#modelingmathsvec3orthogonalout-vector
[.rotateX(out, vector, origin, radians)]:#modelingmathsvec3rotatexout-vector-origin-radians
[.rotateY(out, vector, origin, radians)]:#modelingmathsvec3rotateyout-vector-origin-radians
[.rotateZ(out, vector, origin, radians)]:#modelingmathsvec3rotatezout-vector-origin-radians
[.toString(vec)]:#modelingmathsvec4tostringvec
[.fromValues(x, y, z, w)]:#modelingmathsvec4fromvaluesx-y-z-w
