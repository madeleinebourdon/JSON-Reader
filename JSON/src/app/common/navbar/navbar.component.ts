import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentpath = this.location.path();

  linksList = [
    {
      'url': '/',
      'currentpath': '',
      'text': 'Accueil'
    },
    {
      'url': '/json',
      'currentpath': '/json',
      'text': 'Lecture de JSON'
    },
    {
      'url': '/options',
      'currentpath': '/options',
      'text': 'Options'
    },
    {
      'url': '/notes',
      'currentpath': '/notes',
      'text': 'Notes'
    }
  ]

  constructor(private location: Location) { }

  ngOnInit() {
  }

}
