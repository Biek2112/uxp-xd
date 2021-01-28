(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"4zDa":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return i}));var a=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),p=n("ndZU"),s=(n("qKvR"),{}),c={_frontmatter:s},d=p.a;function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.mdx)(d,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"the-api-environment"},"The API environment"),Object(r.mdx)("p",null,"If you're used to writing JavaScript for web pages or Node.js servers, there are some things to know about the JavaScript environment when creating XD plugins."),Object(r.mdx)("h2",{id:"not-a-browser-and-not-nodejs"},"Not a browser and not Node.js"),Object(r.mdx)("p",null,"While it may feel like it, the XD plugin API environment is not a browser, nor is it Node.js. This means that you shouldn't make assumptions about what APIs are available based on your experience in other JavaScript environments."),Object(r.mdx)("p",null,"However, we do follow standards for API surfaces where appropriate. For example, you'll find our implementation of ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/reference/uxp/class/XMLHttpRequest/"}),Object(r.mdx)("inlineCode",{parentName:"a"},"XMLHttpRequest"))," to work as you would expect."),Object(r.mdx)("p",null,"In some cases, we follow standards, but only support a ",Object(r.mdx)("em",{parentName:"p"},"subset")," of features you might expect in a browser. As an example, see our document on ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/reference/uxp/namespace/css/"}),"CSS support"),"."),Object(r.mdx)("h2",{id:"accessing-global-apis"},"Accessing global APIs"),Object(r.mdx)("p",null,"Supported APIs that you would expect as window globals in other enviroments are also available as globals in XD. Examples include ",Object(r.mdx)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"fetch"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"WebSocket"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"document"),", and more."),Object(r.mdx)("p",null,"Example:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let req = new XMLHttpRequest();\n")),Object(r.mdx)("p",null,"APIs that are specific to XD are reachable via ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/javascript-and-xd/javascript-support/#can-i-use-require"}),"the ",Object(r.mdx)("inlineCode",{parentName:"a"},"require")," method"),". Examples include ",Object(r.mdx)("inlineCode",{parentName:"p"},"scenegraph"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"application"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"uxp"),", and more."),Object(r.mdx)("p",null,"Example:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const { Text, Color } = require("scenegraph");\n')))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-javascript-and-xd-environment-md-6a75bc3a7ed8b50703be.js.map