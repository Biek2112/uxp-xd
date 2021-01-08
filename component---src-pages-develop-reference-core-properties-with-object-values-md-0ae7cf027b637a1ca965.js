(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{oZr1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));var o=n("wx14"),r=n("zLVn"),a=(n("q1tI"),n("7ljp")),c=n("ndZU"),i=(n("qKvR"),{}),p={_frontmatter:i},l=c.a;function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.mdx)(l,Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"properties-with-object-values"},"Properties with object values"),Object(a.mdx)("p",null,"Some scenegraph properties have values that are not simple primitive types (e.g. numbers), but rather are objects with sub-properties of\ntheir own. In order to update the document with changes, you must invoke the top-level setter on the ",Object(a.mdx)("em",{parentName:"p"},"scenenode object")," itself ","–",'\nchanging properties on the object value "inline" will not result in an update.'),Object(a.mdx)("p",null,"For example:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Right:\nlet color = node.fill;\ncolor.r = 0x80;\nnode.fill = color;  // update fill in the scenegraph by kicking the node's setter\n\n// Wrong - document will not update:\nnode.color.r = 0x80;\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-core-properties-with-object-values-md-0ae7cf027b637a1ca965.js.map