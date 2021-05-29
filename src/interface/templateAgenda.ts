export default interface AgendaFunctions{
   
  create(arraydiadesemana:[],arraysabado:[],arraydomingo:[],clinica:string):Promise<any>
}