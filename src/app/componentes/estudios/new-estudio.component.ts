import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit{
  nombreEdu:string;
  descripcionEdu:string;

  constructor(private educacionS:EducacionService, private router:Router){ }


  ngOnInit(): void {
      
  }

  onCreate(): void{
    const educacion = new Education(this.nombreEdu,this.descripcionEdu);
    this.educacionS.save(educacion).subscribe(data=>{alert("Estudios añadidos")
    this.router.navigate([''])},err=>{alert("Falló"); this.router.navigate([''])})
  }

}
