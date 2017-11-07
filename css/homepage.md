//Buttons
//
//Styleguide 1

/*
square

四角形のボタン

Markup:
<button class="btn {{modifier_class}}">Button</button>

.btn-primary - 主要ボタン
.btn-safety - 安全ボタン
.btn-danger - 危険ボタン

Styleguide 1.1
*/


/*
circle

円形のボタン

Markup:
<button class="btn {{modifier_class}} btn-circle">Button</button>

.btn-primary - 主要ボタン
.btn-safety - 安全ボタン
.btn-danger - 危険ボタン

Styleguide 1.2
*/

@import "setting/setting";

.btn,
.btn > a {
	text-decoration: none;
	display: inline-block;
	padding: 0.3em 1.7em;
	border: none;
	color: #fff;
}
