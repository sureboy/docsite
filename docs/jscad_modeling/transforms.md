
## modeling/transforms

All shapes (primitives or the results of operations) can be transformed, such as scaled or rotated.
In all cases, the function returns the results, and never changes the original shapes.

**Example**  
```js
const { center, rotateX, translate } = require('@jscad/modeling').transforms
```

* [modeling/transforms]
    * [.align(options, ...geometries)]
    * [.center(options, ...objects)]
    * [.centerX(...objects)]
    * [.centerY(...objects)]
    * [.centerZ(...objects)]
    * [.mirror(options, ...objects)]
    * [.mirrorX(...objects)]
    * [.mirrorY(...objects)]
    * [.mirrorZ(...objects)]
    * [.rotate(angles, ...objects)]
    * [.rotateX(angle, ...objects)]
    * [.rotateY(angle, ...objects)]
    * [.rotateZ(angle, ...objects)]
    * [.scale(factors, ...objects)]
    * [.scaleX(factor, ...objects)]
    * [.scaleY(factor, ...objects)]
    * [.scaleZ(factor, ...objects)]
    * [.transform(matrix, ...objects)]
    * [.translate(offset, ...objects)]
    * [.translateX(offset, ...objects)]
    * [.translateY(offset, ...objects)]
    * [.translateZ(offset, ...objects)]


### modeling/transforms.align(options, ...geometries)

Align the boundaries of the given geometries using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the aligned geometry, or a list of aligned geometries  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for aligning |
| \[options.modes\] | `Array` | `[&#x27;center&#x27;, &#x27;center&#x27;, &#x27;min&#x27;]` | the point on the geometries to align to for each axis. Valid options are "center", "max", "min", and "none". |
| \[options.relativeTo\] | `Array` | `[0,0,0]` | The point one each axis on which to align the geometries upon.  If the value is null, then the corresponding value from the group's bounding box is used. |
| \[options.grouped\] | `Boolean` | `false` | if true, transform all geometries by the same amount, maintaining the relative positions to each other. |
| ...geometries | `Object` |  | the geometries to align |

**Example**  
```js
let alignedGeometries = align({modes: ['min', 'center', 'none'], relativeTo: [10, null, 10], grouped: true }, geometries)
```

### modeling/transforms.center(options, ...objects)

Center the given objects using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the centered object, or a list of centered objects  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for centering |
| \[options.axes\] | `Array` | `[true,true,true]` | axis of which to center, true or false |
| \[options.relativeTo\] | `Array` | `[0,0,0]` | relative point of which to center the objects |
| ...objects | `Object` |  | the objects to center |

**Example**  
```js
let myshape = center({axes: [true,false,false]}, sphere()) // center about the X axis
```

### modeling/transforms.centerX(...objects)

Center the given objects about the X axis.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the centered object, or a list of centered objects  

| Param | Type | Description |
| --- | --- | --- |
| ...objects | `Object` | the objects to center |


### modeling/transforms.centerY(...objects)

Center the given objects about the Y axis.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the centered object, or a list of centered objects  

| Param | Type | Description |
| --- | --- | --- |
| ...objects | `Object` | the objects to center |


### modeling/transforms.centerZ(...objects)

Center the given objects about the Z axis.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the centered object, or a list of centered objects  

| Param | Type | Description |
| --- | --- | --- |
| ...objects | `Object` | the objects to center |


### modeling/transforms.mirror(options, ...objects)

Mirror the given objects using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the mirrored object, or a list of mirrored objects  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  | options for mirror |
| \[options.origin\] | `Array` | `[0,0,0]` | the origin of the plane |
| \[options.normal\] | `Array` | `[0,0,1]` | the normal vector of the plane |
| ...objects | `Object` |  | the objects to mirror |

**Example**  
```js
let myshape = mirror({normal: [0,0,10]}, cube({center: [0,0,15], radius: [20, 25, 5]}))
```

### modeling/transforms.mirrorX(...objects)

Mirror the given objects about the X axis.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the mirrored object, or a list of mirrored objects  

| Param | Type | Description |
| --- | --- | --- |
| ...objects | `Object` | the objects to mirror |


### modeling/transforms.mirrorY(...objects)

Mirror the given objects about the Y axis.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the mirrored object, or a list of mirrored objects  

| Param | Type | Description |
| --- | --- | --- |
| ...objects | `Object` | the geometries to mirror |


### modeling/transforms.mirrorZ(...objects)

Mirror the given objects about the Z axis.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the mirrored object, or a list of mirrored objects  

| Param | Type | Description |
| --- | --- | --- |
| ...objects | `Object` | the geometries to mirror |


### modeling/transforms.rotate(angles, ...objects)

Rotate the given objects using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the rotated object, or a list of rotated objects  

| Param | Type | Description |
| --- | --- | --- |
| angles | `Array` | angle (RADIANS) of rotations about X, Y, and Z axis |
| ...objects | `Object` | the objects to rotate |

**Example**  
```js
const newsphere = rotate([TAU / 8, 0, 0], sphere())
```

### modeling/transforms.rotateX(angle, ...objects)

Rotate the given objects about the X axis, using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the rotated object, or a list of rotated objects  

| Param | Type | Description |
| --- | --- | --- |
| angle | `Number` | angle (RADIANS) of rotations about X |
| ...objects | `Object` | the objects to rotate |


### modeling/transforms.rotateY(angle, ...objects)

Rotate the given objects about the Y axis, using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the rotated object, or a list of rotated objects  

| Param | Type | Description |
| --- | --- | --- |
| angle | `Number` | angle (RADIANS) of rotations about Y |
| ...objects | `Object` | the objects to rotate |


### modeling/transforms.rotateZ(angle, ...objects)

Rotate the given objects about the Z axis, using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the rotated object, or a list of rotated objects  

| Param | Type | Description |
| --- | --- | --- |
| angle | `Number` | angle (RADIANS) of rotations about Z |
| ...objects | `Object` | the objects to rotate |


### modeling/transforms.scale(factors, ...objects)

Scale the given objects using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the scaled object, or a list of scaled objects  

| Param | Type | Description |
| --- | --- | --- |
| factors | `Array` | X, Y, Z factors by which to scale the objects |
| ...objects | `Object` | the objects to scale |

**Example**  
```js
let myshape = scale([5, 0, 10], sphere())
```

### modeling/transforms.scaleX(factor, ...objects)

Scale the given objects about the X axis using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the scaled object, or a list of scaled objects  

| Param | Type | Description |
| --- | --- | --- |
| factor | `Number` | X factor by which to scale the objects |
| ...objects | `Object` | the objects to scale |


### modeling/transforms.scaleY(factor, ...objects)

Scale the given objects about the Y axis using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the scaled object, or a list of scaled objects  

| Param | Type | Description |
| --- | --- | --- |
| factor | `Number` | Y factor by which to scale the objects |
| ...objects | `Object` | the objects to scale |


### modeling/transforms.scaleZ(factor, ...objects)

Scale the given objects about the Z axis using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the scaled object, or a list of scaled objects  

| Param | Type | Description |
| --- | --- | --- |
| factor | `Number` | Z factor by which to scale the objects |
| ...objects | `Object` | the objects to scale |


### modeling/transforms.transform(matrix, ...objects)

Transform the given objects using the given matrix.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the transformed object, or a list of transformed objects  

| Param | Type | Description |
| --- | --- | --- |
| matrix | `mat4` | a transformation matrix |
| ...objects | `Object` | the objects to transform |

**Example**  
```js
const newsphere = transform(mat4.rotateX(TAU / 8), sphere())
```

### modeling/transforms.translate(offset, ...objects)

Translate the given objects using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the translated object, or a list of translated objects  

| Param | Type | Description |
| --- | --- | --- |
| offset | `Array` | offset (vector) of which to translate the objects |
| ...objects | `Object` | the objects to translate |

**Example**  
```js
const newsphere = translate([5, 0, 10], sphere())
```

### modeling/transforms.translateX(offset, ...objects)

Translate the given objects along the X axis using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the translated object, or a list of translated objects  

| Param | Type | Description |
| --- | --- | --- |
| offset | `Number` | X offset of which to translate the objects |
| ...objects | `Object` | the objects to translate |


### modeling/transforms.translateY(offset, ...objects)

Translate the given objects along the Y axis using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the translated object, or a list of translated objects  

| Param | Type | Description |
| --- | --- | --- |
| offset | `Number` | Y offset of which to translate the geometries |
| ...objects | `Object` | the objects to translate |


### modeling/transforms.translateZ(offset, ...objects)

Translate the given objects along the Z axis using the given options.

**Kind**: static method of [`modeling/transforms`]  
**Returns**: `Object` ⎮ `Array` - the translated object, or a list of translated objects  

| Param | Type | Description |
| --- | --- | --- |
| offset | `Number` | Z offset of which to translate the geometries |
| ...objects | `Object` | the objects to translate |

<!-- LINKS -->

[modeling/transforms]:#modelingtransforms
[`modeling/transforms`]:#modelingtransforms
[.align(options, ...geometries)]:#modelingtransformsalignoptions-geometries
[.center(options, ...objects)]:#modelingtransformscenteroptions-objects
[.centerX(...objects)]:#modelingtransformscenterxobjects
[.centerY(...objects)]:#modelingtransformscenteryobjects
[.centerZ(...objects)]:#modelingtransformscenterzobjects
[.mirror(options, ...objects)]:#modelingtransformsmirroroptions-objects
[.mirrorX(...objects)]:#modelingtransformsmirrorxobjects
[.mirrorY(...objects)]:#modelingtransformsmirroryobjects
[.mirrorZ(...objects)]:#modelingtransformsmirrorzobjects
[.rotate(angles, ...objects)]:#modelingtransformsrotateangles-objects
[.rotateX(angle, ...objects)]:#modelingtransformsrotatexangle-objects
[.rotateY(angle, ...objects)]:#modelingtransformsrotateyangle-objects
[.rotateZ(angle, ...objects)]:#modelingtransformsrotatezangle-objects
[.scale(factors, ...objects)]:#modelingtransformsscalefactors-objects
[.scaleX(factor, ...objects)]:#modelingtransformsscalexfactor-objects
[.scaleY(factor, ...objects)]:#modelingtransformsscaleyfactor-objects
[.scaleZ(factor, ...objects)]:#modelingtransformsscalezfactor-objects
[.transform(matrix, ...objects)]:#modelingtransformstransformmatrix-objects
[.translate(offset, ...objects)]:#modelingtransformstranslateoffset-objects
[.translateX(offset, ...objects)]:#modelingtransformstranslatexoffset-objects
[.translateY(offset, ...objects)]:#modelingtransformstranslateyoffset-objects
[.translateZ(offset, ...objects)]:#modelingtransformstranslatezoffset-objects
