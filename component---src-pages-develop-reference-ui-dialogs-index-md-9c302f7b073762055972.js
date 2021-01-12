(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"+YfP":function(e,t,n){e.exports=n.p+"static/Example-Error-Alert-ec80605431fac498489c9b5ba7a01ab4.png"},"0o5F":function(e,t,n){e.exports=n.p+"static/dialog-22395da39bec5d585a520f8e734d86e1.png"},"15F8":function(e,t,n){e.exports=n.p+"static/dialog-anatomy-0d32e625670747a5490eac72d66f948a.png"},"3jT6":function(e,t,n){e.exports=n.p+"static/helper-alert-3967f4906ab03bf7e92e943555d3df10.png"},"8/er":function(e,t,n){e.exports=n.p+"static/Example-Prompt-Dialog-825f96d6c5989aab3ff4989b001b05cc.png"},Jzda:function(e,t,n){e.exports=n.p+"static/Example-About-Dialog-cb674d6a209270ea096eac6e4f2ef58c.png"},OfZw:function(e,t,n){e.exports=n.p+"static/Example-Confirmation-Dialog-cbeaa12931f83d680fac3615f4d70f29.png"},Ov5P:function(e,t,n){e.exports=n.p+"static/Example-Warning-Dialog-b302c3d3f017c15c2089ac19cc55ea78.png"},RJSm:function(e,t,n){e.exports=n.p+"static/Example-About-Dialog-on-UWP-9f851b07c3412cb626ea49164bd0b5cd.png"},RR35:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("ndZU"),s=(n("qKvR"),{}),d={_frontmatter:s},r=l.a;function c(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(o.mdx)(r,Object(a.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"dialogs"},"Dialogs"),Object(o.mdx)("p",null,"A modal dialog is used to display important information and ask for user input. XD Plugins can display user interface in the form of ",Object(o.mdx)("strong",{parentName:"p"},"modal dialogs"),"."),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Example of a Modal Dialog",src:n("0o5F")})),Object(o.mdx)("p",null,"Dialogs appear over the XD document, and prevent further interaction with the underlying document. Dialogs are dismissed in any one of the following manners:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"The user presses the ESC key"),Object(o.mdx)("li",{parentName:"ul"},"The user presses ENTER (assuming the plugin supplies an ",Object(o.mdx)("inlineCode",{parentName:"li"},"onsubmit")," handler)"),Object(o.mdx)("li",{parentName:"ul"},"The user clicks or touches a button designed to dismiss the dialog.")),Object(o.mdx)("p",null,"Dialogs are highly intrusive, and should only be used when absolutely necessary."),Object(o.mdx)("h2",{id:"anatomy"},"Anatomy"),Object(o.mdx)("p",null,'{% tabs anatomy="Dialog", examplesmac="macOS", examplesuwp="Windows" %}'),Object(o.mdx)("p",null,'{% content "anatomy" %}'),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Dialog Anatomy",src:n("15F8")})),Object(o.mdx)("p",null,'{% content "examplesmac" %}'),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"macOS Dialog Example",src:n("Jzda")})),Object(o.mdx)("p",null,'{% content "examplesuwp" %}'),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Windows Dialog Example",src:n("RJSm")})),Object(o.mdx)("p",null,"{% endtabs %}"),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("p",null,"When it comes to building the user interface, XD exposes an API surface that looks and feels a lot like what you would get in a web browser, namely:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"HTML5 DOM (Document Object Model) API"),Object(o.mdx)("li",{parentName:"ul"},"CSS"),Object(o.mdx)("li",{parentName:"ul"},"JavaScript")),Object(o.mdx)("p",null,"These APIs and standards can be used to create compelling user interfaces, even inside modal dialogs."),Object(o.mdx)("p",null,"The above example is a typical modal dialog. Modal dialogs consist of:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"A dialog element (",Object(o.mdx)("inlineCode",{parentName:"li"},"<dialog>"),") that is added to the DOM and contains everything that follows"),Object(o.mdx)("li",{parentName:"ul"},"A form element (",Object(o.mdx)("inlineCode",{parentName:"li"},"<form>"),") that wraps around the content of the dialog"),Object(o.mdx)("li",{parentName:"ul"},"A heading (",Object(o.mdx)("inlineCode",{parentName:"li"},"<h1>"),"), which may also display the plugin's icon"),Object(o.mdx)("li",{parentName:"ul"},"A horizontal rule (",Object(o.mdx)("inlineCode",{parentName:"li"},"<hr />"),")"),Object(o.mdx)("li",{parentName:"ul"},"Some body content"),Object(o.mdx)("li",{parentName:"ul"},"A footer (",Object(o.mdx)("inlineCode",{parentName:"li"},"<footer>"),") with one or more buttons (",Object(o.mdx)("inlineCode",{parentName:"li"},"<button>"),")")),Object(o.mdx)("p",null,"The margins and padding that surround the structure are provided automatically. There is generally ",Object(o.mdx)("em",{parentName:"p"},"no need")," to specify or override these margins in your own user interface, unless you want to do so."),Object(o.mdx)("h2",{id:"building-modal-dialogs"},"Building Modal Dialogs"),Object(o.mdx)("p",null,"You can build modal dialogs using any method that creates an HTML5 DOM structure. This means you can use ",Object(o.mdx)("inlineCode",{parentName:"p"},"document.createElement"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"innerHTML"),", jQuery, React, and other frameworks."),Object(o.mdx)("p",null,"Let's examine a simple dialog and how we might create it."),Object(o.mdx)("p",null,'{% tabs sample="Sample", html="HTML", js="JS", react="React" %}'),Object(o.mdx)("p",null,'{% content "sample" %}'),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"A Simple Dialog",src:n("0o5F")})),Object(o.mdx)("p",null,'{% content "html" %}'),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<style>\n    #dialog form {\n        width: 360px;\n    }\n    .h1 {\n        align-items: center;\n        justify-content: space-between;\n        display: flex;\n        flex-direction: row;\n    }\n    .icon {\n        border-radius: 4px;\n        width: 24px;\n        height: 24px;\n        overflow: hidden;\n    }\n</style>\n<dialog id="dialog">\n    <form method="dialog">\n        <h1 class="h1">\n            <span>Create Shape</span>\n            <img class="icon" src="./assets/icon.png" />\n        </h1>\n        <hr />\n        <p>Please enter the kind of shape you\'d like to create. You can also include additional options by separating them with spaces.</p>\n        <label>\n            <span>Shape</span>\n            <input type="text" placeholder="e.g., Rectangle 10 10 20 40" />\n        </label>\n        <footer>\n            <button uxp-variant="primary">Cancel</button>\n            <button type="submit" uxp-variant="cta">Create</button>\n        </footer>\n    </form>\n</dialog>\n')),Object(o.mdx)("p",null,'{% content "js" %}'),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let ourDialog;\nfunction showOurDialog() {\n    if (!ourDialog) {\n        ourDialog = document.createElement("dialog");\n        ourDialog.innerHTML = `\n<style>\n    form {\n        width: 360px;\n    }\n    .h1 {\n        align-items: center;\n        justify-content: space-between;\n        display: flex;\n        flex-direction: row;\n    }\n    .icon {\n        border-radius: 4px;\n        width: 24px;\n        height: 24px;\n        overflow: hidden;\n    }\n</style>\n<form method="dialog">\n    <h1 class="h1">\n        <span>Create Shape</span>\n        <img class="icon" src="./assets/icon.png" />\n    </h1>\n    <hr />\n    <p>Please enter the kind of shape you\'d like to create. You can also include additional options by separating them with spaces.</p>\n    <label>\n        <span>Shape</span>\n        <input type="text" placeholder="e.g., Rectangle 10 10 20 40" />\n    </label>\n    <footer>\n        <button uxp-variant="primary">Cancel</button>\n        <button type="submit" uxp-variant="cta">Create</button>\n    </footer>\n</form>\n        `;\n    }\n    return ourDialog.showModal();\n}\n')),Object(o.mdx)("p",null,'{% content "react" %}'),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const React = require("react");\nconst ReactDOM = require("react-dom");\n\nfunction Form() {\n    const styles = {\n        form: {\n            width: 360;\n        },\n        h1: {\n            alignItems: "center";\n            justifyContent: "space-between";\n            display: "flex";\n            flexDirection: "row";\n        },\n        icon: {\n            borderRadius: 4;\n            width: 24;\n            height: 24;\n            overflow: "hidden";\n        }\n    };\n\n    return (\n        <form styles={styles.form} method="dialog">\n            <h1 styles={styles.h1}>\n                <span>Create Shape</span>\n                <img styles={styles.icon} src="./assets/icon.png" />\n            </h1>\n            <hr />\n            <p>Please enter the kind of shape you\'d like to create. You can also include additional options by separating them with spaces.</p>\n            <label>\n                <span>Shape</span>\n                <input type="text" placeholder="e.g., Rectangle 10 10 20 40" />\n            </label>\n            <footer>\n                <button uxp-variant="primary">Cancel</button>\n                <button type="submit" uxp-variant="cta">Create</button>\n            </footer>\n        </form>\n    );\n}\n\nlet ourDialog;\nfunction showOurDialog() {\n    if (!ourDialog) {\n        ourDialog = document.createElement("dialog");\n    }\n    ReactDOM.render(<Form />, ourDialog);\n    return ourDialog.showModal();\n}\nfunction render() {\n    return (\n        <button>Click Me</button>\n    );\n}\n')),Object(o.mdx)("p",null,"{% endtabs %}"),Object(o.mdx)("p",null,"Once a dialog is built, you will need to manage its lifecycle:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"./showing/"}),"Showing a Modal Dialog")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"./dismissal/"}),"Dismissing a Modal Dialog"))),Object(o.mdx)("h2",{id:"variations"},"Variations"),Object(o.mdx)("h3",{id:"alert"},"Alert"),Object(o.mdx)("p",null,'A simple "alert" can be used to display a message along with a ',Object(o.mdx)("strong",{parentName:"p"},"Close")," button. You can customize the content of the title and message, but you cannot customize the button itself."),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Example Alert",src:n("3jT6")})),Object(o.mdx)("h3",{id:"error"},"Error"),Object(o.mdx)("p",null,'An error "alert" (with a red heading). These are useful for rendering error messages. Just like regular alerts, you cannot customize the button itself.'),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Example Error Alert",src:n("+YfP")})),Object(o.mdx)("h3",{id:"confirmation"},"Confirmation"),Object(o.mdx)("p",null,"Confirmation dialogs display a message and ",Object(o.mdx)("em",{parentName:"p"},"two")," buttons. The user is free to pick which of the buttons they wish to invoke."),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Example Confirmation Dialog",src:n("OfZw")})),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Danger")),Object(o.mdx)("p",{parentName:"blockquote"},"Do not use confirmation dialogs for destructive actions.")),Object(o.mdx)("h3",{id:"warning"},"Warning"),Object(o.mdx)("p",null,"Warning dialogs display a message and ",Object(o.mdx)("em",{parentName:"p"},"two")," buttons, one of which is destructive. Pressing ",Object(o.mdx)("strong",{parentName:"p"},"ENTER")," in this case should ",Object(o.mdx)("em",{parentName:"p"},"not")," invoke the destructive action. Otherwise it is the same as a confirmation dialog."),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Example Warning Dialog",src:n("Ov5P")})),Object(o.mdx)("h3",{id:"prompt"},"Prompt"),Object(o.mdx)("p",null,"Prompts display a single line text field in addition to a message and two buttons."),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Example Prompt Dialog",src:n("8/er")})),Object(o.mdx)("h2",{id:"guidelines"},"Guidelines"),Object(o.mdx)("p",null,"You should always strive to provide a good user experience with a modal dialog. That means providing easy access to dismissive buttons, avoiding dark patterns, and ensuring that your dialog doesn't block the user from forward progress in their work."),Object(o.mdx)("p",null,"You should definitely read up on our ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/design/ux-patterns/modal-ux/"}),"UX patterns for modals")," to learn more about what to do and what not to do."),Object(o.mdx)("h5",{id:"when-to-use-dialogs"},"When to Use Dialogs"),Object(o.mdx)("p",null,"Dialogs are very intrusive to the user's workflow. As such, you should consider their use very carefully."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Don't"),' display a "success" dialog when the result of the plugin is obvious to the user.'),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Do"),' display a "success" dialog when the result of the plugin is ',Object(o.mdx)("strong",{parentName:"li"},"not")," obvious to the user (such as data being sent to a remote endpoint.)"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Don't")," fail silently ","—"," let the user know what went wrong and how they can fix it by showing a modal dialog.")),Object(o.mdx)("h5",{id:"no-nested-dialogs"},"No Nested Dialogs"),Object(o.mdx)("p",null,"You should avoid nesting dialogs within other dialogs. The only exception to this guideline is when displaying file or folder pickers."),Object(o.mdx)("h5",{id:"three-buttons"},"Three Buttons"),Object(o.mdx)("p",null,"In general, try to strive to avoid dialogs with lots of buttons in the footer. You should try to use up to three buttons in the footer."),Object(o.mdx)("h5",{id:"dismissive-buttons"},"Dismissive Buttons"),Object(o.mdx)("p",null,"Dismissive dialog buttons live within a ",Object(o.mdx)("inlineCode",{parentName:"p"},"footer")," element. Within the ",Object(o.mdx)("inlineCode",{parentName:"p"},"footer"),", you can have any number of buttons, but you should follow these guidelines when defining variants (which you can use to indicate if a button is the default or is destructive):"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},'uxp-variant="cta"'),' indicates that the button is a "call to action". This is typically used for the default action. You should only have one of these buttons in a dialog.'),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},'uxp-variant="primary"'),' indicates the button is a "primary" button. This is the ',Object(o.mdx)("em",{parentName:"li"},"default")," if ",Object(o.mdx)("inlineCode",{parentName:"li"},"uxp-variant")," is not specified."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},'uxp-variant="secondary"'),' indicates the button is a "secondary" button. It receives a lighter color than primary buttons.'),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},'uxp-variant="warning"')," indicates that the button will trigger a destructive action. This button should not be the default action.")),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Tip")),Object(o.mdx)("p",{parentName:"blockquote"},"Dismissive buttons should always be visible on screen without scrolling. If a dismissive button isn't visible, the user may think they are trapped in the dialog.")),Object(o.mdx)("h5",{id:"dismissal-by-other-means"},"Dismissal by other means"),Object(o.mdx)("p",null,"You should avoid dismissing a dialog using other means, including action buttons, checkboxes, etc."),Object(o.mdx)("h2",{id:"keyboard-interaction"},"Keyboard Interaction"),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(o.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Action"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"ENTER"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Submits the dialog's form")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"ESC"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cancels the dialog")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"TAB"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Moves to the next focusable element.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"SHIFT+TAB"),Object(o.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Moves to the previous focusable element.")))),Object(o.mdx)("h2",{id:"known-issues"},"Known Issues"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Large dialogs on small screens (or in small windows) do not scroll automatically and will clip. You should apply a fixed height to your dialogs."),Object(o.mdx)("li",{parentName:"ul"},"Dialogs are neither movable nor resizable."),Object(o.mdx)("li",{parentName:"ul"},"It is not possible to show multiple dialogs at once, ",Object(o.mdx)("em",{parentName:"li"},"except")," for file and folder pickers."),Object(o.mdx)("li",{parentName:"ul"},"It is not possible to intercept the ",Object(o.mdx)("strong",{parentName:"li"},"ESC")," gesture when dismissing a dialog. Dialogs are always dismissible using ",Object(o.mdx)("strong",{parentName:"li"},"ESC"),"."),Object(o.mdx)("li",{parentName:"ul"},"When ",Object(o.mdx)("strong",{parentName:"li"},"TAB"),"ing in Windows 10, the focus border may appear incorrectly on some elements."),Object(o.mdx)("li",{parentName:"ul"},"On Windows 10, the tab order in a dialog's footer may be reversed."),Object(o.mdx)("li",{parentName:"ul"},"The ",Object(o.mdx)("inlineCode",{parentName:"li"},"<dialog>")," background color is different on Windows and macOS. On macOS, it is ",Object(o.mdx)("inlineCode",{parentName:"li"},"#F5F5F5"),", and on Windows it is ",Object(o.mdx)("inlineCode",{parentName:"li"},"#FFFFFF"),".")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-ui-dialogs-index-md-9c302f7b073762055972.js.map