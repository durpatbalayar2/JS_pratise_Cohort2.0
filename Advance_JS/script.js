// Design Pattern
//  4. Observer Pattern -> Aisa design pattern jisme ek object ke change hote hi usse conncected saare dusri objs ko automatically notification milna

class Channel {
  constructor() {
    this.suscribers = []; // Blank array suscribers added
  }

  suscribe(user) {
    this.suscribers.push(user);
    user.update(`${user.name} has suscribed the channel`);
  }
  unsuscribe(user) {
    this.suscribers = this.suscribers.filter((sub) => sub !== user);
    user.update(`${user.name} has unsuscribed your channel`);
  }
  notify(message) {
    this.suscribers.forEach((sub) => sub.update(message));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(` ${data}`);
  }
}
// channel obj created
let DBTech = new Channel();
// user objs created
let u1 = new User("Ram");
let u2 = new User("Sita");

DBTech.suscribe(u1);
DBTech.unsuscribe(u2);

