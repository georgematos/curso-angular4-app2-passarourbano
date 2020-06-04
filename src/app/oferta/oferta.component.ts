import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../models/oferta.model';
import { OfertasService } from '../services/ofertas.service';
import { CarrinhoService } from '../services/carrinho.service';
import { ItemCarrinho } from '../models/item-carrinho.model';

@Component({
  selector: 'purb-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService,
    CarrinhoService
  ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private ofertaId: string;
  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    public ofertaService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    console.log(this.carrinhoService.exibirItens());
    this.route.params.subscribe((params: Params) => {
      this.ofertaService.getOferta(params.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      }).catch((error) => {
        console.log(error);
      });
    })
  }

  public adicionarOferta(): void {
    this.carrinhoService.adicionar(this.oferta);
  }

  ngOnDestroy(): void {

  }

}
