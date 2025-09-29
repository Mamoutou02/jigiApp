import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Composants Ionic
import { IonContent, IonButton, IonIcon, IonCard } from '@ionic/angular/standalone';

import { TabBarComponent } from '../tab-bar/tab-bar.component';

// Import Ionicons
import { notificationsOutline, peopleCircleOutline, checkmarkDoneCircleOutline, walletOutline, schoolOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonButton,
    IonIcon,
    IonCard,
    TabBarComponent
  ],
})
export class AccueilComponent {

  // Centralisation des icônes
  icons = {
    notification: notificationsOutline,
    parrains: peopleCircleOutline,
    paiement: checkmarkDoneCircleOutline,
    depenses: walletOutline,
    ecole: schoolOutline
  };

  constructor() {
    // Enregistrer les icônes pour Ionicons
    addIcons({
      notificationsOutline,
      peopleCircleOutline,
      checkmarkDoneCircleOutline,
      walletOutline,
      schoolOutline
    });
  }

}
