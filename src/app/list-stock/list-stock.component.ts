import { Component, OnInit } from '@angular/core';
import { OpticalService } from '../optical.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-stock',
    templateUrl: './list-stock.component.html',
    styleUrl: './list-stock.component.css'
})
export class ListStockComponent implements OnInit {

    frameDatas: any[] = [];
    lensDatas: any[] = [];
    column: any[] = [
        { field: 'no', label: 'No' },
        { field: 'brand', label: 'Brand' },
        { field: 'frameType', label: 'Frame Type' },
        { field: 'price', label: 'Price' },
        { field: 'stock', label: 'Stock' },
    ]

    constructor(
        private opticalService: OpticalService,
        private router: Router,
    ) { }
    ngOnInit(): void {
        this.getFrames();
        this.getLens();
    }

    getFrames() {
        this.opticalService.getFrames("", "").subscribe(data => {
            this.frameDatas = data;
        })
    }

    getLens() {
        this.opticalService.getLens("", "").subscribe(data => {
            this.lensDatas = data;
        })
    }

    redirectToFrameStock() {
        this.router.navigate(['/add-frame-stock']);
    }

    redirectToLensStock() {
        this.router.navigate(['/add-lens-stock']);
    }

}
