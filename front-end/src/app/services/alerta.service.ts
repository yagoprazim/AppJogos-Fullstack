import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private router: Router) { }

  exibirSucesso(titulo: string, mensagem: string) {
    Swal.fire({
      title: titulo,
      text: mensagem,
      icon: 'success',
      confirmButtonColor: '#4BB543'
    });
  }

  exibirSucessoComRedirecionamento(titulo: string, mensagem: string): Promise<void> {
    return Swal.fire({
      title: titulo,
      text: mensagem,
      icon: 'success',
      confirmButtonColor: '#4BB543'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/jogos']);
      }
    });
  }

  exibirErro(titulo: string, mensagem: string) {
    Swal.fire({
      title: titulo,
      text: mensagem,
      icon: 'error',
      confirmButtonColor: '#FF0000'
    });
  }

  exibirConfirmacao(titulo: string, mensagem: string) {
    return Swal.fire({
      title: titulo,
      text: mensagem,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4BB543',
      cancelButtonColor: '#FF0000',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    });
  }
}