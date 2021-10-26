import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmComponent } from './components/checkout/confirm/confirm.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirm',  component: ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
