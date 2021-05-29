const axios = require('axios').default;
import AgendamentoFunction from 'interface/Agendamento';
require('dotenv').config();


export class newAgendamento implements AgendamentoFunction{


 async  getCEP(cep:string){

     var response;

    await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cep3/?cep=${cep}&token=${process.env.token_hb}`).then((resp) => {
                
       response = {
           "type":"sucess",
           "bairro": resp.data.result.bairro,
           "rua":resp.data.result.logradouro,
           "uf":resp.data.result.uf,
           "cidade":resp.data.result.localidade
       }
    
    
    }).catch( (err) =>{
        response ={
            "type":"error",
           err
        }

    })


    return response;
 }

 

  async  getLatLong(cep:string,rua:string,bairro:string,uf:string,numero:string){
            
    var response;

    await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}+${rua}+${numero},
            +${bairro},+${uf}&key=${process.env.key_google}
            `).then((rs) =>
            {
               var result = rs.data.results[0]

               response = {
                   "type":"sucess",
                   "lat": result.geometry.location.lat,
                   "long":result.geometry.location.lng
               }

              
              
              
            }).catch((err) =>{
                response = {
                    "type":"error",
                    err
                }
 
               
            })

            return response;
    }


    async verifyattendance(){

        

    }

}