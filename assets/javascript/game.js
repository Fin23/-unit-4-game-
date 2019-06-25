var raiden = {
    raidenHealth: 100,
    raidenAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
}
var scorpion = {
    scorpionHealth: 100,
    scorpionAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
}
var sweetTooth = {
    sweetToothHealth: 100,
    sweetToothAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
}
var liuKang = {
    liuKangHealth: 100,
    liuKangAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
}



//Dom manipulation
//find hero area to put 1st clicked character in
var heroArea = document.getElementById('hero-area');
var enemyArea = document.getElementById('enemy-area')
var heroStats = document.getElementById('hero-stats');
var enemyStats = document.getElementById('enemy-stats');
var showTextContent = enemyStats.textContent;

// $(document).ready(function(){
//     $("button").click(function(){
//         $("li").text("Enemy Health: 100" +" " + "Enemy Attack: 10");
//     });
// });
// function for button click to pick characters and insert into hero area
function buttonPress1(){
    heroArea.innerHTML = "<img src='Images/raiden.JPG' width=\'170px\' height=\'145px\'>";
        $("#enemy-health").css({opacity:'0.0'});
        $("#enemy-attack").css({opacity:'0.0'});
        $("#raiden").css({opacity:'0.0'});
        $("#scorpion").css({opacity:'0.0'});
        $("#liukang").css({opacity:'0.0'});
        $("#sweettooth").css({opacity:'0.0'})
}
function buttonPress2(){
heroArea.innerHTML = "<img src='Images/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#enemy-health").css({opacity:'0.0'});
    $("#enemy-attack").css({opacity:'0.0'});
    $("#sweettooth").css({opacity:'0.0'});
    $("#raiden").css({opacity:'1.0'});
    $("#scorpion").css({opacity:'1.0'});
    $("#liukang").css({opacity:'1.0'}); 
}
function buttonPress3(){
    heroArea.innerHTML = "<img src='Images/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#enemy-health").css({opacity:'0.0'});
    $("#enemy-attack").css({opacity:'0.0'});
    $("#scorpion").css({opacity:'0.0'});
    $("#liukang").css({opacity:'1.0'});
    $("#sweettooth").css({opacity:'1.0'});
    $("#raiden").css({opacity:'1.0'});
}
function buttonPress4(){
    heroArea.innerHTML = "<img src='Images/liuKang.JPG' width=\'170px\' height=\'145px\'>";
    $("#enemy-health").css({opacity:'0.0'});
    $("#enemy-attack").css({opacity:'0.0'});
    $("#liukang").css({opacity:'0.0'});
    $("#sweettooth").css({opacity:'1.0'});
    $("#raiden").css({opacity:'1.0'});
    $("#scorpion").css({opacity:'1.0'});
}
// if(buttonPress1()){
//     heroArea.
// }





