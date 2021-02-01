import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/shared/models/comic';
import { Creator } from 'src/app/shared/models/creactor';
import { Series } from 'src/app/shared/models/serie';
import { CreatorsService } from 'src/app/shared/services/creators.service';

/**
 * componente del detalle del creator
 */
@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.scss']
})
export class CreatorDetailComponent implements OnInit {

  /**
   * comicData arreglo de comic
   */
  public comicData: Comic[] = [];
  /**
   * seriesData arreglo de series
   */
  public seriesData: Series[] = [];
  /**
   * creatorData arreglo de creator
   */
  public creatorData: Creator = null;
/**
 * paginator paginador
 */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * dataSource dataSource
   */
  dataSource = new MatTableDataSource<any>();
  /**
   * data$ observable
   */
  data$: Observable<any>;

  /**
   * 
   * @param router  Permite acceso a información sobre una ruta
   * @param creatorService  servicio de creador
   */
  constructor(private router : ActivatedRoute,
              private creatorService : CreatorsService,) { }
/**
 * @ignore
 */
  ngOnInit() {
    this.getByIdCreator();
    this.getByIdCreatorComic();
    this.getByIdCreatorSeries();
    this.data$ = this.dataSource.connect();
  }

  /**
* filtro de Creator
* @param event Creator por nombre completo que vamos a filtrar
*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
     
  }

  
  /**
   * Metodo que busca los creators referentes a un (id)
   */
  getByIdCreator= () =>{

    this.router.params.subscribe(( param )=>{

      this.creatorService.getByIdCreator(param['id']).subscribe(( resp )=>{
        if(resp.code === 200){

          resp.data.results.map((element) => {
        
            this.creatorData = {

              id : element.id,
              firstName: element.firstName,
              middleName: element.middleName,
              lastName:element.lastName,
              fullName:element.fullName,
              thumbnail : element.thumbnail,
          
            }
          })
        }
      })
    })

  }

  /**
   * Metodo que busca los comic por un creador especifico (id)
   */
  getByIdCreatorComic =()=>{
    this.router.params.subscribe(( param )=>{

      this.creatorService.getCreatorComics(param['id']).subscribe(( resp )=>{

        if(resp.code === 200){

          resp.data.results.map((element) => {
  
            let item: Comic

            item = {

              id : element.id,
              thumbnail : element.thumbnail,
              prices : element.prices,
              title : element.title,
              creators : element.creators 
            }

            this.comicData.push(item);
 
          })
          this.dataSource.data = this.comicData;
          this.dataSource.paginator = this.paginator;
        }
        
      })
    })

  }

  /**
   * Metodo que busca los series referentes a un creador especifico (id)
   */
  getByIdCreatorSeries = () =>{

    this.router.params.subscribe(( param )=>{

      this.creatorService.getCreatorSeries(param['id']).subscribe(( resp )=>{
        if(resp.code === 200){

          resp.data.results.map((element) => {
  
            let item: Series;
           
            item ={

              id : element.id,
              thumbnail : element.thumbnail,
              title : element.title,
              startYear : element.startYear,
              endYear : element.endYear,
              type : element.type,
              rating : element.rating,

            }
            this.seriesData.push(item);
           
          })
        }

      })
    })
  }

}
