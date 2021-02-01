import { Component, Input, OnInit } from '@angular/core';
import { Characters } from 'src/app/shared/models/characters';
import { Comic } from 'src/app/shared/models/comic';


/**
 * Componente general de detalle 
 */
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

/**
 * itemDetail objeto de typo comic 
 */
  @Input() itemDetail: Comic; 
  constructor() { }

  ngOnInit() {
  }

}
