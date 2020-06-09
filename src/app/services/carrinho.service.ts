import { ItemCarrinho } from '../models/item-carrinho.model';
import { Oferta } from '../models/oferta.model';
import { Observable } from 'rxjs';

export class CarrinhoService {
  public itens: ItemCarrinho[] = [];
  public valorTotalCarrinho: number = 0;

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public adicionar(oferta: Oferta) {
    let itemcarrinho = this.itens.find((item: ItemCarrinho) => item.id === oferta.id);
    if (itemcarrinho) {
      itemcarrinho.quantidade++;
    } else {
      let item: ItemCarrinho = new ItemCarrinho(
        oferta.id,
        oferta.imagens[0].url,
        oferta.titulo,
        oferta.descricao_oferta,
        oferta.valor,
        1
      );
      this.itens.push(item);
    }
    this.getTotal();
  }

  public remover(ofertaId: number) {
    let itemcarrinho = this.itens.find(x => x.id === ofertaId);
    if (itemcarrinho) {
      itemcarrinho.quantidade--;
    }
    this.getTotal();
  }

  public getTotal(): void {
    this.valorTotalCarrinho = this.itens.reduce((a, b) => (a + (b['valor']) * b['quantidade'] || 0), 0);
  }

}
