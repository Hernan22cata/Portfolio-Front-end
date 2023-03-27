import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{
  educacion:Education[] = [];

  constructor(private educacionS:EducacionService,private tokenService:TokenService){ }

  isLogged = false;



  ngOnInit(): void {
      this.cargarEducacion();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
  }

  cargarEducacion():void{
    this.educacionS.lista().subscribe(data =>{this.educacion = data;})
  }

  borrar(id?:number){
    if(id!=undefined){
      this.educacionS.delete(id).subscribe(data=>{this.cargarEducacion();},err =>{alert('no se pudo eliminar')})
    }
  }



}
