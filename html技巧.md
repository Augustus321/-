# html技巧

## 01.文本框 textarea 属性

| 属性      | 值      | 描述                           |
| --------- | ------- | ------------------------------ |
| name      | String  | 名称                           |
| cols      | Number  | 可见宽度                       |
| rows      | Number  | 可见行数                       |
| maxlength | Number  | 最大字符数                     |
| disabled  | Boolean | 禁用该文本区                   |
| autofocus | Boolean | 页面加载后文本区域自动获得焦点 |
| readonly  | Boolean | 只读                           |
| required  | Boolean | 必填                           |

##  02.文字渐变

```css
<svg>
    <defs>
        <linearGradient id="grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" style="stop-color:#f9cb22; stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f83600; stop-opacity:1" />
        </linearGradient>
    </defs>
    <text x="0" y="36" fill="url(#grad)" class="header-tvzf">文字渐变</text>
</svg>
```

##  03.table 的使用

1. 间距：标签中写 `cellspacing` 或 css 中 `border-spacing`

2. 居中：标签中写 `align="center"`

3. 边框：

   ```css
   table{border-collapse:collapse}
   td{border-bottom:1px solid #000000}
   ```

   `border-collapse`：设置表格的边框是否被合并为一个单一的边框，还是象在标准的 HTML 中那样分开显示

   | 值       | 描述                                                         |
   | -------- | ------------------------------------------------------------ |
   | separate | 边框会被分开。不会忽略 border-spacing 和 empty-cells 属性。（默认） |
   | collapse | 如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。 |
   | inherit  | 规定应该从父元素继承 border-collapse 属性的值。              |

   

## 04.使搜索引擎不抓取链接信息 nofollow

`nofollow`：使搜索引擎不抓取当前页面的链接信息或特定的链接的信息

1. 用于meta元标签，告诉爬虫该页面上所有链接都无需追踪

   ```html
   <meta name="robots" content="nofollow" />
   ```

2. 用于a标签，告诉爬虫该页面无需追踪。

   ```html
   <a href="login.aspx" rel="nofollow">登录</a>
   ```