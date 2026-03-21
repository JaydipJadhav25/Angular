import { Component, signal } from "@angular/core";




// decorator, which provides metadata to Angular, such as
@Component({
 selector : "app-blog",
//  template :` <h1>this is blog components</h1>`,
 templateUrl :'./blog.html',
//  styles : `
//   h1{
//     color : red;  //this si inline css
//   }`

// styleUrl : './blog.css', // link external one file
styleUrls : [  './blog2.css' , './blog.css'], // use multipal files
})

export class BlogComponent{
      ders = signal("this is blog component. and this is custom component")
}