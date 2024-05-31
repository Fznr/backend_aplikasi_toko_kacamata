import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) {}

  redirectTo(route:any) {
    this.router.navigate([route]);
}
}