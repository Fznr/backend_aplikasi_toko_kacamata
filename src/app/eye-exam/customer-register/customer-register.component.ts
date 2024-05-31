import { Component } from '@angular/core';
import { OpticalService } from '../../optical.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpResponse } from '@angular/common/http';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css'
})
export class CustomerRegisterComponent {
  customer = { nama: '', alamat: '', tanggalLahir: '', tempatLahir: '' };

  constructor(
      private opticalService: OpticalService,
      private dialog: MatDialog
  ) { }

  addCustomer() {
    this.opticalService.addCustomer(this.customer).subscribe( (response: HttpResponse<any>) => {
      const status: number = response.status;
      if (status == 201) {
        this.dialog.open(SuccessDialogComponent, {
          data : {
            title: status,
            message: "Success",
            route: '/eye-exam'
          }
        })
      }
    }, (err) => {
      this.dialog.open(ErrorDialogComponent, {
          data : {
            title: err.status,
            message: err.error.message
          }
      })
    })
  }
}
