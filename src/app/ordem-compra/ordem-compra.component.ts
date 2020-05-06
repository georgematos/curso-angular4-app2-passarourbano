import { Component, OnInit } from '@angular/core';
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

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit(): void {

  }

  confirmarCompra(formulario: NgForm): void {
    console.log(formulario.form.value);
  }

}
