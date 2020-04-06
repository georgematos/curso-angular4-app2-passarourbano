import { HttpClient } from '@angular/common/http';
import { Oferta } from '../models/oferta.model';
import { Injectable } from '@angular/core';
import { URL_API } from '../app.api';

@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {

  }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOferta(id: string): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.shift()); // shift remove o primeiro elemento e desloca todos os outros elementos 1 posição para esquerda
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

}
