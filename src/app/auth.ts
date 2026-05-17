import { Injectable  , signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLoggin = signal(false);

  login(){
    this.isLoggin.set(true);
  }

  logout(){
    this.isLoggin.set(false);
  }
  
}
