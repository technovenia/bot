(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{1368:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/martingale",function(){return t(3695)}])},3090:function(e,l,t){"use strict";t.d(l,{Z:function(){return s}});var a=t(5893),r=t(3148),n=t(5430);function s(e){r.kL.register(r.uw,r.f$,r.od,r.jn,r.Dx,r.u,r.De);let l=Array.from({length:Math.max(e.chartY1.length,e.chartY2.length)},(e,l)=>l+1),t={labels:l,datasets:[{label:"Dataset 1",data:e.chartY1,borderColor:e.color1,backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Dataset 2",data:e.chartY2,borderColor:e.color2,backgroundColor:"rgba(53, 162, 235, 0.5)"}]};return(0,a.jsx)(n.x1,{data:t,height:50,options:{responsive:!0,plugins:{legend:{display:!1},title:{display:!1,text:"Chart.js Line Chart"},grid:{display:!0}}}})}},7608:function(e,l,t){"use strict";t.d(l,{Z:function(){return n}});var a=t(5893),r=t(5117);function n(e){return(0,a.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",backgroundColor:e.bgColor,padding:"10px"},children:[(0,a.jsx)(r.x,{fz:"xl",fw:700,tt:"uppercase",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:e.value}),e.label&&(0,a.jsx)(r.x,{fz:"xs",c:"#777",children:e.label})]})}},2461:function(e,l,t){"use strict";t.d(l,{$:function(){return c}});var a=t(5893),r=t(6817),n=t(1017),s=t(5117),i=t(3941);let o=(0,r.k)(e=>({card:{height:"100%"},title:{color:e.fn.rgba(e.white,.65)},stats:{color:e.white},progressBar:{backgroundColor:e.white},progressTrack:{backgroundColor:e.fn.rgba(e.white,.4)}}));function c(e){let{classes:l}=o();return(0,a.jsxs)(n.Z,{withBorder:!0,radius:"md",p:"xl",className:l.card,children:[(0,a.jsx)(s.x,{fz:"xs",tt:"uppercase",fw:700,className:l.title,children:e.label}),(0,a.jsxs)(s.x,{fz:"lg",fw:500,className:l.stats,variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$",e.value.toFixed(2)," / $",e.max.toFixed(2)]}),(0,a.jsx)(i.E,{value:e.value>=0?100*e.value/e.max:-(100*e.value/e.max*1),mt:"md",size:"lg",radius:"xl",color:e.value>=0?"white":"yellow"})]})}},6729:function(e,l,t){"use strict";t.d(l,{Y:function(){return x}});var a=t(5893),r=t(6817),n=t(2623),s=t(1232),i=t(5117),o=t(5044),c=t(2470),d=t(2136);let u=(0,r.k)(e=>({root:{padding:"calc(".concat(e.spacing.xl," * 1.5)")},label:{fontFamily:"Greycliff CF, ".concat(e.fontFamily)}}));function x(e){let{classes:l}=u(),t=e.value>=0?c.Z:d.Z;return(0,a.jsx)(n.X,{withBorder:!0,p:"md",radius:"md",style:{height:"100%"},children:(0,a.jsxs)(s.Z,{position:"apart",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(i.x,{c:"dimmed",tt:"uppercase",fw:700,fz:"xs",className:l.label,children:e.title}),(0,a.jsxs)(i.x,{mt:10,fw:700,fz:"xl",variant:"gradient",gradient:{from:"indigo.3",to:"cyan.3",deg:45},children:["$ ",e.value.toFixed(2)]})]}),(0,a.jsx)(o.k,{color:"gray",variant:"light",sx:l=>({color:e.value>=0?l.colors.teal[6]:l.colors.red[6]}),size:38,radius:"md",children:(0,a.jsx)(t,{size:"1.8rem",stroke:1.5})})]})},e.title)}},3695:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return O}});var a=t(5893),r=t(9008),n=t.n(r),s=t(8664),i=t(83),o=t(5117),c=t(3193),d=t(7294),u=t(7841),x=t(3775),h=t(1238),g=t(50),b=t(3941),v=t(9469),j=t(5554),m=t(741),f=t(5078),p=t(9758);let D=(e,l)=>{if(e.length<2)return"OE";let t=!1;l&&(e.slice(-4)=="O".repeat(4)||e.slice(-4)=="E".repeat(4))&&(t=!0);let a=e.slice(-2),r=e.split(a),n=0,s=0;for(let l=2;l<r.length;l++)a==e.slice(l-2,l)&&("O"==e[l]?n++:s++);return n>s?t?"E":"O":t?"O":"E"};var S=t(3090),C=t(7608),E=t(2461),I=t(6729),y=t(2623),N=t(6787);function T(e){return(0,a.jsx)(y.X,{withBorder:!0,radius:"md",p:"xs",style:{height:"100%"},children:(0,a.jsx)("center",{children:(0,a.jsx)(N.T,{size:140,sections:[{value:100*e.value1/(e.value1+e.value2),color:e.color1},{value:100*e.value2/(e.value1+e.value2),color:e.color2}],label:(0,a.jsx)(o.x,{color:e.value1>=e.value2?e.color1:e.color2,weight:700,align:"center",size:"xl",children:(e.value1>=e.value2?"+":"-")+(e.value1-e.value2)*(e.value1>=e.value2?1:-1)})})})},e.label)}function U(e){let[l,t]=(0,d.useState)("RDBEAR"),[r,n]=(0,d.useState)(.4),[s,i]=(0,d.useState)(6),[o,c]=(0,d.useState)(.4),[y,N]=(0,d.useState)("MARTINGALE"),[U,O]=(0,d.useState)(50),[A,R]=(0,d.useState)(0),[w,P]=(0,d.useState)("MIXED"),[k,G]=(0,d.useState)(20),[_,B]=(0,d.useState)(0),[L,M]=(0,d.useState)(1),[V,Z]=(0,d.useState)(!1),[F,Y]=(0,d.useState)(!1),[z,H]=(0,d.useState)(200),[J,X]=(0,d.useState)({}),[W,$]=(0,d.useState)(0),[K,q]=(0,d.useState)("Ready"),[Q,ee]=(0,d.useState)("#555"),[el,et]=(0,d.useState)("0.00"),[ea,er]=(0,d.useState)(!0),[en,es]=(0,d.useState)(!1),[ei,eo]=(0,d.useState)(!1),[ec,ed]=(0,d.useState)(0),[eu,ex]=(0,d.useState)(0),[eh,eg]=(0,d.useState)(0),[eb,ev]=(0,d.useState)(!1),[ej,em]=(0,d.useState)("EVEN"),[ef,ep]=(0,d.useState)(0),[eD,eS]=(0,d.useState)(0),[eC,eE]=(0,d.useState)("EVEN"),[eI,ey]=(0,d.useState)(""),[eN,eT]=(0,d.useState)([]),[eU,eO]=(0,d.useState)([]),[eA,eR]=(0,d.useState)(0),[ew,eP]=(0,d.useState)(["0","1"]),[ek,eG]=(0,d.useState)(),[e_,eB]=(0,d.useState)(null),eL=e=>{q(e),ee("red")},eM=e=>{q(e),ee("green")},eV=e=>{q(e),ee("#8E44AD")},eZ=e=>{q(e),ee("#555")},[eF,eY]=(0,d.useState)([]),ez=(0,d.useRef)(null),eH=(0,d.useRef)(null);(0,d.useEffect)(()=>{e_&&p.aK()&&eW(e_)},[e_]);let eJ=()=>{ex(0);let t=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");eG(t),eg(Date.now()),t.addEventListener("open",a=>{console.log("WebSocket is connected"),t.send(JSON.stringify({authorize:e.token})),t.send(JSON.stringify({ticks:l})),setTimeout(function(){t.send(JSON.stringify({transaction:1,subscribe:1}))},1e3),z>0&&t.send(JSON.stringify({ticks_history:l,adjust_start_time:1,count:z,end:"latest",start:1,style:"ticks"}))}),t.addEventListener("message",e=>{eB(JSON.parse(e.data))}),t.addEventListener("close",e=>{console.log("WebSocket is disconnected")}),t.addEventListener("error",e=>{console.log("WebSocket encountered an error")})},eX=()=>{ek&&ek.close(),eZ("Disconnected")},eW=e=>{if(console.log(e),e.error){eL(e.error.message),("RateLimit"===e.error.code||"OpenPositionLimit"===e.error.code)&&(ev(!0),console.log("trade",e.error.code));return}if("authorize"===e.msg_type)eM("Authorized"),X(e.authorize),$(e.authorize.balance);else if("tick"===e.msg_type)e$(e.tick.quote.toFixed(e.tick.pip_size),e.tick.epoch);else if("proposal"===e.msg_type)console.log("Proposal: ",e.proposal),eQ(e.proposal.id,e.echo_req.amount);else if("transaction"===e.msg_type&&e.transaction.amount)console.log("Transaction: ",e.transaction),e0(e.transaction);else if("history"===e.msg_type){eo(!1),console.log("history",e.history);let l=e.history.prices,t=e.history.times,a="",r=[];for(let n=0;n<l.length;n++)t[n]/2%(L+1)==0&&(a+=p.eS(l[n].toFixed(e.pip_size).slice(-1))[0],r.push(a.split("E").length-a.split("O").length));ey(a),eT(r)}},e$=(e,l)=>{if(l/2%(L+1)!=0)return;eZ("Monitoring..."),console.log("Quote: ",e),console.log("trade quote:",e,"epoch:",l,"prevBet:",eC);let t=e.slice(-1),a=p.eS(t),r=eI+a[0];ey(r),eT([...eN,r.split("E").length-r.split("O").length]),ej===a?ep(ef+1):ep(1),em(a),et(e),eK(e),eS(parseFloat(e))},eK=e=>{let l=Number(e.slice(-1)),t=p.eS(l);if(U>0&&eu>=U){eX();return}let a=t==eC,n=r;if(ea&&eI.length>0){var i,c;if(eb)ev(!1);else if(a)console.log("trade","WON Last Trade"),ei&&(null===(i=ez.current)||void 0===i||i.play()),eO([...eU,ec]),eP([...ew,(ew.length+1).toString()]),ed(0),n=V?r*(eA+1):r,eR(eA+1);else{if(eR(0),console.log("trade","LOST Last Trade"),ec>=s){eL("Martingale Limit Reached"),console.log("trade","MARTINGALE LIMIT EXCEEDED"),ei&&(null===(c=eH.current)||void 0===c||c.play()),eO([...eU,ec+1]),ed(0),F&&!ei&&eo(!0);return}n="MARTINGALE"==y?p.Rm(r,o,ec+1):p.zq(r,o,ec+1),ed(ec+1)}}if(_>0&&eI.length%(k+_)>=k){er(!1),eZ("Interval: "+(k+_-eI.length%(k+_)));return}er(!0);let d="";if("EVEN"==w)d="DIGITEVEN";else if("ODD"==w)d="DIGITODD";else if("HYBRID"==w)d=!a&&ec>=2?Number(e)>eD?"DIGITEVEN":"DIGITODD":"DIGITEVEN";else if("LASTPATTERN"==w){if(!a&&ec>=2){let e=eI.split("O".repeat(2));if(e.length>0){let l="";for(let t=e.length-1;t>=0;t--){let a=e[t].slice(0,s-2+1);if(a.length>s-2&&void 0!==a&&null!==a.match(/OE/g)){l=a;break}}d=""!=l&&"O"==l[ec-2]?"DIGITODD":"DIGITEVEN",console.log("repeat_temp",l)}else d="DIGITEVEN"}else d="DIGITEVEN"}else"TWOCHARHISTORY"==w?d="E"==D(eI+t[0],!0)?"DIGITEVEN":"DIGITODD":"MIXED"==w&&(d=3==ec||4==ec?Number(e)>eD?"DIGITEVEN":"DIGITODD":5==ec?Math.random()>.5?"DIGITEVEN":"DIGITODD":6==ec?"E"==D(eI+t[0],!0)?"DIGITEVEN":"DIGITODD":"DIGITEVEN");eq(n,d),eE("DIGITEVEN"==d?"EVEN":"ODD"),R(Number(n)),console.log("TRADE AMOUNT:",n,"contract:",d,"balance:",W,"sp:",eu.toFixed(2))},eq=(e,t)=>{ek&&ei&&(eV("Opening trade.."),ek.send(JSON.stringify({proposal:1,amount:e,basis:"stake",contract_type:t,currency:"USD",duration:L+1,duration_unit:"t",symbol:l})))},eQ=(e,l)=>{ek&&ei&&(eV("Opening trade..."),ek.send(JSON.stringify({buy:e,price:l})))},e0=e=>{e.amount>0?e2("Trade WIN"):e2("Trade LOSE"),console.log("zzz",e.balance,J.balance),ex(e.balance-J.balance),$(e.balance)},e1=()=>{en?(eX(),et("0.00")):(eZ("Connecting..."),eJ()),es(!en)},e2=e=>{eF.unshift({time:new Date().toLocaleTimeString(),message:e}),eY(eF)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(g.r,{grow:!0,gutter:"sm",style:{height:"100%",width:"100%"},children:[(0,a.jsx)(g.r.Col,{span:8,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"is_virtual"in J&&!J.is_virtual?"#c82":"black"},children:(0,a.jsx)("center",{children:(0,a.jsxs)(g.r,{grow:!0,gutter:"xs",style:{height:"100%",width:"100%"},children:[(0,a.jsx)(g.r.Col,{span:12,style:{backgroundColor:Q,padding:"10px"},children:(0,a.jsx)(C.Z,{label:"",value:K,bgColor:Q})}),(0,a.jsx)(g.r.Col,{span:3,children:(0,a.jsx)(C.Z,{label:"Tick Count",value:eI.length.toLocaleString("en-US"),bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:3,children:(0,a.jsx)(C.Z,{label:"Quote",value:el,bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:3,children:(0,a.jsx)(C.Z,{label:"Digit Type (Index)",value:ej,bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:3,children:(0,a.jsx)(C.Z,{label:"Index Repeat Count",value:ef.toString(),bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:4,children:(0,a.jsx)(C.Z,{label:"Account Balance ($)",value:W.toLocaleString("en-US",{maximumFractionDigits:2}),bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:4,children:(0,a.jsx)(C.Z,{label:"Session Duration",value:eh?p.J_(Date.now()-eh):"-",bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:4,children:(0,a.jsx)(C.Z,{label:"Last Bet Amount ($)",value:A.toFixed(2),bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:3,children:(0,a.jsx)(C.Z,{label:"Margingale Count Mean",value:eU.length>1?((null==eU?void 0:eU.reduce((e,l)=>e+l))/eU.length).toFixed(1):"0",bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:3,children:(0,a.jsx)(C.Z,{label:"Index Diff Count Mean",value:eN.length>1?((null==eN?void 0:eN.reduce((e,l)=>e+l))/eN.length).toFixed(1):"0",bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:3,children:(0,a.jsx)(C.Z,{label:"Martingale Count",value:ec.toString(),bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:3,children:(0,a.jsx)(C.Z,{label:"Risk ($)",value:p.w0(r,o,s,y),bgColor:"#222"})}),(0,a.jsx)(g.r.Col,{span:4,children:(0,a.jsx)(I.Y,{title:"Session Profit",value:eu})}),(0,a.jsx)(g.r.Col,{span:1,children:(0,a.jsx)(T,{label:"",value1:eI.split("E").length,value2:eI.split("O").length,color1:"cyan",color2:"yellow"})}),(0,a.jsx)(g.r.Col,{span:4,children:(0,a.jsx)(E.$,{label:"Target",value:eu,max:U})}),(0,a.jsx)(g.r.Col,{span:12,children:(0,a.jsx)(b.E,{color:0==ec&&ea?"green":"pink",label:ec+" | "+A,size:15,value:0==ec&&ea?100:ec/s*100})}),(0,a.jsx)(g.r.Col,{span:12,children:(0,a.jsxs)(u.z.Group,{children:[(0,a.jsx)(u.z,{color:en?"red":"green",onClick:e1,fullWidth:!0,variant:"filled",children:en?"Stop":"Start"}),(0,a.jsx)(u.z,{color:ei?"blue":"gray",onClick:()=>eo(!ei),fullWidth:!0,variant:"filled",children:ei?"Trading On":"Trading Off"})]})})]})})})})}),(0,a.jsx)(g.r.Col,{span:4,children:(0,a.jsxs)(g.r,{children:[(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(v.Ph,{label:"Currency Symbol",data:p.XD,value:l,onChange:t,placeholder:"Select a currency symbol"})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(j.Y,{label:"Starting amount ($)",precision:2,min:0,value:r,onChange:e=>n(Number(e)),step:.01,max:100})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(j.Y,{label:"Martingale Limit",min:0,mt:"sm",value:s,onChange:e=>i(Number(e)),step:1,max:10})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(j.Y,{label:"Martingale Profit ($)",precision:2,min:0,mt:"sm",value:o,onChange:e=>c(Number(e)),step:.01,max:100})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(v.Ph,{label:"Bet Strategy",data:[{label:"Martingale",value:"MARTINGALE"},{label:"Martingale (Reducing)",value:"MARTINGALE_REDUCING"}],value:y,onChange:e=>N(e),placeholder:"Select a strategy",mt:"sm"})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(j.Y,{label:"Target Profit ($)",min:0,precision:2,mt:"sm",value:U,onChange:e=>O(Number(e)),step:1,max:1e3})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(v.Ph,{label:"Bet Option",data:p.k4,mt:"sm",value:w,onChange:e=>P(e),placeholder:"Select a currency symbol"})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(j.Y,{label:"Session Limit",min:0,mt:"sm",value:k,onChange:e=>G(Number(e)),step:1,max:1e3})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(j.Y,{label:"Interval Limit",min:0,mt:"sm",value:_,onChange:e=>B(Number(e)),step:1,max:1e3})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(j.Y,{label:"Tick Skip",min:0,mt:"sm",value:L,onChange:e=>M(Number(e)),step:1,max:10})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(j.Y,{label:"Load History Length",min:0,mt:"sm",value:z,onChange:e=>H(Number(e)),step:1,max:1e4})}),(0,a.jsx)(g.r.Col,{span:6}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(x.X,{checked:V,onChange:e=>Z(e.currentTarget.checked),label:"Increase Bet on Wins",mt:"sm"})}),(0,a.jsx)(g.r.Col,{span:6,children:(0,a.jsx)(x.X,{checked:F,onChange:e=>Y(e.currentTarget.checked),label:"Start Trading on Lost",mt:"sm"})})]})}),(0,a.jsx)(g.r.Col,{span:12,children:(0,a.jsxs)(m.m,{defaultValue:"stats",children:[(0,a.jsxs)(m.m.List,{children:[(0,a.jsx)(m.m.Tab,{value:"stats",children:"Stats"}),(0,a.jsx)(m.m.Tab,{value:"info",children:"Basic Info"}),(0,a.jsx)(m.m.Tab,{value:"logs",children:"Logs"})]}),(0,a.jsx)(m.m.Panel,{value:"info",pt:"xs",children:(0,a.jsx)(f.i,{withColumnBorders:!0,children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Email"}),(0,a.jsx)("td",{children:J.email})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Full name"}),(0,a.jsx)("td",{children:J.fullname})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Currency"}),(0,a.jsx)("td",{children:J.currency})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Is Real"}),(0,a.jsx)("td",{children:J.is_virtual?"No":"Yes"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Starting balance"}),(0,a.jsx)("td",{children:J.balance})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Current balance"}),(0,a.jsx)("td",{children:W})]})]})})}),(0,a.jsxs)(m.m.Panel,{value:"logs",pt:"xs",children:[(0,a.jsx)(h.g,{placeholder:"Martingale Length History",disabled:!0,autosize:!0,minRows:4,maxRows:4,value:JSON.stringify(eU)}),(0,a.jsx)(h.g,{placeholder:"Index History",disabled:!0,autosize:!0,minRows:4,maxRows:4,value:JSON.stringify(eI)}),(0,a.jsxs)(f.i,{striped:!0,withColumnBorders:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Time"}),(0,a.jsx)("th",{children:"Message"})]})}),(0,a.jsx)("tbody",{children:eF.map((e,l)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.time}),(0,a.jsx)("td",{children:e.message})]},l))})]})]}),(0,a.jsxs)(m.m.Panel,{value:"stats",pt:"xs",children:[(0,a.jsx)(S.Z,{chartY1:eU,chartY2:[],color1:"cyan",color2:""}),(0,a.jsx)(S.Z,{chartY1:eN,chartY2:[],color1:"violet",color2:""}),(0,a.jsxs)(f.i,{striped:!0,withColumnBorders:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Martingale Length"}),(0,a.jsx)("td",{children:"Counts"}),(0,a.jsx)("td",{children:"Percentage"}),(0,a.jsx)("td",{children:"Percentage"})]})}),(0,a.jsx)("tbody",{children:Array.from({length:s+2},(e,l)=>l>=0&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:l}),(0,a.jsx)("td",{children:eU.filter(e=>e===l).length}),(0,a.jsx)("td",{children:(100*eU.filter(e=>e===l).length/eU.length).toFixed(1)}),(0,a.jsx)("td",{children:(0,a.jsx)(b.E,{color:l>6?"red":"green",label:"",size:15,value:100*eU.filter(e=>e===l).length/eU.length})})]},l))})]})]})]})})]}),(0,a.jsx)("audio",{ref:ez,src:"media/win.m4a"}),(0,a.jsx)("audio",{ref:eH,src:"media/lose.m4a"})]})}function O(){let[e,l]=(0,d.useState)("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"Technovenia Trading Bot - Martingale Bot"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(s.V,{padding:"md",header:(0,a.jsx)(i.h,{height:60,p:"xs",children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(o.x,{ml:"10px",fw:700,children:"Technovenia Trading Bot - Advanced Martingale"}),(0,a.jsx)(c.W,{value:e,onChange:e=>l(e.currentTarget.value),placeholder:"API Key",style:{textAlign:"right",width:"200px"},withAsterisk:!0})]})}),styles:e=>({main:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}}),children:(0,a.jsx)(U,{token:e})})]})}},9758:function(e,l,t){"use strict";t.d(l,{J_:function(){return d},Rm:function(){return i},XD:function(){return a},aK:function(){return h},d2:function(){return u},eS:function(){return r},hP:function(){return x},k4:function(){return s},o:function(){return n},w0:function(){return c},zq:function(){return o}}),t(1163);let a=[{value:"WLDAUD",label:"AUD Index"},{value:"frxAUDCAD",label:"AUD/CAD"},{value:"frxAUDCHF",label:"AUD/CHF"},{value:"frxAUDJPY",label:"AUD/JPY"},{value:"frxAUDNZD",label:"AUD/NZD"},{value:"frxAUDUSD",label:"AUD/USD"},{value:"OTC_AS51",label:"Australian Index"},{value:"RDBEAR",label:"Bear Market Index"},{value:"BOOM500",label:"Boom 500 Index"},{value:"BOOM1000",label:"Boom 1000 Index"},{value:"RDBULL",label:"Bull Market Index"},{value:"CRASH500",label:"Crash 500 Index"},{value:"CRASH1000",label:"Crash 1000 Index"},{value:"OTC_AEX",label:"Dutch Index"},{value:"WLDEUR",label:"EUR Index"},{value:"frxEURAUD",label:"EUR/AUD"},{value:"frxEURCAD",label:"EUR/CAD"},{value:"frxEURCHF",label:"EUR/CHF"},{value:"frxEURGBP",label:"EUR/GBP"},{value:"frxEURJPY",label:"EUR/JPY"},{value:"frxEURNZD",label:"EUR/NZD"},{value:"frxEURUSD",label:"EUR/USD"},{value:"OTC_SX5E",label:"Euro 50 Index"},{value:"OTC_FCHI",label:"French Index"},{value:"WLDGBP",label:"GBP Index"},{value:"frxGBPAUD",label:"GBP/AUD"},{value:"frxGBPCAD",label:"GBP/CAD"},{value:"frxGBPCHF",label:"GBP/CHF"},{value:"frxGBPJPY",label:"GBP/JPY"},{value:"frxGBPNOK",label:"GBP/NOK"},{value:"frxGBPNZD",label:"GBP/NZD"},{value:"frxGBPUSD",label:"GBP/USD"},{value:"OTC_GDAXI",label:"German Index"},{value:"frxXAUUSD",label:"Gold/USD"},{value:"OTC_HSI",label:"Hong Kong Index"},{value:"OTC_N225",label:"Japanese Index"},{value:"frxNZDJPY",label:"NZD/JPY"},{value:"frxNZDUSD",label:"NZD/USD"},{value:"frxBROUSD",label:"Oil/USD"},{value:"frxXPDUSD",label:"Palladium/USD"},{value:"frxXPTUSD",label:"Platinum/USD"},{value:"frxXAGUSD",label:"Silver/USD"},{value:"stpRNG",label:"Step Index"},{value:"OTC_SSMI",label:"Swiss Index"},{value:"OTC_FTSE",label:"UK Index"},{value:"OTC_SPC",label:"US Index"},{value:"OTC_NDX",label:"US Tech Index"},{value:"WLDUSD",label:"USD Index"},{value:"frxUSDCAD",label:"USD/CAD"},{value:"frxUSDCHF",label:"USD/CHF"},{value:"frxUSDJPY",label:"USD/JPY"},{value:"frxUSDMXN",label:"USD/MXN"},{value:"frxUSDNOK",label:"USD/NOK"},{value:"frxUSDPLN",label:"USD/PLN"},{value:"frxUSDSEK",label:"USD/SEK"},{value:"1HZ10V",label:"Volatility 10 (1s) Index"},{value:"R_10",label:"Volatility 10 Index"},{value:"1HZ25V",label:"Volatility 25 (1s) Index"},{value:"R_25",label:"Volatility 25 Index"},{value:"1HZ50V",label:"Volatility 50 (1s) Index"},{value:"R_50",label:"Volatility 50 Index"},{value:"1HZ75V",label:"Volatility 75 (1s) Index"},{value:"R_75",label:"Volatility 75 Index"},{value:"1HZ100V",label:"Volatility 100 (1s) Index"},{value:"R_100",label:"Volatility 100 Index"},{value:"OTC_DJI",label:"Wall Street Index"}],r=e=>e%2==0?"EVEN":"ODD",n=e=>e%2==0?"E":"O",s=[{label:"Even",value:"EVEN"},{label:"Odd",value:"ODD"},{label:"Random",value:"RANDOM"},{label:"Hybrid",value:"HYBRID"},{label:"Last Pattern",value:"LASTPATTERN"},{label:"Two Char History",value:"TWOCHARHISTORY"},{label:"Mixed",value:"MIXED"}],i=(e,l,t)=>{if(0==t)return e.toFixed(2);{let a=e+parseFloat(l);for(let e=1;e<t;e++)a*=2;return a.toFixed(2)}},o=(e,l,t)=>[.7,1.4,2.8,5.6,12,24,48,96,192][t],c=(e,l,t,a)=>{let r=0;for(let n=0;n<=t;n++)"MARTINGALE"==a?r+=Number(i(e,l,n)):"MARTINGALE_REDUCING"==a&&(r+=Number(o(e,l,n)));return r.toFixed(2)},d=e=>{let l=new Date(e),t=l.getUTCHours().toString().padStart(2,"0"),a=l.getUTCMinutes().toString().padStart(2,"0"),r=l.getUTCSeconds().toString().padStart(2,"0");return"".concat(t,":").concat(a,":").concat(r)},u=(e,l)=>l.filter(l=>l==e).length,x=e=>e.map(e=>"EVEN"==e?"ODD":"EVEN"),h=()=>window.location.hostname.includes("technovenia")}},function(e){e.O(0,[196,368,433,303,215,971,774,888,179],function(){return e(e.s=1368)}),_N_E=e.O()}]);