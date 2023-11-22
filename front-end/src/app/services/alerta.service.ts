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

  exibirSucessoSemBotao(titulo: string){
    Swal.fire({
      icon: "success",
      title: titulo,
      showConfirmButton: false
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

  mostrarAlertaIdInexistente(mensagem: string) {
    Swal.fire({
      title: 'Erro',
      text: mensagem,
      icon: 'error',
      confirmButtonText: 'OK',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/jogos']);
      }
    });
  }
  
  

  campoInvalido(mensagem: string) {
    Swal.fire({
      title: 'Atenção',
      text: mensagem,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

  campoInvalidoComCallback(mensagem: string, callback: () => void) {
    Swal.fire({
      title: 'Atenção',
      text: mensagem,
      icon: 'info',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  }

  loading(){
    Swal.fire({
      title: 'Carregando',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
}