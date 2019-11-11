import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './pages/library-home/library-home.component';
import { LinksComponent } from './pages/links/links.component';
import { PrayersComponent } from './pages/prayers/prayers.component';
import { BhajansComponent } from './pages/bhajans/bhajans.component';
import { SanskaaraComponent } from './pages/sanskaara/sanskaara.component';

/* -------------------------- Resolvers -------------------------- */
import { ArticlesResolver } from './services/resolvers';
import { PrayersResolver } from './services/resolvers';
import { BhajansResolver } from './services/resolvers';
import { SanskaarasResolver } from './services/resolvers';
import { LinksResolver } from './services/resolvers';

const routes: Routes = [
    {
        path: 'main', component: LibraryHomeComponent,
        resolve: { resolvedData: ArticlesResolver }
    },
    {
        path: 'prayers', component: PrayersComponent,
        resolve: { resolvedData: PrayersResolver }
    },
    {
        path: 'bhajans', component: BhajansComponent,
        resolve: { resolvedData: BhajansResolver }
    },
    {
        path: 'sanskaara', component: SanskaaraComponent,
        resolve: { resolvedData: SanskaarasResolver }
    },
    {
        path: 'links', component: LinksComponent,
        resolve: { resolvedData: LinksResolver }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ArticlesResolver,
        PrayersResolver,
        BhajansResolver,
        SanskaarasResolver,
        LinksResolver
    ]
})
export class LibraryRoutingModule { }