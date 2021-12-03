import { Champion } from "./champion";
import { Knight } from "./knight";
import { Archer } from "./archer";

export class Mage extends Champion {
  constructor(
    firstName: string,
    lastName: string,
    atk: number,
    def: number,
    hp: number
  ) {
    super(firstName, lastName, 1, atk, def, hp);
  }
  public healSomeone(targets: Champion[]): void {
    let power = 3
    let target: Champion

    console.log('Qui voulez-vous heal ?')
    let alive = targets.filter((champion)=>{
      champion.isAlive()
    })
    console.log('Voici les champions encore en vie !')
    alive.forEach((champion, index)=>{
      if (champion instanceof Knight) {
        console.log(index+' - '+champion.getName()+' le chevalier')
      }else if(champion instanceof Archer){
        console.log(index+' - '+champion.getName()+' l\'archer')
      }else if(champion instanceof Mage && champion !== this){
        console.log(index+' - '+champion.getName()+' le mage')
      }else if(champion instanceof Mage && champion !== this){
        console.log(index+' - '+ 'Vous-même')
      }
    })

    let input = prompt();

    if(input){
      target = alive[input]
      this.heal(target)
    }
  }
  
  public heal(target: Champion): void {
    let power = 3

      if (target.hpMax==target.hp) {
        console.log('Vous êtes déjà full life !')
      }else{
        let difference = target.hpMax-target.hp
        if (power>=difference) {
          target.hp=target.hpMax
          console.log('Vous êtes maintenant full life !')
        } else {
          target.hp+=power
          console.log('Vous avez été heal de '+power+' hp !')
        }
      }
    
  }

}
