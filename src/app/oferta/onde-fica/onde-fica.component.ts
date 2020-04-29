import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'purb-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string;

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params: Params) => {
      this.ofertaService.getOndeFicaOfertaPorId(params.id)
        .then((resposta) => {
          this.ondeFica = resposta;
        })
    });
  }

}
