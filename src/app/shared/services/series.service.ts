import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../constant/Constant';
import { credentials } from '../constant/Credential';
import { UtilsService } from './utils.service';
import { Response } from '../models/response';

/**
 * servicios de Series
 */
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

 /**
   * 
   * @param http  parametro de httpcliente de angular 
   * @param constant parametro para las rutas api
   */
constructor(private http: HttpClient,
  private constant: Constant) { }


 /**
   * metodo para consultar las series
   * @param param parametro para consultar por algo en especifico
   * @returns retorna series
   */
  public getSeries( param ?: any): Observable<Response>{

    let params = new HttpParams()
        params = params.set('ts', credentials.ts)
        params = params.set('hash', credentials.hash)
        params =  params.set('apikey', credentials.apikey)
      if(param){
        params =  params.set('seriesType', param)
      }

    let url = this.constant.urls.series.getSeries; 
    return this.http.get<Response>(url, {params});

  }

}
