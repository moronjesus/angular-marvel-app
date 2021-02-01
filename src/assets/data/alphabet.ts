import { Injectable } from "@angular/core";

/**
 * interface items
 */
export interface Items {
  /**
   * name nombre
   */
    name: string;
   
  }

 const DATA_ALPHABET = [    

    { "name":"A"},
    {"name":"B"},
    { "name":"C"},
    {"name":"D"},
    {"name":"E"},
    {"name":"F"},
    {"name":"G"},	
    {"name":"H"},	
    {"name":"I"},
    {"name":"J"},	
    {"name":"K"},
    {"name":"L"},
    {"name":"M"},
    {"name":"O"},
    {"name":"P"},
    {"name":"Q"},	
    {"name":"R"},	
    {"name":"S"},
    {"name":"T"},
    {"name":"U"},
    {"name":"V"},	
    {"name":"W"},	
    {"name":"X"},	
    {"name":"Y"},	
    {"name":"Z"}

]

/**
 * @ignore
 */
@Injectable()
export class DataAlphabet{
  /**
   * metodo para consultar el abecedario
   * @returns retorna el abecedario
   */
  getAll(): Items[] {
      return DATA_ALPHABET;
    }
}