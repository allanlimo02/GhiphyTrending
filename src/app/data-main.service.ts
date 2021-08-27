import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataMainService {

  constructor(private http:HttpClient) { }


  getTrendingGif(){

    return this.http.get(`https://api.giphy.com/v1/gifs/trending?&api_key=oantKms7IqQzt7MyWn1avY57aIsodSsy&limit=50`);
  }
}
