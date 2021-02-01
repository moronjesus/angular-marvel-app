import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/shared/models/characters';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { DataAlphabet } from 'src/assets/data/alphabet';

/**
 * Componente de pagina de character
 */
@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})

export class CharactersPageComponent{

  /**
   * charactersData arreglo de character
   */
  public charactersData: Characters[] = [];
  /**
   * paginator paginador
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * dataSource data  
   */
  dataSource = new MatTableDataSource<any>();
  /**
   * data$ observable 
   */
  data$: Observable<any>;
  /**
   * selectedAlphabet valor del select 
   */
  selectedAlphabet = ''
  
  /**
 * Constructor 
 * @param alphabetItems  servicio que proporciona el abecedario
 * @param charactersService servicio de character
 */
  constructor( private charactersService : CharactersService, 
               public alphabetItems: DataAlphabet, ){
                
        this.getCharacters();
        this.data$ = this.dataSource.connect();
  };

/**
* filtro de Character
* @param event valor que vamos a filtrar
*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  /**
   * selecionar uan letra del abecedario
   * @param value letra del abecedario por la que bsucara al character
   */
  selectAlphabet = (value) =>{
    this.getCharacters(value)
   
  }

  /**
   * metodo que busca los characteres
   * @param param parmetro para filtrar a los characters
   */
  getCharacters = ( param?:string ) => {

    this.charactersService.getCharacters( param ).subscribe((resp) =>{

      if(resp.code === 200){
        this.charactersData = [];
        resp.data.results.map((element) => {

          let item: Characters ;

          item= {
            id : element.id,
            name : element.name,
            description: element.description,
            thumbnail : element.thumbnail,
            comics : element.comics,
            series : element.series
          }       
          this.charactersData.push(item);

        })
      }
      this.dataSource.data = this.charactersData;
      this.dataSource.paginator = this.paginator;
      
    })
           
  }


}
