import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/models/oferta.model';

@Component({
  selector: 'purb-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string;

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params: Params) => {
      this.ofertaService.getComoUsarOfertaPorId(params.id)
        .then((resposta: string) => {
          this.comoUsar = resposta;
        })
    })
  }

}
