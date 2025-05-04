import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages';

import { HomeComponent } from './pages/home/home.component';
import { HumanitarianWorkComponent } from './pages/humanitarian-work/humanitarian-work.component';
import { FuturePlansComponent } from './pages/future-plans/future-plans.component';
import { ExecutiveBodyComponent } from './pages/executive-body/executive-body.component';

import { AllEventsDataResolver } from 'app/core/services/resolvers';
import { AboutPageResolver } from 'app/core/services/resolvers';
import { HumanitarianWorkPageResolver } from 'app/core/services/resolvers';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    resolve: { eventsJSON: AllEventsDataResolver }
  },
  {
    path: 'executive-body', component: ExecutiveBodyComponent,
    resolve: { resolvedData: AboutPageResolver }
  },
  {
    path: 'humanitarian-work', component: HumanitarianWorkComponent,
    resolve: { resolvedData: HumanitarianWorkPageResolver }
  },
  { path: 'future-plans', component: FuturePlansComponent },
  { path: 'library', loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule) },
  { path: 'scriptures', loadChildren: () => import('./modules/scriptures/scriptures.module').then(m => m.ScripturesModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  providers: [
    AllEventsDataResolver,
    AboutPageResolver,
    HumanitarianWorkPageResolver
  ]
})
export class AppRoutingModule { }
