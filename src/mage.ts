import { Champion } from "./champion";
import { Knight } from "./knight";
import { Archer } from "./archer";
import { Mage } from "./mage";

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

  public protect(): void {
    
  }
  public heal(targets: Champion[]): void {
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
      if (this.hpMax==this.hp) {
        console.log('Vous êtes déjà full life !')
      }else if(this.hpMax>this.hp){
        let difference = this.hpMax-this.hp
        if (power<=difference) {
          this.hp==this.hpMax
          console.log('Vous êtes maintenant full life !')
        } else {
          this.hp+=power
          console.log('Vous avez été heal de '+power+' hp !')
        }
      }
    }
  }
}
