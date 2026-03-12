
## modeling/modifiers

All shapes (primitives or the results of operations) can be modified to correct issues, etc.
In all cases, these functions returns the results, and never changes the original geometry.

**Example**  
```js
const { generalize, snap, retessellate } = require('@jscad/modeling').modifiers
```

* [modeling/modifiers]
    * [.generalize(options, ...geometries)]
    * [.snap(...geometries)]


### modeling/modifiers.generalize(options, ...geometries)

Apply various modifications in proper order to produce a generalized geometry.

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

Snap the given geometries to the precision (calculated epsilon) of the geometry.

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
