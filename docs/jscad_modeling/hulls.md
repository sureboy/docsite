
## modeling/hulls

All shapes (primitives or the results of operations) can be passed to hull functions
to determine the convex hull of all points.
In all cases, the function returns the results, and never changes the original shapes.

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

Create a convex hull of the given geometries.
The given geometries should be of the same type, either geom2 or geom3 or path2.

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

Create a chain of hulled geometries from the given geometries.
Essentially hull A+B, B+C, C+D, etc., then union the results.
The given geometries should be of the same type, either geom2 or geom3 or path2.

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
