  <br /> 强制换行标签   单标签
<html></html>    HTML标签   页面中最大的标签，称为根标签
<head></head>  文档的头部，在head标签中必须要设置的标签是title标签
<title></title> 文档的标签，让页面拥有一个属于自己的网页标题
<body></body> 文档的主体，元素包含文档的所以内容，页面内容，基本都是放到body里面的
<!DOCTYPE html>  提示是用html文本来显示，在第一行，不属于文本内容
<html lang="en"> 表示语言是英语  但一样可以用中文。
<meta charset="UTF-8">是字符集合，以便计算机可以识别和存储各种文字，charset表示字符集合，UTF-8被称为万国码。

标题标签
<h1></h1>一级标题
<h2></h2>.....
字体会根据等级依次字体减弱，变小。

段落标签<p></p>可以分段，会自动换行，段落间会有空隙
<strong></strong>或<b></b>加粗  更推荐<strong>
<em></em>或<i></i>倾斜  更推荐<em>
<del></del>或<s></s>删除线   更推荐<del>
<ins></ins>或<u></u>下划线   更推荐<ins>
更推荐的原因是语义更强烈。

<div></div> div表示分割，分区，单独占一行。
<span></span>  span意为跨度，跨距，让所有span里的内容用一行来表示。
<div><span>没有语义，<div>可以理解为一行大小的盒子，而<span>可以理解为一个小盒子。

<img src="图像路径"/>  这个用于提取图片。
src是<img>标签的必须属性，它用于指定图像文件的路径和文件名。
若图片位置和html文件在同一位置，则直接用图片名。
若图片位置和html文件不在同一位置，则需要用详细地址。
图像标签的其他数属性：
alt：替换文本，图像不能显示时出现的文字，即图片能显示时不会显示。
title:提示文本，鼠标放到图片上可以显示的文字。
以上两个属性值是文本，后面三个属性值是像素。
width：设置图像的宽度。
height：设置图像的高度。
一般指修改一个，另一个会自动等比例缩放。
border：设置图像的边框粗细。

<a></a>标签用于定义超链接，其中href是必须，target用于指定连接页面的打开方式。
<a>和</a>之间的是链接的名字。
target="_self"意为当前页面跳转到指定页面中。不写target时默认为此模式。
target="_blank"意为新建一个新页面打开指定页面。
例子：<a href="http://www.qq.com" target="_blank">腾讯</a>

锚点链接：<a href="#名字"></a>...........<h1 id="名字">标题</h1>

注释：
特殊字符：
空格：&nbsp
大于号：&lt
小于号：&gt


表格：
<table></table>定义表格
<tr></tr>定义表格中的行，<th>与其类似，用于表头
<td></td>定义表格中的单元格

align=right/center/left,定义位置
border=1,边框
cellpadding表示文字与边框之间的距离
cellspacing表示单元格中间的距离  一般为0
width表示边框的宽度
height表示边框的长度 

<thead>标签表格的头部区域
<tbody>标签表格的主体区域
这两个都在<table>中

跨行合并：rowspan
跨列合并：colspan

列表：
无序列表：<ul><li></li></ul>
有序列表：<ol><li></li></ol>
自定义列表：<dl>
                        <dt></dt>
                        <dd></dd>
                    <dl>

表单：
<form>定义表单域
<form action="url地址" method="提交方式（get/post）"  name="表单域名称">
   各种表单元素控件
</form>
例：<form action="demo.php" method="POST" name="name1">
    ................ .....
</form>

标签选择器：标签名{}
类选择器：.自己设置的名字 {}     后面的标签中加入id=“自己设置的名字”
id选择器：与类选择器方法类似    用id来命名
通配符选择器：* {}


CSS字体属性
3.1    font-family 设置字体  大小，粗细，和文字样式
3.2    font-size  设置字体大小
3.3    font-weight  字体粗细
3.4    font-style   字体倾斜

CSS文本属性
1.文本颜色：color
2.对齐文本：text-align：left right center
3.装饰文本：text-decoration：none（默认） underline（下划线） overline（上划线） line-through（删除线）
4.文本缩进：text-indent：2em  将首行文章空出两个字的空间
5.行间距：line-height

CSS复合选择器
伪类选择器： ①a:link {} 选择所有未被访问的链接
                     ②a:visited {}   选择所有已被访问的链接
                     ③a:hover  {}  选择鼠标指针位于其上的链接
                     ④ a:active {}   选择活动链接

元素显示模式转换：转换为块元素：display:block；
                                 转换为行内元素：display:inline;
                                 转换为行内块元素：display:inline-block;

PS:使文字在盒子里垂直居中，设置line-height=盒子高度

CSS
1.背景颜色：background-color：transparent（透明的）
2.背景图片：background-image:url()
3.背景平铺：background-repeat：no-repeat/repeat
4.背景图片位置：background-position：x y
5.背景色半透明：background：rgba（0，0，0，0.3）