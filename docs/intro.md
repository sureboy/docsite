---
slug: /
title: SolidJSCAD 简介
description: SolidJSCAD 是一个基于 JSCAD 和 Three.js 的在线 3D 建模编辑器，支持 PWA 离线使用，并提供 VSCode 插件。
---

# SolidJSCAD：浏览器中的参数化 3D 建模

欢迎使用 **SolidJSCAD** —— 一款轻量、强大、可离线的在线 3D 建模工具。你只需打开浏览器，就能编写 JavaScript 代码创建精确的 3D 模型，实时预览并导出结果。无论是快速原型设计、教学演示，还是与团队协作，SolidJSCAD 都能让你专注于几何逻辑，无需安装任何桌面软件。

## ✨ 核心特性

- **在线编辑，实时预览**  
  采用 [JSCAD](https://github.com/jscad/OpenJSCAD.org) 的 `@jscad/modeling` 核心库。所有修改即时反馈，建模就像写代码一样流畅。

- **PWA 支持，离线可用**  
  SolidJSCAD 是一个渐进式 Web 应用（PWA），你可以将其安装到桌面或移动设备。即使没有网络，依然可以打开编辑器，继续你的建模工作。

- **强大的渲染引擎**  
  基于 [Three.js](https://threejs.org/) 构建，支持高质量的网格显示、多材质、光照和阴影。你可以自由旋转、缩放、平移模型，从任意角度观察细节。

- **原生 ES 模块支持**  
  采用现代 ESM 标准，你可以直接使用 `import` / `export` 语法组织代码。无论是浏览器环境还是 VSCode 插件，都原生支持 ESM，让你享受模块化开发带来的清晰结构和优化潜力。

- **VSCode 插件，本地开发体验**  
  我们为 VSCode 提供了同名插件 **SolidJSCAD**，让你在熟悉的 IDE 中编写建模脚本。插件内置语法高亮、代码补全、实时预览和导出功能，与在线版完全兼容，满足更复杂的项目需求。


## 🚀 快速开始

### 在线使用
直接访问 [SolidJSCAD 在线编辑器](https://solidjscad.com)，即可开始建模。无需注册，打开即用。

### 安装 PWA 应用
- **桌面浏览器**：在 Chrome/Edge 地址栏右侧点击「安装」图标，将应用添加到桌面。
- **移动设备**：使用 Safari 或 Chrome 访问网站，通过「添加到主屏幕」安装。

### 安装 VSCode 插件
在 VSCode 扩展商店搜索 **SolidJSCAD** 并安装。使用详情见插件说明。

## 📐 一个简单的示例（ESM 语法）

创建一个立方体，并在其上方放置一个球体：

```javascript
import modeling from '@jscad/modeling';
const { cube, sphere } = modeling.primitives;
const { translate } = modeling.transforms;

export const main = () => {
  const base = cube({ size: 10 });
  const top = sphere({ radius: 4 });
  return [
    base,
    translate([0, 0, 8], top)  // 将球体抬高到立方体上方
  ];
};