import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../models/oferta.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'purb-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [
    OfertasService
  ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  constructor(public ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca);
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (error: any) => console.log('(Erro) Sem resposta, status: ', error.status),
      () => console.log('final')
    );
  }

}
