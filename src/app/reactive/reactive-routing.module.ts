import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';

const routes: Routes = [
{
  path: '',
  children: [
    { path: 'basicos', component: BasicosComponent },
    { path: 'dinamicos', component: BasicosComponent },
    { path: 'switches', component: BasicosComponent },
    { path: '**', redirectTo: 'basicos' }
  ]
}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ReactiveRoutingModule { }
