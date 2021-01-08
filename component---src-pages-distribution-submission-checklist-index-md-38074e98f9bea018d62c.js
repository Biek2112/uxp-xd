(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{TDT2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return d}));var i=n("wx14"),a=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("ndZU"),r=(n("qKvR"),{}),s={_frontmatter:r},u=l.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)(u,Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"submission-checklist"},"Submission Checklist"),Object(o.mdx)("p",null,"Adobe XD users can discover plugins directly within the app via the XD Plugin Manager. All XD plugins listed in the Plugin Manager must first go through a review process before being published."),Object(o.mdx)("p",null,"By reviewing every plugin submission, Adobe aims to help developers get ready for primetime and ensure that users have great experiences with the plugins they install."),Object(o.mdx)("p",null,"This document will give you an idea of what we’re checking for during the review process. While lengthy, working through the points below will help you make sure you’ve accounted for all of the requirements and avoid having to fix things and resubmit before getting published."),Object(o.mdx)("h2",{id:"plugin-listing-information"},"Plugin listing information"),Object(o.mdx)("p",null,"Plugin listing information is the content that users will see in the XD Plugin Manager when browsing your listing. Unless otherwise noted, this is information that you will input and maintain on the ",Object(o.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://console.adobe.io/projects"}),"Adobe Developer Console"),"."),Object(o.mdx)("p",null,"In this section, we’ll go over what we’re checking for to ensure that your plugin listing is complete, correct, and in line with Adobe’s standards."),Object(o.mdx)("h3",{id:"plugin-description"},"Plugin description"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"A plugin name can only include “XD” or “Adobe XD” if it fits the pattern “\\${Plugin Name} for XD”. Refer to the ",Object(o.mdx)("a",Object(i.a)({parentName:"li"},{href:"https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf"}),"Adobe Branding Guidelines")," for further information.",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},"OK: “Rectanglator”, or “Rectanglator for XD”"),Object(o.mdx)("li",{parentName:"ul"},"Not OK: “XD Rectanglator”, or “Rectanglator XD”."))),Object(o.mdx)("li",{parentName:"ul"},"The plugin description must be relevant and self-explanatory."),Object(o.mdx)("li",{parentName:"ul"},"Regardless of supported languages, an English description must be provided."),Object(o.mdx)("li",{parentName:"ul"},"All listing content, including author name, email address, and website must comply with ",Object(o.mdx)("a",Object(i.a)({parentName:"li"},{href:"https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf"}),"Adobe Branding Guidelines")," ."),Object(o.mdx)("li",{parentName:"ul"},"Any plugin website must provide an email address or contact form so that users can contact the plugin developer easily."),Object(o.mdx)("li",{parentName:"ul"},"The listing may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc).")),Object(o.mdx)("h3",{id:"manifest"},"Manifest"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"For panel plugins, the manifest minVersion must be set to 21.0 or above."),Object(o.mdx)("li",{parentName:"ul"},"For modal or headless plugins, the manifest minVersion must be set to 13.0 or above.")),Object(o.mdx)("h3",{id:"icons"},"Icons"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Placeholder icons will not be accepted. Icons must be unique and must be property of the plugin author. Submissions that contain icons from sample projects (or variations thereof) will be rejected."),Object(o.mdx)("li",{parentName:"ul"},"Plugin icons may not contain Adobe product assets or icons."),Object(o.mdx)("li",{parentName:"ul"},"Plugin icons must be clear and free of distortion."),Object(o.mdx)("li",{parentName:"ul"},"All required plugin icons must be provided at the appropriate dimensions and file sizes. See the ",Object(o.mdx)("a",Object(i.a)({parentName:"li"},{href:"https://adobexdplatform.com/plugin-docs/reference/structure/manifest.html"}),"manifest documentation")," and ",Object(o.mdx)("a",Object(i.a)({parentName:"li"},{href:"https://adobexdplatform.com/plugin-docs/distribution/how-to-submit-to-plugin-manager.html"}),'"Publishing your plugin" guide')," to learn more about which icons to include in your plugin package versus which to upload via the Adobe Developer Console.")),Object(o.mdx)("h3",{id:"adobe-branding"},"Adobe Branding"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Make sure to review and adhere to the ",Object(o.mdx)("a",Object(i.a)({parentName:"li"},{href:"https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf"}),"Adobe Branding Guidelines"),"."),Object(o.mdx)("li",{parentName:"ul"},"Avoid using publisher names, domain names, email addresses, and other such property names that are confusingly similar to existing Adobe brand, product, or service names."),Object(o.mdx)("li",{parentName:"ul"},"Using Adobe assets and icons in your plugin or your plugin marketing material requires ",Object(o.mdx)("a",Object(i.a)({parentName:"li"},{href:"https://partners.adobe.com/exchangeprogram/creativecloud/marketing.html"}),"explicit permission from Adobe (login required)"),". Note that getting permission to use Adobe branding assets can add to the time it takes to get your plugin approved and published.")),Object(o.mdx)("h3",{id:"external-services"},"External Services"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"If your plugin requires paid credentials, when you submit your plugin to Adobe, you must provide test account login credentials, license number, or anything else that would be required to ensure that we can fully review your plugin."),Object(o.mdx)("li",{parentName:"ul"},"All plugin functionality must be accessible, either openly or through the credentials that you provide Adobe, for Adobe's reviewers.")),Object(o.mdx)("h3",{id:"third-party-companion-apps"},"Third Party Companion Apps"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"When a companion app is required, your plugin's description must indicate where the user can download the companion app."),Object(o.mdx)("li",{parentName:"ul"},"The companion app must successfully install on platforms it claims to support."),Object(o.mdx)("li",{parentName:"ul"},"The companion app must be able to successfully communicate with the plugin."),Object(o.mdx)("li",{parentName:"ul"},"The companion app must not cause abnormal resource usage (e.g., CPU, RAM, storage).")),Object(o.mdx)("h3",{id:"inappropriate-content"},"Inappropriate Content"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"The plugin and associated marketing surfaces must not include any intense violence, blood, gore, sexual content, nudity, or strong language."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must not promote or conduct phishing, spamming, hacking, password trafficking, or spyware, nor contain malware, trojans, or viruses.")),Object(o.mdx)("h2",{id:"plugin-functionality-and-ui"},"Plugin functionality and UI"),Object(o.mdx)("p",null,"Once users install your plugin, we want to make sure they have a great experience with their newfound addition to Adobe XD’s core product. In this section, we’ll go over what we’re reviewing in terms of your plugin’s functionality, UI, and more."),Object(o.mdx)("h3",{id:"functionality"},"Functionality"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"The plugin must install without error."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must launch via all insertion points that the plugin claims to support (e.g. Plugins Menu, Plugins Panel)."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must support any keyboard shortcuts provided by the developer."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must show a loading indicator or spinner during longer operations like loading large content or accessing resources via a network connection."),Object(o.mdx)("li",{parentName:"ul"},"Modal dialogs must provide an affordance in the UI for closing the modal (e.g. a cancel/close button)."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must perform the desired actions when the user interacts with components in the plugin’s UI."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must support all user selection types. Alternatively, if the plugin doesn’t support some selection types, the plugin must communicate this to the user when an unsupported selection is selected."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must indicate to the user if an internet connection is not available but is required."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must provide feedback to the user if it is unable to perform an action triggered by the user."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must never show a completely blank UI."),Object(o.mdx)("li",{parentName:"ul"},"The plugin may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc)."),Object(o.mdx)("li",{parentName:"ul"},"If the plugin supports login functionality, it must also provide logout.")),Object(o.mdx)("h3",{id:"user-interface"},"User Interface"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"For modal plugins, the plugin must be functional when the XD application window is at the minimum size that XD itself supports."),Object(o.mdx)("li",{parentName:"ul"},"For panel plugins, no content should be clipped when XD’s plugins panel is at minimum width."),Object(o.mdx)("li",{parentName:"ul"},"For panel plugins, the plugin's UI content must adapt appropriately when the panel width is increased."),Object(o.mdx)("li",{parentName:"ul"},"For panel plugins, the plugin's UI content must adapt appropriately when the panel width is decreased."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must be functional when the XD application window is at maximum size."),Object(o.mdx)("li",{parentName:"ul"},"The plugin UI must scroll when all content is not visible on the screen."),Object(o.mdx)("li",{parentName:"ul"},"UI elements in the plugin must not overlap or truncate."),Object(o.mdx)("li",{parentName:"ul"},"UI content must wrap or adapt as necessary to accommodate the available width of the UI."),Object(o.mdx)("li",{parentName:"ul"},"Plugin content must be in compliance with ",Object(o.mdx)("a",Object(i.a)({parentName:"li"},{href:"https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf"}),"Adobe Branding Guidelines"),".")),Object(o.mdx)("h2",{id:"internationalization-and-localization"},"Internationalization and Localization"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"The plugin UI must not break when the user enters valid characters for all languages the plugin supports."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must support input from local keyboards for all languages the plugin supports."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must provide localized strings for all languages indicated as supported by the developer and successfully display them when the system is set to each supported locale."),Object(o.mdx)("li",{parentName:"ul"},"The plugin UI must not break due to localized strings for supported locales.")),Object(o.mdx)("h2",{id:"performance"},"Performance"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"The plugin must not degrade the performance of Adobe XD."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must load in a timely manner."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must not cause abnormal resource usage (e.g., CPU, RAM, storage)."),Object(o.mdx)("li",{parentName:"ul"},"The plugin must not cause crashes, system errors, or any major failures.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-distribution-submission-checklist-index-md-38074e98f9bea018d62c.js.map