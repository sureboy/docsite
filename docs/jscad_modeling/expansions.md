
## modeling/expansions

所有形状（基本几何体或运算结果）都可以进行扩展（或收缩）。在所有情况下，函数均返回运算结果，不会修改原始形状。

**Example**  
```js
const { expand, offset } = require('@jscad/modeling').expansions
```

* [modeling/expansions]
    * [.expand(options, ...objects)]
    * [.offset(options, ...objects)]


### modeling/expansions.expand(options, ...objects)

使用指定参数扩展给定的几何图形。
对于二维和三维形状，其内部和外部空间都会被扩展。


注意：收缩就是使用负的增量值进行扩展。

**Kind**: static method of [`modeling/expansions`]  
**Returns**: `Object` ⎮ `Array` - new geometry, or list of new geometries  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for expand |
| \[options.delta\] | `Number` | `1` | delta (+/-) of expansion |
| \[options.corners\] | `String` | `&#x27;edge&#x27;` | type of corner to create after expanding; edge, chamfer, round |
| \[options.segments\] | `Integer` | `16` | number of segments when creating round corners |
| ...objects | `Objects` |  | the geometries to expand |

**Example**  
```js
let newarc = expand({delta: 5, corners: 'edge'}, arc({}))
let newsquare = expand({delta: 5, corners: 'chamfer'}, square({size: 30}))
let newcuboid = expand({delta: 2, corners: 'round'}, cuboid({size: [20, 25, 5]}))
```

### modeling/expansions.offset(options, ...objects)

根据指定选项，从给定几何图形创建偏移几何体。将从内部和外部空间生成偏移量。

**Kind**: static method of [`modeling/expansions`]  
**Returns**: `Object` ⎮ `Array` - new geometry, or list of new geometries  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for offset |
| \[options.delta\] | `Float` | `1` | delta of offset (+ to exterior, - from interior) |
| \[options.corners\] | `String` | `&#x27;edge&#x27;` | type of corner to create after offseting; edge, chamfer, round |
| \[options.segments\] | `Integer` | `16` | number of segments when creating round corners |
| ...objects | `Object` |  | the geometries to offset |

**Example**  
```js
let small = offset({ delta: -4, corners: 'chamfer' }, square({size: 40})) // contract
```
<!-- LINKS -->

[modeling/expansions]:#modelingexpansions
[`modeling/expansions`]:#modelingexpansions
[.expand(options, ...objects)]:#modelingexpansionsexpandoptions-objects
[.offset(options, ...objects)]:#modelingexpansionsoffsetoptions-objects
