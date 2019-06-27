var raiden = {
    raidenHealth: 200,
    raidenAttack: 50,
    enemyRaidenHealth: 100,
    enemyRaidenAttack: 20,
    whoRaiden: function(){
        console.log(this);
    },
    raidenStats:function(){
        console.log(this.raidenHealth + " " + this.raidenAttack);
    },
    enemyRaidenStats:function(){
        console.log(this.enemyRaidenHealth + " " + this.enemyRaidenAttack);
    }
};
var scorpion = {
    scorpionHealth: 110,
    scorpionAttack: 20,
    enemyScorpionHealth: 160,
    enemyScorpionAttack: 30,
    whoScorpion: function(){
        console.log(this);
    },
    scorpionStats:function(){
        console.log(this.scorpionHealth + " " + this.scorpionAttack);
    },
    enemyScorpionStats:function(){
        console.log(this.enemyScorpionHealth + " " + this.enemyScorpionAttack);
    }
};
var sweetTooth = {
    sweetToothHealth: 130,
    sweetToothAttack: 10,
    enemySweetToothHealth: 150,
    enemySweetToothAttack: 70,
    whoSweetTooth: function(){
        console.log(this);
    },
    sweetToothStats:function(){
        console.log(this.sweetToothHealth + " " + this.sweetToothAttack);
    },
    enemySweetToothStats:function(){
        console.log(this.enemySweetToothHealth + " " + this.enemySweetToothAttack);
    }
};
var liuKang = {
    liuKangHealth: 100,
    liuKangAttack: 45,
    enemyLiuKangHealth: 100,
    enemyLiuKangAttack: 10,
    whoIsLiuKang: function(){
        console.log(this);
    },
    liuKangStats:function(){
        console.log(this.liuKangHealth + " " + this.liuKangAttack);
    },
    enemyLiuKangStats:function(){
        console.log(this.enemyLiuKangHealth + " " + this.enemyLiuKangAttack);
    }
};

var heroAttack = [50, 20, 10, 45];
var heroHealth =[];
var enemyAttack = [20, 30, 70, 10];
var enemyHealth = [100, 160, 150, 100];
console.log(heroAttack);
console.log(enemyAttack);

//console logs all parts of the object
raiden.whoRaiden();
scorpion.whoScorpion();
sweetTooth.whoSweetTooth();
liuKang.whoIsLiuKang();

//console logs hero stats and enemy stats
raiden.raidenStats();
raiden.enemyRaidenStats();
scorpion.scorpionStats();
scorpion.enemyScorpionStats();
sweetTooth.sweetToothStats();
sweetTooth.sweetToothStats();
liuKang.liuKangStats();
liuKang.liuKangStats();

    console.log(this)


//Dom manipulation
//find hero area to put 1st clicked character in
var heroArea = document.getElementById('hero-area');
var enemyArea = document.getElementById('enemy-area')
var heroStats = document.getElementById('hero-stats');
var enemyStats = document.getElementById('enemy-stats');






// function for button click to pick characters and insert into hero area
function buttonPress1(){
    heroArea.innerHTML = "<img src='Images/raiden.JPG' width=\'170px\' height=\'145px\'>";
        $(" #raiden, #scorpion, #liukang, #sweettooth, #evil-raiden").css({opacity:'0.0'});
        $(" #evil-liukang, #evil-sweettooth, #evil-scorpion").css({opacity:'1.0'});
        raiden.raidenStats();
       //raiden.raidenHealth;
 
    let heroHealth =[raiden.raidenHealth, raiden.raidenAttack];
      console.log(heroHealth);
  
        
       

}
function buttonPress2(){
heroArea.innerHTML = "<img src='Images/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#sweettooth, #raiden, #scorpion, #liukang, #evil-sweettooth").css({opacity:'0.0'});
    $("#evil-raiden, #evil-liukang, #evil-scorpion").css({opacity:'1.0'});
    heroAttack = sweetTooth.sweetToothStats();
 
  let heroHealth =[sweetTooth.sweetToothHealth, sweetTooth.sweetToothAttack];
    console.log(heroHealth);
}
function buttonPress3(){
    heroArea.innerHTML = "<img src='Images/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#scorpion, #liukang, #sweettooth, #raiden, #evil-scorpion").css({opacity:'0.0'});
    $("#evil-raiden, #evil-liukang, #evil-sweettooth").css({opacity:'1.0'});
    heroAttack = scorpion.scorpionStats();
    
  let heroHealth =[scorpion.scorpionHealth, scorpion.scorpionAttack];
    console.log(heroHealth);
}
function buttonPress4(){
    heroArea.innerHTML = "<img src='Images/liuKang.JPG' width=\'170px\' height=\'145px\'>";
    $("#liukang, #sweettooth, #raiden, #scorpion, #evil-liukang").css({opacity:'0.0'});
    $("#evil-raiden, #evil-sweettooth, #evil-scorpion").css({opacity:'1.0'}); 
    heroAttack = liuKang.liuKangStats();
   
  let heroHealth =[liuKang.liuKangHealth, liuKang.liuKangAttack];
    console.log(heroHealth);
}
// enemy buttons
function buttonPress1E(){
    enemyArea.innerHTML = "<img src='Images/raiden.JPG' width=\'170px\' height=\'145px\'>";
        $("#evil-raiden").css({opacity:'0.0'}); 
        enemyAttack = raiden.enemyRaidenStats();   
}
function buttonPress2E(){
enemyArea.innerHTML = "<img src='Images/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-sweettooth").css({opacity:'0.0'});
    enemyAttack = sweetTooth.enemySweetToothStats();  
}
function buttonPress3E(){
    enemyArea.innerHTML = "<img src='Images/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-scorpion").css({opacity:'0.0'});
    enemyAttack = scorpion.enemyScorpionStats();  
}
function buttonPress4E(){
    enemyArea.innerHTML = "<img src='Images/liuKang.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-liukang").css({opacity:'0.0'});
    enemyAttack = liuKang.enemyLiuKangStats();  
}

$("#fight").on("click",function(){
            alert("D.D.D.D.DUEL!!");
});





