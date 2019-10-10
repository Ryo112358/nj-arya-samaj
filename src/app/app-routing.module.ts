import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared';

import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { LinksComponent } from './pages/links/links.component';
import { PrayersComponent } from './pages/prayers/prayers.component';
import { BhajansComponent } from './pages/bhajans/bhajans.component';
import { SanskaaraComponent } from './pages/sanskaara/sanskaara.component';
import { HumanitarianWorkComponent } from './pages/humanitarian-work/humanitarian-work.component';
import { FuturePlansComponent } from './pages/future-plans/future-plans.component';
import { ExecutiveBodyComponent } from './pages/executive-body/executive-body.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent},
  { path: 'library/prayers', component: PrayersComponent },
  { path: 'library/bhajans', component: BhajansComponent },
  { path: 'library/sanskaara', component: SanskaaraComponent },
  { path: 'library/links', component: LinksComponent },
  { path: 'humanitarian-work', component: HumanitarianWorkComponent },
  { path: 'future-plans', component: FuturePlansComponent },
  { path: 'executive-body', component: ExecutiveBodyComponent },
  { path: 'scriptures', loadChildren:'./scriptures/scriptures.module#ScripturesModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
