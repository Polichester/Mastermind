
//SELECTORS//

const clickSelector=document.querySelectorAll(".item");
const seleccioSelector=document.querySelector(".seleccio");
const clueselector=document.querySelector(".pista");

//VARIABLES//

const colors=["blau","verd","vermell","rosa","negre","groc","lila"];
let final= Array.from(colors);
final = final.sort(function() {return Math.random() - 0.5});
final.length = final.length - 3
console.log(final);

const ColorSelecionat=[];
let intents=0;

clickSelector.forEach(click => {
    const color=click.classList[1];
    click.addEventListener("click",()=>selectColor(color));
});

function selectColor(color){
    console.log(color);
    const div=document.createElement('div');
    div.classList.add('selection-item');
    div.classList.add(color);
    seleccioSelector.appendChild(div);
    ColorSelecionat.push(color)

    if(ColorSelecionat.length === 4){
        intents++;
        for(const colorSel of ColorSelecionat){
            const hdiv=document.createElement('div');
            hdiv.classList.add('history-item');
            hdiv.classList.add(colorSel);
            clueselector.appendChild(hdiv);
        }

        const encertaula=Encerts(ColorSelecionat);

        for(const encert of encertaula){
            const el=document.createElement('div');
            if(encert==="full"){
                el.classList.add("full");
            }
            else if(encert==="empty"){
                el.classList.add("empty");
            }
            else{
                el.classList.add("half");
            }
            clueselector.appendChild(el);
        }

        ColorSelecionat.length=0;
        seleccioSelector.innerHTML="";
        
        if(encertaula.length === final.length &&  encertaula.every(encert => encert === "full")){
            alert('YOU WIN !!! :V')
        }
        else if(intents>10){
            alert('YOU LOSE !!! ._.')
        }
    }
}

function Encerts(colors){

    const encerts=[];
    const copia=[];
    colors.forEach((color,index)=>{
        if(final[index]===color){
            encerts.push("full");
            copia.push(color);
        }
    })

    colors.forEach((color,index)=>{
        if(!copia.includes(color)&& final.includes(color)){
            encerts.push("half");
        }
    })

    colors.forEach((color,index)=>{
        if(!copia.includes(color) && !final.includes(color)){
            encerts.push("empty");
        }
    })
    return encerts;
}