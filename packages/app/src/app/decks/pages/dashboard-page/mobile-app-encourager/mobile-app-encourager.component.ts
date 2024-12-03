import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-app-encourager',
  templateUrl: './mobile-app-encourager.component.html',
  styleUrls: ['./mobile-app-encourager.component.scss'],
})
export class MobileAppEncouragerComponent implements OnInit {
  dontShowAgain = false;

  constructor(public dialogRef: MatDialogRef<void>) {}

  ngOnInit(): void {}
}
