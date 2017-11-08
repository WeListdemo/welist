import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) {
    // this.router.navigate(['/home']);

  } 
  ngOnInit() {
    let ShouSuo = true;
    $('.head_log span').on('click',()=>{
      if(ShouSuo){
        $('body').css('padding-left','20px');
        $('.accordion').css('left','-235px');
        ShouSuo = false;
      }else{
        $('body').css('padding-left','235px');
        $('.accordion').css('left','0');
        ShouSuo = true;
      }

    })
  }



}
