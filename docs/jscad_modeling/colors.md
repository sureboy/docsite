
## modeling/colors

所有形状（基本几何体或运算结果）都可以被指定颜色（RGBA 格式）。在所有情况下，函数均返回运算结果，且不会修改原始形状。

**Example**  
```js
const { colorize, hexToRgb } = require('@jscad/modeling').colors
```

* [modeling/colors]
    * [.cssColors]
    * [.colorize(color, ...objects)]
    * [.colorNameToRgb(s)]
    * [.hexToRgb(notation)]
    * [.hslToRgb(...values)]
    * [.hsvToRgb(...values)]
    * [.hueToColorComponent(p, q, t)]
    * [.rgbToHex(...values)]
    * [.rgbToHsl(...values)]
    * [.rgbToHsv(...values)]


### modeling/colors.cssColors

**Kind**: static enum of [`modeling/colors`]  
**See**: CSS color table from http://www.w3.org/TR/css3-color/  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| black | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| silver | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| gray | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| white | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| maroon | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| red | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| purple | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| fuchsia | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| green | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lime | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| olive | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| yellow | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| navy | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| blue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| teal | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| aqua | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| aliceblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| antiquewhite | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| aquamarine | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| azure | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| beige | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| bisque | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| blanchedalmond | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| blueviolet | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| brown | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| burlywood | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| cadetblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| chartreuse | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| chocolate | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| coral | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| cornflowerblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| cornsilk | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| crimson | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| cyan | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkcyan | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkgoldenrod | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkgray | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkgreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkgrey | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkkhaki | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkmagenta | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkolivegreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkorange | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkorchid | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkred | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darksalmon | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkseagreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkslateblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkslategray | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkslategrey | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkturquoise | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| darkviolet | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| deeppink | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| deepskyblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| dimgray | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| dimgrey | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| dodgerblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| firebrick | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| floralwhite | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| forestgreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| gainsboro | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| ghostwhite | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| gold | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| goldenrod | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| greenyellow | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| grey | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| honeydew | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| hotpink | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| indianred | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| indigo | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| ivory | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| khaki | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lavender | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lavenderblush | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lawngreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lemonchiffon | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightcoral | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightcyan | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightgoldenrodyellow | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightgray | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightgreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightgrey | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightpink | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightsalmon | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightseagreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightskyblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightslategray | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightslategrey | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightsteelblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| lightyellow | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| limegreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| linen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| magenta | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumaquamarine | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumorchid | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumpurple | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumseagreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumslateblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumspringgreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumturquoise | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mediumvioletred | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| midnightblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mintcream | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| mistyrose | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| moccasin | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| navajowhite | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| oldlace | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| olivedrab | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| orange | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| orangered | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| orchid | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| palegoldenrod | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| palegreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| paleturquoise | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| palevioletred | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| papayawhip | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| peachpuff | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| peru | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| pink | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| plum | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| powderblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| rosybrown | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| royalblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| saddlebrown | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| salmon | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| sandybrown | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| seagreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| seashell | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| sienna | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| skyblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| slateblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| slategray | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| slategrey | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| snow | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| springgreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| steelblue | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| tan | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| thistle | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| tomato | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| turquoise | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| violet | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| wheat | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| whitesmoke | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 
| yellowgreen | `Array` | `[&quot;&quot;,&quot;&quot;,&quot;&quot;]` | 

**Example**  
```js
let newshape = colorize(cssColors.red, oldshape)
```

### modeling/colors.colorize(color, ...objects)

将指定的颜色分配给指定的对象。

**Kind**: static method of [`modeling/colors`]  
**Returns**: `Object` ⎮ `Array` - new object, or list of new objects with an additional attribute 'color'  

| Param | Type | Description |
| --- | --- | --- |
| color | `Array` | RGBA color values, where each value is between 0 and 1.0 |
| ...objects | `Object` \| `Array` | the objects of which to apply the given color |

**Example**  
```js
let redSphere = colorize([1,0,0], sphere()) // red
let greenCircle = colorize([0,1,0,0.8], circle()) // green transparent
let blueArc = colorize([0,0,1], arc()) // blue
let wildcylinder = colorize(colorNameToRgb('fuchsia'), cylinder()) // CSS color
```

### modeling/colors.colorNameToRgb(s)

Converts a CSS color name to RGB color.

**Kind**: static method of [`modeling/colors`]  
**Returns**: `Array` - the RGB color, or undefined if not found  

| Param | Type | Description |
| --- | --- | --- |
| s | `String` | the CSS color name |

**Example**  
```js
let mysphere = colorize(colorNameToRgb('lightblue'), sphere())
```

### modeling/colors.hexToRgb(notation)

将 CSS 颜色表示法（十六进制值字符串）转换为 RGB 数值。

**Kind**: static method of [`modeling/colors`]  
**Returns**: `Array` - RGB color values  
**See**: https://www.w3.org/TR/css-color-3/  

| Param | Type | Description |
| --- | --- | --- |
| notation | `String` | color notation |

**Example**  
```js
let mysphere = colorize(hexToRgb('#000080'), sphere()) // navy blue
```

### modeling/colors.hslToRgb(...values)

Converts HSL color values to RGB color values.

**Kind**: static method of [`modeling/colors`]  
**Returns**: `Array` - RGB or RGBA color values  
**See**: http://en.wikipedia.org/wiki/HSL_color_space  

| Param | Type | Description |
| --- | --- | --- |
| ...values | `Number` \| `Array` | HSL or HSLA color values |

**Example**  
```js
let mysphere = colorize(hslToRgb([0.9166666666666666, 1, 0.5]), sphere())
```

### modeling/colors.hsvToRgb(...values)

将HSV 颜色值转换为 RGB 颜色值。

**Kind**: static method of [`modeling/colors`]  
**Returns**: `Array` - RGB or RGBA color values  
**See**: http://en.wikipedia.org/wiki/HSV_color_space.  

| Param | Type | Description |
| --- | --- | --- |
| ...values | `Number` \| `Array` | HSV or HSVA color values |

**Example**  
```js
let mysphere = colorize(hsvToRgb([0.9166666666666666, 1, 1]), sphere())
```

### modeling/colors.hueToColorComponent(p, q, t)

将色相值转换为一个颜色分量（即 R、G、B 中的一个）。

**Kind**: static method of [`modeling/colors`]  
**Returns**: `Number` - color component  

| Param | Type |
| --- | --- |
| p | `Number` | 
| q | `Number` | 
| t | `Number` | 


### modeling/colors.rgbToHex(...values)

将给定的 RGB 颜色值 转换为 CSS 颜色表示法（字符串形式）。

**Kind**: static method of [`modeling/colors`]  
**Returns**: `String` - CSS color notation  
**See**: https://www.w3.org/TR/css-color-3/  

| Param | Type | Description |
| --- | --- | --- |
| ...values | `Number` \| `Array` | RGB or RGBA color values |


### modeling/colors.rgbToHsl(...values)

Converts an RGB color value to HSL.

**Kind**: static method of [`modeling/colors`]  
**Returns**: `Array` - HSL or HSLA color values  
**See**

- http://en.wikipedia.org/wiki/HSL_color_space.
- http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c


| Param | Type | Description |
| --- | --- | --- |
| ...values | `Number` \| `Array` | RGB or RGBA color values |


### modeling/colors.rgbToHsv(...values)

Converts an RGB color value to HSV.

**Kind**: static method of [`modeling/colors`]  
**Returns**: `Array` - HSV or HSVA color values  
**See**: http://en.wikipedia.org/wiki/HSV_color_space.  

| Param | Type | Description |
| --- | --- | --- |
| ...values | `Number` \| `Array` | RGB or RGBA color values |

<!-- LINKS -->

[modeling/colors]:#modelingcolors
[.cssColors]:#modelingcolorscsscolors
[`modeling/colors`]:#modelingcolors
[.colorize(color, ...objects)]:#modelingcolorscolorizecolor-objects
[.colorNameToRgb(s)]:#modelingcolorscolornametorgbs
[.hexToRgb(notation)]:#modelingcolorshextorgbnotation
[.hslToRgb(...values)]:#modelingcolorshsltorgbvalues
[.hsvToRgb(...values)]:#modelingcolorshsvtorgbvalues
[.hueToColorComponent(p, q, t)]:#modelingcolorshuetocolorcomponentp-q-t
[.rgbToHex(...values)]:#modelingcolorsrgbtohexvalues
[.rgbToHsl(...values)]:#modelingcolorsrgbtohslvalues
[.rgbToHsv(...values)]:#modelingcolorsrgbtohsvvalues
