let text = `
<p class="p-container-sticky">
    <span class="span">Company</span> 
    <span class="span">Flight No.</span> 
    <span class="span">status</span>
    <span class="span">Arriving time</span>
    <span class="span">Origin &#8594 Destination</span> 
</p>`;

let state = ['On-time','Ready-to-land','arrived','take-off','delay'];
let company = ['Turkish','Iran Air','Lufthansa','Mahan','Kish Air'];
let X = ['mashhad','Tehran','isfahan','tabriz','yazd','gorgan','sari'];
let Y = ['istanbul','yerevan','hong kong','florence','turin','dubai'];
let HH=['1','2','3','4','5','6','7','8','9','10','11','12'];
let MM=['00','15','30','45'];
for(let i = 0 ; i < 20 ; i = i+1)
{
    let index1 = Math.floor(Math.random() * state.length);
    let index2 = Math.floor(Math.random() * company.length);
    let index3 = Math.floor(Math.random() * X.length);
    let index4 = Math.floor(Math.random() * Y.length);
    let index5 = Math.floor(Math.random() * MM.length);
    let index6 = Math.floor(Math.random() * HH.length);
    text = text + `<p class="p-container">
     <span class="span"> ${company[index2]}</span> 
     <span class="span">${Math.floor( Math.random(10)*10 +1)}</span> 
     <span class="span">${state[index1]}</span>
     <span class="span"> ${HH[index6]}:${MM[index5]}</span>
     <span class="span"> ${X[index3]} &#8594 ${Y[index4]}</span> 
    </p>`;
    document.getElementById("container").innerHTML=text;

}
