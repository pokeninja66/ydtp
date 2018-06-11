import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FakeComponent } from './pages/fake/fake.component';

import {PostService} from './services/ser/post.service';
import { LoginComponent } from './pages/user/login/login.component';
import { LogoutComponent } from './pages/user/logout/logout.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { UploadComponent } from './pages/user/upload/upload.component';

import {FormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './covers/header/header.component';
import { FooterComponent } from './covers/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    UploadComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase ), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
