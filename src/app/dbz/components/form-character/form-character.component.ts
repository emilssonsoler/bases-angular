import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent {

  public character: Character = {
    name: '',
    powerLevel: 0
  };
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {

    if (this.character.name.length ===0) return;
    this.onNewCharacter.emit(this.character);
    this.resetCharacterValues();

  }

  resetCharacterValues(): void {
    this.character = {name:'',powerLevel:0};
  }

}
