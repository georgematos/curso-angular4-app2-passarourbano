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

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${this.url}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

}
