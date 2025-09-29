import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import des icônes Ionicons
import { homeOutline, cardOutline, barChartOutline, personCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule]
})
export class TabBarComponent implements OnInit {

  // Déclaration des icônes comme propriétés
  icons = {
    home: homeOutline,
    paiement: cardOutline,
    rapport: barChartOutline,
    profil: personCircleOutline
  };

  constructor() {
    // Enregistrement des icônes
    addIcons({
      homeOutline,
      cardOutline,
      barChartOutline,
      personCircleOutline
    });
  }

  ngOnInit() {}
}
