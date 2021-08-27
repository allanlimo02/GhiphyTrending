import { Component, OnInit } from '@angular/core';
import{ DataMainService} from '../data-main.service'
//import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-final-gifs',
  templateUrl: './final-gifs.component.html',
  styleUrls: ['./final-gifs.component.css']
})
export class FinalGifsComponent implements OnInit {
  gifs:any[]=[];
  constructor(private dataservice:DataMainService) { }
   

  ngOnInit(): void {
    this.dataservice.getTrendingGif().subscribe(
      (response:any)=>{
        this.gifs=response.data;
      

    }
    )}

}

