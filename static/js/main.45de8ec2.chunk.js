(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,o){e.exports=o(99)},50:function(e,t,o){},97:function(e,t,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},98:function(e,t,o){},99:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),c=o(43),i=o.n(c),a=(o(50),o(44)),u=o.n(a);o(97),o(98);var s=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{type:"text/javascript",src:"./precorJs.js"}),r.a.createElement("h1",null,"Workout App Precor ltd"),r.a.createElement("button",{onClick:function(){document.getElementById("output").innerHTML=precorWorkout.getWorkoutLimits()}},"getWorkoutLimits"),r.a.createElement("button",{onClick:function(){document.getElementById("output").innerHTML=precorWorkout.getState()}},"getState"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){precorWorkout.setSpeed(2)}},"setSpeed"),r.a.createElement("button",{onClick:function(){precorWorkout.setResistance(2)}},"setResistance"),r.a.createElement("button",{onClick:function(){precorWorkout.setIncline(2)}},"setIncline"),r.a.createElement("button",{onClick:function(){precorWorkout.setRamp(2)}},"setRamp"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){precorWorkout.cancelPreWorkoutPhase()}},"cancelPreWorkoutPhase"),r.a.createElement("button",{onClick:function(){precorWorkout.finishPreWorkoutPhase()}},"finishPreWorkoutPhase"),r.a.createElement("button",{onClick:function(){precorWorkout.finishWorkoutPhase()}},"finishWorkoutPhase"),r.a.createElement("button",{onClick:function(){precorWorkout.finishPostWorkoutPhase()}},"finishPostWorkoutPhase"),r.a.createElement("button",{onClick:function(){precorWorkout.setHidePrecorSummaryAfterWorkout(!0)}},"setHidePrecorSummaryAfterWorkout(true)"),r.a.createElement("button",{onClick:function(){precorWorkout.setHidePrecorSummaryAfterWorkout(!1)}},"setHidePrecorSummaryAfterWorkout(false)"),r.a.createElement("button",{onClick:function(){precorWorkout.setBarMessage("THIS IS BAR MESSAGE 2",1)}},"setBarMessage"),r.a.createElement("button",{onClick:function(){precorWorkout.setFeaturedWorkout(JSON.stringify({name:"My Custom Workout",provider:"provider",category:"category"}))}},"setFeaturedWorkout"),r.a.createElement("button",{onClick:function(){precorWorkout.setFeaturedWorkout("")}},'setFeaturedWorkout("")'),r.a.createElement("button",{onClick:function(){precorWorkout.setQuickstartWorkout(JSON.stringify({name:"My Custom Workout",provider:"provider",category:"category"}))}},"setQuickstartWorkout"),r.a.createElement("button",{onClick:function(){precorWorkout.requestSignIn()}},"requestSignIn"),r.a.createElement("button",{onClick:function(){precorWorkout.disableMenus(),document.getElementById("output").innerHTML="disableMenus"}},"disableMenus"),r.a.createElement("button",{onClick:function(){precorWorkout.setDisableMachineControls(!0)}},"setDisableMachineControls(true)"),r.a.createElement("button",{onClick:function(){precorWorkout.setDisableMachineControls(!1)}},"setDisableMachineControls(false)"),r.a.createElement("button",{onClick:function(){document.getElementById("output").innerHTML=precorWorkout.getMetrics()}},"getMetrics"),r.a.createElement("button",{onClick:function(){document.getElementById("output").innerHTML=precorWorkout.getSummaryMetrics()}},"getSummaryMetrics"),r.a.createElement("button",{onClick:function(){document.getElementById("output").innerHTML=precorWorkout.getFitnessEquipmentInfo()}},"getFitnessEquipmentInfo"),r.a.createElement("br",null),r.a.createElement("textarea",{id:"output",cols:"60",rows:"6"}))},l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing,n=!1;null!=o&&(o.onstatechange=function(){console.log("installing Worker state: "+o.state),"activated"===o.state&&(console.log("activated"),n&&t&&t.reload&&t.reload()),"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),console.log("posting skip waiting message"),o.postMessage({type:"SKIP_WAITING"}),n=!0,t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}({onSuccess:function(){console.log("---site is ready for offline"),precorWorkout.setDefaultURL()},reload:function(){console.log("---we need to reload this page to get new changes"),location.reload()}})}},[[45,1,2]]]);
//# sourceMappingURL=main.45de8ec2.chunk.js.map