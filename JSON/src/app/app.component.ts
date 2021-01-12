import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JSON Reader'
  currentpath = this.location.path()

  constructor(private location: Location, private titleService: Title) {
    switch (this.currentpath) {
      case '':
        this.title = 'Accueil'
        break
      case '/json':
        this.title = 'Lecture de JSON'
        break
      case '/notes':
        this.title = 'Notes'
        break
      case '/options':
        this.title = 'Options'
        break
      default:
        this.title = 'Page introuvable'
    }
    this.title += ' | JSON Reader'

    this.titleService.setTitle(this.title)
    console.log(this.currentpath)
  }

  ngOnInit() {
  }
}
