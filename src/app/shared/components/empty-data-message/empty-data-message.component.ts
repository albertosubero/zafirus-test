import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-empty-data-message',
  templateUrl: './empty-data-message.component.html',
  styleUrls: ['./empty-data-message.component.scss'],
  standalone: true,
  imports: [IonicModule, TranslateModule],
})
export class EmptyDataMessageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
