import { Component, OnInit } from "@angular/core";
import { OfertasService } from "../services/ofertas.service";
import { Oferta } from "../models/oferta.model";

@Component({
  selector: "purb-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertas()
      .then((ofertas: Array<Oferta>) => {
        this.ofertas = ofertas;
      }) //response
      .catch((param: any) =>  {
        console.log(param);
      }); //reject
  }
}
