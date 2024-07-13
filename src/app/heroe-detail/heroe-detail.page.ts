import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeroesService } from '../shared/services/heroes.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ThumbnailComponent } from '../shared/components/thumbnail/thumbnail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.page.html',
  styleUrls: ['./heroe-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, ThumbnailComponent]
})
export class HeroeDetailPage implements OnInit {
  id: string = ''
  heroe: any = {}
  heroeAvailableInfo: any = {}
  isLoading: boolean = false

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.getHeroeDetails()
  }

  getHeroeDetails() {
    this.isLoading = true
    this.heroesService.getHeroeDetail(this.id)
    .subscribe({
      next: (res) => {
        this.heroe = res.data.results[0]
        this.getHeroeAvailableInfo()
        this.isLoading = false
      },
      error: (err) => {
        console.error(err.error)
        this.isLoading = false
      }
    });
  }

  getHeroeAvailableInfo() {
    this.heroeAvailableInfo = [
      {
        data: 'comics',
        available: this.heroe.comics.available
      },
      {
        data: 'series',
        available: this.heroe.series.available
      },
      {
        data: 'stories',
        available: this.heroe.stories.available
      }
    ]
  }
}
