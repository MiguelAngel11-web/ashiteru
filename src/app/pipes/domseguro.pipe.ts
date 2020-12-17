import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  transform(value: string, regexValue: string, replaceValue: string): any {
/*       console.log("Value: "+ value + " RegexValue:" + regexValue+ " ReplaceValues: " +replaceValue); */
      let regex = new RegExp(regexValue,'g');
      /* let valorreplacazdo = value.replace(regex, replaceValue);
      console.log("VALOR: "+ valorreplacazdo ); *//*
      console.log("VRegex: "+ regex + " ReplaceValues: " +replaceValue); */
      return value.replace(regex, replaceValue);
/*     return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value ); */
  }

}
