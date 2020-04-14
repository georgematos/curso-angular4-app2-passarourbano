import { Component, OnInit } from '@angular/core';
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

  constructor(public ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaBusca: string): void {

  }

}
