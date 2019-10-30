import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidenteListComponent } from './components/residente-list/residente-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/administracion',
    pathMatch: 'full'
  },
  {
    path:'administracion',
    component: ResidenteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
