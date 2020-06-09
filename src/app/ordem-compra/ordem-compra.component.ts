import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { Pedido } from '../models/pedido.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../services/carrinho.service';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(120)
    ]),
    'numero': new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20)
    ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [
      Validators.required
    ])
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.carrinhoService.getTotal();
  }

  public confirmarCompra(): void {
    let pedido = new Pedido (
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento,
      this.carrinhoService.itens
    );
    this.ordemCompraService.efetivarCompra(pedido).subscribe((id: number) => {
      this.idPedidoCompra = id;
      this.carrinhoService.itens = [];
    });
  }
}
