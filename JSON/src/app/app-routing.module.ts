import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ReadJsonComponent } from './pages/read-json/read-json.component';
import { OptionsComponent } from './pages/options/options.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';



const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'json', component: ReadJsonComponent},
  {path: 'options', component: OptionsComponent},
  {path: 'notes', component: NotesComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
