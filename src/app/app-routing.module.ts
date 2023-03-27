import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/estudios/edit-educacion.component';
import { NewEstudioComponent } from './componentes/estudios/new-estudio.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditMainComponent } from './componentes/main/edit-main.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'nuevaedu',component:NewEstudioComponent},
  {path:'editedu/:id',component:EditEducacionComponent},
  {path:'editabout/:id',component:EditMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
