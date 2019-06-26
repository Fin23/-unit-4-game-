var raiden = {
    raidenHealth: 100,
    raidenAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
    whoRaiden: function(){
        console.log(this);
    }
}
var scorpion = {
    scorpionHealth: 100,
    scorpionAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
    whoScorpion: function(){
        console.log(this);
    }
}
var sweetTooth = {
    sweetToothHealth: 100,
    sweetToothAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
    whoSweetTooth: function(){
        console.log(this);
    }
}
var liuKang = {
    liuKangHealth: 100,
    liuKangAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
    whoIsLiuKang: function(){
        console.log(this);
    }
}
raiden.whoRaiden();
scorpion.whoScorpion();
sweetTooth.whoSweetTooth();
liuKang.whoIsLiuKang();

    console.log(this)


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
        $(" #raiden, #scorpion, #liukang, #sweettooth, #evil-raiden").css({opacity:'0.0'});
        $(" #evil-liukang, #evil-sweettooth, #evil-scorpion").css({opacity:'1.0'});
     
}
function buttonPress2(){
heroArea.innerHTML = "<img src='Images/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#sweettooth, #raiden, #scorpion, #liukang, #evil-sweettooth").css({opacity:'0.0'});
    $("#evil-raiden, #evil-liukang, #evil-scorpion").css({opacity:'1.0'});
   
}
function buttonPress3(){
    heroArea.innerHTML = "<img src='Images/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#scorpion, #liukang, #sweettooth, #raiden, #evil-scorpion").css({opacity:'0.0'});
    $("#evil-raiden, #evil-liukang, #evil-sweettooth").css({opacity:'1.0'});
 
}
function buttonPress4(){
    heroArea.innerHTML = "<img src='Images/liuKang.JPG' width=\'170px\' height=\'145px\'>";
    $("#liukang, #sweettooth, #raiden, #scorpion, #evil-liukang").css({opacity:'0.0'});
    $("#evil-raiden, #evil-sweettooth, #evil-scorpion").css({opacity:'1.0'});
    // 
}
// enemy buttons
function buttonPress1E(){
    enemyArea.innerHTML = "<img src='Images/raiden.JPG' width=\'170px\' height=\'145px\'>";
        $("#evil-raiden").css({opacity:'0.0'});
     
}
function buttonPress2E(){
enemyArea.innerHTML = "<img src='Images/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-sweettooth").css({opacity:'0.0'});
    
   
}
function buttonPress3E(){
    enemyArea.innerHTML = "<img src='Images/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-scorpion").css({opacity:'0.0'});
   
 
}
function buttonPress4E(){
    enemyArea.innerHTML = "<img src='Images/liuKang.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-liukang").css({opacity:'0.0'});
  
    
}





