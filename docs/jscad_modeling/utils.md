
## modeling/utils

各类实用工具函数，包括不同角度度量单位之间的转换。

**Example**  
```js
const { areAllShapesTheSameType, degToRad, radiusToSegments, radToDeg } = require('@jscad/modeling').utils
```

* [modeling/utils]
    * [.areAllShapesTheSameType(shapes)]
    * [.degToRad(degrees)]
    * [.flatten(arr)]
    * [.fnNumberSort()]
    * [.insertSorted()]
    * [.padArrayToLength(anArray, padding, targetLength)]
    * [.radiusToSegments(radius, minimumLength, minimumAngle)]
    * [.radToDeg(radians)]


### modeling/utils.areAllShapesTheSameType(shapes)

**Kind**: static method of [`modeling/utils`]  
**Returns**: `Boolean` - true if the given shapes are of the same type  

| Param | Type | Description |
| --- | --- | --- |
| shapes | `Array` | list of shapes to compare |


### modeling/utils.degToRad(degrees)

Convert the given angle (degrees) to radians.

**Kind**: static method of [`modeling/utils`]  
**Returns**: `Number` - angle in radians  

| Param | Type | Description |
| --- | --- | --- |
| degrees | `Number` | angle in degrees |


### modeling/utils.flatten(arr)

将传入的参数列表扁平化为一个单层数组。这些参数可由多层嵌套的对象和数组构成。

**Kind**: static method of [`modeling/utils`]  
**Returns**: `Array` - a flat list of arguments  

| Param | Type | Description |
| --- | --- | --- |
| arr | `Array` | list of arguments |


### modeling/utils.fnNumberSort()

**Kind**: static method of [`modeling/utils`]  

### modeling/utils.insertSorted()

Insert the given element into the given array using the compareFunction.

**Kind**: static method of [`modeling/utils`]  

### modeling/utils.padArrayToLength(anArray, padding, targetLength)

Build an array of at minimum a specified length from an existing array and a padding value. IF the array is already larger than the target length, it will not be shortened.

**Kind**: static method of [`modeling/utils`]  
**Returns**: `Array` - an array of at least 'targetLength' length  

| Param | Type | Description |
| --- | --- | --- |
| anArray | `Array` | the source array to copy into the result. |
| padding | `*` | the value to add to the new array to reach the desired length. |
| targetLength | `Number` | The desired length of the return array. |


### modeling/utils.radiusToSegments(radius, minimumLength, minimumAngle)

Calculate the number of segments from the given radius based on minimum length or angle.

**Kind**: static method of [`modeling/utils`]  
**Returns**: `Number` - number of segments to complete the radius  

| Param | Type | Description |
| --- | --- | --- |
| radius | `Number` | radius of the requested shape |
| minimumLength | `Number` | minimum length of segments; length > 0 |
| minimumAngle | `Number` | minimum angle (radians) between segments; 0 > angle < TAU |


### modeling/utils.radToDeg(radians)

Convert the given angle (radians) to degrees.

**Kind**: static method of [`modeling/utils`]  
**Returns**: `Number` - angle in degrees  

| Param | Type | Description |
| --- | --- | --- |
| radians | `Number` | angle in radians |

<!-- LINKS -->

[modeling/utils]:#modelingutils
[`modeling/utils`]:#modelingutils
[.areAllShapesTheSameType(shapes)]:#modelingutilsareallshapesthesametypeshapes
[.degToRad(degrees)]:#modelingutilsdegtoraddegrees
[.flatten(arr)]:#modelingutilsflattenarr
[.fnNumberSort()]:#modelingutilsfnnumbersort
[.insertSorted()]:#modelingutilsinsertsorted
[.padArrayToLength(anArray, padding, targetLength)]:#modelingutilspadarraytolengthanarray-padding-targetlength
[.radiusToSegments(radius, minimumLength, minimumAngle)]:#modelingutilsradiustosegmentsradius-minimumlength-minimumangle
[.radToDeg(radians)]:#modelingutilsradtodegradians
