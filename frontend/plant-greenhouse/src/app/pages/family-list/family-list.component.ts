import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import { Family } from '../../models/family.model';
import { Plant } from '../../models/plant.model';
import {environment} from "../../../assets/environment";
import {ActivatedRoute, Router} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent {
  families: Family[] = [
  ];

  plants: Array<Plant> = [];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loadAllFamilies();
    this.loadAllPlants();
  }

  private loadAllFamilies() {
    this.httpService.getAll<Family>(environment.FAMILY_URL).subscribe({
      next: (response) => {
        this.families = response;
      },
      error: (error) => {
        console.error('Something went wrong.', error);
      }
    });
  }

  private loadAllPlants() {
    this.httpService.getAll<Plant>(environment.PLANT_URL).subscribe( {
      next: (response) => {
        this.plants = response;
      },
      error: (error) => {
        console.error('Something went wrong.', error);
      }
    });
  }

  createFamily() {
    Promise.resolve().then(() => this.router.navigate(['/family-create']));
  }

  editFamily(family: Family) {
    Promise.resolve().then(() => this.router.navigate(['/family-edit', family.familyId]));
  }

  deleteFamily(family: Family) {
    const existingPlant = this.checkPlants(<number>family.familyId);

    if (existingPlant) {
      console.log("Cannot delete a family of a plant.");
      this.showAlert('Cannot delete a family of a plant');
    } else {
      this.httpService.deleteById<Family>(environment.FAMILY_URL, <number>family.familyId).subscribe( {
        next: (response) => {
          console.log('Family deleted successfully.');
          this.loadAllFamilies();
        },
        error: (error) => {
          console.error('Something went wrong.', error);
        }
      });
    }
  }

  private checkPlants(inputFamilyId: number): boolean {
    const existingPlant = this.plants.find(plant => plant.family?.familyId === inputFamilyId);

    if (existingPlant) {
      console.log("found");
      return true;
    } else {
      return false;
    }
  }

  showAlert(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }

  goToHome() {
    Promise.resolve().then(() => this.router.navigate(['/']));
  }
}
