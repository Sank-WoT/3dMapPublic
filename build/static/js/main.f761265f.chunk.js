(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(22),a(23),a(1)),o=a(2),s=a(4),d=a(3),m=a(5),u=a(6),h=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.valueDetailShow;return r.a.createElement("div",{className:"surroundings "+(1==e?"surroundings--hidden":"")},r.a.createElement("img",{className:"surroundings__map",src:"/img/surroundings.svg",alt:"Surroundings"}))}}]),t}(n.Component),p=Object(u.b)((function(e){return{valueDetailShow:e.valueDetailShow}}))(h),b="SAVE",v="DETAILSHOW",E="SHOWALLLEVEL",f="SETCOUNTLEVEL",y="UPLEVELMALL",C="DOWNLEVELMALL",S="SELECTCABINET",O="OPENSEARCH",x="CLOSESEARCH",g="SORTCABINETS",N="SEARCHCABINETS",L="CLOSEDETAIL",j="CLEARAREA";function w(){return{type:L}}var D=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showDetailLevel,a=(e.valueDetailShow,e.levelNumber),n=e.currentLevelNumber;return r.a.createElement("div",{id:"level-"+a,className:"level level--"+a+(n==a?" level--current":""),"aria-label":"Level "+a,onClick:function(){return t(a)}},this.props.children)}}]),t}(n.Component),k=Object(u.b)((function(e){return{valueDetailShow:e.valueDetailShow,currentLevelNumber:e.currentLevelNumber}}),(function(e){return{showDetailLevel:function(t){return e({type:v,level:t})}}}))(D),T=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("svg",{className:"map map--"+this.props.levelNumber,viewBox:this.props.viewBox,width:"100%",height:"100%"},this.props.children)}}]),t}(n.Component),A=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("g",{id:"layer1",transform:"translate(-79.523864,-102.2144)"},r.a.createElement("g",{transform:"matrix(0.22489585,0,0,0.22489585,79.492018,90.07174)",id:"layer1-1"},r.a.createElement("g",{id:"layer1-3",transform:"translate(-109.95249,49.363904)"},r.a.createElement("g",{transform:"translate(-28.000123,8.7962916)",id:"layer1-54"},r.a.createElement("g",{transform:"translate(198.05249,-2.1833275)",id:"layer1-5"},r.a.createElement("rect",{id:"F-115",width:"95.227585",height:"65.389877",x:"-37.019253",y:"-70.97023",transform:"scale(-1)"}),r.a.createElement("rect",{id:"F-114",width:"110.47755",height:"65.389877",x:"-150.19154",y:"-70.97023",transform:"scale(-1)"}),r.a.createElement("rect",{id:"F-103",width:"36.10955",height:"65.341438",x:"-188.90381",y:"-71.01368",transform:"scale(-1)"}),r.a.createElement("rect",{id:"F-104",width:"62.190784",height:"65.5411",x:"-292.93152",y:"-71.126755",transform:"scale(-1)"}),r.a.createElement("rect",{id:"F-120",width:"67.51973",height:"25.787516",x:"-38.37698",y:"-127.20393",transform:"scale(-1)"}),r.a.createElement("rect",{id:"F-121",width:"62.151337",height:"34.162552",x:"-32.826508",y:"-162.51109",transform:"scale(-1)"}),r.a.createElement("path",{d:"m 78.659611,101.03648 h 14.88483 v 61.51141 h -28.29955 l 0.0934,-34.85284 13.32112,0.20146 z",id:"F-116"}),r.a.createElement("rect",{id:"F-112",width:"101.36243",height:"61.427544",x:"-196.50502",y:"-162.82777",transform:"scale(-1)"}),r.a.createElement("path",{d:"m 40.442048,101.13865 h 12.96583 v 26.40757 h 10.24301 v 34.90045 h -29.17312 v -34.36965 h 6.09394 z",id:"F-117"}),r.a.createElement("rect",{id:"F-109",width:"28.790649",height:"62.741131",x:"-259.97876",y:"-164.14137",transform:"scale(-1)"}),r.a.createElement("rect",{id:"F-108",width:"30.861532",height:"62.7024",x:"-292.93326",y:"-164.10092",transform:"scale(-1)"}),r.a.createElement("text",{x:"-19.741018",y:"41.262646",id:"text969"},r.a.createElement("tspan",{id:"tspan967",x:"-19.741018",y:"41.262646"},"115")),r.a.createElement("text",{x:"88.057816",y:"39.89193",id:"text969-2"},r.a.createElement("tspan",{id:"tspan967-0",x:"88.057816",y:"39.89193"},"114")),r.a.createElement("text",{x:"-4.0203962",y:"118.16296",id:"text969-5"},r.a.createElement("tspan",{id:"tspan967-5",x:"-4.0203962",y:"118.16296"},"120")),r.a.createElement("text",{x:"-4.43329",y:"149.29878",id:"text969-5-9"},r.a.createElement("tspan",{id:"tspan967-5-7",x:"-4.43329",y:"149.29878"},"121")),r.a.createElement("text",{x:"43.016827",y:"145.76855",id:"text969-5-9-1-1"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7",x:"43.016827",y:"145.76855"},"WC")),r.a.createElement("text",{x:"136.65567",y:"132.41481",id:"text969-5-9-1-1-68-7"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-3",x:"136.65567",y:"132.41481"},"112")),r.a.createElement("text",{x:"271.27121",y:"134.23973",id:"text969-5-9-1-1-68-7-6-8-9-8-1-2-9-9"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-3-4-2-1-5-6-6-1-5",x:"271.27121",y:"134.23973"},"108")),r.a.createElement("text",{x:"240.09158",y:"134.5188",id:"text969-5-9-1-1-68-7-6-8-9-8-1-2-9-9-1"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-3-4-2-1-5-6-6-1-5-2",x:"240.09158",y:"134.5188"},"109")),r.a.createElement("path",{className:"solid",d:"m 194.83281,162.85892 -2e-5,9.30447 h 38.06477 v -7.9983",id:"path1014"}),r.a.createElement("path",{className:"solid",d:"m -58.24728,101.43913 0.03894,-30.468904",id:"path1016"}),r.a.createElement("path",{className:"solid",d:"m -27.60176,164.31708 -0.004,10.17056 h -30.58302 l -0.0585,-73.04851",id:"path1018"}),r.a.createElement("path",{className:"solid",d:"M 203.5229,5.6722318 H 187.61144",id:"path1055"}),r.a.createElement("path",{className:"solid",d:"M 230.74074,5.5856522 H 216.11816",id:"path1055-6"}),r.a.createElement("path",{className:"solid",d:"m 197.84467,-1.495912 5.19932,5.92572",id:"path1081"}),r.a.createElement("path",{className:"solid",d:"m 221.76763,-1.595938 -5.19932,5.92572",id:"path1081-4"}),r.a.createElement("text",{x:"73.152115",y:"144.78864",id:"text969-5-9-1-1-1"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-4",x:"73.152115",y:"144.78864"},"WC")),r.a.createElement("text",{x:"164.4135",y:"39.094757",id:"text969-2-2"},r.a.createElement("tspan",{id:"tspan967-0-0",x:"164.4135",y:"39.094757"},"103")),r.a.createElement("text",{x:"255.25505",y:"38.666843",id:"text969-2-2-4"},r.a.createElement("tspan",{id:"tspan967-0-0-4",x:"255.25505",y:"38.666843"},"104")),r.a.createElement("path",{className:"solid",d:"M -58.208338,70.970224 V 5.5803475 l 247.112128,0.09188",id:"path1215"}),r.a.createElement("path",{className:"solid",d:"m 232,5.5856405 h 62.19079 l 10e-4,158.5152695 -61.74512,0.0405",id:"path1217"}),r.a.createElement("path",{className:"solid",d:"M -28,163.30127 195,162",id:"path1219"}),r.a.createElement("path",{d:"m -50.215697,156.32658 v -2.24943 h 2.249423 v -2.46031 h 2.249423 v -2.46031 h 2.600894 v -2.74148 h 2.811788 v -2.74148 h 2.390012 v -2.6712 h 2.811776",id:"path1390"}),r.a.createElement("path",{d:"m 205.82841,150.85215 v -2.24943 h 2.24942 v -2.46031 h 2.24943 v -2.46031 h 2.60089 v -2.74148 h 2.81179 v -2.74148 h 2.39001 v -2.6712 h 2.81178",id:"path1390-9"}),r.a.createElement("rect",{id:"rect1412",width:"251.31213",height:"68.395073",x:"410.36069",y:"-66.360924"}))))))}}]),t}(n.Component),_=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("g",{id:"layer1",transform:"translate(154.3673,47.895867)"},r.a.createElement("rect",{id:"F-211",width:"83.167442",height:"58.98708",x:"-152.86807",y:"-46.698513"}),r.a.createElement("rect",{id:"F-210",width:"88.82975",height:"59.066563",x:"-68.420998",y:"-46.708611"}),r.a.createElement("rect",{id:"F-209",width:"27.946072",height:"59.066563",x:"21.544647",y:"-46.708611"}),r.a.createElement("rect",{id:"F-208",width:"29.126362",height:"59.122047",x:"50.513943",y:"-46.750706"}),r.a.createElement("rect",{id:"F-207",width:"37.860477",height:"59.209595",x:"80.693214",y:"-46.71331"}),r.a.createElement("rect",{id:"F-206",width:"37.151104",height:"59.097237",x:"119.52003",y:"-46.71331"}),r.a.createElement("rect",{id:"F-218",width:"27.524126",height:"56.656506",x:"-127.86771",y:"38.955902"}),r.a.createElement("path",{d:"m -82.989055,38.933711 h -15.494393 v 56.624852 h 27.978143 V 64.533296 h -12.823316 z",id:"F-217"}),r.a.createElement("path",{d:"m -54.025045,38.967668 -11.033812,-0.09687 v 25.662498 h -4.024942 v 31.079113 h 23.031035 V 64.630663 h -7.845735 z",id:"F-213"}),r.a.createElement("path",{d:"m -31.715819,38.539195 h 12.076881 v 57.073214 h -24.618439 v -30.86963 h 12.56566 z",id:"F-212"}),r.a.createElement("rect",{id:"F-203",width:"90.905602",height:"57.117016",x:"-18.017906",y:"38.537613"}),r.a.createElement("rect",{id:"F-204",width:"26.398458",height:"57.74297",x:"101.03291",y:"38.537609"}),r.a.createElement("rect",{id:"F-205",width:"27.662397",height:"57.74297",x:"129.09117",y:"38.537613"}),r.a.createElement("text",{x:"-117.64866",y:"-15.499601",id:"text969-5-9-1-1-68-3"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9",x:"-117.64866",y:"-15.499601"},"211")),r.a.createElement("text",{x:"-29.71699",y:"-16.56868",id:"text969-5-9-1-1-68-3-2"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-5",x:"-29.71699",y:"-16.56868"},"210")),r.a.createElement("text",{x:"29.889488",y:"-16.56868",id:"text969-5-9-1-1-68-3-2-9"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-5-0",x:"29.889488",y:"-16.56868"},"209")),r.a.createElement("text",{x:"59.308689",y:"-16.644194",id:"text969-5-9-1-1-68-3-2-9-6"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-5-0-1",x:"59.308689",y:"-16.644194"},"208")),r.a.createElement("text",{x:"93.099754",y:"-16.644192",id:"text969-5-9-1-1-68-3-2-9-6-8"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-5-0-1-5",x:"93.099754",y:"-16.644192"},"207")),r.a.createElement("text",{x:"132.0313",y:"-16.644194",id:"text969-5-9-1-1-68-3-2-9-6-8-1"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-5-0-1-5-8",x:"132.0313",y:"-16.644194"},"206")),r.a.createElement("text",{x:"-120.17052",y:"81.515648",id:"text969-5-9-1-1-68-3-1-5-6"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-7-4-1",x:"-120.17052",y:"81.515648"},"218")),r.a.createElement("text",{x:"-90.916336",y:"81.786507",id:"text969-5-9-1-1-68-3-1-5-6-7"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-7-4-1-1",x:"-90.916336",y:"81.786507"},"217")),r.a.createElement("text",{x:"-63.392948",y:"81.786507",id:"text969-5-9-1-1-68-3-1-5-6-7-9"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-7-4-1-1-8",x:"-63.392948",y:"81.786507"},"213")),r.a.createElement("text",{x:"-38.530445",y:"82.007591",id:"text969-5-9-1-1-68-3-1-5-6-7-9-7"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-7-4-1-1-8-0",x:"-38.530445",y:"82.007591"},"212")),r.a.createElement("text",{x:"18.658796",y:"68.957565",id:"text969-5-9-1-1-68-3-1-5-6-7-9-7-0"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-7-4-1-1-8-0-6",x:"18.658796",y:"68.957565"},"203")),r.a.createElement("text",{x:"108.97476",y:"68.400452",id:"text969-5-9-1-1-68-3-1-5-6-7-9-7-0-2-8"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-7-4-1-1-8-0-6-1-6",x:"108.97476",y:"68.400452"},"204")),r.a.createElement("text",{x:"137.68196",y:"68.755501",id:"text969-5-9-1-1-68-3-1-5-6-7-9-7-0-2-2"},r.a.createElement("tspan",{id:"tspan967-5-7-1-7-0-9-7-4-1-1-8-0-6-1-5",x:"137.68196",y:"68.755501"},"205")),r.a.createElement("path",{d:"m -152.86807,12.288565 -0.1931,26.261803",id:"path981"}),r.a.createElement("path",{className:"solid",d:"m 156.67113,12.383926 0.0824,26.153687",id:"path983"}),r.a.createElement("path",{className:"solid",d:"m 72.887685,94.596292 0.0021,9.109938 h 29.199445 l 0.002,-8.483984 h 54.6622 l -0.0824,-83.896654",id:"path985"}),r.a.createElement("path",{className:"solid",d:"M 156.67113,12.383926 V -46.71331 l -309.5392,0.0148 -0.31673,151.66998",id:"path987"}),r.a.createElement("path",{className:"solid",d:"m -153.1848,104.97147 h 26.37543 l -1e-5,-9.359063 199.697062,0.04222",id:"path989"}),r.a.createElement("path",{d:"M -146.57024,88.120931 V 86.17999 h 2.06385 v -2.122899 h 2.06379 V 81.93419 h 2.38629 v -2.365507 h 2.57979 v -2.365512 h 2.19283 v -2.304865 h 2.57975",id:"path1390-9"}),r.a.createElement("path",{d:"m 80.332001,85.858117 v -1.94094 h 2.06385 v -2.1229 h 2.06379 v -2.1229 h 2.38629 v -2.36551 h 2.57979 v -2.36551 h 2.19283 v -2.30486 h 2.579747",id:"path1390-9-6"}))}}]),t}(n.Component),F=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.valueDetailShow,a=e.currentLevelNumber,n=(e.countLevels,e.setCountLevel),c=e.selectArea;return r.a.createElement("div",{className:"levels "+(1==t?"levels--selected-"+a:""),onClick:function(){return n()}},r.a.createElement(k,{levelNumber:1},r.a.createElement(T,{levelNumber:"1",viewBox:"0 0 95 60"},r.a.createElement(A,{onClick:c}))),r.a.createElement(k,{levelNumber:2},r.a.createElement(T,{levelNumber:"2",viewBox:"0 0 375 250"},r.a.createElement(_,null))))}}]),t}(n.Component),P=Object(u.b)((function(e){return{valueDetailShow:e.valueDetailShow,currentLevelNumber:e.currentLevelNumber}}),(function(e){return{setCountLevel:function(){return e(function(){var e=document.getElementsByClassName("level").length;return console.log("function "+e),{type:f,countLevels:e}}())}}}))(F),V=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showAllLevels;e.valueDetailShow;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"boxbutton boxbutton--dark mallnav__button--all-levels","aria-label":"Back to all levels",onClick:t},r.a.createElement("svg",{className:"icon icon--stack"},r.a.createElement("use",{xlinkHref:"#icon-stack"}))))}}]),t}(n.Component),W=Object(u.b)((function(e){return{valueDetailShow:e.valueDetailShow}}),(function(e){return{showAllLevels:function(){return e({type:E})}}}))(V),H=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.upLevelMall,a=(e.valueDetailShow,e.currentLevelNumber),n=e.countLevels;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"boxbutton mallnav__button--up"+(a>=n?" boxbutton--disabled":""),"aria-label":"Go up",onClick:t},r.a.createElement("svg",{className:"icon icon--angle-down"},r.a.createElement("use",{xlinkHref:"#icon-angle-up"}))))}}]),t}(n.Component),J=Object(u.b)((function(e){return{currentLevelNumber:e.currentLevelNumber,countLevels:e.countLevels,valueDetailShow:e.valueDetailShow}}),(function(e){return{upLevelMall:function(){return e({type:y})}}}))(H),B=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.valueDetailShow,e.currentLevelNumber),a=e.downLevelMall;return console.log(this.props),r.a.createElement("button",{className:"boxbutton mallnav__button--down"+(t>1?"":" boxbutton--disabled"),"aria-label":"Go down",onClick:a},r.a.createElement("svg",{className:"icon icon--angle-down"},r.a.createElement("use",{xlinkHref:"#icon-angle-down"})))}}]),t}(n.Component),M=Object(u.b)((function(e){return{currentLevelNumber:e.currentLevelNumber,valueDetailShow:e.valueDetailShow}}),(function(e){return{downLevelMall:function(){return e({type:C})}}}))(B),I=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.valueDetailShow;e.showContent;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"mallnav"+(1==t?"":" mallnav--hidden")},r.a.createElement(J,null),r.a.createElement(W,null),r.a.createElement(M,null)))}}]),t}(n.Component),R=Object(u.b)((function(e){return{valueDetailShow:e.valueDetailShow,showContent:e.showContent}}))(I),z=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.cabinetData!==this.props.cabinetData||e.selectCabinet!==this.props.selectCabinet}},{key:"render",value:function(){var e=this.props,t=e.cabinetData,a=e.selectCabinet;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"list__item","data-level":t.dataLevel,"data-category":t.dataCategory,"data-space":t.dataSpace,onClick:function(){return a(t.dataSpace,t.dataLevel)}},r.a.createElement("a",{href:t.href,className:"list__link"},t.name)))}}]),t}(n.Component),U=Object(u.b)((function(e){return{selectCabinet:e.selectCabinet}}),(function(e){return{selectCabinet:function(t,a){return e(function(e,t){var a=document.getElementsByClassName("level").length,n="F-"+e;return document.getElementById(n).classList.add("selectedArea"),{type:S,selectCabinet:e,cabinetLevel:t,countLevels:a}}(t,a))}}}))(z),G=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cabinetData,a=e.inputSearch,n=t.filter((function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>-1}));n=JSON.parse(JSON.stringify(n));return r.a.createElement("ul",{className:"list grouped-by-category"},n.map((function(e,t){return r.a.createElement(U,{key:t,cabinetData:e})})))}}]),t}(n.Component),q=Object(u.b)((function(e){return{cabinetData:e.cabinetData,inputSearch:e.inputSearch}}))(G),Z=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.inputSearch,e.searchCabinets);return r.a.createElement("input",{className:"search__input",placeholder:"\u041f\u043e\u0438\u0441\u043a..",onChange:t})}}]),t}(n.Component),$=Object(u.b)((function(e){return{inputSearch:e.inputSearch}}),(function(e){return{searchCabinets:function(t){return e({type:N,input:t.target.value})}}}))(Z),K=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.openSearchValue,a=e.closeSearch,n=e.sortCabinets;return console.log("openSearchValue: "+t),r.a.createElement(r.a.Fragment,null,r.a.createElement("aside",{className:"spaces-list"+(1==t?" spaces-list--open":""),id:"spaces-list"},r.a.createElement("div",{className:"search"},r.a.createElement($,null),r.a.createElement("button",{className:"boxbutton boxbutton--darker close-search","aria-label":"Close details",onClick:a},r.a.createElement("svg",{className:"icon icon--cross"},r.a.createElement("use",{xlinkHref:"#icon-cross"})))),r.a.createElement("span",{className:"label",onClick:n},r.a.createElement("input",{id:"sort-by-name",className:"label__checkbox",type:"checkbox","aria-label":"Show alphabetically"}),r.a.createElement("label",{className:"label__text"},"A - Z")),r.a.createElement(q,null)))}}]),t}(n.Component),Q=Object(u.b)((function(e){return{openSearchValue:e.openSearchValue}}),(function(e){return{closeSearch:function(){return e({type:x})},sortCabinets:function(){return e({type:g})}}}))(K),X=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cabinetDescription;e.selectCabinet;return r.a.createElement("div",{className:"content__item content__item--current","data-space":t.dataSpace,"data-category":t.dataCategory},r.a.createElement("h3",{className:"content__item-title"},t.dataName),r.a.createElement("div",{className:"content__item-details"},r.a.createElement("p",{className:"content__meta"},r.a.createElement("span",{className:"content__meta-item"},r.a.createElement("strong",null,"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b:"),t.dataTime),r.a.createElement("span",{className:"content__meta-item"},r.a.createElement("strong",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"),t.dataPhone)),r.a.createElement("p",{className:"content__desc"},t.dataDescription)))}}]),t}(n.Component),Y=Object(u.b)((function(e){return{selectCabinet:e.selectCabinet}}))(X),ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cabinetDescription,a=e.showContent;return console.log("cabinetDescription: "+t),r.a.createElement("div",{className:"content"},t.map((function(e,t){return r.a.createElement(Y,{key:t,cabinetDescription:e})})),r.a.createElement("button",{className:"boxbutton boxbutton--dark content__button"+(1==a?"":" mallnav--hidden"),"aria-label":"Close details",onClick:w},r.a.createElement("svg",{className:"icon icon--cross"},r.a.createElement("use",{xlinkHref:"#icon-cross"}))))}}]),t}(n.Component),te=Object(u.b)((function(e){return{cabinetDescription:e.cabinetDescription,showContent:e.showContent}}),(function(e){return{closeDetail:function(){return e(w())}}}))(ee),ae=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.openSearch;e.openSearchValue;return r.a.createElement("button",{className:"boxbutton boxbutton--dark open-search","aria-label":"Show search",onClick:t},r.a.createElement("svg",{className:"icon icon--search"},r.a.createElement("use",{xlinkHref:"#icon-search"})))}}]),t}(n.Component),ne=Object(u.b)((function(e){return{openSearchValue:e.openSearchValue}}),(function(e){return{openSearch:function(){return e({type:O})}}}))(ae),re=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.valueDetailShow,a=e.clearArea;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"arrow-r"+(0==t?"":" mallnav--hidden"),src:"./img/arrow-r.png"}),r.a.createElement("img",{className:"arrow-l"+(0==t?"":" mallnav--hidden"),src:"./img/arrow-l.png"}),r.a.createElement("img",{className:"clear",src:"./img/clear.png",onClick:a}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"+(0==t?"":" mallnav--hidden")},this.props.name),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"mall"},r.a.createElement(p,null),r.a.createElement(P,null),r.a.createElement(te,null)),r.a.createElement(ne,null),r.a.createElement(R,null)),r.a.createElement(Q,null)))}}]),t}(n.Component),ce=Object(u.b)((function(e){return{valueDetailShow:e.valueDetailShow}}),(function(e){return{incrementAction:function(){return e({type:b})},clearArea:function(){return e((document.querySelectorAll(".selectedArea").forEach((function(e){return e.classList.remove("selectedArea")})),{type:j}))}}}))(re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=a(11),ie=a(7),oe={valueDetailShow:!1,showLevel:0,currentLevelNumber:0,countLevels:0,selectCabinet:0,openSearchValue:!1,sortCabinets:!1,inputSearch:"",showContent:!1,cabinetDefault:[{dataLevel:1,dataCategory:1,dataSpace:104,href:"#",name:"\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431"},{dataLevel:1,dataCategory:1,dataSpace:103,href:"#",name:"\u041f\u043e\u0441\u0442 \u043e\u0445\u0440\u0430\u043d\u044b"},{dataLevel:1,dataCategory:1,dataSpace:112,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.112"},{dataLevel:1,dataCategory:1,dataSpace:114,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.114"},{dataLevel:1,dataCategory:1,dataSpace:115,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.115"},{dataLevel:1,dataCategory:1,dataSpace:120,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.120"},{dataLevel:1,dataCategory:1,dataSpace:121,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.121"},{dataLevel:1,dataCategory:1,dataSpace:108,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.108"},{dataLevel:1,dataCategory:1,dataSpace:109,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.109"},{dataLevel:1,dataCategory:2,dataSpace:117,href:"#",name:"WC"},{dataLevel:1,dataCategory:2,dataSpace:116,href:"#",name:"WC"},{dataLevel:2,dataCategory:1,dataSpace:203,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.203"},{dataLevel:2,dataCategory:1,dataSpace:204,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.204"},{dataLevel:2,dataCategory:1,dataSpace:205,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.205"},{dataLevel:2,dataCategory:1,dataSpace:218,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.218"},{dataLevel:2,dataCategory:1,dataSpace:206,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.206"},{dataLevel:2,dataCategory:1,dataSpace:207,href:"#",name:"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446 \u0437\u0430\u043b (\u0410\u0443\u0434 207)"},{dataLevel:2,dataCategory:1,dataSpace:209,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.209"},{dataLevel:2,dataCategory:1,dataSpace:208,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.208"},{dataLevel:2,dataCategory:1,dataSpace:212,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.212"},{dataLevel:2,dataCategory:1,dataSpace:210,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.210"},{dataLevel:2,dataCategory:1,dataSpace:211,href:"#",name:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.211"},{dataLevel:2,dataCategory:2,dataSpace:213,href:"#",name:"WC"},{dataLevel:2,dataCategory:2,dataSpace:217,href:"#",name:"WC"}],cabinetDescription:[{dataCategory:1,dataSpace:104,dataName:"\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431 - \u043c\u0435\u0441\u0442\u043e \u0433\u0434\u0435 \u043c\u043e\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0432\u0435\u0449\u0438"},{dataCategory:1,dataSpace:103,dataName:"\u041f\u043e\u0441\u0442 \u043e\u0445\u0440\u0430\u043d\u044b",dataTime:" \u041a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u043e",dataPhone:" - ",dataDescription:"\u041f\u043e\u0441\u0442 \u043e\u0445\u0440\u0430\u043d\u044b \u043c\u0438\u043c\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0435 \u043f\u0440\u043e\u0439\u0442\u0438"},{dataCategory:1,dataSpace:112,dataName:"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440\u043d\u0430\u044f \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"-"},{dataCategory:1,dataSpace:114,dataName:"\u0423\u0447\u0435\u0431\u043d\u0430\u044f \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"-"},{dataCategory:1,dataSpace:115,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.115",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:" - "},{dataCategory:1,dataSpace:108,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.108",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.108"},{dataCategory:1,dataSpace:109,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.109",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.109"},{dataCategory:1,dataSpace:120,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.120",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.120"},{dataCategory:1,dataSpace:121,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.121",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 1.121"},{dataCategory:2,dataSpace:116,dataName:"WC",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"WC"},{dataCategory:2,dataSpace:1.117,dataName:"WC",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"WC"},{dataCategory:1,dataSpace:203,dataName:"\u0423\u0447\u0435\u0431\u043d\u0430\u044f \u0430\u0434\u0443\u0442\u043e\u0440\u0438\u044f 2.203",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0423\u0447\u0435\u0431\u043d\u0430\u044f \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.203"},{dataCategory:1,dataSpace:205,dataName:"\u0423\u0447\u0435\u0431\u043d\u0430\u044f \u0430\u0434\u0443\u0442\u043e\u0440\u0438\u044f 2.205",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0423\u0447\u0435\u0431\u043d\u0430\u044f \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.205"},{dataCategory:2,dataSpace:213,dataName:"WC",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"WC"},{dataCategory:2,dataSpace:217,dataName:"WC",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"WC"},{dataCategory:1,dataSpace:206,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.206",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.206"},{dataCategory:1,dataSpace:218,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.218",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.218"},{dataCategory:1,dataSpace:208,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.208",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.208"},{dataCategory:1,dataSpace:209,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.209",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.209"},{dataCategory:1,dataSpace:207,dataName:"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446 \u0437\u0430\u043b (\u0410\u0443\u0434 207)",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446 \u0437\u0430\u043b  (\u0410\u0443\u0434 207)"},{dataCategory:1,dataSpace:210,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.210",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.210"},{dataCategory:1,dataSpace:211,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.211",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.211"},{dataCategory:1,dataSpace:212,dataName:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.212",dataTime:" 9:00 &mdash; 17:45",dataPhone:" - ",dataDescription:"\u0410\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044f 2.212"}]},se={valueDetailShow:oe.valueDetailShow,showLevel:oe.valueDetailShow,currentLevelNumber:oe.valueDetailShow,countLevels:oe.valueDetailShow,selectCabinet:oe.valueDetailShow,openSearchValue:oe.openSearchValue,sortCabinets:oe.sortCabinets,cabinetDescription:[],cabinetData:oe.cabinetDefault,inputSearch:oe.inputSearch,showContent:oe.showContent};var de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLOSEDETAIL":return Object(ie.a)({},e,{showContent:!1,selectCabinet:0,cabinetDescription:[]});case"SEARCHCABINETS":return Object(ie.a)({},e,{inputSearch:t.input});case"DETAILSHOW":var a=oe.cabinetDefault.filter((function(e){return e.dataLevel==t.level})),n=JSON.parse(JSON.stringify(a));return Object(ie.a)({},e,{valueDetailShow:!0,currentLevelNumber:t.level,cabinetData:n});case"SHOWALLLEVEL":return Object(ie.a)({},se);case"UPLEVELMALL":a=oe.cabinetDefault.filter((function(t){return t.dataLevel==e.currentLevelNumber+1})),n=JSON.parse(JSON.stringify(a));return Object(ie.a)({},e,{currentLevelNumber:++e.currentLevelNumber,cabinetData:n});case"DOWNLEVELMALL":a=oe.cabinetDefault.filter((function(t){return t.dataLevel==e.currentLevelNumber-1})),n=JSON.parse(JSON.stringify(a));return Object(ie.a)({},e,{currentLevelNumber:--e.currentLevelNumber,cabinetData:n});case"SETCOUNTLEVEL":return Object(ie.a)({},e,{countLevels:t.countLevels});case"SELECTCABINET":var r=oe.cabinetDescription.filter((function(e){return e.dataSpace==t.selectCabinet})),c=JSON.parse(JSON.stringify(r));console.log(c);a=oe.cabinetDefault.filter((function(e){return e.dataLevel==t.cabinetLevel})),n=JSON.parse(JSON.stringify(a));return Object(ie.a)({},e,{countLevels:t.countLevels,cabinetData:n,cabinetDescription:c,selectCabinet:t.selectCabinet,currentLevelNumber:t.cabinetLevel,valueDetailShow:!0,showContent:!0});case"OPENSEARCH":return Object(ie.a)({},e,{openSearchValue:!0});case"CLOSESEARCH":return Object(ie.a)({},e,{openSearchValue:!1});case"CLEARAREA":return Object(ie.a)({},e);case"SORTCABINETS":if(0==e.sortCabinets)var l=e.cabinetData.sort((function(e,t){return(""+e.name).localeCompare(t.name)})),i=JSON.parse(JSON.stringify(l)),o=!0;else l=e.cabinetData.sort((function(e,t){return(""+t.name).localeCompare(e.name)})),i=JSON.parse(JSON.stringify(l)),o=!1;return console.log("reducer: "+i),Object(ie.a)({},e,{sortCabinets:o,cabinetData:i});default:return e}},me=Object(le.b)(de);l.a.render(r.a.createElement((function(){return r.a.createElement(u.a,{store:me},r.a.createElement(ce,{name:"\u0424\u0423\u0426"}))}),null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f761265f.chunk.js.map