import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { Oferta } from '../models/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'purb-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [
    OfertasService
  ]
})
export class TopoComponent implements OnInit {

  public ofertasObservable: Observable<Oferta[]>;
  public ofertas: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(public ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasObservable = this.subjectPesquisa
      .pipe(
        debounceTime(1000), // executa a ação do switchMap após 1 segundo
        distinctUntilChanged(),
        switchMap((termo: string) => { // será disparado sempre que o next do subjectPesquisa for chamado recebendo o argumento passado por ele
          if (termo.trim() === '') { // evita o disparo da consulta a api quando o campo estiver vazio
            return of<Oferta[]>([]);
          }
          return this.ofertaService.pesquisaOfertas(termo);
        }),
        catchError((err: any, Observable: Observable<Oferta[]>) => {
          console.log(err);
          return of<Oferta[]>([]);
        })
      )

      this.ofertasObservable.subscribe((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      })
    }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

}
