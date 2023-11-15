import { Component, Input} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private jogoService: JogoService) {}

  @Input() jogoForm: FormGroup = this.jogoService.pegarJogoForm();
  @Input() textoBotao: string = 'Enviar';
  @Input() corBotao: string = 'btn-success';

  get titulo() {
    return this.jogoForm.get('titulo');
  }
  get genero() {
    return this.jogoForm.get('genero');
  }
  get desenvolvedora() {
    return this.jogoForm.get('desenvolvedora');
  }
  get plataforma() {
    return this.jogoForm.get('plataforma');
  }
  get preco() {
    return this.jogoForm.get('preco');
  }

}
