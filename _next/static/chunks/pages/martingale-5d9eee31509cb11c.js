(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{1368:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/martingale",function(){return l(7525)}])},3090:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var a=l(5893),n=l(3148),r=l(5430);function s(e){n.kL.register(n.uw,n.f$,n.od,n.jn,n.Dx,n.u,n.De);let t={responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:e.title},grid:{display:!0}}},l=Array.from({length:e.chartY.length},(e,t)=>t+1),s={labels:l,datasets:[{label:"Dataset 1",data:e.chartY,borderColor:e.color,backgroundColor:"rgba(255, 99, 132, 0.5)"}]};return(0,a.jsx)(r.x1,{data:s,height:50,options:t})}},7608:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var a=l(5893),n=l(5117);function r(e){return(0,a.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",backgroundColor:e.bgColor,padding:"10px"},children:[(0,a.jsx)(n.x,{fz:"xl",fw:700,tt:"uppercase",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:e.value}),e.label&&(0,a.jsx)(n.x,{fz:"xs",c:"#777",children:e.label})]})}},2461:function(e,t,l){"use strict";l.d(t,{$:function(){return c}});var a=l(5893),n=l(6817),r=l(1017),s=l(5117),i=l(3941);let o=(0,n.k)(e=>({card:{height:"100%"},title:{color:e.fn.rgba(e.white,.65)},stats:{color:e.white},progressBar:{backgroundColor:e.white},progressTrack:{backgroundColor:e.fn.rgba(e.white,.4)}}));function c(e){let{classes:t}=o();return(0,a.jsxs)(r.Z,{withBorder:!0,radius:"md",p:"xl",className:t.card,children:[(0,a.jsx)(s.x,{fz:"xs",tt:"uppercase",fw:700,className:t.title,children:e.label}),(0,a.jsxs)(s.x,{fz:"lg",fw:500,className:t.stats,variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$",e.value.toFixed(2)," / $",e.max.toFixed(2)]}),(0,a.jsx)(i.E,{value:e.value>=0?100*e.value/e.max:-(100*e.value/e.max*1),mt:"md",size:"lg",radius:"xl",color:e.value>=0?"white":"yellow"})]})}},6729:function(e,t,l){"use strict";l.d(t,{Y:function(){return h}});var a=l(5893),n=l(6817),r=l(2623),s=l(1232),i=l(5117),o=l(5044),c=l(2470),d=l(2136);let u=(0,n.k)(e=>({root:{padding:"calc(".concat(e.spacing.xl," * 1.5)")},label:{fontFamily:"Greycliff CF, ".concat(e.fontFamily)}}));function h(e){let{classes:t}=u(),l=e.value>=0?c.Z:d.Z;return(0,a.jsx)(r.X,{withBorder:!0,p:"md",radius:"md",style:{height:"100%"},children:(0,a.jsxs)(s.Z,{position:"apart",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(i.x,{c:"dimmed",tt:"uppercase",fw:700,fz:"xs",className:t.label,children:e.title}),(0,a.jsxs)(i.x,{mt:10,fw:700,fz:"xl",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$ ",e.value.toFixed(2)]})]}),(0,a.jsx)(o.k,{color:"gray",variant:"light",sx:t=>({color:e.value>=0?t.colors.teal[6]:t.colors.red[6]}),size:38,radius:"md",children:(0,a.jsx)(l,{size:"1.8rem",stroke:1.5})})]})},e.title)}},7525:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return R}});var a=l(5893),n=l(9008),r=l.n(n),s=l(8664),i=l(83),o=l(5117),c=l(3193),d=l(7294);class u{getName(){return this.name}predictNextBet(){return"E"}constructor(){this.name="ALL_EVENS"}}class h{getName(){return this.name}predictNextBet(){return"O"}constructor(){this.name="ALL_ODDS"}}class x{getName(){return this.name}predictNextBet(e,t){return e>=t?this.optionB:this.optionA}constructor(e,t){this.name="DOWN_UP",this.optionA=e,this.optionB=t}}var g=l(9758);class p{getName(){return this.name}predictNextBet(e,t,l,a,n){return 3==e||4==e?+l>a?this.optionA:this.optionB:5==e?Math.random()>.5?this.optionA:this.optionB:6==e?"E"==this.onTwoCharHistoryPredict(t+g.Oh(l),n)?this.optionA:this.optionB:this.optionA}constructor(e,t){this.name="MIXED",this.onTwoCharHistoryPredict=(e,t)=>{if(e.length<2)return"OE";let l=!1;t&&(e.slice(-4)=="O".repeat(4)||e.slice(-4)=="E".repeat(4))&&(l=!0);let a=e.slice(-2),n=e.split(a),r=0,s=0;for(let t=2;t<n.length;t++)a==e.slice(t-2,t)&&("O"==e[t]?r++:s++);return r>s?l?"E":"O":l?"O":"E"},this.optionA=e,this.optionB=t}}class v{getName(){return this.name}predictNextBet(e,t,l){return"E"==this.onTwoCharHistoryPredict(e+g.Oh(t),l)?this.optionA:this.optionB}constructor(e,t){this.name="TWO_CHAR_HISTORY",this.onTwoCharHistoryPredict=(e,t)=>{if(e.length<2)return"OE";let l=!1;t&&(e.slice(-4)=="O".repeat(4)||e.slice(-4)=="E".repeat(4))&&(l=!0);let a=e.slice(-2),n=e.split(a),r=0,s=0;for(let t=2;t<n.length;t++)a==e.slice(t-2,t)&&("O"==e[t]?r++:s++);return r>s?l?"E":"O":l?"O":"E"},this.optionA=e,this.optionB=t}}class b{getName(){return this.name}predictNextBet(e,t){return e>=t?this.optionA:this.optionB}constructor(e,t){this.name="UP_DOWN",this.optionA=e,this.optionB=t}}var m=l(7841),j=l(3775),f=l(2675),S=l(1238),C=l(50),D=l(3941),y=l(9469),E=l(7661),O=l(741),N=l(5078),U=l(3090),A=l(7608),T=l(2461),I=l(6729),w=l(2623),B=l(6787);function P(e){return(0,a.jsx)(w.X,{withBorder:!0,radius:"md",p:"xs",style:{height:"100%"},children:(0,a.jsx)("center",{children:(0,a.jsx)(B.T,{size:140,sections:[{value:100*e.value1/(e.value1+e.value2),color:e.color1},{value:100*e.value2/(e.value1+e.value2),color:e.color2}],label:(0,a.jsx)(o.x,{color:e.value1>=e.value2?e.color1:e.color2,weight:700,align:"center",size:"xl",children:(e.value1>=e.value2?"+":"-")+(e.value1-e.value2)*(e.value1>=e.value2?1:-1)})})})},e.label)}function _(e){let[t,l]=(0,d.useState)("RDBEAR"),[n,r]=(0,d.useState)(.4),[s,i]=(0,d.useState)(6),[c,w]=(0,d.useState)(.4),[B,_]=(0,d.useState)("MARTINGALE"),[R,k]=(0,d.useState)(50),[L,G]=(0,d.useState)(0),[Z,M]=(0,d.useState)("DOWN_UP"),[H,F]=(0,d.useState)(100),[X,z]=(0,d.useState)(20),[Y,V]=(0,d.useState)(0),[J,W]=(0,d.useState)(1),[$,K]=(0,d.useState)(!1),[q,Q]=(0,d.useState)(!1),[ee,et]=(0,d.useState)(100),[el,ea]=(0,d.useState)({}),[en,er]=(0,d.useState)(0),[es,ei]=(0,d.useState)("Ready"),[eo,ec]=(0,d.useState)("#555"),[ed,eu]=(0,d.useState)("0.00"),[eh,ex]=(0,d.useState)(!0),[eg,ep]=(0,d.useState)(!1),[ev,eb]=(0,d.useState)(!1),[em,ej]=(0,d.useState)(!1),[ef,eS]=(0,d.useState)("E"),[eC,eD]=(0,d.useState)(0),[ey,eE]=(0,d.useState)(0),[eO,eN]=(0,d.useState)(0),[eU,eA]=(0,d.useState)(0),[eT,eI]=(0,d.useState)(0),[ew,eB]=(0,d.useState)(0),[eP,e_]=(0,d.useState)("E"),[eR,ek]=(0,d.useState)(0),[eL,eG]=(0,d.useState)(0),[eZ,eM]=(0,d.useState)(""),[eH,eF]=(0,d.useState)([]),[eX,ez]=(0,d.useState)([]),[eY,eV]=(0,d.useState)([0]),[eJ,eW]=(0,d.useState)(),[e$,eK]=(0,d.useState)(null),[eq,eQ]=(0,d.useState)([]),e0=(0,d.useRef)(null),e1=(0,d.useRef)(null),e2=new u,e5=new h,e3=new x("E","O"),e4=new b("E","O"),e6=new p("E","O"),e7=new v("E","O");(0,d.useEffect)(()=>{e$&&g.aK()&&to(e$)},[e$]);let e8=e=>{ei(e),ec("red")},e9=e=>{ei(e),ec("green")},te=e=>{ei(e),ec("#8E44AD")},tt=e=>{ei(e),ec("#555")},tl=(e,t,l,a,n)=>"ALL_EVENS"==Z?e2.predictNextBet():"ALL_ODDS"==Z?e5.predictNextBet():"TWO_CHAR_HISTORY"==Z?e7.predictNextBet(e,+t,!0):"MIXED"==Z?e6.predictNextBet(a,e,+t,l,!0):"UP_DOWN"==Z?e4.predictNextBet(+t,l):"DOWN_UP"==Z?e3.predictNextBet(+t,l):void 0,ta=(e,t)=>t?e.slice(-1*ee).map(t=>t-e[e.length-ee-1]):e.slice(-1*ee),tn=()=>{eb(!0),eG(eZ.length)},tr=()=>{eb(!1)},ts=()=>{eN(0),eA(0);let l=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");eW(l),eI(Date.now()),l.addEventListener("open",a=>{console.log("WebSocket is connected"),l.send(JSON.stringify({authorize:e.token})),l.send(JSON.stringify({ticks:t})),setTimeout(function(){l.send(JSON.stringify({transaction:1,subscribe:1})),l.send(JSON.stringify({ticks_history:t,adjust_start_time:1,count:5e3,end:"latest",start:1,style:"ticks"}))},1e3)}),l.addEventListener("message",e=>{eK(JSON.parse(e.data))}),l.addEventListener("close",e=>{console.log("WebSocket is disconnected"),tt("Disconnected")}),l.addEventListener("error",e=>{console.log("WebSocket encountered an error")})},ti=()=>{eJ&&eJ.close(),tt("Disconnected")},to=e=>{if(console.log(e),e.error){e8(e.error.message),("RateLimit"===e.error.code||"OpenPositionLimit"===e.error.code)&&(ej(!0),console.log("trade",e.error.code));return}if("authorize"===e.msg_type)e9("Authorized"),ea(e.authorize),er(e.authorize.balance);else if("tick"===e.msg_type)tc(e.tick.quote,e.tick.pip_size,e.tick.epoch);else if("proposal"===e.msg_type)console.log("Proposal: ",e.proposal),th(e.proposal.id,e.echo_req.amount);else if("transaction"===e.msg_type&&e.transaction.amount)console.log("Transaction: ",e.transaction),tx(e.transaction);else if("history"===e.msg_type){eb(!1),console.log("history",e.history);let t=[],l=[];for(let a=0;a<e.history.times.length-1;a++)e.history.times[a]/2%(J+1)==0&&(t.push(e.history.prices[a]),l.push(e.history.times[a]));let a=g.n8(t,e.pip_size);console.log(a);let n=[0],r=[0];for(let s=2;s<t.length-1;s++)console.log("timeH",l[s],t[s],e3.predictNextBet(t[s-1],t[s-2]),g.Oh(t[s],e.pip_size),g.Oh(t[s],e.pip_size)==e3.predictNextBet(t[s-1],t[s-2])),tl(a,t[s-1],t[s-2],r[r.length-1],!0)==g.Oh(t[s],e.pip_size)?(n.push(0),r.push(r[r.length-1]+1)):(n.push(n[n.length-1]+1),r.push(r[r.length-1]-1));n.push(0),ez(n),eV(r),console.log("trade","LSS",n);let s=[];for(let e=0;e<t.length;e++){let t=a.slice(0,e);s.push(t.split("E").length-t.split("O").length)}eM(a),eF(s)}},tc=(e,t,l)=>{if(l/2%(J+1)!=0)return;console.log("timeR",l,e,eP,g.Oh(e,t),eP==g.Oh(e,t)),tt("Monitoring..."),console.log("Quote: ",e),console.log("trade quote:",e,"epoch:",l,"prevBet:",eP);let a=g.Oh(e,t);console.log("trade","XXXXXXXX",a,e);let n=eZ+a;eM(n),eF([...eH,n.split("E").length-n.split("O").length]),ef===a?eD(eC+1):eD(1),eS(a),eu(e.toFixed(t)),td(e,a),eB(e)},td=(e,t)=>{if(R>0&&eO>=R){ti();return}let l=t==eP,a=[...eX,l?0:eX[eX.length-1]+1],r=[...eY,eY[eY.length-1]+(l?1:-1)];ez(a),eV(r),ev&&H>0&&eZ.length-eL>H&&0==ey&&tr();let i=n;if(eh&&eZ.length>0){if(em)ej(!1);else{var o,d;let e=a[a.length-1];if(eE(e),l)console.log("trade","WON Last Trade"),ev&&(null===(o=e0.current)||void 0===o||o.play()),i=$?n*(eR+1):n,ek(eR+1);else{if(ek(0),console.log("trade","LOST Last Trade"),e>s){e8("Martingale Limit Reached"),console.log("trade","MARTINGALE LIMIT EXCEEDED"),ev&&(null===(d=e1.current)||void 0===d||d.play()),q&&!ev&&(tn(),ez([...eX,-1]));return}i="MARTINGALE"==B?g.Rm(n,c,e):g.zq(n,c,e)}}}let u=tl(eZ,+e,ew,ey,!0)||"",h=g.Xk.get(u)||"";tu(i,h),e_("DIGITEVEN"==h?"E":"O"),G(+i),console.log("TRADE AMOUNT:",i,"contract:",h,"balance:",en,"sp:",eO.toFixed(2))},tu=(e,l)=>{eJ&&ev&&(te("Opening trade.."),eJ.send(JSON.stringify({proposal:1,amount:e,basis:"stake",contract_type:l,currency:"USD",duration:J+1,duration_unit:"t",symbol:t})))},th=(e,t)=>{eJ&&ev&&(te("Opening trade..."),eJ.send(JSON.stringify({buy:e,price:t})))},tx=e=>{e.amount>0?tp("Trade WIN"):tp("Trade LOSE");let t=e.balance-el.balance;eN(t),t>eU&&eA(t),er(e.balance)},tg=()=>{eg?(ti(),eu("0.00")):(tt("Connecting..."),ts()),ep(!eg)},tp=e=>{eq.unshift({time:new Date().toLocaleTimeString(),message:e}),eQ(eq)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(C.r,{grow:!0,gutter:"sm",style:{height:"100%",width:"100%"},children:[(0,a.jsx)(C.r.Col,{span:8,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"is_virtual"in el&&!el.is_virtual?"#c82":"black"},children:(0,a.jsx)("center",{children:(0,a.jsxs)(C.r,{grow:!0,gutter:"xs",style:{height:"100%",width:"100%"},children:[(0,a.jsx)(C.r.Col,{span:12,style:{backgroundColor:eo,padding:"10px"},children:(0,a.jsx)(A.Z,{label:"",value:es,bgColor:eo})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Tick Count",value:eZ.length.toLocaleString("en-US"),bgColor:"#222"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Quote",value:ed,bgColor:"#222"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Digit Type (Index)",value:ef,bgColor:"#222"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Index Repeat Count",value:eC.toString(),bgColor:"#222"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Account Balance ($)",value:en.toLocaleString("en-US",{maximumFractionDigits:2}),bgColor:"#222"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Session Profit ($)",value:eO.toFixed(2),bgColor:"#222"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Session Duration",value:eT?g.J_(Date.now()-eT):"-",bgColor:"#222"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Last Bet Amount ($)",value:L.toFixed(2),bgColor:"#222"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Martingale Count Exceeds",bgColor:"#222",value:g.Et(ta(eX,!1)).filter(e=>e>s).length.toString()})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Index Diff Count Mean",bgColor:"#222",value:eH.length>1?(ta(eH,!0).reduce((e,t)=>e+t)/eH.slice(-1*ee).length).toFixed(1):"0"})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Martingale Count",bgColor:"#222",value:ey.toString()})}),(0,a.jsx)(C.r.Col,{span:3,children:(0,a.jsx)(A.Z,{label:"Risk ($)",bgColor:"#222",value:g.w0(n,c,s,B)})}),(0,a.jsx)(C.r.Col,{span:4,children:(0,a.jsx)(I.Y,{title:"Session Profit Max",value:eU})}),(0,a.jsx)(C.r.Col,{span:1,children:(0,a.jsx)(P,{label:"",value1:eZ.slice(ee).split("E").length,value2:eZ.slice(ee).split("O").length,color1:"cyan",color2:"yellow"})}),(0,a.jsx)(C.r.Col,{span:4,children:(0,a.jsx)(T.$,{label:"Target",value:eO,max:R})}),(0,a.jsx)(C.r.Col,{span:12,children:(0,a.jsx)(D.E,{color:0==ey&&eh?"green":"pink",label:ey+" | "+L,size:15,value:0==ey&&eh?100:ey/s*100})}),(0,a.jsx)(C.r.Col,{span:12,children:(0,a.jsxs)(m.z.Group,{children:[(0,a.jsx)(m.z,{color:eg?"red":"green",onClick:tg,fullWidth:!0,variant:"filled",children:eg?"Stop":"Start"}),(0,a.jsx)(m.z,{color:ev?"blue":"gray",onClick:()=>ev?tr():tn(),fullWidth:!0,variant:"filled",children:ev?"Trading On":"Trading Paused"})]})})]})})})})}),(0,a.jsx)(C.r.Col,{span:4,children:(0,a.jsxs)(C.r,{children:[(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(y.Ph,{label:"Currency Symbol",data:g.XD,value:t,onChange:l,placeholder:"Select a currency symbol"})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(E.Y,{label:"Starting amount ($)",precision:2,min:0,value:n,onChange:e=>r(+e),step:.01,max:100})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(E.Y,{label:"Martingale Limit",min:0,mt:"sm",value:s,onChange:e=>i(+e),step:1,max:10})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(E.Y,{label:"Martingale Profit ($)",precision:2,min:0,mt:"sm",value:c,onChange:e=>w(+e),step:.01,max:100})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(y.Ph,{label:"Bet Strategy",data:[{label:"Martingale",value:"MARTINGALE"},{label:"Martingale (Reducing)",value:"MARTINGALE_REDUCING"}],value:B,onChange:e=>_(e),placeholder:"Select a strategy",mt:"sm"})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(E.Y,{label:"Target Profit ($)",min:0,precision:2,mt:"sm",value:R,onChange:e=>k(+e),step:1,max:1e3})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(y.Ph,{label:"Predictor",data:[e2,e5,e3,e4,e6,e7].map(e=>e.getName()),mt:"sm",value:Z,onChange:e=>M(e),placeholder:"Select a currency symbol"})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(E.Y,{label:"Pause Trading After (ticks)",min:0,mt:"sm",value:H,onChange:e=>F(+e),step:1,max:1e3})}),(0,a.jsx)(C.r.Col,{span:6}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(E.Y,{label:"Tick Skip",min:0,mt:"sm",value:J,onChange:e=>W(+e),step:1,max:10})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(j.X,{checked:$,onChange:e=>K(e.currentTarget.checked),label:"Increase Bet on Wins",mt:"sm"})}),(0,a.jsx)(C.r.Col,{span:6,children:(0,a.jsx)(j.X,{checked:q,onChange:e=>Q(e.currentTarget.checked),label:"Start Trading on Lost",mt:"sm"})}),(0,a.jsxs)(C.r.Col,{span:12,children:[(0,a.jsx)(o.x,{children:"Index History Length"}),(0,a.jsx)(f.i,{label:ee,mt:"xs",defaultValue:100,step:100,min:100,max:5e3,marks:[{value:100,label:"100"},{value:200,label:"200"},{value:500,label:"500"},{value:1e3,label:"1000"},{value:2e3,label:"2000"},{value:5e3,label:"5000"}],styles:{markLabel:{display:"none"}},onChange:e=>{e%100==0&&et(e)}})]})]})}),(0,a.jsx)(C.r.Col,{span:12,children:(0,a.jsxs)(O.m,{defaultValue:"charts",children:[(0,a.jsxs)(O.m.List,{children:[(0,a.jsx)(O.m.Tab,{value:"charts",children:"Charts"}),(0,a.jsx)(O.m.Tab,{value:"stats",children:"Stats"}),(0,a.jsx)(O.m.Tab,{value:"info",children:"Basic Info"}),(0,a.jsx)(O.m.Tab,{value:"logs",children:"Logs"})]}),(0,a.jsx)(O.m.Panel,{value:"info",pt:"xs",children:(0,a.jsx)(N.i,{withColumnBorders:!0,children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Email"}),(0,a.jsx)("td",{children:el.email})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Full name"}),(0,a.jsx)("td",{children:el.fullname})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Currency"}),(0,a.jsx)("td",{children:el.currency})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Is Real"}),(0,a.jsx)("td",{children:el.is_virtual?"No":"Yes"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Starting balance"}),(0,a.jsx)("td",{children:el.balance})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Current balance"}),(0,a.jsx)("td",{children:en})]})]})})}),(0,a.jsxs)(O.m.Panel,{value:"logs",pt:"xs",children:[(0,a.jsx)(S.g,{placeholder:"Martingale Length History",disabled:!0,autosize:!0,minRows:4,maxRows:4,value:JSON.stringify(eX)}),(0,a.jsx)(S.g,{placeholder:"Index History",disabled:!0,autosize:!0,minRows:4,maxRows:4,value:JSON.stringify(eZ)}),(0,a.jsxs)(N.i,{striped:!0,withColumnBorders:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Time"}),(0,a.jsx)("th",{children:"Message"})]})}),(0,a.jsx)("tbody",{children:eq.map((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.time}),(0,a.jsx)("td",{children:e.message})]},t))})]})]}),(0,a.jsxs)(O.m.Panel,{value:"charts",pt:"xs",children:[(0,a.jsx)(U.Z,{chartY:ta(eX,!1),color:"cyan",title:"Loss Streak History"}),(0,a.jsx)(U.Z,{chartY:ta(eY,!0),color:"pink",title:"Snake Sequence"}),(0,a.jsx)(U.Z,{chartY:ta(eH,!0),color:"violet",title:"Odd/Even Diff History"})]}),(0,a.jsx)(O.m.Panel,{value:"stats",pt:"xs",children:(0,a.jsxs)(N.i,{striped:!0,withColumnBorders:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Martingale Length"}),(0,a.jsx)("td",{children:"Counts"}),(0,a.jsx)("td",{children:"Percentage"}),(0,a.jsx)("td",{children:"Percentage"})]})}),(0,a.jsx)("tbody",{children:Array.from({length:s+2},(e,t)=>t>=0&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:t}),(0,a.jsx)("td",{children:eX.filter(e=>e===t).length}),(0,a.jsx)("td",{children:(100*eX.filter(e=>e===t).length/eX.length).toFixed(1)}),(0,a.jsx)("td",{children:(0,a.jsx)(D.E,{color:t>6?"red":"green",label:"",size:15,value:100*eX.filter(e=>e===t).length/eX.length})})]},t))})]})})]})})]}),(0,a.jsx)("audio",{ref:e0,src:"media/win.m4a"}),(0,a.jsx)("audio",{ref:e1,src:"media/lose.m4a"})]})}function R(){let[e,t]=(0,d.useState)("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Technovenia Trading Bot - Martingale Bot"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(s.V,{padding:"md",header:(0,a.jsx)(i.h,{height:60,p:"xs",children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(o.x,{ml:"10px",fw:700,children:"Technovenia Trading Bot - Advanced Martingale"}),(0,a.jsx)(c.W,{value:e,onChange:e=>t(e.currentTarget.value),placeholder:"API Key",style:{textAlign:"right",width:"200px"},withAsterisk:!0})]})}),styles:e=>({main:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}}),children:(0,a.jsx)(_,{token:e})})]})}},9758:function(e,t,l){"use strict";l.d(t,{Et:function(){return g},J_:function(){return u},Oh:function(){return n},Rm:function(){return o},XD:function(){return a},Xk:function(){return p},aK:function(){return v},d2:function(){return h},eS:function(){return r},hP:function(){return x},n8:function(){return i},o:function(){return s},w0:function(){return d},zq:function(){return c}}),l(1163);let a=[{value:"WLDAUD",label:"AUD Index"},{value:"frxAUDCAD",label:"AUD/CAD"},{value:"frxAUDCHF",label:"AUD/CHF"},{value:"frxAUDJPY",label:"AUD/JPY"},{value:"frxAUDNZD",label:"AUD/NZD"},{value:"frxAUDUSD",label:"AUD/USD"},{value:"OTC_AS51",label:"Australian Index"},{value:"RDBEAR",label:"Bear Market Index"},{value:"BOOM500",label:"Boom 500 Index"},{value:"BOOM1000",label:"Boom 1000 Index"},{value:"RDBULL",label:"Bull Market Index"},{value:"CRASH500",label:"Crash 500 Index"},{value:"CRASH1000",label:"Crash 1000 Index"},{value:"OTC_AEX",label:"Dutch Index"},{value:"WLDEUR",label:"EUR Index"},{value:"frxEURAUD",label:"EUR/AUD"},{value:"frxEURCAD",label:"EUR/CAD"},{value:"frxEURCHF",label:"EUR/CHF"},{value:"frxEURGBP",label:"EUR/GBP"},{value:"frxEURJPY",label:"EUR/JPY"},{value:"frxEURNZD",label:"EUR/NZD"},{value:"frxEURUSD",label:"EUR/USD"},{value:"OTC_SX5E",label:"Euro 50 Index"},{value:"OTC_FCHI",label:"French Index"},{value:"WLDGBP",label:"GBP Index"},{value:"frxGBPAUD",label:"GBP/AUD"},{value:"frxGBPCAD",label:"GBP/CAD"},{value:"frxGBPCHF",label:"GBP/CHF"},{value:"frxGBPJPY",label:"GBP/JPY"},{value:"frxGBPNOK",label:"GBP/NOK"},{value:"frxGBPNZD",label:"GBP/NZD"},{value:"frxGBPUSD",label:"GBP/USD"},{value:"OTC_GDAXI",label:"German Index"},{value:"frxXAUUSD",label:"Gold/USD"},{value:"OTC_HSI",label:"Hong Kong Index"},{value:"OTC_N225",label:"Japanese Index"},{value:"frxNZDJPY",label:"NZD/JPY"},{value:"frxNZDUSD",label:"NZD/USD"},{value:"frxBROUSD",label:"Oil/USD"},{value:"frxXPDUSD",label:"Palladium/USD"},{value:"frxXPTUSD",label:"Platinum/USD"},{value:"frxXAGUSD",label:"Silver/USD"},{value:"stpRNG",label:"Step Index"},{value:"OTC_SSMI",label:"Swiss Index"},{value:"OTC_FTSE",label:"UK Index"},{value:"OTC_SPC",label:"US Index"},{value:"OTC_NDX",label:"US Tech Index"},{value:"WLDUSD",label:"USD Index"},{value:"frxUSDCAD",label:"USD/CAD"},{value:"frxUSDCHF",label:"USD/CHF"},{value:"frxUSDJPY",label:"USD/JPY"},{value:"frxUSDMXN",label:"USD/MXN"},{value:"frxUSDNOK",label:"USD/NOK"},{value:"frxUSDPLN",label:"USD/PLN"},{value:"frxUSDSEK",label:"USD/SEK"},{value:"1HZ10V",label:"Volatility 10 (1s) Index"},{value:"R_10",label:"Volatility 10 Index"},{value:"1HZ25V",label:"Volatility 25 (1s) Index"},{value:"R_25",label:"Volatility 25 Index"},{value:"1HZ50V",label:"Volatility 50 (1s) Index"},{value:"R_50",label:"Volatility 50 Index"},{value:"1HZ75V",label:"Volatility 75 (1s) Index"},{value:"R_75",label:"Volatility 75 Index"},{value:"1HZ100V",label:"Volatility 100 (1s) Index"},{value:"R_100",label:"Volatility 100 Index"},{value:"OTC_DJI",label:"Wall Street Index"}],n=(e,t)=>{let l=e.toFixed(t).slice(-1);return r(l)[0]},r=e=>e%2==0?"EVEN":"ODD",s=e=>e%2==0?"E":"O",i=(e,t)=>e.map(e=>n(e,t)).join(""),o=(e,t,l)=>{if(0==l)return e.toFixed(2);{let a=e+parseFloat(t);for(let e=1;e<l;e++)a*=2;return a.toFixed(2)}},c=(e,t,l)=>[.7,1.4,2.8,5.6,12,24,48,96,192][l],d=(e,t,l,a)=>{let n=0;for(let r=0;r<=l;r++)"MARTINGALE"==a?n+=+o(e,t,r):"MARTINGALE_REDUCING"==a&&(n+=+c(e,t,r));return n.toFixed(2)},u=e=>{let t=new Date(e),l=t.getUTCHours().toString().padStart(2,"0"),a=t.getUTCMinutes().toString().padStart(2,"0"),n=t.getUTCSeconds().toString().padStart(2,"0");return"".concat(l,":").concat(a,":").concat(n)},h=(e,t)=>t.filter(t=>t==e).length,x=e=>e.map(e=>"EVEN"==e?"ODD":"EVEN"),g=e=>e.filter((e,t,l)=>t<l.length-1&&0==l[t+1]),p=new Map([["E","DIGITEVEN"],["O","DIGITODD"]]),v=()=>window.location.hostname.includes("technovenia")}},function(e){e.O(0,[196,368,366,303,215,814,774,888,179],function(){return e(e.s=1368)}),_N_E=e.O()}]);