import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrls: ['./go-back-button.component.css']
})
export class GoBackButtonComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
