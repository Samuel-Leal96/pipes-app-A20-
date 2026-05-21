import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {


  name = signal('Samuel Leal')

  upper = signal(false);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

}
