import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GazComponent } from './chart/gaz/gaz.component';
import { TemperaturaComponent } from './chart/temperatura/temperatura.component';
import { UmiditateComponent } from './chart/umiditate/umiditate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [
  { path: '', component: ViewPageComponent },
  { path: 'result/:id', component: DashboardComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
