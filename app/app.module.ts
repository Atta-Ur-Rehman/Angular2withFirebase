import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBmGpx5yofYKPlq1N0y0lCdwjkQChiL96E",
    authDomain: "todoapp2-41e70.firebaseapp.com",
    databaseURL: "https://todoapp2-41e70.firebaseio.com",
    storageBucket: "todoapp2-41e70.appspot.com",
    messagingSenderId: "86485381186"
};

@NgModule({
  imports:      [ BrowserModule, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
