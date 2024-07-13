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
  isLoading: boolean = false

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.getHeroesList()
  }

  getHeroesList() {
    this.isLoading = true
    this.heroesService.getHeroesList()
    .subscribe({
      next: (res) => {
        this.heroesList = res?.data?.results
        this.isLoading = false
      },
      error: (err) => {
        console.error(err.error)
        this.isLoading = false
      }
    });
  }
}
