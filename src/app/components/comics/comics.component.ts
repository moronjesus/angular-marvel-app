import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/shared/models/characters';
import { Comic } from 'src/app/shared/models/comic';

/**
 * Componente de las comics
 */
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  /**
   * itemComics arreglos de objeto de las comics
   */
  @Input() itemComics: Comic[] = []; 

  
  constructor() { }

  ngOnInit() {
  }
  
  
}
