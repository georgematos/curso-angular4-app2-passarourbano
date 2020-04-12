import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Observer } from 'rxjs';
import { Oferta } from '../models/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'purb-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaComponent implements OnInit {

  private ofertaId: string;
  public oferta: Oferta;

  constructor(private route: ActivatedRoute, public ofertaService: OfertasService) {
    this.ofertaId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.ofertaService.getOferta(this.ofertaId)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      })
      .catch((error) => { });

      // Exemplo prático de observables - programação reativa

      // this.route.params.subscribe(
      //   (parametro: any) => { console.log(parametro)},
      //   (erro: any) => { console.log(erro)},
      //   () => console.log('processamento foi classificado como conclunído')
      // );

      // const tempo = interval(2000);

      // tempo.subscribe((intervalo: number) => {
      //   console.log(intervalo);
      // })

      // observable (observável)
      let meuObservable = Observable.create((observer: Observer<string>) => {
        observer.next('Primeiro evento da stream');
        observer.next('Segundo evento da stream');
        // observer.error('algum erro foi encontrado');
        observer.complete();
        observer.next('Esse evento nao vai ser disparado, pois houve um erro ou o fluxo foi finalizado');
      });

      // observable (observador)
      meuObservable.subscribe(
        /*acao*/ (resultado: string) => {
          console.log(resultado);
        },
        /*erro*/ (error: string) => {
          console.log(error);
        },
        /*conclusao*/ () => {
          console.log("Aplicacao finalizada")
        }
      );
  }


}
