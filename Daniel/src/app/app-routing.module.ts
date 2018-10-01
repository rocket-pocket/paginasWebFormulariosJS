import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component'
import { ContactsComponent } from './contacts/contacts.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'lista', component: TareasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
