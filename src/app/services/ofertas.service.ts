import { Oferta } from '../models/oferta.model';
import { ImagemSrc } from '../models/imagem_src.model';


export class OfertasService {

  public ofertas: Array<Oferta> = [
    {
      id: 1,
      categoria: "restaurante",
      titulo: "Super Burger",
      descricao_oferta: "Rodí­zio de Mini-hamburger com opção de entrada.",
      anunciante: "Original Burger",
      valor: 29.90,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/1/img1.jpg" },
        { url: "/assets/ofertas/1/img2.jpg" },
        { url: "/assets/ofertas/1/img3.jpg" },
        { url: "/assets/ofertas/1/img4.jpg" }
      ]
    },
    {
      id: 2,
      categoria: "restaurante",
      titulo: "Cozinha Mexicana",
      descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      anunciante: "Mexicana",
      valor: 32.90,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/2/img1.jpg" },
        { url: "/assets/ofertas/2/img2.jpg" },
        { url: "/assets/ofertas/2/img3.jpg" },
        { url: "/assets/ofertas/2/img4.jpg" }
      ]

    },
    {
      id: 4,
      categoria: "diversao",
      titulo: "Estância das Águas",
      descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
      anunciante: "Estância das Águas",
      valor: 31.90,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/3/img1.jpg" },
        { url: "/assets/ofertas/3/img2.jpg" },
        { url: "/assets/ofertas/3/img3.jpg" },
        { url: "/assets/ofertas/3/img4.jpg" },
        { url: "/assets/ofertas/3/img5.jpg" },
        { url: "/assets/ofertas/3/img6.jpg" }
      ]
    }
  ];

  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }

  public getOfertas2(): Promise<Array<Oferta>> {
    return new Promise((resolve, reject) => {
      // algum processamento que ao ser finalizado chamará a funcao resolve ou reject
      let ok = false;
      if (ok) {
        resolve(this.ofertas);
      } else {
        reject({ 'error_code': '404', 'error_msg': 'Objeto nao encontrado' });
      }
    });
  }

}
