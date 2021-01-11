(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{"J/iX":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));var n=a("wx14"),l=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("ndZU"),r=(a("qKvR"),{}),c={_frontmatter:r},d=o.a;function m(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.mdx)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.mdx)("a",{name:"module-global-websocket",id:"module-global-websocket"}),Object(b.mdx)("h2",{id:"websocket"},"WebSocket"),Object(b.mdx)("ul",null,Object(b.mdx)("li",{parentName:"ul"},Object(b.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module-global-websocket"}),"~WebSocket"),Object(b.mdx)("ul",{parentName:"li"},Object(b.mdx)("li",{parentName:"ul"},Object(b.mdx)("a",Object(n.a)({parentName:"li"},{href:"#new-module-global-websocket-new"}),"new WebSocket(url, protocols)")),Object(b.mdx)("li",{parentName:"ul"},Object(b.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module-global-websocket-protocol"}),".protocol")),Object(b.mdx)("li",{parentName:"ul"},Object(b.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module-global-websocket-bufferedamount"}),".bufferedAmount")),Object(b.mdx)("li",{parentName:"ul"},Object(b.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module-global-websocket-binarytype"}),".binaryType")),Object(b.mdx)("li",{parentName:"ul"},Object(b.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module-global-websocket-binarytype"}),".binaryType")),Object(b.mdx)("li",{parentName:"ul"},Object(b.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module-global-websocket-send"}),".send(data)")),Object(b.mdx)("li",{parentName:"ul"},Object(b.mdx)("a",Object(n.a)({parentName:"li"},{href:"#module-global-websocket-close"}),".close([code], [reason])"))))),Object(b.mdx)("a",{name:"new-module-global-websocket-new",id:"new-module-global-websocket-new"}),Object(b.mdx)("h3",{id:"new-websocketurl-protocols"},"new WebSocket(url, protocols)"),Object(b.mdx)("table",null,Object(b.mdx)("thead",{parentName:"table"},Object(b.mdx)("tr",{parentName:"thead"},Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.mdx)("tbody",{parentName:"table"},Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"url"),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"string")),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"The URL to which to connect; this should be the URL to which the WebSocket server will respond.")),Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"protocols"),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(b.mdx)("inlineCode",{parentName:"td"},"Array.<string>")),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),'Either a single protocol string or an array of protocol strings. Example usage: var ws = new WebSocket("ws://demos.kaazing.com/echo","xmpp"); Throws an exception of Error Object if invalid url or protocols is passed')))),Object(b.mdx)("a",{name:"module-global-websocket-protocol",id:"module-global-websocket-protocol"}),Object(b.mdx)("h3",{id:"websocketprotocol"},"webSocket.protocol"),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(b.mdx)("inlineCode",{parentName:"p"},"string")," - returns a string indicating the name of the sub-protocol the server selected;\nthis will be one of the strings specified in the protocols parameter when creating the WebSocket object."),Object(b.mdx)("a",{name:"module-global-websocket-bufferedamount",id:"module-global-websocket-bufferedamount"}),Object(b.mdx)("h3",{id:"websocketbufferedamount"},"webSocket.bufferedAmount"),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(b.mdx)("inlineCode",{parentName:"p"},"number")," - returns the number of bytes of data that have been queued using calls to send() but not yet transmitted to the network.\nThis value resets to zero once all queued data has been sent.\nThis value does not reset to zero when the connection is closed;\nif you keep calling send(), this will continue to climb. Read only"),Object(b.mdx)("a",{name:"module-global-websocket-binarytype",id:"module-global-websocket-binarytype"}),Object(b.mdx)("h3",{id:"websocketbinarytype"},"webSocket.binaryType"),Object(b.mdx)("table",null,Object(b.mdx)("thead",{parentName:"table"},Object(b.mdx)("tr",{parentName:"thead"},Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.mdx)("tbody",{parentName:"table"},Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"string")),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),'A string indicating the type of binary data being transmitted by the connection. This should be either "blob" if DOM Blob objects are being used or "arraybuffer" if ArrayBuffer objects are being used.')))),Object(b.mdx)("a",{name:"module-global-websocket-binarytype",id:"module-global-websocket-binarytype"}),Object(b.mdx)("h3",{id:"websocketbinarytype-1"},"webSocket.binaryType"),Object(b.mdx)("p",null,Object(b.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(b.mdx)("inlineCode",{parentName:"p"},"string")," - returns the string indicating the binary data type."),Object(b.mdx)("a",{name:"module-global-websocket-send",id:"module-global-websocket-send"}),Object(b.mdx)("h3",{id:"websocketsenddata"},"webSocket.send(data)"),Object(b.mdx)("p",null,"Enqueues the specified data to be transmitted to the other end over the WebSocket connection,\nincreasing the value of bufferedAmount by the number of bytes needed to contain the data.\nIf the data can't be sent (for example, because it needs to be buffered but the buffer is full), the socket is closed automatically."),Object(b.mdx)("table",null,Object(b.mdx)("thead",{parentName:"table"},Object(b.mdx)("tr",{parentName:"thead"},Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.mdx)("tbody",{parentName:"table"},Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(b.mdx)("inlineCode",{parentName:"td"},"ArrayBuffer")," ","|"," ",Object(b.mdx)("inlineCode",{parentName:"td"},"ArrayBufferView")),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data to be sent Example usage: ws.send(new Float32Array(","[ 5, 2, 1, 3, 6, -1 ]","))                ws.send(new Int32Array(","[5,-1]",").buffer)")))),Object(b.mdx)("a",{name:"module-global-websocket-close",id:"module-global-websocket-close"}),Object(b.mdx)("h3",{id:"websocketclosecode-reason"},"webSocket.close(","[code]",", ","[reason]",")"),Object(b.mdx)("p",null,"Closes the websocket connection"),Object(b.mdx)("table",null,Object(b.mdx)("thead",{parentName:"table"},Object(b.mdx)("tr",{parentName:"thead"},Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.mdx)("tbody",{parentName:"table"},Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"[code]"),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"integer")),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"1000")),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A integer value as per ",Object(b.mdx)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()"}),"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()"),".")),Object(b.mdx)("tr",{parentName:"tbody"},Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"[reason]"),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"string")),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.mdx)("inlineCode",{parentName:"td"},"&quot;&quot;")),Object(b.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A human-readable string explaining why the connection is closing. Throws an exception of Error Object if invalid code or reason is passed")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-uxp-class-web-socket-md-121259dbb21537ec0f4b.js.map