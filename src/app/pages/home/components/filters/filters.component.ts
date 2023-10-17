import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  categoriesSubscription:Subscription |undefined
  categories: Array<string>|undefined

@Output() showcategory = new EventEmitter<string>()
constructor(private storeService:StoreService){

}
ngOnInit():void{
 this.categoriesSubscription= this.storeService.getAllCategories()
    .subscribe((response)=>{
    this.categories = response
  })
 
}
  onShowCategory(category:string){
    this.showcategory.emit(category)
  }


  ngOnDestroy(){
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe()
    }
  }
}
