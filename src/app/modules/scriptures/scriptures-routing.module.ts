import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhagavadGeetaaComponent } from './pages/bhagavad-geetaa/bhagavad-geetaa.component';
import { UpanishadComponent } from './pages/upanishad/upanishad.component';
import { VedaYajurComponent } from './pages/veda-yajur/veda-yajur.component';
import { VedaSaamaComponent } from './pages/veda-saama/veda-saama.component';
import { VedaAtharvaComponent } from './pages/veda-atharva/veda-atharva.component';
import { VedaRigComponent } from './pages/veda-rig/veda-rig.component';
import { MandalaComponent } from './pages/veda-rig/mandala/mandala.component';

/* -------------------------- Resolvers -------------------------- */
import { MandalaResolver } from './services/resolvers';
import { BhagavadGeetaaResolver } from './services/resolvers';
import { UpanishadResolver } from './services/resolvers';
import { AtharvaVedaResolver } from './services/resolvers';
import { SaamaVedaResolver } from './services/resolvers';
import { YajurVedaResolver } from './services/resolvers';

const routes: Routes = [
    {
        path: 'bhagavad-geetaa', component: BhagavadGeetaaComponent,
        resolve: { resolvedData: BhagavadGeetaaResolver }
    },
    {
        path: 'upanishad', component: UpanishadComponent,
        resolve: { resolvedData: UpanishadResolver }
    },
    {
        path: 'veda-atharva', component: VedaAtharvaComponent,
        resolve: { resolvedData: AtharvaVedaResolver }
    },
    { path: 'veda-rig', component: VedaRigComponent,
        children: [
            {
                path: 'mandala/:mandalaId',
                component: MandalaComponent,
                resolve: { mandala: MandalaResolver }
            },
            { path: '', redirectTo: 'mandala/1', pathMatch: 'full' }
        ]
    },
    {
        path: 'veda-saama', component: VedaSaamaComponent,
        resolve: { resolvedData: SaamaVedaResolver }
    },
    {
        path: 'veda-yajur', component: VedaYajurComponent,
        resolve: { resolvedData: YajurVedaResolver }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        MandalaResolver,
        BhagavadGeetaaResolver,
        UpanishadResolver,
        AtharvaVedaResolver,
        SaamaVedaResolver,
        YajurVedaResolver
    ]
})
export class ScripturesRoutingModule { }