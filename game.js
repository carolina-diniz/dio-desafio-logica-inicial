class Hero {
  name;
  age;
  classe;

  weapons = {
    mago: "magia",
    guerreiro: "espada",
    monge: "artes marciais",
    ninja: "shuriken",
  }

  constructor (name, age, classe) {
    this.name = name;
    this.age = age;
    this.classe = classe;
  }

  atacar () {
    const weapon = this.weapons[this.classe];

    if (!weapon) {
      console.log("Classe ou Weapon não encontrados");

      return;
    }

    console.log(`O ${this.classe} atacou usando ${weapon}`)
  }
}

const mage = new Hero("Antonia", 24, "mago");
const warrior = new Hero("Arthur", 30, "guerreiro");
const monk = new Hero("Lian", 28, "monge");
const ninja = new Hero("Kaito", 22, "ninja");

mage.atacar();
warrior.atacar();
monk.atacar();
ninja.atacar();