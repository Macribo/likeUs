(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/slaughter-mask02.e1460624.png"},43:function(e,t,a){e.exports=a.p+"static/media/baton.b73b22ae.png"},44:function(e,t,a){e.exports=a.p+"static/media/bolter-gun.0ea95b3f.png"},46:function(e,t,a){e.exports=a(76)},51:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),i=a.n(o),s=(a(51),a(8)),r=a(9),c=a(12),m=a(10),u=a(11),d=a(78),g=a(79),h=function(e){return l.a.createElement("div",null,l.a.createElement(d.a,{fluid:!0},l.a.createElement(g.a,{fluid:!0},l.a.createElement("h1",{className:"display-3 center"},"likeUs"))))},p=a(3),b=a(20),f=a(80),E=a(81),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).selectedPig="",a.examinePig=function(e){},a.updateJumbotron=function(e){var t={age:a.props.age,weight:a.props.weight,health:a.props.health};a.props.updateJumbotronHandler(t),a.props.fadeInDoorHandler(!0)},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pig",onMouseOver:this.updateJumbotron,onClick:this.examinePig})}}]),t}(n.Component),k=a(15),y=a(16),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={jumbotron1:"We're going to process a single medium sized pig from snout to tail.",doorCollapsed:!1},a.fadeInDoor=function(){a.setState({doorCollapsed:!0})},a.updateJumbotron=function(e){console.log(e.age),console.log(e.weight),console.log(e.health),a.setState({jumbotron1:"Age:    "+e.age,jumbotron2:"Weight:  "+e.weight,jumbotron3:"Health:  "+e.health})},a.toggle=function(){a.setState({fadeIn:!a.state.fadeIn}),setTimeout(function(){window.open("./stunpig")},500)},a.toggleCollapse=function(){a.props.toggleCollapseSelect(),a.state.modal&&a.toggle()},a.dropPig=function(){a.toggleCollapse()},a.state={fadeIn:!0},a.toggle=a.toggle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{in:this.state.fadeIn},l.a.createElement("div",null,l.a.createElement(d.a,{id:"select-pig",style:{height:"330px",padding:"10px"}},l.a.createElement(f.a,null,l.a.createElement(E.a,{xs:"8"},l.a.createElement("h1",{className:"display-3"},"Select Pig"),l.a.createElement("p",{className:"lead"},this.state.jumbotron1),l.a.createElement("p",{className:"lead"},this.state.jumbotron2),l.a.createElement("p",{className:"lead"},this.state.jumbotron3)),l.a.createElement(E.a,{xs:"4",style:{margin:0}}," ",l.a.createElement(y.Collapse,{isOpened:!!this.state.doorCollapsed},l.a.createElement(k.Droppable,{align:"center",types:["pig"],onDrop:this.toggleCollapse}," ",l.a.createElement("div",{className:"door",style:{margin:0,padding:0}}),l.a.createElement("h6",{align:"center"},"KILL ROOM"))))),l.a.createElement("hr",{className:"my-2"}),l.a.createElement("p",null,"Mouseover an animal to examine it. When you've made your selection, drag it to the kill room.")," "),l.a.createElement("div",{className:"pigholder"},l.a.createElement(k.Draggable,{type:"pig",data:"pig0"}," ",l.a.createElement(O,{id:"pig0",age:"8 months old",weight:"45kg",health:"healthy",updateJumbotronHandler:this.updateJumbotron,fadeInDoorHandler:this.fadeInDoor})),l.a.createElement(k.Draggable,{type:"pig",data:"pig1"}," ",l.a.createElement(O,{id:"pig1",age:"9 months old",weight:"65kg",health:"healthy",updateJumbotronHandler:this.updateJumbotron,fadeInDoorHandler:this.fadeInDoor})),l.a.createElement(k.Draggable,{type:"pig",data:"pig2"}," ",l.a.createElement(O,{id:"pig2",age:"10 months old",weight:"55kg",health:"healthy",updateJumbotronHandler:this.updateJumbotron,fadeInDoorHandler:this.fadeInDoor})),l.a.createElement(k.Draggable,{type:"pig",data:"pig3"}," ",l.a.createElement(O,{id:"pig3",age:"11 months old",weight:"43kg",health:"healthy",updateJumbotronHandler:this.updateJumbotron,fadeInDoorHandler:this.fadeInDoor})))))}}]),t}(n.Component),j=a(23),v=a(42),C=a.n(v),I=a(43),S=a.n(I),x=a(82),N=a(89),T=a(83),B=a(84),D=a(85),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).proceed=function(){a.props.goToBleed(),a.toggle(),window.location.assign("https://www.figma.com/proto/x16vcW37yugGKZ1re2ZTmd/LikeUs?node-id=0%3A1&scaling=contain")},a.state={modal:!1,goToBleed:!1},a.toggle=a.toggle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(x.a,{outline:!0,color:"warning",onClick:this.toggle},l.a.createElement("img",{style:{display:"block"},className:"kill-tools",src:this.props.whichToolImg})),l.a.createElement(N.a,{isOpen:this.state.modal},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(T.a,null,this.props.toolName),l.a.createElement(B.a,null,this.props.toolInfo,this.props.toolImg),l.a.createElement(D.a,null,l.a.createElement(x.a,{color:"warning",onClick:this.proceed},"Proceed"),l.a.createElement(x.a,{color:"secondary",onClick:this.toggle},"Back")))))}}]),t}(l.a.Component),M=a(44),H=a.n(M),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={jumbotron1:"We're going to process a single medium sized pig from snout to tail.",doorCollapsed:!1,defaultLead:"\n        \n        ",selectedTool:"head slam",locker:"url(".concat(C.a,")"),stunner:"url(".concat(S.a,")"),club:"url(".concat(H.a,")"),textClub:"Club",textMask:"Slaughter-mask",textGun:"Gun",goToBleed:"false"},a.fadeInDoor=function(){a.setState({doorCollapsed:!0})},a.updateJumbotron=function(e){console.log(e.age),console.log(e.weight),console.log(e.health),a.setState({jumbotron1:"Age:    "+e.age,jumbotron2:"Weight:  "+e.weight,jumbotron3:"Health:  "+e.health})},a.dropPig=function(){},a.state={fadeIn:!0},a.toggle=a.toggle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState({fadeIn:!this.state.fadeIn}),setTimeout(function(){window.open("./stunpig")},500)}},{key:"handleGoToBleed",value:function(){this.setState({goToBleed:!0}),this.props.toggleCollapseStun()}},{key:"render",value:function(){var e=["Head Slam","Stun Gun","Direct blow to skull using a club or poleaxe","Slaughter Mask"],t=['You are choosing to lift this animal by the hind legs and "slam" it\'s head against the floor or wall until it is incapable of standing back up again. Is this correct?',"You are choosing to pass an electric current through the creature's brain until stunned.  Caution: electodes must be accurately placed (Figs 20 and 21). Caution: places where the skull is thick must be avoided. Caution: Electrical contact is impeded by hair and caked mud. \n      Caution: Excessive moisture may short-circuit the current flow, missing the brain. Apply the electrodes with strong pressure. Stand clear. Proceed?","You are choosing to stun the animal by smashing it's skull in with a club. Is this correct?","You are choosing to render this animal unconscious with the Slaughter Mask method. The mask is placed upon the beast. A bolt held in the correct position by the mask is driven into the animal's brain by a hammer blow. The device is fitted with a spring which returns the bolt to its original position. Is this correct?"];return l.a.createElement(b.a,{in:this.state.fadeIn},l.a.createElement("div",null,l.a.createElement("div",{id:"isolated-animal"},l.a.createElement("div",{id:"pig-to-kill"},l.a.createElement(k.Droppable,null,l.a.createElement("div",{onClick:this.killPig})))),l.a.createElement(d.a,{id:"stunbowtron",style:Object(j.a)({margin:"50px 0px 50px 0"},"margin",0)},l.a.createElement("h5",{className:"display-4",align:"right",style:{paddingBottom:"10px",margin:"0 20% 0 0"}},"Choose stun method"),l.a.createElement(f.a,null,l.a.createElement(E.a,{xs:"4"},l.a.createElement("p",{className:"lead"},this.state.defaultLead)),l.a.createElement("div",{className:"tools col-12"},l.a.createElement("div",{className:"kill-with"},l.a.createElement(J,{id:"hs",goToBleed:this.handleGoToBleed.bind(this),toolName:e[0],whichToolImg:"images/slam2.png",toolInfo:t[0]}),l.a.createElement("br",null)," ",l.a.createElement("h5",null,"Head Slam"))," ",l.a.createElement("div",{className:"kill-with"},l.a.createElement(J,{id:"bg",goToBleed:this.handleGoToBleed.bind(this),toolName:e[1],whichToolImg:"images/bolter-gun.png",toolInfo:t[1]}),l.a.createElement("br",null)," ",l.a.createElement("h5",null,"Stun-Gun"))," ",l.a.createElement("div",{className:"kill-with"},l.a.createElement(J,{id:"c",goToBleed:this.handleGoToBleed.bind(this),toolName:e[2],whichToolImg:"images/baton.png",toolInfo:t[2]}),l.a.createElement("br",null)," ",l.a.createElement("h5",null,"Club"))," ",l.a.createElement("div",{className:"kill-with"},l.a.createElement(J,{id:"sm",goToBleed:this.handleGoToBleed.bind(this),toolName:e[3],whichToolImg:"images/slaughter-mask02.png",toolInfo:t[3]}),l.a.createElement("br",null)," ",l.a.createElement("h5",null,"Slaughter-Mask")),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:"-40px"}}))))))}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Bleed Pig"))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggleCollapse=function(){a.props.toggleCollapseMenu(),a.state.modal&&a.toggle()},a.okClick=function(){},a.state={modal:!1},a.toggle=a.toggle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return l.a.createElement(g.a,null," ",l.a.createElement(f.a,null,l.a.createElement(E.a,{xs:"6",sm:"4"},l.a.createElement(x.a,{className:"btn-block",color:"secondary",size:"lg",onClick:this.toggleCollapse},"Run")),l.a.createElement(E.a,{xs:"6",sm:"4"}),l.a.createElement(E.a,{sm:"4"},l.a.createElement(x.a,{className:"btn-block",color:"secondary",size:"lg",onClick:this.toggle},"About"))),l.a.createElement(N.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},l.a.createElement(T.a,{toggle:this.toggle},"Most of us would never deliberately harm an animal."," "),l.a.createElement(B.a,null,"Yet the meat sector is harming animals at an astronomical rate, on our behalf. This is madness. When we are informed, and when we are reasonable, animals likeUs go vegan."),l.a.createElement(D.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(x.a,{color:"secondary",onClick:this.toggleCollapse},"Okay"))))}}]),t}(l.a.Component),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={showMenu:!0,pSelectIsOpened:!1,pStunIsOpened:!1,pBleedIsOpened:!1},a.toggleCollapseMenu=function(){a.setState({pSelectIsOpened:!0,showMenu:!1})},a.toggleCollapseStun=function(){a.setState({pStunIsOpened:!1,pBleedIsOpened:!0})},a.toggleCollapseSelect=function(){a.setState({pSelectIsOpened:!1,pStunIsOpened:!0})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"like-us-main-div",style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"black",left:"0"}},l.a.createElement(f.a,null,l.a.createElement(E.a,{sm:"12",md:{size:10,offset:1}},l.a.createElement(y.Collapse,{isOpened:this.state.showMenu},l.a.createElement(h,null),l.a.createElement(A,{toggleCollapseMenu:this.toggleCollapseMenu})),l.a.createElement(y.Collapse,{isOpened:this.state.pSelectIsOpened},l.a.createElement(w,{toggleCollapseSelect:this.toggleCollapseSelect})),l.a.createElement(y.Collapse,{isOpened:this.state.pStunIsOpened},l.a.createElement(G,{toggleCollapseStun:this.toggleCollapseStun})),l.a.createElement(y.Collapse,{isOpened:this.state.pBleedIsOpened},l.a.createElement(P,{toggleCollapseBleed:this.toggleCollapseBleed})))))}}]),t}(n.Component),z=(a(73),a(74),a(86)),L=a(87),Y=a(88),U=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(z.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(L.a,null,l.a.createElement(Y.a,{exact:!0,path:"/",component:W}),l.a.createElement(Y.a,{component:W}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.b5550d09.chunk.js.map