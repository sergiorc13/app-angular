import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent  implements OnInit {


  constructor(public infoService: InfoPaginaService) { }

  ngOnInit(): void {
  }
  
}
