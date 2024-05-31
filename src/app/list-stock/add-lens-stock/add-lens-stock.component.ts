import { Component } from '@angular/core';
import { OpticalService } from '../../optical.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-lens-stock',
  templateUrl: './add-lens-stock.component.html',
  styleUrl: './add-lens-stock.component.css'
})
export class AddLensStockComponent {
  lens = { sphere: 0, cylinder: 0, price: '0', stock: 0 };

  constructor(
    private opticalService: OpticalService,
    private dialog: MatDialog
  ) { }

  addLens() {
    this.opticalService.addLens(this.lens).subscribe((response: HttpResponse<any>) => {
      const status: number = response.status;
      if (status == 201) {
        this.dialog.open(SuccessDialogComponent, {
          data: {
            title: status,
            message: "Success",
            route: '/list-stock'
          }
        })
      }
    }, (err) => {
      this.dialog.open(ErrorDialogComponent, {
        data: {
          title: err.status,
          message: err.error.message
        }
      })
    })
  }
}
