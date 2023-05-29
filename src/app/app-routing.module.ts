import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackerComponent } from './packer/packer.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: PackerComponent }, 
  { path: 'home', component: AppComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
