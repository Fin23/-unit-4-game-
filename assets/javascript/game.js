var raiden = {
    raidenHealth: 200,
    raidenAttack: 50,
    enemyHealth: 100,
    enemyAttack: 10,
    whoRaiden: function(){
        console.log(this);
    },
    raidenStats:function(){
        console.log(this.raidenHealth + " " + this.raidenAttack);
    }
};
var scorpion = {
    scorpionHealth: 110,
    scorpionAttack: 20,
    enemyHealth: 100,
    enemyAttack: 10,
    whoScorpion: function(){
        console.log(this);
    },
    scorpionStats:function(){
        console.log(this.scorpionHealth + " " + this.scorpionAttack);
    }
};
var sweetTooth = {
    sweetToothHealth: 130,
    sweetToothAttack: 10,
    enemyHealth: 100,
    enemyAttack: 10,
    whoSweetTooth: function(){
        console.log(this);
    },
    sweetToothStats:function(){
        console.log(this.sweetToothHealth + " " + this.sweetToothAttack);
    }
};
var liuKang = {
    liuKangHealth: 100,
    liuKangAttack: 45,
    enemyHealth: 100,
    enemyAttack: 10,
    whoIsLiuKang: function(){
        console.log(this);
    },
    liuKangStats:function(){
        console.log(this.liuKangHealth + " " + this.liuKangAttack);
    }
};

//console logs all parts of the object
raiden.whoRaiden();
scorpion.whoScorpion();
sweetTooth.whoSweetTooth();
liuKang.whoIsLiuKang();

//console logs hero stats
raiden.raidenStats();
scorpion.scorpionStats();
sweetTooth.sweetToothStats();
liuKang.liuKangStats();

    console.log(this)


//Dom manipulation
//find hero area to put 1st clicked character in
var heroArea = document.getElementById('hero-area');
var enemyArea = document.getElementById('enemy-area')
var heroStats = document.getElementById('hero-stats');
var enemyStats = document.getElementById('enemy-stats');

//functions to put characters stats in correct areas




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





