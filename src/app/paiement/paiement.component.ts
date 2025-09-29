import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, HttpClientModule,TabBarComponent]
})
export class PaiementComponent implements OnInit {

  paiement = {
    status: '',
    date: '',
    message: ''
  };

  loading = false; // Pour afficher un spinner si nécessaire

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  envoyerPaiement() {
    if (!this.paiement.status || !this.paiement.date) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }

    this.loading = true;

    // Remplace l'URL par ton endpoint réel
    this.http.post('http://localhost:3000/paiements', this.paiement)
      .subscribe({
        next: (res) => {
          console.log('Paiement envoyé avec succès', res);
          this.loading = false;
          alert('Paiement envoyé !');
          // Réinitialiser le formulaire
          this.paiement = { status: '', date: '', message: '' };
        },
        error: (err) => {
          console.error('Erreur API', err);
          this.loading = false;
          alert('Erreur lors de l’envoi du paiement');
        }
      });
  }

}
