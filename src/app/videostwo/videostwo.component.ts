import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-videostwo',
  templateUrl: './videostwo.component.html',
  styleUrls: ['./videostwo.component.scss']
})
export class VideostwoComponent {

  apiLoaded = false;

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  videoUrl = 'https://youtu.be/f3mwKLXpOLk?si=8vGOmvwOmXt-E2zU';

  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = '5XvrhtnFh1tvLTkm';

  constructor(private http: HttpClient) {}

  getVideo(videoId: string) {
    return this.http.get(`${this.apiUrl}/videos?id=${videoId}&key=${this.apiKey}&part=snippet`);
  }
}
