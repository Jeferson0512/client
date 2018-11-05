import { NgModule } from '@angular/core';

// Llamo a routing para realizar mis rutas
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pagina/home/home.component';
import { LoginComponent } from './pagina/login/login.component';
import { LoginHomeComponent } from './pagina/login/login-home.component';
// import { CommonModule } from '@angular/common';

const routes : Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: LoginHomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
