import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NormalPosterComponent } from './components/normal-poster/normal-poster.component';
import { AvailablePosterComponent } from './components/available-poster/available-poster.component';
import { PosterComponent } from './paginas/poster/poster.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    NormalPosterComponent,
    AvailablePosterComponent,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
