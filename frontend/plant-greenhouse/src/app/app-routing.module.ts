import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { PlantListComponent } from './pages/plant-list/plant-list.component';
import { PlantFormComponent } from './pages/plant-form/plant-form.component';

import { FamilyListComponent } from './pages/family-list/family-list.component';
import { FamilyFormComponent } from './pages/family-form/family-form.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'plant-list', component: PlantListComponent },
  { path: 'plant-create', component: PlantFormComponent },
  { path: 'plant-edit/:id', component: PlantFormComponent },
  { path: 'family-list', component: FamilyListComponent },
  { path: 'family-create', component: FamilyFormComponent },
  { path: 'family-edit/:id', component: FamilyFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
