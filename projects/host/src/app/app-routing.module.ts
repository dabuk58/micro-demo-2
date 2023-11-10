import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'mfe1',
    loadChildren: () => import('remoteapp1/homeModule').then((m) => m.HomeModule)
  },
  {
    path: 'mfe2',
    loadChildren: () => import('remoteapp2/homeModule').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
