import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/fontawesome-free';

import { UsersService } from './services/users.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './componentes/users/users.component';
import { HomeComponent } from './pagina/home/home.component';
import { LoginComponent } from './pagina/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    // FontAwesomeModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
