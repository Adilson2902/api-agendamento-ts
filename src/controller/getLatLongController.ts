import { Request, Response } from 'express'
import { newAgendamento } from '../repositories/newAgendamento'


export  class getLatLongController{

    constructor (private newAgenda:newAgendamento){

    }

    async handle (req:Request, res:Response){

        try {
            const {cep,rua,bairro,cidade,uf} = req.body;

            var response;
            const Resp = await this.newAgenda.getLatLong(cep,rua,bairro,cidade,uf);

            response = res.status(200).send(Resp);
 
          

        } catch (error) {
            
            response =
                error
            
        }

        return response;
    }

    


}