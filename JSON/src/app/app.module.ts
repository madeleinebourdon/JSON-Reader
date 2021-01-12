import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadJsonComponent } from './pages/read-json/read-json.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NotesComponent } from './pages/notes/notes.component';
import { OptionsComponent } from './pages/options/options.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadJsonComponent,
    NavbarComponent,
    NotesComponent,
    OptionsComponent,
    HomepageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
