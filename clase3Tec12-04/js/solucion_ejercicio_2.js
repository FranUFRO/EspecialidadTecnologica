//Ejercicio de practica Javascript

//Objeto base para los personajes
class Character {
  constructor(name, health, damage) {
    //Atributos
    this.name = name;
    this.health = health;
    this.maxhealth = health;
    this.damage = damage;
  }
  //Verifica si el personaje esta vivo
  isAlive() {
    return this.health > 0;
  }

  //Ataca a otro personaje seleccionado
  attack(target) {
    console.log(`${this.name} deals ${this.damage} DMG to ${target.name}`);
    target.health -= this.damage;
  }

  //Retorna la información actual del personaje
  status() {
    return ` ${this.health}/${this.maxhealth}`;
  }
}

//Función para combatir

document.addEventListener("keydown", function(event) {
    const tecla= event.key;
    console.log("se presiona una tecla: " + tecla);
    if(tecla=="x"){
        turno_hero(hero,enemy);
    } else{
        if(tecla=="n"){
            turno_enemy(hero,enemy);
        }
    }
});

function actualizarBarraVida(vidaActual, vidaMaxima,relleno_vida) {
    var porcentajeVida = (vidaActual / vidaMaxima) * 100;
    relleno_vida.style.width=  porcentajeVida + "%";
}

function turno_hero(hero,enemy){
    if (hero.isAlive() && enemy.isAlive()) {
        hero.attack(enemy);  
        document.getElementById("vida_heroe").innerText = "HP: " + hero.status();
        document.getElementById("vida_enemigo").innerText ="HP: " + enemy.status();
      } else {
        console.log(`hero died!`);
    }
    actualizarBarraVida(hero.health,hero.maxhealth,document.getElementById("relleno_vida_heroe"));
    actualizarBarraVida(enemy.health,enemy.maxhealth,document.getElementById("relleno_vida_enemy"));
}

function turno_enemy(hero,enemy){
    if (enemy.isAlive() && hero.isAlive()) {
        enemy.attack(hero);
        console.log(hero.status());
        console.log(enemy.status());
        
        document.getElementById("vida_heroe").innerText = "HP: " + hero.status();
        document.getElementById("vida_enemigo").innerText ="HP: " + enemy.status();
      } else {
        console.log(`enemy died!`);
    }
    actualizarBarraVida(hero.health,hero.maxhealth,document.getElementById("relleno_vida_heroe"));
    actualizarBarraVida(enemy.health,enemy.maxhealth,document.getElementById("relleno_vida_enemy"));
}
//Creación de personajes
const hero = new Character("Heroe", vida_random(), 110);
const enemy = new Character("Limo", vida_random(), 40);

function vida_random(){
    return Math.floor(Math.random() * 10000);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vida_heroe").innerText = "HP: " + hero.status();
    document.getElementById("vida_enemigo").innerText ="HP: " + enemy.status();
});
