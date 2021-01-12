(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{Y92r:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("wx14"),o=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("ndZU"),r=(n("qKvR"),{}),d={_frontmatter:r},c=l.a;function m(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(i.mdx)(c,Object(a.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"how-to-style-text"},"How to style text"),Object(i.mdx)("p",null,"Creating styled text in Adobe XD is easy! In this tutorial, we'll show you how to create a text element with a specific color and font size, and also a text element with multiple inline colors."),Object(i.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, and JavaScript"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/debugging/"}),"Debugging Tutorial"))),Object(i.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},Object(i.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-style-text"}),"on GitHub"),".")),Object(i.mdx)("h3",{id:"1-prepare-your-plugin-scaffold"},"1. Prepare your plugin scaffold"),Object(i.mdx)("p",null,"First, edit the manifest file for the plugin you created in our ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial"),"."),Object(i.mdx)("p",null,"Replace the ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field of the manifest with the following:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "Create Styled Text",\n        "commandId": "createStyledTextCommand"\n    }\n]\n')),Object(i.mdx)("p",null,"If you're curious about what each entry means, ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(i.mdx)("p",null,"Then, update your ",Object(i.mdx)("inlineCode",{parentName:"p"},"main.js")," file, mapping the manifest's ",Object(i.mdx)("inlineCode",{parentName:"p"},"commandId")," to a handler function."),Object(i.mdx)("p",null,"Replace the content of your ",Object(i.mdx)("inlineCode",{parentName:"p"},"main.js")," file with the following code:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function createStyledTextHandlerFunction(selection) {\n  // The body of this function is added later\n}\n\nmodule.exports = {\n  commands: {\n    createStyledTextCommand: createStyledTextHandlerFunction,\n  },\n};\n")),Object(i.mdx)("p",null,"The remaining steps in this tutorial describe additional edits to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"main.js")," file."),Object(i.mdx)("h3",{id:"2-require-in-xd-api-dependencies"},"2. Require in XD API dependencies"),Object(i.mdx)("p",null,"For this tutorial, we just need access to two XD scenegraph classes."),Object(i.mdx)("p",null,"Add the following lines to the top of your ",Object(i.mdx)("inlineCode",{parentName:"p"},"main.js")," file:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Add this to the top of your main.js file\nconst { Text, Color } = require("scenegraph");\n')),Object(i.mdx)("p",null,"Now the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Text")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"Color")," classes are required in and ready to be used."),Object(i.mdx)("h3",{id:"3-create-the-main-function"},"3. Create the main function"),Object(i.mdx)("p",null,"In this step, we'll build out the main function, ",Object(i.mdx)("inlineCode",{parentName:"p"},"createStyledTextHandlerFunction"),", that we added in the first step. This function will add red text to the user's doucment."),Object(i.mdx)("p",null,"Each of the numbered comments are explained below the code:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function createStyledTextHandlerFunction(selection) {\n  const node = new Text(); // [1]\n  node.text = "This is some red text"; // [2]\n  node.fill = new Color("#FF0000"); // [3]\n  node.fontSize = 24;\n\n  selection.insertionParent.addChild(node); // [4]\n  node.moveInParentCoordinates(20, 50); // [5]\n}\n')),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Create the ",Object(i.mdx)("inlineCode",{parentName:"li"},"Text")," object."),Object(i.mdx)("li",{parentName:"ol"},"Populate ",Object(i.mdx)("inlineCode",{parentName:"li"},"text")," with a string."),Object(i.mdx)("li",{parentName:"ol"},"Set the color to red and the font size to 24 for the entire string."),Object(i.mdx)("li",{parentName:"ol"},"Add ",Object(i.mdx)("inlineCode",{parentName:"li"},"text")," to the scenegraph as a child of the currrently-selected artboard."),Object(i.mdx)("li",{parentName:"ol"},"Move ",Object(i.mdx)("inlineCode",{parentName:"li"},"text")," to a different position relative to the artboard's coordinate system.")),Object(i.mdx)("p",null,"Character styles such as color and font size can also vary within the text. Read more below for details."),Object(i.mdx)("h3",{id:"4-test-the-plugin"},"4. Test the plugin"),Object(i.mdx)("p",null,"If you reload the plugin and run it, you should see the following result:"),Object(i.mdx)("p",null,Object(i.mdx)("img",{alt:"Red text",src:n("oQ3E")})),Object(i.mdx)("p",null,"Not bad for a few lines of code! Let's push it a little further."),Object(i.mdx)("h3",{id:"5-update-the-main-function"},"5. Update the main function"),Object(i.mdx)("p",null,"All red is ok, but we can make our text more colorful than that. Let's change the code to apply different styles to different parts of the text, resulting in rainbow-colored text."),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"styleRanges")," property lets us apply different styles to different ranges of the node's text:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function createStyledTextHandlerFunction(selection) {\n  const node = new Text();\n\n  const textData = [\n    // [1]\n    { text: "This ", color: "red" },\n    { text: "is ", color: "orange" },\n    { text: "some ", color: "yellow" },\n    { text: "ra", color: "green" },\n    { text: "in", color: "blue" },\n    { text: "bow ", color: "indigo" },\n    { text: "text", color: "violet" },\n  ];\n\n  node.text = textData.map((item) => item.text).join(""); // [2]\n\n  node.styleRanges = textData.map((item) => ({\n    // [3]\n    length: item.text.length,\n    fill: new Color(item.color),\n  }));\n\n  node.fontSize = 24; // [4]\n\n  selection.insertionParent.addChild(node);\n  node.moveInParentCoordinates(20, 50);\n}\n')),Object(i.mdx)("p",null,"Here's what's changed:"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"This data structure stores the text to be displayed, as well as the color to use for each fragment of text."),Object(i.mdx)("li",{parentName:"ol"},"Just as before, we set ",Object(i.mdx)("inlineCode",{parentName:"li"},"node.text")," equal to the text to be displayed. This time, the text string is created by concatenating together all the ",Object(i.mdx)("inlineCode",{parentName:"li"},".text")," property values contained in the ",Object(i.mdx)("inlineCode",{parentName:"li"},"textData")," array. The ",Object(i.mdx)("inlineCode",{parentName:"li"},"Array#map")," gets us an array of strings, which we combine into a single string with ",Object(i.mdx)("inlineCode",{parentName:"li"},"Array#join"),"."),Object(i.mdx)("li",{parentName:"ol"},"In this step, we build an array of style objects, applying each style to a few characters of the text string. We use ",Object(i.mdx)("inlineCode",{parentName:"li"},"Array#map")," again, this time converting each item in the ",Object(i.mdx)("inlineCode",{parentName:"li"},"textData")," array into a style object. The ",Object(i.mdx)("inlineCode",{parentName:"li"},"length")," of each style is equal to the length of the text string contained in one element of the ",Object(i.mdx)("inlineCode",{parentName:"li"},"textData")," array. The ",Object(i.mdx)("inlineCode",{parentName:"li"},"fill")," of each style uses the color value contained in one element of the ",Object(i.mdx)("inlineCode",{parentName:"li"},"textData")," array."),Object(i.mdx)("li",{parentName:"ol"},"We can still apply styles to the entire text node at once, as in the earlier example. Here, the font size will be set to the same value across ",Object(i.mdx)("em",{parentName:"li"},"all")," the style ranges we just created.")),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},Object(i.mdx)("strong",{parentName:"p"},"tip"),"\nThe ",Object(i.mdx)("inlineCode",{parentName:"p"},"Color")," constructor understands some color names, but you have plenty of other options for defining colors precisely, including hex, rgba, and more. ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/Color/"}),"See the ",Object(i.mdx)("inlineCode",{parentName:"a"},"Color")," reference for more information"),".")),Object(i.mdx)("p",null,"Here are a few things to notice about the ",Object(i.mdx)("inlineCode",{parentName:"p"},"styleRanges")," property of ",Object(i.mdx)("inlineCode",{parentName:"p"},"Text")," objects:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"styleRanges")," is an array of objects; you can have more than one style for a text node."),Object(i.mdx)("li",{parentName:"ul"},"Each range is given a ",Object(i.mdx)("inlineCode",{parentName:"li"},"length")," which determines the number of characters to which the style is applied, starting from the end of the previous style range."),Object(i.mdx)("li",{parentName:"ul"},"Character styles such as ",Object(i.mdx)("inlineCode",{parentName:"li"},"fill")," or ",Object(i.mdx)("inlineCode",{parentName:"li"},"fontSize")," can be set to different values in each style range, or they can be set on the ",Object(i.mdx)("inlineCode",{parentName:"li"},"Text")," node overall to apply the setting to ",Object(i.mdx)("em",{parentName:"li"},"all")," existing style ranges.")),Object(i.mdx)("h3",{id:"6-run-the-plugin"},"6. Run the plugin"),Object(i.mdx)("p",null,"After saving all of your changes, reload the plugin in XD and run it. You'll now have rainbow-colored text:"),Object(i.mdx)("p",null,Object(i.mdx)("img",{alt:"Rainbow text",src:n("oFrv")})))}m.isMDXComponent=!0},oFrv:function(e,t,n){e.exports=n.p+"static/rainbow-f49267837a395b1223259785f530271f.png"},oQ3E:function(e,t,n){e.exports=n.p+"static/red-5b110c9bcb20738eeed10d1b1b17e204.png"}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-how-to-style-text-index-md-65d40529c6d85c25e9e5.js.map