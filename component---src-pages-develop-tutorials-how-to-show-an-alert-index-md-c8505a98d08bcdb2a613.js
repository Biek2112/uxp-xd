(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{WNSB:function(e,t,a){e.exports=a.p+"static/OurAlert-dee11bf2e29b669a670776933882c2a7.png"},fr0f:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));var n=a("wx14"),l=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("ndZU"),i=(a("qKvR"),{}),s={_frontmatter:i},d=r.a;function c(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(o.mdx)(d,Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"how-to-show-an-alert"},"How to show an alert"),Object(o.mdx)("p",null,"There will be times when you need to show a simple message to your user. This tutorial will show you an easy way to display an informational message like the following:"),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"A typical alert message",src:a("WNSB")})),Object(o.mdx)("p",null,"Other times you'll need to display an ",Object(o.mdx)("em",{parentName:"p"},"error")," alert, which looks like this:"),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"An error alert",src:a("nypj")})),Object(o.mdx)("h2",{id:"technology-used"},"Technology Used"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/AdobeXD/plugin-toolkit"}),"Plugin Toolkit"))),Object(o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, and JavaScript."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"/uxp-xd/tutorials/debugging/"}),"Debugging Tutorial"))),Object(o.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/AdobeXD/plugin-samples/tree/master/how-to-display-an-alert"}),"on GitHub"),".")),Object(o.mdx)("h3",{id:"1-prepare-your-manifestjson-file"},"1. Prepare your manifest.json file"),Object(o.mdx)("p",null,"First, edit the manifest file for the plugin you created in our ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start"}),"Quick Start Tutorial"),"."),Object(o.mdx)("p",null,"Replace the ",Object(o.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field of the manifest with the following:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"uiEntryPoints": [\n    {\n      "type": "menu",\n      "label": "How to show an alert",\n      "commandId": "showAlert"\n    },\n    {\n      "type": "menu",\n      "label": "How to show an error",\n      "commandId": "showError"\n    }\n  ]\n')),Object(o.mdx)("p",null,"If you're curious about what each entry means, ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(o.mdx)("h3",{id:"2-add-the-plugin-helpers-library"},'2. Add the "plugin helpers" library'),Object(o.mdx)("p",null,'Creating dialogs can take a lot of boilerplate code, but we\'ve created a small library that makes it simple to display simple dialogs in the form of a "helper" library. This library is located at ',Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/AdobeXD/plugin-toolkit"}),"https://github.com/AdobeXD/plugin-toolkit"),"."),Object(o.mdx)("p",null,"To add the library to your project, you can:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},'Click the "Clone or Download" button on the right side of the page'),Object(o.mdx)("li",{parentName:"ul"},"Uncompress the zip file after the download completes"),Object(o.mdx)("li",{parentName:"ul"},"Copy the ",Object(o.mdx)("inlineCode",{parentName:"li"},"lib")," folder to your plugin project")),Object(o.mdx)("h3",{id:"3-require-the-dialogs-module-in-mainjs"},"3. Require the ",Object(o.mdx)("inlineCode",{parentName:"h3"},"dialogs")," module in ",Object(o.mdx)("inlineCode",{parentName:"h3"},"main.js")),Object(o.mdx)("p",null,"Add the following to your ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.js"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const { alert, error } = require("./lib/dialogs.js");\n')),Object(o.mdx)("p",null,"This will import a ",Object(o.mdx)("inlineCode",{parentName:"p"},"alert")," function that we can call to display an alert. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"error")," function can be used to display the error variation."),Object(o.mdx)("h3",{id:"4-create-a-function-to-display-the-alert"},"4. Create a function to display the alert"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"async function showAlert() {\n  /* we'll display a dialog here */\n}\n")),Object(o.mdx)("p",null,"Next, inside this function, we call ",Object(o.mdx)("inlineCode",{parentName:"p"},"alert")," to render the message. This function takes several parameters:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"The dialog's title"),Object(o.mdx)("li",{parentName:"ol"},"The text you want to display to the user in the dialog's body -- you can pass as many lines of text as you want (but be careful: dialogs won't scroll automatically!)")),Object(o.mdx)("p",null,"Let's see what that looks like in code:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'await alert(\n  "Connect to the Internet", //[1]\n  "In order to function correctly, this plugin requires access to the Internet. Please connect to a network that has Internet access."\n); //[2]\n')),Object(o.mdx)("h3",{id:"5-create-a-function-to-display-an-error-alert"},"5. Create a function to display an error alert"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"async function showError() {\n  /* we'll display a dialog here */\n}\n")),Object(o.mdx)("p",null,"Inside this function, we call ",Object(o.mdx)("inlineCode",{parentName:"p"},"error")," to render the message. Just like ",Object(o.mdx)("inlineCode",{parentName:"p"},"alert"),", this function takes several parameters:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"The dialog's title"),Object(o.mdx)("li",{parentName:"ol"},"The text you want to display to the user in the dialog's body -- you can pass as many lines of text as you want (but be careful: dialogs won't scroll automatically!)")),Object(o.mdx)("p",null,"Let's see what that looks like in code:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'await error(\n  "Synchronization Failed", //[1]\n  "Failed to synchronize all your changes with our server. Some changes may have been lost.",\n  "Steps you can take:",\n  "* Save your document",\n  "* Check your network connection",\n  "* Try again in a few minutes"\n); //[2]\n')),Object(o.mdx)("p",null,"Note that the we passed several lines of text to ",Object(o.mdx)("inlineCode",{parentName:"p"},"error"),", including some markdown-like list items. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"dialogs")," module understands a very limited subset of markdown; for more see the ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/AdobeXD/plugin-toolkit"}),"Plugin Toolkit"),"."),Object(o.mdx)("h3",{id:"6-create-the-menu-handler"},"6. Create the menu handler"),Object(o.mdx)("p",null,"We need to export a menu handler from the ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.js")," file so that XD knows what to do with our plugin:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  commands: {\n    showAlert,\n    showError,\n  },\n};\n")),Object(o.mdx)("p",null,"Make sure to your commands match the manifest's ",Object(o.mdx)("inlineCode",{parentName:"p"},"commandId"),"s written in the first step."),Object(o.mdx)("h2",{id:"guidelines"},"Guidelines"),Object(o.mdx)("p",null,"It's important to know ",Object(o.mdx)("em",{parentName:"p"},"when")," to show an alert because they do obstruct the user's ability to interact with XD. As such, you should follow these guidelines:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Don't"),' display "success" alerts when it\'s obvious that the plugin has been successful.'),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Do"),' display a "success" alert if your plugin\'s operation is completed, but the user would have no way of knowing.'),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Do")," use human-readable language."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Don't")," use technical jargon unless it's language the user is already familiar with.")))}c.isMDXComponent=!0},nypj:function(e,t,a){e.exports=a.p+"static/ErrorAlert-46afd640330b413025ba108e12e0c1bf.png"}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-how-to-show-an-alert-index-md-c8505a98d08bcdb2a613.js.map