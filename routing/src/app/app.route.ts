import {HomeComponent} from "./home/home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus/:name', component: AboutusComponent}
];
