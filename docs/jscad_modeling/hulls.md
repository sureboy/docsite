
## modeling/hulls

所有形状（基本图元或运算结果）都可以传入凸包函数，
以计算所有点的凸包。
在任何情况下，该函数只返回结果，不会修改原始形状。

**Example**  
```js
const { hull, hullChain, hullPoints2, hullPoints3 } = require('@jscad/modeling').hulls
```

* [modeling/hulls]
    * [.hull(...geometries)]
    * [.hullChain(...geometries)]
    * [.hullPoints2(uniquePoints)]
    * [.hullPoints3(uniquePoints)]


### modeling/hulls.hull(...geometries)

为给定的几何体创建凸包。给定的几何体必须为同一类型，即 geom2、geom3 或 path2 中的一种。

**Kind**: static method of [`modeling/hulls`]  
**Returns**: `geom2` ⎮ `geom3` - new geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Objects` | list of geometries from which to create a hull |

**Example**  
```js
let myshape = hull(rectangle({center: [-5,-5]}), ellipse({center: [5,5]}))
```
**Example**  
```js
+-------+           +-------+
|       |           |        \
|   A   |           |         \
|       |           |          \
+-------+           +           \
                 =   \           \
      +-------+       \           +
      |       |        \          |
      |   B   |         \         |
      |       |          \        |
      +-------+           +-------+
```

### modeling/hulls.hullChain(...geometries)

从给定几何体创建链式凸包几何体。本质是依次计算 A+B、B+C、C+D 等的凸包，然后将结果合并。传入的几何体必须为同一类型，即 geom2、geom3 或 path2。

**Kind**: static method of [`modeling/hulls`]  
**Returns**: `geom2` ⎮ `geom3` - new geometry  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Objects` | list of geometries from which to create a hull |

**Example**  
```js
let newshape = hullChain(rectangle({center: [-5,-5]}), circle({center: [0,0]}), rectangle({center: [5,5]}))
```
**Example**  
```js
+-------+   +-------+     +-------+   +------+
|       |   |       |     |        \ /       |
|   A   |   |   C   |     |         |        |
|       |   |       |     |                  |
+-------+   +-------+     +                  +
                      =   \                 /
      +-------+            \               /
      |       |             \             /
      |   B   |              \           /
      |       |               \         /
      +-------+                +-------+
```

### modeling/hulls.hullPoints2(uniquePoints)

Create a convex hull of the given set of points, where each point is an array of [x,y].

**Kind**: static method of [`modeling/hulls`][1]  
**Returns**: `Array` - a list of points that form the hull  
**See**: https://en.wikipedia.org/wiki/Graham_scan  

| Param | Type | Description |
| --- | --- | --- |
| uniquePoints | `Array` | list of UNIQUE points from which to create a hull |


### modeling/hulls.hullPoints3(uniquePoints)

Create a convex hull of the given set of points, where each point is an array of [x,y,z].

**Kind**: static method of [`modeling/hulls`][1]  
**Returns**: `Array` - a list of polygons (poly3)  

| Param | Type | Description |
| --- | --- | --- |
| uniquePoints | `Array` | list of UNIQUE points from which to create a hull |

<!-- LINKS -->

[modeling/hulls]:#modelinghulls
[`modeling/hulls`]:#modelinghulls
[1]:#modelinghulls
[.hull(...geometries)]:#modelinghullshullgeometries
[.hullChain(...geometries)]:#modelinghullshullchaingeometries
[.hullPoints2(uniquePoints)]:#modelinghullshullpoints2uniquepoints
[.hullPoints3(uniquePoints)]:#modelinghullshullpoints3uniquepoints
