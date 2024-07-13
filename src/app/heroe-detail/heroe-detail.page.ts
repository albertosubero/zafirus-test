import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeroesService } from '../shared/services/heroes.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ThumbnailComponent } from '../shared/components/thumbnail/thumbnail.component';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.page.html',
  styleUrls: ['./heroe-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, ThumbnailComponent]
})
export class HeroeDetailPage implements OnInit {
  id: string = ''
  heroe: any = {}

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.getHeroeDetails()
  }

  getHeroeDetails() {
    this.heroesService.getHeroeDetail(this.id)
    .subscribe({
      next: (res) => {
        this.heroe = res.data.results[0]
      },
      error: (err) => {
        console.error(err.error)
      }
    });
  }
}
