---
title: JavaScript 基本语法全面介绍
description: JavaScript（简称JS）是一门轻量级的解释型脚本语言，其基本语法是编写JS代码的基础，掌握这些核心规则才能写出规范、可运行的代码。以下从核心语法规则、基础构成要素两方面系统讲解。
---

# JavaScript 基本语法全面介绍
JavaScript（简称JS）是一门轻量级的解释型脚本语言，其基本语法是编写JS代码的基础，掌握这些核心规则才能写出规范、可运行的代码。以下从核心语法规则、基础构成要素两方面系统讲解。

## 一、语法基础规则
### 1.1 大小写敏感
JS对大小写严格区分，变量、函数名、关键字等都要注意大小写一致性。
```javascript
let name = "张三";
let Name = "李四"; // 这是两个完全不同的变量
console.log(name); // 输出：张三
console.log(Name); // 输出：李四
```
> 注意：关键字（如`if`、`function`、`let`）必须小写，否则会报错。

### 1.2 语句结束符
- JS中每条语句建议以分号`;`结尾，用于分隔语句，提升代码可读性。
- 若一行只有一条语句，分号可省略（自动分号插入规则），但**不推荐**，易引发隐蔽错误。
```javascript
// 推荐写法：加分号
let a = 10;
console.log(a);

// 不推荐：省略分号（虽能运行，但易出错）
let b = 20
console.log(b)
```

### 1.3 注释
注释用于解释代码，不会被执行，分为单行注释和多行注释：
```javascript
// 单行注释：用于注释单行内容
let num = 10; // 定义一个数字变量

/*
  多行注释：用于注释多行内容
  可以详细说明代码块的功能
  比如下面这个函数用于计算两数之和
*/
function add(x, y) {
  return x + y;
}
```

### 1.4 空格与换行
JS会忽略多余的空格和换行，合理使用可提升代码可读性：
```javascript
// 合法但可读性差
let sum=1+2+3;

// 推荐写法：适当空格分隔
let sum = 1 + 2 + 3;

// 换行拆分长代码
let arr = [
  1, 2, 3,
  4, 5, 6
];
```

### 1.5 标识符命名规则
标识符指变量、函数、对象属性等的名称，需遵守以下规则：
1. 由字母（A-Z/a-z）、数字（0-9）、下划线（_）、美元符号（$）组成；
2. 不能以数字开头；
3. 不能使用JS关键字（如`if`、`for`、`function`）和保留字（如`class`、`let`、`const`）；
4. 建议遵循驼峰命名法：首字母小写，后续单词首字母大写（如`userName`、`getUserInfo`）。

```javascript
// 合法的标识符
let userName = "张三";
let $age = 20;
let _score = 90;

// 非法的标识符（会报错）
// let 123name = "李四"; // 以数字开头
// let if = 10; // 使用关键字
```

## 二、核心语法构成
### 2.1 变量与常量
变量用于存储数据，常量用于存储不可修改的数据，ES6后推荐使用`let`/`const`替代`var`。
#### （1）变量声明
```javascript
// let：块级作用域，可重新赋值
let age = 18;
age = 20; // 合法
console.log(age); // 输出：20

// var：函数级作用域（旧版语法，不推荐）
var name = "王五";
name = "赵六"; // 合法

// 未声明直接赋值（不推荐，会成为全局变量）
gender = "男";
```

#### （2）常量声明
```javascript
// const：块级作用域，声明时必须赋值，且不能重新赋值
const PI = 3.14159;
// PI = 3.14; // 报错：Assignment to constant variable

// 注意：const声明的引用类型（对象/数组），内容可修改，引用不可变
const arr = [1, 2, 3];
arr.push(4); // 合法，数组内容修改
console.log(arr); // 输出：[1,2,3,4]
// arr = [5,6,7]; // 报错：引用不可修改
```

### 2.2 数据类型
JS是弱类型语言，变量类型可动态变化，分为原始类型和引用类型：
#### （1）原始类型（基本类型）
```javascript
let num = 10;         // 数字类型（Number）：整数、小数、NaN、Infinity
let str = "Hello JS"; // 字符串类型（String）：单引号/双引号/反引号包裹
let bool = true;      // 布尔类型（Boolean）：true/false
let empty = null;     // 空值类型：表示"无"，typeof返回object（历史bug）
let undef = undefined;// 未定义类型：变量声明未赋值时的默认值
let sym = Symbol("id"); // 符号类型（ES6）：唯一值，用于对象唯一属性名
```

#### （2）引用类型
```javascript
let obj = {name: "张三", age: 20}; // 对象类型（Object）
let arr = [1, 2, 3];               // 数组类型（Array，属于Object的子集）
let fn = function() {};            // 函数类型（Function，属于Object的子集）
```

### 2.3 运算符
运算符用于执行数据的运算，常见类型如下：
#### （1）算术运算符
```javascript
let a = 10, b = 3;
console.log(a + b); // 加法：13
console.log(a - b); // 减法：7
console.log(a * b); // 乘法：30
console.log(a / b); // 除法：3.333...
console.log(a % b); // 取余：1
console.log(a++);   // 后置自增：先返回10，再加1
console.log(++a);   // 前置自增：先加1，再返回12
```

#### （2）赋值运算符
```javascript
let x = 5;
x += 3; // 等价于 x = x + 3 → 8
x -= 2; // 等价于 x = x - 2 → 6
x *= 4; // 等价于 x = x * 4 → 24
x /= 3; // 等价于 x = x / 3 → 8
```

#### （3）比较运算符
```javascript
let m = 10, n = "10";
console.log(m == n);  // 宽松相等：只比较值，true
console.log(m === n); // 严格相等：比较值+类型，false（推荐使用）
console.log(m != n);  // 宽松不等：false
console.log(m !== n); // 严格不等：true
console.log(m > 5);   // 大于：true
console.log(m < 5);   // 小于：false
```

#### （4）逻辑运算符
```javascript
let p = true, q = false;
console.log(p && q); // 逻辑与：都为true才返回true → false
console.log(p || q); // 逻辑或：有一个true就返回true → true
console.log(!p);     // 逻辑非：取反 → false
```

### 2.4 流程控制语句
#### （1）条件语句
```javascript
// if-else
let score = 85;
if (score >= 90) {
  console.log("优秀");
} else if (score >= 80) {
  console.log("良好");
} else {
  console.log("及格");
}

// switch
let day = 2;
switch (day) {
  case 1:
    console.log("周一");
    break; // 终止switch，避免穿透
  case 2:
    console.log("周二");
    break;
  default:
    console.log("其他日期");
}
```

#### （2）循环语句
```javascript
// for循环
for (let i = 0; i < 5; i++) {
  console.log(i); // 输出：0 1 2 3 4
}

// while循环
let count = 0;
while (count < 3) {
  console.log(count); // 输出：0 1 2
  count++;
}

// 循环控制：break（终止循环）、continue（跳过当前轮次）
for (let j = 0; j < 5; j++) {
  if (j === 2) continue; // 跳过j=2
  if (j === 4) break;    // 终止循环
  console.log(j); // 输出：0 1 3
}
```

### 2.5 函数
函数是可重复执行的代码块，用于封装逻辑：
```javascript
// 函数声明
function add(x, y) {
  return x + y; // 返回值
}
let result = add(3, 5);
console.log(result); // 输出：8

// 函数表达式
let multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 6)); // 输出：24

// 箭头函数（ES6）
let subtract = (x, y) => x - y;
console.log(subtract(10, 4)); // 输出：6
```

## 三、总结
1. **核心语法规则**：JS大小写敏感，语句建议加分号，注释不执行，标识符需遵守命名规范，空格/换行不影响执行但影响可读性。
2. **基础构成**：变量/常量用`let`/`const`声明，数据类型分原始类型和引用类型，运算符实现数据运算，流程控制语句控制代码执行逻辑，函数封装可复用逻辑。
3. **关键原则**：优先使用严格相等`===`、块级作用域的`let`/`const`，避免`var`和未声明直接赋值，代码风格保持一致（如驼峰命名、适当空格）。