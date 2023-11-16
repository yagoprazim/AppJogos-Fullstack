import { Component } from '@angular/core';
import { IData } from 'src/app/interfaces/data';
import { IJogo } from 'src/app/interfaces/jogo';
import { IPaginacao } from 'src/app/interfaces/paginacao';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // data: IData[] = [];

  // constructor(private jogoService: JogoService) { }

  // ngOnInit() {
  //   this.jogoService.listarJogos().subscribe((paginacao: IPaginacao<IJogo>) => {
  //     this.data = paginacao.content.map(jogo => ({
  //       name: jogo.titulo,
  //       value: jogo.preco
  //     }));
  //   });
  // }

}

