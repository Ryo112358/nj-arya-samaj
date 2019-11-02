import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared';

import { HomeComponent } from './pages/home/home.component';
import { HumanitarianWorkComponent } from './pages/humanitarian-work/humanitarian-work.component';
import { FuturePlansComponent } from './pages/future-plans/future-plans.component';
import { ExecutiveBodyComponent } from './pages/executive-body/executive-body.component';

import { AboutPageResolve } from 'app/core/services/resolves';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'humanitarian-work', component: HumanitarianWorkComponent },
  { path: 'future-plans', component: FuturePlansComponent },
  { path: 'executive-body', component: ExecutiveBodyComponent, resolve: { executiveBody: AboutPageResolve} },
  { path: 'library', loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule) },
  { path: 'scriptures', loadChildren: () => import('./modules/scriptures/scriptures.module').then(m => m.ScripturesModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AboutPageResolve]
})
export class AppRoutingModule { }
