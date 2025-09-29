import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-ecole-info',
  templateUrl: './ecole-info.component.html',
  styleUrls: ['./ecole-info.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, HttpClientModule,TabBarComponent]
})
export class EcoleInfoComponent {

  info = {
    date_debut: '',
    date_fin: '',
    raison: '',
    detaille: ''
  };

  loading = false;

  constructor(private http: HttpClient) {}

  envoyerInfo() {
    if (!this.info.date_debut || !this.info.date_fin || !this.info.raison) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    this.loading = true;

    this.http.post('http://localhost:3000/ecole-info', this.info)
      .subscribe({
        next: (res) => {
          alert('Informations envoyées avec succès !');
          this.loading = false;
          this.info = { date_debut: '', date_fin: '', raison: '', detaille: '' };
        },
        error: (err) => {
          console.error('Erreur API', err);
          alert('Erreur lors de l’envoi');
          this.loading = false;
        }
      });
  }

}
