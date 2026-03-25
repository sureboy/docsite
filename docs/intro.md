---
slug: /
sidebar_position: 1
title: SolidJSCAD 简介
description: SolidJSCAD 是一个基于 JSCAD 和 Three.js 的在线 3D 建模编辑器，支持 PWA 离线使用，并提供 VSCode 插件。
---

# solidJSCAD 文档

## 1. 项目概述

solidJSCAD 是一个面向现代 Web 开发者的参数化 3D 建模平台与工具链。它结合了行业领先的几何内核与现代化的前端技术，提供了从浏览器端在线编辑到本地 IDE 插件开发的完整工作流。

- **核心目标**：提供一个高性能、模块化、可离线使用的 3D 建模环境，让开发者能够使用 JavaScript 进行精确的实体建模。
- **技术基石**：
  - **几何内核**：集成 [JSCAD](https://jscad.xyz/) 的 2D/3D 基础操作与 [Manifold](https://github.com/elalish/manifold) 的顶级布尔运算性能。
  - **渲染**：使用 [Three.js](https://threejs.org/) 实现高性能 WebGL 可视化。
  - **编辑器**：基于 [CodeMirror](https://codemirror.net/) 构建的智能在线 IDE。
  - **前端框架**：[SvelteKit](https://kit.svelte.dev/) 构建，提供高效、响应式的用户界面。
  - **架构**：纯 ESM (ECMAScript Modules) 架构，支持按需加载与 Tree Shaking。

---

## 2. 核心特性

- **高性能几何布尔运算**：底层集成 Manifold 库，在处理复杂网格（数十万级面片）的并集、差集、交集时，相比传统 CSG 算法速度提升 10-50 倍，且能保证流形（Manifold）输出，无破面、非流行边问题。
- **模块化编程建模**：全面支持 ES Modules。用户可以通过 `import` 语法复用 npm 生态中的工具库，实现复杂模型的参数化构建。
- **双模编辑环境**：
  - **在线版**：基于 CodeMirror 的 Monaco-like 编辑器，支持语法高亮、自动补全。支持 PWA (Progressive Web App) 技术，安装后可在离线状态下使用。
  - **本地版**：提供同名 VSCode 插件，支持 `.jscad` 或 `.js` 文件的本地开发、实时预览与热更新。
- **多格式导出与导入**：
  - **导出**：支持 STL（二进制/文本）、3MF、源码合并 GZ 压缩包、预览截图。
  - **导入**：支持上传源码合并 GZ 压缩包，自动恢复项目代码与依赖，并生成临时查看链接与二维码，便于分享与协作。
- **云端协作**：已实现一个月临时存储服务，用户可在线上传、分享模型，并支持多人协作编辑。
- **跨语言扩展性**：目前已完整支持 JavaScript，架构设计上预留了 Python 及其他脚本语言的桥接层，未来可通过 WebAssembly 或 Pyodide 实现多语言建模。

---

## 3. 技术架构

```
┌─────────────────────────────────────────────────────────────┐
│                     用户层 (User Layer)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  Web 编辑器   │  │ VSCode 插件 │  │  (CLI 规划中)│       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
├─────────────────────────────────────────────────────────────┤
│                    核心引擎 (Core Engine)                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  执行器 (Evaluator)  │  模块加载器 (Module Loader)   │   │
│  └──────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                   几何抽象层 (Geometry API)                  │
│  ┌─────────────────────────┐  ┌─────────────────────────┐   │
│  │   JSCAD Adapter         │  │   Manifold Adapter      │   │
│  │   (基础形状/2D操作)     │  │   (高性能布尔运算)      │   │
│  └─────────────────────────┘  └─────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                    可视化与交互 (Visualization)               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │   Three.js Renderer  │  OrbitControls  │  GridHelper │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

前端界面基于 **SvelteKit** 构建，确保了良好的开发体验与运行时性能。在线编辑器与预览区通过响应式设计适配各种屏幕尺寸。

---

## 4. 使用指南

### 4.1 在线编辑器

1. 访问 [solidJSCAD 官网]。
   
2. **代码编写**：
   - 核心建模函数必须导出名为 `main` 的函数，该函数返回一个几何体对象或几何体数组。
   - 示例代码（JSCAD 基础版）：
     ```javascript
     import { primitives } from '@jscad/modeling'

     export const main = () => {
       const cube = primitives.cube({ size: 10 })
       const sphere = primitives.sphere({ radius: 5 })
       return cube  // 或返回 [cube, sphere]
     }
     ```
3. **模型导出**：点击工具栏上的“导出”按钮，可选择以下格式：
   - **STL**
   - **3MF**
   - **源码合并 GZ**（包含所有建模代码与依赖）
   - **截图**（当前预览画面的 PNG 图片）
4. **项目导入/恢复**：
   - 点击工具栏上的“上传”按钮，选择之前导出的 `.gz` 文件（源码合并包）。
   - 系统会将文件上传至临时存储服务，自动解析并恢复代码到编辑器中。
   - 上传成功后，页面会生成一个**查看链接**和对应的**二维码**，方便您分享给他人或在不同设备上快速访问。

### 4.2 VSCode 插件

1. 在 VSCode 扩展商店搜索 `solidJSCAD` 并安装。
2. **项目配置**：
   - 插件会自动识别项目根目录下的 `solidjscad.json` 配置文件。您可以通过该文件指定入口文件、输出路径等参数。
   - 如果没有现有项目，可以使用命令面板中的 `SolidJSCAD: Create` 快速创建一个新项目模板。
   - `solidjscad.json` 配置示例：
     ```json
     {
       "name": "SolidJSCAD",
       "func": "main",
       "in": "index",
       "src": "src"
     }
     ```
     - **`name`**：项目名称，显示在插件界面。
     - **`func`**：指定要执行的导出函数名称（默认为 `main`）。
     - **`in`**：指定入口文件名（相对于 `src` 目录，不含扩展名）。例如 `"in": "test"` 会加载 `src/index.js`。
     - **`src`**：源码目录路径（相对于项目根目录）。留空表示根目录。
3. **环境要求**：
   - 插件可直接运行纯 JavaScript 文件，无需安装 Node.js 或其他额外环境。
4. 打开一个包含 `.js` 文件的项目文件夹（或已配置 `solidjscad.json` 的目录）。
5. 使用快捷键 `Ctrl+Shift+P` 打开命令面板，运行 `SolidJSCAD: Start Preview`。
6. 插件将启动一个本地 HTTP 服务器，并在侧边栏 WebView 中展示 3D 预览窗口。
7. 保存文件时，模型会自动更新。

**注意**：插件目前仅提供本地文件读取、HTTP 服务和 WebView 渲染预览功能，不依赖任何云端服务。所有计算均在本地完成。

---

## 5. API 参考

solidJSCAD 支持两种建模方式：**JSCAD 基础建模**（简单场景）和 **Manifold 高性能建模**（复杂布尔运算）。您可以按需混用。

### 5.1 JSCAD 基础建模

JSCAD 提供了丰富的 2D/3D 基础形状和变换函数。其 API 为同步调用，适合构建简单几何体或作为快速原型开发。

**导入方式**：
```javascript
import modeling from '@jscad/modeling'
// 或按需导入
import { primitives, transforms, booleans } from '@jscad/modeling'
```

**常用形状**：
```javascript
// 立方体
const box = primitives.cube({ size: 10, center: [0, 0, 0] })
// 球体
const ball = primitives.sphere({ radius: 5, segments: 32 })
// 圆柱体
const cylinder = primitives.cylinder({ height: 10, radius: 4, segments: 32 })
```

**变换操作**：
```javascript
import { translate, rotate, scale } from '@jscad/modeling'

const moved = translate([10, 0, 0], box)
const rotated = rotate([0, 45, 0], box)
const scaled = scale([2, 1, 1], box)
```

**布尔运算**：
```javascript
import { union, subtract, intersect } from '@jscad/modeling'

const a = primitives.cube({ size: 10 })
const b = primitives.sphere({ radius: 6 })
const result = union(a, b)   // 并集
// const result = subtract(a, b)  // 差集 a-b
// const result = intersect(a, b) // 交集
```

### 5.2 Manifold 高性能建模

Manifold 提供极致性能的布尔运算和稳定的拓扑结构，尤其适合处理高面数模型和复杂 CSG 操作。其 API 为异步加载，并需手动管理内存（通过 `delete()` 释放）。

**初始化 Manifold**：
```javascript
import manifold from 'manifold-3d'

const Manifold = await manifold()   // 异步加载 WASM 模块
Manifold.setup()                    // 初始化（可选）
```

**创建基本形状**：
```javascript
// 立方体（尺寸，是否居中）
const box = Manifold.Manifold.cube(2, true)
// 球体（半径，分段数）
const sphere = Manifold.Manifold.sphere(1.2, 48)
```

**变换操作**：
Manifold 对象的方法返回新实例，原始对象不变。
```javascript
const moved = sphere.translate([0.8, 0.8, 0.8])
```

**布尔运算**：
```javascript
const result = box.subtract(moved)   // 差集
// const union = box.union(sphere)
// const intersect = box.intersect(sphere)
```

**导出网格数据**：
```javascript
const meshData = result.getMesh()
const vertices = meshData.vertProperties   // 顶点数组
const indices = meshData.triVerts          // 三角形索引
```

**内存管理**：
Manifold 对象需要显式释放，避免内存泄漏。
```javascript
box.delete()
sphere.delete()
moved.delete()
result.delete()
```

**完整示例**：
```javascript
import modeling from '@jscad/modeling'
import manifold from 'manifold-3d'

// 使用 Manifold 进行复杂布尔运算
export const manifold_main = async (opt) => {
  const Manifold = await manifold()
  Manifold.setup()
  
  const option = Object.assign({ size: 2 }, opt)
  const box = Manifold.Manifold.cube(option.size, true)
  const sphere = Manifold.Manifold.sphere(1.2, 48)
  const sphereTranslated = sphere.translate([0.8, 0.8, 0.8])
  
  const result = box.subtract(sphereTranslated)
  const meshData = result.getMesh()
  const vertices = meshData.vertProperties
  const indices = meshData.triVerts
  
  // 释放内存
  box.delete()
  sphere.delete()
  sphereTranslated.delete()
  result.delete()
  
  return [{ vertices, indices }, option]
}

// 使用 JSCAD 快速建模
export const main = (opt) => {
  const option = Object.assign({ size: 10 }, opt)
  return [modeling.primitives.cube(option), option]
}
```

**注意事项**：
- `main` 函数是编辑器的默认入口，返回的几何体将自动渲染。若需要返回 Manifold 生成的网格，需自行转换为渲染器接受的格式（如上例中的 `{ vertices, indices }`）。
- 实际使用时，您可以将 Manifold 生成的 `vertices` 和 `indices` 传递给 Three.js 等渲染器。solidJSCAD 在线编辑器会自动识别并渲染该结构。

---

## 6. 未来计划

项目当前专注于提升编辑与预览体验，后续规划将围绕以下方向展开：

- **Python 支持**：通过集成 Pyodide，允许用户在浏览器中编写 Python 代码进行建模。
- **更多语言**：探索 Lua 或 Ruby 等轻量级脚本语言的绑定。
- **高级渲染**：集成 Three.js 的物理光照、阴影及后期效果。
- **参数化 UI 自动生成**：根据代码中的注释或类型定义，自动生成滑条、颜色选择器等控制面板。
- **插件生态**：VSCode 插件将增加更多辅助功能（如代码片段、模型属性查看器）。

**关于 npm 包、CLI 工具与 API 整合**：这些功能目前不在近期优先列表中，项目将保持轻量化，聚焦于提供最佳的编辑器内建模体验。

---

## 7. 常见问题 (FAQ)

**Q: 什么时候应该使用 Manifold 而不是 JSCAD 的布尔运算？**
A: 当模型面数超过 10,000 或进行连续的布尔运算时，Manifold 能提供显著更快的速度和更可靠的拓扑结果。对于简单模型（如几个立方体堆叠），JSCAD 足够使用。

**Q: VSCode 插件支持 TypeScript 吗？**
A: 目前 VSCode 插件仅支持纯 JavaScript（`.js`）文件。如果您希望使用 TypeScript，需要自行编译为 JavaScript 后再使用。

**Q: 如果我只用纯 JavaScript，VSCode 插件还需要 Node.js 吗？**
A: 不需要。插件可以直接运行 `.js` 文件，无需任何额外运行时。

**Q: 如何配置 VSCode 插件？**
A: 在项目根目录创建 `solidjscad.json` 文件，可以配置入口文件、输出目录、预览设置等。也可以使用 `SolidJSCAD: Create` 命令生成默认配置。

**Q: `solidjscad.json` 中的 `src`、`in`、`func` 字段具体作用是什么？**
A: 
- `src`：源码目录路径（相对于项目根目录）。例如 `"src": "src"` 表示源代码位于 `src/` 文件夹下；留空则表示根目录。
- `in`：入口文件名（不含扩展名）。例如 `"in": "test"` 会加载 `src/test.js`。
- `func`：指定要执行的导出函数名称。默认为 `main`，可自定义为其他函数（如 `manifold_main`）。

**Q: 导出的 STL 文件太大怎么办？**
A: 您可以在创建基础形状时调整 `segments` (球体/圆柱体) 参数，或在导出前使用 `simplify` (计划中) 方法减少网格面数。

**Q: 在线编辑器支持哪些导出格式？**
A: 目前支持 STL（二进制/文本）、3MF、源码合并 GZ 压缩包以及预览截图。您可以在编辑器工具栏中找到导出选项。

**Q: 如何分享或恢复之前保存的项目？**
A: 您可以通过导出功能生成源码合并 GZ 文件并保存。需要恢复时，点击上传按钮选择该文件，系统会生成临时查看链接和二维码，方便分享或跨设备访问。项目会在服务器上保留一个月。

**Q: 云端协作存储的数据能保留多久？**
A: 目前提供一个月临时存储服务。您可以在有效期内随时下载模型或分享链接。

**Q: Manifold 对象为什么需要手动 delete？**
A: Manifold 的底层是 WebAssembly，内存管理需要显式释放，避免内存泄漏。请在使用完毕后调用 `delete()` 方法。

**有其他问题或建议？欢迎通过邮箱联系我们：**  
📧 dimon@solidjscad.com

---

此文档根据最新项目状态整理，将随着版本迭代持续更新。

![微信赞助](https://solidjscad.com/wxq.jpeg)

微信扫码，赞助留言！