import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { } 

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['termino']);

      this.productosService.buscarProducto(params['termino']);
    })
  }

}
