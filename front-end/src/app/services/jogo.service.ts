import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IJogo } from '../interfaces/jogo';
import { IPaginacao } from '../interfaces/paginacao';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  api = 'https://api-jogos-projeto.onrender.com/api/jogos'

  constructor(private http:HttpClient) {}

  listarJogos(page: number = 0, size: number = 10){
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<IPaginacao<IJogo>>(this.api, { params });
  }

  pegarJogoPorId(id: number) {
    return this.http.get<IJogo>(`${this.api}/${id}`);
  }

  adicionarJogo(jogo: IJogo){
    return this.http.post<IJogo>(this.api, jogo);
  }

  atualizarJogo(jogo: IJogo): Observable<IJogo> {
    return this.http.put<IJogo>(`${this.api}/${jogo.id}`, jogo);
  }

  deletarJogo(id: number){
    return this.http.delete<IJogo>(`${this.api}/${id}`);
  }

  pegarJogoForm(): FormGroup {
    return new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      genero: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      desenvolvedora: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      plataforma: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      preco: new FormControl(1, [Validators.required, Validators.max(999999999999999999999999999999999999)]),
      descricao: new FormControl('', [Validators.maxLength(255)]),
    });
  }
}


