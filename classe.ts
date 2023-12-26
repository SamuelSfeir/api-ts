class Animal implements AnimalInterface {
  constructor(private name: string, private raca: string) {}

  public latir() {
    console.log(`${this.name} está latindo: Au au`);
  }

  public setName(name: string) {
    if(name !== 'Osvaldo') {
    this.name = name;
    }
  }

  public getName() {
    return this.name;
  }
}

class Cachorro {
  constructor(private Animal: AnimalInterface) {}
}


const bob = new Animal('Bob', 'Vira-lata');

console.log(bob.getName());
bob.setName('Osvaldo');
console.log(bob.getName());
bob.setName('Osvaldinho');
console.log(bob.getName());



bob.latir();

interface AnimalInterface {
  idade?: number;
  latir(): void;
}


class Produtos {
  constructor(private name: string, private price: number, private stock: number) {}

  setPrice(price: number) {
    if(price > 0) {
      this.price = price;
    }
  }
}