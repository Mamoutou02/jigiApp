import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ✅ Import des composants Ionic nécessaires
import { IonContent, IonButton, IonIcon, IonCard } from '@ionic/angular/standalone';

import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  imports: [
    CommonModule,
    RouterModule,

    // ⬇️ Composants Ionic utilisés dans ton HTML
    IonContent,   // <ion-content>
    IonButton,    // <ion-button>
    IonIcon,      // <ion-icon>
    IonCard,      // <ion-card>

    TabBarComponent, // ton tab-bar
  ],
})
export class AccueilComponent {}
