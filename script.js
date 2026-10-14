'use strict';
(function(){
const L=["Ce site est écrit à 12 % par des humains, le reste c'est du café.","Fait vérifié : un mardi, c'est juste un lundi qui a pris confiance.","Aujourd'hui, personne n'a rien demandé. Nous publions quand même.","Mon béret a un master en philosophie. Moi, rien du tout.","Info exclusive : le mot « exclusif » est utilisé à titre exclusif.","Savais-tu que les chaussettes orphelines ont leur propre syndicat ?","Ce café s'appelle Peanuts. Je ne sais pas pourquoi. Ne me regarde pas."];
const b=document.getElementById('bulle');let i=0;
function dit(){let n;do{n=Math.floor(Math.random()*L.length)}while(n===i);i=n;b.textContent=L[n]}
document.getElementById('mascot').addEventListener('click',dit);
document.getElementById('go').addEventListener('click',dit);
})();
