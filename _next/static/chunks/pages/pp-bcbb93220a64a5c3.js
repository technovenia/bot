(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{7504:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pp",function(){return l(7288)}])},3062:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var r=l(5893),a=l(3148),n=l(5430);function s(e){a.kL.register(a.uw,a.f$,a.od,a.jn,a.Dx,a.u,a.De);let t=Array.from({length:Math.max(e.chartY1.length,e.chartY2.length)},(e,t)=>t+1),l={labels:t,datasets:[{label:"Dataset 1",data:e.chartY1,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Dataset 2",data:e.chartY2,borderColor:"rgb(235, 50, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]};return(0,r.jsx)(n.x1,{data:l,height:50,options:{responsive:!0,plugins:{legend:{display:!1},title:{display:!1,text:"Chart.js Line Chart"},grid:{display:!0}}}})}},1060:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var r=l(5893),a=l(5117);function n(e){return(0,r.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",backgroundColor:e.bgColor,padding:"10px"},children:[(0,r.jsx)(a.x,{fz:"xl",fw:700,tt:"uppercase",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:e.value}),e.label&&(0,r.jsx)(a.x,{fz:"xs",c:"#777",children:e.label})]})}},3505:function(e,t,l){"use strict";l.d(t,{$:function(){return c}});var r=l(5893),a=l(6817),n=l(1017),s=l(5117),o=l(3941);let i=(0,a.k)(e=>({card:{height:"100%"},title:{color:e.fn.rgba(e.white,.65)},stats:{color:e.white},progressBar:{backgroundColor:e.white},progressTrack:{backgroundColor:e.fn.rgba(e.white,.4)}}));function c(e){let{classes:t}=i();return(0,r.jsxs)(n.Z,{withBorder:!0,radius:"md",p:"xl",className:t.card,children:[(0,r.jsx)(s.x,{fz:"xs",tt:"uppercase",fw:700,className:t.title,children:e.label}),(0,r.jsxs)(s.x,{fz:"lg",fw:500,className:t.stats,variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$",e.value.toFixed(2)," / $",e.max.toFixed(2)]}),(0,r.jsx)(o.E,{value:e.value>=0?100*e.value/e.max:-(100*e.value/e.max*1),mt:"md",size:"lg",radius:"xl",color:e.value>=0?"white":"yellow"})]})}},5878:function(e,t,l){"use strict";l.d(t,{Y:function(){return x}});var r=l(5893),a=l(6817),n=l(2623),s=l(1232),o=l(5117),i=l(5044),c=l(2470),u=l(2136);let d=(0,a.k)(e=>({root:{padding:"calc(".concat(e.spacing.xl," * 1.5)")},label:{fontFamily:"Greycliff CF, ".concat(e.fontFamily)}}));function x(e){let{classes:t}=d(),l=e.value>=0?c.Z:u.Z;return(0,r.jsx)(n.X,{withBorder:!0,p:"md",radius:"md",style:{height:"100%"},children:(0,r.jsxs)(s.Z,{position:"apart",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(o.x,{c:"dimmed",tt:"uppercase",fw:700,fz:"xs",className:t.label,children:e.title}),(0,r.jsxs)(o.x,{mt:10,fw:700,fz:"xl",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$ ",e.value.toFixed(2)]})]}),(0,r.jsx)(i.k,{color:"gray",variant:"light",sx:t=>({color:e.value>=0?t.colors.teal[6]:t.colors.red[6]}),size:38,radius:"md",children:(0,r.jsx)(l,{size:"1.8rem",stroke:1.5})})]})},e.title)}},7288:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return ey}});var r=l(5893),a=l(9008),n=l.n(a),s=l(8664),o=l(83),i=l(5117),c=l(3193),u=l(7294),d=l(7841),x=l(50),h=l(3941),b=l(9541),g=l(5554),f=l(741),p=l(5078),v=l(9758),m=l(1060),j=l(2623),S=l(1232),C=l(4761),y=l(8393),D=Object.defineProperty,P=Object.defineProperties,O=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,N=(e,t,l)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,_=(e,t)=>{for(var l in t||(t={}))U.call(t,l)&&N(e,l,t[l]);if(E)for(var l of E(t))w.call(t,l)&&N(e,l,t[l]);return e},T=(e,t)=>P(e,O(t)),I=(e,t)=>{var l={};for(var r in e)U.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&E)for(var r of E(e))0>t.indexOf(r)&&w.call(e,r)&&(l[r]=e[r]);return l};function R(e){var{size:t,value:l,offset:r,sum:a,thickness:n,root:s,color:o,lineRoundCaps:i,tooltip:c}=e,d=I(e,["size","value","offset","sum","thickness","root","color","lineRoundCaps","tooltip"]);let x=(0,C.rZ)(),h=x.fn.themeColor(o||("dark"===x.colorScheme?"dark":"gray"),o?x.fn.primaryShade():"dark"===x.colorScheme?4:1,!1);return u.createElement(y.u.Floating,{disabled:!c,label:c},u.createElement("circle",_(T(_({},d),{fill:"none",strokeLinecap:i?"round":"butt",stroke:h}),function({size:e,thickness:t,sum:l,value:r,root:a,offset:n}){let s=(.9*e-2*t)/2,o=Math.PI*s*2/100,i=a?`${(100-l)*o}, ${l*o}`:`${r*o}, ${(100-r)*o}`;return{strokeWidth:t,cx:e/2,cy:e/2,r:s,transform:a?`scale(1, -1) translate(0, -${e})`:null,strokeDasharray:i,strokeDashoffset:a?0:n}}({sum:a,size:t,thickness:n,value:l,offset:r,root:s}))))}R.displayName="@mantine/core/Curve";var A=Object.defineProperty,k=Object.defineProperties,B=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,G=(e,t,l)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,Y=(e,t)=>{for(var l in t||(t={}))L.call(t,l)&&G(e,l,t[l]);if(F)for(var l of F(t))Z.call(t,l)&&G(e,l,t[l]);return e},z=(e,t)=>k(e,B(t)),V=l(6817),H=(0,V.k)({root:{position:"relative"},label:{position:"absolute",top:"50%",transform:"translateY(-50%)"}}),J=l(7414),M=Object.defineProperty,W=Object.defineProperties,X=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,Q=(e,t,l)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,ee=(e,t)=>{for(var l in t||(t={}))K.call(t,l)&&Q(e,l,t[l]);if($)for(var l of $(t))q.call(t,l)&&Q(e,l,t[l]);return e},et=(e,t)=>W(e,X(t)),el=(e,t)=>{var l={};for(var r in e)K.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&$)for(var r of $(e))0>t.indexOf(r)&&q.call(e,r)&&(l[r]=e[r]);return l};let er={size:120,thickness:12},ea=(0,u.forwardRef)((e,t)=>{let l=(0,C.N4)("RingProgress",er,e),{className:r,style:a,label:n,sections:s,size:o,thickness:i,classNames:c,styles:d,roundCaps:x,rootColor:h,unstyled:b,variant:g}=l,f=el(l,["className","style","label","sections","size","thickness","classNames","styles","roundCaps","rootColor","unstyled","variant"]),{classes:p,cx:v}=H(null,{name:"RingProgress",classNames:c,styles:d,unstyled:b,variant:g}),m=(function({size:e,thickness:t,sections:l,renderRoundedLineCaps:r,rootColor:a}){let n=l.reduce((e,t)=>e+t.value,0),s=Math.PI*((.9*e-2*t)/2)*2,o=s,i=[],c=[];for(let e=0;e<l.length;e+=1)i.push({sum:n,offset:o,data:l[e],root:!1}),o-=l[e].value/100*s;if(i.push({sum:n,offset:o,data:{color:a},root:!0}),c.push(z(Y({},i[i.length-1]),{lineRoundCaps:!1})),i.length>2){c.push(z(Y({},i[0]),{lineRoundCaps:r})),c.push(z(Y({},i[i.length-2]),{lineRoundCaps:r}));for(let e=1;e<=i.length-3;e+=1)c.push(z(Y({},i[e]),{lineRoundCaps:!1}))}else c.push(z(Y({},i[0]),{lineRoundCaps:r}));return c})({size:o,thickness:i,sections:s,renderRoundedLineCaps:x,rootColor:h}).map(({data:e,sum:t,root:l,lineRoundCaps:r,offset:a},n)=>u.createElement(R,et(ee({},e),{key:n,size:o,thickness:i,sum:t,offset:a,color:null==e?void 0:e.color,root:l,lineRoundCaps:r})));return u.createElement(J.x,ee({style:ee({width:o,height:o},a),className:v(p.root,r),ref:t},f),u.createElement("svg",{width:o,height:o,style:{transform:"rotate(-90deg)"}},m),n&&u.createElement("div",{className:p.label,style:{right:2*i,left:2*i}},n))});ea.displayName="@mantine/core/RingProgress";var en=l(8427),es=(0,V.k)((e,{inline:t})=>({root:{display:t?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}})),eo=Object.defineProperty,ei=Object.getOwnPropertySymbols,ec=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable,ed=(e,t,l)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,ex=(e,t)=>{for(var l in t||(t={}))ec.call(t,l)&&ed(e,l,t[l]);if(ei)for(var l of ei(t))eu.call(t,l)&&ed(e,l,t[l]);return e},eh=(e,t)=>{var l={};for(var r in e)ec.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&ei)for(var r of ei(e))0>t.indexOf(r)&&eu.call(e,r)&&(l[r]=e[r]);return l};let eb=(0,u.forwardRef)((e,t)=>{let l=(0,C.N4)("Center",{},e),{inline:r,className:a,unstyled:n,variant:s}=l,o=eh(l,["inline","className","unstyled","variant"]),{classes:i,cx:c}=es({inline:r},{name:"Center",unstyled:n,variant:s});return u.createElement(J.x,ex({ref:t,className:c(i.root,a)},o))});eb.displayName="@mantine/core/Center";let eg=(0,en.F)(eb);var ef=l(2470),ep=l(2136);function ev(e){let t="up"===e.icon?ef.Z:ep.Z;return(0,r.jsx)(j.X,{withBorder:!0,radius:"md",p:"xs",style:{height:"100%"},children:(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(ea,{size:80,roundCaps:!0,thickness:8,sections:[{value:e.progress,color:e.color}],label:(0,r.jsx)(eg,{children:(0,r.jsx)(t,{size:"1.4rem",stroke:1.5})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.x,{color:"dimmed",size:"xs",transform:"uppercase",weight:700,children:e.label}),(0,r.jsx)(i.x,{weight:700,size:"xl",children:e.value})]})]})},e.label)}var em=l(5878),ej=l(3505),eS=l(3062);function eC(e){var t;let[l,a]=(0,u.useState)("RDBEAR"),[n,s]=(0,u.useState)(.4),[o,i]=(0,u.useState)(3),[c,j]=(0,u.useState)(6),[S,C]=(0,u.useState)(.4),[y,D]=(0,u.useState)(1),[P,O]=(0,u.useState)({}),[E,U]=(0,u.useState)(0),[w,N]=(0,u.useState)("Ready"),[_,T]=(0,u.useState)("#555"),[I,R]=(0,u.useState)("0.00"),[A,k]=(0,u.useState)(!1),[B,F]=(0,u.useState)(!0),[L,Z]=(0,u.useState)(!1),[G,Y]=(0,u.useState)(!1),[z,V]=(0,u.useState)(0),[H,J]=(0,u.useState)(0),[M,W]=(0,u.useState)(0),[X,$]=(0,u.useState)("EVEN"),[K,q]=(0,u.useState)("EVEN"),[Q,ee]=(0,u.useState)(0),[et,el]=(0,u.useState)(0),[er,ea]=(0,u.useState)(),[en,es]=(0,u.useState)(null),[eo,ei]=(0,u.useState)([]),[ec,eu]=(0,u.useState)(.4),[ed,ex]=(0,u.useState)(5),[eh,eb]=(0,u.useState)(.4),[eg,ef]=(0,u.useState)(0),[ep,eC]=(0,u.useState)(0),[ey,eD]=(0,u.useState)("E"),[eP,eO]=(0,u.useState)(0),[eE,eU]=(0,u.useState)(1),[ew,eN]=(0,u.useState)(0),[e_,eT]=(0,u.useState)(1),[eI,eR]=(0,u.useState)(0),[eA,ek]=(0,u.useState)(1e3),[eB,eF]=(0,u.useState)(!0),[eL,eZ]=(0,u.useState)(!1),[eG,eY]=(0,u.useState)(0),[ez,eV]=(0,u.useState)(0),[eH,eJ]=(0,u.useState)(0),[eM,eW]=(0,u.useState)(0),[eX,e$]=(0,u.useState)(0),[eK,eq]=(0,u.useState)([]),[eQ,e0]=(0,u.useState)([]),[e1,e2]=(0,u.useState)({count:0,negProfitCount:11,posProfitCount:89,negProfitPercentage:89,posProfitPercentage:11}),[e5,e3]=(0,u.useState)([89]),[e4,e7]=(0,u.useState)(89),[e8,e9]=(0,u.useState)({}),[e6,te]=(0,u.useState)(0),[tt,tl]=(0,u.useState)(2.5),[tr,ta]=(0,u.useState)([89]),tn=e=>{N(e),T("red")},ts=e=>{N(e),T("green")},to=e=>{N(e),T("#8E44AD")},ti=e=>{N(e),T("#555")},[tc,tu]=(0,u.useState)([]),td=(0,u.useRef)(null),tx=(0,u.useRef)(null);(0,u.useEffect)(()=>{en&&tm(en)},[en]);let th=e=>{let t=e.slice(-100),l=t.filter(e=>e<3).length,r=t.filter(e=>e>=3).length;if(0===l||0===r||t.length<50)return;let a=l/t.length*100,n=r/t.length*100;t.reduce((e,t)=>e+t,0),t.length;let s={count:t.length,negProfitCount:l,posProfitCount:r,negProfitPercentage:a,posProfitPercentage:n};return e2(s),e3([...e5,s.negProfitPercentage]),e7(e5.slice(-100).reduce((e,t)=>e+t,0)/e5.slice(-100).length),console.log("trade","neg","stats",e1),s},tb=e=>{eZ(!1),ef(0),eY(e)},tg=e=>ec*(e+1),tf=()=>"EVEN"==X?"E":"ODD"==X?"O":.5>Math.random()?"E":"O",tp=()=>{let t=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=24377");ea(t),W(Date.now()),t.addEventListener("open",r=>{console.log("WebSocket is connected"),t.send(JSON.stringify({authorize:e.token})),t.send(JSON.stringify({ticks:l})),setTimeout(function(){t.send(JSON.stringify({transaction:1,subscribe:1}))},1e3)}),t.addEventListener("message",e=>{es(JSON.parse(e.data))}),t.addEventListener("close",e=>{console.log("WebSocket is disconnected")}),t.addEventListener("error",e=>{console.log("WebSocket encountered an error")})},tv=()=>{er&&er.close(),ti("Disconnected")},tm=e=>{if(console.log(e),e.error){tn(e.error.message);return}"authorize"===e.msg_type?(ts("Authorized"),O(e.authorize)):"tick"===e.msg_type?tj(e.tick):"proposal"===e.msg_type?(console.log("Proposal: ",e.proposal),ty(e.proposal.id,e.echo_req.amount)):"transaction"===e.msg_type&&"amount"in e.transaction?(console.log("Transaction: ",e.transaction),tD(e.transaction),ta(t=>{var l;return"buy"===e.transaction.action?e.transaction.contract_id in t?{...t,[e.transaction.contract_id]:{...t[e.transaction.contract_id],buy:e.transaction.amount,sell:0,profit:e.transaction.amount,buy_transaction_id:e.transaction.transaction_id,sell_transaction_id:"manual"}}:{...t,[e.transaction.contract_id]:{contract_id:e.transaction.contract_id,buy:e.transaction.amount,sell:0,profit:e.transaction.amount,buy_transaction_id:e.transaction.transaction_id,sell_transaction_id:"manual"}}:"sell"!==e.transaction.action?t:{...t,[e.transaction.contract_id]:{...t[e.transaction.contract_id],sell:e.transaction.amount,profit:(e.transaction.amount+(null===(l=t[e.transaction.contract_id])||void 0===l?void 0:l.buy)).toFixed(2),sell_transaction_id:e.transaction.transaction_id}}})):"buy"===e.msg_type&&console.log("BUY")},tj=e=>{if(e.epoch/2%(y+1)==1)return;ti("Monitoring..."),console.log("Tick: ",e);let t=e.quote.toFixed(e.pip_size);console.log(t);let l=t.slice(-1),r=v.o(l);eo[eo.length-1]===r?ee(Q+1):ee(1),ei([...eo,r]),q(r),R(t),tS(t,e.epoch)},tS=(e,t)=>{let l=Number(e.slice(-1)),r=v.o(l);if(eG>0){ti("Waiting: "+eG.toString()),eY(eG-1);return}if(eR(eI+1),eI>=eA){console.log("trade","xxx"),ef(0),tb(e_),eR(0),console.log("trade","INTERVAL STARTED");return}let a=eg;if(eL){if(console.log("trade","check",ey,r),eZ(!1),ey===r)ef(a=eg+1),eV(ez+1),console.log("trade","WIN LAST_TRADE",eh,eg,ep),eC(0);else{var n;let e=[...eK,eg];if(eq(e),e0([...eQ,H]),th(e),[...eK],console.log("trade","nega-sum-prob",(100*e.filter(e=>e<3).length/e.length).toFixed(2),null===(n=e1.negProfitPercentage)||void 0===n?void 0:n.toFixed(2),null==e4?void 0:e4.toFixed(2),eg,eg<3?"up":"down"),e$(eX-eh),ef(a=0),eJ(eH+1),console.log("trade","LOSS LAST_TRADE",eh,eg,ep),eC(ep+1),H>=ed){console.log("trade","TARGET ACHIEVED",H,ed),ex(ed+5),tb(e_),eR(0),ef(0);return}if(H<ed-10){console.log("trade","TARGET LOST",H,ed),ex(ed-5),tb(e_),eR(0),ef(0);return}}}let s=tg(a),o=tf();eb(s),eD(o),tC(s,"O"==o?"DIGITODD":"DIGITEVEN"),eZ(!0)},tC=(e,t)=>{V(z+1),er&&B&&(to("Opening trade.."),console.log("opening trade",t,e,H.toFixed(2)),er.send(JSON.stringify({proposal:1,amount:e,basis:"stake",contract_type:t,currency:"USD",duration:y+1,duration_unit:"t",symbol:l})))},ty=(e,t)=>{er&&B&&(to("Opening trade..."),er.send(JSON.stringify({buy:e,price:t})))},tD=e=>{e.amount>0?tO("Trade WIN"):tO("Trade LOSE"),console.log("zzz",e.balance,P.balance),U(e.balance),J(e.balance-P.balance)},tP=()=>{A?(tv(),R("0.00")):(ti("Connecting..."),tp()),k(!A)},tO=e=>{tc.unshift({time:new Date().toLocaleTimeString(),message:e}),tu(tc)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x.r,{grow:!0,gutter:"sm",style:{height:"100%",width:"100%"},children:[(0,r.jsx)(x.r.Col,{span:9,children:(0,r.jsxs)("div",{style:{height:"100%",width:"100%",position:"relative"},children:[(0,r.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"is_virtual"in P&&!P.is_virtual?"#c82":"black"},children:(0,r.jsx)("center",{children:(0,r.jsxs)(x.r,{grow:!0,gutter:"xs",style:{height:"100%",width:"100%"},children:[(0,r.jsx)(x.r.Col,{span:12,style:{backgroundColor:_,padding:"10px"},children:(0,r.jsx)(m.Z,{label:"",value:w,bgColor:_})}),(0,r.jsx)(x.r.Col,{span:3,children:(0,r.jsx)(m.Z,{label:"Tick Count",value:eo.length.toLocaleString("en-US"),bgColor:"#222"})}),(0,r.jsx)(x.r.Col,{span:3,children:(0,r.jsx)(m.Z,{label:"Quote",value:I,bgColor:"#222"})}),(0,r.jsx)(x.r.Col,{span:3,children:(0,r.jsx)(m.Z,{label:"Digit Type (Index)",value:K,bgColor:"#222"})}),(0,r.jsx)(x.r.Col,{span:3,children:(0,r.jsx)(m.Z,{label:"Index Repeat Count",value:Q.toString(),bgColor:"#222"})}),(0,r.jsx)(x.r.Col,{span:4,children:(0,r.jsx)(m.Z,{label:"Account Balance ($)",value:E.toLocaleString("en-US",{maximumFractionDigits:2}),bgColor:"#222"})}),(0,r.jsx)(x.r.Col,{span:4,children:(0,r.jsx)(m.Z,{label:"Session Duration",value:M?v.J_(Date.now()-M):"-",bgColor:"#222"})}),(0,r.jsx)(x.r.Col,{span:4,children:(0,r.jsx)(m.Z,{label:"Last Bet Amount ($)",value:eh.toFixed(2),bgColor:"#222"})}),(0,r.jsx)(x.r.Col,{span:3,children:(0,r.jsx)(ev,{label:"Total Win Count",value:ez.toString(),progress:100*ez/(ez+eH),color:"blue",icon:"up"})}),(0,r.jsx)(x.r.Col,{span:3,children:(0,r.jsx)(ev,{label:"Total Loss Count",value:eH.toString(),progress:100*eH/(ez+eH),color:"red",icon:"down"})}),(0,r.jsx)(x.r.Col,{span:3,children:(0,r.jsx)(em.Y,{title:"Session Profit",value:H})}),(0,r.jsx)(x.r.Col,{span:3,children:(0,r.jsx)(ej.$,{label:"Target",value:H,max:ed})}),(0,r.jsx)(x.r.Col,{span:12,children:(0,r.jsx)(h.E,{color:eg<3?"red":"green",label:"",size:15,value:(eB?eg+1:0)*100/10})})]})})}),(0,r.jsxs)(d.z.Group,{style:{width:"100%",position:"absolute",bottom:0},children:[(0,r.jsx)(d.z,{color:A?"red":"green",onClick:tP,fullWidth:!0,variant:"filled",children:A?"Stop":"Start"}),(0,r.jsx)(d.z,{color:B?"blue":"gray",onClick:()=>F(!B),fullWidth:!0,variant:"filled",children:B?"Trading On":"Trading Off"})]})]})}),(0,r.jsxs)(x.r.Col,{span:3,children:[(0,r.jsx)(b.Ph,{label:"Currency Symbol",data:v.XD,value:l,onChange:a,placeholder:"Select a currency symbol"}),(0,r.jsx)(g.Y,{label:"Starting Amount ($)",precision:2,min:0,mt:"sm",value:ec,onChange:e=>eu(Number(e)),step:.01,max:100}),(0,r.jsx)(g.Y,{label:"Target Profit ($)",precision:2,min:0,mt:"sm",value:ed,onChange:e=>ex(Number(e)),step:.01,max:100}),(0,r.jsx)(g.Y,{label:"Session Trade Limit",min:0,mt:"sm",value:eA,onChange:e=>ek(Number(e)),step:1,max:1e3}),(0,r.jsx)(g.Y,{label:"Session Interval Limit",min:0,mt:"sm",value:e_,onChange:e=>eT(Number(e)),step:1,max:1e3}),(0,r.jsx)(b.Ph,{label:"Bet Option",data:[{label:"Even",value:"EVEN"},{label:"Odd",value:"ODD"},{label:"Random",value:"RANDOM"}],mt:"sm",value:X,onChange:e=>$(e),placeholder:"Select a currency symbol"}),(0,r.jsx)(g.Y,{label:"Neg Profit Trigger Threshold",precision:2,min:0,mt:"sm",value:tt,onChange:e=>ex(Number(e)),step:.01,max:100}),(0,r.jsx)(g.Y,{label:"Tick Skip",min:0,mt:"sm",value:y,onChange:e=>D(Number(e)),step:1,max:10})]}),(0,r.jsx)(x.r.Col,{span:12,children:(0,r.jsxs)(f.m,{defaultValue:"charts",children:[(0,r.jsxs)(f.m.List,{children:[(0,r.jsx)(f.m.Tab,{value:"charts",children:"Charts"}),(0,r.jsx)(f.m.Tab,{value:"predictors",children:"Predictors"}),(0,r.jsx)(f.m.Tab,{value:"info",children:"Basic Info"}),(0,r.jsx)(f.m.Tab,{value:"logs",children:"Logs"})]}),(0,r.jsxs)(f.m.Panel,{value:"charts",pt:"xs",children:[(0,r.jsx)(eS.Z,{chartY1:eK,chartY2:[]}),(0,r.jsx)(eS.Z,{chartY1:eQ,chartY2:[]})]}),(0,r.jsx)(f.m.Panel,{value:"info",pt:"xs",children:(0,r.jsx)(p.i,{withColumnBorders:!0,children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Email"}),(0,r.jsx)("td",{children:P.email})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Full name"}),(0,r.jsx)("td",{children:P.fullname})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Currency"}),(0,r.jsx)("td",{children:P.currency})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Is Real"}),(0,r.jsx)("td",{children:P.is_virtual?"No":"Yes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Starting balance"}),(0,r.jsx)("td",{children:P.balance})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Current balance"}),(0,r.jsx)("td",{children:E})]})]})})}),(0,r.jsx)(f.m.Panel,{value:"logs",pt:"xs",children:(0,r.jsxs)(p.i,{striped:!0,withColumnBorders:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Contract ID"}),(0,r.jsx)("th",{children:"Buy"}),(0,r.jsx)("th",{children:"Sell"}),(0,r.jsx)("th",{children:"Profit"}),(0,r.jsx)("th",{children:"Buy Transaction ID"}),(0,r.jsx)("th",{children:"Sell Transaction ID"})]})}),(0,r.jsx)("tbody",{children:Object.values(tr).map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.contract_id}),(0,r.jsx)("td",{children:e.buy}),(0,r.jsx)("td",{children:e.sell}),(0,r.jsx)("td",{children:e.profit}),(0,r.jsx)("td",{children:e.buy_transaction_id}),(0,r.jsx)("td",{children:e.sell_transaction_id})]},t))})]})}),(0,r.jsxs)(f.m.Panel,{value:"predictors",pt:"xs",children:[(0,r.jsxs)(p.i,{striped:!0,withColumnBorders:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Win Streak"}),(0,r.jsx)("td",{children:"Count"}),(0,r.jsx)("td",{children:"Count-100"}),(0,r.jsx)("td",{children:"Count Percentage"}),(0,r.jsx)("td",{children:"Count Graph"})]})}),(0,r.jsx)("tbody",{children:Array.from({length:13},(e,t)=>t>=0&&(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t}),(0,r.jsx)("td",{children:eK.filter(e=>e===t).length}),(0,r.jsx)("td",{children:eK.slice(-100).filter(e=>e===t).length}),(0,r.jsxs)("td",{children:[(100*eK.filter(e=>e===t).length/eK.length).toFixed(1)," | ",(100*eK.slice(-100).filter(e=>e===t).length/eK.slice(-100).length).toFixed(2)]}),(0,r.jsx)("td",{children:(0,r.jsx)(h.E,{color:t<3?"red":"green",label:"",size:15,value:100*eK.slice(-100).filter(e=>e===t).length/eK.slice(-100).length})})]},t))})]}),(100*eK.filter(e=>e<3).length/eK.length).toFixed(2)," | npPercentage: ",null===(t=e1.negProfitPercentage)||void 0===t?void 0:t.toFixed(2)," | of ",eK.length," | ",tr.length," | mean: ",e4.toFixed(2)," | ",(0,r.jsx)("br",{}),e1.negProfitPercentage]})]})})]}),(0,r.jsx)("audio",{ref:td,src:"media/win.m4a"}),(0,r.jsx)("audio",{ref:tx,src:"media/lose.m4a"})]})}function ey(){let[e,t]=(0,u.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:"Technovenia Trading Bot"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(s.V,{padding:"md",header:(0,r.jsx)(o.h,{height:60,p:"xs",children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)(i.x,{ml:"10px",fw:700,children:"Technovenia Trading Bot - Advanced Positive Progression"}),(0,r.jsx)(c.W,{value:e,onChange:e=>t(e.currentTarget.value),placeholder:"API Key",style:{textAlign:"right",width:"200px"},withAsterisk:!0})]})}),styles:e=>({main:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}}),children:(0,r.jsx)(eC,{token:e})})]})}},9758:function(e,t,l){"use strict";l.d(t,{J_:function(){return d},Rm:function(){return i},XD:function(){return a},aK:function(){return b},d2:function(){return x},eS:function(){return n},hP:function(){return h},k4:function(){return o},o:function(){return s},w0:function(){return u},zq:function(){return c}}),l(1163);var r=l(3454);let a=[{value:"WLDAUD",label:"AUD Index"},{value:"frxAUDCAD",label:"AUD/CAD"},{value:"frxAUDCHF",label:"AUD/CHF"},{value:"frxAUDJPY",label:"AUD/JPY"},{value:"frxAUDNZD",label:"AUD/NZD"},{value:"frxAUDUSD",label:"AUD/USD"},{value:"OTC_AS51",label:"Australian Index"},{value:"RDBEAR",label:"Bear Market Index"},{value:"BOOM500",label:"Boom 500 Index"},{value:"BOOM1000",label:"Boom 1000 Index"},{value:"RDBULL",label:"Bull Market Index"},{value:"CRASH500",label:"Crash 500 Index"},{value:"CRASH1000",label:"Crash 1000 Index"},{value:"OTC_AEX",label:"Dutch Index"},{value:"WLDEUR",label:"EUR Index"},{value:"frxEURAUD",label:"EUR/AUD"},{value:"frxEURCAD",label:"EUR/CAD"},{value:"frxEURCHF",label:"EUR/CHF"},{value:"frxEURGBP",label:"EUR/GBP"},{value:"frxEURJPY",label:"EUR/JPY"},{value:"frxEURNZD",label:"EUR/NZD"},{value:"frxEURUSD",label:"EUR/USD"},{value:"OTC_SX5E",label:"Euro 50 Index"},{value:"OTC_FCHI",label:"French Index"},{value:"WLDGBP",label:"GBP Index"},{value:"frxGBPAUD",label:"GBP/AUD"},{value:"frxGBPCAD",label:"GBP/CAD"},{value:"frxGBPCHF",label:"GBP/CHF"},{value:"frxGBPJPY",label:"GBP/JPY"},{value:"frxGBPNOK",label:"GBP/NOK"},{value:"frxGBPNZD",label:"GBP/NZD"},{value:"frxGBPUSD",label:"GBP/USD"},{value:"OTC_GDAXI",label:"German Index"},{value:"frxXAUUSD",label:"Gold/USD"},{value:"OTC_HSI",label:"Hong Kong Index"},{value:"OTC_N225",label:"Japanese Index"},{value:"frxNZDJPY",label:"NZD/JPY"},{value:"frxNZDUSD",label:"NZD/USD"},{value:"frxBROUSD",label:"Oil/USD"},{value:"frxXPDUSD",label:"Palladium/USD"},{value:"frxXPTUSD",label:"Platinum/USD"},{value:"frxXAGUSD",label:"Silver/USD"},{value:"stpRNG",label:"Step Index"},{value:"OTC_SSMI",label:"Swiss Index"},{value:"OTC_FTSE",label:"UK Index"},{value:"OTC_SPC",label:"US Index"},{value:"OTC_NDX",label:"US Tech Index"},{value:"WLDUSD",label:"USD Index"},{value:"frxUSDCAD",label:"USD/CAD"},{value:"frxUSDCHF",label:"USD/CHF"},{value:"frxUSDJPY",label:"USD/JPY"},{value:"frxUSDMXN",label:"USD/MXN"},{value:"frxUSDNOK",label:"USD/NOK"},{value:"frxUSDPLN",label:"USD/PLN"},{value:"frxUSDSEK",label:"USD/SEK"},{value:"1HZ10V",label:"Volatility 10 (1s) Index"},{value:"R_10",label:"Volatility 10 Index"},{value:"1HZ25V",label:"Volatility 25 (1s) Index"},{value:"R_25",label:"Volatility 25 Index"},{value:"1HZ50V",label:"Volatility 50 (1s) Index"},{value:"R_50",label:"Volatility 50 Index"},{value:"1HZ75V",label:"Volatility 75 (1s) Index"},{value:"R_75",label:"Volatility 75 Index"},{value:"1HZ100V",label:"Volatility 100 (1s) Index"},{value:"R_100",label:"Volatility 100 Index"},{value:"OTC_DJI",label:"Wall Street Index"}],n=e=>e%2==0?"EVEN":"ODD",s=e=>e%2==0?"E":"O",o=[{label:"Even",value:"EVEN"},{label:"Odd",value:"ODD"},{label:"Random",value:"RANDOM"},{label:"Hybrid",value:"HYBRID"},{label:"Last Pattern",value:"LASTPATTERN"},{label:"Two Char History",value:"TWOCHARHISTORY"},{label:"Mixed",value:"MIXED"}],i=(e,t,l)=>{if(0==l)return e.toFixed(2);{let r=e+parseFloat(t);for(let e=1;e<l;e++)r*=2;return r.toFixed(2)}},c=(e,t,l)=>[.7,1.4,2.8,5.6,12,24,48,96,192][l],u=(e,t,l,r)=>{let a=0;for(let n=0;n<=l;n++)"MARTINGALE"==r?a+=Number(i(e,t,n)):"MARTINGALE_REDUCING"==r&&(a+=Number(c(e,t,n)));return a.toFixed(2)},d=e=>{let t=new Date(e),l=t.getUTCHours().toString().padStart(2,"0"),r=t.getUTCMinutes().toString().padStart(2,"0"),a=t.getUTCSeconds().toString().padStart(2,"0");return"".concat(l,":").concat(r,":").concat(a)},x=(e,t)=>t.filter(t=>t==e).length,h=e=>e.map(e=>"EVEN"==e?"ODD":"EVEN"),b=()=>{let e="technovenia.com";return r.env.HCHK==e||window.location.hostname.includes(e)}}},function(e){e.O(0,[196,368,986,303,853,774,888,179],function(){return e(e.s=7504)}),_N_E=e.O()}]);