import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then( m => m.SobrePage)
  },
  
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'dados',
    loadComponent: () => import('./dados/dados.page').then( m => m.DadosPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.page').then( m => m.BadgePage)
  },
 
];

@NgModule({
  imports:[IonicModule.forRoot(),
          
          RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})                      
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
