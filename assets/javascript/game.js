var raiden = {
    heroHealth: 100,
    heroAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
}
var scorpion = {
    heroHealth: 100,
    heroAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
}
var sweetTooth = {
    heroHealth: 100,
    heroAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
}
var liuKang = {
    heroHealth: 100,
    heroAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
}


//Dom manipulation
//find hero area to put 1st clicked character in
var heroArea = document.getElementById('hero-area')
// function for button click to pick characters
function buttonPress1(){
    heroArea.innerHTML = "<img src='Images/raiden.JPG' width=\'170px\' height=\'145px\'>";
}
function buttonPress2(){
    heroArea.innerHTML = "<img src='Images/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
}
function buttonPress3(){
    heroArea.innerHTML = "<img src='Images/scorpion.JPG' width=\'170px\' height=\'145px\'>";
}
function buttonPress4(){
    heroArea.innerHTML = "<img src='Images/liuKang.JPG' width=\'170px\' height=\'145px\'>";
}




