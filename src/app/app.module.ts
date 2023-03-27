import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule }from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { NgForm } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { LoginUsuario } from './model/login-usuario';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEstudioComponent } from './componentes/estudios/new-estudio.component';
import { EditEducacionComponent } from './componentes/estudios/edit-educacion.component';
import { EditMainComponent } from './componentes/main/edit-main.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEstudioComponent,
    EditEducacionComponent,
    EditMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: []
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
