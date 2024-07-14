import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeroesService } from '../shared/services/heroes.service';
import { RouterModule } from '@angular/router';
import { ThumbnailComponent } from '../shared/components/thumbnail/thumbnail.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { heroeCustomData, heroesI } from '../shared/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.page.html',
  styleUrls: ['./heroe-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, ThumbnailComponent]
})
export class HeroeDetailPage implements OnDestroy {
  id: string = ''
  heroe!: heroesI
  subscription!: Subscription
  heroeAvailableInfo: heroeCustomData[] = []
  isLoading: boolean = false

  constructor(private heroesService: HeroesService) {
    this.subscription = this.heroesService.heroe$.subscribe(data => {
      this.heroe = data
      if (this.heroe.id) {
        this.getHeroeAvailableInfo()
      }
    })
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

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
