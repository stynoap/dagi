import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private elementRef:ElementRef){}

  scollToSection(sectionId:string):void{
    let section = this.elementRef.nativeElement.querySelector(sectionId);
    if (section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }


  

  ngOnInit(): void {

  }
  title = 'dagi';
}
