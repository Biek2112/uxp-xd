(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"2DHD":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return d})),a.d(t,"default",(function(){return o}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("ndZU"),d=(a("qKvR"),{}),m={_frontmatter:d},i=c.a;function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.mdx)(i,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"cloud"},"cloud"),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"cloud")," module lets you get information about shared prototypes and design specs."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Get prototypes data\nconst cloud = require("cloud");\nvar sharedArtifacts = cloud.getSharedArtifacts();\nvar prototypes = sharedArtifacts.filter(\n  (artifact) => artifact.type === cloud.ArtifactType.PROTOTYPE\n);\nprototypes.forEach((artifact) => {\n  console.log("Prototype URL: ", artifact.url);\n});\n')),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Get design specs data\nconst cloud = require("cloud");\nvar sharedArtifacts = cloud.getSharedArtifacts();\nvar specs = sharedArtifacts.filter(\n  (artifact) => artifact.type === cloud.ArtifactType.SPECS\n);\nspecs.forEach((artifact) => {\n  console.log("Design Spec URL: ", artifact.url);\n});\n')),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_cloud"}),"cloud"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_cloud-getSharedArtifacts"}),".getSharedArtifacts()")," ⇒ ",Object(l.mdx)("inlineCode",{parentName:"li"},"!Array.<!PrototypeArtifact|SpecsArtifact>"))))),Object(l.mdx)("h3",{id:"enums"},"Enums"),Object(l.mdx)("dl",null,Object(l.mdx)("dt",null,Object(l.mdx)("a",{name:"ArtifactType"})," ArtifactType : "),Object(l.mdx)("dd",null,"`PROTOTYPE, SPECS` - Type of shared artifact: interactive prototype only, or developer-focused specs view (which may ",Object(l.mdx)("i",null,"also")," include access to an interactive prototype view)"),Object(l.mdx)("dt",null,Object(l.mdx)("a",{name:"TargetPlatform"})," TargetPlatform : "),Object(l.mdx)("dd",null,"`WEB, IOS, ANDROID` - Target platform for published design specs"),Object(l.mdx)("dt",null,Object(l.mdx)("a",{name:"AccessLevel"})," AccessLevel : "),Object(l.mdx)("dd",null,"`LINKABLE, PASSWORD_PROTECTED, INVITE_ONLY` - Access level of the shared link: accessible to anyone with the link, anyone with the link + password, or only specific Creative Cloud user accounts")),Object(l.mdx)("h3",{id:"cloudgetsharedartifacts"},"cloud.getSharedArtifacts()"),Object(l.mdx)("p",null,"Get a list of recently shared artifacts generated from this document.\nOlder artifacts may not be included even if the shared links are still live. Shared links that have\nbeen deleted from the server (File > Manage Published Links) may still be listed here, as this API\nonly provides a record of recent share actions from XD - not what the links' current status on the\nserver may be."),Object(l.mdx)("p",null,"The list may contain a mix of PrototypeArtifact and/or SpecsArtifact, and items are listed in no\nparticular order. If nothing has been shared from this document, an empty array is returned."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_cloud"}),Object(l.mdx)("inlineCode",{parentName:"a"},"cloud"))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"!Array.<!PrototypeArtifact|SpecsArtifact>")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Typedef BaseSharedArtifact")),Object(l.mdx)("p",null,"Properties common to both types."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArtifactType"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of shared artifact")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"url"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL to view in browser")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of shared artifact (often, but not always, matches the document name)")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessLevel"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"AccessLevel"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Level of access protection")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"allowComments"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"True if stakeholders can post comments on this artifact")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Typedef PrototypeArtifact")),Object(l.mdx)("p",null,'Interactive prototype view generated via "Share for Review."'),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"embedURL"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL for embedding a view of the prototype inside an iframe (compact view with minimal surrounding UI)")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"embedWidth"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"iframe width needed to display embedURL. May include room for navigation UI in addition to the prototype's content itself.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"embedHeight"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"iframe height needed to display embedURL. May include room for navigation UI in addition to the prototype's content itself.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"fullscreenInPage"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"True if prototype defaults to a view that fills the entire page, with no surrounding UI visible for navigation, commenting, etc.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"hotspotHints"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"True if clicking in non-interactive parts of the prototype flashes visual hints indicating the interactive spots")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Typedef SpecsArtifact")),Object(l.mdx)("p",null,'Developer-oriented specs view generated via "Share for Development." This may ',Object(l.mdx)("em",{parentName:"p"},"also")," allow viewing the document as an interactive prototype, with default settings (",Object(l.mdx)("inlineCode",{parentName:"p"},"fullscreenInPage: false")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"hotspotHints: true"),")."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"targetPlatform"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"PlatformType"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Target platform. Determines which information and measurement units are shown by default.")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-cloud-md-ca41329f924c295c2b9d.js.map