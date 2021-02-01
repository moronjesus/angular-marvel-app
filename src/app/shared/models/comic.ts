import { Characters } from "./characters";
import { Creator } from "./creactor";
import { Items } from "./items";
import { Prices } from "./price";
import { Thumbnail } from "./Thumbnail";

/**
 * interface commic
 */
export interface Comic {

    /**
     * id identificador unico
     */
    id?: number;
    /**
     * title titulo
     */
    title?: string
    /**
     * description descripcion
     */
    description?: string;
    /**
     * thumbnail imagen de miniatura
     */
    thumbnail : Thumbnail;
    /**
     * prices precios
     */
    prices?: Prices;
    /**
     * creators creadores
     */
    creators?: Creator;
    /**
     * characters personajes
     */
    characters?: Characters
    /**
     * available cantidad de elementos
     */
    available?: number;
    /**
     * items array de datos
     */
    items ?:  Array<Items>;
    /**
     * collectedIssues una lisat de los temas
     */
    collectedIssues?: Array<collectedIssues>

}


/**
 * interface collectedIssues
 */
export interface collectedIssues{
    /**
     * resourceURI ruta a la lista completa
     */
    resourceURI : string;
    /**
     * name nombre
     */
    name: string;
}