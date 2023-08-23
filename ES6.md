#  ES6

## 1.解构赋值

```js
let [a,...b] = [1,2,3] //a == 1,b == [2,3]
//注意：如果剩余元素右侧有逗号，会抛出 SyntaxError，因为剩余元素必须是数组的最后一个元素。

let obj = {a:{b:1}}
const {a} = obj //传统解构赋值 可以拿到a
const {a:{b}} = obj //连续解构赋值  可以拿到b
const {a:{b:value}} = obj //连续解构赋值 + 重命名  可以拿到b的同时将b重命名为value
```

## 2.判断一个数为整数

```js
Number.isInteger(3)
```

## 3.展开运算符

