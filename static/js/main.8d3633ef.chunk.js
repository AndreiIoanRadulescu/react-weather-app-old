(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(2),i=a.n(o),s=(a(12),a(3)),c=a(4),l=a(6),m=a(5),p=(a(13),a(14),function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"cards"},n.a.createElement("h1",null,e.city,", ",e.country),n.a.createElement("div",null,n.a.createElement("h5",{className:"py-4 vreme"},"Umiditate ",e.humidity),n.a.createElement("h1",{className:"py-2"},e.temperature,"\xb0"),n.a.createElement("h3",null,n.a.createElement("span",{className:"px-4"},e.temperatureMin,"\xb0")," -",n.a.createElement("span",{className:"px-4"},e.temperatureMax,"\xb0"))),n.a.createElement("table",{className:"table d-none"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Astazi"),n.a.createElement("th",{scope:"col"},"Maine"),n.a.createElement("th",{scope:"col"},"Poimaine"),n.a.createElement("th",{scope:"col"},"Raspoimaine"),n.a.createElement("th",{scope:"col"},"Peste 4 zile"),n.a.createElement("th",{scope:"col"},"Peste 5 zile"),n.a.createElement("th",{scope:"col"},"Peste 6 zile"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,e.prognosis0),n.a.createElement("td",null,e.prognosis1),n.a.createElement("td",null,e.prognosis2),n.a.createElement("td",null,e.prognosis3),n.a.createElement("td",null,e.prognosis4),n.a.createElement("td",null,e.prognosis5),n.a.createElement("td",null,e.prognosis6))))))}),d=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3 offset-md-2"},n.a.createElement("input",{type:"text",className:"form-control",name:"city",autoComplete:"off",placeholder:"Oras..."})),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("input",{type:"text",className:"form-control",name:"country",autoComplete:"off",placeholder:"Tara..."})),n.a.createElement("div",{className:"col-md-3 mt-md-0 text-md-left"},n.a.createElement("button",{className:"btn btn-warning",id:"vreme",onClick:e.afiseazavremea},"Afiseaza Vremea"),n.a.createElement("button",{className:"btn  btn-primary",id:"prognoza",onClick:e.afiseazavremea},"Afiseaza Prognoza")))))},u={BucRo:{numeTara:"Romania",nume:"Bucuresti",temperatura:20,temperaturaMinMax:[19,22],umiditate:"Scazuta",prognoza:["soare","nori","ploaie","viscol","ceata","ceata","ceata"]},ConstRo:{numeTara:"Romania",nume:"Constanta",temperatura:23,temperaturaMinMax:[20,25],umiditate:"Crescuta",prognoza:["soare","soare","nori","ceata","ceata","ceata","ceata"]},AleRo:{numeTara:"Romania",nume:"Alexandria",temperatura:23,temperaturaMinMax:[20,25],umiditate:"Scazuta",prognoza:["soare","ceata","nori","ceata","ceata","ceata","nori"]},AleEgi:{numeTara:"Egipt",nume:"Alexandria",temperatura:33,temperaturaMinMax:[30,35],umiditate:"Medie",prognoza:["soare","soare","soare","soare","ceata","ceata","ceata"]},BudHu:{numeTara:"Ungaria",nume:"Budapesta",temperatura:15,temperaturaMinMax:[14,16],umiditate:"Medie",prognoza:["ceata","nori","nori","ceata","viscol","viscol","viscol"]}},g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getWeather=function(t){t.preventDefault(),"vreme"==t.target.id&&(t.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.children[2].classList.add("d-none"),t.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.children[1].classList.remove("d-none")),"prognoza"==t.target.id&&(t.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.children[2].classList.remove("d-none"),t.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.children[1].classList.add("d-none"));var a=t.target.parentNode.parentNode.firstChild.firstChild.value,r=t.target.parentNode.parentNode.firstChild.nextSibling.firstChild.value,n=null;Object.entries(u).forEach((function(e){e[1].nume==a&&e[1].numeTara==r&&(n=e[1])})),n?e.setState({city:n.nume,country:n.numeTara,temperature:n.temperatura,temperatureMin:n.temperaturaMinMax[0],temperatureMax:n.temperaturaMinMax[1],humidity:n.umiditate,prognosis0:n.prognoza[0],prognosis1:n.prognoza[1],prognosis2:n.prognoza[2],prognosis3:n.prognoza[3],prognosis4:n.prognoza[4],prognosis5:n.prognoza[5],prognosis6:n.prognoza[6]}):(alert("Din pacate aceasta combinatie de tara si oras nu exista in baza noastra de date"),t.target.parentNode.parentNode.firstChild.firstChild.value="",t.target.parentNode.parentNode.firstChild.nextSibling.firstChild.value="",e.setState({city:"Oras",country:"Tara",temperature:0,temperatureMin:0,temperatureMax:0,humidity:void 0,prognosis0:void 0,prognosis1:void 0,prognosis2:void 0,prognosis3:void 0,prognosis4:void 0,prognosis5:void 0,prognosis6:void 0}))},e.state={city:"Oras",country:"Tara",temperature:"0",temperatureMin:"0",temperatureMax:"0",humidity:void 0,prognosis0:void 0,prognosis1:void 0,prognosis2:void 0,prognosis3:void 0,prognosis4:void 0,prognosis5:void 0,prognosis6:void 0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,{afiseazavremea:this.getWeather}),n.a.createElement(p,{city:this.state.city,country:this.state.country,temperature:this.state.temperature,temperatureMin:this.state.temperatureMin,temperatureMax:this.state.temperatureMax,humidity:this.state.humidity,prognosis0:this.state.prognosis0,prognosis1:this.state.prognosis1,prognosis2:this.state.prognosis2,prognosis3:this.state.prognosis3,prognosis4:this.state.prognosis4,prognosis5:this.state.prognosis5,prognosis6:this.state.prognosis6}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.8d3633ef.chunk.js.map