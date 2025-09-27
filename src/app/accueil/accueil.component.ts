import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabBarComponent } from '../tab-bar/tab-bar.component'; 
@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
 
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  // CORRECTION: Utilisation de l'importation réelle du composant
  imports: [IonicModule, CommonModule, RouterModule, TabBarComponent], 
})
export class AccueilComponent {

}
