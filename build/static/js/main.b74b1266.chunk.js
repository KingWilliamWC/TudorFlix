(this.webpackJsonptudorflix=this.webpackJsonptudorflix||[]).push([[0],[,,,,,,,,,,,,function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var s=i(1),n=i(7),c=i.n(n),d=i(2),a=i(3),r=i(5),o=i(4),j=(i(12),i.p+"static/media/House-Solid.3010b4e0.svg"),l=i.p+"static/media/Star-Solid.514f59ab.svg",u=i.p+"static/media/Grid-Solid.fc1d3e9c.svg",b=i.p+"static/media/Heart-Solid.94e4a406.svg",h=i.p+"static/media/Rewind-Solid.2d3a5f88.svg",v=i.p+"static/media/Option-Solid.9a14e2cd.svg",x=i(0),O=function(t){Object(r.a)(i,t);var e=Object(o.a)(i);function i(t){var s;return Object(d.a)(this,i),(s=e.call(this,t)).state={buttonStates:[],currentButtonIndex:0},s}return Object(a.a)(i,[{key:"componentDidMount",value:function(){for(var t=[],e=0;e<5;e++)t.push("sideButton");t[0]="sideButton sideButtonActive",this.setState({buttonStates:t})}},{key:"HandleButtonClick",value:function(t){if(t!==this.state.currentButtonIndex){var e=this.state.buttonStates;e[t]="sideButton sideButtonActive",e[this.state.currentButtonIndex]="sideButton",this.setState({buttonStates:e,currentButtonIndex:t})}}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{id:"sidebar",children:[Object(x.jsx)("div",{id:"sidebarSide",children:Object(x.jsxs)("div",{id:"sidebuttonsContainer",children:[Object(x.jsxs)("div",{className:"sideButtonsSection",children:[Object(x.jsxs)("div",{onClick:function(){return t.HandleButtonClick(0)},className:this.state.buttonStates[0],children:[Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:j}),Object(x.jsx)("p",{className:"sideButtonText",children:"Home"})]}),Object(x.jsxs)("div",{onClick:function(){return t.HandleButtonClick(1)},className:this.state.buttonStates[1],children:[Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:l}),Object(x.jsx)("p",{className:"sideButtonText",children:"Popular"})]}),Object(x.jsxs)("div",{onClick:function(){return t.HandleButtonClick(2)},className:this.state.buttonStates[2],children:[Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:u}),Object(x.jsx)("p",{className:"sideButtonText",children:"Discover"})]})]}),Object(x.jsxs)("div",{className:"sideButtonsSection",children:[Object(x.jsxs)("div",{onClick:function(){return t.HandleButtonClick(3)},className:this.state.buttonStates[3],children:[Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:b}),Object(x.jsx)("p",{className:"sideButtonText",children:"Favourites"})]}),Object(x.jsxs)("div",{onClick:function(){return t.HandleButtonClick(4)},className:this.state.buttonStates[4],children:[Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:h}),Object(x.jsx)("p",{className:"sideButtonText",children:"Watch Later"})]})]}),Object(x.jsx)("div",{id:"optionButtonContainer",children:Object(x.jsxs)("div",{className:"sideButton",children:[Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:v}),Object(x.jsx)("p",{className:"sideButtonText",children:"Settings"})]})})]})}),Object(x.jsx)("div",{id:"sidebarBottom",children:Object(x.jsxs)("div",{id:"sidebuttonsContainer",children:[Object(x.jsx)("div",{className:"sideButton sideButtonActive",children:Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:j})}),Object(x.jsx)("div",{className:"sideButton",children:Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:l})}),Object(x.jsx)("div",{className:"sideButton",children:Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:u})}),Object(x.jsx)("div",{className:"sideButton",children:Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:b})}),Object(x.jsx)("div",{className:"sideButton",children:Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:h})}),Object(x.jsx)("div",{className:"sideButton",children:Object(x.jsx)("img",{className:"sideButtonIcon",alt:"",src:v})})]})})]})}}]),i}(s.Component),m=(i(14),i.p+"static/media/Search-Solid.4d32873b.svg"),p=i.p+"static/media/Bell-Solid.3863c032.svg",f=function(t){Object(r.a)(i,t);var e=Object(o.a)(i);function i(t){var s;return Object(d.a)(this,i),(s=e.call(this,t)).state={buttonStates:[],currentButtonIndex:0},s}return Object(a.a)(i,[{key:"componentDidMount",value:function(){for(var t=[],e=0;e<2;e++)t.push("nonActiveOption");t[0]="activeOption",this.setState({buttonStates:t})}},{key:"HandleButtonClick",value:function(t){if(t!==this.state.currentButtonIndex){var e=this.state.buttonStates;e[t]="activeOption",e[this.state.currentButtonIndex]="nonActiveOption",this.setState({buttonStates:e,currentButtonIndex:t})}}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{id:"bartop",children:[Object(x.jsxs)("div",{id:"contentSelector",children:[Object(x.jsx)("div",{onClick:function(){return t.HandleButtonClick(0)},className:"contentOption",children:Object(x.jsx)("p",{className:this.state.buttonStates[0],children:"Movies"})}),Object(x.jsx)("div",{id:"seperator"}),Object(x.jsx)("div",{onClick:function(){return t.HandleButtonClick(1)},className:"contentOption",children:Object(x.jsx)("p",{className:this.state.buttonStates[1],children:"TV Series"})})]}),Object(x.jsxs)("div",{id:"searchContainer",children:[Object(x.jsx)("img",{id:"searchIcon",alt:"",src:m}),Object(x.jsx)("input",{placeholder:"type to start a search...",id:"searchBox"})]}),Object(x.jsxs)("div",{id:"userContainer",children:[Object(x.jsx)("img",{alt:"",id:"userBell",src:p}),Object(x.jsx)("img",{id:"userImg",alt:"",src:"data:image/png;base64,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"})]})]})}}]),i}(s.Component),B=(i(15),i.p+"static/media/Play-Solid.2c4d9a76.svg"),S=function(t){Object(r.a)(i,t);var e=Object(o.a)(i);function i(){return Object(d.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(x.jsx)("div",{id:"moviesContainer",children:Object(x.jsxs)("div",{id:"featuredContainer",children:[Object(x.jsx)("p",{id:"featuredTitle",children:"Featured"}),Object(x.jsxs)("div",{id:"featuredMoviesContainer",children:[Object(x.jsxs)("div",{id:"featuredMovie",children:[Object(x.jsx)("img",{id:"featuredMovieImage",alt:"",src:"https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"}),Object(x.jsxs)("div",{id:"featuredMovieDescriptionContainer",children:[Object(x.jsxs)("div",{id:"FeaturedContent",children:[Object(x.jsx)("p",{id:"featuredMovieTitle",children:"Interstellar"}),Object(x.jsxs)("div",{id:"feauturedMovieMetricsContainer",children:[Object(x.jsx)("p",{children:"Adventure"}),Object(x.jsx)("div",{id:"featuredSeperator"}),Object(x.jsx)("p",{children:"2014"}),Object(x.jsx)("div",{id:"featuredSeperator"}),Object(x.jsx)("p",{children:"2h 21m"}),Object(x.jsx)("div",{id:"featuredSeperator"}),Object(x.jsx)("img",{id:"featuredStarIcon",alt:"",src:l}),Object(x.jsx)("p",{children:"8.3"})]})]}),Object(x.jsxs)("div",{id:"bottomDescription",children:[Object(x.jsx)("div",{id:"FeaturedMovieDescriptionContainer",children:Object(x.jsx)("p",{id:"FeaturedMovieDescription",children:"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage"})}),Object(x.jsxs)("div",{id:"featuredButtonsContainer",children:[Object(x.jsx)("div",{id:"featuredLikeButton",children:Object(x.jsx)("img",{alt:"",src:b})}),Object(x.jsxs)("div",{id:"featuredWatchButton",children:[Object(x.jsx)("p",{children:"Watch"}),Object(x.jsx)("img",{alt:"",src:B})]})]})]})]})]}),Object(x.jsxs)("div",{id:"sideFeaturedMovies",children:[Object(x.jsx)("img",{className:"sideFeaturedMovieImg",alt:"",src:"https://image.tmdb.org/t/p/original//6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"}),Object(x.jsx)("img",{className:"sideFeaturedMovieImg",alt:"",src:"https://image.tmdb.org/t/p/original//6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"})]})]})]})})}}]),i}(s.Component),g=(i(16),function(t){Object(r.a)(i,t);var e=Object(o.a)(i);function i(){return Object(d.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(x.jsxs)("div",{id:"app",children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{id:"mainContent",children:[Object(x.jsx)(f,{}),Object(x.jsx)(S,{})]})]})}}]),i}(s.Component));c.a.render(Object(x.jsx)(g,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.b74b1266.chunk.js.map