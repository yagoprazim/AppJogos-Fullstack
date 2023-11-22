import { Component, OnInit } from '@angular/core';
import { IJogo } from 'src/app/interfaces/jogo';
import { IPaginacao } from 'src/app/interfaces/paginacao';
import { JogoService } from 'src/app/services/jogo.service';
import { AlertaService } from 'src/app/services/alerta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-jogos',
  templateUrl: './listar-jogos.component.html',
  styleUrls: ['./listar-jogos.component.css']
})
export class ListarJogosComponent implements OnInit {
  paginacao$: IPaginacao<IJogo> | null = null;
  paginaAtual: number = 0;
  tamanhoPagina: number = 10;

  constructor(private jogoService: JogoService, private alertaService: AlertaService) {}

  ngOnInit() {
    this.alertaService.loading();
    this.carregarJogos();
  }

  carregarJogos() {
    this.jogoService.listarJogos(this.paginaAtual, this.tamanhoPagina)
      .subscribe((data: IPaginacao<IJogo>) => {
        this.paginacao$ = data;
        Swal.close();
      });
  }

  mudarPagina(pagina: number) {
    this.paginaAtual = pagina;
    this.carregarJogos();
  }

  deletar(id: number) {
    this.alertaService.exibirConfirmacao('Excluir Jogo da Lista', 'Você tem certeza que deseja excluir o jogo?')
      .then((result) => {
        if (result.isConfirmed) {
          this.jogoService.deletarJogo(id).subscribe(() => {
            this.alertaService.exibirSucessoSemBotao('Jogo excluído com sucesso.');

            const wasLastItemOnPage = this.paginacao$?.content.length === 1;
            if (this.paginaAtual > 0 && wasLastItemOnPage) {
              this.paginaAtual--;
            }
            this.carregarJogos();
          });
        }
      });
  }
  
}
