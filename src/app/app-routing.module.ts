import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutClientComponent } from './layouts/base-layout-client/base-layout-client.component';
import { BaseLayoutAuthComponent } from './layouts/base-layout-auth/base-layout-auth.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:BaseLayoutClientComponent,children:[
    {path:'',component:HomePageComponent}
  ]},
  {path:'',component:BaseLayoutAuthComponent,children:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
