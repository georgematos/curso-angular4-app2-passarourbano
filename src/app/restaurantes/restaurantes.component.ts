import { Component, OnInit } from '@angular/core';
import { Oferta } from '../models/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'purb-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [
    OfertasService
  ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(public ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.getOfertasRestaurante()
      .then((ofertas: Array<Oferta>) => {
        this.ofertas = ofertas;
      })
      .catch((param: any) => {
        console.log(param);
      })
  }

}
