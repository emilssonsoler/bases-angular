import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {id: uuid(), name:'Krillin', powerLevel: 500},
    {id: uuid(), name: 'Numero 17', powerLevel:1000},
    {id: uuid(), name: 'Goku', powerLevel: 10000}
  ];

  newCharacter(character: Character):void {

    const newCharacter = {id: uuid(), ...character}
    this.characters.push(newCharacter);
    // console.log('mainpage: ',char);

  }

   OnDeleteCharacterById(id:string):void{
    console.log(id);
    this.characters = this.characters.filter(character => character.id !== id);
  }


}
