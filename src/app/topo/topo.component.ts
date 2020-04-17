import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../models/oferta.model';
import { Observable, Subject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'purb-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [
    OfertasService
  ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(public ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      .pipe(debounceTime(1000)) // executa a ação do switchMap após 1 segundo
      .pipe(switchMap((termo: string) => { // será disparado sempre que o next do subjectPesquisa for chamado recebendo o argumento passado por ele
        return this.ofertaService.pesquisaOfertas(termo);
      }));

    this.ofertas.subscribe((ofertas: Array<Oferta>) => {
      console.log(ofertas);
    })
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

}
