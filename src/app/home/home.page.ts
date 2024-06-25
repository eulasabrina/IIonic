import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Item adicionado!',
      message: 'Você adicionou Relógio Inteligente Xiaomi Mi Smartband 4 0.95 Xmsh07hm .',
      duration:2000,
      position:"bottom"
      
    });

    toast.present();
  }
  async presentToast2() {
    const toast = await this.toastController.create({
      header: 'Item adicionado!',
      message: 'Você adicionou Câmera De Segurança Ip Wirelles .',
      duration:2000,
      position:"bottom"
     
    });

    toast.present();
  }
  async presentToast3() {
    const toast = await this.toastController.create({
      header: 'Item adicionado!',
      message: 'Você adicionou Fone de Ouvido Bluetooth.',
      duration:2000,
      position:"bottom"
      
    });

    toast.present();
  }
  async presentToast4() {
    const toast = await this.toastController.create({
      header: 'Item adicionado!',
      message: 'Você adicionou Caixa De Som Bluetooth Portátil Cs-M31Bt.',
      duration:2000,
      position:"bottom"
      
    });

    toast.present();
  }
  async presentToast5() {
    const toast = await this.toastController.create({
      header: 'Item adicionado!',
      message: 'Você adicionou Carregador portátil Power Bank 20.000mah.',
      duration:2000,
      position:"bottom"
    
    });

    toast.present();
  }

  ngOnInit() {
  }

}
