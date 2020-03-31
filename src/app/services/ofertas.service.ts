import { HttpClient } from '@angular/common/http';
import { Oferta } from '../models/oferta.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {

  }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${this.url}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  // public getOfertas2(): Promise<Array<Oferta>> {
  //   return new Promise((resolve, reject) => {
  //     // algum processamento que ao ser finalizado chamará a funcao resolve ou reject
  //     let ok = true;
  //     if (ok) {
  //       setTimeout(() => {
  //         resolve(this.ofertas);
  //       }, 3000);
  //     } else {
  //       reject({ 'error_code': '404', 'error_msg': 'Objeto nao encontrado' });
  //     }
  //   }).then((ofertas: Array<Oferta>) => {
  //     // aqui podemos fazer alguma outra tratativa antes de enviar os dados para quem chamou a funcao
  //     console.log('primeira tratativa')
  //     return ofertas;
  //   }); // pode-se usar quantos then forem necessarios em cascata inclusive com outra promises
  // }

}
