import { Component } from '@angular/core';
import { OpticalService } from '../optical.service';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-eye-exam',
  templateUrl: './eye-exam.component.html',
  styleUrls: ['./eye-exam.component.css']
})
export class EyeExamComponent {
  customer = { name: '', address: ''};
  leftEye = { sphere: 0, cylinder: 0 };
  rightEye = { sphere: 0, cylinder: 0 };
  customers: any[] = [];

  constructor(
      private opticalService: OpticalService,
      private router: Router,
  ) { }

  findCustomer() {
      this.opticalService.getCustomers(this.customer.name, this.customer.address).subscribe(data => {
          this.customers = data;
      })
  }

  redirectToRegister() {
      this.router.navigate(['/add-customer']);
  }

  convertEpochToDate(epoch: any): any {
    return this.formatDate(new Date(epoch), "DD/MM/YYYY");
  }

  private formatDate = (timestamp:any, format:any) => {
        const unixTime = timestamp / 1000;
        return moment.unix(unixTime).format(format);
  }

  putPemeriksaanCustomer(index:any, route:any) {
    localStorage.setItem('customerPeriksa', JSON.stringify(this.customers[index]));
    this.router.navigate([route]);
  }
}
