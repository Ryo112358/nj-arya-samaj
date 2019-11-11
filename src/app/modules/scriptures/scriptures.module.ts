import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScripturesRoutingModule } from './scriptures-routing.module';

import { ScripturesService } from './services/scriptures.service';

import { BhagavadGeetaaComponent } from './pages/bhagavad-geetaa/bhagavad-geetaa.component';
import { UpanishadComponent } from './pages/upanishad/upanishad.component';
import { VedaRigComponent } from './pages/veda-rig/veda-rig.component';
import { VedaYajurComponent } from './pages/veda-yajur/veda-yajur.component';
import { VedaSaamaComponent } from './pages/veda-saama/veda-saama.component';
import { VedaAtharvaComponent } from './pages/veda-atharva/veda-atharva.component';
import { MandalaComponent } from './pages/veda-rig/mandala/mandala.component';



@NgModule({
  declarations: [BhagavadGeetaaComponent, UpanishadComponent, VedaRigComponent, VedaYajurComponent, VedaSaamaComponent, VedaAtharvaComponent, MandalaComponent],
  imports: [
    CommonModule,
    ScripturesRoutingModule
  ],
  providers: [ ScripturesService ]
})
export class ScripturesModule { }
