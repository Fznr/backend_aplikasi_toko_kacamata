import { Component, OnInit } from '@angular/core';
import { OpticalService } from '../../optical.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.css'
})
export class PurchaseFormComponent implements OnInit {
  pemeriksaanData: any;
  frameDatas: any[] = [];
  lensDatas: any[] = [];
  lensPurchased: any[] = [];
  framePurchased: any[] = [];
  penjualan = { totalHarga: '', diskon: 0, pemeriksaanId: '', customerId: '' }
  penjualanItemShow = { itemType: '', quantity: 0, hargaSatuan: '', totalHarga: '', itemId: '', label: '' }
  penjualanItemDtos: any[] = [];
  totalHarga = 0;

  constructor(
    private opticalService: OpticalService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getDataLocalStorage();
    this.getFrames();
    this.getLens();
  }

  getTotalBelanja() {
    this.penjualanItemDtos = [];
    this.totalHarga = 0;
    for (let i = 0; i < this.framePurchased.length; i++) {
      let penjualanItemDto = {
        itemType: "frame",
        quantity: this.frameDatas[this.framePurchased[i]].quantity,
        hargaSatuan: this.frameDatas[this.framePurchased[i]].price,
        totalHarga: (1 - (this.penjualan.diskon / 100)) * this.frameDatas[this.framePurchased[i]].price * this.frameDatas[this.framePurchased[i]].quantity,
        itemId: this.frameDatas[this.framePurchased[i]].id
      }
      this.totalHarga += Number(penjualanItemDto.totalHarga);
      this.penjualanItemDtos.push(penjualanItemDto);
    }
    for (let i = 0; i < this.lensPurchased.length; i++) {
      let penjualanItemDto = {
        itemType: "lens",
        quantity: this.lensDatas[this.lensPurchased[i]].quantity,
        hargaSatuan: this.lensDatas[this.lensPurchased[i]].price,
        totalHarga: (1 - (this.penjualan.diskon / 100)) * this.lensDatas[this.lensPurchased[i]].price * this.lensDatas[this.lensPurchased[i]].quantity,
        itemId: this.lensDatas[this.lensPurchased[i]].id
      }
      this.totalHarga += Number(penjualanItemDto.totalHarga);
      this.penjualanItemDtos.push(penjualanItemDto);
      this.penjualan.totalHarga = this.totalHarga.toString();
      this.penjualan.customerId = this.pemeriksaanData.customerId;
      this.penjualan.pemeriksaanId = this.pemeriksaanData.id;
    }
  }

  submitPurchase() {
    let payload = {
      penjualanDto: this.penjualan,
      penjualanItemDtos: this.penjualanItemDtos
    }
    this.opticalService.postPurchase(payload).subscribe(response => {
      const status: number = response.status;
      if (status == 201) {
        this.dialog.open(SuccessDialogComponent, {
          data: {
            title: status,
            message: "Success",
            route: ''
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

  getDataLocalStorage() {
    let data = localStorage.getItem('pemeriksaanDatas');
    if (data !== null) {
      this.pemeriksaanData = JSON.parse(data);
    }
  }

  convertDescription(data: any, index: any) {
    this.penjualanItemDtos.length
    let frameLength = this.framePurchased.length
    let lensLength = this.lensPurchased.length
    if (data.itemType === 'frame') {
      if (index <= frameLength - 1)
        return `Frame ${this.frameDatas[this.framePurchased[index]].brand} tipe ${this.frameDatas[this.framePurchased[index]].frameType}`
    }
    if (frameLength > 0) {
      return `Lensa Sphere ${this.lensDatas[this.lensPurchased[index - frameLength]].sphere} Cylinder ${this.lensDatas[this.lensPurchased[index - frameLength]].cylinder}`
    } else {
      return `Lensa Sphere ${this.lensDatas[this.lensPurchased[index]].brand} Cylinder ${this.lensDatas[this.lensPurchased[index]].frameType}`
    }
  }
  getFrames() {
    this.opticalService.getFrames("", "").subscribe(data => {
      this.frameDatas = data;
      for (let i = 0; i < this.frameDatas.length; i++) {
        this.frameDatas[i].quantity = 0
      }
    })
  }

  getLens() {
    this.opticalService.getLens("", "").subscribe(data => {
      this.lensDatas = data;
      for (let i = 0; i < this.lensDatas.length; i++) {
        this.lensDatas[i].quantity = 0
      }
    })
  }

  inputLens(event: any, value: any, index: any) {
    const inputElement = event.target;
    const currentValue = parseFloat(inputElement.value);
    if (currentValue > value) {
      inputElement.value = value.toString();
      this.lensDatas[index].quantity = value;
    } else {
      this.lensDatas[index].quantity = currentValue;
    }
    if (currentValue == 0) {
      if (this.lensPurchased.indexOf(index) !== -1) {
        this.lensPurchased.splice(this.lensPurchased.indexOf(index), 1)
      }
    } else {
      if (this.lensPurchased.indexOf(index) == -1) {
        this.lensPurchased.push(index)
      }
    }
  }

  inputFrames(event: any, value: any, index: any) {
    const inputElement = event.target;
    const currentValue = parseFloat(inputElement.value);
    if (currentValue > value) {
      inputElement.value = value.toString();
      this.frameDatas[index].quantity = value;
    } else {
      this.frameDatas[index].quantity = currentValue;
    }
    if (currentValue == 0) {
      if (this.framePurchased.indexOf(index) !== -1) {
        this.framePurchased.splice(this.framePurchased.indexOf(index), 1)
      }
    } else {
      if (this.framePurchased.indexOf(index) == -1) {
        this.framePurchased.push(index)
      }
    }
  }
}
