import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
 @Input() product:Product|undefined
@Input() fullWidthMode = false
@Output() AddToCart =new EventEmitter()

onAddToCart():void{
  this.AddToCart.emit(this.product)
}
}
