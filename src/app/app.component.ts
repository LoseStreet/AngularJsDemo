import { Component } from '@angular/core';

import { Hero } from './page/hero';
import { HeroService } from './page/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  };  

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
