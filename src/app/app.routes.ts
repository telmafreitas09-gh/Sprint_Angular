import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';


export const routes: Routes = [
  // Rota padrão: se entrar sem nada, joga para o login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // Nossas páginas do sistema
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  
  // Rota de segurança: se digitar qualquer coisa errada, volta para o login
  { path: '**', redirectTo: 'login' }
];

