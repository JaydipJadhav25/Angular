import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-product-comp',
  imports: [],
  templateUrl: './product-comp.html',
  styleUrl: './product-comp.css',
})
export class ProductComp {
 productId! : string;
 constructor(private route : ActivatedRoute){
  //to get id from id
  //1. for static way
  //  this.productId = route.snapshot.paramMap.get("id") || "Not Found";

  //2.for dynamic chnage

  route.paramMap.subscribe((parans)=>{
    this.productId = parans.get("id") || "";
  })

}
}
