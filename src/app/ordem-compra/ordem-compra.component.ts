import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'purb-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = ''

  constructor() { }

  ngOnInit(): void {

  }

  atualizarEndereco(endereco: string): void {
    this.endereco = endereco;
    console.log(this.endereco);
  }

  atualizarNumero(numero: string): void {
    this.numero = numero;
    console.log(this.numero)
  }

  atualizarComplemento(complemento: string): void {
    this.complemento = complemento;
    console.log(this.complemento)
  }

  atualizarFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    console.log(this.formaPagamento)
  }

}
