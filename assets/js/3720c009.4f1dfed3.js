"use strict";(self.webpackChunkmy_writeups=self.webpackChunkmy_writeups||[]).push([[4787],{1807:(t,e,s)=>{s.d(e,{A:()=>o});s(6540);var a=s(3523),r=s(3953),l=s(9303);const n={tag:"tag_Nnez"};var i=s(4848);function c(t){let{letterEntry:e}=t;return(0,i.jsxs)("article",{children:[(0,i.jsx)(l.A,{as:"h2",id:e.letter,children:e.letter}),(0,i.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,i.jsx)("li",{className:n.tag,children:(0,i.jsx)(r.A,{...t})},t.permalink)))}),(0,i.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const s=(0,a.Q)(e);return(0,i.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,i.jsx)(c,{letterEntry:t},t.letter)))})}},3523:(t,e,s)=>{s.d(e,{Q:()=>l,b:()=>r});var a=s(539);const r=()=>(0,a.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}},3775:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});s(6540);var a=s(4164),r=s(1082),l=s(204),n=s(3523),i=s(1807),c=s(7220),o=s(9303),g=s(4848);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:e}),(0,g.jsx)(c.A,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:s}=t;return(0,g.jsx)(r.e3,{className:(0,a.A)(l.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.A,{as:"h1",children:s}),(0,g.jsx)(i.A,{tags:e})]})})})})}function d(t){const e=(0,n.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(h,{...t,title:e})]})}},3953:(t,e,s)=>{s.d(e,{A:()=>i});s(6540);var a=s(4164),r=s(6289);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(4848);function i(t){let{permalink:e,label:s,count:i,description:c}=t;return(0,n.jsxs)(r.A,{href:e,title:c,className:(0,a.A)(l.tag,i?l.tagWithCount:l.tagRegular),children:[s,i&&(0,n.jsx)("span",{children:i})]})}}}]);