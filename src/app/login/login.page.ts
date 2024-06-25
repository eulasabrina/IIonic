import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class LoginPage {
  usuario!: string;
  password!: string;

  constructor(private router: Router,
              private alertController:AlertController) {}

  enviar() {
    if (this.usuario === 'maria@gmail.com' && this.password === '123456') {
      this.router.navigate(['/sobre']);
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Email ou senha incorretos!',
      message: 'Por favor verificar os dados digitados.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  
}