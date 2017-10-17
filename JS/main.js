
/////////////////////Troll Stuff
var signins
////////////////// Table Clearing
function clear(){
     let ork = document.getElementById('ork')
    ork.classList.toggle('hidden');
    let clear = document.getElementById('people')
    clear.innerHTML= ' ';
    clear.classList.toggle('hidden');
}
///////////////// Data Retrieval
function dumpRetrieve(){
    let names= document.getElementById("dataDump");
    let people= names.textContent;
    let waivered= people.split(" ");
    return waivered
}
////////////////////Input Gatherer
function test() {
    let x = document.getElementById('orc');
    let text = x.value;
    let people= text;
    let waivered= people.split(" ");
    let dataDump = document.getElementById("dataDump");
    dataDump.textContent= text;
    let attendance = document.getElementById('attendance'); 
attendance.textContent= waivered.length;
    alert('Data entered!');
}
/////////////////////View Waivered List command
function exhaustive(){
    clear();
        let drama = dumpRetrieve();
    for (i=0; i<drama.length; i++){
        let people = document.getElementById('people')
        let person = document.createElement('p')
        person.textContent = drama[i];
        people.appendChild(person);
    }
}
////////////////////// Check Waiver Command
function Waiver() {
    let haswaiver = 0;
    let person = prompt("Character name please");
    let drama = dumpRetrieve();
    haswaiver = drama.indexOf(person);
    if (haswaiver >= 0){ 
        alert(person + " has signed a waver! Have fun swinging foam!");
    }
else {
    alert(person + " has no waiver");
    let names= document.getElementById("dataDump");
    names.textContent += " " + person;
}
}

/////////////////////////// Tourney stuff


//////////////////////////// Add to tourney Roster
function tourneyRegister(i){
    let person = prompt('Who would like to sign in for the tournament?');
    let names= document.getElementById(i);
    names.textContent += " " + person;
}

/////////////////////////Tourney Randomizer