(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{7504:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pp",function(){return l(7030)}])},3090:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var a=l(5893),n=l(3148),r=l(5430);function s(e){n.kL.register(n.uw,n.f$,n.od,n.jn,n.Dx,n.u,n.De);let t=Array.from({length:Math.max(e.chartY1.length,e.chartY2.length)},(e,t)=>t+1),l={labels:t,datasets:[{label:"Dataset 1",data:e.chartY1,borderColor:e.color1,backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Dataset 2",data:e.chartY2,borderColor:e.color2,backgroundColor:"rgba(53, 162, 235, 0.5)"}]};return(0,a.jsx)(r.x1,{data:l,height:50,options:{responsive:!0,plugins:{legend:{display:!1},title:{display:!1,text:"Chart.js Line Chart"},grid:{display:!0}}}})}},7608:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var a=l(5893),n=l(5117);function r(e){return(0,a.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",backgroundColor:e.bgColor,padding:"10px"},children:[(0,a.jsx)(n.x,{fz:"xl",fw:700,tt:"uppercase",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:e.value}),e.label&&(0,a.jsx)(n.x,{fz:"xs",c:"#777",children:e.label})]})}},2461:function(e,t,l){"use strict";l.d(t,{$:function(){return c}});var a=l(5893),n=l(6817),r=l(1017),s=l(5117),i=l(3941);let o=(0,n.k)(e=>({card:{height:"100%"},title:{color:e.fn.rgba(e.white,.65)},stats:{color:e.white},progressBar:{backgroundColor:e.white},progressTrack:{backgroundColor:e.fn.rgba(e.white,.4)}}));function c(e){let{classes:t}=o();return(0,a.jsxs)(r.Z,{withBorder:!0,radius:"md",p:"xl",className:t.card,children:[(0,a.jsx)(s.x,{fz:"xs",tt:"uppercase",fw:700,className:t.title,children:e.label}),(0,a.jsxs)(s.x,{fz:"lg",fw:500,className:t.stats,variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$",e.value.toFixed(2)," / $",e.max.toFixed(2)]}),(0,a.jsx)(i.E,{value:e.value>=0?100*e.value/e.max:-(100*e.value/e.max*1),mt:"md",size:"lg",radius:"xl",color:e.value>=0?"white":"yellow"})]})}},6729:function(e,t,l){"use strict";l.d(t,{Y:function(){return x}});var a=l(5893),n=l(6817),r=l(2623),s=l(1232),i=l(5117),o=l(5044),c=l(2470),d=l(2136);let u=(0,n.k)(e=>({root:{padding:"calc(".concat(e.spacing.xl," * 1.5)")},label:{fontFamily:"Greycliff CF, ".concat(e.fontFamily)}}));function x(e){let{classes:t}=u(),l=e.value>=0?c.Z:d.Z;return(0,a.jsx)(r.X,{withBorder:!0,p:"md",radius:"md",style:{height:"100%"},children:(0,a.jsxs)(s.Z,{position:"apart",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(i.x,{c:"dimmed",tt:"uppercase",fw:700,fz:"xs",className:t.label,children:e.title}),(0,a.jsxs)(i.x,{mt:10,fw:700,fz:"xl",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$ ",e.value.toFixed(2)]})]}),(0,a.jsx)(o.k,{color:"gray",variant:"light",sx:t=>({color:e.value>=0?t.colors.teal[6]:t.colors.red[6]}),size:38,radius:"md",children:(0,a.jsx)(l,{size:"1.8rem",stroke:1.5})})]})},e.title)}},7030:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return V}});var a=l(5893),n=l(9008),r=l.n(n),s=l(8664),i=l(83),o=l(5117),c=l(3193),d=l(7294),u=l(7841),x=l(50),h=l(3941),g=l(9469),b=l(7661),f=l(741),v=l(5078),m=l(9758),j=l(7608),S=l(2623),p=l(1232),D=l(6787),C=l(4761),y=l(8427),E=(0,l(6817).k)((e,{inline:t})=>({root:{display:t?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}})),P=l(7414),U=Object.defineProperty,_=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,I=(e,t,l)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,O=(e,t)=>{for(var l in t||(t={}))T.call(t,l)&&I(e,l,t[l]);if(_)for(var l of _(t))N.call(t,l)&&I(e,l,t[l]);return e},A=(e,t)=>{var l={};for(var a in e)T.call(e,a)&&0>t.indexOf(a)&&(l[a]=e[a]);if(null!=e&&_)for(var a of _(e))0>t.indexOf(a)&&N.call(e,a)&&(l[a]=e[a]);return l};let w=(0,d.forwardRef)((e,t)=>{let l=(0,C.N4)("Center",{},e),{inline:a,className:n,unstyled:r,variant:s}=l,i=A(l,["inline","className","unstyled","variant"]),{classes:o,cx:c}=E({inline:a},{name:"Center",unstyled:r,variant:s});return d.createElement(P.x,O({ref:t,className:c(o.root,n)},i))});w.displayName="@mantine/core/Center";let R=(0,y.F)(w);var k=l(2470),B=l(2136);function F(e){let t="up"===e.icon?k.Z:B.Z;return(0,a.jsx)(S.X,{withBorder:!0,radius:"md",p:"xs",style:{height:"100%"},children:(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(D.T,{size:80,roundCaps:!0,thickness:8,sections:[{value:e.progress,color:e.color}],label:(0,a.jsx)(R,{children:(0,a.jsx)(t,{size:"1.4rem",stroke:1.5})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.x,{color:"dimmed",size:"xs",transform:"uppercase",weight:700,children:e.label}),(0,a.jsx)(o.x,{weight:700,size:"xl",children:e.value})]})]})},e.label)}var G=l(6729),Z=l(2461),L=l(3090);function Y(e){var t;let[l,n]=(0,d.useState)("RDBEAR"),[r,s]=(0,d.useState)(.4),[i,o]=(0,d.useState)(3),[c,S]=(0,d.useState)(6),[p,D]=(0,d.useState)(.4),[C,y]=(0,d.useState)(1),[E,P]=(0,d.useState)({}),[U,_]=(0,d.useState)(0),[T,N]=(0,d.useState)("Ready"),[I,O]=(0,d.useState)("#555"),[A,w]=(0,d.useState)("0.00"),[R,k]=(0,d.useState)(!1),[B,Y]=(0,d.useState)(!0),[V,z]=(0,d.useState)(!1),[H,J]=(0,d.useState)(!1),[W,M]=(0,d.useState)(0),[X,K]=(0,d.useState)(0),[$,q]=(0,d.useState)(0),[Q,ee]=(0,d.useState)("EVEN"),[et,el]=(0,d.useState)("EVEN"),[ea,en]=(0,d.useState)(0),[er,es]=(0,d.useState)(0),[ei,eo]=(0,d.useState)(),[ec,ed]=(0,d.useState)(null),[eu,ex]=(0,d.useState)([]),[eh,eg]=(0,d.useState)(.4),[eb,ef]=(0,d.useState)(5),[ev,em]=(0,d.useState)(.4),[ej,eS]=(0,d.useState)(0),[ep,eD]=(0,d.useState)(0),[eC,ey]=(0,d.useState)("E"),[eE,eP]=(0,d.useState)(0),[eU,e_]=(0,d.useState)(1),[eT,eN]=(0,d.useState)(0),[eI,eO]=(0,d.useState)(1),[eA,ew]=(0,d.useState)(0),[eR,ek]=(0,d.useState)(1e3),[eB,eF]=(0,d.useState)(!0),[eG,eZ]=(0,d.useState)(!1),[eL,eY]=(0,d.useState)(0),[eV,ez]=(0,d.useState)(0),[eH,eJ]=(0,d.useState)(0),[eW,eM]=(0,d.useState)(0),[eX,eK]=(0,d.useState)(0),[e$,eq]=(0,d.useState)([]),[eQ,e0]=(0,d.useState)([]),[e1,e2]=(0,d.useState)({count:0,negProfitCount:11,posProfitCount:89,negProfitPercentage:89,posProfitPercentage:11}),[e5,e3]=(0,d.useState)([89]),[e7,e4]=(0,d.useState)(89),[e8,e6]=(0,d.useState)({}),[e9,te]=(0,d.useState)(0),[tt,tl]=(0,d.useState)(2.5),[ta,tn]=(0,d.useState)([89]),tr=e=>{N(e),O("red")},ts=e=>{N(e),O("green")},ti=e=>{N(e),O("#8E44AD")},to=e=>{N(e),O("#555")},[tc,td]=(0,d.useState)([]),tu=(0,d.useRef)(null),tx=(0,d.useRef)(null);(0,d.useEffect)(()=>{ec&&tj(ec)},[ec]);let th=e=>{let t=e.slice(-100),l=t.filter(e=>e<3).length,a=t.filter(e=>e>=3).length;if(0===l||0===a||t.length<50)return;let n=l/t.length*100,r=a/t.length*100;t.reduce((e,t)=>e+t,0),t.length;let s={count:t.length,negProfitCount:l,posProfitCount:a,negProfitPercentage:n,posProfitPercentage:r};return e2(s),e3([...e5,s.negProfitPercentage]),e4(e5.slice(-100).reduce((e,t)=>e+t,0)/e5.slice(-100).length),console.log("trade","neg","stats",e1),s},tg=e=>{eZ(!1),eS(0),eY(e)},tb=e=>eh*(e+1),tf=()=>"EVEN"==Q?"E":"ODD"==Q?"O":.5>Math.random()?"E":"O",tv=()=>{let t=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=24377");eo(t),q(Date.now()),t.addEventListener("open",a=>{console.log("WebSocket is connected"),t.send(JSON.stringify({authorize:e.token})),t.send(JSON.stringify({ticks:l})),setTimeout(function(){t.send(JSON.stringify({transaction:1,subscribe:1}))},1e3)}),t.addEventListener("message",e=>{ed(JSON.parse(e.data))}),t.addEventListener("close",e=>{console.log("WebSocket is disconnected")}),t.addEventListener("error",e=>{console.log("WebSocket encountered an error")})},tm=()=>{ei&&ei.close(),to("Disconnected")},tj=e=>{if(console.log(e),e.error){tr(e.error.message);return}"authorize"===e.msg_type?(ts("Authorized"),P(e.authorize)):"tick"===e.msg_type?tS(e.tick):"proposal"===e.msg_type?(console.log("Proposal: ",e.proposal),tC(e.proposal.id,e.echo_req.amount)):"transaction"===e.msg_type&&"amount"in e.transaction?(console.log("Transaction: ",e.transaction),ty(e.transaction),tn(t=>{var l;return"buy"===e.transaction.action?e.transaction.contract_id in t?{...t,[e.transaction.contract_id]:{...t[e.transaction.contract_id],buy:e.transaction.amount,sell:0,profit:e.transaction.amount,buy_transaction_id:e.transaction.transaction_id,sell_transaction_id:"manual"}}:{...t,[e.transaction.contract_id]:{contract_id:e.transaction.contract_id,buy:e.transaction.amount,sell:0,profit:e.transaction.amount,buy_transaction_id:e.transaction.transaction_id,sell_transaction_id:"manual"}}:"sell"!==e.transaction.action?t:{...t,[e.transaction.contract_id]:{...t[e.transaction.contract_id],sell:e.transaction.amount,profit:(e.transaction.amount+(null===(l=t[e.transaction.contract_id])||void 0===l?void 0:l.buy)).toFixed(2),sell_transaction_id:e.transaction.transaction_id}}})):"buy"===e.msg_type&&console.log("BUY")},tS=e=>{if(e.epoch/2%(C+1)!=0)return;to("Monitoring..."),console.log("Tick: ",e);let t=e.quote.toFixed(e.pip_size);console.log(t);let l=t.slice(-1),a=m.o(l);eu[eu.length-1]===a?en(ea+1):en(1),ex([...eu,a]),el(a),w(t),tp(t,e.epoch)},tp=(e,t)=>{let l=Number(e.slice(-1)),a=m.o(l);if(eL>0){to("Waiting: "+eL.toString()),eY(eL-1);return}let n=0,r=[],s=[],i=eu.join(""),o=!1;for(let e=0;e<i.length-10;e+=10){let t=i.slice(e,e+10);n=t.split("EO").length-1+(t.split("OE").length-1),r.push(n);let l=r.slice(-10).reduce((e,t)=>e+t,0)/r.slice(-10).length;s.push(l),l>=5.6&&(o=!0),l<=4.5&&(o=!1)}if(Y(o),console.log("trade meanArr:",s),ew(eA+1),eA>=eR){console.log("trade","xxx"),eS(0),tg(eI),ew(0),console.log("trade","INTERVAL STARTED");return}let c=ej;if(eG){if(console.log("trade","check",eC,a),eZ(!1),eC===a)eS(c=ej+1),ez(eV+1),console.log("trade","WIN LAST_TRADE",ev,ej,ep),eD(0);else{var d;let e=[...e$,ej];if(eq(e),e0([...eQ,X]),th(e),[...e$],console.log("trade","nega-sum-prob",(100*e.filter(e=>e<3).length/e.length).toFixed(2),null===(d=e1.negProfitPercentage)||void 0===d?void 0:d.toFixed(2),null==e7?void 0:e7.toFixed(2),ej,ej<3?"up":"down"),eK(eX-ev),eS(c=0),eJ(eH+1),console.log("trade","LOSS LAST_TRADE",ev,ej,ep),eD(ep+1),X>=eb){console.log("trade","TARGET ACHIEVED",X,eb),ef(eb+5),tg(eI),ew(0),eS(0);return}if(X<eb-10){console.log("trade","TARGET LOST",X,eb),ef(eb-5),tg(eI),ew(0),eS(0);return}}}let u=tb(c),x=tf();em(u),ey(x),tD(u,"O"==x?"DIGITODD":"DIGITEVEN"),eZ(!0)},tD=(e,t)=>{M(W+1),ei&&B&&(ti("Opening trade.."),console.log("opening trade",t,e,X.toFixed(2)),ei.send(JSON.stringify({proposal:1,amount:e,basis:"stake",contract_type:t,currency:"USD",duration:C+1,duration_unit:"t",symbol:l})))},tC=(e,t)=>{ei&&B&&(ti("Opening trade..."),ei.send(JSON.stringify({buy:e,price:t})))},ty=e=>{e.amount>0?tP("Trade WIN"):tP("Trade LOSE"),console.log("zzz",e.balance,E.balance),_(e.balance),K(e.balance-E.balance)},tE=()=>{R?(tm(),w("0.00")):(to("Connecting..."),tv()),k(!R)},tP=e=>{tc.unshift({time:new Date().toLocaleTimeString(),message:e}),td(tc)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x.r,{grow:!0,gutter:"sm",style:{height:"100%",width:"100%"},children:[(0,a.jsx)(x.r.Col,{span:9,children:(0,a.jsxs)("div",{style:{height:"100%",width:"100%",position:"relative"},children:[(0,a.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"is_virtual"in E&&!E.is_virtual?"#c82":"black"},children:(0,a.jsx)("center",{children:(0,a.jsxs)(x.r,{grow:!0,gutter:"xs",style:{height:"100%",width:"100%"},children:[(0,a.jsx)(x.r.Col,{span:12,style:{backgroundColor:I,padding:"10px"},children:(0,a.jsx)(j.Z,{label:"",value:T,bgColor:I})}),(0,a.jsx)(x.r.Col,{span:3,children:(0,a.jsx)(j.Z,{label:"Tick Count",value:eu.length.toLocaleString("en-US"),bgColor:"#222"})}),(0,a.jsx)(x.r.Col,{span:3,children:(0,a.jsx)(j.Z,{label:"Quote",value:A,bgColor:"#222"})}),(0,a.jsx)(x.r.Col,{span:3,children:(0,a.jsx)(j.Z,{label:"Digit Type (Index)",value:et,bgColor:"#222"})}),(0,a.jsx)(x.r.Col,{span:3,children:(0,a.jsx)(j.Z,{label:"Index Repeat Count",value:ea.toString(),bgColor:"#222"})}),(0,a.jsx)(x.r.Col,{span:4,children:(0,a.jsx)(j.Z,{label:"Account Balance ($)",value:U.toLocaleString("en-US",{maximumFractionDigits:2}),bgColor:"#222"})}),(0,a.jsx)(x.r.Col,{span:4,children:(0,a.jsx)(j.Z,{label:"Session Duration",value:$?m.J_(Date.now()-$):"-",bgColor:"#222"})}),(0,a.jsx)(x.r.Col,{span:4,children:(0,a.jsx)(j.Z,{label:"Last Bet Amount ($)",value:ev.toFixed(2),bgColor:"#222"})}),(0,a.jsx)(x.r.Col,{span:3,children:(0,a.jsx)(F,{label:"Total Win Count",value:eV.toString(),progress:100*eV/(eV+eH),color:"blue",icon:"up"})}),(0,a.jsx)(x.r.Col,{span:3,children:(0,a.jsx)(F,{label:"Total Loss Count",value:eH.toString(),progress:100*eH/(eV+eH),color:"red",icon:"down"})}),(0,a.jsx)(x.r.Col,{span:3,children:(0,a.jsx)(G.Y,{title:"Session Profit",value:X})}),(0,a.jsx)(x.r.Col,{span:3,children:(0,a.jsx)(Z.$,{label:"Target",value:X,max:eb})}),(0,a.jsx)(x.r.Col,{span:12,children:(0,a.jsx)(h.E,{color:ej<3?"red":"green",label:"",size:15,value:(eB?ej+1:0)*100/10})})]})})}),(0,a.jsxs)(u.z.Group,{style:{width:"100%",position:"absolute",bottom:0},children:[(0,a.jsx)(u.z,{color:R?"red":"green",onClick:tE,fullWidth:!0,variant:"filled",children:R?"Stop":"Start"}),(0,a.jsx)(u.z,{color:B?"blue":"gray",onClick:()=>Y(!B),fullWidth:!0,variant:"filled",children:B?"Trading On":"Trading Off"})]})]})}),(0,a.jsxs)(x.r.Col,{span:3,children:[(0,a.jsx)(g.Ph,{label:"Currency Symbol",data:m.XD,value:l,onChange:n,placeholder:"Select a currency symbol"}),(0,a.jsx)(b.Y,{label:"Starting Amount ($)",precision:2,min:0,mt:"sm",value:eh,onChange:e=>eg(Number(e)),step:.01,max:100}),(0,a.jsx)(b.Y,{label:"Target Profit ($)",precision:2,min:0,mt:"sm",value:eb,onChange:e=>ef(Number(e)),step:.01,max:100}),(0,a.jsx)(b.Y,{label:"Session Trade Limit",min:0,mt:"sm",value:eR,onChange:e=>ek(Number(e)),step:1,max:1e3}),(0,a.jsx)(b.Y,{label:"Session Interval Limit",min:0,mt:"sm",value:eI,onChange:e=>eO(Number(e)),step:1,max:1e3}),(0,a.jsx)(g.Ph,{label:"Bet Option",data:[{label:"Even",value:"EVEN"},{label:"Odd",value:"ODD"},{label:"Random",value:"RANDOM"}],mt:"sm",value:Q,onChange:e=>ee(e),placeholder:"Select a currency symbol"}),(0,a.jsx)(b.Y,{label:"Neg Profit Trigger Threshold",precision:2,min:0,mt:"sm",value:tt,onChange:e=>ef(Number(e)),step:.01,max:100}),(0,a.jsx)(b.Y,{label:"Tick Skip",min:0,mt:"sm",value:C,onChange:e=>y(Number(e)),step:1,max:10})]}),(0,a.jsx)(x.r.Col,{span:12,children:(0,a.jsxs)(f.m,{defaultValue:"charts",children:[(0,a.jsxs)(f.m.List,{children:[(0,a.jsx)(f.m.Tab,{value:"charts",children:"Charts"}),(0,a.jsx)(f.m.Tab,{value:"predictors",children:"Predictors"}),(0,a.jsx)(f.m.Tab,{value:"info",children:"Basic Info"}),(0,a.jsx)(f.m.Tab,{value:"logs",children:"Logs"})]}),(0,a.jsxs)(f.m.Panel,{value:"charts",pt:"xs",children:[(0,a.jsx)(L.Z,{chartY1:e$,chartY2:[],color1:"cyan",color2:""}),(0,a.jsx)(L.Z,{chartY1:eQ,chartY2:[],color1:"violet",color2:""})]}),(0,a.jsx)(f.m.Panel,{value:"info",pt:"xs",children:(0,a.jsx)(v.i,{withColumnBorders:!0,children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Email"}),(0,a.jsx)("td",{children:E.email})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Full name"}),(0,a.jsx)("td",{children:E.fullname})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Currency"}),(0,a.jsx)("td",{children:E.currency})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Is Real"}),(0,a.jsx)("td",{children:E.is_virtual?"No":"Yes"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Starting balance"}),(0,a.jsx)("td",{children:E.balance})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Current balance"}),(0,a.jsx)("td",{children:U})]})]})})}),(0,a.jsx)(f.m.Panel,{value:"logs",pt:"xs",children:(0,a.jsxs)(v.i,{striped:!0,withColumnBorders:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Contract ID"}),(0,a.jsx)("th",{children:"Buy"}),(0,a.jsx)("th",{children:"Sell"}),(0,a.jsx)("th",{children:"Profit"}),(0,a.jsx)("th",{children:"Buy Transaction ID"}),(0,a.jsx)("th",{children:"Sell Transaction ID"})]})}),(0,a.jsx)("tbody",{children:Object.values(ta).map((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.contract_id}),(0,a.jsx)("td",{children:e.buy}),(0,a.jsx)("td",{children:e.sell}),(0,a.jsx)("td",{children:e.profit}),(0,a.jsx)("td",{children:e.buy_transaction_id}),(0,a.jsx)("td",{children:e.sell_transaction_id})]},t))})]})}),(0,a.jsxs)(f.m.Panel,{value:"predictors",pt:"xs",children:[(0,a.jsxs)(v.i,{striped:!0,withColumnBorders:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Win Streak"}),(0,a.jsx)("td",{children:"Count"}),(0,a.jsx)("td",{children:"Count-100"}),(0,a.jsx)("td",{children:"Count Percentage"}),(0,a.jsx)("td",{children:"Count Graph"})]})}),(0,a.jsx)("tbody",{children:Array.from({length:13},(e,t)=>t>=0&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:t}),(0,a.jsx)("td",{children:e$.filter(e=>e===t).length}),(0,a.jsx)("td",{children:e$.slice(-100).filter(e=>e===t).length}),(0,a.jsxs)("td",{children:[(100*e$.filter(e=>e===t).length/e$.length).toFixed(1)," | ",(100*e$.slice(-100).filter(e=>e===t).length/e$.slice(-100).length).toFixed(2)]}),(0,a.jsx)("td",{children:(0,a.jsx)(h.E,{color:t<3?"red":"green",label:"",size:15,value:100*e$.slice(-100).filter(e=>e===t).length/e$.slice(-100).length})})]},t))})]}),(100*e$.filter(e=>e<3).length/e$.length).toFixed(2)," | npPercentage: ",null===(t=e1.negProfitPercentage)||void 0===t?void 0:t.toFixed(2)," | of ",e$.length," | ",ta.length," | mean: ",e7.toFixed(2)," | ",(0,a.jsx)("br",{}),e1.negProfitPercentage]})]})})]}),(0,a.jsx)("audio",{ref:tu,src:"media/win.m4a"}),(0,a.jsx)("audio",{ref:tx,src:"media/lose.m4a"})]})}function V(){let[e,t]=(0,d.useState)("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Technovenia Trading Bot"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(s.V,{padding:"md",header:(0,a.jsx)(i.h,{height:60,p:"xs",children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(o.x,{ml:"10px",fw:700,children:"Technovenia Trading Bot - Advanced Positive Progression"}),(0,a.jsx)(c.W,{value:e,onChange:e=>t(e.currentTarget.value),placeholder:"API Key",style:{textAlign:"right",width:"200px"},withAsterisk:!0})]})}),styles:e=>({main:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}}),children:(0,a.jsx)(Y,{token:e})})]})}},9758:function(e,t,l){"use strict";l.d(t,{J_:function(){return d},Rm:function(){return i},XD:function(){return a},aK:function(){return h},d2:function(){return u},eS:function(){return n},hP:function(){return x},k4:function(){return s},o:function(){return r},w0:function(){return c},zq:function(){return o}}),l(1163);let a=[{value:"WLDAUD",label:"AUD Index"},{value:"frxAUDCAD",label:"AUD/CAD"},{value:"frxAUDCHF",label:"AUD/CHF"},{value:"frxAUDJPY",label:"AUD/JPY"},{value:"frxAUDNZD",label:"AUD/NZD"},{value:"frxAUDUSD",label:"AUD/USD"},{value:"OTC_AS51",label:"Australian Index"},{value:"RDBEAR",label:"Bear Market Index"},{value:"BOOM500",label:"Boom 500 Index"},{value:"BOOM1000",label:"Boom 1000 Index"},{value:"RDBULL",label:"Bull Market Index"},{value:"CRASH500",label:"Crash 500 Index"},{value:"CRASH1000",label:"Crash 1000 Index"},{value:"OTC_AEX",label:"Dutch Index"},{value:"WLDEUR",label:"EUR Index"},{value:"frxEURAUD",label:"EUR/AUD"},{value:"frxEURCAD",label:"EUR/CAD"},{value:"frxEURCHF",label:"EUR/CHF"},{value:"frxEURGBP",label:"EUR/GBP"},{value:"frxEURJPY",label:"EUR/JPY"},{value:"frxEURNZD",label:"EUR/NZD"},{value:"frxEURUSD",label:"EUR/USD"},{value:"OTC_SX5E",label:"Euro 50 Index"},{value:"OTC_FCHI",label:"French Index"},{value:"WLDGBP",label:"GBP Index"},{value:"frxGBPAUD",label:"GBP/AUD"},{value:"frxGBPCAD",label:"GBP/CAD"},{value:"frxGBPCHF",label:"GBP/CHF"},{value:"frxGBPJPY",label:"GBP/JPY"},{value:"frxGBPNOK",label:"GBP/NOK"},{value:"frxGBPNZD",label:"GBP/NZD"},{value:"frxGBPUSD",label:"GBP/USD"},{value:"OTC_GDAXI",label:"German Index"},{value:"frxXAUUSD",label:"Gold/USD"},{value:"OTC_HSI",label:"Hong Kong Index"},{value:"OTC_N225",label:"Japanese Index"},{value:"frxNZDJPY",label:"NZD/JPY"},{value:"frxNZDUSD",label:"NZD/USD"},{value:"frxBROUSD",label:"Oil/USD"},{value:"frxXPDUSD",label:"Palladium/USD"},{value:"frxXPTUSD",label:"Platinum/USD"},{value:"frxXAGUSD",label:"Silver/USD"},{value:"stpRNG",label:"Step Index"},{value:"OTC_SSMI",label:"Swiss Index"},{value:"OTC_FTSE",label:"UK Index"},{value:"OTC_SPC",label:"US Index"},{value:"OTC_NDX",label:"US Tech Index"},{value:"WLDUSD",label:"USD Index"},{value:"frxUSDCAD",label:"USD/CAD"},{value:"frxUSDCHF",label:"USD/CHF"},{value:"frxUSDJPY",label:"USD/JPY"},{value:"frxUSDMXN",label:"USD/MXN"},{value:"frxUSDNOK",label:"USD/NOK"},{value:"frxUSDPLN",label:"USD/PLN"},{value:"frxUSDSEK",label:"USD/SEK"},{value:"1HZ10V",label:"Volatility 10 (1s) Index"},{value:"R_10",label:"Volatility 10 Index"},{value:"1HZ25V",label:"Volatility 25 (1s) Index"},{value:"R_25",label:"Volatility 25 Index"},{value:"1HZ50V",label:"Volatility 50 (1s) Index"},{value:"R_50",label:"Volatility 50 Index"},{value:"1HZ75V",label:"Volatility 75 (1s) Index"},{value:"R_75",label:"Volatility 75 Index"},{value:"1HZ100V",label:"Volatility 100 (1s) Index"},{value:"R_100",label:"Volatility 100 Index"},{value:"OTC_DJI",label:"Wall Street Index"}],n=e=>e%2==0?"EVEN":"ODD",r=e=>e%2==0?"E":"O",s=[{label:"Even",value:"EVEN"},{label:"Odd",value:"ODD"},{label:"Random",value:"RANDOM"},{label:"Hybrid",value:"HYBRID"},{label:"Last Pattern",value:"LASTPATTERN"},{label:"Two Char History",value:"TWOCHARHISTORY"},{label:"Mixed",value:"MIXED"}],i=(e,t,l)=>{if(0==l)return e.toFixed(2);{let a=e+parseFloat(t);for(let e=1;e<l;e++)a*=2;return a.toFixed(2)}},o=(e,t,l)=>[.7,1.4,2.8,5.6,12,24,48,96,192][l],c=(e,t,l,a)=>{let n=0;for(let r=0;r<=l;r++)"MARTINGALE"==a?n+=Number(i(e,t,r)):"MARTINGALE_REDUCING"==a&&(n+=Number(o(e,t,r)));return n.toFixed(2)},d=e=>{let t=new Date(e),l=t.getUTCHours().toString().padStart(2,"0"),a=t.getUTCMinutes().toString().padStart(2,"0"),n=t.getUTCSeconds().toString().padStart(2,"0");return"".concat(l,":").concat(a,":").concat(n)},u=(e,t)=>t.filter(t=>t==e).length,x=e=>e.map(e=>"EVEN"==e?"ODD":"EVEN"),h=()=>window.location.hostname.includes("technovenia")}},function(e){e.O(0,[196,368,366,303,215,774,888,179],function(){return e(e.s=7504)}),_N_E=e.O()}]);