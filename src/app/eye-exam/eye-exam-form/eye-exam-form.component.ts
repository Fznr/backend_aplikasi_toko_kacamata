import { Component, OnInit } from '@angular/core';
import { OpticalService } from '../../optical.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpResponse } from '@angular/common/http';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';

@Component({
  selector: 'app-eye-exam-form',
  templateUrl: './eye-exam-form.component.html',
  styleUrl: './eye-exam-form.component.css'
})
export class EyeExamFormComponent implements OnInit {
  pemeriksaan = { leftSphere: 0, leftCylinder: 0, rightSphere: 0, rightCylinder: 0, customerName: '' };
  customerData: any;

  constructor(
    private opticalService: OpticalService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getLocalStorage();
  }

  eyeExam() {
    let payload = {
      leftSphere: this.pemeriksaan.leftSphere,
      leftCylinder: this.pemeriksaan.leftCylinder,
      rightSphere: this.pemeriksaan.rightSphere,
      rightCylinder: this.pemeriksaan.rightCylinder,
      customerId: this.customerData.id
    }
    this.opticalService.addPemeriksaan(payload).subscribe((response: HttpResponse<any>) => {
      const status: number = response.status;
      if (status == 201) {
        localStorage.removeItem('customerPeriksa');
        this.dialog.open(SuccessDialogComponent, {
          data: {
            title: status,
            message: "Success",
            route: '/eye-exam'
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

  getLocalStorage() {
    let data = localStorage.getItem('customerPeriksa');
    if (data !== null) {
      this.customerData = JSON.parse(data);
    }
    this.pemeriksaan.customerName = this.customerData.nama
  }
}
