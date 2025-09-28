import { Component, OnInit } from '@angular/core';
import { TabBarComponent } from '../tab-bar/tab-bar.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-presence',
  templateUrl: './list-presence.component.html',
  styleUrls: ['./list-presence.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,TabBarComponent,RouterModule]
})
export class ListPresenceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
