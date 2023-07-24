import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToPlants() {
    Promise.resolve().then(() => this.router.navigate(['/plant-list']));
  }

  goToFamilies() {
    Promise.resolve().then(() => this.router.navigate(['/family-list']));
  }
}
