import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule, TabBarComponent]
})
export class ProfilComponent implements OnInit {

  profilData: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProfil();
  }

  getProfil() {
    // Remplace par ton URL réelle
    this.http.get('http://localhost:3000/profil').subscribe(
      (res: any) => {
        this.profilData = res;
      },
      (err) => {
        console.error('Erreur lors de la récupération du profil', err);
      }
    );
  }

  // Générer les initiales (première et dernière lettre du prénom et nom)
  getInitiales(): string {
    if (!this.profilData) return '';
    const nom = this.profilData.nom || '';
    const prenom = this.profilData.prenom || '';
    const nomInit = nom ? nom[0] : '';
    const prenomInit = prenom ? prenom[0] : '';
    return `${prenomInit.toUpperCase()}${nomInit.toUpperCase()}`;
  }
}
