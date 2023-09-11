import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{ name: 'trunks', powerLevel: 9000 }];

  @Output()
  public OnDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteChacarcter(id?: string): void {
    if (!id) return;
    this.OnDeleteCharacter.emit(id);

  }
}
