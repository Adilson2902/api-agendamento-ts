import { Response, Request} from 'express'
import { newAgendamento } from '../repositories/newAgendamento'


export class getCEPController{

    constructor(private newAgenda:newAgendamento){

    }

    async handle(req:Request,res:Response){

       

        try {
            
            const { cep } = req.body;

            var response;
    
            const Resp = await this.newAgenda.getCEP(cep);
    
            response = res.status(200).send(Resp);

        
        } catch (error) {
            
            response = 
             
                error
          

         
        }

        return response;
    }
}