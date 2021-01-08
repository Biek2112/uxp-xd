(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{WpBj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),d=a("ndZU"),s=(a("qKvR"),{}),c={_frontmatter:s},m=d.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.mdx)(m,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"assets"},"assets"),Object(l.mdx)("p",null,"Represents the document styles listed in the Assets panel. Styles can be added and removed manually by the user, so\nthere's no guarantee that these styles are currently used anywhere in the document's content."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Since"),": XD 15"),Object(l.mdx)("h3",{id:"enums"},"Enums"),Object(l.mdx)("dl",null,Object(l.mdx)("dt",null,Object(l.mdx)("a",{name:"GradientType"})," GradientType : "),Object(l.mdx)("dd",null,"LINEAR, RADIAL - Type of gradient color element: linear gradient or radial gradient")),Object(l.mdx)("h2",{id:"typedefs"},"Typedefs"),Object(l.mdx)("h3",{id:"typedef-colorasset"},"Typedef ColorAsset"),Object(l.mdx)("p",null,"Assets library entry representing a solid color."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"?string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets).")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!Color"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of the asset")))),Object(l.mdx)("h3",{id:"typedef-gradientasset"},"Typedef GradientAsset"),Object(l.mdx)("p",null,"Assets library entry representing a linear or radial gradient."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"?string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets).")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"gradientType"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!GradientType"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Either ",Object(l.mdx)("inlineCode",{parentName:"td"},"GradientType.LINEAR")," or ",Object(l.mdx)("inlineCode",{parentName:"td"},"GradientType.RADIAL"))),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorStops"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!Array.","<"," {stop: number, color: !Color} >"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of color stops used in the gradient, where ",Object(l.mdx)("inlineCode",{parentName:"td"},"stop")," >= 0 and <= 1, and the values are strictly increasing. Same format as the ",Object(l.mdx)("inlineCode",{parentName:"td"},"colorStops")," property of a ",Object(l.mdx)("a",Object(n.a)({parentName:"td"},{href:"LinearGradientFill/"}),"LinearGradientFill")," object.")))),Object(l.mdx)("h3",{id:"typedef-characterstyleasset"},"Typedef CharacterStyleAsset"),Object(l.mdx)("p",null,"Assets library entry representing a set of text character styles."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"?string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets).")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"style"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!CharacterStyle"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the style properties")))),Object(l.mdx)("h3",{id:"typedef-characterstyle"},"Typedef CharacterStyle"),Object(l.mdx)("p",null,"Character style properties. See documentation for the ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"scenegraph/#Text"}),"Text")," node type for more details."),Object(l.mdx)("p",null,"When creating a new character style, all properties are mandatory except those with default values specified here. When deleting\nan existing character style, always pass the exact object returned by ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-characterStyles-get"}),Object(l.mdx)("inlineCode",{parentName:"a"},"characterStyles.get()"))," (with all properties fully\nspecified) to avoid any ambiguity."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"fontFamily"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the font family")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"fontStyle"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the style of the font")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"fontSize"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!number"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the size of the font")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"fill"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!Color"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the Color of the font fill")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"charSpacing"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!number"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the character spacing")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"lineSpacing"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!number"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the line spacing")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"underline"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!boolean"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether underline is turned on")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"strikethrough"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"?boolean"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"(",Object(l.mdx)("strong",{parentName:"td"},"Since"),": XD 19) Default false; whether strikethrough is turned on")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"textTransform"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"?string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"(",Object(l.mdx)("strong",{parentName:"td"},"Since"),': XD 19) Default "none"; one of "none", "uppercase", "lowercase", or "titlecase"')),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"textScript"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"?string"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"(",Object(l.mdx)("strong",{parentName:"td"},"Since"),': XD 20) Default "none"; one of "none", "superscript", or "subscript"')))),Object(l.mdx)("h3",{id:"assetscolors"},"assets.colors"),Object(l.mdx)("p",null,"The collection of colors and gradients saved in this document's Assets library."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_assets-colors"}),".colors"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_assets-colors-get"}),".get()")," ⇒ ",Object(l.mdx)("inlineCode",{parentName:"li"},"!Array.<ColorAsset|GradientAsset>")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_assets-colors-add"}),".add(colorAssets)")," ⇒ ",Object(l.mdx)("inlineCode",{parentName:"li"},"number")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_assets-colors-delete"}),".delete(colorAssets)")," ⇒ ",Object(l.mdx)("inlineCode",{parentName:"li"},"number"))))),Object(l.mdx)("h3",{id:"assetscolorsget-⇒-arraycolorassetgradientasset"},"assets.colors.get() ⇒ ",Object(l.mdx)("inlineCode",{parentName:"h3"},"!Array.<ColorAsset|GradientAsset>")),Object(l.mdx)("p",null,"Get a list of all color/gradient assets, in the order they appear in the Assets panel."),Object(l.mdx)("p",null,"The list may contain a mix of solid Color assets and/or gradient assets.\nIf there are no color/gradient assets, an empty array is returned."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-colors"}),Object(l.mdx)("inlineCode",{parentName:"a"},"colors"))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"!Array.<ColorAsset|GradientAsset>")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'var assets = require("assets"),\n  allColors = assets.colors.get();\n')),Object(l.mdx)("h3",{id:"assetscolorsaddcolorassets-⇒-number"},"assets.colors.add(colorAssets) ⇒ ",Object(l.mdx)("inlineCode",{parentName:"h3"},"number")),Object(l.mdx)("p",null,"Add color/gradient assets to the collection."),Object(l.mdx)("p",null,"The list may contain a mix of solid Color assets and/or gradient assets. Items are not added if a duplicate\ncolor/gradient already exists in the collection, ",Object(l.mdx)("em",{parentName:"p"},"regardless of its name"),"."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-colors"}),Object(l.mdx)("inlineCode",{parentName:"a"},"colors"))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"number")," - number of assets added (may be less than requested if duplicates already exist)"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorAssets"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"! Color &#124; ColorAsset &#124; LinearGradientFill &#124; RadialGradientFill &#124; GradientAsset &#124; Array.&lt;Color&#124;ColorAsset&#124;LinearGradientFill&#124;RadialGradientFill&#124;GradientAsset>"))))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'var assets = require("assets"),\n  redColor = new Color("red"),\n  blueColor = new Color("blue"),\n  stops = [\n    { stop: 0, color: redColor },\n    { stop: 1, color: blueColor },\n  ],\n  numAdded = assets.colors.add([\n    redColor,\n    { name: "True Blue", color: blueColor },\n    {\n      name: "Red Blue Gradient",\n      gradientType: assets.GradientType.LINEAR,\n      colorStops: stops,\n    },\n  ]);\n')),Object(l.mdx)("h3",{id:"assetscolorsdeletecolorassets-⇒-number"},"assets.colors.delete(colorAssets) ⇒ ",Object(l.mdx)("inlineCode",{parentName:"h3"},"number")),Object(l.mdx)("p",null,"Delete color/gradient assets from the collection."),Object(l.mdx)("p",null,"The list may contain a mix of solid Color assets and/or gradient assets. Assets with the same color/gradient are\nremoved ",Object(l.mdx)("em",{parentName:"p"},"even if their names differ"),". Assets that already don't exist in the collection are silently ignored.\nTypically you will pass asset objects returned from ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-colors-get"}),Object(l.mdx)("inlineCode",{parentName:"a"},"get()"))," directly to this function."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-colors"}),Object(l.mdx)("inlineCode",{parentName:"a"},"colors"))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"number")," - number of assets deleted (may be less than requested if some didn't exist)"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorAssets"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"! Color &#124; ColorAsset &#124; LinearGradientFill &#124; RadialGradientFill &#124; GradientAsset &#124; Array.&lt;Color&#124;ColorAsset&#124;LinearGradientFill&#124;RadialGradientFill&#124;GradientAsset>"))))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'var assets = require("assets"),\n  numDeleted = assets.colors.delete(new Color("red"));\n')),Object(l.mdx)("h3",{id:"assetscharacterstyles"},"assets.characterStyles"),Object(l.mdx)("p",null,"The collection of character styles saved in this document's Assets library."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_assets-characterStyles"}),".characterStyles"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_assets-characterStyles-get"}),".get()")," ⇒ ",Object(l.mdx)("inlineCode",{parentName:"li"},"!Array.<CharacterStyleAsset>")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_assets-characterStyles-add"}),".add(charStyleAssets)")," ⇒ ",Object(l.mdx)("inlineCode",{parentName:"li"},"number")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module_assets-characterStyles-delete"}),".delete(charStyleAssets)")," ⇒ ",Object(l.mdx)("inlineCode",{parentName:"li"},"number"))))),Object(l.mdx)("h3",{id:"assetscharacterstylesget-⇒-arraycharacterstyleasset"},"assets.characterStyles.get() ⇒ ",Object(l.mdx)("inlineCode",{parentName:"h3"},"!Array.<CharacterStyleAsset>")),Object(l.mdx)("p",null,"Get a list of all character style assets, in the order they appear in the Assets panel."),Object(l.mdx)("p",null,"If there are no character style assets, an empty array is returned."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-characterStyles"}),Object(l.mdx)("inlineCode",{parentName:"a"},"characterStyles"))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"!Array.<CharacterStyleAsset>")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'var assets = require("assets"),\n  allCharacterStyles = assets.characterStyles.get();\n')),Object(l.mdx)("h3",{id:"assetscharacterstylesaddcharstyleassets-⇒-number"},"assets.characterStyles.add(charStyleAssets) ⇒ ",Object(l.mdx)("inlineCode",{parentName:"h3"},"number")),Object(l.mdx)("p",null,"Add one or more character style assets to the collection."),Object(l.mdx)("p",null,"Items are not added if a duplicate character style already exists in the collection, ",Object(l.mdx)("em",{parentName:"p"},"regardless of its name"),".\nAll character style properties must be fully specified (no properties are optional)."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-characterStyles"}),Object(l.mdx)("inlineCode",{parentName:"a"},"characterStyles"))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"number")," - number of assets added (may be less than requested if duplicates already exist)"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"charStyleAssets"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"! CharacterStyleAsset &#124; Array.&lt;CharacterStyleAsset>"))))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'var assets = require("assets"),\n  arialItalic = {\n    fontFamily: "Arial",\n    fontStyle: "Italic",\n    fontSize: 12,\n    fill: new Color("black"),\n    charSpacing: 0,\n    lineSpacing: 0,\n    underline: false,\n    strikethrough: false,\n    textTransform: "uppercase",\n  },\n  linkTextStyle = {\n    fontFamily: "Arial",\n    fontStyle: "Regular",\n    fontSize: 12,\n    fill: new Color("blue"),\n    charSpacing: 0,\n    lineSpacing: 0,\n    underline: false,\n    // (leaves optional strikethrough, textTransform, & textScript properties at default values)\n  },\n  numAdded = assets.characterStyles.add([\n    { style: arialItalic }, // No name provided: uses default name\n    { style: linkTextStyle, name: "Link Text" },\n  ]);\n')),Object(l.mdx)("h3",{id:"assetscharacterstylesdeletecharstyleassets-⇒-number"},"assets.characterStyles.delete(charStyleAssets) ⇒ ",Object(l.mdx)("inlineCode",{parentName:"h3"},"number")),Object(l.mdx)("p",null,"Delete one or more character style assets from the collection."),Object(l.mdx)("p",null,"Assets with the same character style are removed ",Object(l.mdx)("em",{parentName:"p"},"even if their names differ"),". Assets that already don't exist in the\ncollection are silently ignored. All character style properties must be fully specified (no properties are optional)."),Object(l.mdx)("p",null,"To avoid ambiguity, pass the exact asset objects returned from ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-characterStyles-get"}),Object(l.mdx)("inlineCode",{parentName:"a"},"get()"))," directly\nto this function."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_assets-characterStyles"}),Object(l.mdx)("inlineCode",{parentName:"a"},"characterStyles"))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"number")," - number of assets deleted (may be less than requested if some didn't exist)"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"charStyleAssets"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"! CharacterStyleAsset &#124; Array.&lt;CharacterStyleAsset>"))))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Delete all character style assets from the assets panel\nvar assets = require("assets"),\n  allCharacterStyles = assets.characterStyles.get(),\n  numDeleted = assets.characterStyles.delete(allCharacterStyles);\n')))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-assets-md-879450d72db816d6d7c8.js.map