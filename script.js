// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const btnElement = document.getElementById('play-button');
const mainElement = document.querySelector('main');
const gridElement = getElement('div', 'grid');
const resultElement = getElement('span', 'result');
btnElement.addEventListener('click', function(){
gridElement.innerHTML = '';
mainElement.appendChild(gridElement);
const bombList = bombGenerator('bombList', 16, 100);
let inGame = true;
let rightCounter = 0;
for(let i = 1; i <= 100; i++){
    const divElement = getElement('div', 'cell');
    if(bombList.includes(i)){
        divElement.innerHTML += '<i class="fa-solid fa-bomb d-none"></i>';
    }
    
    
    divElement.addEventListener('click', function(){
        if(inGame === true){
            
            if(bombList.includes(i)){
                inGame = false;
                divElement.innerHTML += '<i class="fa-solid fa-bomb"></i>';
                divElement.classList.add('explode');
                resultElement.innerHTML += `Hai perso! PUNTEGGIO: ${rightCounter}`;
                mainElement.appendChild(resultElement);
                // console.log(parseInt(i) + '!!!');
                // console.log(`Hai perso! Punteggio: ${rightCounter}`);
            } else{
                
                if(!divElement.classList.contains('active')){
                    ++rightCounter;
                }
                divElement.classList.add('active');
                console.log(parseInt(i));
            }
            
            if(rightCounter === 100 - bombList.length){
                inGame = false;
                resultElement.innerHTML += `Hai vinto! PUNTEGGIO: ${rightCounter}`;
                mainElement.appendChild(resultElement);
                divElement.classList.add('active');
                // console.log(`HAI VINTO DAJEEEE! Punteggio: ${rightCounter}`);
            }
        }
        else{
            return;
        }

        });
        
    gridElement.appendChild(divElement);
    
}
});

/**
 * 
 * Creates a DOM element
 * 
 * @param {string} tagName  write a string, it'll be implemented as a Node in html
 * @param {string} className  write a class you want your tag to have
 * @returns a html node with given class
 */
function getElement(tagName, className){
    const childElement = document.createElement(tagName);
    childElement.classList.add(className);

    return childElement;
}




function bombGenerator(nameArray, totalElements, maxGenerable){
    nameArray = [];

    while(nameArray.length < totalElements){
        const newElement = Math.floor(Math.random() * maxGenerable + 1);
        if(!nameArray.includes(newElement)){
            nameArray.push(newElement);
        }
    }
    return nameArray;

}
