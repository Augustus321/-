# css技巧

## 01.左右滑动

1. 在 `html` 中：`div` 里面嵌入滑动子元素，父元素 `class` 为 `minVideoViewBox` ，子元素为 `miniStreamView`
2. 在 `css` 中：

```css
.minVideoViewBox{
    width:100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space:nowrap;
    &::-webkit-scrollbar{// 滚动条整体
        background:none;
    }
    &::-webkit-scrollbar-thumb{//滑块
        background: rgba(71, 145, 242,.5);
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track{//轨道
    }
    &::-webkit-scrollbar-button{//两端按钮
    }
    &::-webkit-scrollbar-track-piece{//滚动条中间部分
    }
}
.miniStreamView{
    width:80px;
    height:80px;
    display: inline-block;
    background:pink;
    margin:6px;
}
```

## 02.溢出两行隐藏

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

可以通过 `-webkit-line-clamp` 参数设置允许溢出几行

在非必要情况下最好不要给元素设高，否则在自适应页面中可能会出现第二行显示不完全的情况

## 03.设置 placeholder 样式

```css
&::-webkit-input-placeholder{
	color: #ADD8E6;
}
&::-moz-placeholder{
	color: #ADD8E6;
}
&:-ms-input-placeholder{
	color: #ADD8E6;
}
```

## 04.背景渐变

```css
background-image: linear-gradient(to bottom right, red, yellow);
```

## 05.两个格子自动布局的同时沾满一排

```css
grid-template-columns:1fr auto;
```

配合 `grid` 布局使用

##  06.点击输入框时取消 placeholder

```css
input:focus{
	&::-webkit-input-placeholder{
        color: transparent
    }
    &::-moz-placeholder{
        color: transparent
    }
    &:-ms-input-placeholder{
        color: transparent
    }
}
```

##  07.flex 布局子元素 width 不生效

子元素设置 `flex-shrink:0` 

说明：`flex-shrink` 默认为1 ，即空间不足会自动缩小，我们只要设置0就可以了。

##  08.overflow 的滚动条

```css
.other-fil-more::-webkit-scrollbar {/*滚动条整体样式*/
	width: 6px;
}
.other-fil-more::-webkit-scrollbar-thumb {/*滚动条里面空白区域*/
    border-radius: 5px;
    background: rgba(0,0,0,0.2);
}
.other-fil-more::-webkit-scrollbar-track {/*滚动条里面的滑块*/
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
```

##  09.nth-child 奇偶

`nth-child(odd)` 奇数，`nth-child(even)` 偶数

##  10.radio样式

隐藏原来的 `radio` ，通过 `label` 标签来设置 `radio` 选中和未选中的样式

```css
.form-info-type>label{
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #141414;
    line-height: 14px;
    margin-right: 57px;
    cursor: pointer;
}
.form-info-type>input[type=radio]{
    display: none;
}
.form-info-type>input[type=radio]+label{
    position: relative;
}
.form-info-type>input[type=radio]+label::before{
    content: '';
	display: block;
    width: 12px;
    height: 12px;
    border: 2px solid #f05f5c;
    border-radius: 50%;
    position: absolute;
    left: -22px;
	top: 50%;
    transform: translateY(-50%);
}
.form-info-type>input[type=radio]:checked+label::after{
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: #fe0b07;
    border-radius: 50%;
    position: absolute;
    left: -18px;
    top: 50%;
    transform: translateY(-50%);
}
```

##  11.盒子阴影

`box-shadow: x偏移量 y偏移量 模糊半径 扩展半径 颜色`

```css
box-shadow: inset 0px -.06rem .16rem 0px rgba(35, 70, 224, 0.3), .04rem -.1rem .14rem 0px rgba(194, 217, 254, 0.6);
```

在最前面加上inset 表示内阴影，不加默认为外阴影

##  12.媒体查询

```css
@media screen and (max-width:480px){
    .ads {
        display:none;
    }
}
```

##  13.英文字母

`text-transform` 属性

| 值         | 描述               |
| ---------- | ------------------ |
| capitalize | 首字母大写         |
| uppercase  | 字母全大写         |
| lowercase  | 字母全小写（默认） |

##  14.首行缩进

`text-indent`属性

| 值      | 描述                              |
| ------- | --------------------------------- |
| length  | 固定长度（如：2px）               |
| %       | 基于父元素的宽的百分比缩放        |
| inherit | 基于父元素的 text-indent 属性的值 |

##  15.缩放图片导致图片模糊

```css
img{
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /*Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}
```

`crisp-edges` ：使用算法达到在绽放时保持对比度和边缘，在加工时不平滑色彩和使用模糊
​`pixelated` ：当图片放大时，单纯地去放大像素点，缩小时与auto效果一样，即矢量化

##  16.鼠标样式

`cursor` 属性

| 值        | 描述                     |
| --------- | ------------------------ |
| default   | 正常鼠标指针（默认）     |
| hand/text | 文本选择效果,两个都是    |
| move      | 移动选择效果             |
| pointer   | 手指形状 链接选择效果    |
| url       | (图片地址)设置对象为图片 |
| help      | 带问号的鼠标             |
| wait      | 忙 转圈效果              |
| crosshair | 精确选择                 |
| s-resize  | 垂直调整                 |
| w-resize  | 水平调整                 |
| se-resize | 沿对角线调整1            |
| ne-resize | 沿对角线调整2            |

##  17.背景模糊

```css
backdrop-filter: blur(8px);
background-color: rgba(0, 0, 0, 0.3);
```

## 18.绝对定位水平垂直居中

方法一：

``` css
top:50%;
left:50%;
transform:translate(-50%,-50%);
```

方法二：

``` css
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
```

## 19.textarea样式

1. 不允许拖动 `resize:none;`
2. IE下隐藏滚动条 `overflow: auto;`

##  20.划线

`text-decoration` 属性

| 值           | 描述   |
| ------------ | ------ |
| line-through | 删除线 |
| overline     | 上划线 |
| underline    | 下划线 |

##  21.不同大小的字底部对齐

```css
display:flex;
align-items:baseline;
```

`baseline`: 第一行文字的基线对齐

##  22.背景图

1. 调整大小 `background-size`

| 值          | 描述                           |
| ----------- | ------------------------------ |
| contain     | 适合背景定位区域的最大大小     |
| cover       | 完全覆盖背景定位区域的最小大小 |
| 100px 100px | 调整到指定大小                 |
| 50% 50%     | 相对于元素尺寸调整到指定大小   |

## 23.优惠券

```css
width: 250px;
height: 100px;
position: relative;
/* 
    circle at + 方向，表示缺口在什么位置，如：right top表示在右上
    transparent + px，表示缺口大小，如：10px表示缺口为10px
    #28A4f2，表示四分之一的颜色
    top left / 60px 51% no-repeat，表示四分之一的左上区域的宽60px高51%
 */
background: radial-gradient(circle at right top, transparent 10px,  #28A4F2 0) top left / 60px 51% no-repeat,
      		radial-gradient(circle at right bottom, transparent 10px,  #28A4F2 0) bottom left /60px 51% no-repeat,
      		radial-gradient(circle at left top, transparent 10px, #eeeeee 0) top right /190px 51% no-repeat,
      		radial-gradient(circle at left bottom, transparent 10px, #eeeeee 0) bottom right /190px 51% no-repeat;
filter: drop-shadow(3px 3px 3px rgba(0,0,0,.3));
/* 优惠券虚线 */
&::after{
    content: '';
    height: 80px;
    border: 1px dashed #fff;
    position: absolute;
    left: 60px;
    top: 0;
    bottom: 0;
    margin: auto;
}
```

##  24.z-index 知识

当父元素的 z-index 比 父元素的兄弟元素低时，子元素的 z-index 无论多大，都会在父元素的兄弟元素的下方