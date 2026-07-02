import {Injectable , signal} from "@angular/core"


@Injectable({
    providedIn : 'root',
})


export class Counterstore{
    count = signal(0);


     increment(){
        this.count.update(prev => prev+1)
     }

    decrement(){
        this.count.update(prev => prev-1)
    }

    
    reset(){
        this.count.set(0);
    }
}

