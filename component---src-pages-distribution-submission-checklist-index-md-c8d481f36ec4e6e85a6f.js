"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[3121],{81388:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return m}});var i=t(87462),a=t(63366),l=(t(15007),t(64983)),o=t(91515),r=["components"],s={},u={_frontmatter:s},d=o.Z;function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.mdx)(d,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"submission-checklist"},"Submission Checklist"),(0,l.mdx)("p",null,"Adobe XD users can discover plugins directly within the app via the XD Plugin Manager. All XD plugins listed in the Plugin Manager must first go through a review process before being published."),(0,l.mdx)("p",null,"By reviewing every plugin submission, Adobe aims to help developers get ready for primetime and ensure that users have great experiences with the plugins they install."),(0,l.mdx)("p",null,"This document will give you an idea of what we’re checking for during the review process. While lengthy, working through the points below will help you make sure you’ve accounted for all of the requirements and avoid having to fix things and resubmit before getting published."),(0,l.mdx)("h2",{id:"plugin-listing-information"},"Plugin listing information"),(0,l.mdx)("p",null,"Plugin listing information is the content that users will see in the XD Plugin Manager when browsing your listing. Unless otherwise noted, this is information that you will input and maintain on the ",(0,l.mdx)("a",{parentName:"p",href:"https://console.adobe.io/projects"},"Adobe Developer Console"),"."),(0,l.mdx)("p",null,"In this section, we’ll go over what we’re checking for to ensure that your plugin listing is complete, correct, and in line with Adobe’s standards."),(0,l.mdx)("h3",{id:"plugin-description"},"Plugin description"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"A plugin name can only include “XD” or “Adobe XD” if it fits the pattern “\\${Plugin Name} for XD”. Refer to the ",(0,l.mdx)("a",{parentName:"li",href:"https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf"},"Adobe Branding Guidelines")," for further information.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"OK: “Rectanglator”, or “Rectanglator for XD”"),(0,l.mdx)("li",{parentName:"ul"},"Not OK: “XD Rectanglator”, or “Rectanglator XD”."))),(0,l.mdx)("li",{parentName:"ul"},"The plugin description must be relevant and self-explanatory."),(0,l.mdx)("li",{parentName:"ul"},"Regardless of supported languages, an English description must be provided."),(0,l.mdx)("li",{parentName:"ul"},"All listing content, including author name, email address, and website must comply with ",(0,l.mdx)("a",{parentName:"li",href:"https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf"},"Adobe Branding Guidelines")," ."),(0,l.mdx)("li",{parentName:"ul"},"Any plugin website must provide an email address or contact form so that users can contact the plugin developer easily."),(0,l.mdx)("li",{parentName:"ul"},"The listing may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc).")),(0,l.mdx)("h3",{id:"manifest"},"Manifest"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"For panel plugins, the manifest minVersion must be set to 21.0 or above."),(0,l.mdx)("li",{parentName:"ul"},"For modal or headless plugins, the manifest minVersion must be set to 13.0 or above.")),(0,l.mdx)("h3",{id:"icons"},"Icons"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Placeholder icons will not be accepted. Icons must be unique and must be property of the plugin author. Submissions that contain icons from sample projects (or variations thereof) will be rejected."),(0,l.mdx)("li",{parentName:"ul"},"Plugin icons may not contain Adobe product assets or icons."),(0,l.mdx)("li",{parentName:"ul"},"Plugin icons must be clear and free of distortion."),(0,l.mdx)("li",{parentName:"ul"},"All required plugin icons must be provided at the appropriate dimensions and file sizes. See the ",(0,l.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest-v3"},"manifest documentation")," and ",(0,l.mdx)("a",{parentName:"li",href:"https://adobexdplatform.com/plugin-docs/distribution/how-to-submit-to-plugin-manager.html"},'"Publishing your plugin" guide')," to learn more about which icons to include in your plugin package versus which to upload via the Adobe Developer Console.")),(0,l.mdx)("h3",{id:"adobe-branding"},"Adobe Branding"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Make sure to review and adhere to the ",(0,l.mdx)("a",{parentName:"li",href:"https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf"},"Adobe Branding Guidelines"),"."),(0,l.mdx)("li",{parentName:"ul"},"Avoid using publisher names, domain names, email addresses, and other such property names that are confusingly similar to existing Adobe brand, product, or service names."),(0,l.mdx)("li",{parentName:"ul"},"Using Adobe assets and icons in your plugin or your plugin marketing material requires ",(0,l.mdx)("a",{parentName:"li",href:"https://partners.adobe.com/exchangeprogram/creativecloud/marketing.html"},"explicit permission from Adobe (login required)"),". Note that getting permission to use Adobe branding assets can add to the time it takes to get your plugin approved and published.")),(0,l.mdx)("h3",{id:"external-services"},"External Services"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"If your plugin requires paid credentials, when you submit your plugin to Adobe, you must provide test account login credentials, license number, or anything else that would be required to ensure that we can fully review your plugin."),(0,l.mdx)("li",{parentName:"ul"},"All plugin functionality must be accessible, either openly or through the credentials that you provide Adobe, for Adobe's reviewers.")),(0,l.mdx)("h3",{id:"third-party-companion-apps"},"Third Party Companion Apps"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"When a companion app is required, your plugin's description must indicate where the user can download the companion app."),(0,l.mdx)("li",{parentName:"ul"},"The companion app must successfully install on platforms it claims to support."),(0,l.mdx)("li",{parentName:"ul"},"The companion app must be able to successfully communicate with the plugin."),(0,l.mdx)("li",{parentName:"ul"},"The companion app must not cause abnormal resource usage (e.g., CPU, RAM, storage).")),(0,l.mdx)("h3",{id:"inappropriate-content"},"Inappropriate Content"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The plugin and associated marketing surfaces must not include any intense violence, blood, gore, sexual content, nudity, or strong language."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must not promote or conduct phishing, spamming, hacking, password trafficking, or spyware, nor contain malware, trojans, or viruses.")),(0,l.mdx)("h2",{id:"plugin-functionality-and-ui"},"Plugin functionality and UI"),(0,l.mdx)("p",null,"Once users install your plugin, we want to make sure they have a great experience with their newfound addition to Adobe XD’s core product. In this section, we’ll go over what we’re reviewing in terms of your plugin’s functionality, UI, and more."),(0,l.mdx)("h3",{id:"functionality"},"Functionality"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The plugin must install without error."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must launch via all insertion points that the plugin claims to support (e.g. Plugins Menu, Plugins Panel)."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must support any keyboard shortcuts provided by the developer."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must show a loading indicator or spinner during longer operations like loading large content or accessing resources via a network connection."),(0,l.mdx)("li",{parentName:"ul"},"Modal dialogs must provide an affordance in the UI for closing the modal (e.g. a cancel/close button)."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must perform the desired actions when the user interacts with components in the plugin’s UI."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must support all user selection types. Alternatively, if the plugin doesn’t support some selection types, the plugin must communicate this to the user when an unsupported selection is selected."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must indicate to the user if an internet connection is not available but is required."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must provide feedback to the user if it is unable to perform an action triggered by the user."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must never show a completely blank UI."),(0,l.mdx)("li",{parentName:"ul"},"The plugin may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc)."),(0,l.mdx)("li",{parentName:"ul"},"If the plugin supports login functionality, it must also provide logout.")),(0,l.mdx)("h3",{id:"user-interface"},"User Interface"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"While XD plugins are able to display a sub-menu when selected in the Plugins Panel, a plugin should never display a sub-menu with only 1 item. To avoid this, ensure that the plugin launches immediately when the user selects it by making sure that 1) the ",(0,l.mdx)("inlineCode",{parentName:"li"},"name")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"label"),' values in your manifest match, 2) the "Public plugin name" you submit via the Adobe Developer Console matches the ',(0,l.mdx)("inlineCode",{parentName:"li"},"name")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"label")," values in your manifest."),(0,l.mdx)("li",{parentName:"ul"},"For modal plugins, the plugin must be functional when the XD application window is at the minimum size that XD itself supports."),(0,l.mdx)("li",{parentName:"ul"},"For panel plugins, no content should be clipped when XD’s plugins panel is at minimum width."),(0,l.mdx)("li",{parentName:"ul"},"For panel plugins, the plugin's UI content must adapt appropriately when the panel width is increased."),(0,l.mdx)("li",{parentName:"ul"},"For panel plugins, the plugin's UI content must adapt appropriately when the panel width is decreased."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must be functional when the XD application window is at maximum size."),(0,l.mdx)("li",{parentName:"ul"},"The plugin UI must scroll when all content is not visible on the screen."),(0,l.mdx)("li",{parentName:"ul"},"UI elements in the plugin must not overlap or truncate."),(0,l.mdx)("li",{parentName:"ul"},"UI content must wrap or adapt as necessary to accommodate the available width of the UI."),(0,l.mdx)("li",{parentName:"ul"},"Plugin content must be in compliance with ",(0,l.mdx)("a",{parentName:"li",href:"https://partners.adobe.com/content/dam/tep_assets/public/public_1/documents/Adobe-Creative-Cloud-Developer-Brand-Guide-062218.pdf"},"Adobe Branding Guidelines"),".")),(0,l.mdx)("h2",{id:"internationalization-and-localization"},"Internationalization and Localization"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The plugin UI must not break when the user enters valid characters for all languages the plugin supports."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must support input from local keyboards for all languages the plugin supports."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must provide localized strings for all languages indicated as supported by the developer and successfully display them when the system is set to each supported locale."),(0,l.mdx)("li",{parentName:"ul"},"The plugin UI must not break due to localized strings for supported locales.")),(0,l.mdx)("h2",{id:"performance"},"Performance"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The plugin must not degrade the performance of Adobe XD."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must load in a timely manner."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must not cause abnormal resource usage (e.g., CPU, RAM, storage)."),(0,l.mdx)("li",{parentName:"ul"},"The plugin must not cause crashes, system errors, or any major failures.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-distribution-submission-checklist-index-md-c8d481f36ec4e6e85a6f.js.map