(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{1368:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/martingale",function(){return l(1523)}])},3090:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var n=l(5893),a=l(3148),r=l(5430);function s(e){a.kL.register(a.uw,a.f$,a.od,a.jn,a.Dx,a.u,a.De);let t={responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:e.title},grid:{display:!0}}},l=Array.from({length:e.chartY.length},(e,t)=>t+1),s={labels:l,datasets:[{label:"Dataset 1",data:e.chartY,borderColor:e.color,backgroundColor:"rgba(255, 99, 132, 0.5)"}]};return(0,n.jsx)(r.x1,{data:s,height:50,options:t})}},7608:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var n=l(5893),a=l(5117);function r(e){return(0,n.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",backgroundColor:e.bgColor,padding:"10px"},children:[(0,n.jsx)(a.x,{fz:"xl",fw:700,tt:"uppercase",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:e.value}),e.label&&(0,n.jsx)(a.x,{fz:"xs",c:"#777",children:e.label})]})}},6729:function(e,t,l){"use strict";l.d(t,{Y:function(){return h}});var n=l(5893),a=l(6817),r=l(2623),s=l(1232),i=l(5117),o=l(5044),c=l(2470),d=l(2136);let u=(0,a.k)(e=>({root:{padding:"calc(".concat(e.spacing.xl," * 1.5)")},label:{fontFamily:"Greycliff CF, ".concat(e.fontFamily)}}));function h(e){let{classes:t}=u(),l=e.value>=0?c.Z:d.Z;return(0,n.jsx)(r.X,{withBorder:!0,p:"md",radius:"md",style:{height:"100%"},children:(0,n.jsxs)(s.Z,{position:"apart",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.x,{c:"dimmed",tt:"uppercase",fw:700,fz:"xs",className:t.label,children:e.title}),(0,n.jsxs)(i.x,{mt:10,fw:700,fz:"xl",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$ ",e.value.toFixed(2)]})]}),(0,n.jsx)(o.k,{color:"gray",variant:"light",sx:t=>({color:e.value>=0?t.colors.teal[6]:t.colors.red[6]}),size:38,radius:"md",children:(0,n.jsx)(l,{size:"1.8rem",stroke:1.5})})]})},e.title)}},1523:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return G}});var n=l(5893),a=l(9008),r=l.n(a),s=l(8664),i=l(83),o=l(5117),c=l(3193),d=l(7294);class u{getName(){return this.name}predictNextBet(){return"E"}constructor(){this.name="ALL_EVENS"}}class h{getName(){return this.name}predictNextBet(){return"O"}constructor(){this.name="ALL_ODDS"}}class x{getName(){return this.name}predictNextBet(e,t){return e>=t?this.optionB:this.optionA}constructor(e,t){this.name="DOWN_UP",this.optionA=e,this.optionB=t}}class g{getName(){return this.name}predictNextBet(e,t){return e>=t?this.optionB:this.optionA}constructor(e,t){this.name="DOWN_UP_SKIPPED",this.optionA=e,this.optionB=t}}var p=l(9758);class j{getName(){return this.name}predictNextBet(e,t,l,n,a){return 3==e||4==e?+l>n?this.optionA:this.optionB:5==e?Math.random()>.5?this.optionA:this.optionB:6==e?"E"==this.onTwoCharHistoryPredict(t+p.Oh(l),a)?this.optionA:this.optionB:this.optionA}constructor(e,t){this.name="MIXED",this.onTwoCharHistoryPredict=(e,t)=>{if(e.length<2)return"OE";let l=!1;t&&(e.slice(-4)=="O".repeat(4)||e.slice(-4)=="E".repeat(4))&&(l=!0);let n=e.slice(-2),a=e.split(n),r=0,s=0;for(let t=2;t<a.length;t++)n==e.slice(t-2,t)&&("O"==e[t]?r++:s++);return r>s?l?"E":"O":l?"O":"E"},this.optionA=e,this.optionB=t}}class b{getName(){return this.name}predictNextBet(e,t,l){return"E"==this.onTwoCharHistoryPredict(e+p.Oh(t),l)?this.optionA:this.optionB}constructor(e,t){this.name="TWO_CHAR_HISTORY",this.onTwoCharHistoryPredict=(e,t)=>{if(e.length<2)return"OE";let l=!1;t&&(e.slice(-4)=="O".repeat(4)||e.slice(-4)=="E".repeat(4))&&(l=!0);let n=e.slice(-2),a=e.split(n),r=0,s=0;for(let t=2;t<a.length;t++)n==e.slice(t-2,t)&&("O"==e[t]?r++:s++);return r>s?l?"E":"O":l?"O":"E"},this.optionA=e,this.optionB=t}}class m{getName(){return this.name}predictNextBet(e,t){return e>=t?this.optionA:this.optionB}constructor(e,t){this.name="UP_DOWN",this.optionA=e,this.optionB=t}}var v=l(7841),f=l(3775),S=l(2675),C=l(1238),D=l(50),E=l(3941),y=l(9469),N=l(7661),O=l(741),U=l(5078),A=l(3090),w=l(7608),T=l(2623),B=l(6787);function I(e){return(0,n.jsx)(T.X,{withBorder:!0,radius:"md",p:"xs",style:{height:"100%"},children:(0,n.jsx)("center",{children:(0,n.jsx)(B.T,{size:140,sections:[{value:100*e.value/e.max*(e.value>=0?1:-1),color:e.value>=0?"white":"yellow"}],label:(0,n.jsxs)(o.x,{color:e.value>=0?"white":"yellow",weight:700,align:"center",size:"xl",children:["$",e.value.toFixed(2)]})})})})}var P=l(6729),k=l(6817),_=l(1017);let R=(0,k.k)(e=>({card:{height:"100%"},title:{color:e.fn.rgba(e.white,.65)},stats:{color:e.white},progressBar:{backgroundColor:e.white},progressTrack:{backgroundColor:e.fn.rgba(e.white,.4)}}));function L(e){let{classes:t}=R();return(0,n.jsxs)(_.Z,{withBorder:!0,radius:"md",p:"xl",className:t.card,children:[(0,n.jsx)(o.x,{fz:"xs",tt:"uppercase",fw:700,className:t.title,children:e.label}),(0,n.jsxs)(o.x,{fz:"lg",fw:500,className:t.stats,variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$",e.value.toFixed(2)]}),(0,n.jsx)(E.E,{value:e.value>=0?100*e.value/e.max:-(100*e.value/e.max*1),mt:"md",size:"lg",radius:"xl",color:e.value>=0?"green":"yellow"})]})}function Z(e){var t;let l;let[a,r]=(0,d.useState)("RDBEAR"),[s,i]=(0,d.useState)(.4),[c,T]=(0,d.useState)(0),[B,k]=(0,d.useState)(6),[_,R]=(0,d.useState)(.4),[Z,G]=(0,d.useState)("MARTINGALE"),[M,F]=(0,d.useState)(50),[X,z]=(0,d.useState)(0),[H,Y]=(0,d.useState)("DOWN_UP"),[V,J]=(0,d.useState)(0),[W,K]=(0,d.useState)(1),[$,q]=(0,d.useState)(200),[Q,ee]=(0,d.useState)(!1),[et,el]=(0,d.useState)(!1),[en,ea]=(0,d.useState)(!1),[er,es]=(0,d.useState)({}),[ei,eo]=(0,d.useState)(0),[ec,ed]=(0,d.useState)("Ready"),[eu,eh]=(0,d.useState)("#555"),[ex,eg]=(0,d.useState)("0.00"),[ep,ej]=(0,d.useState)(!0),[eb,em]=(0,d.useState)(!1),[ev,ef]=(0,d.useState)(!1),[eS,eC]=(0,d.useState)(!1),[eD,eE]=(0,d.useState)("E"),[ey,eN]=(0,d.useState)(0),[eO,eU]=(0,d.useState)(0),[eA,ew]=(0,d.useState)(0),[eT,eB]=(0,d.useState)(0),[eI,eP]=(0,d.useState)(0),[ek,e_]=(0,d.useState)(0),[eR,eL]=(0,d.useState)(0),[eZ,eG]=(0,d.useState)(0),[eM,eF]=(0,d.useState)("E"),[eX,ez]=(0,d.useState)(0),[eH,eY]=(0,d.useState)(0),[eV,eJ]=(0,d.useState)(!0),[eW,eK]=(0,d.useState)(0),[e$,eq]=(0,d.useState)(""),[eQ,e0]=(0,d.useState)([]),[e1,e2]=(0,d.useState)([]),[e5,e3]=(0,d.useState)([0]),[e4,e7]=(0,d.useState)(),[e6,e8]=(0,d.useState)(null),[e9,te]=(0,d.useState)([]),tt=(0,d.useRef)(null),tl=(0,d.useRef)(null),tn=new u,ta=new h,tr=new x("E","O"),ts=new m("E","O"),ti=new j("E","O"),to=new b("E","O"),tc=new g("E","O"),td=()=>B+c;(0,d.useEffect)(()=>{e6&&p.aK()&&tS(e6)},[e6]);let tu=e=>{ed(e),eh("red")},th=e=>{ed(e),eh("green")},tx=e=>{ed(e),eh("#8E44AD")},tg=e=>{ed(e),eh("#555")},tp=(e,t,l,n,a,r)=>{if(H==tn.getName())return tn.predictNextBet();if(H==ta.getName())return ta.predictNextBet();if(H==to.getName())return to.predictNextBet(e,+t,!0);if(H==ti.getName())return ti.predictNextBet(n,e,+t,l,!0);if(H==ts.getName())return ts.predictNextBet(+t,l);if(H==tr.getName())return tr.predictNextBet(+t,l);if(H==tc.getName())return tr.predictNextBet(+t,a)},tj=(e,t)=>t?e.slice(-1*$).map(t=>t-e[e.length-$-1]):e.slice(-1*$),tb=()=>{ef(!0),eY(e$.length)},tm=()=>{ef(!1)},tv=()=>{eB(0),eP(0);let t=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");e7(t),e_(Date.now()),t.addEventListener("open",l=>{console.log("WebSocket is connected"),t.send(JSON.stringify({authorize:e.token})),t.send(JSON.stringify({ticks:a})),setTimeout(function(){t.send(JSON.stringify({transaction:1,subscribe:1})),t.send(JSON.stringify({ticks_history:a,adjust_start_time:1,count:5e3,end:"latest",start:1,style:"ticks"}))},1e3)}),t.addEventListener("message",e=>{e8(JSON.parse(e.data))}),t.addEventListener("close",e=>{console.log("WebSocket is disconnected"),tg("Disconnected")}),t.addEventListener("error",e=>{console.log("WebSocket encountered an error")})},tf=()=>{e4&&e4.close(),tg("Disconnected")},tS=e=>{if(console.log(e),e.error){tu(e.error.message),("RateLimit"===e.error.code||"OpenPositionLimit"===e.error.code)&&(eC(!0),console.log("trade",e.error.code));return}if("authorize"===e.msg_type)th("Authorized"),es(e.authorize),eo(e.authorize.balance);else if("tick"===e.msg_type)tC(e.tick.quote,e.tick.pip_size,e.tick.epoch);else if("proposal"===e.msg_type)console.log("Proposal: ",e.proposal),ty(e.proposal.id,e.echo_req.amount);else if("transaction"===e.msg_type&&e.transaction.amount)console.log("Transaction: ",e.transaction),tN(e.transaction);else if("history"===e.msg_type){ef(!1),console.log("history",e.history);let t=[],l=[];for(let n=0;n<e.history.times.length-1;n++)e.history.times[n]/2%(W+1)==0&&(t.push(e.history.prices[n]),l.push(e.history.times[n]));let n=p.n8(t,e.pip_size);console.log(n);let a=[0],r=[0];for(let s=2;s<t.length-1;s++)console.log("timeH",l[s],t[s],tr.predictNextBet(t[s-1],t[s-2]),p.Oh(t[s],e.pip_size),p.Oh(t[s],e.pip_size)==tr.predictNextBet(t[s-1],t[s-2])),tp(n,t[s-1],t[s-2],r[r.length-1],e.history.prices[e.history.times.indexOf(l[s])-1]||0,!0)==p.Oh(t[s],e.pip_size)?(a.push(0),r.push(r[r.length-1]+1)):(a.push(a[a.length-1]+1),r.push(r[r.length-1]-1));a.push(0),e2(a),e3(r),console.log("trade","LSS",a);let s=[];for(let e=0;e<t.length;e++){let t=n.slice(0,e);s.push(t.split("E").length-t.split("O").length)}eq(n),e0(s)}},tC=(e,t,l)=>{if(l/2%(W+1)!=0)return;console.log("timeR",l,e,eM,p.Oh(e,t),eM==p.Oh(e,t)),tg("Monitoring..."),console.log("Quote: ",e),console.log("trade quote:",e,"epoch:",l,"prevBet:",eM);let n=p.Oh(e,t);console.log("trade","XXXXXXXX",n,e);let a=e$+n;eq(a),e0([...eQ,a.split("E").length-a.split("O").length]),eD===n?eN(ey+1):eN(1),eE(n),eg(e.toFixed(t)),tD(e,n),eL(e)},tD=(e,t)=>{if(M>0&&eT>=M){tf();return}let l=t==eM,n=l?0:e1[e1.length-1]+1,a=[...e1,n],r=[...e5,e5[e5.length-1]+(l?1:-1)];eU(n),e2(a),e3(r),ev&&V>0&&e$.length-eH>V&&0==eO&&tm();let i=eA;if(eA>B&&0==n&&(i=0),eV)eK(0);else if(eS)eC(!1);else{var o,d;l?(console.log("trade","WON Last Trade"),ev&&(null===(o=tt.current)||void 0===o||o.play()),ez(eX+1),i=0,eK(eW+X)):(ez(0),i+=1,eK(eW-X),console.log("trade","LOST Last Trade"),i>B&&(tu("Martingale Limit Reached"),console.log("trade","MARTINGALE LIMIT EXCEEDED"),ev&&(null===(d=tl.current)||void 0===d||d.play()),et&&!ev&&tb(),en&&ev&&eY(e$.length),ev&&eP(eI-parseInt(p.w0(s,_,B,Z))))),eJ(!0)}if(ew(i),ev&&n>=c&&i<=B){let t=tp(e$,+e,eR,i,eZ,!0)||"",n=p.Xk.get(t)||"",a=0;tE(a=l?Q?s*(eX+1):s:"MARTINGALE"==Z?p.Rm(s,_,i):p.zq(s,_,i),n),eF("DIGITEVEN"==n?"E":"O"),z(+a),eJ(!1),console.log("TRADE AMOUNT:",a,"contract:",n,"balance:",ei,"sp:",eT.toFixed(2))}else console.log("trade","skipping..."+n)},tE=(e,t)=>{e4&&ev&&(tx("Opening trade.."),e4.send(JSON.stringify({proposal:1,amount:e,basis:"stake",contract_type:t,currency:"USD",duration:W+1,duration_unit:"t",symbol:a})))},ty=(e,t)=>{e4&&ev&&(tx("Opening trade..."),e4.send(JSON.stringify({buy:e,price:t})))},tN=e=>{e.amount>0?tU("Trade WIN"):tU("Trade LOSE");let t=e.balance-er.balance;eB(t),t>eI&&eP(t),eo(e.balance)},tO=()=>{eb?(tf(),eg("0.00")):(tg("Connecting..."),tv()),em(!eb)},tU=e=>{e9.unshift({time:new Date().toLocaleTimeString(),message:e}),te(e9)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(D.r,{grow:!0,gutter:"sm",style:{height:"100%",width:"100%"},children:[(0,n.jsx)(D.r.Col,{span:8,children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"is_virtual"in er&&!er.is_virtual?"#c82":"black"},children:(0,n.jsx)("center",{children:(0,n.jsxs)(D.r,{grow:!0,gutter:"xs",style:{height:"100%",width:"100%"},children:[(0,n.jsx)(D.r.Col,{span:12,style:{backgroundColor:eu,padding:"10px"},children:(0,n.jsx)(w.Z,{label:"",value:ec,bgColor:eu})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Tick Count",bgColor:"#222",value:e$.length.toLocaleString("en-US")})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Quote",bgColor:"#222",value:ex})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Digit Type (Index)",bgColor:"#222",value:eD})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Index Repeat Count",bgColor:"#222",value:ey.toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Account Balance ($)",bgColor:"#222",value:ei.toLocaleString("en-US",{maximumFractionDigits:2})})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Session Profit ($)",bgColor:"#222",value:eT.toFixed(2)+" | "+eW.toFixed(2)})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Session Duration",bgColor:"#222",value:ek?p.J_(Date.now()-ek):"-"})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Prev Bet Amount ($)",bgColor:"#222",value:X.toFixed(2)})}),(0,n.jsx)(D.r.Col,{span:4,children:(0,n.jsx)(P.Y,{title:"Window Profit Approx",value:(t=tj(e1,!1),l=p.Et(t,td()).length,(p.Et(t,c-1).length-l)*s-l*parseInt(p.w0(s,_,B,Z)))})}),(0,n.jsx)(D.r.Col,{span:1,children:(0,n.jsx)(I,{value:eI,max:M})}),(0,n.jsx)(D.r.Col,{span:4,children:(0,n.jsx)(L,{label:"Session Profit",value:eT,max:M})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Martingale Limit Exceeds",bgColor:"#222",value:p.Et(tj(e1,!1),td()).filter(e=>e>td()).length.toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Index Diff Count Mean",bgColor:"#222",value:eQ.length>1?(tj(eQ,!0).reduce((e,t)=>e+t)/eQ.slice(-1*$).length).toFixed(1):"0"})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Martingale Count",bgColor:"#222",value:eA.toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Risk ($)",bgColor:"#222",value:p.w0(s,_,B,Z)})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Ticks After Exceed",bgColor:"#222",value:(e1.length-e1.reduce((e,t,l)=>t>td()?l:e,-1)).toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Loss/Win Ratio",bgColor:"#222",value:p.Et(tj(e1,!1),td()).length+"/"+tj(e1,!1).filter(e=>0==e).length})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Even Count - Odd Count",bgColor:"#222",value:(e$.slice($).split("E").length-e$.slice($).split("O").length).toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Tick Count After Resume",bgColor:"#222",value:ev?(e$.length-eH).toString():"-"})}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsx)(E.E,{color:eV&&0==eW?"cyan.9":0==eO&&ep?"green":"pink",label:eO+" | "+X,size:15,value:0==eO&&ep?100:eO/td()*100})}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsxs)(v.z.Group,{children:[(0,n.jsx)(v.z,{color:eb?"red":"green",onClick:tO,fullWidth:!0,variant:"filled",children:eb?"Stop":"Start"}),(0,n.jsx)(v.z,{color:ev?"blue":"gray",onClick:()=>ev?tm():tb(),fullWidth:!0,variant:"filled",children:ev?"Trading On":"Trading Paused"})]})})]})})})})}),(0,n.jsx)(D.r.Col,{span:4,children:(0,n.jsxs)(D.r,{children:[(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(y.Ph,{label:"Currency Symbol",data:p.XD,value:a,onChange:r,placeholder:"Select a currency symbol"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Target Profit ($)",min:0,precision:2,value:M,onChange:e=>F(+e),step:1,max:1e3})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Trigger At",min:0,mt:"xs",value:c,onChange:e=>T(+e),step:1,max:10})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Martingale Limit",min:0,mt:"xs",value:B,onChange:e=>k(+e),step:1,max:10})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Starting amount ($)",precision:2,min:0,mt:"xs",value:s,onChange:e=>i(+e),step:.01,max:100})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Martingale Profit ($)",precision:2,min:0,mt:"xs",value:_,onChange:e=>R(+e),step:.01,max:100})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(y.Ph,{label:"Predictor",data:[tn,ta,tr,ts,ti,to,tc].map(e=>e.getName()),mt:"xs",value:H,onChange:e=>Y(e),placeholder:"Select a currency symbol"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(y.Ph,{label:"Bet Strategy",data:[{label:"Martingale",value:"MARTINGALE"},{label:"Martingale (Reducing)",value:"MARTINGALE_REDUCING"}],value:Z,onChange:e=>G(e),placeholder:"Select a strategy",mt:"xs"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Tick Skip",min:0,mt:"xs",value:W,onChange:e=>K(+e),step:1,max:10})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Pause Trading After (ticks)",min:0,mt:"xs",value:V,onChange:e=>J(+e),step:1,max:1e3})}),(0,n.jsx)(D.r.Col,{span:6}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsx)(f.X,{checked:Q,onChange:e=>ee(e.currentTarget.checked),label:"Increase Bet on Wins",mt:"xs"})}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsx)(f.X,{checked:et,onChange:e=>el(e.currentTarget.checked),label:"Start Trading on Exceed",mt:"xs"})}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsx)(f.X,{checked:en,onChange:e=>ea(e.currentTarget.checked),label:"Reset Pause Count on Exceed",mt:"xs"})}),(0,n.jsxs)(D.r.Col,{span:12,children:[(0,n.jsx)(o.x,{children:"Index History Length"}),(0,n.jsx)(S.i,{label:$,mt:"xs",defaultValue:100,step:100,min:100,max:5e3,marks:[{value:100,label:"100"},{value:200,label:"200"},{value:500,label:"500"},{value:1e3,label:"1000"},{value:2e3,label:"2000"},{value:5e3,label:"5000"}],styles:{markLabel:{display:"none"}},onChange:e=>{e%100==0&&q(e)}})]})]})}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsxs)(O.m,{defaultValue:"charts",children:[(0,n.jsxs)(O.m.List,{children:[(0,n.jsx)(O.m.Tab,{value:"charts",children:"Charts"}),(0,n.jsx)(O.m.Tab,{value:"stats",children:"Stats"}),(0,n.jsx)(O.m.Tab,{value:"info",children:"Basic Info"}),(0,n.jsx)(O.m.Tab,{value:"logs",children:"Logs"})]}),(0,n.jsx)(O.m.Panel,{value:"info",pt:"xs",children:(0,n.jsx)(U.i,{withColumnBorders:!0,children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Email"}),(0,n.jsx)("td",{children:er.email})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Full name"}),(0,n.jsx)("td",{children:er.fullname})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Currency"}),(0,n.jsx)("td",{children:er.currency})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Is Real"}),(0,n.jsx)("td",{children:er.is_virtual?"No":"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Starting balance"}),(0,n.jsx)("td",{children:er.balance})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Current balance"}),(0,n.jsx)("td",{children:ei})]})]})})}),(0,n.jsxs)(O.m.Panel,{value:"logs",pt:"xs",children:[(0,n.jsx)(C.g,{placeholder:"Martingale Length History",disabled:!0,autosize:!0,minRows:4,maxRows:4,value:JSON.stringify(e1)}),(0,n.jsx)(C.g,{placeholder:"Index History",disabled:!0,autosize:!0,minRows:4,maxRows:4,value:JSON.stringify(e$)}),(0,n.jsxs)(U.i,{striped:!0,withColumnBorders:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Time"}),(0,n.jsx)("th",{children:"Message"})]})}),(0,n.jsx)("tbody",{children:e9.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.time}),(0,n.jsx)("td",{children:e.message})]},t))})]})]}),(0,n.jsxs)(O.m.Panel,{value:"charts",pt:"xs",children:[(0,n.jsx)(A.Z,{chartY:tj(e1,!1),color:"cyan",title:"Loss Streak Chart"}),(0,n.jsx)(A.Z,{chartY:tj(e5,!0),color:"pink",title:"Snake Sequence"}),(0,n.jsx)(A.Z,{chartY:[...e1,td()].map((e,t)=>e===td()+1?t:-1).filter(e=>-1!==e).map((e,t,l)=>t<l.length-1?l[t+1]-e:null).filter(e=>null!==e),color:"violet",title:"Exceeds Gap Chart"}),(0,n.jsx)(A.Z,{chartY:tj(eQ,!0),color:"violet",title:"Odd/Even Diff Chart"})]}),(0,n.jsx)(O.m.Panel,{value:"stats",pt:"xs",children:(0,n.jsxs)(U.i,{striped:!0,withColumnBorders:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Martingale Length"}),(0,n.jsx)("td",{children:"Counts"}),(0,n.jsx)("td",{children:"Percentage"}),(0,n.jsx)("td",{children:"Percentage"})]})}),(0,n.jsx)("tbody",{children:Array.from({length:td()+2},(e,t)=>t>=0&&(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:t}),(0,n.jsx)("td",{children:e1.filter(e=>e===t).length}),(0,n.jsx)("td",{children:(100*e1.filter(e=>e===t).length/e1.length).toFixed(1)}),(0,n.jsx)("td",{children:(0,n.jsx)(E.E,{color:t>6?"red":"green",label:"",size:15,value:100*e1.filter(e=>e===t).length/e1.length})})]},t))})]})})]})})]}),(0,n.jsx)("audio",{ref:tt,src:"media/win.m4a"}),(0,n.jsx)("audio",{ref:tl,src:"media/lose.m4a"})]})}function G(){let[e,t]=(0,d.useState)("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Technovenia Trading Bot - Martingale Bot"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(s.V,{padding:"md",header:(0,n.jsx)(i.h,{height:60,p:"xs",children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(o.x,{ml:"10px",fw:700,children:"Technovenia Trading Bot - Advanced Martingale"}),(0,n.jsx)(c.W,{value:e,onChange:e=>t(e.currentTarget.value),placeholder:"API Key",style:{textAlign:"right",width:"200px"},withAsterisk:!0})]})}),styles:e=>({main:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}}),children:(0,n.jsx)(Z,{token:e})})]})}},9758:function(e,t,l){"use strict";l.d(t,{Et:function(){return g},J_:function(){return u},Oh:function(){return a},Rm:function(){return o},XD:function(){return n},Xk:function(){return p},aK:function(){return j},d2:function(){return h},eS:function(){return r},hP:function(){return x},n8:function(){return i},o:function(){return s},w0:function(){return d},zq:function(){return c}});let n=[{value:"WLDAUD",label:"AUD Index"},{value:"frxAUDCAD",label:"AUD/CAD"},{value:"frxAUDCHF",label:"AUD/CHF"},{value:"frxAUDJPY",label:"AUD/JPY"},{value:"frxAUDNZD",label:"AUD/NZD"},{value:"frxAUDUSD",label:"AUD/USD"},{value:"OTC_AS51",label:"Australian Index"},{value:"RDBEAR",label:"Bear Market Index"},{value:"BOOM500",label:"Boom 500 Index"},{value:"BOOM1000",label:"Boom 1000 Index"},{value:"RDBULL",label:"Bull Market Index"},{value:"CRASH500",label:"Crash 500 Index"},{value:"CRASH1000",label:"Crash 1000 Index"},{value:"OTC_AEX",label:"Dutch Index"},{value:"WLDEUR",label:"EUR Index"},{value:"frxEURAUD",label:"EUR/AUD"},{value:"frxEURCAD",label:"EUR/CAD"},{value:"frxEURCHF",label:"EUR/CHF"},{value:"frxEURGBP",label:"EUR/GBP"},{value:"frxEURJPY",label:"EUR/JPY"},{value:"frxEURNZD",label:"EUR/NZD"},{value:"frxEURUSD",label:"EUR/USD"},{value:"OTC_SX5E",label:"Euro 50 Index"},{value:"OTC_FCHI",label:"French Index"},{value:"WLDGBP",label:"GBP Index"},{value:"frxGBPAUD",label:"GBP/AUD"},{value:"frxGBPCAD",label:"GBP/CAD"},{value:"frxGBPCHF",label:"GBP/CHF"},{value:"frxGBPJPY",label:"GBP/JPY"},{value:"frxGBPNOK",label:"GBP/NOK"},{value:"frxGBPNZD",label:"GBP/NZD"},{value:"frxGBPUSD",label:"GBP/USD"},{value:"OTC_GDAXI",label:"German Index"},{value:"frxXAUUSD",label:"Gold/USD"},{value:"OTC_HSI",label:"Hong Kong Index"},{value:"OTC_N225",label:"Japanese Index"},{value:"frxNZDJPY",label:"NZD/JPY"},{value:"frxNZDUSD",label:"NZD/USD"},{value:"frxBROUSD",label:"Oil/USD"},{value:"frxXPDUSD",label:"Palladium/USD"},{value:"frxXPTUSD",label:"Platinum/USD"},{value:"frxXAGUSD",label:"Silver/USD"},{value:"stpRNG",label:"Step Index"},{value:"OTC_SSMI",label:"Swiss Index"},{value:"OTC_FTSE",label:"UK Index"},{value:"OTC_SPC",label:"US Index"},{value:"OTC_NDX",label:"US Tech Index"},{value:"WLDUSD",label:"USD Index"},{value:"frxUSDCAD",label:"USD/CAD"},{value:"frxUSDCHF",label:"USD/CHF"},{value:"frxUSDJPY",label:"USD/JPY"},{value:"frxUSDMXN",label:"USD/MXN"},{value:"frxUSDNOK",label:"USD/NOK"},{value:"frxUSDPLN",label:"USD/PLN"},{value:"frxUSDSEK",label:"USD/SEK"},{value:"1HZ10V",label:"Volatility 10 (1s) Index"},{value:"R_10",label:"Volatility 10 Index"},{value:"1HZ25V",label:"Volatility 25 (1s) Index"},{value:"R_25",label:"Volatility 25 Index"},{value:"1HZ50V",label:"Volatility 50 (1s) Index"},{value:"R_50",label:"Volatility 50 Index"},{value:"1HZ75V",label:"Volatility 75 (1s) Index"},{value:"R_75",label:"Volatility 75 Index"},{value:"1HZ100V",label:"Volatility 100 (1s) Index"},{value:"R_100",label:"Volatility 100 Index"},{value:"OTC_DJI",label:"Wall Street Index"}],a=(e,t)=>{let l=e.toFixed(t).slice(-1);return r(l)[0]},r=e=>e%2==0?"EVEN":"ODD",s=e=>e%2==0?"E":"O",i=(e,t)=>e.map(e=>a(e,t)).join(""),o=(e,t,l)=>{if(0==l)return e.toFixed(2);{let n=e+parseFloat(t);for(let e=1;e<l;e++)n*=2;return n.toFixed(2)}},c=(e,t,l)=>[.7,1.4,2.8,5.6,12,24,48,96,192][l],d=(e,t,l,n)=>{let a=0;for(let r=0;r<=l;r++)"MARTINGALE"==n?a+=+o(e,t,r):"MARTINGALE_REDUCING"==n&&(a+=+c(e,t,r));return a.toFixed(2)},u=e=>{let t=new Date(e),l=t.getUTCHours().toString().padStart(2,"0"),n=t.getUTCMinutes().toString().padStart(2,"0"),a=t.getUTCSeconds().toString().padStart(2,"0");return"".concat(l,":").concat(n,":").concat(a)},h=(e,t)=>t.filter(t=>t==e).length,x=e=>e.map(e=>"EVEN"==e?"ODD":"EVEN"),g=(e,t)=>e.filter((e,l,n)=>l<n.length-1&&e>t&&n[l+1]<=0),p=new Map([["E","DIGITEVEN"],["O","DIGITODD"]]),j=()=>window.location.hostname.includes("technovenia")}},function(e){e.O(0,[196,738,366,303,215,814,774,888,179],function(){return e(e.s=1368)}),_N_E=e.O()}]);