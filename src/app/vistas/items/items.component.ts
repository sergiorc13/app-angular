import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
  
export class ItemsComponent implements OnInit {

  producto: ProductoDescripcion | undefined;
  id: string = '';


  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {

      this.productoService.getProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
          this.id = parametros['id'];
          this.producto = producto;
        })
    })
  }
}
