"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4518],{92699:(e,a,l)=>{l.d(a,{x:()=>m});var t=l(40638),s=l(86677),n=l(14237),o=l(99293),r=l(31417),c=l(99701),i=l(35352),u=l(87182),d=l(58685),b=l(41434),p=l(86070);const m=({iconSize:e="small",onClick:a,className:l,showDelayOnHover:m})=>{const k=(0,u.z)(),{hasContext:g,isPaused:h,canPause:y,canResume:v}=(0,d.o)((e=>({hasContext:e?.hasContext,isPaused:e?.isPaused,canPause:e?.restrictions.canPause,canResume:e?.restrictions.canResume})),b.a),x=(0,t.YQ)((e=>{h&&v?(a?.("resume"),k.resume(),(0,i.aX)(e,"play/resume")):!h&&y&&(a?.("pause"),k.pause())}),100,{leading:!0,trailing:!1}),f=h?r.Ru.get("playback-control.play"):r.Ru.get("playback-control.pause"),w=!g||(h?!v:!y);return(0,p.jsx)(c.Zp,{label:f,showDelay:m,children:(0,p.jsx)(s.$,{iconOnly:h?n.A:o._,className:l,size:{small:"small",medium:"medium",large:"large"}[e]||"small",disabled:w,"aria-label":f,"data-testid":"control-button-playpause",onClick:x,colorSet:"invertedLight"})})}},85601:(e,a,l)=>{l.d(a,{s:()=>h});var t=l(97500),s=l.n(t),n=l(65503),o=l(50733),r=l(1574),c=l(31417),i=l(99701),u=l(36958),d=l(58685),b=l(25357);const p="vW9NFcNIj8useE43Vx9G";var m=l(86070);function k(e,a,l){return a&&l?(e+1)%3:a?(e+1)%2:l?1===e?2:(e+2)%4:b.p.REPEAT_NONE}const g={[b.p.REPEAT_NONE]:{get label(){return c.Ru.get("playback-control.disable-repeat")},intent:"repeat-off",ariaChecked:"false"},[b.p.REPEAT_CONTEXT]:{get label(){return c.Ru.get("playback-control.enable-repeat")},intent:"repeat-all",ariaChecked:"true"},[b.p.REPEAT_TRACK]:{get label(){return c.Ru.get("playback-control.enable-repeat-one")},intent:"repeat-single",ariaChecked:"mixed"}},h=({onClick:e,className:a,showDelayOnHover:l})=>{const{setRepeat:t,repeat:c}=(0,u.V)(),[h,y]=(0,d.o)((e=>[e?.restrictions.canToggleRepeatContext??!1,e?.restrictions.canToggleRepeatTrack??!1])),v=!h&&!y,x=g[k(c,h,y)].label,f=c!==b.p.REPEAT_NONE;return(0,m.jsx)(i.Zp,{label:x,showDelay:l,children:(0,m.jsx)(n.H,{className:s()({[p]:f},a),iconOnly:c===b.p.REPEAT_TRACK?o.I:r.B,size:"small",disabled:v,"aria-label":x,"data-testid":"control-button-repeat",onClick:()=>{const a=k(c,h,y);e?.(a),t(a)},role:"checkbox","aria-checked":g[c].ariaChecked,semanticColor:f?"textBrightAccent":void 0})})}},12253:(e,a,l)=>{l.d(a,{h:()=>u});var t=l(65503),s=l(82509),n=l(31417),o=l(99701),r=l(87182),c=l(58685),i=l(86070);const u=({onClick:e,className:a,showDelayOnHover:l})=>{const u=(0,r.z)(),d=(0,c.o)((e=>e?.restrictions.canSeek??!1));return(0,i.jsx)(o.Zp,{label:n.Ru.get("playback-control.skip-backward-15"),showDelay:l,children:(0,i.jsx)(t.H,{iconOnly:s.e,size:"small",onClick:()=>{e?.(-15e3),u.seekBackward(15e3)},disabled:!d,"aria-label":n.Ru.get("playback-control.skip-backward-15"),"data-testid":"control-button-seek-back-15",className:a})})}},61711:(e,a,l)=>{l.d(a,{v:()=>u});var t=l(65503),s=l(51129),n=l(31417),o=l(99701),r=l(87182),c=l(58685),i=l(86070);const u=({onClick:e,className:a,showDelayOnHover:l})=>{const u=(0,r.z)(),d=(0,c.o)((e=>e?.restrictions.canSeek??!1));return(0,i.jsx)(o.Zp,{label:n.Ru.get("playback-control.skip-forward-15"),showDelay:l,children:(0,i.jsx)(t.H,{iconOnly:s.A,size:"small",onClick:()=>{e?.(15e3),u.seekForward(15e3)},disabled:!d,"aria-label":n.Ru.get("playback-control.skip-forward-15"),"data-testid":"control-button-seek-forward-15",className:a})})}},89059:(e,a,l)=>{l.d(a,{u:()=>b});var t=l(97500),s=l.n(t),n=l(65503),o=l(2792),r=l(31417),c=l(99701),i=l(36958);const u="fZjbVIqD8Xc3auRZOxu5";var d=l(86070);const b=({onClick:e,className:a,showDelayOnHover:l})=>{const{shuffle:t,setShuffle:b,canToggleShuffle:p}=(0,i.V)(),m=t?r.Ru.get("playback-control.disable-shuffle"):r.Ru.get("playback-control.enable-shuffle");return(0,d.jsx)(c.Zp,{label:m,showDelay:l,children:(0,d.jsx)(n.H,{className:s()({[u]:t},a),iconOnly:o.p,size:"small",onClick:()=>{const a=!t;e?.(a),b(a)},disabled:!p,role:"switch","aria-checked":t?"true":"false","aria-label":m,"data-testid":"control-button-shuffle",semanticColor:t?"textBrightAccent":void 0})})}},97127:(e,a,l)=>{l.d(a,{d:()=>b});var t=l(40638),s=l(65503),n=l(94547),o=l(31417),r=l(99701),c=l(35352),i=l(87182),u=l(58685),d=l(86070);const b=({onClick:e,className:a,showDelayOnHover:l})=>{const b=(0,i.z)(),p=(0,u.o)((e=>(e?.restrictions.canSkipPrevious||e?.restrictions.canSeek)??!1)),m=(0,t.YQ)((a=>{e?.(),b.skipToPrevious(),(0,c.aX)(a,"skip-back")}),100,{leading:!0,trailing:!1});return(0,d.jsx)(r.Zp,{label:o.Ru.get("playback-control.skip-back"),showDelay:l,children:(0,d.jsx)(s.H,{iconOnly:n.A,size:"small",disabled:!p,"aria-label":o.Ru.get("playback-control.skip-back"),"data-testid":"control-button-skip-back",onClick:m,className:a})})}},62747:(e,a,l)=>{l.d(a,{$:()=>b});var t=l(40638),s=l(65503),n=l(12743),o=l(31417),r=l(99701),c=l(35352),i=l(87182),u=l(58685),d=l(86070);const b=({onClick:e,className:a,showDelayOnHover:l})=>{const b=(0,i.z)(),p=(0,u.o)((e=>e?.restrictions.canSkipNext??null)),m=(0,t.YQ)((a=>{e?.(),b.skipToNext(),(0,c.aX)(a,"skip-forward")}),100,{leading:!0,trailing:!1});return(0,d.jsx)(r.Zp,{label:o.Ru.get("playback-control.skip-forward"),showDelay:l,children:(0,d.jsx)(s.H,{iconOnly:n.s,size:"small",disabled:!p,"aria-label":o.Ru.get("playback-control.skip-forward"),"data-testid":"control-button-skip-forward",onClick:m,className:a})})}},83019:(e,a,l)=>{l.d(a,{w:()=>ee});var t=l(14343),s=l(31417),n=l(26639),o=l(99701),r=l(2214),c=l(65655),i=l(47532),u=l(66621),d=l(51242),b=l(2684),p=l(18193),m=l(68836),k=l(97007),g=l(76442),h=l(88026),y=l(99760),v=l(99419),x=l(50518),f=l(58313),w=l(24393),R=l(14532),D=l(67473),S=l(92830),C=l(98843),j=l(40560),N=l(54157),O=l(11386),E=l(18727),z=l(37436),H=l(16598),V=l(15427),_=l(6210),T=l(63445),A=l(88108),P=l(32375);const B="INvB6IvAqjjvyfm0ezDi";var L=l(86070);const M={.5:r.D4,.6:c.k,.7:i.l,.8:u.W9,.9:d.l,1:b.P,1.1:p.g,1.2:m.Dx,1.3:k.A,1.4:g.l,1.5:h.in,1.6:y.h,1.7:v.e,1.8:x.B,1.9:f.T,2:w.c,2.1:R.F,2.2:D.W,2.3:S.Z,2.4:C.U,2.5:j.X,2.6:N.m,2.7:O.n,2.8:E.Y,2.9:z.X,3:H.f,3.1:V.y,3.2:_.T,3.3:T.Q,3.4:A.l,3.5:P.i},I=({speed:e,iconSize:a=20})=>{const l=M[e];return l?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{className:B,iconSize:a,style:{width:`${a}px`,height:`${a}px`}}),(0,L.jsx)("span",{className:"hidden-visually",children:`${e}x`})]}):(0,L.jsx)("span",{children:`${e}x`})};var W=l(30758),X=l(10994),Z=l(41874),Y=l(12864),F=l(7388);const U="Is0ZfXiIyRoHd9y1OWtv",$=function({selectedSpeed:e,setSelectedSpeed:a}){const l=F.wH,t=(0,W.useRef)(null),n=(0,W.useCallback)((e=>{null!==e&&(t.current=e)}),[]);return(0,W.useEffect)((()=>{t?.current&&t.current.scrollIntoView({block:"center"})}),[t]),(0,L.jsxs)(X.W,{getInitialFocusElement:e=>e?.querySelector('[aria-checked="true"]'),children:[(0,L.jsx)(Z.y,{children:s.Ru.get("playback-control.playback-speed")}),(0,L.jsx)("div",{className:U,children:l.map((l=>(0,L.jsx)(Y.D,{elementRef:l===e?n:void 0,onClick:()=>{a(l)},"data-testid":`playback-speed-option-${l}`,role:"menuitemradio","aria-label":s.Ru.get("playback-control.playback-speed-button-a11y",l),"aria-checked":l===e,children:`${l}x`},l)))})]})};var q=l(31904),Q=l(79237),G=l(62642),K=l(43329);const J="Ww5ppB6W74laf1c0H_pR",ee=({iconSize:e=20,onClick:a})=>{const{speed:l,setSpeed:r,canChangeSpeed:c}=(0,q.C)(),i=(0,Q.v)((({connectionStatus:e})=>e===G.zP.NOT_CONNECTED)),u=(0,t.NC)(K.hd),d={"--button-size":2*e+"px"};return c?(0,L.jsx)(n.t,{renderInline:!0,placement:"top-start",menu:(0,L.jsx)($,{selectedSpeed:l,setSelectedSpeed:e=>{a?.(e),r(e)}}),children:(a,t,n)=>(0,L.jsx)(o.Zp,{label:s.Ru.get("playback-control.change-playback-speed"),children:(0,L.jsx)("button",{style:d,ref:n,className:J,onClick:e=>{t(e)},"aria-label":s.Ru.get("playback-control.change-playback-speed"),"data-testid":"control-button-playback-speed",disabled:!i&&u===K._9.DEFAULT,children:(0,L.jsx)(I,{speed:l,iconSize:e})})})}):null}},86286:(e,a,l)=>{l.d(a,{M:()=>E,V:()=>O});var t=l(30758),s=l(97500),n=l.n(s),o=l(40638),r=l(31417),c=l(99701),i=l(27607),u=l(15262),d=l(61690),b=l(72616),p=l(15525),m=l(86070);const k=({volume:e=1,iconSize:a="small",...l})=>{const t={size:a,role:"presentation",...l};return 0===e?(0,m.jsx)(u.X,{"aria-label":r.Ru.get("playback-control.a11y.volume-off"),...t}):e<1/3?(0,m.jsx)(d.D,{"aria-label":r.Ru.get("playback-control.a11y.volume-low"),...t}):e<2/3?(0,m.jsx)(b.z,{"aria-label":r.Ru.get("playback-control.a11y.volume-medium"),...t}):(0,m.jsx)(p.C,{"aria-label":r.Ru.get("playback-control.a11y.volume-high"),...t})};var g=l(32792),h=l(3326),y=l(38694);var v=l(3292);const x="volume-bar",f="RyUTmsGCr7jM4YTwqq8p",w="HGaOzijxBrKrSQhwI6rT",R="volume-bar__slider-container",D="DLZvnBAg9muHrwjSyIus",S="ekolz0hXwCXtCyFNmvqb",C="volume-bar__icon-button",j="aDDQP2meKLCk46Bn7Zz1",N="XRpLYcl6xtWmk7bNdHkS";let O=function(e){return e[e.SHOW_SLIDER_ALWAYS=0]="SHOW_SLIDER_ALWAYS",e[e.SHOW_SLIDER_ON_HOVER=1]="SHOW_SLIDER_ON_HOVER",e}({});const E=({iconSize:e="small",onVolumeBarClick:a,onVolumeBarDrag:l,onToggleMuteClick:s,className:u,mode:d=O.SHOW_SLIDER_ALWAYS,sliderSize:b,sliderDirection:p="horizontal",volumeIconRef:E,isMiniPlayer:z,showDelayOnHover:H})=>{const{volume:V,setVolume:_,raiseVolume:T,lowerVolume:A}=function(){const e=(0,h.p)(),[a,l]=(0,t.useState)(-1);return(0,t.useEffect)((()=>{let a=!0;return(async()=>{const t=await e.getVolume();a&&l(t)})(),()=>{a=!1}}),[e]),(0,y.F)(g._.VOLUME,(e=>l(e.data.volume))),{volume:a,setVolume:(0,t.useCallback)((a=>{l(a),e.setVolume(a)}),[e]),raiseVolume:(0,t.useCallback)((()=>e.raiseVolume()),[e]),lowerVolume:(0,t.useCallback)((()=>e.lowerVolume()),[e])}}(),P=-1!==V,B=Math.min(1,Math.max(0,V)),[L,M]=(0,t.useState)({isDragging:!1,isHoveringButton:!1,toggleVolumeLevel:null,dragPosition:0,shouldDragValueBeUsed:!1}),{shouldDragValueBeUsed:I,dragPosition:W,isHoveringButton:X,toggleVolumeLevel:Z,isDragging:Y}=L;let F=I?W:B;P||(F=1);const U=(0,o.YQ)((e=>{const a=Math.min(1,Math.max(0,e));_(a)}),25,{maxWait:50,leading:!0}),$=()=>{M((e=>({...e,isHoveringButton:!0})))},q=()=>{M((e=>({...e,isHoveringButton:!1})))},Q=0===V?r.Ru.get("playback-control.unmute"):r.Ru.get("playback-control.mute"),G={"--button-size":2*(0,v.k)(e)+"px","--slider-width":b?`${b}px`:"100%"};return(0,m.jsxs)("div",{style:G,className:n()(x,u,{[j]:!P,[f]:"vertical"===p,[D]:d===O.SHOW_SLIDER_ON_HOVER,[w]:z}),"data-testid":"volume-bar",dir:"ltr",onWheel:e=>{if(!P)return;const a=Math.abs(e.deltaY)>Math.abs(e.deltaX)?e.deltaY:e.deltaX,l=Math.max(-120,Math.min(120,e?.nativeEvent?.wheelDelta||a))/1200,t=Math.max(0,Math.min(1,F+l));_(t)},ref:E,children:[(0,m.jsx)(c.Zp,{label:Q,showDelay:H,children:(0,m.jsx)("button",{className:n()(C,"control-button",{[N]:z}),onClick:()=>{0===F?(s?.("not_muted"),U(Z??.7)):(M((e=>({...e,toggleVolumeLevel:F}))),s?.("muted"),U(0))},disabled:!P,"aria-label":0===V?r.Ru.get("playback-control.unmute"):r.Ru.get("playback-control.mute"),onMouseEnter:$,onMouseLeave:q,"aria-describedby":"volume-icon","data-testid":"volume-bar-toggle-mute-button",children:(0,m.jsx)(k,{id:"volume-icon",iconSize:e,volume:F})})}),(0,m.jsx)("div",{className:n()(R,{[S]:"vertical"===p}),onMouseEnter:$,onMouseLeave:q,children:(0,m.jsx)(i.z2,{labelText:r.Ru.get("playback-control.a11y.volume-slider-button"),value:F,max:1,step:.1,onDragStart:e=>{M((a=>({...a,isDragging:!0,dragPosition:e,shouldDragValueBeUsed:!0})))},onDragMove:e=>{M((a=>({...a,dragPosition:e,shouldDragValueBeUsed:!0}))),Y&&(l?.(e),U(e))},onDragEnd:e=>{M((e=>({...e,shouldDragValueBeUsed:!1,dragPosition:0,isDragging:!1}))),a?.(e),U(e)},onStepBackward:A,onStepForward:T,forceActiveStyles:X,direction:p})})]})}},32277:(e,a,l)=>{l.d(a,{w:()=>r});var t=l(30758),s=l(41364),n=l(86070);const o=({renderDisabled:e=(()=>null),renderEnabled:a})=>(0,s.X)(!0)?a():e(),r=e=>(0,n.jsx)(t.Suspense,{fallback:null,children:(0,n.jsx)(o,{...e})})},56507:(e,a,l)=>{l.d(a,{a:()=>u});var t=l(2792),s=l(77),n=l(31058),o=l(36958),r=l(58685),c=l(37474),i=l(86070);const u=({size:e,withSnackbar:a,className:l,showDelayOnHover:u})=>{const d=(0,r.o)((e=>e?.context),((e,a)=>e?.uri===a?.uri)),{title:b}=(0,n.$)(!0),{canToggleShuffle:p}=(0,o.V)();return(0,c.O)(d)?(0,i.jsx)(s.Y,{size:e,contextUri:d.uri,entityName:b??"",isActive:!0,activationPlacement:"top",offsetDotDistance:!1,withPadding:!0,disabled:!p,withActivation:!1,withSnackbar:a,className:l,showDelayOnHover:u}):(0,i.jsx)(s.u,{size:e,shuffleModeConfig:{icon:t.p},shuffleIsOn:!1,disabled:!0,withPadding:!0,className:l,showDelayOnHover:u})}},38694:(e,a,l)=>{l.d(a,{F:()=>n});var t=l(30758),s=l(3326);function n(e,a){const l=(0,t.useRef)(a),n=(0,s.p)();l.current=a,(0,t.useEffect)((()=>n.getEvents().addListener(e,(e=>{l.current(e)}))),[e,n])}}}]);
//# sourceMappingURL=4518.js.map