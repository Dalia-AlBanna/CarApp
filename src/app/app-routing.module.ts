import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddcarComponent } from './addcar/addcar.component';

const routes: Routes = [
  
  {path: 'addcar' , component:AddcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
