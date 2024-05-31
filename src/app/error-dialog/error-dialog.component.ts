import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) {}

    redirectTo(route:any) {
      this.router.navigate([route]);
  }
}
