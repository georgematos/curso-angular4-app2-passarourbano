import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../models/oferta.model';

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
  }


}
