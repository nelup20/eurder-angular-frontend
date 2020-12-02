import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public currentHighlightedPage = 0;
  private changeHighlightedPageInterval: number = window.setInterval(() => {
    this.changeCurrentHighlightedPage();
  }, 2000);

  constructor() { }

  ngOnInit(): void {
  
  }

  ngOnDestroy(){
    if(this.changeHighlightedPageInterval){
      clearInterval(this.changeHighlightedPageInterval)
    }
  }

  changeCurrentHighlightedPage(): void {
    if(this.currentHighlightedPage === 2){
      this.currentHighlightedPage = 0;
    } else {
      this.currentHighlightedPage += 1;
    }
  }

}
