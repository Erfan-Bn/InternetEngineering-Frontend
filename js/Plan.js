arr=['A','B','C','','D','E','F','G','H'];
for (let i = 1 ; i <= 19 ; i=i+1)
    {
        let text = "";
        for(let j =0 ; j <= 6 ; j=j+1)
        {
            if(j==3)
            {
                
                text = text + `&nbsp &nbsp &nbsp &nbsp`;
                
            }
            else{
                text = text + `
                <input type="checkbox" id="${i+arr[j]}">
                <label for="${i+arr[j]}" class="${i+arr[j]}">
                ${i+arr[j]}</label>`;
                }
        
        }
        document.getElementById("All-container").getElementsByClassName("a")[i].innerHTML=`<p class="container">${text}</p>`;
    }
var selected=[];
function alpha(){
    
    // let selected=[];
    let id = '';
for (let i = 1 ; i <= 19 ; i = i+1)
    {
        for (let j = 0 ; j <= 6 ; j = j+1)
        {
            id = String(i)+arr[j];
            if((j == 3)){
                continue;}
            if(document.getElementById(id).checked)
                {
                    selected.push(id);
                    // document.getElementsByClassName(id)[0].style.backgroundColor="gray";
                    // document.getElementsByClassName(id)[0].innerHTML="&#x274c";
                    // console.log(selected);
                }
            
        }
    }
if(selected.length != 0) {beta(selected);} 
}
function beta(selected)
{
    document.getElementById("All-container").style.display="none";
    document.getElementById("reserved-list").style.display="flex";
    let text = '';
    for(let i =0 ; i < selected.length; i=i+1)
    {
        text = text + `<div class='ticket-info'>
        <h2 class="h2">${selected[i]}</h2>
        <label for="${selected[i]}-name">Passenger name: </label>
        <input type="text" id="${selected[i]}-name">
        <br><br>
        <label for="${selected[i]}-lastname">Passenger lastname: </label>
        <input type="text" id="${selected[i]}-lastname">
        <br><br>
        <label for="${selected[i]}-ID">Passenger National ID: </label>
        <input type="text" id="${selected[i]}-ID">
        </div>`;

    }
    document.getElementById("reserved-list").innerHTML=text;
    // document.getElementById("btn").remove();
    document.getElementsByClassName("btn")[0].innerHTML = `
    <button type="submit" onclick="gamma()" id="btn">Final Submit</button>
    `;
}
var names=[];
var lastnames=[];
var IDs=[];
function gamma(){

    for(let i = 0 ; i < selected.length ; i = i+1)
    {
        let ElementId = selected[i]+"-name";
        names[i]=document.getElementById(ElementId).value;

        ElementId = selected[i]+"-lastname";
        lastnames[i]=document.getElementById(ElementId).value;

        ElementId = selected[i]+"-ID";
        IDs[i]=document.getElementById(ElementId).value;
        
        
    }
    let id = '';
    for (let i = 1 ; i <= 19 ; i = i+1)
        {
            for (let j = 0 ; j <= 6 ; j = j+1)
            {
                id = String(i)+arr[j];
                if((j == 3)){
                    continue;}
                if(document.getElementById(id).checked)
                    {
                        // selected.push(id);
                        document.getElementsByClassName(id)[0].style.backgroundColor="gray";
                        // document.getElementsByClassName(id)[0].innerHTML="&#x274c";
                        document.getElementsByClassName(id)[0].innerHTML=
                        names.shift()+"<br>"+lastnames.shift()+"<br>"+IDs.shift();
                        // console.log(selected);
                    }
                
            }
        }
    document.getElementById("All-container").style.display="block";
    document.getElementById("reserved-list").style.display="none";
    document.getElementsByClassName("btn")[0].innerHTML=`
    <button type="submit" onclick="alpha()" id="btn">Submit</button>
    `;
    document.getElementById("btn").style.visibility="hidden";
}
