import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ashiteru';


  public loading : Boolean = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /* Dejamos pausado por 3 seg para que se muestre el spinner */
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
