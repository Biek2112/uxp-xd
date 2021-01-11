(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{a0SQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n("wx14"),l=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("ndZU"),c=(n("qKvR"),{}),r={_frontmatter:c},d=i.a;function m(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(o.mdx)(d,Object(a.a)({},r,i,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"quick-start-make-your-first-xd-panel-plugin"},"Quick Start: Make your first XD panel plugin"),Object(o.mdx)("p",null,"Let’s walk through creating your first Adobe XD panel plugin together."),Object(o.mdx)("p",null,"We'll keep things simple in this Quick Start tutorial. Once you're done, you'll have a solid grasp of the steps to take when starting to create your own XD panel plugin."),Object(o.mdx)("p",null,"At the end of the tutorial, we'll suggest some next steps for going deeper with the XD plugin APIs."),Object(o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, and JavaScript"),Object(o.mdx)("li",{parentName:"ul"},"A text editor to write your code in (like VSCode, Sublime Text, Brackets, Atom, etc)")),Object(o.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/quick-start-panel"}),"on GitHub"),".")),Object(o.mdx)("h3",{id:"0-get-a-plugin-id-from-the-adobe-developer-console"},"0. Get a plugin ID from the Adobe Developer Console"),Object(o.mdx)("p",null,"Before you start, you'll want to create a plugin project on the Adobe Developer Console."),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://console.adobe.io/projects"}),"Go to the Adobe Developer Console and sign in or sign up")),Object(o.mdx)("li",{parentName:"ol"},'Click "Create Empty Project"'),Object(o.mdx)("li",{parentName:"ol"},'Create a plugin project by clicking "Add XD Plugin"'),Object(o.mdx)("li",{parentName:"ol"},"Give it a project name. Note that this project name is not public; it is only visible to you and can be changed directly on the Console later."),Object(o.mdx)("li",{parentName:"ol"},'On the following page, get the 8-character unique plugin ID in the "Plugin Details" section.'),Object(o.mdx)("li",{parentName:"ol"},"Optionally on the same page, download the starter project, which contains a functioning Hello, World sample plugin.")),Object(o.mdx)("p",null,"We'll use your plugin ID in one of the next steps."),Object(o.mdx)("h3",{id:"1-identify-where-your-plugins-are-located"},"1. Identify where your plugins are located"),Object(o.mdx)("p",null,"Adobe XD loads plugins that are in development from a ",Object(o.mdx)("inlineCode",{parentName:"p"},"develop")," folder in a specific location on your machine. To get to that folder, simply go to this menu item: ",Object(o.mdx)("em",{parentName:"p"},"Plugins > Development > Show Develop Folder"),"."),Object(o.mdx)("p",null,"This will open the ",Object(o.mdx)("inlineCode",{parentName:"p"},"develop")," folder, which we'll use in the next step."),Object(o.mdx)("h3",{id:"2-create-your-plugin-scaffold"},"2. Create your plugin scaffold"),Object(o.mdx)("p",null,"Next, you'll need to make a new folder within the ",Object(o.mdx)("inlineCode",{parentName:"p"},"develop")," folder to store the plugin files that you'll create below. Name your new plugin folder anything you like."),Object(o.mdx)("p",null,"Now, let's create your plugin files. Open your favorite text editor and create two files inside of your new plugin folder with these ",Object(o.mdx)("em",{parentName:"p"},"exact")," names:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("inlineCode",{parentName:"li"},"manifest.json"))),Object(o.mdx)("p",null,"This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on."),Object(o.mdx)("p",null,"<<<<<<< HEAD"),Object(o.mdx)("h1",{id:"learn-about-the-manifest-here"},Object(o.mdx)("a",Object(a.a)({parentName:"h1"},{href:"/uxp-xd/develop/reference/structure/manifest/"}),"Learn about the manifest here"),"."),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"}),"Learn about the manifest here"),"."),Object(o.mdx)("blockquote",null,Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("p",{parentName:"blockquote"},"main")))))))),Object(o.mdx)("ol",{start:2},Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("inlineCode",{parentName:"li"},"main.js"))),Object(o.mdx)("p",null,"This file contains your JavaScript code that implements your plugin's functionality."),Object(o.mdx)("p",null,"<<<<<<< HEAD"),Object(o.mdx)("h1",{id:"learn-more-about-mainjs-here"},Object(o.mdx)("a",Object(a.a)({parentName:"h1"},{href:"/uxp-xd/develop/reference/structure/handlers/"}),"Learn more about ",Object(o.mdx)("inlineCode",{parentName:"a"},"main.js")," here"),"."),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/"}),"Learn more about ",Object(o.mdx)("inlineCode",{parentName:"a"},"main.js")," here"),"."),Object(o.mdx)("blockquote",null,Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("p",{parentName:"blockquote"},"main")))))))),Object(o.mdx)("p",null,"These two files go into your plugin's parent directory. When you have the right structure, it will look like this:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{}),"my-plugin-folder\n├── main.js\n└── manifest.json\n")),Object(o.mdx)("p",null,"It's possible to have more files if you want, but these files are the bare minimum requirement for your plugin to work, and are all we'll need for this Quick Start tutorial."),Object(o.mdx)("h3",{id:"3-create-your-plugins-manifest"},"3. Create your plugin’s manifest"),Object(o.mdx)("p",null,"In the previous step, you created a file named ",Object(o.mdx)("inlineCode",{parentName:"p"},"manifest.json"),". Open that file and paste in this JSON object:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "YOUR_ID_HERE",\n  "name": "Enlarge a Rectangle",\n  "version": "0.0.1",\n  "description": "Description of your plugin.",\n  "summary": "Summary of your plugin",\n  "languages": ["en"],\n  "author": "Your Name",\n  "helpUrl": "https://mywebsite.com/help",\n  "host": {\n    "app": "XD",\n    "minVersion": "18.0"\n  },\n  "uiEntryPoints": [\n    {\n      "type": "panel",\n      "label": "Enlarge a Rectangle",\n      "panelId": "enlargeRectangle"\n    }\n  ]\n}\n')),Object(o.mdx)("p",null,"Be sure to replace the ",Object(o.mdx)("inlineCode",{parentName:"p"},"id")," value with the unique plugin ID you got from the Adobe Developer Console in the first step:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"id": "1234ABCD",\n')),Object(o.mdx)("p",null,"<<<<<<< HEAD"),Object(o.mdx)("h1",{id:"if-youre-curious-about-what-each-entry-means-see-the-manifest-documentation-where-you-can-also-learn-about-all-manifest-requirements-for-a-plugin-to-be-published-in-the-xd-plugin-manager"},"If you're curious about what each entry means, ",Object(o.mdx)("a",Object(a.a)({parentName:"h1"},{href:"/uxp-xd/develop/reference/structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(o.mdx)("p",null,"If you're curious about what each entry means, ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(o.mdx)("blockquote",null,Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("blockquote",{parentName:"blockquote"},Object(o.mdx)("p",{parentName:"blockquote"},"main")))))))),Object(o.mdx)("p",null,"The value of the ",Object(o.mdx)("inlineCode",{parentName:"p"},"panelId")," property may be any string; in this case, it's ",Object(o.mdx)("inlineCode",{parentName:"p"},"enlargeRectangle"),". In the next section, we will see how this string is associated with the code for our plugin."),Object(o.mdx)("h3",{id:"4-create-your-plugins-code"},"4. Create your plugin’s code"),Object(o.mdx)("p",null,"Next, we need to create the JavaScript code for our plugin. The code lives in a file named ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.js"),", which we created in step #2."),Object(o.mdx)("h4",{id:"create-a-scaffold"},"Create a scaffold"),Object(o.mdx)("p",null,"Let's create some empty functions first. Copy and paste this code into ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.js"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function create() {}\n\nfunction show(event) {}\n\nfunction update(selection) {}\n\nmodule.exports = {\n  panels: {\n    enlargeRectangle: {\n      show,\n      update,\n    },\n  },\n};\n")),Object(o.mdx)("p",null,"Now, let's look at each function in detail, starting with a ",Object(o.mdx)("inlineCode",{parentName:"p"},"create")," helper function that we'll use to build our UI."),Object(o.mdx)("h4",{id:"create-the-ui"},"Create the UI"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"create")," function is just a helper function we'll make to help us get started. It is going to create an HTML ",Object(o.mdx)("inlineCode",{parentName:"p"},"panel")," element, insert our markup, and add a click event listener. The function returns our UI in code, but does not display it (we'll get to that next):"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let panel;\n\nfunction create() {\n  // [1]\n  const html = `\n<style>\n    .break {\n        flex-wrap: wrap;\n    }\n    label.row > span {\n        color: #8E8E8E;\n        width: 20px;\n        text-align: right;\n        font-size: 9px;\n    }\n    label.row input {\n        flex: 1 1 auto;\n    }\n    form {\n        width:90%;\n        margin: -20px;\n        padding: 0px;\n    }\n    .show {\n        display: block;\n    }\n    .hide {\n        display: none;\n    }\n</style>\n\n<form method="dialog" id="main">\n    <div class="row break">\n        <label class="row">\n            <span>↕︎</span>\n            <input type="number" uxp-quiet="true" id="txtV" value="10" placeholder="Height" />\n        </label>\n        <label class="row">\n            <span>↔︎</span>\n            <input type="number" uxp-quiet="true" id="txtH" value="10" placeholder="Width" />\n        </label>\n    </div>\n    <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>\n</form>\n\n<p id="warning">This plugin requires you to select a rectangle in the document. Please select a rectangle.</p>\n`;\n\n  function increaseRectangleSize() {\n    // [2]\n    const { editDocument } = require("application"); // [3]\n    const height = Number(document.querySelector("#txtV").value); // [4]\n    const width = Number(document.querySelector("#txtH").value); // [5]\n\n    // [6]\n    editDocument({ editLabel: "Increase rectangle size" }, function (\n      selection\n    ) {\n      const selectedRectangle = selection.items[0]; // [7]\n      selectedRectangle.width += width; // [8]\n      selectedRectangle.height += height;\n    });\n  }\n\n  panel = document.createElement("div"); // [9]\n  panel.innerHTML = html; // [10]\n  panel.querySelector("form").addEventListener("submit", increaseRectangleSize); // [11]\n\n  return panel; // [12]\n}\n')),Object(o.mdx)("p",null,"This code does the following:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Creates a ",Object(o.mdx)("inlineCode",{parentName:"li"},"const")," called ",Object(o.mdx)("inlineCode",{parentName:"li"},"html")," for your UI markup, including elements for ",Object(o.mdx)("inlineCode",{parentName:"li"},"style"),", ",Object(o.mdx)("inlineCode",{parentName:"li"},"form"),", and so on. The ",Object(o.mdx)("inlineCode",{parentName:"li"},"form")," tag contains a ",Object(o.mdx)("inlineCode",{parentName:"li"},"div")," which includes two text input fields and a ",Object(o.mdx)("inlineCode",{parentName:"li"},"footer")," which has a button for users to click on. The ",Object(o.mdx)("inlineCode",{parentName:"li"},"p")," tag contains warning text which is used to warn users when they select a non-rectangle node inside the active XD document."),Object(o.mdx)("li",{parentName:"ol"},"Creates a nested function called ",Object(o.mdx)("inlineCode",{parentName:"li"},"increaseRectangleSize"),"."),Object(o.mdx)("li",{parentName:"ol"},"Gets a reference to the ",Object(o.mdx)("inlineCode",{parentName:"li"},"editDocument")," method available in the ",Object(o.mdx)("inlineCode",{parentName:"li"},"application")," module."),Object(o.mdx)("li",{parentName:"ol"},'Gets user input value from the "height" input element.'),Object(o.mdx)("li",{parentName:"ol"},'Gets user input value from the "width" input element.'),Object(o.mdx)("li",{parentName:"ol"},"Makes a request XD to manipulate the active document by using the ",Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/develop/reference/application/"}),Object(o.mdx)("inlineCode",{parentName:"a"},"editDocument"))," method."),Object(o.mdx)("li",{parentName:"ol"},"Gets the first currently selected node. (Some UI logic will be added later to ensure this is a rectangle.)"),Object(o.mdx)("li",{parentName:"ol"},"Modifies the ",Object(o.mdx)("inlineCode",{parentName:"li"},"width")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"height")," of the selected rectangle."),Object(o.mdx)("li",{parentName:"ol"},"Creates a ",Object(o.mdx)("inlineCode",{parentName:"li"},"div")," element to serve as a container for your panel UI."),Object(o.mdx)("li",{parentName:"ol"},"Attaches the HTML created in step #1."),Object(o.mdx)("li",{parentName:"ol"},"Adds a submit listener for the ",Object(o.mdx)("inlineCode",{parentName:"li"},"form")," element, attaching the ",Object(o.mdx)("inlineCode",{parentName:"li"},"increaseRectangleSize")," function created in step #2."),Object(o.mdx)("li",{parentName:"ol"},"Returns the panel UI container to be used in the next step.")),Object(o.mdx)("h4",{id:"show-the-ui"},"Show the UI"),Object(o.mdx)("p",null,"Next, let's look at the ",Object(o.mdx)("inlineCode",{parentName:"p"},"show")," function. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"show")," function is one of the ",Object(o.mdx)("em",{parentName:"p"},"lifecycle methods")," for a panel plugin, and the only one that is required. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"show")," function is called when your plugin is made visible to the user."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function show(event) {\n  // [1]\n  if (!panel) event.node.appendChild(create()); // [2]\n}\n")),Object(o.mdx)("p",null,"This code does the following:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"The ",Object(o.mdx)("inlineCode",{parentName:"li"},"show")," lifecycle method gives you access to an ",Object(o.mdx)("inlineCode",{parentName:"li"},"event")," argument which includes a ",Object(o.mdx)("inlineCode",{parentName:"li"},"node")," property that you can attach your user interface to."),Object(o.mdx)("li",{parentName:"ol"},"Adds the panel UI container returned from the ",Object(o.mdx)("inlineCode",{parentName:"li"},"create")," helper function to ",Object(o.mdx)("inlineCode",{parentName:"li"},"event.node")," if ",Object(o.mdx)("inlineCode",{parentName:"li"},"panel")," does not exist in the dom already.")),Object(o.mdx)("p",null,"You can also optionally provide a ",Object(o.mdx)("inlineCode",{parentName:"p"},"hide")," lifecycle method for your panel, but we don't need to for this example."),Object(o.mdx)("h4",{id:"update-your-ui"},"Update your UI"),Object(o.mdx)("p",null,"The last lifecycle method, ",Object(o.mdx)("inlineCode",{parentName:"p"},"update"),", is an optional function which is called whenever the user changes the selection in the XD document or mutates a node within that selection. A mutation can be anything, including moves, resizes, etc."),Object(o.mdx)("p",null,"We'll look at this code below:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function update(selection) {\n  // [1]\n  const { Rectangle } = require("scenegraph"); // [2]\n\n  const form = document.querySelector("form"); // [3]\n  const warning = document.querySelector("#warning"); // [4]\n\n  if (!selection || !(selection.items[0] instanceof Rectangle)) {\n    // [5]\n    form.className = "hide";\n    warning.className = "show";\n  } else {\n    form.className = "show";\n    warning.className = "hide";\n  }\n}\n')),Object(o.mdx)("p",null,"This code does the following:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Uses the ",Object(o.mdx)("inlineCode",{parentName:"li"},"selection")," argument. ",Object(o.mdx)("inlineCode",{parentName:"li"},"update")," provides two arguments, ",Object(o.mdx)("inlineCode",{parentName:"li"},"selection")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"documentRoot"),". This example only uses ",Object(o.mdx)("inlineCode",{parentName:"li"},"selection"),"."),Object(o.mdx)("li",{parentName:"ol"},"Gets a reference to the ",Object(o.mdx)("inlineCode",{parentName:"li"},"Rectangle")," object imported from the ",Object(o.mdx)("inlineCode",{parentName:"li"},"scenegraph")," module."),Object(o.mdx)("li",{parentName:"ol"},"Gets a reference to the ",Object(o.mdx)("inlineCode",{parentName:"li"},"form")," element in your HTML."),Object(o.mdx)("li",{parentName:"ol"},"Gets a reference to the ",Object(o.mdx)("inlineCode",{parentName:"li"},"p")," element with the warning message in your HTML."),Object(o.mdx)("li",{parentName:"ol"},"Checks if the user has selected anything and if the selection is a rectangle. If this validation passes, the form appears and the warning message is not shown. If not, the warning message is shown to the user and the form disappears.")),Object(o.mdx)("h4",{id:"export-your-lifecycle-methods"},"Export your lifecycle methods"),Object(o.mdx)("p",null,"Finally, you need to export the panel lifecycle methods you created:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  panels: {\n    enlargeRectangle: {\n      show,\n      update,\n    },\n  },\n};\n")),Object(o.mdx)("p",null,"The above code exports an object with a ",Object(o.mdx)("inlineCode",{parentName:"p"},"panels")," property. The value of ",Object(o.mdx)("inlineCode",{parentName:"p"},"panels")," is also an object with a property that matches the ",Object(o.mdx)("inlineCode",{parentName:"p"},"panelId")," from your manifest, in this case ",Object(o.mdx)("inlineCode",{parentName:"p"},"enlargeRectangle"),"."),Object(o.mdx)("p",null,"Finally, ",Object(o.mdx)("inlineCode",{parentName:"p"},"enlargeRectangle")," is an object containing your panel lifecycle methods. Note that the ",Object(o.mdx)("inlineCode",{parentName:"p"},"show")," lifecycle methods is required for all panel plugins, while the ",Object(o.mdx)("inlineCode",{parentName:"p"},"hide")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"update")," methods are optional."),Object(o.mdx)("h3",{id:"5-run-your-plugin"},"5. Run your plugin"),Object(o.mdx)("p",null,"So you’ve written a plugin! How do we run it?"),Object(o.mdx)("p",null,"If you haven’t already done so, launch XD and open a new document. Then navigate to the ",Object(o.mdx)("em",{parentName:"p"},"Plugins > Enlarge a Rectangle")," menu item. This will open your panel in the plugin launchpad on the left-hand side of the XD application."),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"A panel with input boxes and a button",src:n("eEvT")})),Object(o.mdx)("p",null,"Congratulations! You’ve built your first panel plugin for Adobe XD!"))}m.isMDXComponent=!0},eEvT:function(e,t,n){e.exports=n.p+"static/panel-success-71842b6bddcccb5065283d85d59373ae.png"}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-quick-start-panel-index-md-8ba91c94f9e79205bd80.js.map