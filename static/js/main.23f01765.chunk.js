(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(594)},168:function(e,t,a){},594:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a.n(n),i=a(156),u=a.n(i),o=(a(168),a(157)),s=a(158),c=a(161),r=a(159),p=a(162),m=function(e){return l.a.createElement("div",{className:"keyboard-container"},l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"C"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"*"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"-"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"+"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"^"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"/"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"<"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"sqr"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,className:"special",value:"!x"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"7"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"8"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"9"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"4"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"5"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"6"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"1"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"2"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"3"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"0"}),l.a.createElement("input",{type:"button",onClick:e.getValueBtn,value:"."}),l.a.createElement("input",{type:"button equalBtn",onClick:e.getValueBtn,value:"="}))},v=function(e){return l.a.createElement("div",{className:e.ishidden+" output-container"},l.a.createElement("span",{className:"equations"},e.equations),l.a.createElement("span",{className:"output-string"},e.outputDisplay))},b=a(160),d=a.n(b),k=a(62),h=a.n(k),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(r.a)(t).call(this))).calculate=function(){var t=e.state.equations.join("");t&&(t=h.a.eval(t),t=h.a.format(t,{precision:14}),t=String(t),e.setState({operations:[t]}))},e.handleClick=function(t){var a=t.target.value;switch(a){case"C":e.setState({operations:[],equations:[],ishidden:"hide"});break;case"=":e.calculate();break;case"<":e.setState({equations:e.state.equations.splice(0,e.state.equations.length-1)});break;case"sqr":e.setState({equations:h.a.sqrt(e.state.equations),operations:h.a.sqrt(e.state.equations),ishidden:"show"});break;case"!x":for(var n=1,l=1;l<=e.state.equations;l++)n*=l;e.setState({equations:[n],operations:[n],ishidden:"show"});break;default:var i=d()(e.state.equations,{$push:[a]});e.setState({equations:i,ishidden:"show"})}},e.state={operations:[],equations:[],ishidden:""},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(v,{outputDisplay:this.state.operations,equations:this.state.equations,ishidden:this.state.ishidden}),l.a.createElement(m,{getValueBtn:this.handleClick}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,2,1]]]);
//# sourceMappingURL=main.23f01765.chunk.js.map