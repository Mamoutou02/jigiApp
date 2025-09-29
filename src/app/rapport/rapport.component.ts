import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabBarComponent } from '../tab-bar/tab-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    TabBarComponent,
    RouterModule,
    HttpClientModule
  ]
})
export class RapportComponent implements OnInit {
  bulletins: any[] = [];
  loading = false;
  showBulletins = false; // toggle d’affichage

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  toggleBulletins() {
    if (this.showBulletins) {
      // si déjà visible → cacher
      this.showBulletins = false;
      this.bulletins = [];
    } else {
      // sinon → charger depuis l’API
      this.getBulletins();
    }
  }

  private getBulletins() {
    this.loading = true;

    this.http.get<any[]>(`http://localhost:3000/bulletins`)
      .subscribe({
        next: (res) => {
          this.bulletins = res;
          this.showBulletins = true;
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur API', err);
          this.loading = false;
        }
      });
  }
}
