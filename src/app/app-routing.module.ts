import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAndEditComponent } from './courses/components/add-and-edit/add-and-edit.component';
import { ListComponent } from './courses/components/list/list.component';
import { ViewComponent } from './courses/components/view/view.component';
import { HomeComponent } from './home/home.component';
import { ResourceInventoryComponent } from './resources/components/resource-inventory/resource-inventory.component';
import { AddAndEditTopicComponent } from './topics/components/add-and-edit-topic/add-and-edit-topic.component';
import { UserAddAndEditComponent } from './users/components/user-add-and-edit/user-add-and-edit.component';
import { UserLoginComponent } from './users/components/user-login/user-login.component';
import { UserProfileComponent } from './users/components/user-profile/user-profile.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'courses/:userId', component:ListComponent},
  {path:'courses/view/:id', component:ViewComponent},
  {path:'courses/add/:id', component:AddAndEditComponent},//edit
  {path:'courses/add', component:AddAndEditComponent},//add
  {path:'topics/add', component:AddAndEditTopicComponent},//add
  {path:'resources', component:ResourceInventoryComponent},
  {path:'users', component:UserLoginComponent},
  {path:'users/create-account', component:UserAddAndEditComponent},
  {path:'users/user-profile/:id', component:UserProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
