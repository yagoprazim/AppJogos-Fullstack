import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IJogo } from 'src/app/interfaces/jogo';
import { AlertaService } from 'src/app/services/alerta.service';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-atualizar-jogo',
  templateUrl: './atualizar-jogo.component.html',
  styleUrls: ['./atualizar-jogo.component.css']
})
export class AtualizarJogoComponent {

  jogoForm: FormGroup = this.jogoService.pegarJogoForm();
  jogoId!: number;

  constructor(
    private jogoService: JogoService, 
    private alertaService: AlertaService, 
    private route: ActivatedRoute, 
    private router: Router
  ) {}
  
  ngOnInit() {
    this.jogoId = this.route.snapshot.params['id'];
    this.carregarJogo();
  }

  carregarJogo() {
    this.jogoService.pegarJogoPorId(this.jogoId).subscribe(
      (jogo) => {
        if (jogo) {
          this.jogoForm.patchValue(jogo);
        } else {
          this.router.navigate(['/jogos']);
        }
      }
    );
  }
  
  atualizar() {
    if (this.jogoForm.valid) {
      const jogo: IJogo = { ...this.jogoForm.value, id: this.jogoId };
      this.jogoService.atualizarJogo(jogo).subscribe(
        () => {
          this.alertaService.exibirSucessoComRedirecionamento('Jogo atualizado', 'As informações do jogo foram atualizadas com sucesso.');
        }
      );
    }
  }
}