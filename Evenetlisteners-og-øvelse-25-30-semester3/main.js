//Eventlisteners

//Nummer 1 click:
let EvL1 = document.querySelector("#EvList1");

let mystiskKnap = function(){
    alert("It's coarse and rough and irritating, and it gets everywhere");
} 
EvL1.addEventListener("click", mystiskKnap);

//Nummer 2 mouseover:
let farveSkift = document.querySelector(".h3Farve");

function over(){
    const divEv1 = document.querySelector("#div1");
    divEv1.style.color ="cyan";
}
farveSkift.addEventListener("mouseover", over);

//Nummer 3 doubleklik:
const changeSize = document.querySelector("aside");


changeSize.addEventListener('dblclick', function(){
    changeSize.classList.toggle('large');
});

//Nummer 4 wheel:
let scale = 1;
const el = document.querySelector("#scale");

function zoom(event) {
    event.preventDefault();

    //sætter delTaY'en til -0.01, da man scroller op for at forstørre.
    scale += event.deltaY * -0.01;

    // Restriktioner på skaleringen
    scale = Math.min(Math.max(.125, scale), 4);

    // Anvend scale-metoden
    el.style.transform = `scale(${scale})`;
}
el.addEventListener('wheel', zoom);

//Nummer 5 + 6 (blur + focus)
const form = document.querySelector("#form");

form.addEventListener("focus", function(event){
    event.target.style.backgroundColor = "red";
}, true);

form.addEventListener("blur", function(event){
    event.target.style.backgroundColor = "pink";
}, true);

//Nummer 7, ingen højreklik - contextmenu

const noRightClick = document.querySelector("#ingenHøjreKlik");

noRightClick.addEventListener('contextmenu', function(noClick){
    noClick.preventDefault();
})


//øvelse 25
/*Skriv et JavaScript program som henter 6 paragraphs elementer på 6 forskellige måder:
getElementById, querySelector(#id), getElementsByTagname, querySelector(tagname), getElementsByClassName, querySelector(.className).
    Console.log elementer efter du har hentet dem og se dem i konsollen og reflekter over hvorfor det er nemmere at bruge querySelector. 
*/

let element1 = document.getElementById("ID1");
let element2 = document.querySelector("#ID2");
let element3 = document.getElementsByTagName("h3");
let element4 = document.querySelector("h4");
let element5 = document.getElementsByClassName("Klasse1");
let element6 = document.querySelector(".Klasse2");

console.log(element1.innerHTML);
console.log(element2.innerHTML);
console.log(element3[0].innerHTML);
console.log(element4.innerHTML);
console.log(element5[0].innerHTML);
console.log(element6.innerHTML);


//Øvelse 25.2
/*Skriv et JavaScript program som henter et tomt paragraph tag i din HTML vha.en query selector.Paragraph - tagget skal udfyldes med dit navn vha.JavaScript.

    Hint: innerText*/
let mitNavn = document.querySelector("#mitNavn");
let fNavn = "Sara Nikoline";
let eNavn = "Schou Andreasen";

mitNavn.innerText = `Mit navn er ${fNavn} ${eNavn}`;

//Øvelse 26
/* Skriv et JavaScript program som henter en knap vha. klassen “button1”.  Brug queryselector til at hente knappen. Når der klikkes på knappen, skal der eksekveres en funktion som laver en alert ud på siden hvor der står “button1”.

Hint: document.querySelector(“.button1”);
 */

 let button1 = document.querySelector(".button1");

const knap1 = function(){
        alert("button1");
} 
button1.addEventListener("click", knap1);

//Øvelse 27
/*Skriv et JavaScript program som henter en knap vha et ID “id1”. På knappen skal der stå “stikkontakt. Brug querySelector til at hente knappen. Når der klikkes på knappen, skal der eksekveres en funktion som ændrer baggrundsfarven i body-elementet fra sort til gul.

Hint: document.querySelector(“#button1”)
 */

let kontakt = document.querySelector("#id1");
let erFarvet = false;


kontakt.addEventListener("click", function(){
    if(erFarvet){
        document.body.style.backgroundColor ="yellow";
        erFarvet = false;
    } else{
        document.body.style.backgroundColor ="black";
        erFarvet = true;
    }
});


//Øvelse 28
/*Skriv et JavaScript program som henter fem ens class elementer i 5 forskellige tomme p-tags. Tilføj teksten knap1, knap2, knap3, knap4 og knap5 i hvert p-tag med JavaScript. Tilføj en
EventListener på hvert p-tag. For hver gang der klikkes på en af knap skal den fortælle hvilket p-tags der klikkes på.

Hint: document.querySelectorAll(“.classname”)
Hint: brug foreach metoden på elementer som du henter ind
 */

 let alleKnapper = document.querySelectorAll(".pTagKnap");
 let addOne = 1;

     alleKnapper.forEach(function(alleKnapper){
        alleKnapper.innerHTML = ("knap" + " " + addOne);
        addOne += 1;
        alleKnapper.addEventListener('click', function(){
             alert(alleKnapper.innerHTML);
        })
    }) 

//Øvelse 28.1

/*Skriv et JavaScript program som har tre Div-elementer med samme klasse på hvert Div-element. Skriv “Rip” i første element, “Rap” i andet element og “Rup” i tredje element.
 Hent alle tre Div elementer med querySelectorAll og loop igennem elementerne med en foreach. Tilføj en klasse på Rap-element, som ændrer stylingen. Tilføj en EventListener
på Rup element, som aktiverer en Alert hvor der står: “Rup”.*/

rNavne = document.querySelectorAll(".rNavn");
console.log(rNavne);

rNavne.forEach(function(paaEventyr){
    switch(paaEventyr.innerHTML){
        case "Rip":
            paaEventyr.innerHTML=`<div class="nyClass"> Rip </div>`;
            let nyKlasse = document.querySelector(".nyClass");
            nyKlasse.style.backgroundColor = "grey";
            nyKlasse.style.color = "red";
            break;
        case "Rap":
            rNavne[1].addEventListener("click", function(){
                alert("Rup");
            });
            break;
        
        case "Rup":

        break;
            
    }

})

//Øvelse 28.2

/* Skriv et JavaScript med et array af fem navne. Brug et forEach loop til at loope igennem arrayet, tilføj html og en klasse til hvert index arrayet og udskriv det i en tom Div på siden. 
Bestem selv hvordan klassen skal styles og hvilket element som skal udskrives i den tomme div.

Hint: TomDivElement += ´<p class=”className”> {$.index}</p>`;
*/

let navn = ["Jacob", "Lisbeth", "Søs", "Lars", "Karl"];

let div = document.querySelector("#tomDiv");

navn.forEach(function(tomDiv){
    div.innerHTML = `<div class="nyKlasseTom"> ${navn} </div>`;
    let nyKlasse1 = document.querySelector(".nyKlasseTom");
    nyKlasse1.style.backgroundColor = "pink";
    nyKlasse1.style.font = "italic bold 20px arial,serif";

})

//Øvelse 29
/*Skriv et JavaScript program som henter to tal fra to forskellige input-felter. Tilføj også en select-liste med mulighederne for at vælge:  plus, minus og gange. Tilføj ydermere en knap med teksten “resultat”. Tilføj også en paragraph til at vise resultatet.
Du har nok gættet det! - øvelsen går ud på at lave en lommeregner med de nævnte elementer.
 */

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let select = document.querySelector("#udregn");
let buttonUdregner = document.querySelector("#knap-1");
let resultat = document.querySelector("#resultat");


buttonUdregner.addEventListener("click", function () {
    let værdi1 = Number(input1.value);
    let værdi2 = Number(input2.value);

    switch (select.value) {

        case "+":
            resultat.innerHTML = værdi1 + værdi2;
            break;

        case "-":
            resultat.innerHTML = værdi1 - værdi2;
            break;

        case "*":
            resultat.innerHTML = værdi1 * værdi2;
            break;
        default:
            
            break;
    }
})

//Print resultatet ud
resultat.innerHTML = "";