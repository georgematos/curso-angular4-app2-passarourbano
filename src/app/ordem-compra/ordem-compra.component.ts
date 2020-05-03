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

  // Attr de controle de validacao dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit(): void {

  }

  atualizarEndereco(endereco: string): void {
    this.endereco = endereco;
    if (this.endereco.length > 15) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  atualizarNumero(numero: string): void {
    this.numero = numero;
    // if (+this.numero) { // valida se é um tipo numero
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  atualizarComplemento(complemento: string): void {
    this.complemento = complemento;
  }

  atualizarFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    console.log(this.formaPagamento.length)
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }

}
