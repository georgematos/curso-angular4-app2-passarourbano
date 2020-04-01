import { Component, OnInit, Injectable } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'purb-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [
    OfertasService
  ]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(public ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasDiversao()
      .then((ofertas: Array<Oferta>) => {
        this.ofertas = ofertas;
      })
      .catch((param: any) => {
        console.log(param);
      }
      );
  }

}
