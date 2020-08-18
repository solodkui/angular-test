import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SvgHeartComponent } from './svg/svg-heart/svg-heart.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { SvgMessageComponent } from './svg/svg-message/svg-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgHeartComponent,
    CardListComponent,
    CardComponent,
    SvgMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
