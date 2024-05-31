import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EyeExamComponent } from './eye-exam/eye-exam.component';
import { HomeComponent } from './home/home.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AddStockComponent } from './list-stock/add-frame-stock/add-stock.component';
import { AddLensStockComponent } from './list-stock/add-lens-stock/add-lens-stock.component';
import { CustomerRegisterComponent } from './eye-exam/customer-register/customer-register.component';
import { EyeExamFormComponent } from './eye-exam/eye-exam-form/eye-exam-form.component';
import { PurchaseFormComponent } from './purchase/purchase-form/purchase-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-stock', component: ListStockComponent },
  { path: 'eye-exam', component: EyeExamComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'add-frame-stock', component: AddStockComponent },
  { path: 'add-lens-stock', component: AddLensStockComponent },
  { path: 'add-customer', component: CustomerRegisterComponent },
  { path: 'eye-exam-form', component: EyeExamFormComponent },
  { path: 'purchase-form', component: PurchaseFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
