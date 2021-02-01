import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Series } from 'src/app/shared/models/serie';
import { SeriesService } from 'src/app/shared/services/series.service';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};
/**
 * moment variable referente a moment
 */
const moment =  _moment;


/**
 * componente pagina d eseries
 */
@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.scss']
})

export class SeriesPageComponent implements OnInit {

  /**
   * seriesData arreglo de series 
   */
  public seriesData: Series[] = [];
   /**
   * seriesFilterData arreglo de series filtradas 
   */
  public seriesFilterData: Series[] = [];
  /**
   * dataStartFilter fecha de inicio para el filtro 
   */
  public dataStartFilter;
   /**
   * dateEndFilter fecha de fin para el filtro 
   */
  public dateEndFilter;
  
  /**
   * selected valor del select de filtro por nombre completo
   */
  selected = '';
  /**
   * selectedRating valor del select de filtro por clasificacion
   */
  selectedRating = '';
  /**
   * paginator pasginador
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * dataSource data source 
   */
  dataSource = new MatTableDataSource<any>();
  /**
   * data$ observable
   */
  data$: Observable<any>;
  /**
   * dateStart fecha inicio
   */
  dateStart = new FormControl(moment());
  /**
   * dateEnd fecha dateEnd
   */
  dateEnd = new FormControl(moment());

  /**
   * 
   * @param seriesService servicio de series
   */
  constructor(private seriesService : SeriesService) { }

/**
 * @ignore
 */
  ngOnInit() {

    this.getSeries();
    this.data$ = this.dataSource.connect();
  }

 /**
* filtro de series
* @param event Serie por nombre completo que vamos a filtrar
*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
  }

  /**
   * metodo de filtrar por tipo de serie
   * @param valor el valor del tipo de serie
   */
  selectTypeSeries = (valor)=> {
    this.getSeries( valor );
  }

  /**
   * metod que filtra or un rango de fecha por año
   */
  openDateFilter = () =>{
  
    let seriesYearStartEndFilter = this.seriesData.filter(( element ) =>{
      
      if(this.dataStartFilter <= element.startYear && this.dateEndFilter >= element.endYear){
        return element
      }
    })
 
    this.dataSource.data = seriesYearStartEndFilter;
    this.dataSource.paginator = this.paginator; 
  }

  /**
   * metodo que filtra por clasificacion de serie
   * @param valor valor por clasificacion se va afiltrar
   */
  selectRatingSeries = (valor)=> {
    
    let seriesFilterData = this.seriesData.filter(element => valor === element.rating.toLocaleUpperCase())
    this.dataSource.data = seriesFilterData;
    this.dataSource.paginator = this.paginator; 
  
  }

  /**
   * metod que recibe el inicio del año
   * @param normalizedYear valor del datepicker
   * @param datepicker datepicker
   */
  yearStar(normalizedYear, datepicker: MatDatepicker<Moment>) {
    
    this.dataStartFilter = normalizedYear._i.year;
    const ctrlValue = this.dateStart.value;
    ctrlValue.year(normalizedYear.year());
    this.dateStart.setValue(ctrlValue);
    datepicker.close();
  }

  /**
   * metod que recibe el fin del año
   * @param normalizedYear valor del datepicker
   * @param datepicker datepicker
   */
  yearEnd(normalizedYear, datepicker: MatDatepicker<Moment>) {
    
    this.dateEndFilter = normalizedYear._i.year;
    const ctrlValue = this.dateEnd.value;
    ctrlValue.year(normalizedYear.year());
    this.dateEnd.setValue(ctrlValue);
    datepicker.close();
  }

  /**
   * metodo que busca todas las series
   * @param param parametropara buscar series especificas
   */
  getSeries=( param?: any ) =>{
    this.seriesService.getSeries( param ).subscribe( resp =>{

      if(resp.code === 200){

        this.seriesData = [];
        resp.data.results.map((element) => {

          let item: Series;

          item = {
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
        this.dataSource.data = this.seriesData;
        this.dataSource.paginator = this.paginator; 
      }
    })
  }



}
