"use strict";(self.webpackChunksop_antd=self.webpackChunksop_antd||[]).push([[137],{62635:function(Nt,ut,d){d.d(ut,{Z:function(){return w}});var o=d(97460),st=d(67294),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},V=L,nt=d(55230),rt=function(K,ft){return st.createElement(nt.Z,(0,o.Z)({},K,{ref:ft,icon:V}))},k=st.forwardRef(rt),w=k},40411:function(Nt,ut,d){d.d(ut,{Z:function(){return Vt}});var o=d(67294),st=d(93967),L=d.n(st),V=d(29372),nt=d(98787),rt=d(96159),k=d(53124),w=d(8722),_=d(14747),K=d(98719),ft=d(83262),vt=d(83559);const yt=new w.Keyframes("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),wt=new w.Keyframes("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),ht=new w.Keyframes("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),jt=new w.Keyframes("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),$t=new w.Keyframes("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Pt=new w.Keyframes("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),Tt=e=>{const{componentCls:i,iconCls:g,antCls:c,badgeShadowSize:l,textFontSize:y,textFontSizeSM:p,statusSize:Z,dotSize:x,textFontWeight:R,indicatorHeight:$,indicatorHeightSM:b,marginXS:E,calc:j}=e,O=`${c}-scroll-number`,X=(0,K.Z)(e,(M,N)=>{let{darkColor:P}=N;return{[`&${i} ${i}-color-${M}`]:{background:P,[`&:not(${i}-count)`]:{color:P},"a:hover &":{background:P}}}});return{[i]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,_.Wf)(e)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${i}-count`]:{display:"inline-flex",justifyContent:"center",zIndex:e.indicatorZIndex,minWidth:$,height:$,color:e.badgeTextColor,fontWeight:R,fontSize:y,lineHeight:(0,w.unit)($),whiteSpace:"nowrap",textAlign:"center",background:e.badgeColor,borderRadius:j($).div(2).equal(),boxShadow:`0 0 0 ${(0,w.unit)(l)} ${e.badgeShadowColor}`,transition:`background ${e.motionDurationMid}`,a:{color:e.badgeTextColor},"a:hover":{color:e.badgeTextColor},"a:hover &":{background:e.badgeColorHover}},[`${i}-count-sm`]:{minWidth:b,height:b,fontSize:p,lineHeight:(0,w.unit)(b),borderRadius:j(b).div(2).equal()},[`${i}-multiple-words`]:{padding:`0 ${(0,w.unit)(e.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${i}-dot`]:{zIndex:e.indicatorZIndex,width:x,minWidth:x,height:x,background:e.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${(0,w.unit)(l)} ${e.badgeShadowColor}`},[`${i}-count, ${i}-dot, ${O}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${g}-spin`]:{animationName:Pt,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${i}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${i}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:Z,height:Z,verticalAlign:"middle",borderRadius:"50%"},[`${i}-status-success`]:{backgroundColor:e.colorSuccess},[`${i}-status-processing`]:{overflow:"visible",color:e.colorInfo,backgroundColor:e.colorInfo,borderColor:"currentcolor","&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:l,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:yt,animationDuration:e.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${i}-status-default`]:{backgroundColor:e.colorTextPlaceholder},[`${i}-status-error`]:{backgroundColor:e.colorError},[`${i}-status-warning`]:{backgroundColor:e.colorWarning},[`${i}-status-text`]:{marginInlineStart:E,color:e.colorText,fontSize:e.fontSize}}}),X),{[`${i}-zoom-appear, ${i}-zoom-enter`]:{animationName:wt,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`${i}-zoom-leave`]:{animationName:ht,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`&${i}-not-a-wrapper`]:{[`${i}-zoom-appear, ${i}-zoom-enter`]:{animationName:jt,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`${i}-zoom-leave`]:{animationName:$t,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`&:not(${i}-status)`]:{verticalAlign:"middle"},[`${O}-custom-component, ${i}-count`]:{transform:"none"},[`${O}-custom-component, ${O}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[O]:{overflow:"hidden",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack}`,[`${O}-only`]:{position:"relative",display:"inline-block",height:$,transition:`all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${O}-only-unit`]:{height:$,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${O}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${i}-count, ${i}-dot, ${O}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},Ct=e=>{const{fontHeight:i,lineWidth:g,marginXS:c,colorBorderBg:l}=e,y=i,p=g,Z=e.colorBgContainer,x=e.colorError,R=e.colorErrorHover;return(0,ft.mergeToken)(e,{badgeFontHeight:y,badgeShadowSize:p,badgeTextColor:Z,badgeColor:x,badgeColorHover:R,badgeShadowColor:l,badgeProcessingDuration:"1.2s",badgeRibbonOffset:c,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},Ot=e=>{const{fontSize:i,lineHeight:g,fontSizeSM:c,lineWidth:l}=e;return{indicatorZIndex:"auto",indicatorHeight:Math.round(i*g)-2*l,indicatorHeightSM:i,dotSize:c/2,textFontSize:c,textFontSizeSM:c,textFontWeight:"normal",statusSize:c/2}};var Rt=(0,vt.I$)("Badge",e=>{const i=Ct(e);return Tt(i)},Ot);const zt=e=>{const{antCls:i,badgeFontHeight:g,marginXS:c,badgeRibbonOffset:l,calc:y}=e,p=`${i}-ribbon`,Z=`${i}-ribbon-wrapper`,x=(0,K.Z)(e,(R,$)=>{let{darkColor:b}=$;return{[`&${p}-color-${R}`]:{background:b,color:b}}});return{[Z]:{position:"relative"},[p]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,_.Wf)(e)),{position:"absolute",top:c,padding:`0 ${(0,w.unit)(e.paddingXS)}`,color:e.colorPrimary,lineHeight:(0,w.unit)(g),whiteSpace:"nowrap",backgroundColor:e.colorPrimary,borderRadius:e.borderRadiusSM,[`${p}-text`]:{color:e.colorTextLightSolid},[`${p}-corner`]:{position:"absolute",top:"100%",width:l,height:l,color:"currentcolor",border:`${(0,w.unit)(y(l).div(2).equal())} solid`,transform:e.badgeRibbonCornerTransform,transformOrigin:"top",filter:e.badgeRibbonCornerFilter}}),x),{[`&${p}-placement-end`]:{insetInlineEnd:y(l).mul(-1).equal(),borderEndEndRadius:0,[`${p}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${p}-placement-start`]:{insetInlineStart:y(l).mul(-1).equal(),borderEndStartRadius:0,[`${p}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var Ft=(0,vt.I$)(["Badge","Ribbon"],e=>{const i=Ct(e);return zt(i)},Ot),Dt=e=>{const{className:i,prefixCls:g,style:c,color:l,children:y,text:p,placement:Z="end",rootClassName:x}=e,{getPrefixCls:R,direction:$}=o.useContext(k.E_),b=R("ribbon",g),E=`${b}-wrapper`,[j,O,X]=Ft(b,E),M=(0,nt.o2)(l,!1),N=L()(b,`${b}-placement-${Z}`,{[`${b}-rtl`]:$==="rtl",[`${b}-color-${l}`]:M},i),P={},J={};return l&&!M&&(P.background=l,J.color=l),j(o.createElement("div",{className:L()(E,x,O,X)},y,o.createElement("div",{className:L()(N,O),style:Object.assign(Object.assign({},P),c)},o.createElement("span",{className:`${b}-text`},p),o.createElement("div",{className:`${b}-corner`,style:J}))))};const St=e=>{const{prefixCls:i,value:g,current:c,offset:l=0}=e;let y;return l&&(y={position:"absolute",top:`${l}00%`,left:0}),o.createElement("span",{style:y,className:L()(`${i}-only-unit`,{current:c})},g)};function I(e,i,g){let c=e,l=0;for(;(c+10)%10!==i;)c+=g,l+=g;return l}var Lt=e=>{const{prefixCls:i,count:g,value:c}=e,l=Number(c),y=Math.abs(g),[p,Z]=o.useState(l),[x,R]=o.useState(y),$=()=>{Z(l),R(y)};o.useEffect(()=>{const j=setTimeout($,1e3);return()=>clearTimeout(j)},[l]);let b,E;if(p===l||Number.isNaN(l)||Number.isNaN(p))b=[o.createElement(St,Object.assign({},e,{key:l,current:!0}))],E={transition:"none"};else{b=[];const j=l+10,O=[];for(let N=l;N<=j;N+=1)O.push(N);const X=O.findIndex(N=>N%10===p);b=O.map((N,P)=>{const J=N%10;return o.createElement(St,Object.assign({},e,{key:N,value:J,offset:P-X,current:P===X}))});const M=x<y?1:-1;E={transform:`translateY(${-I(p,l,M)}00%)`}}return o.createElement("span",{className:`${i}-only`,style:E,onTransitionEnd:$},b)},Zt=function(e,i){var g={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&i.indexOf(c)<0&&(g[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,c=Object.getOwnPropertySymbols(e);l<c.length;l++)i.indexOf(c[l])<0&&Object.prototype.propertyIsEnumerable.call(e,c[l])&&(g[c[l]]=e[c[l]]);return g},Jt=o.forwardRef((e,i)=>{const{prefixCls:g,count:c,className:l,motionClassName:y,style:p,title:Z,show:x,component:R="sup",children:$}=e,b=Zt(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:E}=o.useContext(k.E_),j=E("scroll-number",g),O=Object.assign(Object.assign({},b),{"data-show":x,style:p,className:L()(j,l,y),title:Z});let X=c;if(c&&Number(c)%1===0){const M=String(c).split("");X=o.createElement("bdi",null,M.map((N,P)=>o.createElement(Lt,{prefixCls:j,count:Number(c),value:N,key:M.length-P})))}return p!=null&&p.borderColor&&(O.style=Object.assign(Object.assign({},p),{boxShadow:`0 0 0 1px ${p.borderColor} inset`})),$?(0,rt.Tm)($,M=>({className:L()(`${j}-custom-component`,M==null?void 0:M.className,y)})):o.createElement(R,Object.assign({},O,{ref:i}),X)}),xt=function(e,i){var g={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&i.indexOf(c)<0&&(g[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,c=Object.getOwnPropertySymbols(e);l<c.length;l++)i.indexOf(c[l])<0&&Object.prototype.propertyIsEnumerable.call(e,c[l])&&(g[c[l]]=e[c[l]]);return g};const Wt=o.forwardRef((e,i)=>{var g,c,l,y,p;const{prefixCls:Z,scrollNumberPrefixCls:x,children:R,status:$,text:b,color:E,count:j=null,overflowCount:O=99,dot:X=!1,size:M="default",title:N,offset:P,style:J,className:Qt,rootClassName:At,classNames:Q,styles:t,showZero:m=!1}=e,a=xt(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:n,direction:s,badge:r}=o.useContext(k.E_),f=n("badge",Z),[B,S,C]=Rt(f),h=j>O?`${O}+`:j,u=h==="0"||h===0,tt=j===null||u&&!m,A=($!=null||E!=null)&&tt,v=X&&!u,D=v?"":h,W=(0,o.useMemo)(()=>(D==null||D===""||u&&!m)&&!v,[D,u,m,v]),H=(0,o.useRef)(j);W||(H.current=j);const G=H.current,et=(0,o.useRef)(D);W||(et.current=D);const at=et.current,it=(0,o.useRef)(v);W||(it.current=v);const q=(0,o.useMemo)(()=>{if(!P)return Object.assign(Object.assign({},r==null?void 0:r.style),J);const Y={marginTop:P[1]};return s==="rtl"?Y.left=parseInt(P[0],10):Y.right=-parseInt(P[0],10),Object.assign(Object.assign(Object.assign({},Y),r==null?void 0:r.style),J)},[s,P,J,r==null?void 0:r.style]),lt=N!=null?N:typeof G=="string"||typeof G=="number"?G:void 0,z=W||!b?null:o.createElement("span",{className:`${f}-status-text`},b),T=!G||typeof G!="object"?void 0:(0,rt.Tm)(G,Y=>({style:Object.assign(Object.assign({},q),Y.style)})),F=(0,nt.o2)(E,!1),mt=L()(Q==null?void 0:Q.indicator,(g=r==null?void 0:r.classNames)===null||g===void 0?void 0:g.indicator,{[`${f}-status-dot`]:A,[`${f}-status-${$}`]:!!$,[`${f}-color-${E}`]:F}),U={};E&&!F&&(U.color=E,U.background=E);const Et=L()(f,{[`${f}-status`]:A,[`${f}-not-a-wrapper`]:!R,[`${f}-rtl`]:s==="rtl"},Qt,At,r==null?void 0:r.className,(c=r==null?void 0:r.classNames)===null||c===void 0?void 0:c.root,Q==null?void 0:Q.root,S,C);if(!R&&A){const Y=q.color;return B(o.createElement("span",Object.assign({},a,{className:Et,style:Object.assign(Object.assign(Object.assign({},t==null?void 0:t.root),(l=r==null?void 0:r.styles)===null||l===void 0?void 0:l.root),q)}),o.createElement("span",{className:mt,style:Object.assign(Object.assign(Object.assign({},t==null?void 0:t.indicator),(y=r==null?void 0:r.styles)===null||y===void 0?void 0:y.indicator),U)}),b&&o.createElement("span",{style:{color:Y},className:`${f}-status-text`},b)))}return B(o.createElement("span",Object.assign({ref:i},a,{className:Et,style:Object.assign(Object.assign({},(p=r==null?void 0:r.styles)===null||p===void 0?void 0:p.root),t==null?void 0:t.root)}),R,o.createElement(V.default,{visible:!W,motionName:`${f}-zoom`,motionAppear:!1,motionDeadline:1e3},Y=>{let{className:Gt}=Y;var bt,ct;const Kt=n("scroll-number",x),gt=it.current,Bt=L()(Q==null?void 0:Q.indicator,(bt=r==null?void 0:r.classNames)===null||bt===void 0?void 0:bt.indicator,{[`${f}-dot`]:gt,[`${f}-count`]:!gt,[`${f}-count-sm`]:M==="small",[`${f}-multiple-words`]:!gt&&at&&at.toString().length>1,[`${f}-status-${$}`]:!!$,[`${f}-color-${E}`]:F});let dt=Object.assign(Object.assign(Object.assign({},t==null?void 0:t.indicator),(ct=r==null?void 0:r.styles)===null||ct===void 0?void 0:ct.indicator),q);return E&&!F&&(dt=dt||{},dt.background=E),o.createElement(Jt,{prefixCls:Kt,show:!W,motionClassName:Gt,className:Bt,count:at,title:lt,style:dt,key:"scrollNumber"},T)}),z))});Wt.Ribbon=Dt;var Vt=Wt},85137:function(Nt,ut,d){d.d(ut,{Z:function(){return Q}});var o=d(67294),st=d(62635),L=d(93967),V=d.n(L),nt=d(29372),rt=d(42550),k=d(66367),w=d(58375),_=d(48783),K=d(53124);const ft=o.createContext(void 0),{Provider:vt}=ft;var yt=ft,wt=d(98423),ht=d(87263),jt=d(40411),$t=d(35792),Pt=d(83062),Tt=d(97460),Ct={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},Ot=Ct,Rt=d(55230),zt=function(m,a){return o.createElement(Rt.Z,(0,Tt.Z)({},m,{ref:a,icon:Ot}))},Ft=o.forwardRef(zt),Mt=Ft;const Dt=t=>{const{icon:m,description:a,prefixCls:n,className:s}=t,r=o.createElement("div",{className:`${n}-icon`},o.createElement(Mt,null));return o.createElement("div",{onClick:t.onClick,onFocus:t.onFocus,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,className:V()(s,`${n}-content`)},m||a?o.createElement(o.Fragment,null,m&&o.createElement("div",{className:`${n}-icon`},m),a&&o.createElement("div",{className:`${n}-description`},a)):r)};var St=(0,o.memo)(Dt),I=d(8722),Ht=d(14747),Lt=d(16932),Zt=d(83559),Yt=d(83262),xt=t=>t===0?0:t-Math.sqrt(Math.pow(t,2)/2),pt=d(93590),Vt=t=>{const{componentCls:m,floatButtonSize:a,motionDurationSlow:n,motionEaseInOutCirc:s,calc:r}=t,f=new I.Keyframes("antFloatButtonMoveTopIn",{"0%":{transform:`translate3d(0, ${(0,I.unit)(a)}, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),B=new I.Keyframes("antFloatButtonMoveTopOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${(0,I.unit)(a)}, 0)`,transformOrigin:"0 0",opacity:0}}),S=new I.Keyframes("antFloatButtonMoveRightIn",{"0%":{transform:`translate3d(${r(a).mul(-1).equal()}, 0, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),C=new I.Keyframes("antFloatButtonMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(${r(a).mul(-1).equal()}, 0, 0)`,transformOrigin:"0 0",opacity:0}}),h=new I.Keyframes("antFloatButtonMoveBottomIn",{"0%":{transform:`translate3d(0, ${r(a).mul(-1).equal()}, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),u=new I.Keyframes("antFloatButtonMoveBottomOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${r(a).mul(-1).equal()}, 0)`,transformOrigin:"0 0",opacity:0}}),tt=new I.Keyframes("antFloatButtonMoveLeftIn",{"0%":{transform:`translate3d(${(0,I.unit)(a)}, 0, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),A=new I.Keyframes("antFloatButtonMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(${(0,I.unit)(a)}, 0, 0)`,transformOrigin:"0 0",opacity:0}}),v=`${m}-group`;return[{[v]:{[`&${v}-top ${v}-wrap`]:(0,pt.R)(`${v}-wrap`,f,B,n,!0),[`&${v}-bottom ${v}-wrap`]:(0,pt.R)(`${v}-wrap`,h,u,n,!0),[`&${v}-left ${v}-wrap`]:(0,pt.R)(`${v}-wrap`,tt,A,n,!0),[`&${v}-right ${v}-wrap`]:(0,pt.R)(`${v}-wrap`,S,C,n,!0)}},{[`${v}-wrap`]:{[`&${v}-wrap-enter, &${v}-wrap-appear`]:{opacity:0,animationTimingFunction:s},[`&${v}-wrap-leave`]:{opacity:1,animationTimingFunction:s}}}]};const e=t=>{const{antCls:m,componentCls:a,floatButtonSize:n,margin:s,borderRadiusLG:r,borderRadiusSM:f,badgeOffset:B,floatButtonBodyPadding:S,zIndexPopupBase:C,calc:h}=t,u=`${a}-group`;return{[u]:Object.assign(Object.assign({},(0,Ht.Wf)(t)),{zIndex:C,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"none",position:"fixed",height:"auto",boxShadow:"none",minWidth:n,minHeight:n,insetInlineEnd:t.floatButtonInsetInlineEnd,bottom:t.floatButtonInsetBlockEnd,borderRadius:r,[`${u}-wrap`]:{zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"},[`&${u}-rtl`]:{direction:"rtl"},[a]:{position:"static"}}),[`${u}-top > ${u}-wrap`]:{flexDirection:"column",top:"auto",bottom:h(n).add(s).equal()},[`${u}-bottom > ${u}-wrap`]:{flexDirection:"column",top:h(n).add(s).equal(),bottom:"auto"},[`${u}-right > ${u}-wrap`]:{flexDirection:"row",left:{_skip_check_:!0,value:h(n).add(s).equal()},right:{_skip_check_:!0,value:"auto"}},[`${u}-left > ${u}-wrap`]:{flexDirection:"row",left:{_skip_check_:!0,value:"auto"},right:{_skip_check_:!0,value:h(n).add(s).equal()}},[`${u}-circle`]:{gap:s,[`${u}-wrap`]:{gap:s}},[`${u}-square`]:{[`${a}-square`]:{padding:0,borderRadius:0,[`&${u}-trigger`]:{borderRadius:r},"&:first-child":{borderStartStartRadius:r,borderStartEndRadius:r},"&:last-child":{borderEndStartRadius:r,borderEndEndRadius:r},"&:not(:last-child)":{borderBottom:`${(0,I.unit)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${m}-badge`]:{[`${m}-badge-count`]:{top:h(h(S).add(B)).mul(-1).equal(),insetInlineEnd:h(h(S).add(B)).mul(-1).equal()}}},[`${u}-wrap`]:{borderRadius:r,boxShadow:t.boxShadowSecondary,[`${a}-square`]:{boxShadow:"none",borderRadius:0,padding:S,[`${a}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize,borderRadius:f}}}},[`${u}-top > ${u}-wrap, ${u}-bottom > ${u}-wrap`]:{[`> ${a}-square`]:{"&:first-child":{borderStartStartRadius:r,borderStartEndRadius:r},"&:last-child":{borderEndStartRadius:r,borderEndEndRadius:r},"&:not(:last-child)":{borderBottom:`${(0,I.unit)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`}}},[`${u}-left > ${u}-wrap, ${u}-right > ${u}-wrap`]:{[`> ${a}-square`]:{"&:first-child":{borderStartStartRadius:r,borderEndStartRadius:r},"&:last-child":{borderStartEndRadius:r,borderEndEndRadius:r},"&:not(:last-child)":{borderInlineEnd:`${(0,I.unit)(t.lineWidth)} ${t.lineType} ${t.colorSplit}`}}},[`${u}-circle-shadow`]:{boxShadow:"none"},[`${u}-square-shadow`]:{boxShadow:t.boxShadowSecondary,[`${a}-square`]:{boxShadow:"none",padding:S,[`${a}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize,borderRadius:f}}}}},i=t=>{const{antCls:m,componentCls:a,floatButtonBodyPadding:n,floatButtonIconSize:s,floatButtonSize:r,borderRadiusLG:f,badgeOffset:B,dotOffsetInSquare:S,dotOffsetInCircle:C,zIndexPopupBase:h,calc:u}=t;return{[a]:Object.assign(Object.assign({},(0,Ht.Wf)(t)),{border:"none",position:"fixed",cursor:"pointer",zIndex:h,display:"block",width:r,height:r,insetInlineEnd:t.floatButtonInsetInlineEnd,bottom:t.floatButtonInsetBlockEnd,boxShadow:t.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${m}-badge`]:{width:"100%",height:"100%",[`${m}-badge-count`]:{transform:"translate(0, 0)",transformOrigin:"center",top:u(B).mul(-1).equal(),insetInlineEnd:u(B).mul(-1).equal()}},[`${a}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${t.motionDurationMid}`,[`${a}-content`]:{overflow:"hidden",textAlign:"center",minHeight:r,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:`${(0,I.unit)(u(n).div(2).equal())} ${(0,I.unit)(n)}`,[`${a}-icon`]:{textAlign:"center",margin:"auto",width:s,fontSize:s,lineHeight:1}}}}),[`${a}-rtl`]:{direction:"rtl"},[`${a}-circle`]:{height:r,borderRadius:"50%",[`${m}-badge`]:{[`${m}-badge-dot`]:{top:C,insetInlineEnd:C}},[`${a}-body`]:{borderRadius:"50%"}},[`${a}-square`]:{height:"auto",minHeight:r,borderRadius:f,[`${m}-badge`]:{[`${m}-badge-dot`]:{top:S,insetInlineEnd:S}},[`${a}-body`]:{height:"auto",borderRadius:f}},[`${a}-default`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,[`${a}-body`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorFillContent},[`${a}-content`]:{[`${a}-icon`]:{color:t.colorText},[`${a}-description`]:{display:"flex",alignItems:"center",lineHeight:(0,I.unit)(t.fontSizeLG),color:t.colorText,fontSize:t.fontSizeSM}}}},[`${a}-primary`]:{backgroundColor:t.colorPrimary,[`${a}-body`]:{backgroundColor:t.colorPrimary,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorPrimaryHover},[`${a}-content`]:{[`${a}-icon`]:{color:t.colorTextLightSolid},[`${a}-description`]:{display:"flex",alignItems:"center",lineHeight:(0,I.unit)(t.fontSizeLG),color:t.colorTextLightSolid,fontSize:t.fontSizeSM}}}}}},g=t=>({dotOffsetInCircle:xt(t.controlHeightLG/2),dotOffsetInSquare:xt(t.borderRadiusLG)});var c=(0,Zt.I$)("FloatButton",t=>{const{colorTextLightSolid:m,colorBgElevated:a,controlHeightLG:n,marginXXL:s,marginLG:r,fontSize:f,fontSizeIcon:B,controlItemBgHover:S,paddingXXS:C,calc:h}=t,u=(0,Yt.mergeToken)(t,{floatButtonBackgroundColor:a,floatButtonColor:m,floatButtonHoverBackgroundColor:S,floatButtonFontSize:f,floatButtonIconSize:h(B).mul(1.5).equal(),floatButtonSize:n,floatButtonInsetBlockEnd:s,floatButtonInsetInlineEnd:r,floatButtonBodySize:h(n).sub(h(C).mul(2)).equal(),floatButtonBodyPadding:C,badgeOffset:h(C).mul(1.5).equal()});return[e(u),i(u),(0,Lt.J$)(t),Vt(u)]},g),l=function(t,m){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&m.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)m.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(a[n[s]]=t[n[s]]);return a};const y="float-btn";var x=o.forwardRef((t,m)=>{const{prefixCls:a,className:n,rootClassName:s,style:r,type:f="default",shape:B="circle",icon:S,description:C,tooltip:h,htmlType:u="button",badge:tt={}}=t,A=l(t,["prefixCls","className","rootClassName","style","type","shape","icon","description","tooltip","htmlType","badge"]),{getPrefixCls:v,direction:D}=(0,o.useContext)(K.E_),W=(0,o.useContext)(yt),H=v(y,a),G=(0,$t.Z)(H),[et,at,it]=c(H,G),q=W||B,lt=V()(at,it,G,H,n,s,`${H}-${f}`,`${H}-${q}`,{[`${H}-rtl`]:D==="rtl"}),[z]=(0,ht.Cn)("FloatButton",r==null?void 0:r.zIndex),T=Object.assign(Object.assign({},r),{zIndex:z}),F=(0,wt.Z)(tt,["title","children","status","text"]),mt=(0,o.useMemo)(()=>({prefixCls:H,description:C,icon:S,type:f}),[H,C,S,f]);let U=o.createElement("div",{className:`${H}-body`},o.createElement(St,Object.assign({},mt)));return"badge"in t&&(U=o.createElement(jt.Z,Object.assign({},F),U)),"tooltip"in t&&(U=o.createElement(Pt.Z,{title:h,placement:D==="rtl"?"right":"left"},U)),et(t.href?o.createElement("a",Object.assign({ref:m},A,{className:lt,style:T}),U):o.createElement("button",Object.assign({ref:m},A,{className:lt,style:T,type:u}),U))}),R=function(t,m){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&m.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)m.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(a[n[s]]=t[n[s]]);return a},b=o.forwardRef((t,m)=>{const{prefixCls:a,className:n,type:s="default",shape:r="circle",visibilityHeight:f=400,icon:B=o.createElement(st.Z,null),target:S,onClick:C,duration:h=450}=t,u=R(t,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[tt,A]=(0,o.useState)(f===0),v=o.useRef(null);o.useImperativeHandle(m,()=>({nativeElement:v.current}));const D=()=>{var z;return((z=v.current)===null||z===void 0?void 0:z.ownerDocument)||window},W=(0,_.Z)(z=>{const T=(0,k.Z)(z.target);A(T>=f)});(0,o.useEffect)(()=>{const T=(S||D)();return W({target:T}),T==null||T.addEventListener("scroll",W),()=>{W.cancel(),T==null||T.removeEventListener("scroll",W)}},[S]);const H=z=>{(0,w.Z)(0,{getContainer:S||D,duration:h}),C==null||C(z)},{getPrefixCls:G}=(0,o.useContext)(K.E_),et=G(y,a),at=G(),q=(0,o.useContext)(yt)||r,lt=Object.assign({prefixCls:et,icon:B,type:s,shape:q},u);return o.createElement(nt.default,{visible:tt,motionName:`${at}-fade`},(z,T)=>{let{className:F}=z;return o.createElement(x,Object.assign({ref:(0,rt.sQ)(v,T)},lt,{onClick:H,className:V()(n,F)}))})}),E=d(97937),j=d(56790),O=d(21770),X=function(t,m){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&m.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)m.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(a[n[s]]=t[n[s]]);return a},N=t=>{var m;const{prefixCls:a,className:n,style:s,shape:r="circle",type:f="default",placement:B="top",icon:S=o.createElement(Mt,null),closeIcon:C,description:h,trigger:u,children:tt,onOpenChange:A,open:v,onClick:D}=t,W=X(t,["prefixCls","className","style","shape","type","placement","icon","closeIcon","description","trigger","children","onOpenChange","open","onClick"]),{direction:H,getPrefixCls:G,floatButtonGroup:et}=o.useContext(K.E_),at=(m=C!=null?C:et==null?void 0:et.closeIcon)!==null&&m!==void 0?m:o.createElement(E.Z,null),it=G(y,a),q=(0,$t.Z)(it),[lt,z,T]=c(it,q),F=`${it}-group`,mt=u&&["click","hover"].includes(u),U=B&&["top","left","right","bottom"].includes(B),Et=V()(F,z,T,q,n,{[`${F}-rtl`]:H==="rtl",[`${F}-${r}`]:r,[`${F}-${r}-shadow`]:!mt,[`${F}-${B}`]:mt&&U}),[Y]=(0,ht.Cn)("FloatButton",s==null?void 0:s.zIndex),Gt=Object.assign(Object.assign({},s),{zIndex:Y}),bt=V()(z,`${F}-wrap`),[ct,Kt]=(0,O.Z)(!1,{value:v}),gt=o.useRef(null),Bt=u==="hover",dt=u==="click",It=(0,j.zX)(ot=>{ct!==ot&&(Kt(ot),A==null||A(ot))}),qt=()=>{Bt&&It(!0)},kt=()=>{Bt&&It(!1)},_t=ot=>{dt&&It(!ct),D==null||D(ot)};return o.useEffect(()=>{if(dt){const ot=Xt=>{var Ut;!((Ut=gt.current)===null||Ut===void 0)&&Ut.contains(Xt.target)||It(!1)};return document.addEventListener("click",ot,{capture:!0}),()=>document.removeEventListener("click",ot,{capture:!0})}},[dt]),lt(o.createElement(vt,{value:r},o.createElement("div",{ref:gt,className:Et,style:Gt,onMouseEnter:qt,onMouseLeave:kt},mt?o.createElement(o.Fragment,null,o.createElement(nt.default,{visible:ct,motionName:`${F}-wrap`},ot=>{let{className:Xt}=ot;return o.createElement("div",{className:V()(Xt,bt)},tt)}),o.createElement(x,Object.assign({type:f,icon:ct?at:S,description:h,"aria-label":t["aria-label"],className:`${F}-trigger`,onClick:_t},W))):tt)))},P=function(t,m){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&m.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)m.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(a[n[s]]=t[n[s]]);return a};const J=t=>{var{backTop:m}=t,a=P(t,["backTop"]);return m?o.createElement(b,Object.assign({},a,{visibilityHeight:0})):o.createElement(x,Object.assign({},a))};var At=t=>{var{className:m,items:a}=t,n=P(t,["className","items"]);const{prefixCls:s}=n,{getPrefixCls:r}=o.useContext(K.E_),B=`${r(y,s)}-pure`;return a?o.createElement(N,Object.assign({className:V()(m,B)},n),a.map((S,C)=>o.createElement(J,Object.assign({key:C},S)))):o.createElement(J,Object.assign({className:V()(m,B)},n))};x.BackTop=b,x.Group=N,x._InternalPanelDoNotUseOrYouWillBeFired=At;var Q=x},16932:function(Nt,ut,d){d.d(ut,{J$:function(){return nt}});var o=d(8722),st=d(93590);const L=new o.Keyframes("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),V=new o.Keyframes("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),nt=function(rt){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:w}=rt,_=`${w}-fade`,K=k?"&":"";return[(0,st.R)(_,L,V,rt.motionDurationMid,k),{[`
        ${K}${_}-enter,
        ${K}${_}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${K}${_}-leave`]:{animationTimingFunction:"linear"}}]}}}]);