export interface Cart{
    items:Array<CartItem>
    //item esme arayehast 
}
export interface CartItem{
    product:string,
    name:string,
    price:number,
    quantity:number,
    id:number
}
//   cart= {
//          [CartItem],
//          [CartItem],
//          [CartItem]
//             }