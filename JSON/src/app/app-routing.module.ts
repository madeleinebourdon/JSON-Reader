import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ReadJsonComponentComponent } from './read-json-component/read-json-component.component';
import { OptionsComponent } from './options/options.component';
import { NotesComponent } from './notes/notes.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'json', component: ReadJsonComponentComponent},
  {path: 'options', component: OptionsComponent},
  {path: 'notes', component: NotesComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
