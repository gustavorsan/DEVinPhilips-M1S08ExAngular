import { Component } from '@angular/core';


@Component({
  selector: 'ntp-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  notifications = [
    {
      title: 'Atenção',
      description: 'A data de entrega é até o dia 04-11-2022',
      date: '01-11-2022'
    },
    {
      title: 'Atenção',
      description:  'A data de entrega é até o dia 04-11-2022',
      date: '03-11-2022'
    },
    {
      title: 'Aviso',
      description: 'projeto entregue com sucesso',
      date: '04-11-2022'
    }
  ]
}
