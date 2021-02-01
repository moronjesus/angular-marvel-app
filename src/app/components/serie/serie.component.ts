import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/shared/models/serie';

/**
 * Componente de las Series
 */
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

/**
 * itemSerie arreglos de objetos de las series
 */
  @Input() itemSerie: Series[] = []; 

  constructor() { }

  ngOnInit() {
  }

}
