import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notations';
  pageroute = 0;

  onClick(page){
    console.log("hello....",page);
    if(page==1){
      this.pageroute = 1;
    }
    else if(page==2){
      this.pageroute = 2;
    }
    else if(page==0){
      this.pageroute = 0;
    }
  }

  myfunc(selection){
    if(selection == 1){
      document.getElementById("boss").className = "btn btn-sq-lg btn-success";
      document.getElementById("lmos").className = "btn btn-sq-lg btn-primary";
      document.getElementById("wfa").className = "btn btn-sq-lg btn-primary";
    }
    else if(selection == 2){
      document.getElementById("boss").className = "btn btn-sq-lg btn-primary";
      document.getElementById("lmos").className = "btn btn-sq-lg btn-success";
      document.getElementById("wfa").className = "btn btn-sq-lg btn-primary";
    }
    else if(selection == 3){
      document.getElementById("boss").className = "btn btn-sq-lg btn-primary";
      document.getElementById("lmos").className = "btn btn-sq-lg btn-primary";
      document.getElementById("wfa").className = "btn btn-sq-lg btn-success";
    }
    
  }


}
