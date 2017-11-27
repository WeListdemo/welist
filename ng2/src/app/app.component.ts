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
    //获取浏览器高度；
    $('.content').css('min-height',document.body.clientHeight+'px')
    ;
    //侧导航收缩
    let ShouSuo = true;
    $('.head_log span').on('click',()=>{
      if(ShouSuo){
        $('body').css('padding-left','0');
        $('.accordion').css('left','-235px');
        ShouSuo = false;
      }else{
        $('body').css('padding-left','235px');
        $('.accordion').css('left','0');
        ShouSuo = true;
      }
    })
    //个人信息
    let selfflag = true;
    $('.user_box').on('click',()=>{
      if(selfflag){
        $('.selfinfo').css('top','50px');
        selfflag = false;
      }else{
         $('.selfinfo').css('top','-230px');
         selfflag = true;
      }
    })


  }

 public login:any = () =>{
    this.router.navigate(['/login']);
  }

}
