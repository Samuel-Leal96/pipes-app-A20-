import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 40,
  address: 'Ottawa, Canada'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 30,
  address: 'Toronto, Canada'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //* i18nSelect
  client = signal(client1);

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //* i18nPlural

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  });

  clients = signal([
    'Samuel',
    'Sara',
    'Samantha',
    'Santiago',
    'Sonia',
    'Sergio',
    'Sofía',
  ]);

  deleteClient(): void {
    this.clients.update(clients => {
      clients.pop();
      return clients;
    });
  }


}
