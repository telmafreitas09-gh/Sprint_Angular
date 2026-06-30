import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  // Variáveis conectadas ao ngModel do HTML
  usuarioDigitado: string = '';
  senhaDigitada: string = '';
  exibirErroLogin: boolean = false;

  constructor(private router: Router) {}

  // CORRIGIDO: Adicionada a função que o evento (input) do HTML estava procurando
  onChaveDigitada(): void {
    // Aqui você pode deixar a lógica do RxJS ou apenas o monitoramento temporário
    console.log('Usuário digitando:', this.usuarioDigitado);
  }

  // Função disparada no (submit) do formulário
  validarAcesso(): void {
    this.exibirErroLogin = false;

    if (this.usuarioDigitado.trim() === 'admin' && this.senhaDigitada === '123456') {
      localStorage.setItem('logado', 'true');
      this.router.navigate(['/home']);
    } else {
      this.exibirErroLogin = true;
    }
  }
}
