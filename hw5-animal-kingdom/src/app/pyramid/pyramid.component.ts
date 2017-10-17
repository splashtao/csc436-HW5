import { Component, OnInit } from '@angular/core';
import { Pyramid } from './pyramid.model'
import { PyramidRowService } from '../pyramid-row/pyramid-row.service';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {

  animalKingdom : Pyramid;
  pyramidService : PyramidRowService;
  rankInput : number;
  nameInput: string;
  imgInput : string;


  constructor() { 
    this.pyramidService = new PyramidRowService;
    
    

  }

  ngOnInit() {
    this.animalKingdom = new Pyramid(this.pyramidService.getAnimals());
  }


  add(){
    this.pyramidService.addAnimal(this.rankInput,this.nameInput,this.imgInput);
    
  }
}
