import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule // fournit ion-card, ion-item, ion-input, ion-icon, etc.
  ],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
