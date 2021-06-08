import { getCEPControler, getLatLongControler,createAgendaControler, findClinicControler } from './config/functionsAgendamento';
import { Response, Request, Router} from 'express';



const routes = Router();

routes.get("/", (req:Request,res:Response) =>{
   
    
    res.send("Api Agendamento");

})


routes.post("/getcep",(req:Request,res:Response) =>{

    try {
        
        getCEPControler.handle(req,res);
    } catch (error) {
        res.send(error)
    }
   
})



routes.post("/getlatlong",(req:Request,res:Response) =>{

    try {
        
        getLatLongControler.handle(req,res);
    } catch (error) {
        res.send(error)
    }
   
})


routes.post("/createagenda",(req:Request,res:Response) =>{
    try {
        
      
       createAgendaControler.handle(req,res);
       

    } catch (error) {
        res.send(error)
    }
})

routes.post("/encontrar-clinica", (req:Request,res:Response) =>{
   console.log(req)
    try {
        
        findClinicControler.handle(req,res);
    } catch (error) {
        res.send(error)
    }

})


export default routes;
