import { Component } from '@angular/core';

const RockStyles: string[] = [
  "Hard Rock",
  "Punk",
  'Heavy Metal'
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rockStyles = RockStyles;
}
