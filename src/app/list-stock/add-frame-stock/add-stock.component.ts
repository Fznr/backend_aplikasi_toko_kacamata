import { Component } from '@angular/core';
import { OpticalService } from '../../optical.service';
import { HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import { error } from 'console';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
  frame = { brand: '', frameType: '', price: '0', stock: 0 };
  lens = { sphere: 0, cylinder: 0, };

  constructor(
    private opticalService: OpticalService,
    private dialog: MatDialog
  ) { }

  addFrame() {
    this.opticalService.addFrame(this.frame).subscribe((response: HttpResponse<any>) => {
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
