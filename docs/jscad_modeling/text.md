## Modules
Module | Description
------ | -----------
[modeling/text] | 文本为每个字符或字符串提供线段集合。这些线段可用于为二维和三维几何图形创建轮廓。注意：仅支持 ASCII 字符。

## Typedefs

Name | Description
------ | -----------
[VectorCharObject] | Represents a character as a list of segments


## modeling/text

文本为每个字符或字符串提供线段集合。这些线段可用于为二维和三维几何图形创建轮廓。注意：仅支持 ASCII 字符。

**Example**  
```js
const { vectorChar, vectorText } = require('@jscad/modeling').text
```

* [modeling/text]
    * [.vectorChar(\[options\], \[char\])]
    * [.vectorText(\[options\], \[text\])]


### modeling/text.vectorChar(\[options\], \[char\])

从ASCII 字符（编码范围 31 至 127） 构造一个 [VectorCharObject]（矢量字符对象）；若该字符不被支持，则会替换为问号。

**Kind**: static method of [`modeling/text`]  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` \| `String` |  | options for construction or ascii character |
| \[options.xOffset\] | `Float` | `0` | x offset |
| \[options.yOffset\] | `Float` | `0` | y offset |
| \[options.height\] | `Float` | `21` | font size (uppercase height) |
| \[options.extrudeOffset\] | `Float` | `0` | width of the extrusion that will be applied (manually) after the creation of the character |
| \[options.input\] | `String` | `&#x27;?&#x27;` | ascii character (ignored/overwrited if provided as seconds parameter) |
| \[char\] | `String` | `&#x27;?&#x27;` | ascii character |

**Example**  
```js
let vectorCharObject = vectorChar()
let vectorCharObject = vectorChar('A')
let vectorCharObject = vectorChar({ xOffset: 57 }, 'C')
let vectorCharObject = vectorChar({ xOffset: 78, input: '!' })
```

### modeling/text.vectorText(\[options\], \[text\])

Construct an array of character segments from a ascii string whose characters code is between 31 and 127,
if one character is not supported it is replaced by a question mark.

**Kind**: static method of [`modeling/text`]  
**Returns**: `Array` - characters segments [[[x, y], ...], ...]  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[options\] | `Object` \| `String` |  | options for construction or ascii string |
| \[options.xOffset\] | `Float` | `0` | x offset |
| \[options.yOffset\] | `Float` | `0` | y offset |
| \[options.height\] | `Float` | `21` | font size (uppercase height) |
| \[options.lineSpacing\] | `Float` | `1.4` | line spacing expressed as a percentage of font size |
| \[options.letterSpacing\] | `Float` | `1` | extra letter spacing expressed as a percentage of font size |
| \[options.align\] | `String` | `&#x27;left&#x27;` | multi-line text alignment: left, center, right |
| \[options.extrudeOffset\] | `Float` | `0` | width of the extrusion that will be applied (manually) after the creation of the character |
| \[options.input\] | `String` | `&#x27;?&#x27;` | ascii string (ignored/overwrited if provided as seconds parameter) |
| \[text\] | `String` | `&#x27;?&#x27;` | ascii string |

**Example**  
```js
let textSegments = vectorText()
let textSegments = vectorText('OpenJSCAD')
let textSegments = vectorText({ yOffset: -50 }, 'OpenJSCAD')
let textSegments = vectorText({ yOffset: -80, input: 'OpenJSCAD' })
```

## VectorCharObject

Represents a character as a list of segments

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | `Float` | character width |
| height | `Float` | character height (uppercase) |
| segments | `Array` | character segments [[[x, y], ...], ...] |

<!-- LINKS -->

[modeling/text]:#modelingtext
[VectorCharObject]:#VectorCharObject
[`modeling/text`]:#modelingtext
[.vectorChar(\[options\], \[char\])]:#modelingtextvectorcharoptions-char
[.vectorText(\[options\], \[text\])]:#modelingtextvectortextoptions-text
