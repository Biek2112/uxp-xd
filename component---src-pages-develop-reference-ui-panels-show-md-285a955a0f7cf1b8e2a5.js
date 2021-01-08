(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{cdHU:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return p})),t.d(n,"default",(function(){return i}));var a=t("wx14"),o=t("zLVn"),c=(t("q1tI"),t("7ljp")),l=t("ndZU"),p=(t("qKvR"),{}),d={_frontmatter:p},r=l.a;function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.mdx)(r,Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"panel-show-callback"},"Panel show() callback"),Object(c.mdx)("p",null,"The ",Object(c.mdx)("inlineCode",{parentName:"p"},"show()")," function is the one lifecycle method in ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/structure/handlers/#panel"}),"panel objects")," that is ",Object(c.mdx)("strong",{parentName:"p"},"required"),". XD calls ",Object(c.mdx)("inlineCode",{parentName:"p"},"show()")," each time the user opens your panel."),Object(c.mdx)("p",null,"To populate the panel with UI elements, add DOM nodes to the ",Object(c.mdx)("inlineCode",{parentName:"p"},"event.node")," root node that is provided. There are two ways you can use ",Object(c.mdx)("inlineCode",{parentName:"p"},"show()")," to create your panel UI:"),Object(c.mdx)("h3",{id:"recreate-panel-on-each-show"},"Recreate panel on each show()"),Object(c.mdx)("p",null,"For simple panels, you can create the panel UI each time it's shown and throw it away each time it's hidden:"),Object(c.mdx)("p",null,"Here is a simple example:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function show(event) {\n  const content = "<p>Hello, World</p>";\n  const panel = document.createElement("div");\n  panel.innerHTML = content;\n\n  event.node.appendChild(panel);\n}\n\nfunction hide(event) {\n  event.node.firstChild.remove();\n}\n')),Object(c.mdx)("h3",{id:"create-panel-on-first-show-then-reuse"},"Create panel on first show(), then reuse"),Object(c.mdx)("p",null,"For panels with more complex state, it may be simpler to continue reusing the same panel DOM nodes:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let panel;\n\nfunction show(event) {\n  if (panel) { return; }\n\n  const content = "<p>Hello, World</p>";\n  panel = document.createElement("div");\n  panel.innerHTML = content;\n\n  event.node.appendChild(panel);\n}\n\nfunction hide(event) {\n  // nothing to do here\n}\n')),Object(c.mdx)("p",null,"Note: once the panel has been created you don't need to touch the DOM at all for hide & show to work correctly -- XD takes care of closing and reopening the panel UI's container automatically."),Object(c.mdx)("h3",{id:"panel-content-updating"},"Panel content updating"),Object(c.mdx)("p",null,"Whichever method you use, you'll typically also need to implement the ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/ui/panels/update/"}),"update() callback")," in order to update your panel UI if the selection or XD document content changes while the panel is already open."))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-ui-panels-show-md-285a955a0f7cf1b8e2a5.js.map