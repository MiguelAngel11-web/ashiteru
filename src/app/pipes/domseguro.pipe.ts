import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  transform(value: string, regexValue: string, replaceValue: string): any {
      let regex = new RegExp(regexValue,'g');
      return value.replace(regex, replaceValue);
  }

}
