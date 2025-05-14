import { Component, OnInit, Output } from '@angular/core';
import { CandidatosService } from '../canditatos.service';
import { Candidatos } from '../candidatos';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {
  candidatos: Array<Candidatos> = [];
  selected: boolean = false;
  selectedCand!: Candidatos;
  p: number = 1;
  searchedCand: any;

  constructor(private candidatosService: CandidatosService) { }

  getCandidatos(): void {
    this.candidatosService.getCandidatos().subscribe({next: apiData => this.candidatos = apiData });
  }

  onSelected(cand: Candidatos): void {
    this.selected = true;
    this.selectedCand = cand;
  }

  ngOnInit() {
    this.getCandidatos();
  }
}
