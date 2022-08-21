import { CustomMinDirective } from './directives/custom-min.directive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { TemplateRoutingModule } from './template-routing.module';


@NgModule({
  declarations: [
    BasicosComponent,
    SwitchesComponent,
    DinamicosComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})

export class TemplateModule { }
