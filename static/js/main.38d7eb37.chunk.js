(this.webpackJsonpoctane=this.webpackJsonpoctane||[]).push([[0],{382:function(e,t,c){},383:function(e,t,c){},384:function(e,t,c){},391:function(e,t,c){},461:function(e,t,c){},468:function(e,t,c){},469:function(e,t,c){},477:function(e,t,c){},478:function(e,t,c){},479:function(e,t,c){},480:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(57),n=c.n(r),l=(c(382),c(383),c(364)),i=c(123),o=c(99),d=c(185),j=c(490),p=c(486),m=c(363),u=c(250),b=c(488),x=c(138),h=c(491),O=c(492),v=c(366),y=(c(384),c(11)),_=function(e){e.value;return console.warn("OrderSummaryTable"),Object(y.jsxs)("div",{className:"summary-block",children:[Object(y.jsxs)("div",{className:"flex-block",children:[Object(y.jsx)("div",{children:" Estimated Reward"}),Object(y.jsxs)("div",{children:[" 0.5 OCTANE -22 ETH ",Object(y.jsx)(v.a,{})," "]})]}),Object(y.jsxs)("div",{className:"flex-block",children:[Object(y.jsx)("div",{children:" Order Fee"}),Object(y.jsxs)("div",{children:[" 0.002 ETH ",Object(y.jsx)(v.a,{})," "]})]}),Object(y.jsxs)("div",{className:"flex-block",children:[Object(y.jsx)("div",{children:" Fee Discount"}),Object(y.jsxs)("div",{className:"discount-value",children:[" 0 ETH ",Object(y.jsx)("span",{className:"ico-block",children:Object(y.jsx)(v.a,{})})," "]})]}),Object(y.jsxs)("div",{className:"flex-block",children:[Object(y.jsx)("div",{children:" Total Amount"}),Object(y.jsxs)("div",{children:[" $ 2500 ",Object(y.jsx)(v.a,{})]})]})]})},g=(c(386),c(387),c(388),c(389),c(390),c(391),d.a.Option),f=j.a.Panel,N=function(e){var t=p.a.useForm(),c=Object(i.a)(t,1)[0];return console.warn("create order"),Object(y.jsx)("div",{className:"order-form",children:Object(y.jsxs)(p.a,{name:"create-order-form",onFinish:function(t){if((t.expiry_term_custom||t.expiry_term)&&(t.slippage_percentage||t.slippage_percentage_custom)){var a=function(e){return Object(o.a)(Object(o.a)({},e),{},{expiry_term:e.expiry_term_custom||e.expiry_term,slippage_percentage:e.slippage_percentage_custom||e.slippage_percentage,date:Date.now()})}(t);m.a.open({message:"Your Order has been placed successfully",icon:Object(y.jsx)(h.a,{style:{color:"#70E6DB"}}),className:"notifier-block"}),e.handleOrderPlaced(a),c.resetFields()}},onFinishFailed:function(e){console.log("Failed:",e),m.a.open({message:"Your Order could not be placed",className:"notifier-block"})},form:c,children:[Object(y.jsx)("div",{className:"form-box",children:Object(y.jsx)(p.a.Item,{name:"curreny_type",label:"",initialValue:"EID/TGH",rules:[{required:!0,message:"Please select currency type!"}],children:Object(y.jsxs)(d.a,{placeholder:"Please select currency type!",children:[Object(y.jsx)(g,{value:"EID/TGH",children:"EID/TGH"}),Object(y.jsx)(g,{value:"ETH/DAI",children:"ETH/DAI"}),Object(y.jsx)(g,{value:"USD/FAG",children:"USD/FAG"}),Object(y.jsx)(g,{value:"RUP/SNS",children:"RUP/SNS"})]})})}),Object(y.jsxs)("div",{className:"form-box",children:[Object(y.jsx)(p.a.Item,{name:"buy_sell_cta",label:"",className:"margin-little buy-sell-radio",rules:[{required:!0,message:"Please select"}],children:Object(y.jsxs)(u.a.Group,{children:[Object(y.jsx)(u.a.Button,{value:"Buy",children:"BUY"}),Object(y.jsx)(u.a.Button,{value:"Sell",children:"SELL"})]})}),Object(y.jsxs)("div",{className:"order-form-label-wrapper",children:[Object(y.jsx)("div",{className:"label-order-form",children:"Amount "}),Object(y.jsx)("div",{className:"option-wrapper",children:Object(y.jsx)("div",{className:"options balance",children:" Bal : 0.012"})})]}),Object(y.jsxs)("div",{className:"relative-block",children:[Object(y.jsx)(p.a.Item,{label:"",name:"amount",rules:[{required:!0,message:"Please enter amount "},function(e){e.getFieldValue;return{validator:function(e,t){return t<=0?Promise.reject(new Error("Please select a positive value")):Promise.resolve()}}}],className:"margin-little",children:Object(y.jsx)(b.a,{})}),Object(y.jsxs)("div",{className:"order-form-amount-input-wrapper abs-element",children:[Object(y.jsx)("span",{className:"selected-amount-type max",children:" MAX"}),Object(y.jsx)("span",{className:"selected-amount-type eth",children:" ETH"})]})]}),Object(y.jsxs)("div",{className:"order-form-label-wrapper",children:[Object(y.jsx)("div",{className:"label-order-form",children:"At Price "}),Object(y.jsxs)("div",{className:"option-wrapper",children:[Object(y.jsx)("span",{className:"options option-block",children:" +10%"}),Object(y.jsxs)("span",{className:"options option-block",children:[" ",Object(y.jsx)(O.a,{})]})]})]}),Object(y.jsxs)("div",{className:"relative-block",children:[Object(y.jsx)(p.a.Item,{label:"",name:"price",rules:[{required:!0,message:"Please enter price"},function(e){e.getFieldValue;return{validator:function(e,t){return t<=0?Promise.reject(new Error("Please select a positive value")):Promise.resolve()}}}],className:"margin-little",children:Object(y.jsx)(b.a,{placeholder:"Enter Amount"})}),Object(y.jsx)("div",{className:"order-form-amount-input-wrapper abs-element",children:Object(y.jsx)("span",{className:"selected-amount-type dai",children:" DAI"})})]}),Object(y.jsx)(_,{})]}),Object(y.jsx)("div",{className:"form-box",children:Object(y.jsx)(j.a,{accordion:!0,expandIconPosition:"right",style:{border:"none"},defaultActiveKey:["1"],children:Object(y.jsx)(f,{header:"Advanced Options",children:Object(y.jsxs)("div",{className:"label-margin",children:[Object(y.jsx)("div",{className:"order-form-label-wrapper",children:Object(y.jsx)("div",{className:"form-field",children:" Max Slippage"})}),Object(y.jsx)(p.a.Item,{name:"slippage_percentage",label:"",className:"slippage-radio margin-little",rules:[{required:!1,message:"Please select slippage % or select custom"}],children:Object(y.jsxs)(u.a.Group,{children:[Object(y.jsx)(u.a.Button,{value:"0.5",children:"0.5%"}),Object(y.jsx)(u.a.Button,{value:"1",children:"1%"}),Object(y.jsx)(u.a.Button,{value:"2",children:"2%"})]})}),Object(y.jsx)(p.a.Item,{label:"",name:"slippage_percentage_custom",className:"margin-little",rules:[{required:!1,message:"Please enter slippage percent"},function(e){var t=e.getFieldValue;return{validator:function(e,c){return c||t("slippage_percentage")?c&&c<=0?Promise.reject(new Error("Please enter positive value")):Promise.resolve():Promise.reject(new Error("Please select slippage percent or edit custom"))}}}],children:Object(y.jsx)(b.a,{placeholder:"Custom percent"})}),Object(y.jsx)("div",{className:"order-form-label-wrapper",children:Object(y.jsx)("div",{className:"form-field",children:" Order Expiry"})}),Object(y.jsxs)("div",{className:"order-expiry-option",children:[Object(y.jsx)(p.a.Item,{name:"expiry_term",label:"",rules:[{required:!1,message:"Please select number of years"}],initialValue:"10",children:Object(y.jsxs)(d.a,{placeholder:"Please select number of years",children:[Object(y.jsx)(g,{value:"05",children:"05 Years"}),Object(y.jsx)(g,{value:"10",children:"10 Years"}),Object(y.jsx)(g,{value:"15",children:"15 Years"}),Object(y.jsx)(g,{value:"20",children:"20 Years"})]})}),Object(y.jsx)(p.a.Item,{label:"",name:"expiry_term_custom",rules:[{required:!1,message:"Please enter expiry term"},function(e){var t=e.getFieldValue;return{validator:function(e,c){return c||t("expiry_term")?c&&c<=0?Promise.reject(new Error("Please enter positive value")):Promise.resolve():Promise.reject(new Error("Please select expiry term  or edit custom"))}}}],children:Object(y.jsx)(b.a,{placeholder:"Custom Days"})})]})]})},"1")})}),Object(y.jsx)(p.a.Item,{className:"form-box submit-btn",children:Object(y.jsx)(x.a,{type:"primary",className:"light-theme-bg-cta",htmlType:"submit",children:"PLACE ORDER"})})]})})},E=c(487),k=c(158),P=c(485),I=c(367),w=c(493),T=(c(460),c(461),function(e){var t=e.data,c=[{title:"Currency Type",dataIndex:"curreny_type",key:"curreny_type",responsive:["lg","xxl","xl"]},{title:"Amount",dataIndex:"amount",key:"amount",responsive:["xs","xxl","lg","md","sm","xl"]},{title:"Price",dataIndex:"price",key:"price",responsive:["xs","xxl","lg","md","sm","xl"]},{title:Object(y.jsxs)("div",{children:["Expiry\xa0",Object(y.jsx)(k.a,{placement:"bottom",title:"",children:Object(y.jsx)(I.a,{})})]}),dataIndex:"expiry_term",key:"expiry_term",responsive:["lg","xl","xxl"]},{title:"Buy/Sell",dataIndex:"buy_sell_cta",key:"buy_sell_cta",render:function(e,t){return{children:Object(y.jsx)("div",{className:"".concat("Buy"===e?"active":"sell-color"),children:e})}},responsive:["xs","xxl","lg","md","sm","xl"]},{title:"Slippage Percent",dataIndex:"slippage_percentage",key:"slippage_percentage",render:function(e,t){return{children:Object(y.jsxs)("div",{className:"",children:[Object(y.jsxs)("span",{children:[e,"%"]})," ",Object(y.jsxs)("span",{className:"",style:{marginLeft:"4rem"},children:[" ",Object(y.jsx)(w.a,{})]})," "]})}},responsive:["lg","xl","xxl"]}];return Object(y.jsx)("div",{className:"order-history-table",children:Object(y.jsx)(P.a,{dataSource:t,columns:c,pagination:!1,className:"time-table-row-select"})})}),A=(c(467),E.a.TabPane),H=function(e){var t=e.orderHistoryState;return console.warn("OrdersHistory"),Object(y.jsx)("div",{className:"order-history-component",children:Object(y.jsxs)(E.a,{defaultActiveKey:"1",onChange:function(e){console.log("Tab changed")},children:[Object(y.jsx)(A,{tab:"Active Orders",children:Object(y.jsx)(T,{data:t.active_orders})},"1"),Object(y.jsx)(A,{tab:"Past Orders",children:Object(y.jsx)(T,{data:t.past_orders})},"2")]})})},D=c(489),B=c(267),S=c.n(B),F=(c(468),function(e){var t=e.chartFilter,c=e.handleFilterChange;return console.warn("chart filter"),Object(y.jsx)("div",{className:"chart-filter-wrapper",children:t&&t.length>0&&t.map((function(e,t){return Object(y.jsxs)("div",{className:"chart-filter ".concat(e.isActive?"active":"is-not-active"),onClick:function(){return c(e.key)},children:[" ",e.value," "]},t)}))})}),G=(c(469),{}),C=[{key:"1H",value:"1H",isActive:!1},{key:"24H",value:"24H",isActive:!0},{key:"1W",value:"1W",isActive:!1},{key:"1M",value:"1M",isActive:!1},{key:"1Y",value:"1Y",isActive:!1},{key:"ALL",value:"ALL",isActive:!1}],L=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("24H"),n=Object(i.a)(r,2),l=n[0],d=n[1],j=Object(a.useState)(C),p=Object(i.a)(j,2),m=p[0],u=p[1],b=function(){fetch("https://min-api.cryptocompare.com/data/v2/".concat("1H"===l?"histohour":"histoday","?fsym=BTC&tsym=USD&limit=100")).then((function(e){return e.json()})).then((function(e){var t=function(e,t){return"1H"===t?e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{time:S()(e.time).format("m:ss")})})):e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{time:S()(e.time).format("h:mm a")})}))}(e.Data.Data,l);s(t)})).catch((function(e){console.log("fetch data failed",e)}))};Object(a.useEffect)((function(){b()}),[l]);var x={data:c,xField:"time",yField:"close",height:200,areaStyle:{fill:"#145D4D",stroke:""},color:"#5AD7B7",yAxis:!1,tooltip:{customContent:function(){var e=arguments.length>1?arguments[1]:void 0;if(e&&e[0]&&e[0].data)return"<div class='chart-tooltip bottom-arrow'><div class='price'>$ ".concat(e[0].data.close,"</div><div class='time'>").concat(e[0].data.time," </div></div>")}}},h=function(e,t){var c=e.gEvent;!function(e){var t=e.x,c=e.y;Object.keys(G).forEach((function(e){G[e].chart.showTooltip({x:t,y:c})}))}({x:c.x,y:c.y})};return console.warn("picing chart"),Object(y.jsxs)("div",{className:"graph-wrapper",children:[Object(y.jsx)(F,{chartFilter:m,handleFilterChange:function(e){var t=m&&m.map((function(t){var c=Object.assign({},t);return c.key===e?c.isActive=!0:c.isActive=!1,c}));u(t),d(e)}}),Object(y.jsx)(D.a,Object(o.a)(Object(o.a)({},x),{},{onReady:function(e){G.area=e,e.on("mousemove",(function(e){h(e)}))}}))]})},Y=c.p+"static/media/dollar.84cf06a8.png",q=(c(477),function(){return console.warn("SummaryStrip"),Object(y.jsxs)("div",{className:"summary-strip",children:[Object(y.jsxs)("span",{className:"price-status",children:[Object(y.jsx)("span",{className:"current-price",children:" $ 208,388.56"}),Object(y.jsx)("sup",{className:"percent-change",children:" +7.53%"})]}),Object(y.jsxs)("span",{className:"scrollable-x-axis",children:[Object(y.jsxs)("span",{className:"todays-change block",children:[Object(y.jsx)("span",{className:"text",children:" 24H Change  "}),Object(y.jsx)("span",{className:"todays-percent-change main-text",children:"  +   4.2 %  "})]}),Object(y.jsxs)("span",{className:"volume-change block",children:[Object(y.jsxs)("span",{className:"text",children:[" Volume (24Hours) ",Object(y.jsx)(I.a,{})]}),Object(y.jsxs)("span",{className:"todays-percent-change main-text",children:[Object(y.jsx)("img",{height:"13px",width:"13px",src:Y,alt:"dollar icon",className:"dollar-icon"}),"3B "]})]}),Object(y.jsxs)("span",{className:"apy-change block",children:[Object(y.jsxs)("span",{className:"text",children:[" APY (est) ",Object(y.jsx)(I.a,{})," "]}),Object(y.jsx)("span",{className:"todays-percent-change main-text",children:" 2.5 % "})]})]})]})}),V=(c(478),{active_orders:[{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0}],past_orders:[{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0},{amount:132,buy_sell_cta:"Buy",curreny_type:"EID/TGH",expiry_term:12,expiry_term_custom:12,price:123,slippage_percentage:"0.5",slippage_percentage_custom:void 0}]}),R=function(){var e=Object(a.useState)(V),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(y.jsxs)("div",{className:"stock-view-overview flex-layout",children:[Object(y.jsxs)("div",{className:"",children:[Object(y.jsxs)("div",{className:"status-block",children:[Object(y.jsx)(q,{}),Object(y.jsx)(L,{})]}),Object(y.jsx)("div",{className:"status-block",children:Object(y.jsx)(H,{orderHistoryState:c})})]}),Object(y.jsx)(N,{handleOrderPlaced:function(e){var t=[e].concat(Object(l.a)(c.active_orders));s((function(e){return{active_orders:t,past_orders:e.past_orders}}))}})]})},U=c(494),M=c(495),W=c(496),$=c(162),J=(c(479),function(){return console.warn("navbar"),Object(y.jsxs)("nav",{className:"octane-nav",children:[Object(y.jsx)("span",{className:"logo",children:" octane "}),Object(y.jsxs)("span",{className:"navigation-links hide-for-mobile",children:[Object(y.jsxs)("span",{className:"selected nav-link",children:["   ",Object(y.jsx)(U.a,{})," Trade "]}),Object(y.jsxs)("span",{className:"nav-link",children:[" ",Object(y.jsx)(M.a,{})," Execute "]})]}),Object(y.jsxs)("span",{className:"other-options",children:[Object(y.jsxs)("span",{className:"dark-bg-cta btn wallet-btn hide-for-mobile",children:[" ",Object(y.jsx)(W.a,{})," COLLECT WALLET "]}),Object(y.jsxs)("span",{className:"dots settings",children:[" ",Object(y.jsx)($.a,{})," "]})]})]})});var K=function(){return Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(J,{}),Object(y.jsx)(R,{})]})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,497)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};n.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(K,{})}),document.getElementById("root")),X()}},[[480,1,2]]]);
//# sourceMappingURL=main.38d7eb37.chunk.js.map