import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortByPipe'
})

export class HeroSortByPipe implements PipeTransform {

  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    console.log(sortBy);

    if (sortBy === null) {
      return value;
    }



    switch (sortBy) {
      case 'name':
        return [...value].sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return [...value].sort((a, b) => Number(b.canFly) - Number(a.canFly));
      case 'color':
        return [...value].sort((a, b) => a.color - b.color);
      case 'creator':
        return [...value].sort((a, b) => a.creator - b.creator);
      default:
        return value;
    }

  }

}
