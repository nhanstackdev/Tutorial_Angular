import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mockdata/mock-heroes';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  constructor() { }

  ngOnInit(): void {
  }
}
