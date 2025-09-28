import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabBarComponent } from '../tab-bar/tab-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,TabBarComponent,RouterModule] 
})
export class RapportComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
