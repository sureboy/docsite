---
slug: /
sidebar_position: 1
title: SolidJSCAD 简介
description: SolidJSCAD 是一个基于 JSCAD 和 Three.js 的在线 3D 建模编辑器，支持 PWA 离线使用，并提供 VSCode 插件。
---

# SolidJSCAD

SolidJSCAD 是一个面向现代 Web 开发者的参数化 3D 建模平台与工具链。它结合了行业领先的几何内核与现代化的前端技术，提供了从浏览器端在线编辑到本地 IDE 插件开发的完整工作流。

## 项目概述

**核心目标**：提供一个高性能、模块化、可离线使用的 3D 建模环境，让开发者能够使用 JavaScript 进行精确的实体建模。

**技术基石**：
- **几何内核**：集成 [JSCAD](https://jscad.xyz/) 的 2D/3D 基础操作与 [Manifold](https://github.com/elalish/manifold) 的顶级布尔运算性能
- **渲染**：使用 [Three.js](https://threejs.org/) 实现高性能 WebGL 可视化
- **编辑器**：基于 [CodeMirror](https://codemirror.net/) 构建的智能在线 IDE
- **前端框架**：[SvelteKit](https://kit.svelte.dev/) 构建，提供高效、响应式的用户界面
- **架构**：纯 ESM (ECMAScript Modules) 架构，支持按需加载与 Tree Shaking

## 核心特性

- **高性能几何布尔运算**：底层集成 Manifold 库，在处理复杂网格（数十万级面片）的并集、差集、交集时，相比传统 CSG 算法速度提升 10-50 倍，且能保证流形（Manifold）输出，无破面、非流行边问题
- **模块化编程建模**：全面支持 ES Modules。用户可以通过 `import` 语法复用 npm 生态中的工具库，实现复杂模型的参数化构建
- **双模编辑环境**：
  - **在线版**：基于 CodeMirror 的 Monaco-like 编辑器，支持语法高亮、自动补全。支持 PWA 技术，安装后可在离线状态下使用
  - **本地版**：提供同名 VSCode 插件，支持 `.js` 文件的本地开发、实时预览与热更新
- **多格式导出与导入**：
  - **导出**：支持 STL（二进制/文本）、3MF、源码合并 GZ 压缩包、预览截图
  - **导入**：支持上传源码合并 GZ 压缩包，自动恢复项目代码与依赖，并生成临时查看链接与二维码，便于分享与协作
- **云端协作**：已实现一个月临时存储服务，用户可在线上传、分享模型，并支持多人协作编辑
- **跨语言扩展性**：目前已完整支持 JavaScript，通过 `command` 字段可调用 Python 等外部程序生成网格数据，未来可通过 WebAssembly 或 Pyodide 实现更多语言支持

## 技术架构

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

# VSCode 插件使用指南

## 安装

### 方式一：VS Code 商店安装
1. 在 VS Code 扩展商店中搜索 `SolidJSCAD`
2. 点击安装
3. 重启 VS Code（如果需要）

### 方式二：下载 VSIX 文件安装
1. 从 [GitHub Releases](https://github.com/sureboy/solidJSCADExt/releases) 下载最新的 `.vsix` 文件
2. 在 VS Code 中，打开扩展面板（`Ctrl+Shift+X`），点击右上角的 `...`，选择 **从 VSIX 安装**
3. 选择下载的 `.vsix` 文件，完成安装

## 快速开始

### 1. 创建新项目
- 点击右下角状态栏的 **SolidJSCAD** 图标，选择 **Create**
- 或使用命令面板（`Ctrl+Shift+P`）输入 **SolidJSCAD: Create**

插件会自动生成 `solidjscad.json` 配置文件和示例模型文件。

### 2. 配置文件 `solidjscad.json`

```json
{
  "in": "index.js",          // 入口文件，相对于工作目录
  "func": "main",            // 默认显示的模型函数名
  "date": "1771730448907",   // 时间戳，插件自动维护
  "src": "src",              // 源码目录（可选）
  "name": "test",            // 项目名称
  "command": ""              // 外部命令，每次保存前执行
}
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `in` | string | ✅ | 入口文件路径（相对于工作目录） |
| `func` | string | ❌ | 默认显示的函数名，WebView 中可通过下拉菜单切换到其他导出函数 |
| `src` | string | ❌ | 源码目录，插件会将其加入模块解析路径，默认同工作目录 |
| `name` | string | ❌ | 项目名称，用于导出文件命名，默认取入口文件名 |
| `date` | string | ❌ | 时间戳，插件自动维护 |
| `command` | string | ❌ | 每次保存前执行的命令，命令的 stdout 将被解析为二进制网格数据 |

### 3. 编写模型代码

#### 示例：模型文件 `index.js`（包含多个导出函数）

```javascript
import modeling from '@jscad/modeling';
import manifold from 'manifold-3d';

// 异步初始化 manifold-3d（WASM 模块）
const Manifold = await manifold();
Manifold.setup();

// 使用 manifold-3d 内核的模型函数
export const manifold_main = (opt) => {
  const option = Object.assign({ size: 2 }, opt);
  const box = Manifold.Manifold.cube(option.size, true);
  const sphere = Manifold.Manifold.sphere(1.2, 48);
  const sphereTranslated = sphere.translate([0.8, 0.8, 0.8]);
  const result = box.subtract(sphereTranslated);
  const meshData = result.getMesh();
  const vertices = meshData.vertProperties;
  const indices = meshData.triVerts;

  // 清理内存
  box.delete();
  sphere.delete();
  sphereTranslated.delete();
  result.delete();

  return [{ vertices, indices }, option];
};

// 使用 @jscad/modeling 内核的模型函数
export const main = (opt) => {
  const option = Object.assign({ size: 10 }, opt);
  return [modeling.primitives.cube(option), option];
};

// 另一个使用 @jscad/modeling 的模型函数
export const sphere_model = (opt) => {
  const option = Object.assign({ radius: 5 }, opt);
  return [modeling.primitives.sphere(option), option];
};
```

> **说明**：
> - 所有 `export` 的函数都会出现在 WebView 的切换菜单中
> - manifold 函数需要返回 `{ vertices, indices }` 格式的网格数据，JSCAD 函数返回 JSCAD 几何体对象
> - 插件会自动处理这两种返回格式，并渲染为 Three.js 场景

### 4. 自动预览

当你打开包含 `solidjscad.json` 的工作区时，插件会自动：
- 启动本地 HTTP 服务器（默认端口 `3000`）
- 在 VS Code 的 WebView 中打开预览窗口
- 实时监听文件变化，自动更新模型

你也可以通过浏览器访问 `http://localhost:3000`，或局域网内使用 `http://<你的IP>:3000` 访问。

### 5. 状态栏菜单

右下角状态栏显示 **SolidJSCAD** 图标，点击后可执行以下操作：
- **Create**：创建新项目
- **Reload**：重新加载配置并重启服务器
- **Stop**：停止预览服务器

### 6. 切换模型函数

在 WebView 或浏览器的预览界面中，工具栏会显示一个下拉菜单，其中列出了入口文件中所有导出的模型函数。你可以随时切换，预览将实时更新为所选函数的输出。`solidjscad.json` 中的 `func` 字段仅决定首次加载时的默认选择。

### 7. 导出与分享

在 WebView 或浏览器的预览界面中，点击工具栏按钮可执行以下操作：
- **截图**：保存当前视角的 PNG 图片
- **导出 STL/3MF**：下载模型网格文件
- **下载 GZ 包**：将所有依赖和主文件合并为一个 `.js.gz` 文件，方便分享或作为离线备份

## 外部命令集成

`command` 字段允许你调用外部程序（如 Python、C++ 可执行文件）来生成网格数据。每次保存文件时，插件会使用 `child_process.spawn` 执行该命令，并捕获其标准输出。

### 二进制协议

外部程序必须按以下顺序输出：

1. **顶点数量**：4 字节，无符号 32 位整数（`uint32`），小端序
2. **索引数量**：4 字节，无符号 32 位整数（`uint32`），小端序
3. **顶点数据**：每个顶点 3 个 `float32` 值（x, y, z），连续存储
4. **索引数据**：每个索引 1 个 `uint32` 值，连续存储

### Python 示例

```python
import manifold3d as manifold
import trimesh
import numpy as np
import sys
import struct

def main():
    cube = manifold.Manifold.cube([2, 2, 2])
    sphere = manifold.Manifold.sphere(1.2, circular_segments=64)
    sphere = sphere.translate([1, 0.5, 0])
    difference = cube - sphere
    
    mesh_data = difference.to_mesh()
    vertices = np.array(mesh_data.vert_properties).astype(np.float32)
    indices = np.array(mesh_data.tri_verts).flatten().astype(np.uint32)
    
    sys.stdout.buffer.write(struct.pack('<I', len(vertices)))
    sys.stdout.buffer.write(struct.pack('<I', len(indices)))
    sys.stdout.buffer.write(vertices.tobytes())
    sys.stdout.buffer.write(indices.tobytes())
    sys.stdout.buffer.flush()

if __name__ == "__main__":
    main()
```

## 命令

| 命令 ID | 说明 |
|---------|------|
| `solidjscad.create` | 创建新项目（生成配置文件及示例代码） |
| `solidjscad.reload` | 重新加载配置并重启服务器 |
| `solidjscad.stopPreview` | 停止预览服务器 |

> **提示**：预览服务器会在检测到 `solidjscad.json` 时自动启动，无需手动执行 `startPreview` 命令。

---

# API 参考

solidJSCAD 支持两种建模方式：**JSCAD 基础建模**（简单场景）和 **Manifold 高性能建模**（复杂布尔运算）。您可以按需混用。

## JSCAD 基础建模

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

## Manifold 高性能建模

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
```javascript
box.delete()
sphere.delete()
moved.delete()
result.delete()
```

---

# 未来计划

项目当前专注于提升编辑与预览体验，后续规划将围绕以下方向展开：

- **Python 支持**：通过集成 Pyodide，允许用户在浏览器中编写 Python 代码进行建模
- **更多语言**：探索 Lua 或 Ruby 等轻量级脚本语言的绑定
- **高级渲染**：集成 Three.js 的物理光照、阴影及后期效果
- **参数化 UI 自动生成**：根据代码中的注释或类型定义，自动生成滑条、颜色选择器等控制面板
- **插件生态**：VSCode 插件将增加更多辅助功能（如代码片段、模型属性查看器）

---

# 常见问题 (FAQ)

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
- `src`：源码目录路径（相对于项目根目录）
- `in`：入口文件名（不含扩展名）
- `func`：指定要执行的导出函数名称，默认为 `main`

**Q: 导出的 STL 文件太大怎么办？**
A: 您可以在创建基础形状时调整 `segments` (球体/圆柱体) 参数，或在导出前使用简化方法减少网格面数。

**Q: 在线编辑器支持哪些导出格式？**
A: 目前支持 STL（二进制/文本）、3MF、源码合并 GZ 压缩包以及预览截图。

**Q: 如何分享或恢复之前保存的项目？**
A: 您可以通过导出功能生成源码合并 GZ 文件并保存。需要恢复时，点击上传按钮选择该文件，系统会生成临时查看链接和二维码，方便分享或跨设备访问。项目会在服务器上保留一个月。

**Q: 云端协作存储的数据能保留多久？**
A: 目前提供一个月临时存储服务。您可以在有效期内随时下载模型或分享链接。

**Q: Manifold 对象为什么需要手动 delete？**
A: Manifold 的底层是 WebAssembly，内存管理需要显式释放，避免内存泄漏。请在使用完毕后调用 `delete()` 方法。

---

## 开发与贡献

欢迎提交 Issue 和 Pull Request！项目源码托管在 [GitHub](https://github.com/sureboy/solidJSCADExt) 上。

### 本地开发

```bash
git clone https://github.com/sureboy/solidJSCADExt
cd solidJSCADExt
npm install
npm run compile
```

按 F5 启动调试。

---

## 联系方式

📧 dimon@solidjscad.com

## 许可证

MIT © SolidJSCAD Team

![微信赞助](https://solidjscad.com/wxq.jpeg)

微信扫码，赞助留言！