import { getCEPControler, getLatLongControler,createAgendaControler } from './config/functionsAgendamento';
import { Response, Request, Router} from 'express';



const routes = Router();

routes.get("/", (req:Request,res:Response) =>{
   
    
    res.send("Api Agendamento");

})


routes.get("/getcep",(req:Request,res:Response) =>{

    try {
        
        getCEPControler.handle(req,res);
    } catch (error) {
        res.send(error)
    }
   
})



routes.get("/getlatlong",(req:Request,res:Response) =>{

    try {
        
        getLatLongControler.handle(req,res);
    } catch (error) {
        res.send(error)
    }
   
})


routes.get("/createagenda",(req:Request,res:Response) =>{
    try {
        
      
       createAgendaControler.handle(req,res);
       

    } catch (error) {
        res.send(error)
    }
})


export default routes;
