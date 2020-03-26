import { Component, OnInit, Injectable } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'purb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let ofserv: OfertasService = new OfertasService();
    console.log(ofserv.getOfertas());
  }

}
