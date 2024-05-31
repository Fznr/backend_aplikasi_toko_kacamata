import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EyeExamComponent } from './eye-exam/eye-exam.component';
import { HomeComponent } from './home/home.component';
import { AddStockComponent } from './list-stock/add-frame-stock/add-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AddLensStockComponent } from './list-stock/add-lens-stock/add-lens-stock.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerRegisterComponent } from './eye-exam/customer-register/customer-register.component';
import { EyeExamFormComponent } from './eye-exam/eye-exam-form/eye-exam-form.component';
import { OpticalService } from './optical.service';
import { PurchaseFormComponent } from './purchase/purchase-form/purchase-form.component';
// import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddStockComponent,
    EyeExamComponent,
    PurchaseComponent,
    ListStockComponent,
    AddLensStockComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    CustomerRegisterComponent,
    EyeExamFormComponent,
    PurchaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    OpticalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
