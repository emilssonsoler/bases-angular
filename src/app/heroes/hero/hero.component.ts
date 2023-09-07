import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number =34;

  get CapitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }
  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeName(newName:string = 'spider-man'):void{
    this.name= newName;
  }

  changeAge(newAge:number = 16): void{
    this.age=newAge;
  }

}
