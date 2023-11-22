import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarJogosComponent } from './pages/listar-jogos/listar-jogos.component';
import { CadastrarJogoComponent } from './pages/cadastrar-jogo/cadastrar-jogo.component';
import { AtualizarJogoComponent } from './pages/atualizar-jogo/atualizar-jogo.component';
import { PesquisarJogoComponent } from './pages/pesquisar-jogo/pesquisar-jogo.component';

const routes: Routes = [
  {path: '', component: ListarJogosComponent},
  {path: 'jogos', component: ListarJogosComponent},
  {path: 'jogos/adicionar', component: CadastrarJogoComponent},
  {path: 'jogos/atualizar/:id', component: AtualizarJogoComponent},
  {path: 'jogos/:id', component: PesquisarJogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
