import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import { Plant } from '../../models/plant.model';
import { Family } from '../../models/family.model';
import {environment} from "../../../assets/environment";
import {ActivatedRoute, Router} from "@angular/router";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, NgIf]
})
export class PlantFormComponent implements OnInit {
  plant: Plant = new Plant();
  families: Array<Family> = [];
  familyId: any;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private httpService: HttpService, private router: Router, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      species: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      nativeRegion: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      familyId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  ngOnInit() {
    let plantId = this.activatedRoute.snapshot.paramMap.get('id');
    if (plantId) {
      this.httpService.getById<Plant>(environment.PLANT_URL, plantId).subscribe({
        next: (response) => {
          this.plant = response;
          if (this.plant.family !== null) {
            this.familyId = this.plant.family.familyId;
            this.plant.familyId = this.plant.family.familyId;
          }
          this.populateForm(response);
        },
        error: (error) => {
          console.error('Something went wrong.', error);
        }
      });
    }

    this.httpService.getAll<Family>(environment.FAMILY_URL).subscribe( {
      next: (response) => {
        this.families = response;
      },
      error: (error) => {
        console.error('Something went wrong.', error);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.plant.name = formData.name;
      this.plant.species = formData.species;
      this.plant.nativeRegion = formData.nativeRegion;
      this.plant.familyId = formData.familyId;

      if (formData.familyId !== null) {
        const familyExists = this.checkExistingFamily(formData.familyId);

        if (familyExists) {
          if (this.plant.plantId != null) {
            this.httpService.edit<Plant>(environment.PLANT_URL, this.plant).subscribe( {
              next: (response) => {
                console.log('Plant edited successfully.');
                Promise.resolve().then(() => this.router.navigate(['/plant-list']));
              },
              error: (error) => {
                console.error('Something went wrong.', error);
              }
            });
          } else {
            this.httpService.create<Plant>(environment.PLANT_URL, this.plant).subscribe( {
              next: (response) => {
                console.log('Plant created successfully.');
                Promise.resolve().then(() => this.router.navigate(['/plant-list']));
              },
              error: (error) => {
                console.error('Something went wrong.', error);
              }
            });
          }
        } else {
          console.log("Family with this id does not exist.");
          this.showAlert('Family with this id does not exist');
        }
      }
    }
  }

  private populateForm(plant: any) {
    this.form.patchValue({
      name: plant.name,
      species: plant.species,
      nativeRegion: plant.nativeRegion,
      familyId: plant.familyId
    });
  }

  private checkExistingFamily(inputFamilyId: number): boolean {
    const existingFamily = this.families.find(family => family.familyId == inputFamilyId);
    if (existingFamily) {
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
