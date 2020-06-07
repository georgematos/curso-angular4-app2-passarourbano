import { ImagemSrc } from './imagem_src.model';

class ItemCarrinho {
  constructor (
    public id: number,
    public img: string,
    public titulo: string,
    public descricao_oferta: string,
    public valor: number,
    public quantidade: number
   ) {}
}

export { ItemCarrinho }
