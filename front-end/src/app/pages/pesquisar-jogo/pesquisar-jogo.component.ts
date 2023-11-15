import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IJogo } from 'src/app/interfaces/jogo';
import { JogoService } from 'src/app/services/jogo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisar-jogo',
  templateUrl: './pesquisar-jogo.component.html',
  styleUrls: ['./pesquisar-jogo.component.css']
})
export class PesquisarJogoComponent {
  jogo$ = new Observable<IJogo>();

  constructor(private jogoService: JogoService, private route: ActivatedRoute,){}

  ngOnInit() {
    this.jogo$ = this.route.paramMap.pipe(
      switchMap(params => {
        const jogoId = Number(params.get('id'));
        return this.jogoService.pegarJogoPorId(jogoId);
      })
    );
  }
}