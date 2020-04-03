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
    this.route.params.subscribe((params: any) => {
      this.ofertaId = params.id;
    })
   }

  ngOnInit(): void {
    this.ofertaService.getOferta(this.ofertaId)
      .then((oferta: Oferta) => {
        console.log(oferta);
        this.oferta = oferta;
      })
      .catch((error) => {});

  }

}
