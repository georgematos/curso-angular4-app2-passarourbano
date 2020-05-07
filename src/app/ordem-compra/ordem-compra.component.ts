import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { Pedido } from '../models/pedido.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'purb-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario')
  public form: NgForm;

  public idPedido: number;

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit(): void {
    this.idPedido = undefined;
  }

  confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.form.value.endereco,
      this.form.value.numero,
      this.form.value.complemento,
      this.form.value.formaPagamento
    )

    this.ordemCompraService.efetivarCompra(pedido).subscribe((idPedido: number) => {
      console.log("pedido " + idPedido + " cadastrado com sucesso")
      this.idPedido = idPedido;
    });
  }

}
