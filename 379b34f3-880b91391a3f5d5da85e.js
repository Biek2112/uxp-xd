"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[505],{88466:function(e,t,n){n.d(t,{o:function(){return X}});var r=n(42982),i=n(15861),s=n(64687),a=n.n(s),o=n(15007),c=n(86029),l=n(4539),u=n(54129),d=n(82026),m=n(158),f=n(3987),p=n(75900),h=n.n(p),g=n(82357),v=n(22222),b=n(18870),w=n(73181);var x="688px",y="All Products",Z="keywords",k=function(e){return e.replace(/[\u00A0-\u9999<>\&]/g,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/&#60;mark&#62;/g,"<mark>").replace(/&#60;em&#62;/g,"<em>").replace(/&#60;\/mark&#62;/g,"</mark>").replace(/&#60;\/em&#62;/g,"</em>")},S=function(e,t){var n=new URLSearchParams(window.location.search);n.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+n)},z=function(){window.history.replaceState({},"",""+window.location.pathname)},A=function(){var e=(0,i.Z)(a().mark((function e(t,n,i,s,o){var c,l,u,d,m,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=[],o){e.next=10;break}return e.next=4,t.listIndices();case 4:u=e.sent,d=Object.values(u.items).map((function(e){return e.name})).filter((function(e){return Object.values(s).includes(e)})),setExistingIndices(d),l=d,e.next=11;break;case 10:l=o;case 11:return i[0]===y?i=l:(m=i.filter((function(e){return e!==y})),p=(0,f.getIndexesFromProduct)(m[0]),i=[].concat((0,r.Z)(p),(0,r.Z)(l.filter((function(e){return!m.includes(e)})))).filter((function(e){return l.includes(e)}))),i.forEach((function(e){c.push({indexName:e,query:n,params:{hitsPerPage:Math.ceil(50/i.length),attributesToRetrieve:["objectID","url","title","description"]}})})),e.next=15,t.multipleQueries(c);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)})));return function(t,n,r,i,s){return e.apply(this,arguments)}}(),E=function(){var e=(0,i.Z)(a().mark((function e(t,n,r,i,s,o){var c,l,u,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=9;break}return e.next=3,t.listIndices();case 3:l=e.sent,u=Object.values(l.items).map((function(e){return e.name})).filter((function(e){return Object.values(i).includes(e)})),setExistingIndices(u),c=u,e.next=10;break;case 9:c=s;case 10:return r=r.includes("all")?c:r.filter((function(e){return c.includes(e)})),d=[],r.forEach((function(e){d.push({indexName:e,query:n,params:{facets:[Z],attributesToRetrieve:["objectID","url","product"],hitsPerPage:Math.ceil(100/r.length),filters:o.map((function(e){return'keywords:"'+e+'"'})).join(" AND ")}})})),e.next=15,t.multipleQueries(d);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)})));return function(t,n,r,i,s,a){return e.apply(this,arguments)}}(),j=function(e,t){e.forEach((function(e){var n=e.objectID,r=e.url,i=e._highlightResult,s="";s=r.includes("https://developer.adobe.com")?r.replace("https://developer.adobe.com",""):r,(0,m.Bm)(s)||t.find((function(e){return e.url===s}))||t.push({objectID:n,url:s,_highlightResult:i})}))},q=function(e,t){e.keywords&&Object.keys(e.keywords).forEach((function(n){var r,i=t.find((function(e){return Object.keys(e)[0]===n}));i?i[n]+=e.keywords[n]:t.push(((r={})[n]=e.keywords[n],r))}))},I={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},_={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},P={name:"rwu85d",styles:"margin:var(--spectrum-global-dimension-size-100) 0"},H={name:"1jwcxx3",styles:"font-style:italic"},N={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},R={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},L={name:"13udsys",styles:"height:100%"},M={name:"oragi2",styles:"white-space:nowrap;text-overflow:ellipsis"},O={name:"i2ekfq",styles:"margin-top:var(--spectrum-global-dimension-size-200);margin-bottom:var(--spectrum-global-dimension-size-100)"},B={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},C={name:"3tj9xb",styles:"width:100%;height:100%;display:grid;place-items:start center"},D={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},F={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},T={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},Q={name:"1ef11wo",styles:"font-style:italic;margin:var(--spectrum-global-dimension-size-50) 0"},V={name:"pgkztz",styles:"mark,em{background-color:transparent;color:inherit;font-weight:inherit;font-style:inherit;text-decoration:underline;}"},K={name:"11qpleq",styles:"min-width:auto;width:100%"},U={name:"1d3w5wq",styles:"width:100%"},X=function(e){var t=e.algolia,n=e.searchIndex,s=e.indexAll,p=e.showSearch,Z=e.setShowSearch,X=e.searchButtonId,J=e.isIFramed,G=(0,o.useState)(!1),W=G[0],Y=G[1],$=(0,o.useState)(""),ee=$[0],te=$[1],ne=(0,o.useState)(""),re=ne[0],ie=ne[1],se=(0,o.useState)(["all"]),ae=se[0],oe=se[1],ce=(0,o.useState)([]),le=ce[0],ue=ce[1],de=(0,o.useState)([]),me=de[0],fe=de[1],pe=(0,o.useState)(!1),he=pe[0],ge=pe[1],ve=(0,o.useState)(!1),be=ve[0],we=ve[1],xe=(0,o.useState)(!1),ye=xe[0],Ze=xe[1],ke=(0,o.useRef)(null),Se=(0,o.useRef)(null),ze=(0,o.useRef)(null),Ae=(0,o.useRef)(null),Ee=(0,o.useState)([]),je=Ee[0],qe=Ee[1],Ie=(0,o.useState)([]),_e=Ie[0],Pe=Ie[1],He=(0,o.useState)([]),Ne=He[0],Re=He[1],Le=(0,o.useState)([]),Me=Le[0],Oe=Le[1],Be=(0,o.useState)(!1),Ce=Be[0],De=Be[1],Fe=(0,o.useState)(!1),Te=Fe[0],Qe=Fe[1],Ve=function(){var e=(0,i.Z)(a().mark((function e(){var r,i,o,c,l,u,d,p,h;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ee.length){e.next=23;break}if(De(!1),S(m.AQ.query,ee),S(m.AQ.keywords,me),S(m.AQ.index,ae),J&&(c=JSON.stringify({query:ee,keywords:me,index:ae}),a=void 0,a=document.referrer,(l=(a.indexOf("localhost")>=0||a.indexOf("developer-stage.adobe")>=0||a.indexOf("hlx.page")>=0||a.indexOf("hlx.live")>=0||a.indexOf("developer.adobe")>=0)&&a)&&parent.postMessage(c,l)),ge(!0),ee===re){e.next=14;break}return Y(!0),e.next=11,E(t,ee,["all"],s,le,me);case 11:o=e.sent,e.next=17;break;case 14:return e.next=16,E(t,ee,ae,s,le,me);case 16:o=e.sent;case 17:u=n.filter((function(e){return e!==y}))[0],d=[y],p=[],h=[],null!==(r=o)&&void 0!==r&&null!==(i=r.results)&&void 0!==i&&i.length&&o.results.forEach((function(e){var t=e.hits,n=e.facets;if(void 0!==n){if(t.length>0){var r=t[0].product;r&&(d.includes(r)||(r!==u?d.push(r):d.splice(1,0,u)))}return j(t,p),q(n,h),!0}})),ee!==re?(Re(d),ie(ee),u&&d.includes(u)?(oe((0,f.getIndexesFromProduct)(u)),Qe(!0)):(Pe(p),Oe(h),Y(!1))):(Pe(p),Oe(h),Y(!1));case 23:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((0,i.Z)(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.listIndices();case 2:n=e.sent,r=Object.values(n.items).map((function(e){return e.name})).filter((function(e){return Object.values(s).includes(e)})),ue(r);case 5:case"end":return e.stop()}}),e)}))),[]),(0,o.useEffect)((function(){if(p){var e=new URL(window.location).searchParams,t=e.get(m.AQ.query),n=e.get(m.AQ.keywords),r=e.get(m.AQ.index);r&&oe(r.split(",")),n&&fe(n.split(",")),null!=t&&t.length&&(te(t),Ze(!0),Qe(!0)),null!=ze&&ze.current&&ze.current.focus()}else z()}),[p]),(0,o.useEffect)((function(){Te&&(Qe(!1),Ve())}),[Te,Qe]),(0,o.useEffect)((function(){null!=Ae&&Ae.current&&(Ae.current.scrollTop=0)}),[_e]),(0,o.useEffect)((function(){var e=function(e){var t=e.target;De(!1),ke.current&&!ke.current.contains(t)&&t.id!==X&&Z(!1)};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}}),[De,he,Z,ke]),(0,o.useEffect)((function(){var e=function(e){"Escape"===e.key&&(Z(!1),z())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[Z]),J&&((0,o.useEffect)((function(){Se&&je.length>0&&Se.current.querySelectorAll("a").forEach((function(e){e.target="_top"}))}),[je]),(0,o.useEffect)((function(){Ae&&_e.length>0&&Ae.current.querySelectorAll("a").forEach((function(e){e.target="_top"}))}),[_e])),(0,c.tZ)(o.default.Fragment,null,(0,c.tZ)("div",{ref:ke,css:(0,c.iv)("position:fixed;top:",J?"0":"var(--spectrum-global-dimension-size-800)",";left:0;right:0;",he&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",m.q9,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,c.tZ)("div",{css:(0,c.iv)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",x,";@media screen and (max-width: ",m.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,c.tZ)("form",{css:U,className:"spectrum-Search",onSubmit:function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),fe([]),Ze(!0),Qe(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(0,c.tZ)("div",{className:h()("spectrum-Textfield",{"is-focused":be}),css:K},(0,c.tZ)(v.Magnify,{className:"spectrum-Textfield-icon"}),(0,c.tZ)("input",{ref:ze,value:ee,onFocus:function(){we(!0)},onBlur:function(){we(!1)},onKeyDown:function(e){var t=e.key;null!=Se&&Se.current&&("ArrowDown"===t?Se.current.querySelector('[tabindex="0"]').focus():"ArrowUp"===t&&Se.current.querySelector('[tabindex="0"]:last-of-type').focus())},onChange:function(){var e=(0,i.Z)(a().mark((function e(r){var i,o,c,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.target.value,te(i),!i.length||_e.length){e.next=11;break}return Ze(!0),e.next=6,A(t,i,n,s,le);case 6:null!=(c=e.sent)&&null!==(o=c.results)&&void 0!==o&&o.length?(l=[],c.results.forEach((function(e){var t=e.hits;j(t,l)})),qe(l),_e.length||ge(!1)):qe([]),De(!0),e.next=13;break;case 11:Ze(!1),De(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),ye&&(0,c.tZ)(g.K,{css:(0,c.iv)("position:absolute;margin-right:var(--spectrum-global-dimension-size-100);@media screen and (max-width: ",m.q9,"){margin-right:0;}",""),tabIndex:"-1",isQuiet:!0,"aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:function(){te(""),Pe([]),ge(!1),z(),ze.current.focus()}},(0,c.tZ)(v.Close,null))),(0,c.tZ)(d.J,{isOpen:Ce,css:(0,c.iv)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",x,";@media screen and (max-width: ",m.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},je.length>0?(0,c.tZ)(u.v2,{ref:Se,onKeyDown:function(e){var t=e.key;if(null!=Se&&Se.current&&Se.current.contains(document.activeElement))if("ArrowDown"===t){var n=document.activeElement.nextElementSibling;n?n.focus():Se.current.querySelector('[tabindex="0"]').focus()}else if("ArrowUp"===t){var r=document.activeElement.previousElementSibling;r?r.focus():Se.current.querySelector('[tabindex="0"]:last-of-type').focus()}}},je.map((function(e){var t,n,r=""+location.origin+e.url,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",s=null!==(n=e._highlightResult.content)&&void 0!==n&&n.value?e._highlightResult.content.value:"";return(0,c.tZ)(u.ck,{key:e.objectID,href:r},(0,c.tZ)("div",{css:V},(0,c.tZ)("strong",{dangerouslySetInnerHTML:{__html:k(i)}}),(0,c.tZ)("div",{css:Q},r),(0,c.tZ)("div",{dangerouslySetInnerHTML:{__html:k(s)}})))}))):(0,c.tZ)("div",{css:T},(0,c.tZ)("div",{css:F},(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:D},"No Results Found"),(0,c.tZ)("em",null,"Try another search term"))))),W&&(0,c.tZ)("div",{css:C},(0,c.tZ)(w._,{size:"L"})),he&&!W&&(0,c.tZ)("div",{css:(0,c.iv)("display:flex;max-width:",m.Av,";margin:auto;height:100%;@media screen and (max-width: ",m.q9,"){overflow:auto;flex-wrap:wrap;}","")},(0,c.tZ)("div",{css:(0,c.iv)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);width:",m.dP,";","")},(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:B},"Filter by Products"),(0,c.tZ)("div",{css:(0,c.iv)("display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;max-height:30%;width:",m.dP,";@media screen and (max-width: ",m.q9,"){margin-bottom:0;}","")},Ne.map((function(e,t){return(0,c.tZ)(b.X,{key:t,isSelected:e===y?ae.includes("all"):ae.some((function(t){return(0,f.getIndexesFromProduct)(e).includes(t)})),value:e,onChange:function(t){oe(t?"All Products"===e?["all"]:[].concat((0,r.Z)(ae.filter((function(e){return"all"!==e}))),(0,r.Z)((0,f.getIndexesFromProduct)(e))):"All Products"===e?ae.filter((function(e){return"all"!==e})):ae.filter((function(t){return!(0,f.getIndexesFromProduct)(e).includes(t)}))),fe([]),Qe(!0)}},(0,c.tZ)("span",null,e))}))),(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:O},"Filter by Keywords"),(0,c.tZ)("div",{css:(0,c.iv)("margin-bottom:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;max-height:50%;width:",m.dP,";@media screen and (max-width: ",m.q9,"){margin-bottom:0;}","")},Me.length>0?Me.map((function(e,t){var n=Object.keys(e)[0];return(0,c.tZ)(b.X,{key:t,isSelected:me.includes(n),value:n,onChange:function(e){fe(e?function(e){return[].concat((0,r.Z)(e),[n])}:me.filter((function(e){return e!==n}))),Qe(!0)}},(0,c.tZ)("span",{css:M},n))})):(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS"},"No filter options available"))),(0,c.tZ)("div",{css:L},_e.length>0?(0,c.tZ)("div",{ref:Ae,css:(0,c.iv)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",m.q9,"){height:auto;overflow:inherit;}","")},_e.map((function(e){var t,n,r=""+location.origin+e.url,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",s=null!==(n=e._highlightResult.content)&&void 0!==n&&n.value?e._highlightResult.content.value:"";return(0,c.tZ)("div",{css:R},(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:N},(0,c.tZ)(l.P,{to:r},(0,c.tZ)("span",{dangerouslySetInnerHTML:{__html:k(i)}}))),(0,c.tZ)("div",{css:H},(0,c.tZ)(l.P,{variant:"secondary",to:r},r)),(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:P,dangerouslySetInnerHTML:{__html:k(s)}}))}))):(0,c.tZ)("div",{css:(0,c.iv)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",m.q9,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,c.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:_},(0,c.tZ)("g",null,(0,c.tZ)("g",null,(0,c.tZ)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,c.tZ)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,c.tZ)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,c.tZ)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,c.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,c.tZ)("strong",null,ee)),(0,c.tZ)("p",{className:"spectrum-Body spectrum-Body--S",css:I},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!he&&(0,c.tZ)("div",{css:(0,c.iv)("position:fixed;z-index:1;top:",J?"var(--spectrum-global-dimension-size-800)":"calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800))",";bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;","")}))}}}]);
//# sourceMappingURL=379b34f3-880b91391a3f5d5da85e.js.map