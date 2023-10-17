import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cart,CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import {loadStripe} from '@stripe/stripe-js'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
cart:Cart= {items:[{
  product:'https://via.placeholder.com/150',
  name:'snickers',
  price:150,
  quantity:1,
  id:1
}]}
dataSource:Array<CartItem> = []
displayedColumns:Array <string>=[
  'product',
  'name',
  'price',
  'quantity',
  'total',
  'action'
]

constructor( private cartService:CartService, private http:HttpClient){}
ngOnInit(): void {
this.cartService.cart.subscribe((_cart)=>{
  this.cart= _cart
  this.dataSource = this.cart.items
})
}

getTotal(items:Array<CartItem>):number{
  return this.cartService.getTotal(items)
}
onClearCart():void{
  this.cartService.clearCart()
}

onRemoveFromCart(item:CartItem){
this.cartService.removeFromCart(item)
}

onAddQuantity(item:CartItem):void{
this.cartService.addToCart(item)
}

onRemoveQuantity(item:CartItem){
  this.cartService.removeQuantity(item)
}

onCheckOut(){
  this.http.post('http://localhost:4242/checkout',
  {items:this.cart.items}).subscribe(async(res:any)=>{
    let stripe = await loadStripe('pk_test_7wkbdbalbla')
    stripe?.redirectToCheckout({
      sessionId:res.id
    })
  })
}

}
