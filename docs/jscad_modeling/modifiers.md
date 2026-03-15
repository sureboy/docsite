
## modeling/modifiers

所有形状（基本图元或运算结果）均可被修改以修正问题等。在任何情况下，这些函数均返回结果，且不会修改原始几何体。

**Example**  
```js
const { generalize, snap, retessellate } = require('@jscad/modeling').modifiers
```

* [modeling/modifiers]
    * [.generalize(options, ...geometries)]
    * [.snap(...geometries)]


### modeling/modifiers.generalize(options, ...geometries)

按正确顺序应用各类修改操作，以生成通用几何体。

**Kind**: static method of [`modeling/modifiers`]  
**Returns**: `Object` ⎮ `Array` - the modified geometry, or a list of modified geometries  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for modifications |
| \[options.snap\] | `Boolean` | `false` | the geometries should be snapped to epsilons |
| \[options.simplify\] | `Boolean` | `false` | the geometries should be simplified |
| \[options.triangulate\] | `Boolean` | `false` | the geometries should be triangulated |
| ...geometries | `Object` |  | the geometries to generalize |


### modeling/modifiers.snap(...geometries)

将给定的几何体对齐到其自身精度（计算得出的极小值 epsilon）。

**Kind**: static method of [`modeling/modifiers`]  
**Returns**: `Object` ⎮ `Array` - the snapped geometry, or a list of snapped geometries  
**See**: measurements.measureEpsilon()  

| Param | Type | Description |
| --- | --- | --- |
| ...geometries | `Object` | the geometries to snap |

<!-- LINKS -->

[modeling/modifiers]:#modelingmodifiers
[`modeling/modifiers`]:#modelingmodifiers
[.generalize(options, ...geometries)]:#modelingmodifiersgeneralizeoptions-geometries
[.snap(...geometries)]:#modelingmodifierssnapgeometries
