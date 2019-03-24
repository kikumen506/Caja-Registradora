import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/producto.model'


@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string
  @Input() products: Product[]
  @Output() selectedProduct = new EventEmitter()

  constructor() { 

  }

  ngOnInit() {
  }
  addProduct(prod){

    this.selectedProduct.emit(prod)

  }

}
