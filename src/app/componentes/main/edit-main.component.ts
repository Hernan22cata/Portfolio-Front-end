import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import *as uuid from 'uuid';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent implements OnInit{
  persona:persona = null;

  constructor(private activatedRouter:ActivatedRoute, private personaService:PersonaService, private router:Router, public imageService:ImageService){ }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data=>{this.persona = data;},err =>{alert('error al modificar');this.router.navigate([''])})
}

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img=this.imageService.url
    this.personaService.update(id,this.persona).subscribe(data =>{this.router.navigate(['']);
  },err=>{alert('Error al modificar');this.router.navigate(['']);})
  }

  uploadImage($event:any){
    const name = uuid.v4();
    this.imageService.uploadImage($event,name)
  }

}
