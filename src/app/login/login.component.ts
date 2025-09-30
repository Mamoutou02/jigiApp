import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Import d’addIcons et des icônes nécessaires
import { addIcons } from 'ionicons';
import { 
  arrowBackOutline, 
  mailOutline, 
  lockClosedOutline, 
  logoGoogle, 
  logoFacebook 
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule // fournit <ion-icon>, <ion-input>, <ion-card>, etc.
  ],
})
export class LoginComponent implements OnInit {
  constructor() {
    // Enregistrer toutes les icônes utilisées
    addIcons({
      arrowBackOutline,
      mailOutline,
      lockClosedOutline,
      logoGoogle,
      logoFacebook
    });
  }

  ngOnInit() {}
}
