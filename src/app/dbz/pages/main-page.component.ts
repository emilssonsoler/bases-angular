import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  public characters: Character[] = [
    {name:'Krillin', powerLevel: 500},
    {name: 'Numero 17', powerLevel:1000},
    {name: 'Goku', powerLevel: 10000}
  ];

  onNewCharacter(char: Character):void {
    this.characters.push(char);
    // console.log('mainpage: ',char);

  }

   OnDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }

}
