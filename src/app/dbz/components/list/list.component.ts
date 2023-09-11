import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{name:'trunks', powerLevel: 9000}];

  @Output()
  public OnDeleteCharacter : EventEmitter <number> = new EventEmitter();

  emitDeleteChacarcter(index: number):void{
     this.OnDeleteCharacter.emit(index);

  }
}
