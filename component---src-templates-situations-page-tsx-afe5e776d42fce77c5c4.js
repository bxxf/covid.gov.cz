(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+rcc":function(e,t,a){e.exports={wrapper:"category-item-list-module--wrapper--2l6te",header:"category-item-list-module--header--32CZs",icon:"category-item-list-module--icon--3Y5rx",chevron:"category-item-list-module--chevron--cmaV2",linkBack:"category-item-list-module--linkBack--K051_"}},"2u68":function(e,t,a){e.exports={"btn-small-black":"variants-module--btn-small-black--398fP",btnSmallBlack:"variants-module--btn-small-black--398fP"}},AebV:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),i=function(e){var t=e.datetime,a=e.displayTime,n=e.prefix,i=e.suffix,o=void 0===i?" ":i,r={year:"numeric",month:"numeric",day:"numeric",hour:a?"2-digit":void 0,minute:a?"2-digit":void 0,timeZone:"Europe/Prague"};return l.a.createElement("time",{dateTime:t},n,new Date(t).toLocaleString("cs-CZ",r),o)}},BYrW:function(e,t,a){e.exports={subtitle:"subtitle-module--subtitle--3-_JB"}},CSOH:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("TSYQ"),o=a.n(i),r=a("WaYV"),c=a.n(r);t.a=function(e){var t,a=e.menu,n=e.children,i=e.hideMenuOnMobile;return l.a.createElement("div",{className:o()(c.a.wrapper,"mt-3")},l.a.createElement("nav",{className:o()((t={},t[c.a.hideOnMobile]=i,t))},a),l.a.createElement("div",{className:c.a.main},n))}},EIXX:function(e,t,a){e.exports={relatedMeasure:"related-measure-module--relatedMeasure--1ipsa"}},HHLq:function(e,t,a){e.exports={topicDetail:"topic-detail-module--topicDetail--kRP4b",article:"topic-detail-module--article--2LWJk"}},"I+D7":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("TSYQ"),l=a.n(n),i=a("q1tI"),o=a.n(i),r=a("eicg"),c=a("W+yO"),s=a.n(c),u=function(e){var t=e.iconCode,a=e.className,n=e.children;return o.a.createElement("div",{className:l()(a,s.a.headlineWrapper)},o.a.createElement("h1",{className:l()(s.a.headline)},t&&o.a.createElement(r.a,{className:s.a.headlineIcon,code:t}),o.a.createElement("span",null,n)),o.a.createElement("hr",null))}},QoFz:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("TSYQ"),l=a.n(n),i=a("q1tI"),o=a.n(i),r=a("dT4H"),c=a("pvlE"),s=a.n(c),u=function(e){return l()("breadcrumb",s.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},m=function(e){var t=e.items,a=e.variant,n=void 0===a?"normal":a,i=function(e){var a;return l()("breadcrumb__item",s.a.breadcrumbItem,((a={})[s.a.breadcrumbItemActive]=e===t.length-1,a))};return o.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},o.a.createElement("ol",{className:u(n)},t.map((function(e,t){return o.a.createElement("li",{key:"breadcrumb-item-"+t,className:i(t)},function(e){return void 0!==e.title}(e)?o.a.createElement(r.a,{to:e.url,className:"breadcrumb__link",title:e.title}):o.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},V4KX:function(e,t,a){e.exports={linkStyled:"link-styled-module--linkStyled--_N7FG",linkStyledLink:"link-styled-module--linkStyledLink--2U7Xp",linkStyledIcon:"link-styled-module--linkStyledIcon--1ApnS"}},"W+yO":function(e,t,a){e.exports={headlineWrapper:"headline-module--headlineWrapper--1KseK",headline:"headline-module--headline--2EZlD",headlineIcon:"headline-module--headlineIcon--3wPWI"}},WaYV:function(e,t,a){e.exports={wrapper:"desktop-left-menu-layout-module--wrapper--2FRhZ",hideOnMobile:"desktop-left-menu-layout-module--hideOnMobile--3x5nP",main:"desktop-left-menu-layout-module--main--2USeX"}},Z3BO:function(e,t,a){"use strict";a.d(t,"c",(function(){return x})),a.d(t,"a",(function(){return y})),a.d(t,"b",(function(){return k}));var n=a("q1tI"),l=a.n(n),i=a("+rcc"),o=a.n(i),r=a("TSYQ"),c=a.n(r),s=a("R99l"),u=a("dT4H"),m=a("j++a"),d=a("rBsq"),b=a.n(d),p=function(e){var t,a=e.name,n=e.path,i=e.iconCode,o=e.isActive;return l.a.createElement(u.a,{to:n,className:c()(b.a.categoryItem,"py-2",(t={},t[b.a.isActive]=o,t))},i&&l.a.createElement(m.a,{className:b.a.categoryItemIcon,code:i}),l.a.createElement("span",{className:b.a.categoryItemTitle},a),l.a.createElement("div",{className:b.a.chevron},l.a.createElement(s.a,{style:{fontSize:18},className:"color-yellow"})))},v=a("LYUY"),f=Object(v.a)(l.a.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft"),h=a("eicg"),E=a("jufJ"),x=function(e){var t=e.items,a=e.title,n=e.titleIconCode,i=e.linkBack,r=Object(E.a)(),c=Object(E.b)().t,s=new Intl.Collator([r]);t.sort((function(e,t){return s.compare(e.name,t.name)}));var m=a.split(" ").reduce((function(e,t,a){return 0===a?e+"<strong>"+t+"</strong>":e+" "+t}),"");return l.a.createElement("div",{className:o.a.wrapper},l.a.createElement("div",{className:o.a.header},l.a.createElement("h2",null,n&&l.a.createElement(h.a,{code:n,className:o.a.icon}),l.a.createElement("span",{dangerouslySetInnerHTML:{__html:m}})),i?l.a.createElement(u.a,{className:o.a.linkBack,to:i.slug},l.a.createElement(f,{style:{fontSize:18},className:o.a.chevron})," ",l.a.createElement("span",null,c("back_to")," ",i.title)):l.a.createElement("hr",null)),t.map((function(e,t){return l.a.createElement(p,Object.assign({key:""+e.iconCode+t},e))})))},g=a("YwZP"),y=function(e){var t=e.data,a=Object(g.useLocation)(),n=Object(E.b)().t,i=t.filter((function(e){return null!==e.relationships.measure})).map((function(e){var t,n=e.id,l=e.name,i=e.path,o=e.relationships;return{id:n,name:l,path:i.alias,iconCode:null===(t=o.icon)||void 0===t?void 0:t.code,isActive:i.alias===a.pathname}}));return l.a.createElement(x,{items:i,title:n("current_measures")})},k=function(e){var t=e.data,a=Object(g.useLocation)(),n=Object(E.b)().t,i=t.filter((function(e){return null!==e.relationships.situation})).map((function(e){var t,n=e.id,l=e.name,i=e.path,o=e.relationships;return{id:n,name:l,path:i.alias,iconCode:null===(t=o.icon)||void 0===t?void 0:t.code,isActive:i.alias===a.pathname}}));return l.a.createElement(x,{items:i,title:n("life_situations")})}},bwGF:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),l=a.n(n),i=a("TSYQ"),o=a.n(i),r=a("jufJ"),c=a("AebV"),s=a("d7cA"),u=a.n(s),m=function(e){var t,a=e.lastUpdated,n=e.isMobile,i=Object(r.b)().t;return l.a.createElement("div",{className:o()((t={},t[u.a.lastUpdateDesktop]=!n,t[u.a.lastUpdateMobile]=n,t))},l.a.createElement(c.a,{prefix:i("last_updated")+" ",displayTime:!0,datetime:a}))}},cCXt:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),l=a.n(n),i=a("I+D7"),o=a("TSYQ"),r=a.n(o),c=a("BYrW"),s=a.n(c),u=function(e){var t=e.children,a=e.className;return l.a.createElement("p",{className:r()(s.a.subtitle,a)},t)},m=a("HHLq"),d=a.n(m),b=a("bwGF"),p=function(e){var t=e.title,a=e.titleIconCode,n=e.processedContent,o=e.lastUpdated,r=e.subtitle;return l.a.createElement("div",{className:d.a.topicDetail},l.a.createElement(i.a,{iconCode:a},t),l.a.createElement(b.a,{isMobile:!1,lastUpdated:o}),l.a.createElement("article",{className:"bg-white rounded px-2 pb-2 px-md-3 pb-md-3 pt-md-0 pt-2"},l.a.createElement("hr",{className:"mt-0 mb-2 d-none d-md-block"}),r&&l.a.createElement(u,null,r),l.a.createElement("div",{className:d.a.article,dangerouslySetInnerHTML:{__html:n}})))}},d7cA:function(e,t,a){e.exports={lastUpdateMobile:"last-update-module--lastUpdateMobile--1Wbl7",lastUpdateDesktop:"last-update-module--lastUpdateDesktop--1Qx-H"}},daHu:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a("q1tI"),l=a.n(n),i=a("LYUY"),o=Object(i.a)(l.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room"),r=Object(i.a)(l.a.createElement("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event"),c=a("AebV"),s=a("jufJ"),u=function(e){var t=e.icon,a=e.children;return l.a.createElement("div",{className:"d-flex align-items-center mb-1 color-blue"},t," ",l.a.createElement("span",{className:"text-uppercase font-weight-medium"},a))},m=function(e){var t=e.regions;return l.a.createElement(u,{icon:l.a.createElement(o,null)},t.map((function(e){return e.name})).join(", "))},d=function(e){var t=e.validFrom,a=e.validTo,n=e.displayTime,i=Object(s.b)().t;return l.a.createElement(u,{icon:l.a.createElement(r,null)},t&&l.a.createElement(c.a,{displayTime:n,datetime:t,prefix:i("from")+" "}),a&&l.a.createElement(c.a,{displayTime:n,datetime:a,prefix:i("to")+" "}))}},l41P:function(e,t,a){e.exports={section:"accordion-section-module--section--BMIm5",sectionHeading:"accordion-section-module--sectionHeading--1aw0-",sectionButton:"accordion-section-module--sectionButton--1rqdf",sectionContent:"accordion-section-module--sectionContent--3m_BR"}},lYOF:function(e,t,a){e.exports={contentBoxTitle:"content-box-module--contentBoxTitle--3E5Vo",contentBoxDescription:"content-box-module--contentBoxDescription--O2FI4",contentBox:"content-box-module--contentBox--3WK0J",contentBoxNoPadding:"content-box-module--contentBoxNoPadding--2vKlZ","contentBox--white":"content-box-module--contentBox--white--2fBcG",contentBoxWhite:"content-box-module--contentBox--white--2fBcG","contentBox--blue":"content-box-module--contentBox--blue--243gT",contentBoxBlue:"content-box-module--contentBox--blue--243gT","content-box-btn":"content-box-module--content-box-btn--281FR",contentBoxBtn:"content-box-module--content-box-btn--281FR","content-box-btn--blue":"content-box-module--content-box-btn--blue--22dPm",contentBoxBtnBlue:"content-box-module--content-box-btn--blue--22dPm"}},ptG0:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),l=a.n(n),i=a("TSYQ"),o=a.n(i),r=a("zoQI"),c=a("uJxA"),s=a("lYOF"),u=a.n(s),m=function(e){var t,a=e.children,n=e.title,i=e.description,s=e.buttonVariant,m=e.buttonText,d=e.buttonHref,b=e.variant,p=void 0===b?"":b,v=e.noPadding;return l.a.createElement("div",{className:o()(u.a.contentBox,u.a["contentBox--"+p],v&&u.a.contentBoxNoPadding,"row")},l.a.createElement(c.a,{col:12},n&&l.a.createElement("h2",{className:u.a.contentBoxTitle,dangerouslySetInnerHTML:{__html:n}}),i&&l.a.createElement("p",{className:u.a.contentBoxDescription},i),a,m&&l.a.createElement(r.a,{href:d,variant:s,text:m,className:o()(u.a.contentBoxBtn,(t={},t[u.a.contentBoxBtnBlue]="white"===p,t))})))}},pvlE:function(e,t,a){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},rBsq:function(e,t,a){e.exports={categoryItem:"category-item-module--categoryItem--3V8HX",chevron:"category-item-module--chevron--D9HLp",categoryItemIcon:"category-item-module--categoryItemIcon--3wAWD",categoryItemTitle:"category-item-module--categoryItemTitle--ErF2o",isActive:"category-item-module--isActive--3zXaE"}},xzpE:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return L}));var n=a("q1tI"),l=a.n(n),i=a("21qS"),o=a("6Hpx"),r=a("dT4H"),c=a("TSYQ"),s=a.n(c),u=a("LYUY"),m=Object(u.a)(l.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),d=Object(u.a)(l.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),b=a("l41P"),p=a.n(b),v=a("zoQI"),f=function(e){var t=e.title,a=e.text,i=Object(n.useState)(!1),o=i[0],r=i[1],c=Object(n.useCallback)((function(){r(!o)}),[o]);return l.a.createElement("div",{className:p.a.section},l.a.createElement("div",{className:s()(p.a.sectionHeading,"d-flex","justify-content-between","align-items-center"),onClick:c},t,l.a.createElement(v.a,{icon:o?l.a.createElement(m,null):l.a.createElement(d,null),className:s()(p.a.sectionButton,"d-flex","justify-content-center","align-items-center"),variant:"yellow"})),o&&l.a.createElement("div",{className:p.a.sectionContent},a))},h=function(e){var t=e.data;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement(f,Object.assign({key:t},e))})))},E=a("ptG0"),x=a("cCXt"),g=a("daHu"),y=a("EIXX"),k=a.n(y),B=function(e){var t=e.measure;return l.a.createElement("div",{className:k.a.relatedMeasure},l.a.createElement(r.a,{className:"color-blue",to:t.path.alias},t.title),l.a.createElement(g.a,{regions:t.relationships.region}),l.a.createElement(g.b,{displayTime:!0,validFrom:t.valid_from,validTo:t.valid_to}))},N=a("V4KX"),I=a.n(N),_=a("R99l"),w=function(e){var t=e.to,a=e.title;return l.a.createElement("p",{className:I.a.linkStyled},l.a.createElement(r.a,{to:t,title:a,className:I.a.linkStyledLink},a,l.a.createElement(_.a,{style:{fontSize:20},className:I.a.linkStyledIcon})))},O=function(e){var t=e.links;return l.a.createElement("div",null,0!==t.length?t.map((function(e,t){return l.a.createElement(w,{key:t,title:e.title,to:e.path.alias})})):"")},C=a("jufJ"),T=a("bwGF"),S=function(e){var t,a,n,i,c,s,u,m=e.situation,d=m.relationships.related_situations,b=m.questions_answers,p=Boolean(b.length),v=Object(C.b)().t,f=Boolean(m.links.length),g=Boolean(m.relationships.measures.length),y=Boolean(d.length),k=(null===(t=m.relationships)||void 0===t||null===(a=t.icon)||void 0===a?void 0:a.code)||(null===(n=m.relationships)||void 0===n||null===(i=n.situation_type)||void 0===i||null===(c=i.relationships)||void 0===c||null===(s=c.icon)||void 0===s?void 0:s.code);return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{title:m.title,titleIconCode:k,lastUpdated:null==m?void 0:m.last_updated,processedContent:null==m||null===(u=m.content)||void 0===u?void 0:u.processed}),l.a.createElement("div",{className:"bg-white mb-3 pb-2 pb-md-0 px-2 px-md-3"},g&&l.a.createElement("div",{className:"pt-2"},l.a.createElement("hr",null),l.a.createElement("h3",{className:"mb-1 color-blue-dark"},v("related_measures")),m.relationships.measures.map((function(e){return l.a.createElement(B,{key:e.path.alias,measure:e})}))),f&&l.a.createElement("div",{className:"pt-2"},l.a.createElement("hr",null),l.a.createElement("h3",{className:"mb-1 color-blue-dark"},v("related")),l.a.createElement("div",null,m.links.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(r.a,{className:"color-blue mb-1",to:e.uri},e.title))})))),l.a.createElement(T.a,{isMobile:!0,lastUpdated:null==m?void 0:m.last_updated})),l.a.createElement(o.a,null,p&&l.a.createElement(E.a,{variant:"blue",title:v("faq"),boldedTitleCount:2},l.a.createElement(h,{data:m.questions_answers.map((function(e){return{title:e.question,text:e.value}}))})),y&&l.a.createElement(E.a,{title:v("similar_topics"),boldedTitleCount:1,variant:"blue"},l.a.createElement(O,{links:d}))))},j=a("+uiX"),H=a("n214"),M=a("QoFz"),q=a("CSOH"),A=a("Z3BO"),L=(t.default=function(e){var t,a,n,r,c,s,u,m,d,b,p,v,f,h=e.data,E=e.pageContext,x=h.situationArea.relationships.situation.map((function(e){return{id:e.id,name:e.title,path:e.path.alias,isActive:e.path.alias===E.slug}})),g=Object(C.b)().t;return l.a.createElement(i.a,{pageContext:E},l.a.createElement(H.a,{title:h.situation.title,description:h.situation.meta_description||g("current_measures_overview_meta"),pagePath:h.situation.path.alias,htmlLanguage:E.langCode}),l.a.createElement(j.a,{datePublished:h.situation.valid_from?h.situation.valid_from:h.situation.created,dateModified:h.situation.changed,title:h.situation.title,langCode:E.langCode?E.langCode:h.situation.langcode,isBlogPost:!0,description:h.situation.meta_description,breadcrumbItems:[{title:g("home"),url:"/"},{title:g("life_situations"),url:g("slug_situations")},{title:null===(t=h.situation.relationships)||void 0===t||null===(a=t.situation_type)||void 0===a?void 0:a.name,url:null===(n=h.situation.relationships)||void 0===n||null===(r=n.situation_type)||void 0===r||null===(c=r.path)||void 0===c?void 0:c.alias},h.situation.title],questions_answers:h.situation.questions_answers}),l.a.createElement(o.a,null,l.a.createElement("div",{className:"pt-1"},l.a.createElement(M.a,{items:[{title:g("home"),url:"/"},{title:g("life_situations"),url:g("slug_situations")},{title:null===(s=h.situation.relationships)||void 0===s||null===(u=s.situation_type)||void 0===u?void 0:u.name,url:null===(m=h.situation.relationships)||void 0===m||null===(d=m.situation_type)||void 0===d||null===(b=d.path)||void 0===b?void 0:b.alias},h.situation.title],variant:"inverse"})),l.a.createElement(q.a,{menu:l.a.createElement(A.c,{items:x,linkBack:{slug:E.listSlug,title:g("life_situations")},title:h.situationArea.name,titleIconCode:null===(p=h.situationArea)||void 0===p||null===(v=p.relationships)||void 0===v||null===(f=v.icon)||void 0===f?void 0:f.code}),hideMenuOnMobile:!0},l.a.createElement(S,{situation:h.situation}))))},"3257810559")},zoQI:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("zLVn"),l=a("q1tI"),i=a.n(l),o=a("TSYQ"),r=a.n(o),c=a("2u68"),s=a.n(c),u=a("dT4H"),m=function(e){var t=e.className,a=e.variant,l=Object(n.a)(e,["className","variant"]),o=r()(function(e){var t;return r()({btn:"small-black"!==e},{"btn-primary":"contained"===e},{"btn-outline-primary":"outline"===e},{"btn-outline-dark":"outline-black"===e},{"btn-outline-yellow":"outline-yellow"===e},{"btn-yellow":"yellow"===e},{"text-black":"outline-black"===e},{"btn-secondary":"secondary"===e},((t={})[s.a.btnSmallBlack]="small-black"===e,t))}(a),t);if(function(e){return"href"in e}(l)){var c=l.href,m=l.text,d=l.icon,b=Object(n.a)(l,["href","text","icon"]);return i.a.createElement(u.a,Object.assign({dataTestId:"button-link",to:c,className:o},b),m,d)}var p=l,v=p.text,f=p.icon,h=Object(n.a)(p,["text","icon"]);return i.a.createElement("button",Object.assign({type:"button",className:o},h),v,f)}}}]);
//# sourceMappingURL=component---src-templates-situations-page-tsx-afe5e776d42fce77c5c4.js.map