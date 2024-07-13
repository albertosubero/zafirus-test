import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../shared/services/heroes.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ThumbnailComponent } from '../shared/components/thumbnail/thumbnail.component';

@Component({
  selector: 'app-home',
  templateUrl: 'heroes.page.html',
  styleUrls: ['heroes.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, ThumbnailComponent],
})
export class HeroesPage implements OnInit {
  heroesList: any[] = []

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.getHeroesList()
  }

  getHeroesList() {
    this.heroesService.getHeroesList()
    .subscribe({
      next: (res) => {
        this.heroesList = res?.data?.results
      },
      error: (err) => {
        console.error(err.error)
      }
    });
  }
}
