(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{1653:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ppp",function(){return l(9080)}])},1060:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var n=l(5893),r=l(5117);function a(e){return(0,n.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",backgroundColor:e.bgColor,padding:"10px"},children:[(0,n.jsx)(r.x,{fz:"xl",fw:700,tt:"uppercase",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:e.value}),e.label&&(0,n.jsx)(r.x,{fz:"xs",c:"#777",children:e.label})]})}},5606:function(e,t,l){"use strict";var n=l(9758);t.Z=class{getPrediction(){return this.repeatChunk[this.getTickIndex()%this.repeatChunk.length]}addRecord(e){let t=this.getPrediction(),l=n.eS(e);"3x3"==this.name&&(console.log(this.getTickIndex(),"COMPARE"+this.name,t,l,t==l),console.log("COMPZ"+this.name,t==l)),this.history.push(t==l),!(this.history.length<2)&&(this.history[this.history.length-1]==this.history[this.history.length-2]?this.repeatCount++:(this.repeatCount>=this.clusterThreshold&&(this.clusterSize=this.repeatCount,this.clusterAt=this.history.length-1,this.clusterType=this.history[this.history.length-2],this.clusterCount+=1),this.repeatCount=1))}getTickIndex(){return this.history.length+1}isLastRecordWin(){return this.history[this.history.length-1]}getTicksAfterCluster(){return this.history.length-this.clusterAt}test(){for(let e=0;e<100;e++)console.log(this.repeatChunk[e%this.repeatChunk.length])}constructor(e,t){this.name=e,this.repeatChunk=t,this.history=[],this.clusterThreshold=1,this.clusterSize=0,this.clusterAt=0,this.clusterType=!1,this.clusterCount=0,this.repeatCount=1,this.winCount=0,this.loseCount=0}}},9080:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return S}});var n=l(5893),r=l(9008),a=l.n(r),s=l(8664),i=l(83),o=l(5117),u=l(3193),d=l(7294),c=l(7841),h=l(50),x=l(3941),D=l(9541),E=l(5554),g=l(741),b=l(5078),C=l(9758),v=l(5606),p=l(1060);function j(e){let[t,l]=(0,d.useState)("RDBEAR"),[r,a]=(0,d.useState)(.4),[s,i]=(0,d.useState)(3),[o,u]=(0,d.useState)(6),[j,S]=(0,d.useState)(.4),[f,N]=(0,d.useState)({}),[m,O]=(0,d.useState)(0),[y,V]=(0,d.useState)("Ready"),[U,T]=(0,d.useState)("#555"),[A,P]=(0,d.useState)("0.00"),[I,R]=(0,d.useState)(!1),[w,k]=(0,d.useState)(!0),[Z,_]=(0,d.useState)(!1),[B,G]=(0,d.useState)(!1),[L,H]=(0,d.useState)(0),[F,M]=(0,d.useState)(0),[W,z]=(0,d.useState)(0),[J,Y]=(0,d.useState)("EVEN"),[X,K]=(0,d.useState)(0),[$,q]=(0,d.useState)(0),[Q,ee]=(0,d.useState)(),[et,el]=(0,d.useState)(null),[en,er]=(0,d.useState)([]),ea=e=>{V(e),T("red")},es=e=>{V(e),T("green")},ei=e=>{V(e),T("#8E44AD")},eo=e=>{V(e),T("#555")},[eu,ed]=(0,d.useState)([]),[ec,eh]=(0,d.useState)([new v.Z("Dynamic",["EVEN","ODD","ODD","EVEN"]),new v.Z("4x4",["EVEN","EVEN","EVEN","EVEN","ODD","ODD","ODD","ODD"]),new v.Z("5x5",["EVEN","EVEN","EVEN","EVEN","EVEN","ODD","ODD","ODD","ODD","ODD"]),new v.Z("4x2",["EVEN","EVEN","EVEN","EVEN","ODD","ODD"]),new v.Z("5x1",["EVEN","EVEN","EVEN","EVEN","EVEN","ODD"]),new v.Z("6x1",["EVEN","EVEN","EVEN","EVEN","EVEN","EVEN","ODD"]),new v.Z("1x3x2x4",["EVEN","ODD","ODD","ODD","EVEN","EVEN","ODD","ODD","ODD","ODD"]),new v.Z("Cust 1",["ODD","EVEN","ODD","ODD","EVEN","ODD","ODD","EVEN","EVEN"]),new v.Z("Cust 2",["ODD","EVEN","EVEN","EVEN","ODD","EVEN","ODD","EVEN","EVEN"]),new v.Z("Cust 3",["EVEN","EVEN","EVEN","EVEN","EVEN","ODD","ODD","EVEN","ODD"]),new v.Z("Cust 4",["EVEN","EVEN","EVEN","EVEN","EVEN","ODD","ODD","EVEN","EVEN"]),new v.Z("Cust 5",["EVEN","EVEN","EVEN","EVEN","ODD","EVEN","ODD","EVEN","ODD"])]),ex=(0,d.useRef)(null),eD=(0,d.useRef)(null);(0,d.useEffect)(()=>{et&&eb(et)},[et]);let eE=()=>{let l=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");ee(l),z(Date.now()),l.addEventListener("open",n=>{console.log("WebSocket is connected"),l.send(JSON.stringify({authorize:e.token})),l.send(JSON.stringify({ticks:t})),setTimeout(function(){l.send(JSON.stringify({transaction:1,subscribe:1}))},1e3)}),l.addEventListener("message",e=>{el(JSON.parse(e.data))}),l.addEventListener("close",e=>{console.log("WebSocket is disconnected")}),l.addEventListener("error",e=>{console.log("WebSocket encountered an error")})},eg=()=>{Q&&Q.close(),eo("Disconnected")},eb=e=>{if(console.log(e),e.error){ea(e.error.message);return}"authorize"===e.msg_type?(es("Authorized"),N(e.authorize)):"tick"===e.msg_type?eC(e.tick):"proposal"===e.msg_type?(console.log("Proposal: ",e.proposal),ej(e.proposal.id,e.echo_req.amount)):"transaction"===e.msg_type&&e.transaction.amount&&(console.log("Transaction: ",e.transaction),eS(e.transaction))},eC=e=>{eo("Monitoring..."),console.log("Tick: ",e);let t=e.quote.toFixed(e.pip_size);console.log(t);let l=t.slice(-1),n=C.eS(l);er([...en,n]),J===n?K(X+1):(K(1),console.log("changed type")),Y(n),P(t),ev(t)},ev=e=>{let t=Number(e.slice(-1));if(ec.forEach((e,l)=>{e.addRecord(t)}),!Z){let e=15,t=-1;if(ec.forEach((l,n)=>{l.getTicksAfterCluster()<e&&(e=l.getTicksAfterCluster(),t=n)}),-1==t||en.length<10){let e=en.slice(-9);if(9==e.length&&C.d2("ODD",e)>=3&&C.d2("EVEN",e)>=3)ec[0].repeatChunk=C.hP(e),ec[0].clusterAt=0,ec[0].history=[],q(0),eo("Dynamic predictor activated..."),console.log("trade","dynamic predictor",ec[0].repeatChunk);else{eo("Waiting for a valid predictor...");return}}else t!=$&&(console.log("trade","COMPZSWITCH",ec[t].name,"distanceFromClusterOfPrev:",ec[$].history.length-ec[$].clusterAt),q(t))}let l=ec[$];console.log("trade lastRecordOf"+$,t,l.isLastRecordWin(),"repeat:",l.repeatCount);let n=!1;if(!B&&l.repeatCount>=s&&(G(!0),H(0),console.log("trade","Trading round started."),n=!0),console.log("PRED",l.repeatCount,J,l.getPrediction(),l.clusterAt,$),B||n){if(Z){var a,i;if(console.log("trade-last-win",l.isLastRecordWin()),L>0&&l.isLastRecordWin())es("Won after "+L+" trades!"),ec[$].winCount+=1,null===(a=ex.current)||void 0===a||a.play(),console.log("trade","won",F);else if(L>0&&!l.isLastRecordWin()){_(!1),H(0),null===(i=eD.current)||void 0===i||i.play(),console.log("trade","loss","bal:",Number(F.toFixed(2)),"TAC:",ec[$].name,ec[$].history.length-ec[$].clusterAt);return}}else if(l.repeatCount<s){G(!1),_(!1),H(0),console.log("trade","Trading round stopped.");return}let e="ODD"==l.getPrediction()?"DIGITODD":"DIGITEVEN",t=r*(L+1);console.log("TRADE AMOUNT",t,"tradecount:",L,"balance:",m),ep(t,e),_(!0),H(L+1)}},ep=(e,l)=>{H(L+1),Q&&w&&(ei("Opening trade.."),console.log("opening trade",l,e),Q.send(JSON.stringify({proposal:1,amount:e,basis:"stake",contract_type:l,currency:"USD",duration:1,duration_unit:"t",symbol:t})))},ej=(e,t)=>{Q&&w&&(ei("Opening trade..."),Q.send(JSON.stringify({buy:e,price:t})))},eS=e=>{e.amount>0?eN("Trade WIN"):eN("Trade LOSE"),console.log("zzz",e.balance,f.balance),M(e.balance-f.balance),O(e.balance)},ef=()=>{I?(eg(),P("0.00")):(eo("Connecting..."),eE()),R(!I)},eN=e=>{eu.unshift({time:new Date().toLocaleTimeString(),message:e}),ed(eu)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.r,{grow:!0,gutter:"sm",style:{height:"100%",width:"100%"},children:[(0,n.jsx)(h.r.Col,{span:9,children:(0,n.jsxs)("div",{style:{height:"100%",width:"100%",position:"relative"},children:[(0,n.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"black"},children:(0,n.jsx)("center",{children:(0,n.jsxs)(h.r,{grow:!0,gutter:"xs",style:{height:"100%",width:"100%"},children:[(0,n.jsx)(h.r.Col,{span:12,style:{backgroundColor:U,padding:"10px"},children:(0,n.jsx)(p.Z,{label:"",value:y,bgColor:U})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Quote",value:A,bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Digit Type (Index)",value:J,bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Index Repeat Count",value:X.toString(),bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:6,children:(0,n.jsx)(p.Z,{label:"Account Balance ($)",value:m.toLocaleString("en-US",{maximumFractionDigits:2}),bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:6,children:(0,n.jsx)(p.Z,{label:"Session Profit ($)",value:F.toFixed(2),bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"In Trading Round",value:B.toString(),bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Trade Count",value:L.toString(),bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Selected Predictor",value:ec[$].name,bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Predictor's Repeat Count",value:ec[$].repeatCount.toString(),bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Tick Count",value:en.length.toLocaleString("en-US"),bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Session Duration",value:W?C.J_(Date.now()-W):"-",bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:3,children:(0,n.jsx)(p.Z,{label:"Risk ($)",value:C.w0(r,j,o,"MARTINGALE"),bgColor:"#222"})}),(0,n.jsx)(h.r.Col,{span:12,children:(0,n.jsx)(x.E,{color:Z?"pink":"green",label:"",size:15,value:L/(o+1)*100})})]})})}),(0,n.jsxs)(c.z.Group,{style:{width:"100%",position:"absolute",bottom:0},children:[(0,n.jsx)(c.z,{color:I?"red":"green",onClick:ef,fullWidth:!0,variant:"filled",children:I?"Stop":"Start"}),(0,n.jsx)(c.z,{color:w?"blue":"gray",onClick:()=>k(!w),fullWidth:!0,variant:"filled",children:w?"Trading On":"Trading Off"})]})]})}),(0,n.jsxs)(h.r.Col,{span:3,children:[(0,n.jsx)(D.Ph,{label:"Currency Symbol",data:C.XD,value:t,onChange:l,placeholder:"Select a currency symbol"}),(0,n.jsx)(E.Y,{label:"Starting amount ($)",precision:2,min:0,mt:"sm",value:r,onChange:e=>a(Number(e)),step:.01,max:100}),(0,n.jsx)(E.Y,{label:"Trigger Count",min:0,mt:"sm",value:s,onChange:e=>i(Number(e)),step:1,max:10}),(0,n.jsx)(E.Y,{label:"Martingale Limit",min:0,mt:"sm",value:o,onChange:e=>u(Number(e)),step:1,max:10}),(0,n.jsx)(E.Y,{label:"Martingale Profit ($)",precision:2,min:0,mt:"sm",value:j,onChange:e=>S(Number(e)),step:.01,max:100})]}),(0,n.jsx)(h.r.Col,{span:12,children:(0,n.jsxs)(g.m,{defaultValue:"predictors",children:[(0,n.jsxs)(g.m.List,{children:[(0,n.jsx)(g.m.Tab,{value:"predictors",children:"Predictors"}),(0,n.jsx)(g.m.Tab,{value:"info",children:"Basic Info"}),(0,n.jsx)(g.m.Tab,{value:"logs",children:"Logs"})]}),(0,n.jsx)(g.m.Panel,{value:"info",pt:"xs",children:(0,n.jsx)(b.i,{withColumnBorders:!0,children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Email"}),(0,n.jsx)("td",{children:f.email})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Full name"}),(0,n.jsx)("td",{children:f.fullname})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Currency"}),(0,n.jsx)("td",{children:f.currency})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Is Real"}),(0,n.jsx)("td",{children:f.is_virtual?"No":"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Starting balance"}),(0,n.jsx)("td",{children:f.balance})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Current balance"}),(0,n.jsx)("td",{children:m})]})]})})}),(0,n.jsx)(g.m.Panel,{value:"logs",pt:"xs",children:(0,n.jsxs)(b.i,{striped:!0,withColumnBorders:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Time"}),(0,n.jsx)("th",{children:"Message"})]})}),(0,n.jsx)("tbody",{children:eu.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.time}),(0,n.jsx)("td",{children:e.message})]},t))})]})}),(0,n.jsx)(g.m.Panel,{value:"predictors",pt:"xs",children:(0,n.jsxs)(b.i,{striped:!0,withColumnBorders:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Predictors"}),(0,n.jsx)("td",{children:"Last Match"}),(0,n.jsx)("td",{children:"Repeat Count"}),(0,n.jsx)("td",{children:"Win Count"}),(0,n.jsx)("td",{children:"Loss Count"}),(0,n.jsx)("td",{children:"Cluster Count"}),(0,n.jsx)("td",{children:"Cluster At"}),(0,n.jsx)("td",{children:"Cluster Type"}),(0,n.jsx)("td",{children:"Cluster Size"}),(0,n.jsx)("td",{children:"Ticks After Cluster"})]})}),(0,n.jsx)("tbody",{children:ec.map((e,t)=>{var l;return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:["Predictor ",e.name," ",t==$&&"*"]}),(0,n.jsx)("td",{children:null===(l=e.history[e.history.length-1])||void 0===l?void 0:l.toString()}),(0,n.jsx)("td",{children:(0,n.jsx)(x.E,{color:e.repeatCount>=e.clusterThreshold?"red":t==$?"green":e.history[e.history.length-1]?"blue":"violet",label:e.repeatCount,size:15,value:e.repeatCount/e.clusterThreshold*100})}),(0,n.jsx)("td",{children:e.winCount}),(0,n.jsx)("td",{children:e.loseCount}),(0,n.jsx)("td",{children:e.clusterCount}),(0,n.jsx)("td",{children:e.clusterAt}),(0,n.jsx)("td",{children:e.clusterType.toString()}),(0,n.jsx)("td",{children:e.clusterSize}),(0,n.jsx)("td",{children:e.getTicksAfterCluster()})]},t)})})]})})]})})]}),(0,n.jsx)("audio",{ref:ex,src:"media/win.m4a"}),(0,n.jsx)("audio",{ref:eD,src:"media/lose.m4a"})]})}function S(){let[e,t]=(0,d.useState)("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Technovenia Trading Bot"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(s.V,{padding:"md",header:(0,n.jsx)(i.h,{height:60,p:"xs",children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(o.x,{ml:"10px",fw:700,children:"Technovenia Trading Bot"}),(0,n.jsx)(u.W,{value:e,onChange:e=>t(e.currentTarget.value),placeholder:"API Key",style:{textAlign:"right",width:"200px"},withAsterisk:!0})]})}),styles:e=>({main:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}}),children:C.aK()&&(0,n.jsx)(j,{token:e})})]})}},9758:function(e,t,l){"use strict";l.d(t,{J_:function(){return d},Rm:function(){return i},XD:function(){return n},aK:function(){return x},d2:function(){return c},eS:function(){return r},hP:function(){return h},k4:function(){return s},o:function(){return a},w0:function(){return u},zq:function(){return o}}),l(1163);let n=[{value:"WLDAUD",label:"AUD Index"},{value:"frxAUDCAD",label:"AUD/CAD"},{value:"frxAUDCHF",label:"AUD/CHF"},{value:"frxAUDJPY",label:"AUD/JPY"},{value:"frxAUDNZD",label:"AUD/NZD"},{value:"frxAUDUSD",label:"AUD/USD"},{value:"OTC_AS51",label:"Australian Index"},{value:"RDBEAR",label:"Bear Market Index"},{value:"BOOM500",label:"Boom 500 Index"},{value:"BOOM1000",label:"Boom 1000 Index"},{value:"RDBULL",label:"Bull Market Index"},{value:"CRASH500",label:"Crash 500 Index"},{value:"CRASH1000",label:"Crash 1000 Index"},{value:"OTC_AEX",label:"Dutch Index"},{value:"WLDEUR",label:"EUR Index"},{value:"frxEURAUD",label:"EUR/AUD"},{value:"frxEURCAD",label:"EUR/CAD"},{value:"frxEURCHF",label:"EUR/CHF"},{value:"frxEURGBP",label:"EUR/GBP"},{value:"frxEURJPY",label:"EUR/JPY"},{value:"frxEURNZD",label:"EUR/NZD"},{value:"frxEURUSD",label:"EUR/USD"},{value:"OTC_SX5E",label:"Euro 50 Index"},{value:"OTC_FCHI",label:"French Index"},{value:"WLDGBP",label:"GBP Index"},{value:"frxGBPAUD",label:"GBP/AUD"},{value:"frxGBPCAD",label:"GBP/CAD"},{value:"frxGBPCHF",label:"GBP/CHF"},{value:"frxGBPJPY",label:"GBP/JPY"},{value:"frxGBPNOK",label:"GBP/NOK"},{value:"frxGBPNZD",label:"GBP/NZD"},{value:"frxGBPUSD",label:"GBP/USD"},{value:"OTC_GDAXI",label:"German Index"},{value:"frxXAUUSD",label:"Gold/USD"},{value:"OTC_HSI",label:"Hong Kong Index"},{value:"OTC_N225",label:"Japanese Index"},{value:"frxNZDJPY",label:"NZD/JPY"},{value:"frxNZDUSD",label:"NZD/USD"},{value:"frxBROUSD",label:"Oil/USD"},{value:"frxXPDUSD",label:"Palladium/USD"},{value:"frxXPTUSD",label:"Platinum/USD"},{value:"frxXAGUSD",label:"Silver/USD"},{value:"stpRNG",label:"Step Index"},{value:"OTC_SSMI",label:"Swiss Index"},{value:"OTC_FTSE",label:"UK Index"},{value:"OTC_SPC",label:"US Index"},{value:"OTC_NDX",label:"US Tech Index"},{value:"WLDUSD",label:"USD Index"},{value:"frxUSDCAD",label:"USD/CAD"},{value:"frxUSDCHF",label:"USD/CHF"},{value:"frxUSDJPY",label:"USD/JPY"},{value:"frxUSDMXN",label:"USD/MXN"},{value:"frxUSDNOK",label:"USD/NOK"},{value:"frxUSDPLN",label:"USD/PLN"},{value:"frxUSDSEK",label:"USD/SEK"},{value:"1HZ10V",label:"Volatility 10 (1s) Index"},{value:"R_10",label:"Volatility 10 Index"},{value:"1HZ25V",label:"Volatility 25 (1s) Index"},{value:"R_25",label:"Volatility 25 Index"},{value:"1HZ50V",label:"Volatility 50 (1s) Index"},{value:"R_50",label:"Volatility 50 Index"},{value:"1HZ75V",label:"Volatility 75 (1s) Index"},{value:"R_75",label:"Volatility 75 Index"},{value:"1HZ100V",label:"Volatility 100 (1s) Index"},{value:"R_100",label:"Volatility 100 Index"},{value:"OTC_DJI",label:"Wall Street Index"}],r=e=>e%2==0?"EVEN":"ODD",a=e=>e%2==0?"E":"O",s=[{label:"Even",value:"EVEN"},{label:"Odd",value:"ODD"},{label:"Random",value:"RANDOM"},{label:"Hybrid",value:"HYBRID"},{label:"Last Pattern",value:"LASTPATTERN"},{label:"Two Char History",value:"TWOCHARHISTORY"},{label:"Mixed",value:"MIXED"}],i=(e,t,l)=>{if(0==l)return e.toFixed(2);{let n=e+parseFloat(t);for(let e=1;e<l;e++)n*=2;return n.toFixed(2)}},o=(e,t,l)=>[.7,1.4,2.8,5.6,12,24,48,96,192][l],u=(e,t,l,n)=>{let r=0;for(let a=0;a<=l;a++)"MARTINGALE"==n?r+=Number(i(e,t,a)):"MARTINGALE_REDUCING"==n&&(r+=Number(o(e,t,a)));return r.toFixed(2)},d=e=>{let t=new Date(e),l=t.getUTCHours().toString().padStart(2,"0"),n=t.getUTCMinutes().toString().padStart(2,"0"),r=t.getUTCSeconds().toString().padStart(2,"0");return"".concat(l,":").concat(n,":").concat(r)},c=(e,t)=>t.filter(t=>t==e).length,h=e=>e.map(e=>"EVEN"==e?"ODD":"EVEN"),x=()=>window.location.hostname.includes("technovenia.com")}},function(e){e.O(0,[368,747,774,888,179],function(){return e(e.s=1653)}),_N_E=e.O()}]);