import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ThumbnailComponent {
  @Input() thumbnail!: { path: string, extension: string }
  @Input() isThumbnail: boolean = false
  
  constructor() { }

  getThumbnail() {
    return `${this.thumbnail?.path}.${this.thumbnail?.extension}`
  }
}
