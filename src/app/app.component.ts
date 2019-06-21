import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nuestra app funciona';

  lat: number = -17.393101837823924;
  lng: number = -66.26271120688477;
}
