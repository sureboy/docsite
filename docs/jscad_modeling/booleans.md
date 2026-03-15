
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

将给定的几何图形拆解（分割）为其组成部分。

注意：目前仅支持三维几何图形。

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


返回一个新的几何图形，它表示属于第一个几何图形、但不属于所有后续几何图形的空间部分。

给定的几何图形应属于同一类型，要么是 geom2（二维几何），要么是 geom3（三维几何）。

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

返回一个新的几何图形，表示所有给定几何图形所占的总空间。

给定的几何图形必须为同一类型，即 geom2（二维几何） 或 geom3（三维几何）。

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
