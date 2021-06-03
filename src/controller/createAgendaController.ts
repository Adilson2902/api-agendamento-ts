import { Request, Response } from 'express'
import { CriaAgenda  } from '../repositories/createAgenda'


export  class createAgendaController{

    constructor (private CriaAgenda:CriaAgenda){

    }

    async handle (req:Request, res:Response){

        try {
            const {arraydiadesemana,arraysabado,arraydomingo,clinica} = req.body;

            var response;
            const Resp = await this.CriaAgenda.create(arraydiadesemana,arraysabado,arraydomingo,clinica);

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