import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,TabBarComponent] // <-- ajoute IonicModule ici
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
