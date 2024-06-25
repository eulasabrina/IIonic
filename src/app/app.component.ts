import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  
  pages: Array<{ title: string, url: string, icon: string }>; 
  
  constructor(private menu: MenuController) {
    menu.enable(true);

  this.pages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/sobre', icon: 'people' },
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Dados', url: '/dados', icon: 'person-circle' },
    { title: 'Badge', url: '/badge', icon: 'bar-chart' },
  ];
  
}
}