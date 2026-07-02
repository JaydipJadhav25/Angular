import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNamePipe',
})
export class ShortNamePipePipe implements PipeTransform {
  transform(fullname: string ): string {
    //split name in space
   let name = fullname.split(" ");
   console.log(name);
   if (name.length < 2) {
    return fullname;
   }
   let first = name[0].charAt(0).toUpperCase();
   let last = name[1];
    // return (`${name[0].slice(0,1)}.${name[1]}`);
    return (`${first}. ${last}`);
  }
}
