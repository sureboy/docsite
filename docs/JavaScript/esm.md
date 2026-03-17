---
title: ES Module (ESM)
description: JavaScript（简称JS）是一门轻量级的解释型脚本语言，其基本语法是编写JS代码的基础，掌握这些核心规则才能写出规范、可运行的代码。以下从核心语法规则、基础构成要素两方面系统讲解。
---



## 一、ESM 浏览器端核心更新（2024-2026）
### 1.1 语法简化与标准化
#### （1）JSON 导入标准化（ES2024）
此前浏览器导入 JSON 需借助 fetch 手动解析，最新规范已将 JSON 导入纳入标准，语法统一且无需额外工具：
```javascript
// 最新标准语法（浏览器原生支持）
import config from './config.json' with { type: 'json' };
console.log(config.apiBaseUrl); // 直接访问 JSON 内容
```
> 替代了非标准的 `fetch + JSON.parse` 方案，`with` 关键字语义化更强，还支持 `text` 类型导入（如纯文本文件）：
> ```javascript
> // 导入纯文本文件
> import textContent from './README.txt' with { type: 'text' };
> ```

#### （2）导入重命名语法糖（ES2025）
简化默认导出的重命名导入，减少冗余代码：
```javascript
// 旧语法：默认导出重命名需嵌套大括号
import { default as request } from './api.js';

// 新语法：直接后缀重命名（浏览器原生支持）
import request from './api.js' as req;
req('/user'); // 等价于 request('/user')
```

#### （3）默认导出简化（Stage 4 定稿）
针对函数/对象类型的默认导出，省略冗余关键字：
```javascript
// 旧语法：默认导出函数
export default function fetchData() {
  return fetch('/api/data');
}

// 新语法：省略 function 关键字（仅适用于默认导出）
export default fetchData() {
  return fetch('/api/data');
}
```

### 1.2 加载性能优化（浏览器专属）
#### （1）模块预加载（import preload）
ES2025 新增 `import preload` 语法，提前加载核心依赖模块，避免运行时加载延迟（替代传统的 `<link rel="modulepreload">`）：
```html
<script type="module">
  // 预加载 utils.js，不立即执行，后续导入直接复用缓存
  import preload './utils.js';

  // 业务逻辑（执行到此处时，utils.js 已加载完成）
  setTimeout(() => {
    import { add } from './utils.js';
    console.log(add(1, 2)); // 无加载延迟
  }, 1000);
</script>
```

#### （2）模块缓存精细化控制
新增 `import.meta.clearCache()` 方法，支持手动清除指定模块缓存，适用于动态更新的场景（如配置文件修改后重新加载）：
```javascript
// 清除 config.js 的缓存，下次导入重新请求最新版本
import.meta.clearCache('./config.js');

// 重新导入（获取最新内容）
import { apiUrl } from './config.js';
```

### 1.3 跨域与兼容性增强
#### （1）跨域模块加载简化
浏览器默认禁止跨域加载模块，最新规范通过标准化响应头简化配置，只需服务器返回以下头信息，无需前端额外处理：
```http
# 服务器响应头（Nginx/Apache/CDN 配置）
Cross-Origin-Opener-Policy: same-site
Cross-Origin-Resource-Policy: cross-origin
Access-Control-Allow-Origin: *
```
配置后，浏览器可直接导入跨域模块：
```javascript
// 导入 CDN 上的跨域 ESM 模块
import { dayjs } from 'https://cdn.jsdelivr.net/npm/dayjs@1.11.10/esm/index.js';
```

#### （2）降级方案增强
新增 `fallback` 属性，实现 ESM 自动降级（支持 ESM 的浏览器加载模块，旧浏览器加载兼容脚本）：
```html
<!-- 最新写法：无需手动判断浏览器 -->
<script type="module" src="./main-esm.js" fallback="./main-cjs.js"></script>
```

## 二、浏览器端 ESM 完整语法（含最新规范）
### 2.1 导出（Export）
| 导出类型       | 最新语法示例                | 说明                     |
|----------------|-----------------------------|--------------------------|
| 命名导出       | `export const PI = 3.14;`    | 基础语法，无变化         |
| 重命名导出     | `export { add as sum } from './utils.js';` | 无变化 |
| 默认导出       | `export default fn() {}`     | 新增简化语法（函数/对象）|
| 批量导出       | `export * from './utils.js' with { type: 'module' };` | 指定模块类型 |
| 文本导出       | `export const text from './info.txt' with { type: 'text' };` | 原生导入文本 |

### 2.2 导入（Import）
| 导入类型       | 最新语法示例                                  | 说明                     |
|----------------|-----------------------------------------------|--------------------------|
| 命名导入       | `import { sum } from './utils.js';`           | 基础语法，无变化         |
| 重命名导入     | `import sum from './utils.js' as add;`        | 新增简化语法             |
| 默认导入       | `import request from './api.js';`             | 无变化                   |
| 动态导入       | `const utils = await import('./utils.js' with { prefix: './' });` | 增强静态分析 |
| JSON 导入      | `import data from './config.json' with { type: 'json' };` | 标准化语法 |
| 预加载导入     | `import preload './utils.js';`                | ES2025 新增              |
| 全量导入       | `import * as utils from './utils.js';`        | 无变化                   |

### 2.3 浏览器专属全局属性（import.meta）
`import.meta` 是模块的上下文对象，最新规范扩展了浏览器端的专属能力：
```javascript
// 1. 模块的完整 URL（核心属性，无变化）
console.log(import.meta.url); // 输出：https://example.com/src/utils.js

// 2. 清除模块缓存（ES2025 新增）
import.meta.clearCache('./config.js'); // 清除指定模块缓存
import.meta.clearCache(); // 清除当前模块所有依赖缓存

// 3. 模块加载状态（ES2024 新增）
console.log(import.meta.state); // 输出：loaded/loading/error

// 4. 模块类型（ES2024 新增）
console.log(import.meta.type); // 输出：module（固定值，标识 ESM 模块）
```

## 三、浏览器端 ESM 最佳实践
### 3.1 避坑指南
1. **路径规则**：
   - 浏览器端必须使用完整相对路径（如 `./utils.js`），不能省略 `./` 或 `.js` 后缀；
   - 跨域导入必须使用完整 URL（如 `https://cdn.example.com/utils.js`）；
2. **循环依赖**：
   虽支持循环依赖，但需确保依赖顺序，避免未定义变量：
   ```javascript
   // a.js
   import { b } from './b.js';
   export const a = 1;
   console.log(b); // 输出：undefined（先导入后执行）

   // b.js
   import { a } from './a.js';
   export const b = 2;
   console.log(a); // 输出：1（a 已声明）
   ```
3. **兼容性降级**：
   针对旧浏览器（如 Chrome < 89、Firefox < 87），使用 `esbuild` 转换语法：
   ```bash
   # 将最新 ESM 转换为 ES6 兼容语法
   esbuild ./src/index.js --format=esm --target=es2020 --outfile=./dist/index.js
   ```

### 3.2 性能优化建议
1. **预加载核心模块**：对高频使用的依赖（如工具函数、配置文件）使用 `import preload` 提前加载；
2. **静态导入优先**：仅在条件加载/懒加载场景使用动态导入，保证打包工具的 tree-shaking 效果；
3. **缓存合理利用**：非动态更新的模块避免频繁清除缓存，减少重复请求；
4. **CDN 导入公共模块**：第三方库（如 dayjs、lodash）优先从 CDN 导入 ESM 版本，利用 CDN 缓存。

## 总结
1. **核心更新**：浏览器端 ESM 最新规范新增 JSON/文本导入标准化、模块预加载、缓存控制等能力，同时简化了语法和跨域配置；
2. **语法要点**：重点掌握 `with { type: 'json' }` 标准化导入、`import preload` 预加载、`import.meta.clearCache()` 缓存控制；
3. **最佳实践**：静态导入优先、预加载核心依赖、规范路径写法、合理处理跨域，兼顾性能与兼容性。

最新 ESM 规范进一步降低了浏览器端模块化开发的成本，是现代前端项目（如 Vue/React 单页应用、原生 JS 项目）的首选模块化方案。