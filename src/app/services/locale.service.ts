import { Injectable, signal } from '@angular/core';

export type Locales = 'en' | 'fr' | 'es';

@Injectable({ providedIn: 'root' })
export class LocaleService {

  private currentLocale = signal<Locales>('es');

  constructor() {
    this.currentLocale.set((
      localStorage.getItem('locale') as Locales) ?? 'es'
    )
  }

  get locale() {
    return this.currentLocale();
  }

  changeLocale(locale: Locales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }

}
