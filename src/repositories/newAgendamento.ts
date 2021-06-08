import {clinics} from '../../models/clinics'
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
                   "latitude": result.geometry.location.lat,
                   "longitude":result.geometry.location.lng
               }

              
              
              
            }).catch((err) =>{
                response = {
                    "type":"error",
                    err
                }
 
               
            })

            return response;
    }

    // calculate distance enter 2 points in earth 
     async calculateDistance(point1, point2) {
         var response;
        /*
        point1 ={
            latitude: string,
            longitude: string
        } ...
        */
        var lt = point1.latitude;
        var lt1 = point2.latitude;
        var ln = point1.longitude;
        var ln1 = point2.longitude;

        var dLat = (lt - lt1) * Math.PI / 180;
        var dLon = (ln - ln1) * Math.PI / 180;
        var a = 0.5 - Math.cos(dLat) / 2 + Math.cos(lt1 * Math.PI / 180) * Math.cos(lt * Math.PI / 180) * (1 - Math.cos(dLon)) / 2;
        let d = Math.round(6371000 * 2 * Math.asin(Math.sqrt(a)));
        response = d;
        return response;
    }

    async verifyLocation (user, clinics) {
        // return id of clinic most next of user
        // arguments: user: {}, clinics: [{}]
        var response;
        let distances = []
        let geo = []
        await clinics.map((clinic) => (
            distances.push({distance: this.calculateDistance(user, clinic), id: clinic.id})
        ))
        await distances.map((item) => (geo.push(item.distance)))
        // discovering smallest geolocation enter clinics and user
        let smallestGeo = geo.reduce((a, b) => Math.min(a,b))
        console.log(smallestGeo)
    
        // filter object of clinic most next of user
        let betterClinicForUser = distances.filter((item) => {return item.distance == smallestGeo})
    
        if (betterClinicForUser[0].distance <= 50000){
            response = betterClinicForUser[0]
            return response
        }else{
            response = {id: 999}
            return response
        }
    }

    async clinicNextUser(cep:string) {
        let response;
        let cepUser = await this.getCEP(cep);
        let geoLocationUser = await this.getLatLong(cep, cepUser.rua, cepUser.bairro, cepUser.uf, cepUser.numero);
        response = geoLocationUser
        let idBetterClinic = await this.verifyLocation(geoLocationUser, clinics);
        // response = idBetterClinic
        return response
    }
}