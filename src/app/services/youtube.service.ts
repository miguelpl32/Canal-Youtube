import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyDthTw3F4P3eBsKYIGv2SUsTngJQItIwag';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(private http: HttpClient) { }

  getVideos(): any {
    const url = `${this.youtubeUrl}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apikey);

    return this.http.get<YoutubeResponse>(url, { params })
      .pipe(
        map(resp => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        map(items => items.map(video => video.snippet))

      );
  }
}
