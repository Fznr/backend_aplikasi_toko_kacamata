import { Component } from '@angular/core';
import { OpticalService } from '../optical.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  pemeriksaanData = {nama: '', tanggalPemeriksaan: ''};
  pemeriksaanDatas: any[] = [];

  constructor(
      private opticalService: OpticalService,
      private router: Router,
  ) { }

  findPemeriksaan() {
    this.opticalService.findPemeriksaan(this.pemeriksaanData.nama, this.pemeriksaanData.tanggalPemeriksaan).subscribe(data => {
      if (data.length !== 0) {
        this.pemeriksaanDatas = data
      } else {
        alert('Data pemeriksaan tidak ditemukan');
      }
    })
  }

  putPurchase(index:any, route:any) {
    localStorage.setItem('pemeriksaanDatas', JSON.stringify(this.pemeriksaanDatas[index]));
    this.router.navigate([route]);
  }

  convertEpochToDate(epoch: any): any {
    return this.formatDate(new Date(epoch), "DD/MM/YYYY");
  }

  private formatDate = (timestamp:any, format:any) => {
        const unixTime = timestamp / 1000;
        return moment.unix(unixTime).format(format);
  }
}
