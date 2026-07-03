import { Component} from '@angular/core';
import { User } from './user';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users : any[] = [];

  //crate object
  constructor(private userService : User){}

  ngOnInit(){
     this.userService.getUsers().subscribe((data: any)=>{
        // console.log("data from server : " , data);
        console.log("call.............." , data);
        this.users = data;
     })
  }
}
