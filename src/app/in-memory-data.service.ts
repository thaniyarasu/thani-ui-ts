export class InMemoryDataService {
  createDb() {

var heroes = [];
for (let i = 0; i < 5; i++) {
    let hero = {
       id:i,
       name:"Name-"+i.toString()
    };
    heroes.push(hero);
}


//    let range = (value) => { 
//    let a = []; for(let i = 0; i < value; i++) { a.push(i+1) } return a; }

    return { heroes };
  }
}
