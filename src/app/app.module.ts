import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ngrx 
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { simpleReducer } from './ngrx/simple.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers)
    // StoreModule.forRoot({ 
    //   message: simpleReducer
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
