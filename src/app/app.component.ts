import { Component } from '@angular/core';
import { Product } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrProductsFood: Product[]
  arrProductsDrinks: Product[]
  arrOrder: Product[]

  constructor(){
    this.arrProductsFood=[
      new Product('Carne', 25, '../assets/bistec.png'),
      new Product('Pescado', 15, '../assets/langostino.png'),
      new Product('Parrillada', 35, '../assets/bistec.png'),
      new Product('Solomillo', 45, '../assets/bistec.png'),
      new Product('Surtido de Ibericos', 25, '../assets/bistec.png'),
      new Product('Pate', 17.5, '../assets/bistec.png'),
      new Product('Pollo asado', 22.75, '../assets/pollo.png'),
      new Product('Verduras', 15, '../assets/pimenton.png'),
      new Product('Hamburguesa', 15, '../assets/hamburguesa.png')
    ]

    this.arrProductsDrinks=[
      new Product('Wisky', 15, '../assets/cocktail.png'),
      new Product('Ron', 15, '../assets/coca.png'),
      new Product('Coca-cola', 5, '../assets/coca.png'),
      new Product('Monster', 5, '../assets/cerveza.png'),
      new Product('Agua', 2, '../assets/vodka.png'),
      new Product('Anis del mono', 4, '../assets/vodka.png'),
      new Product('Cerveza', 2, '../assets/cerveza.png')
    ]
     
    this.arrOrder = []
    
  }

  addProduct($event){
    this.arrOrder.push($event)
    console.log(this.arrOrder)
    
  }
}
