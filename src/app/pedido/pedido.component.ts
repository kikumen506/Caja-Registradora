import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/producto.model';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() order:Product[]


  constructor() { }

  ngOnInit() {
  }

  sumaTotal(){
    let total = 0;

    for(let i=0;i<this.order.length; i++){
      total += this.order[i].precio
    }
    return total
  }

}
