import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'angular-html';
  constructor() {
    // this.title.setTitle('Dashboard');
  }

  ngOnInit() {
    window.addEventListener('load', Aos.refresh);

    window.addEventListener('load', function () {});
    Aos.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });
  }
}
