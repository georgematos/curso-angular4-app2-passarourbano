import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'purb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit(): void {
    // this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas);
    this.ofertasService.getOfertas2().then(
      (ofertas: Array<Oferta>) => this.ofertas = ofertas, //response
      (param: any) => console.log(param)); //reject
  }

}
