import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeWatchingComponent } from './anime-watching/anime-watching.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
/* Video */
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AnimeWatchEpComponent } from './anime-serverEp/anime-watch-ep/anime-watch-ep.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnimeDetailsComponent,
    AnimeWatchingComponent,
    LoginComponent,
    LoaderComponent,
    FooterComponent,
    UserDashboardComponent,
    DomseguroPipe,
    AnimeWatchEpComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyACuw8o9wJT_yX1sMlAhqJbQYqwG5JBNnI",
        authDomain: "kamel-6e19d.firebaseapp.com",
        databaseURL: "https://kamel-6e19d.firebaseio.com",
        projectId: "kamel-6e19d",
        storageBucket: "kamel-6e19d.appspot.com",
        messagingSenderId: "687303594591",
        appId: "1:687303594591:web:bc30fd188a8cf29d66c1ea",
        measurementId: "G-F24KR2WGM1}"
    })
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
