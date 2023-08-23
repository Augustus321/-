#  js技巧

##  01.动态设置 tdk

```js
//t
$(document).attr('title',title);
var meta = document.getElementsByTagName('meta');
//k
meta["Keywords"].setAttribute('content',keywords);
//d
meta["Description"].setAttribute('content',description);
```

##  02.正则表达式

###  匹配返回相应字段

```js
let a = //.exec()
```

###  判断真假

```js
let a = //.test()
```

## 03.回到上一页

```js
window.history.back(-1)
```

##  04.关闭当前页

```js
window.opener=null;
window.open('','_self')
window.close();
```

##  05.获取history数量

```js
window.history.length
```

## 06.修改元素样式

```js
document.querySelector('.a').style.setProperty('display','block')
```

## 07.获取元素data

```js
var div = document.getElementById("myDiv");
var appId = div.dataset.appid;//获取data-appid的值
```

## 08.数字

### 	取整

| 内容         | 描述       | 用法            |
| ------------ | ---------- | --------------- |
| Math.ceil()  | 向上取整   | Math.ceil(abc)  |
| parseInt()   | 只保留整数 | parseInt(abc)   |
| Math.floor() | 向下取整   | Math.floor(abc) |
| Math.round() | 四舍五入   | Math.round(abc) |

### 	绝对值

```js
const a = -1
Math.abs(a)
```

### 	返回两数中的较大者

```js
Math.max(1,2)
```

### 	返回两数中的较小者

```js
Math.min(1,2)
```

### 	随机数

```js
Math.random()
```

### 	保留两位小数

```js
var num = 12.3456
num.toFixed(2)
```

### 	判断一个数是否为整数

```js
Number.isInteger(3) //ES6
```

##  09.数组

### 	过滤数组

```js
var a = aa.filter(function(item){
	return item!=undefined;
})
```

### 	删除数组第一个元素

```js
arr.shift()
```

### 	匹配数组中的某个对象并删除

```js
newArr.forEach((item,index,array)=>{
    if(item.name =='abc'){
        array.splice(index,1)
    }
})
```

### 	判断数组中是否有某个值

​		方法一：

```js
// indexOf 返回元素下标或-1
arr.indexOf(2)
```

​		方法二：

```js
// includes 返回true或false
arr.includes(2) ? console.log("存在") : console.log("不存在")
```

​		方法三：

```js
// 判断是否有某个对象，有则返回下标，没有则返回-1
const hasIndex = aa.findIndex(aItem => aItem.id == id)
```

### 	判断两个数组是否相同

```js
//相同为空数组 []，不同为 false
const isSame = a.length == b.length && a.filter(item => !b.includes(item))
```

##  10.字符串

### 获取最后一个特定字符之后的字符串

```js
var str = '/a/aa/aaaaaaa/aaa'
var index = str.lastIndexOf('/')
str = str.substring(index+1,str.length)
//'aaa'
```

### 替换字符串中所有匹配的文字

1. 固定文字

   ```js
   a = str.replace(/abc/g,'')
   ```

2. 变量文字

   ```js
   var regex = abc[i];
   a = str.replace(new RegExp(regex,'g'),'')
   ```

### 控制字符长度

```js
if(val.length > 11){
    val = val.substring(0,11)
}
```

### 字符串补全长度（可用于数字补0）

​	头部补全：`padStart`

```js
var a = 2;
a.toString().padStart(2,'0') //'02',变量必须为字符串
```

​	尾部补全：`padEnd`

```js
var a = 2;
a.toString().padStart(2,'0') //'20',变量必须为字符串
```

## 11.对象

### 	判断 obj 是否为空

​		方法一：

```js
JSON.stringify(obj) === '{}'
```

​		方法二：

```js
Object.keys(obj).length <= 0  //ES6
```

	### 	判断 obj 中是否有想要的属性

```js
obj.hasOwnProperty("a")
```

### 	删除 obj 中的某个属性

```js
delete obj[key]
```

## 12.全局获取function修改的值

```js
var a = ''
function aa(){
	return a = 1
}
a = aa()
```

## 13.switch case语句

```js
switch(表达式) {
    case n:
        代码块
        break;
    case n:
        代码块
        break;
    default:
        默认代码块
}
```

## 14.使用md5加密

引入 md5.js

```js
hex_md5('aaaa')
```

## 15.输入框只准输入数字

方法一：

```js
var a = document.getElementById('aa')
var val = a.value
if(val!=''&& isNaN(val)){
    a.value = ''
    return
}
```

方法二：

```html
<input onkeyup="value=value.replace(/\D/g,'')" />
```



## 16.阻止 a 标签跳转

```html
<a href="aaa.html" onclick="return aa()">aaa</a>
```

```js
function aa(){
	return false
}
```

## 17.弹出新窗口 window.open

```js
window.open ('page.html', 'newwindow', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no') 
```

参数说明：

| 参数          | 描述                                                    |
| ------------- | ------------------------------------------------------- |
| 'page.html'   | 弹出窗口的文件名                                        |
| 'newwindow'   | 弹出窗口的名字（不是文件名），非必须，可用空''代替      |
| height=100    | 窗口高度                                                |
| width=400     | 窗口宽度                                                |
| top=0         | 窗口距离屏幕上方的像素值                                |
| left=0        | 窗口距离屏幕左侧的像素值                                |
| toolbar=no    | 是否显示工具栏，yes为显示                               |
| menubar=no    | 是否显示菜单栏，yes为显示                               |
| scrollbars=no | 是否显示滚动栏，yes为显示                               |
| resizable=no  | 是否允许改变窗口大小，yes为允许                         |
| location=no   | 是否显示地址栏，yes为允许                               |
| status=no     | 是否显示状态栏内的信息（通常是文件已经打开），yes为允许 |

## 18.获取 url 信息

1. 获取 url 完整链接

   ```js
   window.location.href
   ```

2. 获取 url 某个参数

   ```js
   function getUrlParam(name) {
   	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)") //构造一个含有目标参数的正则表达式对象
       var r = window.location.search.substr(1).match(reg)  //匹配目标参数
       if (r != null) return unescape(r[2]); return null //返回参数值
   }
   var a = getUrlParam('type')
   //参数为中文时会出现乱码的情况
   //将代码中的unescape替换为decodeURI即可
   ```

3. 获取 url 不包含参数

   ```js
   location.protocol + '//' + location.host + location.pathname
   ```

## 19.获取窗口大小

```js
document.documentElement.clientWidth //窗口宽度
document.documentElement.clientHeight //窗口高度
```

## 20.监听窗口变化

```js
window.onresize = function(){
    console.log('窗口大小变化了')
}
```

## 21.转码

1. 中文转utf-8

   ```js
   (中文).replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"&#x$2;")})
   ```

2. utf-8转中文

   ```js
   unescape((UTF-8).replace(/&#x/g,'%u').replace(/\\u/g,'%u').replace(/;/g,''))
   ```

## 22.创建节点并插入

```js
var a = document.createElement('p')
a.className = 'aa'
a.innerHTML = 'aaaa'
document.body.appendChild(a)
```

## 23.自动触发事件

1. 自动获取焦点

   ```js
   a.focus()
   ```

2. 自动触发点击事件

   ```js
   a.click()
   ```

## 24.获取元素信息

```js
document.getElementById("div").offsetHeight //元素高度
document.getElementById("div").offsetWidth //元素宽度
document.getElementById("div").offsetLeft //元素的实际距离左边界的距离
document.getElementById("div").offsetTop //元素的实际距离上边界的距离
```

## 25.获取时间

```js
var date = new Date()
date.getFullYear()  // 获取完整的年份(4位,1970)
date.getMonth()  // 获取月份(0-11,0代表1月,用的时候记得加上1)
date.getDate()  // 获取日(1-31)
date.getTime()  // 获取时间(从1970.1.1开始的毫秒数)
date.getHours()  // 获取小时数(0-23)
date.getMinutes()  // 获取分钟数(0-59)
date.getSeconds()  // 获取秒数(0-59)
date.getDay()  //获取星期(1-7,1代表星期一，7代表星期日)
//时间的样式可以随意拼接
//date.getFullYear() + '-' + (date.getMonth() + 1)
```

## 26.转换时间戳

1. 时间戳为秒

   ```js
   new Date(1354116249 * 1000).toLocaleDateString()
   ```

2. 时间戳为毫秒

   ```js
   new Date(1354116249000).toLocaleDateString()
   ```

3. 时间戳被其他字符包含

```js
function GetDateFormat(str) {
	return new Date(parseInt(str.substr(6, 13))).toLocaleDateString()
}
GetDateFormat('/Date(1354116249000)/') —> 2012/11/28
```

## 27.自动刷新页面

```js
window.location.reload()
```

## 28.js 文件乱码

打开js文件乱码时可以用记事本打开js文件，并另存为以utf-8编码的js文件

## 29.反转义

将一些特殊字符进行转义，使其不被解析，如 `html` 标签：'<'

```js
function HTMLDecode(text) {
    var temp = document.createElement("div");
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}
```

## 30.获取元素文本

```js
document.getElementById('a').textContent
```

## 31.复制文本

```js
var text = 'aasdasd' //获取需要复制的内容
var copyNode = document.createElement('input')
copyNode.className = 'copyNode'
document.body.appendChild(copyNode)
copyNode.value = text // 修改文本框的内容
copyNode.select()
document.execCommand("copy")
copyNode.remove()
```

## 32.判断数据类型

​	方法一：

```js
typeof('abc')  //'string' 
//注意：Array,null和Object类型都会返回object
```

​	方法二：

```js
({ab:'dd'}) instanceof Object  //true
```

​	方法三：

```js
({ab:'dd'}).consturctor === Object //true
```

​	方法四：

```js
Array.isArray([1,2,3]) //true
```

​	方法五：

```js
Object.prototype.toString.call(arr) //'[object Array]'
```

## 33.注解

​	使用 /** */ 包起来，可以在使用的时候知道怎么用

| 关键词 | 描述           |
| ------ | -------------- |
| @param | 描述参数的信息 |

```js
/**
*@param {string} a 函数中的参数
*/
function abc(a){}
//鼠标移到 a 上面就可以看见这个参数的描述和类型
```

## 34.日期不足两位补0

在所有变量的前面提前加上0，并通过 `slice` 控制变量的长度，以此来达到不足补0的效果

```js
function currTimeFormate() {
			var date = new Date(); // 当前日期时间
			var year = date.getFullYear(); // 年份
			var month = ('0'+(date.getMonth()+1)).slice(-2); // 月份+1
			var day = ('0'+date.getDate()).slice(-2); // 日
			var hour = ('0'+date.getHours()).slice(-2); // 小时
			var minute = ('0'+date.getMinutes()).slice(-2); // 分钟
			var second = ('0'+date.getSeconds()).slice(-2); // 秒数
			var millisecond = ('000'+date.getMilliseconds()).slice(-3); // 毫秒数0-999
	        console.log(year + '-' + month + '-' + day + ' ' + 
				hour + ':' + minute + ':' + second + '.' + millisecond);
}
```

##  35.比较时间大小

```js
const nowTime = new Date(),oldTime = new Date('2022-6-13 8:23')
if(nowTime.getTime() > oldTime.getTime()){
    console.log('当前时间比以前的时间大')
}else{
   console.log('当前时间比以前的时间小')
}
```

