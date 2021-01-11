(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{oinF:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n("wx14"),l=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("ndZU"),r=(n("qKvR"),{}),m={_frontmatter:r},c=o.a;function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.mdx)(c,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"how-to-make-network-requests"},"How to make network requests"),Object(i.mdx)("p",null,"This sample app will show you how to load an image in an XD object (Rectangle or Artboard) by making network requests using ",Object(i.mdx)("inlineCode",{parentName:"p"},"XHR")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"fetch"),"."),Object(i.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, and JavaScript"),Object(i.mdx)("li",{parentName:"ul"},"Basic knowledge of ",Object(i.mdx)("inlineCode",{parentName:"li"},"XMLHttpRequest")," and ",Object(i.mdx)("inlineCode",{parentName:"li"},"fetch")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/debugging/"}),"Debugging Tutorial"))),Object(i.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},Object(i.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-make-network-requests"}),"on GitHub"),".")),Object(i.mdx)("h3",{id:"1-create-plugin-scaffold"},"1. Create plugin scaffold"),Object(i.mdx)("p",null,"First, edit the manifest file for the plugin you created in our ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start"}),"Quick Start Tutorial"),"."),Object(i.mdx)("p",null,"Replace the ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field of the manifest with the following:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "How to make network requests",\n        "commandId": "applyImage"\n    }\n]\n')),Object(i.mdx)("p",null,"If you're curious about what each entry means, ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(i.mdx)("p",null,"Then, update your ",Object(i.mdx)("inlineCode",{parentName:"p"},"main.js")," file, mapping the manifest's ",Object(i.mdx)("inlineCode",{parentName:"p"},"commandId")," to a handler function."),Object(i.mdx)("p",null,"Replace the content of your ",Object(i.mdx)("inlineCode",{parentName:"p"},"main.js")," file with the following code:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function applyImage(selection) {\n  // The body of this function is added later\n}\n\nmodule.exports = {\n  commands: {\n    applyImage,\n  },\n};\n")),Object(i.mdx)("p",null,"The remaining steps in this tutorial describe additional edits to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"main.js")," file."),Object(i.mdx)("h3",{id:"2-require-in-xd-api-dependencies"},"2. Require in XD API dependencies"),Object(i.mdx)("p",null,"For this tutorial, we just need access to one XD scenegraph class."),Object(i.mdx)("p",null,"Add the following lines to the top of your ",Object(i.mdx)("inlineCode",{parentName:"p"},"main.js")," file:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Add this to the top of your main.js file\nconst { ImageFill } = require("scenegraph");\n')),Object(i.mdx)("p",null,"Now the ",Object(i.mdx)("inlineCode",{parentName:"p"},"ImageFill")," class is imported and ready to be used."),Object(i.mdx)("h3",{id:"3-write-a-helper-function-to-make-xhr-requests"},"3. Write a helper function to make XHR requests"),Object(i.mdx)("p",null,"Our XHR helper ",Object(i.mdx)("inlineCode",{parentName:"p"},"xhrBinary")," will make an HTTP GET request to any URL it is passed, and a return a Promise with an ",Object(i.mdx)("inlineCode",{parentName:"p"},"arraybuffer"),"."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function xhrBinary(url) {\n  // [1]\n  return new Promise((resolve, reject) => {\n    // [2]\n    const req = new XMLHttpRequest(); // [3]\n    req.onload = () => {\n      if (req.status === 200) {\n        try {\n          const arr = new Uint8Array(req.response); // [4]\n          resolve(arr); // [5]\n        } catch (err) {\n          reject(`Couldnt parse response. ${err.message}, ${req.response}`);\n        }\n      } else {\n        reject(`Request had an error: ${req.status}`);\n      }\n    };\n    req.onerror = reject;\n    req.onabort = reject;\n    req.open("GET", url, true);\n    req.responseType = "arraybuffer"; // [6]\n    req.send();\n  });\n}\n')),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("inlineCode",{parentName:"li"},"xhrBinary")," function takes a url as a parameter"),Object(i.mdx)("li",{parentName:"ol"},"The function returns a Promise"),Object(i.mdx)("li",{parentName:"ol"},"The function uses ",Object(i.mdx)("inlineCode",{parentName:"li"},"XMLHttpRequest")," to make network requests"),Object(i.mdx)("li",{parentName:"ol"},"Once the correct response comes back, the function uses ",Object(i.mdx)("inlineCode",{parentName:"li"},"Unit8Array")," method to convert the response to an ",Object(i.mdx)("inlineCode",{parentName:"li"},"arraybuffer")),Object(i.mdx)("li",{parentName:"ol"},"After the conversion, the promise is resolved"),Object(i.mdx)("li",{parentName:"ol"},"Make sure the set the ",Object(i.mdx)("inlineCode",{parentName:"li"},"responseType")," as ",Object(i.mdx)("inlineCode",{parentName:"li"},"arraybuffer"))),Object(i.mdx)("h3",{id:"4-write-a-helper-to-apply-imagefill"},"4. Write a helper to apply ",Object(i.mdx)("inlineCode",{parentName:"h3"},"ImageFill")),Object(i.mdx)("p",null,"This helper function will create an ",Object(i.mdx)("inlineCode",{parentName:"p"},"ImageFill")," instance that can be applied to a user-selected XD scengraph object:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function applyImagefill(selection, file) {\n  // [1]\n  const imageFill = new ImageFill(file); // [2]\n  selection.items[0].fill = imageFill; // [3]\n}\n")),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"The function accepts the ",Object(i.mdx)("inlineCode",{parentName:"li"},"selection")," and a ",Object(i.mdx)("inlineCode",{parentName:"li"},"file")," as parameters"),Object(i.mdx)("li",{parentName:"ol"},"Use the ",Object(i.mdx)("inlineCode",{parentName:"li"},"ImageFill")," class to create the fill"),Object(i.mdx)("li",{parentName:"ol"},"Apply the image to the user-selected XD object")),Object(i.mdx)("p",null,"We'll use this function in the next step."),Object(i.mdx)("h3",{id:"5-write-a-helper-function-to-download-the-image"},"5. Write a helper function to download the image"),Object(i.mdx)("p",null,"Ok, you've just made three helper functions. Now we're going to tie them all together!"),Object(i.mdx)("p",null,"Note the use of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"async")," keyword at the beginning of the function."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'async function downloadImage(selection, jsonResponse) {\n  // [1]\n  try {\n    const photoUrl = jsonResponse.message; // [2]\n    const photoObj = await xhrBinary(photoUrl); // [3]\n    const tempFolder = await fs.getTemporaryFolder(); // [4]\n    const tempFile = await tempFolder.createFile("tmp", { overwrite: true }); // [5]\n    await tempFile.write(photoObj, { format: uxp.formats.binary }); // [6]\n    applyImagefill(selection, tempFile); // [7]\n  } catch (err) {\n    console.log("error");\n    console.log(err.message);\n  }\n}\n')),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"This helper function accepts the ",Object(i.mdx)("inlineCode",{parentName:"li"},"selection")," and a JSON response object as parameters"),Object(i.mdx)("li",{parentName:"ol"},"Gets the URL from the JSON response"),Object(i.mdx)("li",{parentName:"ol"},"Uses our async ",Object(i.mdx)("inlineCode",{parentName:"li"},"xhrBinary")," function to get an ",Object(i.mdx)("inlineCode",{parentName:"li"},"arraybuffer")),Object(i.mdx)("li",{parentName:"ol"},"Uses the ",Object(i.mdx)("inlineCode",{parentName:"li"},"fs")," module and its ",Object(i.mdx)("inlineCode",{parentName:"li"},"getTemporaryFolder")," method to create a temp folder"),Object(i.mdx)("li",{parentName:"ol"},"Uses the ",Object(i.mdx)("inlineCode",{parentName:"li"},"createFile")," method to create a temp file"),Object(i.mdx)("li",{parentName:"ol"},"Uses the ",Object(i.mdx)("inlineCode",{parentName:"li"},"write")," method to write the binary file to store"),Object(i.mdx)("li",{parentName:"ol"},"Uses ",Object(i.mdx)("inlineCode",{parentName:"li"},"applyImagefill")," to place the image into a user-selected XD object")),Object(i.mdx)("h3",{id:"6-write-the-main-handler-function"},"6. Write the main handler function"),Object(i.mdx)("p",null,"This is the function that will be called with the user runs our plugin command."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function applyImage(selection) {\n  if (selection.items.length) {\n    // [1]\n    const url = "https://dog.ceo/api/breeds/image/random"; // [2]\n    return fetch(url) // [3]\n      .then(function (response) {\n        return response.json(); // [4]\n      })\n      .then(function (jsonResponse) {\n        return downloadImage(selection, jsonResponse); // [5]\n      });\n  } else {\n    console.log("Please select a shape to apply the downloaded image.");\n  }\n}\n')),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Checks if user has selected at least one object"),Object(i.mdx)("li",{parentName:"ol"},"This is an example public URL to an image"),Object(i.mdx)("li",{parentName:"ol"},"Pass the URL to ",Object(i.mdx)("inlineCode",{parentName:"li"},"fetch")),Object(i.mdx)("li",{parentName:"ol"},"The first ",Object(i.mdx)("inlineCode",{parentName:"li"},".then")," block returns the response JSON object"),Object(i.mdx)("li",{parentName:"ol"},"The second ",Object(i.mdx)("inlineCode",{parentName:"li"},".then")," block passes the ",Object(i.mdx)("inlineCode",{parentName:"li"},"selection")," and our JSON reponse to our ",Object(i.mdx)("inlineCode",{parentName:"li"},"downloadImage")," function, ultimately placing it in the document")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-how-to-make-network-requests-index-md-6405b408b2769eb22857.js.map