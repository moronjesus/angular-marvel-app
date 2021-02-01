import { Characters } from "./characters";

/**
 * interface de Response
 */
export interface Response{

    /**
     * code  codigo
     */
    code?: number;
    /**
     * status estatus
     */
    status?: string;
    /**
     * data datos 
     */
    data?: Data;
}


/**
 * interfaceData
 */
export interface Data {
    /**
     * limit limite 
     */
    limit: number;
    /**
     * total total 
     */
    total: number;
    /**
     * count cantidad
     */
    count: number;
    /**
     * result arreglo de resultado
     */
    results: Array<any>

}
