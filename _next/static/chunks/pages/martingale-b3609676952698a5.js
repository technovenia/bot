(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{1368:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/martingale",function(){return l(1523)}])},3090:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var n=l(5893),a=l(3148),r=l(5430);function s(e){a.kL.register(a.uw,a.f$,a.od,a.jn,a.Dx,a.u,a.De);let t={responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:e.title},grid:{display:!0}}},l=Array.from({length:e.chartY.length},(e,t)=>t+1),s={labels:l,datasets:[{label:"Dataset 1",data:e.chartY,borderColor:e.color,backgroundColor:"rgba(255, 99, 132, 0.5)"}]};return(0,n.jsx)(r.x1,{data:s,height:50,options:t})}},7608:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var n=l(5893),a=l(5117);function r(e){return(0,n.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",backgroundColor:e.bgColor,padding:"10px"},children:[(0,n.jsx)(a.x,{fz:"xl",fw:700,tt:"uppercase",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:e.value}),e.label&&(0,n.jsx)(a.x,{fz:"xs",c:"#777",children:e.label})]})}},6729:function(e,t,l){"use strict";l.d(t,{Y:function(){return h}});var n=l(5893),a=l(6817),r=l(2623),s=l(1232),i=l(5117),o=l(5044),c=l(2470),d=l(2136);let u=(0,a.k)(e=>({root:{padding:"calc(".concat(e.spacing.xl," * 1.5)")},label:{fontFamily:"Greycliff CF, ".concat(e.fontFamily)}}));function h(e){let{classes:t}=u(),l=e.value>=0?c.Z:d.Z;return(0,n.jsx)(r.X,{withBorder:!0,p:"md",radius:"md",style:{height:"100%"},children:(0,n.jsxs)(s.Z,{position:"apart",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.x,{c:"dimmed",tt:"uppercase",fw:700,fz:"xs",className:t.label,children:e.title}),(0,n.jsxs)(i.x,{mt:10,fw:700,fz:"xl",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$ ",e.value.toFixed(2)]})]}),(0,n.jsx)(o.k,{color:"gray",variant:"light",sx:t=>({color:e.value>=0?t.colors.teal[6]:t.colors.red[6]}),size:38,radius:"md",children:(0,n.jsx)(l,{size:"1.8rem",stroke:1.5})})]})},e.title)}},1523:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return G}});var n=l(5893),a=l(9008),r=l.n(a),s=l(8664),i=l(83),o=l(5117),c=l(3193),d=l(7294);class u{getName(){return this.name}predictNextBet(){return"E"}constructor(){this.name="ALL_EVENS"}}class h{getName(){return this.name}predictNextBet(){return"O"}constructor(){this.name="ALL_ODDS"}}class x{getName(){return this.name}predictNextBet(e,t){return e>=t?this.optionB:this.optionA}constructor(e,t){this.name="DOWN_UP",this.optionA=e,this.optionB=t}}class g{getName(){return this.name}predictNextBet(e,t){return e>=t?this.optionB:this.optionA}constructor(e,t){this.name="DOWN_UP_SKIPPED",this.optionA=e,this.optionB=t}}var p=l(9758);class j{getName(){return this.name}predictNextBet(e,t,l,n,a){return 3==e||4==e?+l>n?this.optionA:this.optionB:5==e?Math.random()>.5?this.optionA:this.optionB:6==e?"E"==this.onTwoCharHistoryPredict(t+p.Oh(l),a)?this.optionA:this.optionB:this.optionA}constructor(e,t){this.name="MIXED",this.onTwoCharHistoryPredict=(e,t)=>{if(e.length<2)return"OE";let l=!1;t&&(e.slice(-4)=="O".repeat(4)||e.slice(-4)=="E".repeat(4))&&(l=!0);let n=e.slice(-2),a=e.split(n),r=0,s=0;for(let t=2;t<a.length;t++)n==e.slice(t-2,t)&&("O"==e[t]?r++:s++);return r>s?l?"E":"O":l?"O":"E"},this.optionA=e,this.optionB=t}}class b{getName(){return this.name}predictNextBet(e,t,l){return"E"==this.onTwoCharHistoryPredict(e+p.Oh(t),l)?this.optionA:this.optionB}constructor(e,t){this.name="TWO_CHAR_HISTORY",this.onTwoCharHistoryPredict=(e,t)=>{if(e.length<2)return"OE";let l=!1;t&&(e.slice(-4)=="O".repeat(4)||e.slice(-4)=="E".repeat(4))&&(l=!0);let n=e.slice(-2),a=e.split(n),r=0,s=0;for(let t=2;t<a.length;t++)n==e.slice(t-2,t)&&("O"==e[t]?r++:s++);return r>s?l?"E":"O":l?"O":"E"},this.optionA=e,this.optionB=t}}class v{getName(){return this.name}predictNextBet(e,t){return e>=t?this.optionA:this.optionB}constructor(e,t){this.name="UP_DOWN",this.optionA=e,this.optionB=t}}var f=l(7841),m=l(3775),S=l(2675),C=l(1238),D=l(50),E=l(3941),y=l(9469),N=l(7661),O=l(741),U=l(5078),A=l(3090),w=l(7608),P=l(2623),T=l(6787);function B(e){return(0,n.jsx)(P.X,{withBorder:!0,radius:"md",p:"xs",style:{height:"100%"},children:(0,n.jsx)("center",{children:(0,n.jsx)(T.T,{size:140,sections:[{value:100*e.value/e.max*(e.value>=0?1:-1),color:e.value>=0?"white":"yellow"}],label:(0,n.jsxs)(o.x,{color:e.value>=0?"white":"yellow",weight:700,align:"center",size:"xl",children:["$",e.value.toFixed(2)]})})})})}var I=l(6729),k=l(6817),_=l(1017);let R=(0,k.k)(e=>({card:{height:"100%"},title:{color:e.fn.rgba(e.white,.65)},stats:{color:e.white},progressBar:{backgroundColor:e.white},progressTrack:{backgroundColor:e.fn.rgba(e.white,.4)}}));function L(e){let{classes:t}=R();return(0,n.jsxs)(_.Z,{withBorder:!0,radius:"md",p:"xl",className:t.card,children:[(0,n.jsx)(o.x,{fz:"xs",tt:"uppercase",fw:700,className:t.title,children:e.label}),(0,n.jsxs)(o.x,{fz:"lg",fw:500,className:t.stats,variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$",e.value.toFixed(2)]}),(0,n.jsx)(E.E,{value:e.value>=0?100*e.value/e.max:-(100*e.value/e.max*1),mt:"md",size:"lg",radius:"xl",color:e.value>=0?"green":"yellow"})]})}function Z(e){var t;let l;let[a,r]=(0,d.useState)("RDBEAR"),[s,i]=(0,d.useState)(.4),[c,P]=(0,d.useState)(0),[T,k]=(0,d.useState)(6),[_,R]=(0,d.useState)(.4),[Z,G]=(0,d.useState)("MARTINGALE"),[M,F]=(0,d.useState)(50),[X,z]=(0,d.useState)(0),[H,Y]=(0,d.useState)("DOWN_UP"),[J,V]=(0,d.useState)(0),[W,K]=(0,d.useState)(1),[$,q]=(0,d.useState)(200),[Q,ee]=(0,d.useState)(!1),[et,el]=(0,d.useState)(!1),[en,ea]=(0,d.useState)(!1),[er,es]=(0,d.useState)(!1),[ei,eo]=(0,d.useState)(0),[ec,ed]=(0,d.useState)({}),[eu,eh]=(0,d.useState)(0),[ex,eg]=(0,d.useState)("Ready"),[ep,ej]=(0,d.useState)("#555"),[eb,ev]=(0,d.useState)("0.00"),[ef,em]=(0,d.useState)(!0),[eS,eC]=(0,d.useState)(!1),[eD,eE]=(0,d.useState)(!1),[ey,eN]=(0,d.useState)(!1),[eO,eU]=(0,d.useState)("E"),[eA,ew]=(0,d.useState)(0),[eP,eT]=(0,d.useState)(0),[eB,eI]=(0,d.useState)(0),[ek,e_]=(0,d.useState)(0),[eR,eL]=(0,d.useState)(0),[eZ,eG]=(0,d.useState)(0),[eM,eF]=(0,d.useState)(0),[eX,ez]=(0,d.useState)(0),[eH,eY]=(0,d.useState)("E"),[eJ,eV]=(0,d.useState)(0),[eW,eK]=(0,d.useState)(0),[e$,eq]=(0,d.useState)(0),[eQ,e0]=(0,d.useState)(!0),[e1,e2]=(0,d.useState)(0),[e5,e3]=(0,d.useState)(""),[e6,e4]=(0,d.useState)([]),[e7,e8]=(0,d.useState)([]),[e9,te]=(0,d.useState)([0]),[tt,tl]=(0,d.useState)(),[tn,ta]=(0,d.useState)(null),[tr,ts]=(0,d.useState)([]),ti=(0,d.useRef)(null),to=(0,d.useRef)(null),tc=new u,td=new h,tu=new x("E","O"),th=new v("E","O"),tx=new j("E","O"),tg=new b("E","O"),tp=new g("E","O"),tj=()=>T+c;(0,d.useEffect)(()=>{tn&&p.aK()&&tO(tn)},[tn]);let tb=e=>{eg(e),ej("red")},tv=e=>{eg(e),ej("green")},tf=e=>{eg(e),ej("#8E44AD")},tm=e=>{eg(e),ej("#555")},tS=(e,t,l,n,a,r)=>{if(H==tc.getName())return tc.predictNextBet();if(H==td.getName())return td.predictNextBet();if(H==tg.getName())return tg.predictNextBet(e,+t,r);if(H==tx.getName())return tx.predictNextBet(n,e,+t,l,r);if(H==th.getName())return th.predictNextBet(+t,l);if(H==tu.getName())return tu.predictNextBet(+t,l);if(H==tp.getName())return tu.predictNextBet(+t,a)},tC=(e,t)=>t?e.slice(-1*$).map(t=>t-e[e.length-$-1]):e.slice(-1*$),tD=()=>{eE(!0),eK(e5.length),eq(ek)},tE=()=>{eE(!1)},ty=()=>{e_(0),eL(0);let t=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");tl(t),eG(Date.now()),t.addEventListener("open",l=>{console.log("WebSocket is connected"),t.send(JSON.stringify({authorize:e.token})),t.send(JSON.stringify({ticks:a})),setTimeout(function(){t.send(JSON.stringify({transaction:1,subscribe:1})),t.send(JSON.stringify({ticks_history:a,adjust_start_time:1,count:5e3,end:"latest",start:1,style:"ticks"}))},1e3)}),t.addEventListener("message",e=>{ta(JSON.parse(e.data))}),t.addEventListener("close",e=>{console.log("WebSocket is disconnected"),tm("Disconnected")}),t.addEventListener("error",e=>{console.log("WebSocket encountered an error")})},tN=()=>{tt&&tt.close(),tm("Disconnected")},tO=e=>{if(console.log(e),e.error){tb(e.error.message),("RateLimit"===e.error.code||"OpenPositionLimit"===e.error.code)&&(eN(!0),console.log("trade",e.error.code));return}if("authorize"===e.msg_type)tv("Authorized"),ed(e.authorize),eh(e.authorize.balance);else if("tick"===e.msg_type)tU(e.tick.quote,e.tick.pip_size,e.tick.epoch);else if("proposal"===e.msg_type)console.log("Proposal: ",e.proposal),tP(e.proposal.id,e.echo_req.amount);else if("transaction"===e.msg_type&&e.transaction.amount)console.log("Transaction: ",e.transaction),tT(e.transaction);else if("history"===e.msg_type){eE(!1),console.log("history",e.history);let t=[],l=[];for(let n=0;n<e.history.times.length-1;n++)e.history.times[n]/2%(W+1)==0&&(t.push(e.history.prices[n]),l.push(e.history.times[n]));let n=p.n8(t,e.pip_size);console.log(n);let a=[0],r=[0];for(let s=2;s<t.length-1;s++){let i=tS(n,t[s-1],t[s-2],r[r.length-1],e.history.prices[e.history.times.indexOf(l[s])-1]||0,!0);i==p.Oh(t[s],e.pip_size)?(a.push(0),r.push(r[r.length-1]+1)):(a.push(a[a.length-1]+1),r.push(r[r.length-1]-1)),console.log("tradex",l[s]),console.log("tradex",p.Oh(t[s],e.pip_size),i,i==p.Oh(t[s],e.pip_size)?"won ":"loss","quote:",t[s],"prevQuote:",t[s-1],"prevQuote2",t[s-2])}a.push(0),e8(a),te(r),console.log("trade","LSS",a);let s=[];for(let e=0;e<t.length;e++){let t=n.slice(0,e);s.push(t.split("E").length-t.split("O").length)}e3(n),e4(s)}},tU=(e,t,l)=>{if(l/2%(W+1)!=0)return;console.log("timeR",l,e,eH,p.Oh(e,t),eH==p.Oh(e,t)),tm("Monitoring..."),console.log("Quote: ",e),console.log("trade quote:",e,"epoch:",l,"prevBet:",eH),console.log("tradex",l);let n=p.Oh(e,t);console.log("trade","XXXXXXXX",n,e);let a=e5+n;e3(a),e4([...e6,a.split("E").length-a.split("O").length]),eO===n?ew(eA+1):ew(1),eU(n),ev(e.toFixed(t)),tA(e,n),eF(e)},tA=(e,t)=>{if(M>0&&ek>=M){tN();return}if(ei>0&&eR>=e$+ei){console.log("tradex",eR,e$,ei),tE();return}let l=t==eH,n=l?0:e7[e7.length-1]+1,a=[...e7,n],r=[...e9,e9[e9.length-1]+(l?1:-1)];eT(n),e8(a),te(r),eD&&J>0&&e5.length-eW>J&&0==eP&&tE();let i=eB;if(eB>T&&0==n&&(i=0),eQ)e2(0);else if(ey)eN(!1);else{var o,d;l?(console.log("trade","WON Last Trade"),eD&&(null===(o=ti.current)||void 0===o||o.play()),eV(eJ+1),i=0,e2(e1+X),er&&tE()):(eV(0),i+=1,e2(e1-X),console.log("trade","LOST Last Trade"),i>T&&(tb("Martingale Limit Reached"),console.log("trade","MARTINGALE LIMIT EXCEEDED"),eD&&(null===(d=to.current)||void 0===d||d.play()),en&&eD&&eK(e5.length),eD&&eL(eR-parseInt(p.w0(s,_,T,Z))))),e0(!0)}n>T&&et&&!eD&&tD(),eI(i),console.log("tradex",t,eH,l?"won ":"loss","quote:",e,"prevQuote:",eM);let u=tS(e5,+e,eM,i,eX,!0)||"";if(eY(u),eD&&n>=c&&i<=T){let e=p.Xk.get(u)||"",t=0;tw(t=l?Q?s*(eJ+1):s:"MARTINGALE"==Z?p.Rm(s,_,i):p.zq(s,_,i),e),z(+t),e0(!1),console.log("TRADE AMOUNT:",t,"contract:",e,"balance:",eu,"sp:",ek.toFixed(2))}else console.log("trade","skipping..."+n)},tw=(e,t)=>{tt&&eD&&(tf("Opening trade.."),tt.send(JSON.stringify({proposal:1,amount:e,basis:"stake",contract_type:t,currency:"USD",duration:W+1,duration_unit:"t",symbol:a})))},tP=(e,t)=>{tt&&eD&&(tf("Opening trade..."),tt.send(JSON.stringify({buy:e,price:t})))},tT=e=>{e.amount>0?tI("Trade WIN"):tI("Trade LOSE");let t=e.balance-ec.balance;e_(t),t>eR&&eL(t),eh(e.balance)},tB=()=>{eS?(tN(),ev("0.00")):(tm("Connecting..."),ty()),eC(!eS)},tI=e=>{tr.unshift({time:new Date().toLocaleTimeString(),message:e}),ts(tr)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(D.r,{grow:!0,gutter:"sm",style:{height:"100%",width:"100%"},children:[(0,n.jsx)(D.r.Col,{span:8,children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"is_virtual"in ec&&!ec.is_virtual?"#c82":"black"},children:(0,n.jsx)("center",{children:(0,n.jsxs)(D.r,{grow:!0,gutter:"xs",style:{height:"100%",width:"100%"},children:[(0,n.jsx)(D.r.Col,{span:12,style:{backgroundColor:ep,padding:"10px"},children:(0,n.jsx)(w.Z,{label:"",value:ex,bgColor:ep})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Tick Count",bgColor:"#222",value:e5.length.toLocaleString("en-US")})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Quote",bgColor:"#222",value:eb})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Digit Type (Index)",bgColor:"#222",value:eO})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Index Repeat Count",bgColor:"#222",value:eA.toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Account Balance ($)",bgColor:"#222",value:eu.toLocaleString("en-US",{maximumFractionDigits:2})})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Session Profit ($)",bgColor:"#222",value:ek.toFixed(2)+" | "+e1.toFixed(2)})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Session Duration",bgColor:"#222",value:eZ?p.J_(Date.now()-eZ):"-"})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Prev Bet Amount ($)",bgColor:"#222",value:X.toFixed(2)})}),(0,n.jsx)(D.r.Col,{span:4,children:(0,n.jsx)(I.Y,{title:"Window Profit Approx",value:(t=tC(e7,!1),l=p.Et(t,tj()).length,(p.Et(t,c-1).length-l)*s-l*parseInt(p.w0(s,_,T,Z)))})}),(0,n.jsx)(D.r.Col,{span:1,children:(0,n.jsx)(B,{value:eR,max:M})}),(0,n.jsx)(D.r.Col,{span:4,children:(0,n.jsx)(L,{label:"Session Profit",value:ek,max:M})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Martingale Limit Exceeds",bgColor:"#222",value:p.Et(tC(e7,!1),tj()).filter(e=>e>tj()).length.toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Index Diff Count Mean",bgColor:"#222",value:e6.length>1?(tC(e6,!0).reduce((e,t)=>e+t)/e6.slice(-1*$).length).toFixed(1):"0"})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Martingale Count",bgColor:"#222",value:eB.toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Risk ($)",bgColor:"#222",value:p.w0(s,_,T,Z)})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Ticks After Exceed",bgColor:"#222",value:(e7.length-e7.reduce((e,t,l)=>t>tj()?l:e,-1)).toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Loss/Win Ratio",bgColor:"#222",value:p.Et(tC(e7,!1),tj()).length+"/"+tC(e7,!1).filter(e=>0==e).length})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Even Count - Odd Count",bgColor:"#222",value:(e5.slice($).split("E").length-e5.slice($).split("O").length).toString()})}),(0,n.jsx)(D.r.Col,{span:3,children:(0,n.jsx)(w.Z,{label:"Tick Count After Resume",bgColor:"#222",value:eD?(e5.length-eW).toString():"-"})}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsx)(E.E,{color:eQ&&0==e1?"cyan.9":0==eP&&ef?"green":"pink",label:eP+" | "+X,size:15,value:0==eP&&ef?100:eP/tj()*100})}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsxs)(f.z.Group,{children:[(0,n.jsx)(f.z,{color:eS?"red":"green",onClick:tB,fullWidth:!0,variant:"filled",children:eS?"Stop":"Start"}),(0,n.jsx)(f.z,{color:eD?"blue":"gray",onClick:()=>eD?tE():tD(),fullWidth:!0,variant:"filled",children:eD?"Trading On":"Trading Paused"})]})})]})})})})}),(0,n.jsx)(D.r.Col,{span:4,children:(0,n.jsxs)(D.r,{children:[(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(y.Ph,{label:"Currency Symbol",data:p.XD,value:a,onChange:r,placeholder:"Select a currency symbol"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Target Profit ($)",min:0,precision:2,value:M,onChange:e=>F(+e),step:1,max:1e3})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Trigger At",min:0,value:c,onChange:e=>P(+e),step:1,max:10})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Martingale Limit",min:0,value:T,onChange:e=>k(+e),step:1,max:10})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Starting amount ($)",precision:2,min:0,value:s,onChange:e=>i(+e),step:.01,max:100})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Martingale Profit ($)",precision:2,min:0,value:_,onChange:e=>R(+e),step:.01,max:100})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(y.Ph,{label:"Predictor",data:[tc,td,tu,th,tx,tg,tp].map(e=>e.getName()),value:H,onChange:e=>Y(e),placeholder:"Select a currency symbol"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(y.Ph,{label:"Bet Strategy",data:[{label:"Martingale",value:"MARTINGALE"},{label:"Martingale (Reducing)",value:"MARTINGALE_REDUCING"}],value:Z,onChange:e=>G(e),placeholder:"Select a strategy"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Tick Skip",min:0,value:W,onChange:e=>K(+e),step:1,max:10})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Pause After (ticks)",min:0,value:J,onChange:e=>V(+e),step:1,max:1e3})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(N.Y,{label:"Pause After (gain)",precision:2,min:0,value:ei,onChange:e=>eo(+e),step:.1,max:100})}),(0,n.jsx)(D.r.Col,{span:6}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(m.X,{checked:er,onChange:e=>es(e.currentTarget.checked),label:"Pause at next win"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(m.X,{checked:Q,onChange:e=>ee(e.currentTarget.checked),label:"Increase Bet on Wins"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(m.X,{checked:et,onChange:e=>el(e.currentTarget.checked),label:"Start Trading on Exceed"})}),(0,n.jsx)(D.r.Col,{span:6,children:(0,n.jsx)(m.X,{checked:en,onChange:e=>ea(e.currentTarget.checked),label:"Reset Pause Count on Exceed"})}),(0,n.jsxs)(D.r.Col,{span:12,children:[(0,n.jsx)(o.x,{children:"Index History Length"}),(0,n.jsx)(S.i,{label:$,defaultValue:100,step:100,min:100,max:5e3,marks:[{value:100,label:"100"},{value:200,label:"200"},{value:500,label:"500"},{value:1e3,label:"1000"},{value:2e3,label:"2000"},{value:5e3,label:"5000"}],styles:{markLabel:{display:"none"}},onChange:e=>{e%100==0&&q(e)}})]})]})}),(0,n.jsx)(D.r.Col,{span:12,children:(0,n.jsxs)(O.m,{defaultValue:"charts",children:[(0,n.jsxs)(O.m.List,{children:[(0,n.jsx)(O.m.Tab,{value:"charts",children:"Charts"}),(0,n.jsx)(O.m.Tab,{value:"stats",children:"Stats"}),(0,n.jsx)(O.m.Tab,{value:"info",children:"Basic Info"}),(0,n.jsx)(O.m.Tab,{value:"logs",children:"Logs"})]}),(0,n.jsx)(O.m.Panel,{value:"info",pt:"xs",children:(0,n.jsx)(U.i,{withColumnBorders:!0,children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Email"}),(0,n.jsx)("td",{children:ec.email})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Full name"}),(0,n.jsx)("td",{children:ec.fullname})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Currency"}),(0,n.jsx)("td",{children:ec.currency})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Is Real"}),(0,n.jsx)("td",{children:ec.is_virtual?"No":"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Starting balance"}),(0,n.jsx)("td",{children:ec.balance})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Current balance"}),(0,n.jsx)("td",{children:eu})]})]})})}),(0,n.jsxs)(O.m.Panel,{value:"logs",pt:"xs",children:[(0,n.jsx)(C.g,{placeholder:"Martingale Length History",disabled:!0,autosize:!0,minRows:4,maxRows:4,value:JSON.stringify(e7)}),(0,n.jsx)(C.g,{placeholder:"Index History",disabled:!0,autosize:!0,minRows:4,maxRows:4,value:JSON.stringify(e5)}),(0,n.jsxs)(U.i,{striped:!0,withColumnBorders:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Time"}),(0,n.jsx)("th",{children:"Message"})]})}),(0,n.jsx)("tbody",{children:tr.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.time}),(0,n.jsx)("td",{children:e.message})]},t))})]})]}),(0,n.jsxs)(O.m.Panel,{value:"charts",pt:"xs",children:[(0,n.jsx)(A.Z,{chartY:tC(e7,!1),color:"cyan",title:"Loss Streak Chart"}),(0,n.jsx)(A.Z,{chartY:tC(e9,!0),color:"pink",title:"Snake Sequence"}),(0,n.jsx)(A.Z,{chartY:[...e7,tj()].map((e,t)=>e===tj()+1?t:-1).filter(e=>-1!==e).map((e,t,l)=>t<l.length-1?l[t+1]-e:null).filter(e=>null!==e),color:"violet",title:"Exceeds Gap Chart"}),(0,n.jsx)(A.Z,{chartY:tC(e6,!0),color:"violet",title:"Odd/Even Diff Chart"})]}),(0,n.jsx)(O.m.Panel,{value:"stats",pt:"xs",children:(0,n.jsxs)(U.i,{striped:!0,withColumnBorders:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Martingale Length"}),(0,n.jsx)("td",{children:"Counts"}),(0,n.jsx)("td",{children:"Percentage"}),(0,n.jsx)("td",{children:"Percentage"})]})}),(0,n.jsx)("tbody",{children:Array.from({length:tj()+2},(e,t)=>t>=0&&(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:t}),(0,n.jsx)("td",{children:e7.filter(e=>e===t).length}),(0,n.jsx)("td",{children:(100*e7.filter(e=>e===t).length/e7.length).toFixed(1)}),(0,n.jsx)("td",{children:(0,n.jsx)(E.E,{color:t>6?"red":"green",label:"",size:15,value:100*e7.filter(e=>e===t).length/e7.length})})]},t))})]})})]})})]}),(0,n.jsx)("audio",{ref:ti,src:"media/win.m4a"}),(0,n.jsx)("audio",{ref:to,src:"media/lose.m4a"})]})}function G(){let[e,t]=(0,d.useState)("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Technovenia Trading Bot - Martingale Bot"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(s.V,{padding:"md",header:(0,n.jsx)(i.h,{height:60,p:"xs",children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(o.x,{ml:"10px",fw:700,children:"Technovenia Trading Bot - Advanced Martingale"}),(0,n.jsx)(c.W,{value:e,onChange:e=>t(e.currentTarget.value),placeholder:"API Key",style:{textAlign:"right",width:"200px"},withAsterisk:!0})]})}),styles:e=>({main:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}}),children:(0,n.jsx)(Z,{token:e})})]})}},9758:function(e,t,l){"use strict";l.d(t,{Et:function(){return g},J_:function(){return u},Oh:function(){return a},Rm:function(){return o},XD:function(){return n},Xk:function(){return p},aK:function(){return j},d2:function(){return h},eS:function(){return r},hP:function(){return x},n8:function(){return i},o:function(){return s},w0:function(){return d},zq:function(){return c}});let n=[{value:"WLDAUD",label:"AUD Index"},{value:"frxAUDCAD",label:"AUD/CAD"},{value:"frxAUDCHF",label:"AUD/CHF"},{value:"frxAUDJPY",label:"AUD/JPY"},{value:"frxAUDNZD",label:"AUD/NZD"},{value:"frxAUDUSD",label:"AUD/USD"},{value:"OTC_AS51",label:"Australian Index"},{value:"RDBEAR",label:"Bear Market Index"},{value:"BOOM500",label:"Boom 500 Index"},{value:"BOOM1000",label:"Boom 1000 Index"},{value:"RDBULL",label:"Bull Market Index"},{value:"CRASH500",label:"Crash 500 Index"},{value:"CRASH1000",label:"Crash 1000 Index"},{value:"OTC_AEX",label:"Dutch Index"},{value:"WLDEUR",label:"EUR Index"},{value:"frxEURAUD",label:"EUR/AUD"},{value:"frxEURCAD",label:"EUR/CAD"},{value:"frxEURCHF",label:"EUR/CHF"},{value:"frxEURGBP",label:"EUR/GBP"},{value:"frxEURJPY",label:"EUR/JPY"},{value:"frxEURNZD",label:"EUR/NZD"},{value:"frxEURUSD",label:"EUR/USD"},{value:"OTC_SX5E",label:"Euro 50 Index"},{value:"OTC_FCHI",label:"French Index"},{value:"WLDGBP",label:"GBP Index"},{value:"frxGBPAUD",label:"GBP/AUD"},{value:"frxGBPCAD",label:"GBP/CAD"},{value:"frxGBPCHF",label:"GBP/CHF"},{value:"frxGBPJPY",label:"GBP/JPY"},{value:"frxGBPNOK",label:"GBP/NOK"},{value:"frxGBPNZD",label:"GBP/NZD"},{value:"frxGBPUSD",label:"GBP/USD"},{value:"OTC_GDAXI",label:"German Index"},{value:"frxXAUUSD",label:"Gold/USD"},{value:"OTC_HSI",label:"Hong Kong Index"},{value:"OTC_N225",label:"Japanese Index"},{value:"frxNZDJPY",label:"NZD/JPY"},{value:"frxNZDUSD",label:"NZD/USD"},{value:"frxBROUSD",label:"Oil/USD"},{value:"frxXPDUSD",label:"Palladium/USD"},{value:"frxXPTUSD",label:"Platinum/USD"},{value:"frxXAGUSD",label:"Silver/USD"},{value:"stpRNG",label:"Step Index"},{value:"OTC_SSMI",label:"Swiss Index"},{value:"OTC_FTSE",label:"UK Index"},{value:"OTC_SPC",label:"US Index"},{value:"OTC_NDX",label:"US Tech Index"},{value:"WLDUSD",label:"USD Index"},{value:"frxUSDCAD",label:"USD/CAD"},{value:"frxUSDCHF",label:"USD/CHF"},{value:"frxUSDJPY",label:"USD/JPY"},{value:"frxUSDMXN",label:"USD/MXN"},{value:"frxUSDNOK",label:"USD/NOK"},{value:"frxUSDPLN",label:"USD/PLN"},{value:"frxUSDSEK",label:"USD/SEK"},{value:"1HZ10V",label:"Volatility 10 (1s) Index"},{value:"R_10",label:"Volatility 10 Index"},{value:"1HZ25V",label:"Volatility 25 (1s) Index"},{value:"R_25",label:"Volatility 25 Index"},{value:"1HZ50V",label:"Volatility 50 (1s) Index"},{value:"R_50",label:"Volatility 50 Index"},{value:"1HZ75V",label:"Volatility 75 (1s) Index"},{value:"R_75",label:"Volatility 75 Index"},{value:"1HZ100V",label:"Volatility 100 (1s) Index"},{value:"R_100",label:"Volatility 100 Index"},{value:"OTC_DJI",label:"Wall Street Index"}],a=(e,t)=>{let l=e.toFixed(t).slice(-1);return r(l)[0]},r=e=>e%2==0?"EVEN":"ODD",s=e=>e%2==0?"E":"O",i=(e,t)=>e.map(e=>a(e,t)).join(""),o=(e,t,l)=>{if(0==l)return e.toFixed(2);{let n=e+parseFloat(t);for(let e=1;e<l;e++)n*=2;return n.toFixed(2)}},c=(e,t,l)=>[.7,1.4,2.8,5.6,12,24,48,96,192][l],d=(e,t,l,n)=>{let a=0;for(let r=0;r<=l;r++)"MARTINGALE"==n?a+=+o(e,t,r):"MARTINGALE_REDUCING"==n&&(a+=+c(e,t,r));return a.toFixed(2)},u=e=>{let t=new Date(e),l=t.getUTCHours().toString().padStart(2,"0"),n=t.getUTCMinutes().toString().padStart(2,"0"),a=t.getUTCSeconds().toString().padStart(2,"0");return"".concat(l,":").concat(n,":").concat(a)},h=(e,t)=>t.filter(t=>t==e).length,x=e=>e.map(e=>"EVEN"==e?"ODD":"EVEN"),g=(e,t)=>e.filter((e,l,n)=>l<n.length-1&&e>t&&n[l+1]<=0),p=new Map([["E","DIGITEVEN"],["O","DIGITODD"]]),j=()=>window.location.hostname.includes("technovenia")}},function(e){e.O(0,[196,738,366,303,215,814,774,888,179],function(){return e(e.s=1368)}),_N_E=e.O()}]);