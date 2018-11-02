import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/fontawesome-free';

import { UsersService } from './services/users.service';

// Usamos para entrar con Facebook y Gmail
// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   GoogleLoginProvider,
//   FacebookLoginProvider,
// } from "angular5-social-login";

import { AppComponent } from './app.component';
import { UsersComponent } from './componentes/users/users.component';
import { HomeComponent } from './pagina/home/home.component';
import { LoginComponent } from './pagina/login/login.component';

// export function getAuthServiceConfigs() {
//   let config = new AuthServiceConfig(
//       [
//         {
//           id: FacebookLoginProvider.PROVIDER_ID,
//           provider: new FacebookLoginProvider("Your-Facebook-app-id")
//         },
//         {
//           id: GoogleLoginProvider.PROVIDER_ID,
//           provider: new GoogleLoginProvider("Your-Google-Client-Id")
//         }
//       ]
//   )
//   return config;
// }

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
    FormsModule,
    // SocialLoginModule
    // FontAwesomeModule
  ],
  providers: [
    UsersService
    // {
    //   provide: AuthServiceConfig,
    //   useFactory: getAuthServiceConfigs
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
