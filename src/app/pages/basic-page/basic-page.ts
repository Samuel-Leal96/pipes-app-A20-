import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { Locales, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  localService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('samuel');
  nameUpper = signal('SAMUEL');
  fullName = signal('SaMueL LeAl VeGA');

  customDate = signal(new Date());

  tickindDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  })

  changeLocale(locale: Locales) {
    console.log('Locale: ', locale);
    this.localService.changeLocale(locale);
  }

}
