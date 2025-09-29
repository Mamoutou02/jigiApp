import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule,TabBarComponent] // <-- ajouté ici
})
export class DepensesComponent implements OnInit {

  depenses: any[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.chargerDepenses();
  }

  chargerDepenses(event?: any) {
    this.loading = true;
    this.http.get<any[]>('http://localhost:3000/depenses')
      .subscribe({
        next: (res) => {
          this.depenses = res;
          this.loading = false;
          if (event) {
            event.target.complete();
          }
        },
        error: (err) => {
          console.error('Erreur API', err);
          this.loading = false;
          if (event) {
            event.target.complete();
          }
        }
      });
  }

}
