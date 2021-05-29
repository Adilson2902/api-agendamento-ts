export default interface AgendamentoFunction{
 
    getCEP(cep:string):Promise<any>;
    getLatLong(cep:string,rua:string,bairro:string,cidade:string,uf:string):Promise<any>;

}