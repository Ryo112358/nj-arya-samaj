import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhagavadGeetaaComponent } from './pages/bhagavad-geetaa/bhagavad-geetaa.component';
import { UpanishadComponent } from './pages/upanishad/upanishad.component';
import { VedaYajurComponent } from './pages/veda-yajur/veda-yajur.component';
import { VedaSaamaComponent } from './pages/veda-saama/veda-saama.component';
import { VedaAtharvaComponent } from './pages/veda-atharva/veda-atharva.component';
import { VedaRigComponent } from './pages/veda-rig/veda-rig.component';
import { MandalaComponent } from './pages/veda-rig/mandala/mandala.component';

const routes: Routes = [
    { path: 'bhagavad-geetaa', component: BhagavadGeetaaComponent },
    { path: 'upanishad', component: UpanishadComponent },
    { path: 'veda-rig', component: VedaRigComponent,
        children: [
            { path: 'mandala/:mandalaId', component: MandalaComponent },
            { path: '', redirectTo: 'mandala/1', pathMatch: 'full' }
        ]
    },
    { path: 'veda-yajur', component: VedaYajurComponent },
    { path: 'veda-saama', component: VedaSaamaComponent },
    { path: 'veda-atharva', component: VedaAtharvaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScripturesRoutingModule { }