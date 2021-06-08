import { newAgendamento } from '../repositories/newAgendamento'
import { Request, Response } from 'express'


export  class createFindClinicController{

    constructor (private FindClinics:newAgendamento){

    }

    async handle (req:Request, res:Response){

        try {
            const {cep} = req.body;

            var response;
            const Resp = await this.FindClinics.clinicNextUser(cep)

            response = res.status(200).send(Resp);
 
          

        } catch (error) {
            
            response = {
                "type":"error",
                error
            }
        }

        return response;
    }

}