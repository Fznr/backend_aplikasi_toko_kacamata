import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpticalService {
  private baseUrl = 'http://localhost:8231/';

  constructor(private http: HttpClient) { }

  getFrames(brand: String, frameType: String): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}kacamata/find-frames?brand=${brand}&frameType=${frameType}`);
  }

  getLens(sphere: String, cylinder: String): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}kacamata/find-lens?sphere=${sphere}&cylinder=${cylinder}`);
  }

  addFrame(body: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}kacamata/add-frame-stock`, body, { observe: 'response' });
  }

  addLens(body: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}kacamata/add-lens-stock`, body, { observe: 'response' });
  }

  getCustomers(nama: String, alamat: String): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}kacamata/find-customers?nama=${nama}&alamat=${alamat}`);
  }

  addCustomer(body: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}kacamata/add-customer`, body, { observe: 'response' });
  }

  addPemeriksaan(body: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}kacamata/add-pemeriksaan`, body, { observe: 'response' });
  }

  findPemeriksaan(nama: any, tanggalPemeriksaan: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}kacamata/find-pemeriksaan?nama=${nama}&tanggalPemeriksaan=${tanggalPemeriksaan}`);
  }

  postPurchase(body: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}kacamata/add-penjualan`, body, { observe: 'response' });
  }
}
