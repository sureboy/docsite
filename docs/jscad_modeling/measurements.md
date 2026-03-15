
## modeling/measurements

所有形状（基本图元或运算结果）均可进行测量，例如计算体积等。

**Example**  
```js
const { measureArea, measureBoundingBox, measureVolume } = require('@jscad/modeling').measurements
```

* [modeling/measurements]
    * [.measureAggregateArea(...geometries)]
    * [.measureAggregateBoundingBox(...geometries)]
    * [.measureAggregateEpsilon(...geometries)]
    * [.measureAggregateVolume(...geometries)]
    * [.measureArea(...geometries)]
    * [.measureBoundingBox(...geometries)]
    * [.measureBoundingSphere(...geometries)]
    * [.measureCenter(...geometries)]
    * [.measureCenterOfMass(...geometries)]
    * [.measureDimensions(...geometries)]
    * [.measureEpsilon(...geometries)]
    * [.measureVolume(...geometries)]


### modeling/measurements.measureAggregateArea(...geometries)

测量给定几何体的总面积（合计面积）。
注意：此测量不会计算重叠部分的几何体。

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Number` - the total surface area for the group of geometry.  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure. |

**Example**  
```js
let totalArea = measureAggregateArea(sphere(),cube())
```

### modeling/measurements.measureAggregateBoundingBox(...geometries)

Measure the aggregated minimum and maximum bounds for the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Array` - the min and max bounds for the group of geometry, i.e. [[x,y,z],[X,Y,Z]]  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let bounds = measureAggregateBoundingBox(sphere(),cube())
```

### modeling/measurements.measureAggregateEpsilon(...geometries)

Measure the aggregated Epsilon for the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Number` - the aggregated Epsilon for the whole group of geometries  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let groupEpsilon = measureAggregateEpsilon(sphere(),cube())
```

### modeling/measurements.measureAggregateVolume(...geometries)

测量给定几何体的总体积。
注意：此测量不会考虑重叠的几何体。

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Number` - the volume for the group of geometry.  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure. |

**Example**  
```js
let totalVolume = measureAggregateVolume(sphere(),cube())
```

### modeling/measurements.measureArea(...geometries)

Measure the area of the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Number` ⎮ `Array` - the area, or a list of areas for each geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Objects` | the geometries to measure |

**Example**  
```js
let area = measureArea(sphere())
```

### modeling/measurements.measureBoundingBox(...geometries)

Measure the min and max bounds of the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Array` - the min and max bounds, or a list of bounds for each geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let bounds = measureBoundingBox(sphere())
```

### modeling/measurements.measureBoundingSphere(...geometries)

Measure the (approximate) bounding sphere of the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Array` - the bounding sphere for each geometry, i.e. [centroid, radius]  
**See**: https://en.wikipedia.org/wiki/Bounding_sphere  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let bounds = measureBoundingSphere(cube())
```

### modeling/measurements.measureCenter(...geometries)

Measure the center of the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Array` - the center point for each geometry, i.e. [X, Y, Z]  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let center = measureCenter(sphere())
```

### modeling/measurements.measureCenterOfMass(...geometries)

Measure the center of mass for the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Array` - the center of mass for each geometry, i.e. [X, Y, Z]  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let center = measureCenterOfMass(sphere())
```

### modeling/measurements.measureDimensions(...geometries)

Measure the dimensions of the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Array` - the dimensions for each geometry, i.e. [width, depth, height]  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let dimensions = measureDimensions(sphere())
```

### modeling/measurements.measureEpsilon(...geometries)

Measure the epsilon of the given geometries.
Epsilon values are used in various functions to determine minimum distances between points, planes, etc.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Number` ⎮ `Array` - the epsilon, or a list of epsilons for each geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let epsilon = measureEpsilon(sphere())
```

### modeling/measurements.measureVolume(...geometries)

Measure the volume of the given geometries.

**Kind**: static method of [`modeling/measurements`]  
**Returns**: `Number` ⎮ `Array` - the volume, or a list of volumes for each geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to measure |

**Example**  
```js
let volume = measureVolume(sphere())
```
<!-- LINKS -->

[modeling/measurements]:#modelingmeasurements
[`modeling/measurements`]:#modelingmeasurements
[.measureAggregateArea(...geometries)]:#modelingmeasurementsmeasureaggregateareageometries
[.measureAggregateBoundingBox(...geometries)]:#modelingmeasurementsmeasureaggregateboundingboxgeometries
[.measureAggregateEpsilon(...geometries)]:#modelingmeasurementsmeasureaggregateepsilongeometries
[.measureAggregateVolume(...geometries)]:#modelingmeasurementsmeasureaggregatevolumegeometries
[.measureArea(...geometries)]:#modelingmeasurementsmeasureareageometries
[.measureBoundingBox(...geometries)]:#modelingmeasurementsmeasureboundingboxgeometries
[.measureBoundingSphere(...geometries)]:#modelingmeasurementsmeasureboundingspheregeometries
[.measureCenter(...geometries)]:#modelingmeasurementsmeasurecentergeometries
[.measureCenterOfMass(...geometries)]:#modelingmeasurementsmeasurecenterofmassgeometries
[.measureDimensions(...geometries)]:#modelingmeasurementsmeasuredimensionsgeometries
[.measureEpsilon(...geometries)]:#modelingmeasurementsmeasureepsilongeometries
[.measureVolume(...geometries)]:#modelingmeasurementsmeasurevolumegeometries
