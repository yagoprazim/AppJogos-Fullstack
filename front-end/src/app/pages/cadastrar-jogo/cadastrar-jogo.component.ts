import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { AlertaService } from 'src/app/services/alerta.service';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-cadastrar-jogo',
  templateUrl: './cadastrar-jogo.component.html',
  styleUrls: ['./cadastrar-jogo.component.css']
})
export class CadastrarJogoComponent {

  jogoForm: FormGroup = this.jogoService.pegarJogoForm();

  constructor(private jogoService: JogoService, private alertaService: AlertaService){}
  
  //Função que cadastra um produto quando houver interação com o botão.
  cadastrar() {
    if (this.jogoForm.valid) {
      this.jogoService.adicionarJogo(this.jogoForm.value).subscribe(
        (response) => {
          this.alertaService.exibirSucessoComRedirecionamento('Jogo adicionado na lista', 'O jogo foi adicionado com sucesso.');
          this.jogoForm.reset();
        },
        (error) => {
          this.jogoForm.reset();
        }
      );
    }
  }
}