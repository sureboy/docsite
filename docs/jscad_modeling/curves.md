## Modules
Module | Description
------ | -----------
[modeling/curves/bezier] | Represents a bezier easing function.
[modeling/curves] | Curves are n-dimensional mathematical constructs that define a path from point 0 to point 1.

## Functions

Name | Description
------ | -----------
[lengths(segments, bezier)] | Divides the bezier curve into line segments and returns the cumulative length of those segments as an array. Utility function used to calculate the curve's approximate length and determine the equivalence between arc length and time.
[distanceBetween(a, b)] | Calculates the Euclidean distance between two n-dimensional points.

## Typedefs

Name | Description
------ | -----------
[bezier] | Represents a bezier easing function.


## modeling/curves/bezier

Represents a bezier easing function.

**See**: [bezier] for data structure information.  

* [modeling/curves/bezier]
    * [.arcLengthToT(\[options\], bezier)]
    * [.create(points)]
    * [.length(segments, bezier)]
    * [.tangentAt(t, bezier)]
    * [.valueAt(t, bezier)]


### modeling/curves/bezier.arcLengthToT(\[options\], bezier)

Convert a given arc length along a bezier curve to a t value.
Useful for generating equally spaced points along a bezier curve.

**Kind**: static method of [`modeling/curves/bezier`]  
**Returns**: a number in the [0, 1] interval or NaN if the arcLength is negative or greater than the total length of the curve.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` |  | options for construction |
| \[options.distance\] | `Number` | `0` | the distance along the bezier curve for which we want to find the corresponding t value. |
| \[options.segments\] | `Number` | `100` | the number of segments to use when approximating the curve length. |
| bezier | `Object` |  | a bezier curve. |

**Example**  
```js
const points = [];
const segments = 9; // this will generate 10 equally spaced points
const increment = bezier.length(100, bezierCurve) / segments;
for(let i = 0; i <= segments; i++) {
  const t = bezier.arcLengthToT({distance: i * increment}, bezierCurve);
  const point = bezier.valueAt(t, bezierCurve);
  points.push(point);
}
return points;
```

### modeling/curves/bezier.create(points)

Creates an object representing a bezier easing curve.
Curves can have both an arbitrary number of control points, and an arbitrary number of dimensions.

**Kind**: static method of [`modeling/curves/bezier`]  
**Returns**: [`bezier`] - a new bezier data object  

| Param | Type | Description |
| --- | --- | --- |
| points | `Array` | An array with at least 2 elements of either all numbers, or all arrays of numbers that are the same size. |

**Example**  
```js
const b = bezier.create([0,10]) // a linear progression from 0 to 10
const b = bezier.create([0, 0, 10, 10]) // a symmetrical cubic easing curve that starts slowly and ends slowly from 0 to 10
const b = bezier.create([0,0,0], [0,5,10], [10,0,-5], [10,10,10]]) // a cubic 3 dimensional easing curve that can generate position arrays for modelling
// Usage
let position = bezier.valueAt(t,b) // where 0 < t < 1
let tangent = bezier.tangentAt(t,b) // where 0 < t < 1
```

### modeling/curves/bezier.length(segments, bezier)

Approximates the length of the bezier curve by sampling it at a sequence of points, then adding up all the distances.
This is equivalent to flattening the curve into lines and adding up all the line lengths.

**Kind**: static method of [`modeling/curves/bezier`]  
**Returns**: an approximation of the curve's length.  

| Param | Type | Description |
| --- | --- | --- |
| segments | `Number` | the number of segments to use when approximating the curve length. |
| bezier | `Object` | a bezier curve. |

**Example**  
```js
const b = bezier.create([[0, 0], [0, 10]]);
console.log(length(100, b)) // output 10
```

### modeling/curves/bezier.tangentAt(t, bezier)

Calculates the tangent at a specific position along a bezier easing curve.
For multidimensional curves, the tangent is the slope of each dimension at that point.
See the example called extrudeAlongPath.js

**Kind**: static method of [`modeling/curves/bezier`]  
**Returns**: `array` ⎮ `number` - the tangent at the requested position.  

| Param | Type | Description |
| --- | --- | --- |
| t | `number` | : the position of which to calculate the bezier's tangent value; 0 < t < 1 |
| bezier | `Object` | : an array with at least 2 elements of either all numbers, or all arrays of numbers that are the same size. |

**Example**  
```js
const b = bezier.create([[0,0,0], [0,5,10], [10,0,-5], [10,10,10]]) // a cubic 3 dimensional easing curve that can generate position arrays for modelling
let tangent = bezier.tangentAt(t, b)
```

### modeling/curves/bezier.valueAt(t, bezier)

Calculates the value at a specific position along a bezier easing curve.
For multidimensional curves, the tangent is the slope of each dimension at that point.
See the example called extrudeAlongPath.js to see this in use.
Math and explanation comes from [https://www.freecodecamp.org/news/nerding-out-with-bezier-curves-6e3c0bc48e2f/]

**Kind**: static method of [`modeling/curves/bezier`]  
**Returns**: `array` ⎮ `number` - the value at the requested position.  

| Param | Type | Description |
| --- | --- | --- |
| t | `number` | : the position of which to calculate the value; 0 < t < 1 |
| bezier | `Object` | : a bezier curve created with bezier.create(). |

**Example**  
```js
const b = bezier.create([0,0,0], [0,5,10], [10,0,-5], [10,10,10]]) // a cubic 3 dimensional easing curve that can generate position arrays for modelling
let position = bezier.valueAt(t,b) // where 0 < t < 1
```

## modeling/curves

Curves are n-dimensional mathematical constructs that define a path from point 0 to point 1.

**Example**  
```js
const { bezier } = require('@jscad/modeling').curves
```

## lengths(segments, bezier)

Divides the bezier curve into line segments and returns the cumulative length of those segments as an array.
Utility function used to calculate the curve's approximate length and determine the equivalence between arc length and time.

**Kind**: global function  
**Returns**: an array containing the cumulative length of the segments.  

| Param | Type | Description |
| --- | --- | --- |
| segments | `Number` | the number of segments to use when approximating the curve length. |
| bezier | `Object` | a bezier curve. |

**Example**  
```js
const b = bezier.create([[0, 0], [0, 10]]);
const totalLength = lengths(100, b).pop(); // the last element of the array is the curve's approximate length
```

## distanceBetween(a, b)

Calculates the Euclidean distance between two n-dimensional points.

**Kind**: global function  
**Returns**: `Number` - - distance.  

| Param | Type | Description |
| --- | --- | --- |
| a | `Array` | first operand. |
| b | `Array` | second operand. |

**Example**  
```js
const distance = distanceBetween([0, 0], [0, 10]); // calculate distance between 2D points
console.log(distance); // output 10
```

## bezier

Represents a bezier easing function.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| points | `Array` | The control points for the bezier curve. The first and last point will also be the start and end of the curve |
| pointType | `string` | A reference to the type and dimensionality of the points that the curve was created from |
| dimensions | `number` | The dimensionality of the bezier |
| permutations | `Array` | A pre-calculation of the bezier algorithm's co-efficients |
| tangentPermutations | `Array` | A pre-calculation of the bezier algorithm's tangent co-efficients |

<!-- LINKS -->

[modeling/curves/bezier]:#modelingcurvesbezier
[modeling/curves]:#modelingcurves
[bezier]:#bezier
[`modeling/curves/bezier`]:#modelingcurvesbezier
[`bezier`]:#bezier
[https://www.freecodecamp.org/news/nerding-out-with-bezier-curves-6e3c0bc48e2f/]:https://www.freecodecamp.org/news/nerding-out-with-bezier-curves-6e3c0bc48e2f/
[lengths(segments, bezier)]:#lengthssegments-bezier
[distanceBetween(a, b)]:#distancebetweena-b
[.arcLengthToT(\[options\], bezier)]:#modelingcurvesbezierarclengthtotoptions-bezier
[.create(points)]:#modelingcurvesbeziercreatepoints
[.length(segments, bezier)]:#modelingcurvesbezierlengthsegments-bezier
[.tangentAt(t, bezier)]:#modelingcurvesbeziertangentatt-bezier
[.valueAt(t, bezier)]:#modelingcurvesbeziervalueatt-bezier
