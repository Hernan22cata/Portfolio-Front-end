import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  
  persona: persona = null;

  constructor(public personaService: PersonaService, private activatedRouter:ActivatedRoute, private tokenService:TokenService){

  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    const id=this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(1).subscribe(data =>{this.persona = data});
    
    this.cargarPersona();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
  }
  
  cargarPersona(){
    this.personaService.detail(1).subscribe(data=>{this.persona = data})
  }

}
