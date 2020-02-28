import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CarnetComponent } from './carnet/carnet.component';


const routes: Routes = [
  {path: 'contact/:i', component: ContactComponent},
  {path: '', component: CarnetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
