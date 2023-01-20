import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowTableComponent } from './login/show-table/show-table.component';

const routes: Routes = [{
  path:'',component:LoginComponent
},
{
  path:'get',component:ShowTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
