import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import { Plant } from '../../models/plant.model';
import {environment} from "../../../assets/environment";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent {
  plants: Plant[] = [
  ];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.loadAllPlants();
  }

  private loadAllPlants() {
    this.httpService.getAll<Plant>(environment.PLANT_URL).subscribe({
      next: (response) => {
        this.plants = response;
      },
      error: (error) => {
        console.error('Something went wrong.', error);
      }
    });
  }

  createPlant() {
    Promise.resolve().then(() => this.router.navigate(['/plant-create']));
  }

  editPlant(plant: Plant) {
    Promise.resolve().then(() => this.router.navigate(['/plant-edit', plant.plantId]));
  }

  deletePlant(plant: Plant) {
    this.httpService.deleteById<Plant>(environment.PLANT_URL, <number>plant.plantId).subscribe( {
      next: (response) => {
        console.log('Plant deleted successfully.');
        this.loadAllPlants();
      },
      error: (error) => {
        console.error('Something went wrong.', error);
      }
    });
  }

  goToHome() {
    Promise.resolve().then(() => this.router.navigate(['/']));
  }
}
