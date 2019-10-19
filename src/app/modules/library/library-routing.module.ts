import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './pages/library-home/library-home.component';
import { LinksComponent } from './pages/links/links.component';
import { PrayersComponent } from './pages/prayers/prayers.component';
import { BhajansComponent } from './pages/bhajans/bhajans.component';
import { SanskaaraComponent } from './pages/sanskaara/sanskaara.component';

const routes: Routes = [
    { path: 'main', component: LibraryHomeComponent},
    { path: 'prayers', component: PrayersComponent },
    { path: 'bhajans', component: BhajansComponent },
    { path: 'sanskaara', component: SanskaaraComponent },
    { path: 'links', component: LinksComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibraryRoutingModule { }