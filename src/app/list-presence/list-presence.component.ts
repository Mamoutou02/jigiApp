import { Component, OnInit } from '@angular/core';
import { TabBarComponent } from '../tab-bar/tab-bar.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-presence',
  templateUrl: './list-presence.component.html',
  styleUrls: ['./list-presence.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TabBarComponent, RouterModule, HttpClientModule]
})
export class ListPresenceComponent implements OnInit {
  presences: any[] = [];
  showPresence = false;
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  togglePresences() {
    if (this.showPresence) {
      // masquer la liste
      this.showPresence = false;
      this.presences = [];
      return;
    }

    // sinon charger la liste
    this.loading = true;
    this.http.get<any[]>(`http://localhost:3000/presences`)
      .subscribe({
        next: (res) => {
          this.presences = res;
          this.showPresence = true;
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur API', err);
          this.loading = false;
        }
      });
  }
}
