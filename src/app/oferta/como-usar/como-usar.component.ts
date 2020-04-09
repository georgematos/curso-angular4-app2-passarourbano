import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    let id = this.route.parent.snapshot.params['id'];
    this.ofertaService.getComoUsarOfertaPorId(id)
      .then((resposta: string) => {
        this.comoUsar = resposta;
      })
  }

}
