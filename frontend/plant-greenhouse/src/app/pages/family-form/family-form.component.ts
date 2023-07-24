import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import { Family } from '../../models/family.model';
import {environment} from "../../../assets/environment";
import {ActivatedRoute, Router} from "@angular/router";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-family-form',
  templateUrl: './family-form.component.html',
  styleUrls: ['./family-form.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, NgIf]
})

export class FamilyFormComponent implements OnInit {
  family: Family = new Family();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private httpService: HttpService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    });
  }

  ngOnInit() {
    let familyId = this.activatedRoute.snapshot.paramMap.get('id');
    if (familyId) {
      this.httpService.getById<Family>(environment.FAMILY_URL, familyId).subscribe({
        next: (response) => {
          this.family = response;
          this.populateForm(response);
        },
        error: (error) => {
          console.error('Something went wrong.', error);
        }
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.family.name = formData.name;

      if (this.family.familyId != null) {
        this.httpService.edit<Family>(environment.FAMILY_URL, this.family).subscribe( {
          next: (response) => {
            console.log('Family edited successfully.');
            Promise.resolve().then(() => this.router.navigate(['/family-list']));
          },
          error: (error) => {
            console.error('Something went wrong.', error);
          }
        });
      } else {
        this.httpService.create<Family>(environment.FAMILY_URL, this.family).subscribe( {
          next: (response) => {
            console.log('Family created successfully.');
            Promise.resolve().then(() => this.router.navigate(['/family-list']));
          },
          error: (error) => {
            console.error('Something went wrong.', error);
          }
        });
      }
    }
  }

  private populateForm(family: any) {
    this.form.patchValue({
      name: family.name,
    });
  }

  goToHome() {
    Promise.resolve().then(() => this.router.navigate(['/']));
  }
}
