(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{i4xc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return i}));var a=n("wx14"),r=n("zLVn"),m=(n("q1tI"),n("7ljp")),d=n("ndZU"),o=(n("qKvR"),{}),l={_frontmatter:o},c=d.a;function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(m.mdx)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"viewport"},"viewport"),Object(m.mdx)("p",null,"The ",Object(m.mdx)("inlineCode",{parentName:"p"},"viewport")," module represents the current UI view of the XD document's content."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example")),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Pan viewport to bring the region x:100, y:200, width:50, height:50 into view\nviewport.scrollIntoView(100, 200, 50, 50);\n\n// Pan view to the first selected object\nif (selection.items.length > 0) {\n  viewport.scrollIntoView(selection.items[0]);\n}\n\n// Pan view to center the location x:100, y:200\nviewport.scrollToCenter(100, 200);\n\n// Zoom & pan to show entire region x:100, y:200, width:50, height:50\nviewport.zoomToRect(100, 200, 50, 50);\n\nconsole.log("Viewport at:", viewport.bounds); // e.g. "{ x:100, y:50, width:1400, height:900 }"\nconsole.log("Zoom:", viewport.zoomFactor); // e.g. "0.66"\n')),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),Object(m.mdx)("h3",{id:"viewportscrollintoviewnode--x-y-width-height"},"viewport.scrollIntoView(node) | (x, y, width, height)"),Object(m.mdx)("p",null,"Smoothly pan the viewport to bring the entire given region into view. If the region is already fully in view, does\nnothing. If the given region is too large to fit entirely in view, it is simply centered (zoom remains unchanged)."),Object(m.mdx)("p",null,"The region can be defined by passing a SceneNode, or by explicitly specifying a rectangle in global coordinates."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(m.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_viewport"}),Object(m.mdx)("inlineCode",{parentName:"a"},"viewport"))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"viewport.scrollIntoView(node) :")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"node"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"!SceneNode")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"viewport.scrollIntoView(x, y, width, height) :")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"x"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"y"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"width"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"height"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(m.mdx)("h3",{id:"viewportscrolltocenterx-y"},"viewport.scrollToCenter(x, y)"),Object(m.mdx)("p",null,"Smoothly pan the viewport to center on a specific point in the document's global coordinates. Even if the point is\nalready in view, the view pans until it is centered."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(m.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_viewport"}),Object(m.mdx)("inlineCode",{parentName:"a"},"viewport"))),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"x"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"y"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(m.mdx)("h3",{id:"viewportzoomtorectnode--x-y-width-height"},"viewport.zoomToRect(node) | (x, y, width, height)"),Object(m.mdx)("p",null,"Zoom & pan the view as needed so the given region fills the viewport (with some padding). If the region is large, zooms\nout as needed so it fits entirely in view. If the region is smaller, zooms ",Object(m.mdx)("em",{parentName:"p"},"in")," so the region fills the entire viewport -\nmay zoom in past 100% to achieve this."),Object(m.mdx)("p",null,"The region can be defined by passing a SceneNode, or by explicitly specifying a rectangle in global coordinates."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(m.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_viewport"}),Object(m.mdx)("inlineCode",{parentName:"a"},"viewport"))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"viewport.zoomToRect(node) :")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"node"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"!SceneNode")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"viewport.zoomToRect(x, y, width, height) :")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"x"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"y"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"width"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"height"),Object(m.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(m.mdx)("h3",{id:"viewportbounds--xnumber-ynumber-widthnumber-heightnumber"},Object(m.mdx)("em",{parentName:"h3"},"viewport.bounds : ",Object(m.mdx)("inlineCode",{parentName:"em"},"!{x:number, y:number, width:number, height:number}"))),Object(m.mdx)("p",null,"The current viewport bounds expressed in ",Object(m.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/"}),"global coordinates"),"."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(m.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_viewport"}),Object(m.mdx)("inlineCode",{parentName:"a"},"viewport")),"\n",Object(m.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(m.mdx)("h3",{id:"viewportzoomfactor--number"},Object(m.mdx)("em",{parentName:"h3"},"viewport.zoomFactor : ",Object(m.mdx)("inlineCode",{parentName:"em"},"number"))),Object(m.mdx)("p",null,"The current viewport zoom factor (where 1.0 = 100% zoom, 0.5 = 50% zoom, etc.)."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(m.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_viewport"}),Object(m.mdx)("inlineCode",{parentName:"a"},"viewport")),"\n",Object(m.mdx)("strong",{parentName:"p"},"Read only"),": true"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-viewport-md-54c5c00cdb835943bd26.js.map