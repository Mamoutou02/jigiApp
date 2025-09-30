import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,  // nécessaire pour routerLink
    IonicModule
  ]
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
