
## modeling/expansions

All shapes (primitives or the results of operations) can be expanded (or contracted.)
In all cases, the function returns the results, and never changes the original shapes.

**Example**  
```js
const { expand, offset } = require('@jscad/modeling').expansions
```

* [modeling/expansions]
    * [.expand(options, ...objects)]
    * [.offset(options, ...objects)]


### modeling/expansions.expand(options, ...objects)

Expand the given geometry using the given options.
Both internal and external space is expanded for 2D and 3D shapes.

Note: Contract is expand using a negative delta.

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

Create offset geometry from the given geometry using the given options.
Offsets from internal and external space are created.

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
