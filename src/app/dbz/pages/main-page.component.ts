import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService){}

  get characterList(): Character[]{
    return [...this.dbzService.characters];
  }

  OnDeleteCharacter (id: string): void{
    this.dbzService.OnDeleteCharacterById(id);
  }

  onNewCharacter(character : Character): void{
    this.dbzService.newCharacter(character);
  }
}
