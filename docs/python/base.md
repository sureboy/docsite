# Python 基础语法
## 1编码
 默认情况下，Python3 源码文件以 UTF-8 编码，所有字符串都是 unicode 字符串。

当然你也可以为源码文件指定不同的编码： 
```
# -*- coding: cp-1252 -*-
```
## 2标识符
* 第一个字符必须以字母（a-z, A-Z）或下划线`_`。
* 标识符的其他的部分由字母、数字和下划线组成。
* 标识符对大小写敏感，count 和 Count 是不同的标识符。
* 标识符对长度无硬性限制，但建议保持简洁（一般不超过 20 个字符）。
* 禁止使用保留关键字，如 if、for、class 等不能作为标识符。  

合法标识符：
```py
age = 25                # 普通变量名，最常见
user_name = "Alice"     # 用下划线连接单词，清晰易读
_total = 100            # 下划线开头通常表示“内部使用”或“私有”
MAX_SIZE = 1024         # 全大写通常表示“常量”（固定不变的值）
calculate_area()        # 函数名，动词+名词
StudentInfo             # 类名，首字母大写
__private_var           # 双下划线开头，有特殊含义
```
非法标识符：
```py
2nd_place = "silver"    # 错误：以数字开头
user-name = "Bob"       # 错误：包含连字符
class = "Math"          # 错误：使用关键字
$price = 9              # 错误：包含特殊字符
else = "loop"           # 错误：使用关键字
```
Python 3 允许使用 Unicode 字符作为标识符，可以用中文作为变量名，非 ASCII 标识符也是允许的了。 
```py
姓名 = "张三"  # 合法
π = 3.14159   # 合法
```
测试标识符是否合法：
```py
def is_valid_identifier(name):
    try:
        exec(f"{name} = None")
        return True
    except:
        return False

print(is_valid_identifier("2var"))  # False
print(is_valid_identifier("var2"))  # True
```
## 注释
Python中单行注释以 # 开头，实例如下：
```py
# 第一个注释
print ("Hello, Python!") # 第二个注释
```
执行以上代码，输出结果为：
```
Hello, python
```
多行注释可以用多个 `#` 号，还有 `'''` 和 `"""`：  
```py
 
# 注释
# 注释
 
'''
注释
注释
'''
 
"""
注释
注释
"""
print ("Hello, Python!")
```
执行以上代码，输出结果为：
```
Hello, Python!
```
## 行与缩进
python最具特色的就是使用缩进来表示代码块，不需要使用大括号`{}`。  
缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。实例如下： 
```py
if True:
    print ("True")
else:
    print ("False")
```
以下代码最后一行语句缩进数的空格数不一致，会导致运行错误：
```py
if True:
    print ("Answer")
    print ("True")
else:
    print ("Answer")
  print ("False")    # 缩进不一致，错误
```
以上程序由于缩进不一致，执行后会出现类似以下错误：
```
IndentationError: unindent does not match any outer indentation level
```
## 多行语句
Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠`\`来实现多行语句，例如：
```py
a = item_one + \
    item_two + \
    item_three
```

```py
item_one = 1
item_two = 2
item_three = 3
a = item_one + \
    item_two + \
    item_three
print(a) # 输出 6
```
在 `[]`,`{}`,或`()`中的多行语句,不需要使用反斜杠`\`，例如：
```py
t = ['item_one', 'item_two', 'item_three',
    'item_four', 'item_five']
```
