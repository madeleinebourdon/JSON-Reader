import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
//  url = this.location._platformLocation._doc.documentURI
url = ''

  constructor(private location: Location) { }
  ngOnInit() {
    // console.log(this.url._platformLocation._doc.)
    // console.log(this.url)
  }

}
