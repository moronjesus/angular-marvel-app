import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../constant/Constant';
import { Response } from '../models/response';

import { HttpParams } from '@angular/common/http';

import { credentials } from '../constant/Credential';
import { UtilsService } from './utils.service';

/**
 * Servicio para peticiones de Character
 */
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  /**
   * 
   * @param http  parametro de httpcliente de angular 
   * @param constant parametro para las rutas api
   * @param utilsService parametro para remplazar un parametro 
   */
  constructor(
    private http: HttpClient,
    private constant: Constant,
    private utilsService: UtilsService
  ) { }


  /**
   * metodo para consultar los character
   * @param param parametro para consultar por algo en especifico
   * @returns retorna characters
   */
  public getCharacters( param?: string): Observable<Response>{

    let params = new HttpParams()
      params = params.set('ts', credentials.ts)
      params = params.set('hash', credentials.hash)
      params = params.set('apikey', credentials.apikey)
      params = params.set('limit', '20');
      if(param) params = params.set('nameStartsWith', param)

    let url = this.constant.urls.characters.getCharacters; 
    return this.http.get<Response>(url, {params});

  }

  /**
   * metodo para consultar un character
   * @param id parametro identificador unico
   * @returns retorna un character
   */
  public getByIdCharater( id : string ): Observable<Response>{

    let params = new HttpParams()
      .set('ts', credentials.ts)
      .set('hash', credentials.hash)
      .set('apikey', credentials.apikey)

    let url = this.constant.urls.characters.getByIdCharacter; 
    url = this.utilsService.settingParameter(url, "id", id.toString());
    return this.http.get<Response>(url, {params});

  }

/**
   * metodo para consultar los comic por character
   * @param id parametro identificador unico
   * @returns retorna los comic relacionado a un charcter especifico
   */
  public getCharacterComics( id : string ) : Observable<Response>{
 
    let params = new HttpParams()
      .set('ts', credentials.ts)
      .set('hash', credentials.hash)
      .set('apikey', credentials.apikey)

    let url = this.constant.urls.characters.getCharacterComics; 
    url = this.utilsService.settingParameter(url, "id", id.toString());
    
    return this.http.get<Response>(url, {params});
  }


  /**
   * metodo para consultar los character
   * @param id parametro identificador unico
   * @returns retorna las series relacionado con un character especifico
   */
  public getCharacterSeries( id : string ) : Observable<Response>{
 
    let params = new HttpParams()
      .set('ts', credentials.ts)
      .set('hash', credentials.hash)
      .set('apikey', credentials.apikey)

    let url = this.constant.urls.characters.getCharacterSeries; 
    url = this.utilsService.settingParameter(url, "id", id.toString());
    
    return this.http.get<Response>(url, {params});
  }


}
