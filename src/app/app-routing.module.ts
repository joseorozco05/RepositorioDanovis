import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectivasListComponent } from './electivas-list/electivas-list.component';
import { ElectivasAddComponent } from './electivas-add/electivas-add.component';



const routes: Routes = [
  {
    path: 'electivaslist',
    component:ElectivasListComponent
  },
  {
    path:'electivasadd',
    component:ElectivasAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
