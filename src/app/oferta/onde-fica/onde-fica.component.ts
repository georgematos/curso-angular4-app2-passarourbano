import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    let id = this.route.parent.snapshot.params['id'];
    this.ofertaService.getOndeFicaOfertaPorId(id)
      .then((resposta) => {
        this.ondeFica = resposta;
      })
  }

}
