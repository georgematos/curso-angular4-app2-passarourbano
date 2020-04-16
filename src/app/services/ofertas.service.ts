import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { URL_API } from '../app.api';
import { Oferta } from '../models/oferta.model';

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

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar/?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao;
      })
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica/?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao;
      })
  }

  pesquisaOfertas(termo: String): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .pipe(retry(10))
      .pipe(((resposta: any) => resposta)) // transforma o observable (complexo) em um mais simples
  }

}
