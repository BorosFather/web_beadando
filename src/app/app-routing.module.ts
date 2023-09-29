import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { OrarendComponent } from './orarend/orarend.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { ChessComponent } from './chess/chess.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "cv", component:CvComponent},
  {path: "orarend", component:OrarendComponent},
  {path: "calendar", component:CalendarComponent},
  {path: "images", component:ImagesComponent},
  {path: "videos", component:VideosComponent},
  {path: "chess", component:ChessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
