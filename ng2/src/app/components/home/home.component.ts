import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $:any;
declare const echarts:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit() {
    $('.home_content').css('min-height',(document.documentElement.clientHeight)+'px')
  }

  public link:any = () =>{
    this.router.navigate(['/zhexiantu']);
  }

  



  

}
