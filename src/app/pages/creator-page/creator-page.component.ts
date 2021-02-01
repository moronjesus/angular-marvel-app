import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Creator } from 'src/app/shared/models/creactor';
import { CreatorsService } from 'src/app/shared/services/creators.service';

/**
 * Componente pagina de Creator 
 */
@Component({
  selector: 'app-creator-page',
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.scss']
})
export class CreatorPageComponent implements OnInit {

  /**
   * creatorsData arreglo de creator
   */
  public creatorsData: Creator[] = [];

  /**
   * paginator paginador
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * dataSource data 
   */
  dataSource = new MatTableDataSource<any>();
  /**
   *  data$ observable
   */
  data$: Observable<any>;

  /**
   * 
   * @param creatorService servicio de creator
   */
  constructor( private creatorService : CreatorsService) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.data$ = this.dataSource.connect();
    this.getCreator();
  }

  /**
* filtro de creador
* @param event Creator por nombre completo que vamos a filtrar
*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
  }

/**
   * Metodo que busca los creador
   */
  getCreator= () =>{
    
    this.creatorService.getCreators().subscribe( resp =>{
      if(resp.code === 200){
        resp.data.results.map((element) => {

          let item: Creator;

          item = {

            id : element.id,
            firstName : element.firstName,
            thumbnail : element.thumbnail,
            comics : element.comics,
            series : element.series
          }
 
          this.creatorsData.push(item); 
        })  
      }
      this.dataSource.data = this.creatorsData;
      this.dataSource.paginator = this.paginator;
    })
           
  }


}
