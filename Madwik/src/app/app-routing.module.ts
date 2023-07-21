import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DepositComponent } from './deposit/deposit.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { RecieptComponent } from './reciept/reciept.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'deposit', component:DepositComponent},
  {path:'registerUser', component:RegisterUserComponent},
  {path:'reciept', component:RecieptComponent},
  {path:'prescription', component:PrescriptionComponent},
  {path:'delivery', component:DeliveryComponent},
  {path:'summary', component:SummaryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
