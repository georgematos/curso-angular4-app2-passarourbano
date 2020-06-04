import { ItemCarrinho } from '../models/item-carrinho.model';
import { Oferta } from '../models/oferta.model';

export class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public adicionar(oferta: Oferta) {
    let item: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );
    this.itens.push(item);
    console.log(this.itens);
  }

}
