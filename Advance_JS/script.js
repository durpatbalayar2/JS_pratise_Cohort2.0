// Opps Pratise

//1

class Pencil {
  constructor(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.innerHTML = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }

  erase() {
    let allH1 = document.querySelectorAll("h1");

    allH1.forEach((element) => {
      if(element.style.color === this.color){
      element.remove();
      }
    });
  }
}

let p1 = new Pencil("Natraj", 10, "black");
let p2 = new Pencil("Doms", 15, "red");
