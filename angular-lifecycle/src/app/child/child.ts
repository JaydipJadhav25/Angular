import { afterEveryRender, afterNextRender, Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  //accept input and display
  @Input() counter! : any;
  constructor(){
    console.log("1.Construtor")

    //redering phase
    afterNextRender(()=>{
      console.log("4. after next render!");
    })
    afterEveryRender(()=>{
      console.log("4. after every render!");
    })
  }

  ngOnChanges(chnage : SimpleChange){
    console.log("2.ngOnChnage :" , chnage);
  }

  ngOnInit(){
    console.log("3. ngOnInit chnage!");
  }
 
  ngOnDestroy(){
    console.log("5. ngOnDestory!");
  }
 
}
