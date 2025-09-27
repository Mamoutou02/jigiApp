import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  standalone: true, // Rendre le composant standalone pour une meilleure réutilisation
  imports: [IonicModule, RouterModule, CommonModule]
})
export class TabBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
