import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatosService } from '../canditatos.service';
import { Candidatos } from '../candidatos';


@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  candidatoId!: string;
  @Input() candidato!: Candidatos;

  constructor(
    private route: ActivatedRoute,
    private candidatosService: CandidatosService) { }

  getCandidato(){
    this.candidatosService.getCandidatos(this.candidatoId).subscribe(apiData => {

    })
  }

  ngOnInit() {
    if(this.candidato === undefined){
      this.candidatoId = this.route.snapshot.paramMap.get('id')!
      if(this.candidatoId){
        this.getCandidato();
      }
    }
  }
}
