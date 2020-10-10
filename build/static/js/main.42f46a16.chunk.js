(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},34:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(14),c=a.n(s),o=(a(33),a(34),a(7)),l=a(8),i=a(15),m=a(10),u=a(9),p=a(11);function h(){return r.a.createElement(p.b,{className:"back-button",to:"/"},"< Home")}var k=a(17),d=a(25),f=a.n(d),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},n.state={name:"",id:""},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,t=e.pkmName,a=e.pkmID;this.setState({name:t,id:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,r.a.createElement("div",{className:"pkmImageDisplay"},r.a.createElement(f.a,{height:90},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.state.id+".png"}))),r.a.createElement("span",{className:"not-cut"},this.state.id," - ",this.capitalize(this.state.name)),r.a.createElement(k.a,{icon:"paw",className:"icon"}))))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={numberOfPkms:9,list:[]},n.handleInput=n.handleInput.bind(Object(i.a)(n)),n.requestPokemons=n.requestPokemons.bind(Object(i.a)(n)),n.searchPokemons=n.searchPokemons.bind(Object(i.a)(n)),n}return Object(l.a)(a,[{key:"requestPokemons",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit="+this.state.numberOfPkms).then((function(e){return e.json()})).then((function(t){return e.setState({list:t.results.map((function(e){return e.name}))})}))}},{key:"componentWillMount",value:function(){this.requestPokemons()}},{key:"handleInput",value:function(e){this.setState({numberOfPkms:e.target.value})}},{key:"searchPokemons",value:function(e){e.preventDefault(),this.state.numberOfPkms>=1?this.requestPokemons():this.setState({list:[]})}},{key:"render",value:function(){var e=this.state.list.map((function(e,t){return r.a.createElement(v,{pkmID:t+1,pkmName:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"pkmApp"},r.a.createElement("header",null,r.a.createElement("form",{onSubmit:this.searchPokemons},r.a.createElement("input",{type:"number",value:this.state.numberOfPkms,onChange:this.handleInput}),r.a.createElement("button",{onClick:this.searchPokemons},"Search"))),r.a.createElement("div",{className:"pkmAppContainer"},e)))}}]),a}(r.a.Component),g=a(27),b=a(26);function y(e){var t=e.item,a=e.onChange;return r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:t.done,onChange:function(e){a(e,t.key)}}))}function j(e){var t=e.list,a=e.removeTask,n=e.toggleTask,s=e.updateTask,c="";return t&&(c=t.map((function(e){return r.a.createElement("div",{key:e.key,className:"list-item"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,r.a.createElement(y,{item:e,onChange:n}),function(e){return e.done?r.a.createElement("span",{className:"noselect"},e.title):r.a.createElement("input",{type:"text",value:e.title,onChange:function(t){s(t,e.key)}})}(e),r.a.createElement(k.a,{className:"icon",icon:"trash",onClick:function(){a(e.key)}}))))}))),r.a.createElement("div",null,r.a.createElement(b.a,{duration:300,easing:"ease-in-out"},c))}var O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).saveState=function(){localStorage.setItem("todoList",JSON.stringify(n.state.taskList))},n.loadState=function(){if("todoList"in localStorage){var e=JSON.parse(localStorage.getItem("todoList"));n.setState({taskList:e})}},n.addTask=function(e){if(e.preventDefault(),""!==n.state.currentText.trim()){var t={key:Date.now(),done:!1,title:n.state.currentText};n.setState({taskList:[].concat(Object(g.a)(n.state.taskList),[t]),currentText:""})}else n.setState({currentText:""})},n.removeTask=function(e){if(window.confirm("Remove item from the list?")){var t=n.state.taskList.filter((function(t){return e!=t.key}));n.setState({taskList:t})}},n.toggleTask=function(e,t){for(var a=n.state.taskList,r=0;r<a.length;r++)if(a[r].key===t){a[r].done=e.target.checked;break}n.setState({taskList:a})},n.updateTask=function(e,t){for(var a=n.state.taskList,r=0;r<a.length;r++)if(a[r].key===t){a[r].title=e.target.value;break}n.setState({taskList:a})},n.handleInput=function(e){n.setState({currentText:e.target.value})},n.state={currentText:"",taskList:[]},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.saveState()}},{key:"componentWillMount",value:function(){this.loadState()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{onSubmit:this.addTask},r.a.createElement("input",{onChange:this.handleInput,value:this.state.currentText,type:"text",placeholder:"Task Title"}),r.a.createElement("button",{onClick:this.addTask},"Add"))),r.a.createElement(j,{updateTask:this.updateTask,removeTask:this.removeTask,toggleTask:this.toggleTask,list:this.state.taskList})))}}]),a}(n.Component);function S(e){return r.a.createElement(p.b,{to:e.to,className:"project-button"},r.a.createElement("img",{src:e.img}),r.a.createElement("span",null,e.label))}var T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"These are just some react practice projects"),r.a.createElement("div",{className:"projects-container"},r.a.createElement("div",{className:"projectDisplay"},r.a.createElement(S,{img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",label:"Pok\xe9mon",to:"/pokemon"}),r.a.createElement("p",null,"Cosuming Data from an API"),r.a.createElement("p",null,"Using Lazy-load to deal with images"),r.a.createElement("p",null,"Handling events")),r.a.createElement("div",{className:"projectDisplay"},r.a.createElement(S,{img:"/checklist.png",label:"Checklist",to:"/checklist"}),r.a.createElement("p",null,"Storing data on the browser"),r.a.createElement("p",null,"Displaying item with animation"),r.a.createElement("p",null,"Handling events"))))}}]),a}(n.Component),N=a(16),P=a(21),w=a(2);N.b.add(P.b),N.b.add(P.a);var C=function(){return r.a.createElement(p.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:T}),r.a.createElement(w.a,{path:"/checklist",component:O}),r.a.createElement(w.a,{path:"/pokemon",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.42f46a16.chunk.js.map