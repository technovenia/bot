(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{3668:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oddeven",function(){return l(3287)}])},1060:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var r=l(5893),n=l(5117);function a(e){return(0,r.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",backgroundColor:e.bgColor,padding:"10px"},children:[(0,r.jsx)(n.x,{fz:"xl",fw:700,tt:"uppercase",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:e.value}),e.label&&(0,r.jsx)(n.x,{fz:"xs",c:"#777",children:e.label})]})}},3505:function(e,t,l){"use strict";l.d(t,{$:function(){return d}});var r=l(5893),n=l(6817),a=l(1017),s=l(5117),i=l(3941);let o=(0,n.k)(e=>({card:{height:"100%"},title:{color:e.fn.rgba(e.white,.65)},stats:{color:e.white},progressBar:{backgroundColor:e.white},progressTrack:{backgroundColor:e.fn.rgba(e.white,.4)}}));function d(e){let{classes:t}=o();return(0,r.jsxs)(a.Z,{withBorder:!0,radius:"md",p:"xl",className:t.card,children:[(0,r.jsx)(s.x,{fz:"xs",tt:"uppercase",fw:700,className:t.title,children:e.label}),(0,r.jsxs)(s.x,{fz:"lg",fw:500,className:t.stats,variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$",e.value.toFixed(2)," / $",e.max.toFixed(2)]}),(0,r.jsx)(i.E,{value:100*e.value/e.max,mt:"md",size:"lg",radius:"xl",classNames:{root:t.progressTrack,bar:t.progressBar}})]})}},5878:function(e,t,l){"use strict";l.d(t,{Y:function(){return h}});var r=l(5893),n=l(6817),a=l(2623),s=l(1232),i=l(5117),o=l(5044),d=l(2470),c=l(2136);let u=(0,n.k)(e=>({root:{padding:"calc(".concat(e.spacing.xl," * 1.5)")},label:{fontFamily:"Greycliff CF, ".concat(e.fontFamily)}}));function h(e){let{classes:t}=u(),l=e.value>=0?d.Z:c.Z;return(0,r.jsx)(a.X,{withBorder:!0,p:"md",radius:"md",style:{height:"100%"},children:(0,r.jsxs)(s.Z,{position:"apart",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.x,{c:"dimmed",tt:"uppercase",fw:700,fz:"xs",className:t.label,children:e.title}),(0,r.jsxs)(i.x,{mt:10,fw:700,fz:"xl",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$ ",e.value.toFixed(2)]})]}),(0,r.jsx)(o.k,{color:"gray",variant:"light",sx:t=>({color:e.value>=0?t.colors.teal[6]:t.colors.red[6]}),size:38,radius:"md",children:(0,r.jsx)(l,{size:"1.8rem",stroke:1.5})})]})},e.title)}},5606:function(e,t,l){"use strict";var r=l(9758);t.Z=class{getPrediction(){return this.repeatChunk[this.getTickIndex()%this.repeatChunk.length]}addRecord(e){let t=this.getPrediction(),l=r.eS(e);"3x3"==this.name&&(console.log(this.getTickIndex(),"COMPARE"+this.name,t,l,t==l),console.log("COMPZ"+this.name,t==l)),this.history.push(t==l),!(this.history.length<2)&&(this.history[this.history.length-1]==this.history[this.history.length-2]?this.repeatCount++:(this.repeatCount>=this.clusterThreshold&&(this.clusterSize=this.repeatCount,this.clusterAt=this.history.length-1,this.clusterType=this.history[this.history.length-2],this.clusterCount+=1),this.repeatCount=1))}getTickIndex(){return this.history.length+1}isLastRecordWin(){return this.history[this.history.length-1]}getTicksAfterCluster(){return this.history.length-this.clusterAt}test(){for(let e=0;e<100;e++)console.log(this.repeatChunk[e%this.repeatChunk.length])}constructor(e,t){this.name=e,this.repeatChunk=t,this.history=[],this.clusterThreshold=1,this.clusterSize=0,this.clusterAt=0,this.clusterType=!1,this.clusterCount=0,this.repeatCount=1,this.winCount=0,this.loseCount=0}}},3287:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return E}});var r=l(5893),n=l(9008),a=l.n(n),s=l(7841),i=l(50),o=l(3941),d=l(9541),c=l(5554),u=l(741),h=l(5078),x=l(7294),g=l(9758),b=l(5606),C=l(1060),p=l(3505),v=l(5878);function f(e){let[t,l]=(0,x.useState)("RDBEAR"),[n,a]=(0,x.useState)(.4),[f,D]=(0,x.useState)(2),[j,m]=(0,x.useState)(6),[S,E]=(0,x.useState)(.4),[y,N]=(0,x.useState)("MARTINGALE_REDUCING"),[U,T]=(0,x.useState)(5),[A,I]=(0,x.useState)(0),[O,P]=(0,x.useState)({}),[R,w]=(0,x.useState)(0),[k,_]=(0,x.useState)("Ready"),[V,B]=(0,x.useState)("#555"),[Z,G]=(0,x.useState)("0.00"),[L,F]=(0,x.useState)(!1),[z,M]=(0,x.useState)(!0),[W,H]=(0,x.useState)(!1),[J,Y]=(0,x.useState)(!1),[X,K]=(0,x.useState)(0),[$,q]=(0,x.useState)(0),[Q,ee]=(0,x.useState)(0),[et,el]=(0,x.useState)("EVEN"),[er,en]=(0,x.useState)(0),[ea,es]=(0,x.useState)(0),[ei,eo]=(0,x.useState)(),[ed,ec]=(0,x.useState)(null),[eu,eh]=(0,x.useState)([]),ex=e=>{_(e),B("red")},eg=e=>{_(e),B("green")},eb=e=>{_(e),B("#8E44AD")},eC=e=>{_(e),B("#555")},[ep,ev]=(0,x.useState)([]),[ef,eD]=(0,x.useState)([new b.Z("Dynamic",["EVEN","ODD","ODD","EVEN"]),new b.Z("4x2",["ODD","ODD","ODD","ODD","EVEN","EVEN"]),new b.Z("5x1",["EVEN","EVEN","EVEN","EVEN","EVEN","ODD"]),new b.Z("6x1",["EVEN","EVEN","EVEN","EVEN","EVEN","EVEN","ODD"]),new b.Z("Cust 3",["ODD","ODD","ODD","ODD","ODD","EVEN","EVEN","ODD","EVEN"]),new b.Z("Cust 4",["EVEN"])]),ej=(0,x.useRef)(null),em=(0,x.useRef)(null);(0,x.useEffect)(()=>{ed&&g.aK()&&ey(ed)},[ed]);let eS=()=>{q(0);let l=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");eo(l),ee(Date.now()),l.addEventListener("open",r=>{console.log("WebSocket is connected"),l.send(JSON.stringify({authorize:e.token})),l.send(JSON.stringify({ticks:t})),setTimeout(function(){l.send(JSON.stringify({transaction:1,subscribe:1}))},1e3)}),l.addEventListener("message",e=>{ec(JSON.parse(e.data))}),l.addEventListener("close",e=>{console.log("WebSocket is disconnected")}),l.addEventListener("error",e=>{console.log("WebSocket encountered an error")})},eE=()=>{ei&&ei.close(),eC("Disconnected")},ey=e=>{if(console.log(e),e.error){ex(e.error.message);return}"authorize"===e.msg_type?(eg("Authorized"),P(e.authorize),w(e.authorize.balance)):"tick"===e.msg_type?eN(e.tick):"proposal"===e.msg_type?(console.log("Proposal: ",e.proposal),eA(e.proposal.id,e.echo_req.amount)):"transaction"===e.msg_type&&e.transaction.amount&&(console.log("Transaction: ",e.transaction),eI(e.transaction))},eN=e=>{eC("Monitoring..."),console.log("Tick: ",e);let t=e.quote.toFixed(e.pip_size);console.log(t);let l=t.slice(-1),r=g.eS(l);eh([...eu,r]),et===r?en(er+1):(en(1),console.log("changed type")),el(r),G(t),eU(t)},eU=e=>{let t=Number(e.slice(-1));if(!W&&U>0&&$>=U){K(0),eE();return}if(ef.forEach((e,l)=>{e.addRecord(t)}),!W){K(0);let e=10,t=-1;if(ef.forEach((l,r)=>{l.getTicksAfterCluster()<e&&(e=l.getTicksAfterCluster(),t=r)}),-1==t||eu.length<10){let e=eu.slice(-9);if(9==e.length&&g.d2("ODD",e)>=1&&g.d2("EVEN",e)>=6)ef[0].repeatChunk=g.hP(e),ef[0].clusterAt=0,ef[0].history=[],ef[0].repeatCount=2,es(0),eC("Dynamic predictor activated..."),console.log("trade","dynamic predictor",ef[0].repeatChunk);else{eC("Preparing Dynamic Predictor...");return}}else t!=ea&&(console.log("trade","COMPZSWITCH",ef[t].name,"distanceFromClusterOfPrev:",ef[ea].history.length-ef[ea].clusterAt),es(t))}let l=ef[ea];console.log("trade lastRecordOf"+ea,t,l.isLastRecordWin(),"repeat:",l.repeatCount,"profit:",$.toFixed(2));let r=!1;if(!J&&l.repeatCount>=f&&(Y(!0),H(!0),K(0),console.log("trade","Trading round started."),r=!0),console.log("PRED",l.repeatCount,et,l.getPrediction(),l.clusterAt,ea),J||r){if(W||r){var a,s;if(X>0){if(console.log("trade-last-status",l.isLastRecordWin()?"WIN":"LOSE"),l.isLastRecordWin()){H(!1),eg("Won after "+X+" trades!"),ef[ea].winCount+=1,null===(a=ej.current)||void 0===a||a.play(),console.log("Stop trading for this round, as we WON after",X,"trades."),console.log("trade","won",$);return}console.log("trade","loss","bal:",Number($.toFixed(2)),"TAC:",ef[ea].name,ef[ea].history.length-ef[ea].clusterAt)}if(X>j){Y(!1),H(!1),K(0),ex("Martingale limit reached."),ef[ea].loseCount+=1,null===(s=em.current)||void 0===s||s.play(),console.log("trade","MARTINGALE LIMIT REACHED.","distanceFromCluster:",ef[ea].getTicksAfterCluster());return}let e="ODD"==l.getPrediction()?"DIGITODD":"DIGITEVEN",t="MARTINGALE"==y?g.Rm(n,S,X):g.zq(n,S,X);eT(t,e),I(Number(t)),K(X+1),console.log("TRADE AMOUNT",t,"tradecount:",X,"balance:",R)}else l.repeatCount<f&&(Y(!1),H(!1),K(0),console.log("trade","Trading round stopped."))}},eT=(e,l)=>{K(X+1),ei&&z&&(eb("Opening trade.."),console.log("opening trade",l,e),ei.send(JSON.stringify({proposal:1,amount:e,basis:"stake",contract_type:l,currency:"USD",duration:1,duration_unit:"t",symbol:t})))},eA=(e,t)=>{ei&&z&&(eb("Opening trade..."),ei.send(JSON.stringify({buy:e,price:t})))},eI=e=>{e.amount>0?eP("Trade WIN"):eP("Trade LOSE"),console.log("zzz",e.balance,O.balance),q(e.balance-O.balance),w(e.balance)},eO=()=>{L?(eE(),G("0.00")):(eC("Connecting..."),eS()),F(!L)},eP=e=>{ep.unshift({time:new Date().toLocaleTimeString(),message:e}),ev(ep)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.r,{grow:!0,gutter:"sm",style:{height:"100%",width:"100%"},children:[(0,r.jsx)(i.r.Col,{span:9,children:(0,r.jsxs)("div",{style:{height:"100%",width:"100%",position:"relative"},children:[(0,r.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"black"},children:(0,r.jsx)("center",{children:(0,r.jsxs)(i.r,{grow:!0,gutter:"xs",style:{height:"100%",width:"100%"},children:[(0,r.jsx)(i.r.Col,{span:12,style:{backgroundColor:V,padding:"10px"},children:(0,r.jsx)(C.Z,{label:"",value:k,bgColor:V})}),(0,r.jsx)(i.r.Col,{span:3,children:(0,r.jsx)(C.Z,{label:"Tick Count",value:eu.length.toLocaleString("en-US"),bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:3,children:(0,r.jsx)(C.Z,{label:"Quote",value:Z,bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:3,children:(0,r.jsx)(C.Z,{label:"Digit Type (Index)",value:et,bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:3,children:(0,r.jsx)(C.Z,{label:"Index Repeat Count",value:er.toString(),bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:4,children:(0,r.jsx)(C.Z,{label:"Account Balance ($)",value:R.toLocaleString("en-US",{maximumFractionDigits:2}),bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:4,children:(0,r.jsx)(C.Z,{label:"Session Duration",value:Q?g.J_(Date.now()-Q):"-",bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:4,children:(0,r.jsx)(C.Z,{label:"Last Bet Amount ($)",value:A.toFixed(2),bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:3,children:(0,r.jsx)(C.Z,{label:"In Trading Round",value:J.toString(),bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:3,children:(0,r.jsx)(C.Z,{label:"Selected Predictor",value:ef[ea].name,bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:3,children:(0,r.jsx)(C.Z,{label:"Predictor's Repeat Count",value:ef[ea].repeatCount.toString(),bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:3,children:(0,r.jsx)(C.Z,{label:"Risk ($)",value:g.w0(n,S,j,y),bgColor:"#222"})}),(0,r.jsx)(i.r.Col,{span:6,children:(0,r.jsx)(v.Y,{title:"Session Profit",value:$})}),(0,r.jsx)(i.r.Col,{span:6,children:(0,r.jsx)(p.$,{label:"Target",value:$,max:U})}),(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsx)(o.E,{color:W?"pink":"green",label:"",size:15,value:X/(j+1)*100})})]})})}),(0,r.jsxs)(s.z.Group,{style:{width:"100%",position:"absolute",bottom:0},children:[(0,r.jsx)(s.z,{color:L?"red":"green",onClick:eO,fullWidth:!0,variant:"filled",children:L?"Stop":"Start"}),(0,r.jsx)(s.z,{color:z?"blue":"gray",onClick:()=>M(!z),fullWidth:!0,variant:"filled",children:z?"Trading On":"Trading Off"})]})]})}),(0,r.jsxs)(i.r.Col,{span:3,children:[(0,r.jsx)(d.Ph,{label:"Currency Symbol",data:g.XD,value:t,onChange:l,placeholder:"Select a currency symbol"}),(0,r.jsx)(c.Y,{label:"Starting amount ($)",precision:2,min:0,mt:"sm",value:n,onChange:e=>a(Number(e)),step:.01,max:100}),(0,r.jsx)(c.Y,{label:"Trigger Count",min:0,mt:"sm",value:f,onChange:e=>D(Number(e)),step:1,max:10}),(0,r.jsx)(c.Y,{label:"Martingale Limit",min:0,mt:"sm",value:j,onChange:e=>m(Number(e)),step:1,max:10}),(0,r.jsx)(c.Y,{label:"Martingale Profit ($)",precision:2,min:0,mt:"sm",value:S,onChange:e=>E(Number(e)),step:.01,max:100}),(0,r.jsx)(d.Ph,{label:"Bet Strategy",data:[{label:"Martingale",value:"MARTINGALE"},{label:"Martingale (Reducing)",value:"MARTINGALE_REDUCING"}],value:y,onChange:e=>N(e),placeholder:"Select a strategy",mt:"sm"}),(0,r.jsx)(c.Y,{label:"Target Profit ($)",min:0,precision:2,mt:"sm",value:U,onChange:e=>T(Number(e)),step:1,max:1e3})]}),(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsxs)(u.m,{defaultValue:"predictors",children:[(0,r.jsxs)(u.m.List,{children:[(0,r.jsx)(u.m.Tab,{value:"predictors",children:"Predictors"}),(0,r.jsx)(u.m.Tab,{value:"info",children:"Basic Info"}),(0,r.jsx)(u.m.Tab,{value:"logs",children:"Logs"})]}),(0,r.jsx)(u.m.Panel,{value:"info",pt:"xs",children:(0,r.jsx)(h.i,{withColumnBorders:!0,children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Email"}),(0,r.jsx)("td",{children:O.email})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Full name"}),(0,r.jsx)("td",{children:O.fullname})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Currency"}),(0,r.jsx)("td",{children:O.currency})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Is Real"}),(0,r.jsx)("td",{children:O.is_virtual?"No":"Yes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Starting balance"}),(0,r.jsx)("td",{children:O.balance})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Current balance"}),(0,r.jsx)("td",{children:R})]})]})})}),(0,r.jsx)(u.m.Panel,{value:"logs",pt:"xs",children:(0,r.jsxs)(h.i,{striped:!0,withColumnBorders:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Time"}),(0,r.jsx)("th",{children:"Message"})]})}),(0,r.jsx)("tbody",{children:ep.map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.time}),(0,r.jsx)("td",{children:e.message})]},t))})]})}),(0,r.jsx)(u.m.Panel,{value:"predictors",pt:"xs",children:(0,r.jsxs)(h.i,{striped:!0,withColumnBorders:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Predictors"}),(0,r.jsx)("td",{children:"Last Match"}),(0,r.jsx)("td",{children:"Repeat Count"}),(0,r.jsx)("td",{children:"Win Count"}),(0,r.jsx)("td",{children:"Loss Count"}),(0,r.jsx)("td",{children:"Cluster Count"}),(0,r.jsx)("td",{children:"Cluster At"}),(0,r.jsx)("td",{children:"Cluster Type"}),(0,r.jsx)("td",{children:"Cluster Size"}),(0,r.jsx)("td",{children:"Ticks After Cluster"})]})}),(0,r.jsx)("tbody",{children:ef.map((e,t)=>{var l;return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["Predictor ",e.name," ",t==ea&&"*"]}),(0,r.jsx)("td",{children:null===(l=e.history[e.history.length-1])||void 0===l?void 0:l.toString()}),(0,r.jsx)("td",{children:(0,r.jsx)(o.E,{color:e.repeatCount>=e.clusterThreshold?"red":t==ea?"green":e.history[e.history.length-1]?"blue":"violet",label:e.repeatCount,size:15,value:e.repeatCount/e.clusterThreshold*100})}),(0,r.jsx)("td",{children:e.winCount}),(0,r.jsx)("td",{children:e.loseCount}),(0,r.jsx)("td",{children:e.clusterCount}),(0,r.jsx)("td",{children:e.clusterAt}),(0,r.jsx)("td",{children:e.clusterType.toString()}),(0,r.jsx)("td",{children:e.clusterSize}),(0,r.jsx)("td",{children:e.getTicksAfterCluster()})]},t)})})]})})]})})]}),(0,r.jsx)("audio",{ref:ej,src:"media/win.m4a"}),(0,r.jsx)("audio",{ref:em,src:"media/lose.m4a"})]})}var D=l(8664),j=l(83),m=l(5117),S=l(3193);function E(){let[e,t]=(0,x.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Technovenia Trading Bot"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(D.V,{padding:"md",header:(0,r.jsx)(j.h,{height:60,p:"xs",children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)(m.x,{ml:"10px",fw:700,children:"Technovenia Trading Bot"}),(0,r.jsx)(S.W,{value:e,onChange:e=>t(e.currentTarget.value),placeholder:"API Key",style:{textAlign:"right",width:"200px"},withAsterisk:!0})]})}),styles:e=>({main:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}}),children:(0,r.jsx)(f,{token:e})})]})}},9758:function(e,t,l){"use strict";l.d(t,{J_:function(){return c},Rm:function(){return i},XD:function(){return r},aK:function(){return x},d2:function(){return u},eS:function(){return n},hP:function(){return h},k4:function(){return s},o:function(){return a},w0:function(){return d},zq:function(){return o}}),l(1163);let r=[{value:"WLDAUD",label:"AUD Index"},{value:"frxAUDCAD",label:"AUD/CAD"},{value:"frxAUDCHF",label:"AUD/CHF"},{value:"frxAUDJPY",label:"AUD/JPY"},{value:"frxAUDNZD",label:"AUD/NZD"},{value:"frxAUDUSD",label:"AUD/USD"},{value:"OTC_AS51",label:"Australian Index"},{value:"RDBEAR",label:"Bear Market Index"},{value:"BOOM500",label:"Boom 500 Index"},{value:"BOOM1000",label:"Boom 1000 Index"},{value:"RDBULL",label:"Bull Market Index"},{value:"CRASH500",label:"Crash 500 Index"},{value:"CRASH1000",label:"Crash 1000 Index"},{value:"OTC_AEX",label:"Dutch Index"},{value:"WLDEUR",label:"EUR Index"},{value:"frxEURAUD",label:"EUR/AUD"},{value:"frxEURCAD",label:"EUR/CAD"},{value:"frxEURCHF",label:"EUR/CHF"},{value:"frxEURGBP",label:"EUR/GBP"},{value:"frxEURJPY",label:"EUR/JPY"},{value:"frxEURNZD",label:"EUR/NZD"},{value:"frxEURUSD",label:"EUR/USD"},{value:"OTC_SX5E",label:"Euro 50 Index"},{value:"OTC_FCHI",label:"French Index"},{value:"WLDGBP",label:"GBP Index"},{value:"frxGBPAUD",label:"GBP/AUD"},{value:"frxGBPCAD",label:"GBP/CAD"},{value:"frxGBPCHF",label:"GBP/CHF"},{value:"frxGBPJPY",label:"GBP/JPY"},{value:"frxGBPNOK",label:"GBP/NOK"},{value:"frxGBPNZD",label:"GBP/NZD"},{value:"frxGBPUSD",label:"GBP/USD"},{value:"OTC_GDAXI",label:"German Index"},{value:"frxXAUUSD",label:"Gold/USD"},{value:"OTC_HSI",label:"Hong Kong Index"},{value:"OTC_N225",label:"Japanese Index"},{value:"frxNZDJPY",label:"NZD/JPY"},{value:"frxNZDUSD",label:"NZD/USD"},{value:"frxBROUSD",label:"Oil/USD"},{value:"frxXPDUSD",label:"Palladium/USD"},{value:"frxXPTUSD",label:"Platinum/USD"},{value:"frxXAGUSD",label:"Silver/USD"},{value:"stpRNG",label:"Step Index"},{value:"OTC_SSMI",label:"Swiss Index"},{value:"OTC_FTSE",label:"UK Index"},{value:"OTC_SPC",label:"US Index"},{value:"OTC_NDX",label:"US Tech Index"},{value:"WLDUSD",label:"USD Index"},{value:"frxUSDCAD",label:"USD/CAD"},{value:"frxUSDCHF",label:"USD/CHF"},{value:"frxUSDJPY",label:"USD/JPY"},{value:"frxUSDMXN",label:"USD/MXN"},{value:"frxUSDNOK",label:"USD/NOK"},{value:"frxUSDPLN",label:"USD/PLN"},{value:"frxUSDSEK",label:"USD/SEK"},{value:"1HZ10V",label:"Volatility 10 (1s) Index"},{value:"R_10",label:"Volatility 10 Index"},{value:"1HZ25V",label:"Volatility 25 (1s) Index"},{value:"R_25",label:"Volatility 25 Index"},{value:"1HZ50V",label:"Volatility 50 (1s) Index"},{value:"R_50",label:"Volatility 50 Index"},{value:"1HZ75V",label:"Volatility 75 (1s) Index"},{value:"R_75",label:"Volatility 75 Index"},{value:"1HZ100V",label:"Volatility 100 (1s) Index"},{value:"R_100",label:"Volatility 100 Index"},{value:"OTC_DJI",label:"Wall Street Index"}],n=e=>e%2==0?"EVEN":"ODD",a=e=>e%2==0?"E":"O",s=[{label:"Even",value:"EVEN"},{label:"Odd",value:"ODD"},{label:"Random",value:"RANDOM"}],i=(e,t,l)=>{if(0==l)return e.toFixed(2);{let r=e+parseFloat(t);for(let e=1;e<l;e++)r*=2;return r.toFixed(2)}},o=(e,t,l)=>[.7,1.4,2.8,5.6,12,24,48,96,192][l],d=(e,t,l,r)=>{let n=0;for(let a=0;a<=l;a++)"MARTINGALE"==r?n+=Number(i(e,t,a)):"MARTINGALE_REDUCING"==r&&(n+=Number(o(e,t,a)));return n.toFixed(2)},c=e=>{let t=new Date(e),l=t.getUTCHours().toString().padStart(2,"0"),r=t.getUTCMinutes().toString().padStart(2,"0"),n=t.getUTCSeconds().toString().padStart(2,"0");return"".concat(l,":").concat(r,":").concat(n)},u=(e,t)=>t.filter(t=>t==e).length,h=e=>e.map(e=>"EVEN"==e?"ODD":"EVEN"),x=()=>window.location.hostname.includes("localhost")}},function(e){e.O(0,[368,747,303,774,888,179],function(){return e(e.s=3668)}),_N_E=e.O()}]);