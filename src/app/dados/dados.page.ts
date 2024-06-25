import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class DadosPage {
      email = '';
      telefone = '';

constructor(public alertController: AlertController) {}

async Dados() {

  const alert = await this.alertController.create({
    header: 'Informe seus dados:',
    inputs: [
{
    name: 'email',
    placeholder: 'Email',
},
{
    name: 'telefone',
    placeholder: 'Telefone',
},
],
  buttons: [{
   text: 'Cancelar',    
},
{ text: 'Enviar',
  handler: data => {
  this.email = data.email;
  this.telefone = data.telefone;
},
},
],
});

await alert.present();
}
}