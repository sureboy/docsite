---
slug: /
sidebar_position: 1
title: SolidJSCAD 简介
description: SolidJSCAD 是一个基于 JSCAD 和 Three.js 的在线 3D 建模编辑器，支持 PWA 离线使用，并提供 VSCode 插件。
---

# solidJSCAD 简介

## 1. 项目概述

solidJSCAD 是一个面向现代 Web 开发者的参数化 3D 建模平台与工具链。它结合了行业领先的几何内核与现代化的前端技术，提供了从浏览器端在线编辑到本地 IDE 插件开发的完整工作流。

-   **核心目标**：提供一个高性能、模块化、可离线使用的 3D 建模环境，让开发者能够使用 JavaScript/TypeScript 进行精确的实体建模。
-   **技术基石**：
    -   **几何内核**：集成 [JSCAD](https://jscad.xyz/) 的 2D/3D 基础操作与 [Manifold](https://github.com/elalish/manifold) 的顶级布尔运算性能。
    -   **渲染**：使用 [Three.js](https://threejs.org/) 实现高性能 WebGL 可视化。
    -   **编辑器**：基于 [CodeMirror](https://codemirror.net/) 构建的智能在线 IDE。
    -   **架构**：纯 ESM (ECMAScript Modules) 架构，支持按需加载与 Tree Shaking。

---

## 2. 核心特性

-   **高性能几何布尔运算**：底层集成 Manifold 库，在处理复杂网格（数十万级面片）的并集、差集、交集时，相比传统 CSG 算法速度提升 10-50 倍，且能保证流形（Manifold）输出，无破面、非流行边问题。
-   **模块化编程建模**：全面支持 ES Modules。用户可以通过 `import` 语法复用 npm 生态中的工具库，实现复杂模型的参数化构建。
-   **双模编辑环境**：
    -   **在线版**：基于 CodeMirror 的 Monaco-like 编辑器，支持语法高亮、自动补全。支持 PWA (Progressive Web App) 技术，安装后可在离线状态下使用。
    -   **本地版**：提供同名 VSCode 插件，支持 `.js/.ts` 文件的本地开发、实时预览与热更新。
-   **多格式导出**：支持导出 STL 格式，并即将支持 3MF 等主流 3D 打印格式，满足不同场景的输出需求。
-   **云端协作**：已实现一个月临时存储服务，用户可在线上传、分享模型，并支持多人协作编辑。
-   **跨语言扩展性**：目前已完整支持 JS/TS，架构设计上预留了 Python 及其他脚本语言的桥接层，未来可通过 WebAssembly 或 Pyodide 实现多语言建模。

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

---

## 4. 使用指南

### 4.1 在线编辑器

1.  访问 [solidJSCAD 官网](https://solidjscad.com)。
2.  界面分为三个区域：
    -   **编辑器区**：编写建模代码。
    -   **预览区**：实时渲染模型。
    -   **控制台**：显示输出日志与错误信息。
3.  **代码编写**：
    -   示例代码：
```javascript
import modeling from '@jscad/modeling';
import  manifold from 'manifold-3d';
const Manifold = await  manifold()
Manifold.setup()
export const manifold_main= (opt)=>{   
  const option = Object.assign({size:2},opt);   
  const box = Manifold.Manifold.cube(option.size,true);    
  const sphere = Manifold.Manifold.sphere(1.2, 48);     
  const sphereTranslated = sphere.translate([0.8, 0.8, 0.8]); 
  const result = box.subtract(sphereTranslated);
  const meshData = result.getMesh();
  const vertices= meshData.vertProperties;
  const indices = meshData.triVerts;   
  box.delete();
  sphere.delete();
  sphereTranslated.delete();
  result.delete();
  return [{vertices,indices},option]
}
export const main=(opt)=>{
  const option = Object.assign({size:10},opt)
  return [modeling.primitives.cube(option),option]
}
```

### 4.2 VSCode 插件

1.  在 VSCode 扩展商店搜索 `solidJSCAD` 并安装。
2.  **项目配置**：
    -   插件会自动识别项目根目录下的 `solidjscad.json` 配置文件。您可以通过该文件指定入口文件、输出路径等参数。
    -   如果没有现有项目，可以使用命令面板中的 `SolidJSCAD: Create` 快速创建一个新项目模板。
3.  **环境要求**：
    -   如果使用 **纯 JavaScript**，无需安装任何额外环境，插件可直接运行。
    -   如果使用 **TypeScript**，需要本地安装 [Node.js](https://nodejs.org/) 环境。插件会自动调用 `esbuild` 将 TS 代码编译为 JS 后执行。
4.  打开一个包含 `.js` 或 `.ts` 文件的项目文件夹（或已配置 `solidjscad.json` 的目录）。
5.  使用快捷键 `Ctrl+Shift+P` 打开命令面板，运行 `SolidJSCAD: Start Preview`。
6.  插件将启动一个本地 HTTP 服务器，并在侧边栏 WebView 中展示 3D 预览窗口。
7.  保存文件时，模型会自动更新。

**注意**：插件目前仅提供本地文件读取、HTTP 服务和 WebView 渲染预览功能，不依赖任何云端服务。所有计算均在本地完成。

---

## 5. 未来计划

项目当前专注于提升编辑与预览体验，后续规划将围绕以下方向展开：

-   **更多语言**：探索 openscad 或 Python 等脚本语言的绑定。
-   **高级渲染**：集成 Three.js 的物理光照、阴影及后期效果。
-   **参数化 UI 自动生成**：根据代码中的注释或类型定义，自动生成滑条、颜色选择器等控制面板。
-   **导出格式扩展**：即将支持 3MF 格式下载，未来还将考虑 AMF、STEP 等工程格式。
-   **插件生态**：VSCode 插件将增加更多辅助功能。

**关于 npm 包、CLI 工具与 API 整合**：这些功能目前不在近期优先列表中，项目将保持轻量化，聚焦于提供最佳的编辑器内建模体验。

---

## 6. 常见问题 (FAQ)

**Q: 什么时候应该使用 Manifold 而不是 JSCAD 的布尔运算？**
A: 当模型面数超过 10,000 或进行连续的布尔运算时，Manifold 能提供显著更快的速度和更可靠的拓扑结果。对于简单模型（如几个立方体堆叠），JSCAD 足够使用。

**Q: VSCode 插件支持 TypeScript 吗？需要额外安装什么？**
A: 支持。但需要本地安装 Node.js 环境。插件会自动检测并使用 `esbuild` 将 TS 编译为 JS，无需手动配置。

**Q: 如果我只用纯 JavaScript，VSCode 插件还需要 Node.js 吗？**
A: 不需要。插件可以直接运行 `.js` 文件，无需任何额外运行时。

**Q: 如何配置 VSCode 插件？**
A: 在项目根目录创建 `solidjscad.json` 文件，可以配置入口文件、输出目录、预览设置等。也可以使用 `SolidJSCAD: Create` 命令生成默认配置。

**Q: 导出的 STL 文件太大怎么办？**
A: 您可以在创建基础形状时调整 `segments` (球体/圆柱体) 参数，或在导出前使用 `simplify` (计划中) 方法减少网格面数。

**Q: 能否导出 3MF 格式？**
A: 3MF 格式支持即将推出，敬请期待。

**Q: 能否在 Node.js 环境中使用 solidJSCAD？**
A: 目前尚未发布 npm 包，项目暂不提供独立的命令行工具。所有功能均集成在在线编辑器与 VSCode 插件中，专注编辑预览场景。

**Q: 云端协作存储的数据能保留多久？**
A: 目前提供一个月临时存储服务。您可以在有效期内随时下载模型或分享链接。

**有其他问题或建议？欢迎通过邮箱联系我们：**  
📧 dimon@solidjscad.com

---

此文档根据最新项目状态整理，将随着版本迭代持续更新。

![微信赞助](https://solidjscad.com/wxq.jpeg)

微信扫码，有快乐，有动力！