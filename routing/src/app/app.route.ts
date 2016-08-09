import {HomeComponent} from "./home/home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  {path: '/', component: HomeComponent},
  {path: '/aboutus', component: AboutusComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
