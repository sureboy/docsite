
## modeling/booleans

All shapes (primitives or the results of operations) can be passed to boolean functions
to perform logical operations, e.g. remove a hole from a board.
In all cases, the function returns the results, and never changes the original shapes.

**Example**  
```js
const { intersect, subtract, union } = require('@jscad/modeling').booleans
```

* [modeling/booleans]
    * [.intersect(...geometries)]
    * [.scission(...objects)]
    * [.subtract(...geometries)]
    * [.union(...geometries)]


### modeling/booleans.intersect(...geometries)

Return a new geometry representing space in both the first geometry and
all subsequent geometries.
The given geometries should be of the same type, either geom2 or geom3.

**Kind**: static method of [`modeling/booleans`]  
**Returns**: `geom2` ⎮ `geom3` - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | list of geometries |

**Example**  
```js
let myshape = intersect(cube({size: 5}), cube({size: 5, center: [3,3,3]}))
```
**Example**  
```js
+-------+
|       |
|   A   |
|    +--+----+   =   +--+
+----+--+    |       +--+
     |   B   |
     |       |
     +-------+
```

### modeling/booleans.scission(...objects)

Scission (divide) the given geometry into the component pieces.

NOTE: Currently only 3D geometries are supported.

**Kind**: static method of [`modeling/booleans`]  
**Returns**: `Array` - list of pieces from each geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...objects | `Object` | list of geometries |

**Example**  
```js
let figure = require('./my.stl')
let pieces = scission(figure)
```
**Example**  
```js
+-------+            +-------+
|       |            |       |
|   +---+            | A +---+
|   |    +---+   =   |   |    +---+
+---+    |   |       +---+    |   |
     +---+   |            +---+   |
     |       |            |    B  |
     +-------+            +-------+
```

### modeling/booleans.subtract(...geometries)

Return a new geometry representing space in the first geometry but
not in all subsequent geometries.
The given geometries should be of the same type, either geom2 or geom3.

**Kind**: static method of [`modeling/booleans`]  
**Returns**: `geom2` ⎮ `geom3` - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | list of geometries |

**Example**  
```js
let myshape = subtract(cuboid({size: 5}), cuboid({size: 5, center: [3,3,3]}))
```
**Example**  
```js
+-------+            +-------+
|       |            |       |
|   A   |            |       |
|    +--+----+   =   |    +--+
+----+--+    |       +----+
     |   B   |
     |       |
     +-------+
```

### modeling/booleans.union(...geometries)

Return a new geometry representing the total space in the given geometries.
The given geometries should be of the same type, either geom2 or geom3.

**Kind**: static method of [`modeling/booleans`]  
**Returns**: `geom2` ⎮ `geom3` - a new geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | list of geometries |

**Example**  
```js
let myshape = union(cube({size: 5}), cube({size: 5, center: [3,3,3]}))
```
**Example**  
```js
+-------+            +-------+
|       |            |       |
|   A   |            |       |
|    +--+----+   =   |       +----+
+----+--+    |       +----+       |
     |   B   |            |       |
     |       |            |       |
     +-------+            +-------+
```
<!-- LINKS -->

[modeling/booleans]:#modelingbooleans
[`modeling/booleans`]:#modelingbooleans
[.intersect(...geometries)]:#modelingbooleansintersectgeometries
[.scission(...objects)]:#modelingbooleansscissionobjects
[.subtract(...geometries)]:#modelingbooleanssubtractgeometries
[.union(...geometries)]:#modelingbooleansuniongeometries
