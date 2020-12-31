import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAndEditComponent } from './courses/components/add-and-edit/add-and-edit.component';
import { ListComponent } from './courses/components/list/list.component';
import { ViewComponent } from './courses/components/view/view.component';
import { HomeComponent } from './home/home.component';
import { ResourceInventoryComponent } from './resources/components/resource-inventory/resource-inventory.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'courses', component:ListComponent},
  {path:'courses/view/:id', component:ViewComponent},
  {path:'courses/add/:id', component:AddAndEditComponent},//edir
  {path:'courses/add', component:AddAndEditComponent},//add
  {path:'resources', component:ResourceInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
