import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataSecureComponent } from './data-secure/data-secure.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: "Home - Enviroment" },
  { path: 'Impressum', component: ImpressumComponent, title: "Impressum" },
  { path: 'DataSecure', component: DataSecureComponent, title: "Datenschutzvereinbarung" },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
