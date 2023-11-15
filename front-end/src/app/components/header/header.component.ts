import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  jogoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private jogoService: JogoService) {
    this.jogoForm = this.fb.group({
      idPesquisa: ['', Validators.required]
    });
  }

  pesquisarJogo() {
    if (this.jogoForm.valid) {
      const idPesquisa = this.jogoForm.get('idPesquisa')?.value;
      this.router.navigate(['/jogos', idPesquisa]);
    }
  }
}