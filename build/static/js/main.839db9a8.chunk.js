(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/slaughter-mask02.e1460624.png"},43:function(e,t,a){e.exports=a.p+"static/media/baton.b73b22ae.png"},44:function(e,t,a){e.exports=a.p+"static/media/bolter-gun.0ea95b3f.png"},46:function(e,t,a){e.exports=a(76)},51:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),s=a.n(o),i=(a(51),a(6)),c=a(7),r=a(11),u=a(8),m=a(10),h=a(78),d=a(79),g=function(e){return l.a.createElement("div",null,l.a.createElement(h.a,{fluid:!0},l.a.createElement(d.a,{fluid:!0},l.a.createElement("h1",{className:"display-3 center"},"likeUs"))))},p=a(3),b=a(20),f=a(80),E=a(81),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).selectedPig="",a.examinePig=function(e){},a.updateJumbotron=function(e){var t={age:a.props.age,weight:a.props.weight,health:a.props.health};a.props.updateJumbotronHandler(t),a.props.fadeInDoorHandler(!0)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pig",onMouseOver:this.updateJumbotron,onClick:this.examinePig})}}]),t}(n.Component),k=a(15),v=a(17),y=(n.Component,a(23)),O=a(42),j=a.n(O),C=a(43),N=a.n(C),x=a(44),S=a.n(x),I=(n.Component,n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={jumbotron1:"We're going to process a single medium sized pig from snout to tail.",doorCollapsed:!1,defaultLead:"\n\n    ",selectedTool:"head slam",locker:"url(".concat(j.a,")"),stunner:"url(".concat(N.a,")"),club:"url(".concat(S.a,")"),textClub:"Club",textMask:"Slaughter-mask",textGun:"Gun"},a.fadeInDoor=function(){a.setState({doorCollapsed:!0})},a.possibleResults={clubOrPoleaxe:["You have chosen to slam this animal's head against the floor until she is dead; in accordance with the EU guidelines of order to consume Breith ar an cluais.","Chas uait \xe9 agus breith ar, \xf3s cionn a gcr\xfab\xedn .\n      L\xfaas f\xf3 dheis \xe9.\n      L\xfaasc f\xf3 chl\xe9 \xe9, //chas t\xedmpeal \xe9 ? l\xfaasc f\xf3 dheis \xe9. Greidhm agat ar ?\n      Luasc i gcoinne an t\xfarl\xe1r \xe9\n      : breith greidhm ar agus l\xfaasc \xe9\n\n      : l\xfaasc f\xf3 dheis \xe9-\n      chas t\xedmpeal \xe9 ? l\xfaasc f\xf3 chl\xe9 \xe9? chas t\xedmpeal \xe9?\n      l\xfaasc f\xf3 dheis \xe9,","Direct blow to skull using a club or poleaxe. The blow must be dealt with precision and force, so that the skull is immediately smashed, causing instantaneous unconsciousness. Pigs have a well-developed frontal cavity so the blow should be aimed slightly above the eyes."],slaughteringMask:["A bolt held in the correct position by the mask is driven into the animal's brain by a hammer blow. The device is fitted with a spring which returns the bolt to its original position."],electricalStun:["An electric current of high frequency but low voltage (60\u201380 V) is passed through the brain of an animal for a few seconds to produce unconsciousness.  must be accurately placed (Figs 20 and 21). Places where the skull is thick must be avoided. Electrical contact is impeded by hair and caked mud. The head must not be completely wet otherwise the current will have a short-circuit path avoiding the brain. The electrodes must be applied with strong pressure."]},a.updateJumbotron=function(e){console.log(e.age),console.log(e.weight),console.log(e.health),a.setState({jumbotron1:"Age:    "+e.age,jumbotron2:"Weight:  "+e.weight,jumbotron3:"Health:  "+e.health})},a.dropPig=function(){},a.state={fadeIn:!0},a.toggle=a.toggle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({fadeIn:!this.state.fadeIn}),setTimeout(function(){window.open("./stunpig")},500)}},{key:"render",value:function(){return l.a.createElement(b.a,{in:this.state.fadeIn},l.a.createElement("div",null,l.a.createElement("div",{id:"isolated-animal"},l.a.createElement("div",{id:"pig-to-kill"},l.a.createElement(k.Droppable,null,l.a.createElement("div",{onClick:this.killPig})))),l.a.createElement(h.a,{id:"stunbowtron",style:Object(y.a)({margin:"50px 0px 50px 0"},"margin",0)},l.a.createElement("h5",{className:"display-4",align:"right",style:{paddingBottom:"10px",margin:"0 20% 0 0"}},"Stun the Pig"),l.a.createElement("p",{className:"lead"},"Select a stunner from the menu"),l.a.createElement(f.a,null,l.a.createElement(E.a,{xs:"4"},l.a.createElement("p",{id:"guide"}," ","The blow must be dealt with precision and force, ",l.a.createElement("br",null),"so that the skull is immediately smashed,",l.a.createElement("br",null),"causing instantaneous unconsciousness"),l.a.createElement("p",{className:"lead"},this.state.defaultLead)),l.a.createElement("div",{className:"tools col-8"},l.a.createElement("div",{className:"kill-with"},l.a.createElement("button",{type:"button",className:"btn  btn-outline-warning btn-lg"},l.a.createElement("img",{className:"kill-tools",src:"images/slam2.png"}),l.a.createElement("br",null)," Head Slam"))," ",l.a.createElement("div",{className:"kill-with"},l.a.createElement("button",{type:"button",className:"btn  btn-outline-warning btn-lg"},l.a.createElement("img",{className:"kill-tools",src:"images/bolter-gun.png"}),l.a.createElement("br",null)," Bolt-Gun"))," ",l.a.createElement("div",{className:"kill-with"},l.a.createElement("button",{type:"button",className:"btn  btn-outline-warning btn-lg"},l.a.createElement("img",{className:"kill-tools",src:"images/baton.png"}),l.a.createElement("br",null)," Club"))," ",l.a.createElement("div",{className:"kill-with"},l.a.createElement("button",{type:"button",className:"btn  btn-outline-warning btn-lg"},l.a.createElement("img",{className:"kill-tools",src:"images/slaughter-mask02.png"}),l.a.createElement("br",null)," Slaughter-Mask")),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:"-40px"}}))))))}}]),t}(n.Component)),P=a(82),T=a(89),M=a(83),A=a(84),J=a(85),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).toggleCollapse=function(){a.props.toggleCollapse(),a.state.modal&&a.toggle()},a.okClick=function(){},a.state={modal:!1},a.toggle=a.toggle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return l.a.createElement(d.a,null," ",l.a.createElement(f.a,null,l.a.createElement(E.a,{xs:"6",sm:"4"},l.a.createElement(P.a,{className:"btn-block",color:"secondary",size:"lg",onClick:this.toggleCollapse},"Run")),l.a.createElement(E.a,{xs:"6",sm:"4"}),l.a.createElement(E.a,{sm:"4"},l.a.createElement(P.a,{className:"btn-block",color:"secondary",size:"lg",onClick:this.toggle},"About"))),l.a.createElement(T.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},l.a.createElement(M.a,{toggle:this.toggle},"Most reasonable people would never deliberately harm an animal."," "),l.a.createElement(A.a,null,"Yet the meat branch of human industry is killing animals by the fuck-ton. This is madness. When we are informed, and when we are reasonable, animals likeUs go vegan."),l.a.createElement(J.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(P.a,{color:"secondary",onClick:this.toggleCollapse},"Okay"))))}}]),t}(l.a.Component),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={showMenu:!0,pSelectIsOpened:!1},a.toggleCollapse=function(){a.setState({pSelectIsOpened:!0,showMenu:!1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"like-us-main-div",style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"black",left:"0"}},l.a.createElement(f.a,null,l.a.createElement(E.a,{sm:"12",md:{size:10,offset:1}},l.a.createElement(v.Collapse,{isOpened:this.state.showMenu},l.a.createElement(g,null),l.a.createElement(B,{toggleCollapse:this.toggleCollapse})),l.a.createElement(v.Collapse,{isOpened:this.state.pSelectIsOpened},l.a.createElement(I,null)))))}}]),t}(n.Component),W=(n.Component,a(73),a(74),a(86)),z=a(87),D=a(88),G=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(W.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(z.a,null,l.a.createElement(D.a,{exact:!0,path:"/",component:L}),l.a.createElement(D.a,{component:L}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.839db9a8.chunk.js.map