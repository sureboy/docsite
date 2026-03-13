
## modeling/booleans

所有形状（基本图元或运算结果）均可传入布尔函数以执行逻辑运算，例如从板材上挖去一个孔。在任何情况下，该函数仅返回运算结果，绝不会修改原始形状。


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

返回一个新的几何图形，表示同时处于第一个几何图形与所有后续几何图形中的空间。传入的几何图形应属于同一类型，即 geom2 或 geom3。

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
