import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../../shared/models/characters';


/**
 * Componente de los characters
 */
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  /**
   * itemCharacter arreglo de objetos de los character
   */
  @Input() itemCharacter: Characters[] = []; 

  constructor() { }

  ngOnInit() {
  }

}
