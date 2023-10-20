import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { OrarendComponent } from './orarend/orarend.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { ChessComponent } from './chess/chess.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { VideostwoComponent } from './videostwo/videostwo.component';
import { HttpClientModule } from '@angular/common/http';
import { PacsivideoComponent } from './pacsivideo/pacsivideo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    OrarendComponent,
    CalendarComponent,
    ImagesComponent,
    VideosComponent,
    ChessComponent,
    NavbarComponent,
    BackgroundComponent,
    VideostwoComponent,
    PacsivideoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
