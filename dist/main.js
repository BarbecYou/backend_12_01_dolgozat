(()=>{"use strict";var e={660:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Planet=void 0,t.Planet=class{constructor(e,t,n,l){this.name=e,this.age=t,this.size=n,this.waterContent=l}}}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}(()=>{const e=n(660),t=[];document.getElementById("submitButton").addEventListener("click",(n=>{n.preventDefault(),document.getElementById("errorContainer").innerHTML="";let l=document.getElementById("planetNameInput").value.toString().trim(),o=document.getElementById("planetAgeInput").valueAsNumber,r=document.getElementById("planetSizeInput").valueAsNumber,u=document.getElementById("planetWaterContentInput").valueAsNumber;const s=/^[ a-zA-Z]{2,}$/.test(l),a=o>0,m=r>=1500,d=u>=0&&u<=100;console.log(s),console.log(a),console.log(m),console.log(d);let c="A ";if(s&&a&&m&&d)t.push(new e.Planet(l,o,r,u)),document.getElementById("sumNumber").textContent=`A felvett bolygók száma: ${t.length}`,document.getElementById("sumAge").textContent="A bolygók átlagos életkora: \n        "+t.reduce(((e,t)=>e+t.age),0)/t.length;else{s||(c+="név, "),a||(c+="életkor, "),m||(c+="átmérő, "),d||(c+="vízfelület"),c+=" mező(k) hibásan lettek kitöltve!";let e=document.createElement("p");e.style.color="red",e.textContent=c,document.getElementById("errorContainer").appendChild(e)}}))})()})();