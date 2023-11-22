import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IJogo } from '../interfaces/jogo';
import { IPaginacao } from '../interfaces/paginacao';
import { Observable, throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError} from 'rxjs/operators';
import { AlertaService } from './alerta.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  api = 'https://api-jogos-projeto.onrender.com/api/jogos'

  constructor(private http:HttpClient, private alertaService:AlertaService, private router: Router,  private location: Location) {}

  listarJogos(page: number = 0, size: number = 10){
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<IPaginacao<IJogo>>(this.api, { params });
  }

  pegarJogoPorId(id: number): Observable<IJogo> {
    return this.http.get<IJogo>(`${this.api}/${id}`)
      .pipe(
        catchError((error: any) => {
          if (error.status !== 200) {
            this.alertaService.mostrarAlertaIdInexistente(error.error.erro);
            
          }
          return throwError(error);
        })
      );
  }

  adicionarJogo(jogo: IJogo){
    return this.http.post<IJogo>(this.api, jogo)
    .pipe(
      catchError((error: any) => {
        if (error.status !== 200) {
          this.alertaService.campoInvalido(error.error.erro);
        }
        return throwError(error);
      })
    );
  }

  atualizarJogo(jogo: IJogo): Observable<IJogo> {
    return this.http.put<IJogo>(`${this.api}/${jogo.id}`, jogo)
    .pipe(
      catchError((error: any) => {
        if (error.status !== 200) {
          this.alertaService.campoInvalidoComCallback(error.error.erro, () => {
            this.location.replaceState(`/jogos/atualizar/${jogo.id}`);
            window.location.reload();
          });
        }
        return throwError(error);
      })
    );
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
      preco: new FormControl(0, [Validators.required, Validators.max(999999999999999999999999999999999999)]),
      descricao: new FormControl('', [Validators.maxLength(255)]),
    });
  }
}


