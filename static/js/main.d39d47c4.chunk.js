(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(7),n=a.n(s),i=(a(14),a(1)),o=a(2),l=a(4),m=a(3),u=a(5);var d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card bg-dark text-white"},c.a.createElement("img",{className:"head card-img",src:"https://ak1.picdn.net/shutterstock/videos/1016011171/thumb/1.jpg",alt:""}),c.a.createElement("div",{className:"card-img-overlay centered box"},c.a.createElement("h1",{className:"text_head",style:{paddingTop:"50px"}},"The Clicky Game!"),c.a.createElement("h5",{className:"text_head"},"Directions: Click any unique image. Choosing a previous image will result in a Game Over."))))};var g=function(e){return c.a.createElement("ul",{className:"nav justify-content-center"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("h4",{className:"nav-link",style:{color:"white"}},"Clicky Game")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("h4",{className:"nav-link",style:{color:"white"}},e.message)),c.a.createElement("li",{className:"nav-item"},c.a.createElement("h4",{className:"nav-link",style:{color:"white"}},"Current Score ",e.current," | High Score ",e.high)))},h=[{src:"../../images/angelica.png",picked:!1},{src:"../../images/arnold.jpg",picked:!1},{src:"../../images/cyborg.jpg",picked:!1},{src:"../../images/deedee.png",picked:!1},{src:"../../images/dexter.png",picked:!1},{src:"../../images/helga.jpg",picked:!1},{src:"../../images/patrick.jpg",picked:!1},{src:"../../images/robin.png",picked:!1},{src:"../../images/rocko.jpg",picked:!1},{src:"../../images/spongebob.jpg",picked:!1},{src:"../../images/spunky.jpg",picked:!1},{src:"../../images/tommy.jpg",picked:!1}],p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,c=new h(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={current_score:0,high_score:0,stored_cards:h,message:"Welcome, please click an image to start!"},a.check_answer=function(e){console.log(e);var t=a.state.stored_cards;if(!1===t[e].picked){t[e].picked=!0;var r=a.state.current_score+1;r>=a.state.high_score?a.setState({stored_cards:a.shuffle(t),current_score:r,high_score:r,message:"You Guessed Correctly"}):a.setState({stored_cards:a.shuffle(t),current_score:r,message:"You Guessed Correctly"})}else{for(var c=0;c<t.length;c++)t[c].picked=!1;a.setState({stored_cards:a.shuffle(t),current_score:0,message:"You Guess Incorrectly, Try Again"}),console.log(a.state.stored_cards)}},a.shuffle=function(e){return e.sort(function(){return Math.random()-.5})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{message:this.state.message,current:this.state.current_score,high:this.state.high_score}),c.a.createElement(d,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"})))}}]),t}(c.a.Component),k=(a(15),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(p,null)}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.d39d47c4.chunk.js.map