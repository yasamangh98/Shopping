import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() ColumnCountChange = new EventEmitter<number>()
  @Output() itemsCountChange = new EventEmitter<number>()
  @Output() sortChange = new EventEmitter<string>()

 sort ='desc'
 itemsShowCount=12
 constructor(){

 }
 ngOnInit(){

 }
 onSortUpdate(newSort:string){
  this.sort=newSort
  this.sortChange.emit(newSort)

 }
 onItemsUpdated(count:number):void{
this.itemsShowCount=count
this.itemsCountChange.emit(count)
 }

 onColumnsupdated(colNumb:number):void{
  // the emit() method is used to emit a custom event. In Angular, you can create custom events to allow communication between different parts of your application, typically between parent and child components. 
  this.ColumnCountChange.emit(colNumb) 
 }
}
