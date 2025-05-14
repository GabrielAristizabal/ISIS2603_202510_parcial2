import { Component, OnInit, Output } from '@angular/core';
import { CandidatosService } from '../canditatos.service';
import { CandidatosDetailComponent } from '../candidatos-detail/candidatos-detail.component';
import { Candidatos } from '../candidatos';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {
  candidatos: Array<Candidatos> = [];
  candidatoSeleccionado: boolean = false;
  candidato!: Candidatos;
  p: number = 1;
  searchedCand: any;

  constructor(private candidatosService: CandidatosService) { }

  getCandidatos(): void {
    this.candidatosService.getCandidatos().subscribe({next: apiData => this.candidatos = apiData });
  }

  seleccionarCandidato(cand: Candidatos): void {
    this.candidatoSeleccionado = true;
    this.candidato = cand;
  }

  ngOnInit() {
    this.getCandidatos();
  }
}
