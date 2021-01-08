(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{FAxu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("ndZU"),r=(n("qKvR"),{}),c={_frontmatter:r},d=l.a;function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.mdx)(d,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"asking-the-user-for-confirmation"},"Asking the user for confirmation"),Object(o.mdx)("p",null,"There are many times when a plugin will need to ask the user whether or not it should proceed with a given course of action. This tutorial will show you an easy way to get user confirmation before proceeding with a task."),Object(o.mdx)("h2",{id:"technology-used"},"Technology Used"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/AdobeXD/plugin-toolkit"}),"Plugin Toolkit"))),Object(o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, and JavaScript."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/debugging/"}),"Debugging Tutorial"))),Object(o.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/ui-dialog-variations"}),"on GitHub"),".")),Object(o.mdx)("h3",{id:"1-prepare-your-manifestjson-file"},"1. Prepare your manifest.json file"),Object(o.mdx)("p",null,"First, edit the manifest file for the plugin you created in our ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial"),"."),Object(o.mdx)("p",null,"Replace the ",Object(o.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field of the manifest with the following:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "Confirmation",\n        "commandId": "showConfirm"\n    }\n]\n')),Object(o.mdx)("p",null,"If you're curious about what each entry means, ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(o.mdx)("h3",{id:"2-add-the-plugin-helpers-library"},'2. Add the "plugin helpers" library'),Object(o.mdx)("p",null,'Creating dialogs can take a lot of boilerplate code, but we\'ve created a small library that makes it simple to display simple dialogs in the form of a "helper" library. This library is located at ',Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AdobeXD/plugin-toolkit"}),"https://github.com/AdobeXD/plugin-toolkit"),"."),Object(o.mdx)("p",null,"To add the library to your project, you can:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},'Click the "Clone or Download" button on the right side of the page'),Object(o.mdx)("li",{parentName:"ul"},"Uncompress the zip file after the download completes"),Object(o.mdx)("li",{parentName:"ul"},"Copy the ",Object(o.mdx)("inlineCode",{parentName:"li"},"lib")," folder to your plugin project")),Object(o.mdx)("h3",{id:"3-require-the-dialogs-module-in-mainjs"},"3. Require the ",Object(o.mdx)("inlineCode",{parentName:"h3"},"dialogs")," module in ",Object(o.mdx)("inlineCode",{parentName:"h3"},"main.js")),Object(o.mdx)("p",null,"Add the following to your ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.js"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const { confirm } = require("./lib/dialogs.js");\n')),Object(o.mdx)("p",null,"This will import a ",Object(o.mdx)("inlineCode",{parentName:"p"},"confirm")," function that we can call to display a confirmation dialog."),Object(o.mdx)("h3",{id:"4-create-a-function-to-display-the-confirmation"},"4. Create a function to display the confirmation"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"async function showConfirm() {\n  /* we'll display a dialog here */\n}\n")),Object(o.mdx)("p",null,"Next, inside this function, we call ",Object(o.mdx)("inlineCode",{parentName:"p"},"confirm")," to actually show the confirmation dialog. ",Object(o.mdx)("inlineCode",{parentName:"p"},"confirm")," takes three arguments:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"The dialog's title"),Object(o.mdx)("li",{parentName:"ol"},"The text you want to display to the user in the dialog's body"),Object(o.mdx)("li",{parentName:"ol"},"The two buttons from which you want the user to choose (A confirmation dialog can only have two buttons)")),Object(o.mdx)("p",null,"Let's see what that looks like in code:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const feedback = await confirm(\n  "Enable Smart Filters?", //[1]\n  "Smart filters are nondestructive and will preserve your original images.", //[2]\n  ["Cancel", "Enable"] /*[3]*/\n);\n')),Object(o.mdx)("p",null,'Note that the third argument is an array of strings. These identify the names of the two buttons that will display in the confirmation dialog. These are given in the order they would appear on a macOS machine, which means that the "cancel" or negative button is listed first, and the "ok" or acceptance button is listed last.'),Object(o.mdx)("h3",{id:"5-react-to-which-button-was-pressed"},"5. React to which button was pressed"),Object(o.mdx)("p",null,"When the dialog is closed, some useful information about which button was pressed will be provided. You can access this using the ",Object(o.mdx)("inlineCode",{parentName:"p"},"which")," property on the ",Object(o.mdx)("inlineCode",{parentName:"p"},"feedback")," variable (return value from ",Object(o.mdx)("inlineCode",{parentName:"p"},"confirm"),")."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"switch (feedback.which) {\n  case 0:\n    /* User canceled */\n    break;\n  case 1:\n    /* User clicked Enable */\n    break;\n}\n")),Object(o.mdx)("p",null,"As you can see, the value of ",Object(o.mdx)("inlineCode",{parentName:"p"},"which")," maps to the buttons as specified when calling ",Object(o.mdx)("inlineCode",{parentName:"p"},"confirm"),". So ",Object(o.mdx)("inlineCode",{parentName:"p"},"0"),' is the "Cancel" button and ',Object(o.mdx)("inlineCode",{parentName:"p"},"1"),' is the "Enable" button.'),Object(o.mdx)("h3",{id:"6-create-the-menu-handler"},"6. Create the menu handler"),Object(o.mdx)("p",null,"We need to export a menu handler from the ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.js")," file so that XD knows what to do with our plugin:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  commands: {\n    showConfirm,\n  },\n};\n")),Object(o.mdx)("p",null,"Make sure to your commands match the manifest's ",Object(o.mdx)("inlineCode",{parentName:"p"},"commandId"),"s written in the first step."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-how-to-ask-user-for-confirmation-index-md-e3ac7dfaadff1ba8ed22.js.map