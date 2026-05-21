import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {

  transform(value: Color | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }

    return Color[value] ?? '';
  }

}
