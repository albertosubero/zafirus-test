import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../shared/services/heroes.service';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { ThumbnailComponent } from '../shared/components/thumbnail/thumbnail.component';
import { heroesI } from '../shared/interfaces/heroes.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'heroes.page.html',
  styleUrls: ['heroes.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, ThumbnailComponent],
})
export class HeroesPage implements OnInit {
  heroesList: heroesI[] = []
  isLoading: boolean = false

  constructor(private heroesService: HeroesService, private router: Router) {}

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

  setHeroeData(heroe: heroesI) {
    this.heroesService.setHeroeData(heroe)
    this.router.navigate(['heroe-detail'])
  }
}
