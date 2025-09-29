import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule,TabBarComponent]
})
export class NotificationComponent implements OnInit {

  notifications: any[] = [];  // Tableau pour stocker les notifications
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.chargerNotifications();
  }

  // Fonction pour récupérer les notifications depuis ton endpoint
  chargerNotifications(event?: any) {
    this.loading = true;
  
    this.http.get<any[]>('http://localhost:3000/notifications')
      .subscribe({
        next: (res) => {
          this.notifications = res;
          this.loading = false;
          if(event) event.target.complete(); // termine l'animation du refresher
        },
        error: (err) => {
          console.error('Erreur API', err);
          this.loading = false;
          if(event) event.target.complete();
        }
      });
  }
  
}
