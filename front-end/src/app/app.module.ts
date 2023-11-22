import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CadastrarJogoComponent } from './pages/cadastrar-jogo/cadastrar-jogo.component';
import { AtualizarJogoComponent } from './pages/atualizar-jogo/atualizar-jogo.component';
import { ListarJogosComponent } from './pages/listar-jogos/listar-jogos.component';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PesquisarJogoComponent } from './pages/pesquisar-jogo/pesquisar-jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    CadastrarJogoComponent,
    AtualizarJogoComponent,
    ListarJogosComponent,
    PesquisarJogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
