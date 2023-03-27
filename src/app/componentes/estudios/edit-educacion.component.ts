import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{
  educacion:Education = null;

  constructor(private educacionS:EducacionService,private activatedRouter:ActivatedRoute,private router:Router){ }

  ngOnInit(): void {
      const id= this.activatedRouter.snapshot.params['id'];
      this.educacionS.details(id).subscribe(data=>{this.educacion = data;},err =>{alert('error al modificar');this.router.navigate([''])})
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id,this.educacion).subscribe(data =>{this.router.navigate(['']);
  },err=>{alert('Error al modificar');this.router.navigate(['']);})
  }

}
