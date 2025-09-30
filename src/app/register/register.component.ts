import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// import addIcons + les icônes dont tu as besoin
import { addIcons } from 'ionicons';
import { 
  arrowBackOutline,
  personOutline, 
  callOutline, 
  lockClosedOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule // fournit <ion-icon>, <ion-input>, <ion-card>, etc.
  ],
})
export class RegisterComponent implements OnInit {
  constructor() {
    // Enregistrer les icônes à l'init
    addIcons({
      arrowBackOutline,
      personOutline,
      callOutline,
      lockClosedOutline
    });
  }

  ngOnInit() {}
}
