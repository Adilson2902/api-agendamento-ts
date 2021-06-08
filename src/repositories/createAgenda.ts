
import AgendaFunctions from "../interface/templateAgenda";
import firebase from "../config/firebaseconfig";


export class CriaAgenda implements AgendaFunctions{
 
 async  create(arraydiadesemana,arraysabado,arraydomingo,clinica:string){
   
   

    const date = new Date();
    const monthlenght = new Date(date.getFullYear(),date.getMonth()+1,0);
    const hoursAgendadiadesemana = arraydiadesemana;
    const hoursAgendasabado = arraysabado;
    const hoursAgendadomingo = arraydomingo;
    var response;
    let array = [];
    let arrayorder = [];
    let nameMonth;
    

    // mês pro nome da collection
    if(date.getMonth()+1 == 1){
      nameMonth = "Janeiro";
    }
    if(date.getMonth()+1 == 2){
        nameMonth = "Fevereiro";
    }
    if(date.getMonth()+1 == 3){
        nameMonth = "Março";
    }
    if(date.getMonth()+1 == 4){
        nameMonth = "Abril";
    }
    if(date.getMonth()+1 == 5){
        nameMonth = "Maio";
    }
    if(date.getMonth()+1 == 6){
        nameMonth = "Junho";
    }
    if(date.getMonth()+1 == 7){
        nameMonth = "Julho";
    }
    if(date.getMonth()+1 == 8){
        nameMonth = "Agosto";
    }
    if(date.getMonth()+1 == 9){
        nameMonth = "Setembro";
    }
    if(date.getMonth()+1 == 10){
        nameMonth = "Outubro";
    }

    if(date.getMonth()+1 == 11){
        nameMonth = "Novembro";
    }
    if(date.getMonth()+1 == 12){
        nameMonth = "Dezembro";
    }


   

    for (let i = date.getDate(); i <= monthlenght.getDate(); i++) {
       
      const dateaux = new Date();
      await dateaux.setUTCDate(i);
  


     if(dateaux.getDay()  > 0  && dateaux.getDay()  <6){
        if(hoursAgendasabado != undefined){
        for (let index = 0; index < hoursAgendadiadesemana.length; index++) {
          
            arrayorder[index] = {
                diadasemana:dateaux.getDay(),
                hoursMarked:{
                    hours:hoursAgendadiadesemana[index].hours,
                    minutes:hoursAgendadiadesemana[index].minutes
                },
                typeapplication:"",
                modeapplcation:"",
               
                dataforuser:[{
                    name:"",
                    rg:"",
                    cpf:"",
                    phone:"",
                    email:"",
                    vaccines:[{vaccine:"",quantity:""}]
                }],quantitymarked:"",
                    location :{
                        street:"",
                        district:"",
                        city:"",
                        country:"",
                        postcode:"",
                        zone:""
                    },
                    marked:false
              } 
    
           }
        }
     }

     else


     if(dateaux.getDay()  >= 6 ){
        if(hoursAgendasabado != undefined){
       for (let index = 0; index < hoursAgendasabado.length; index++) {
          
        arrayorder[index] = {
            diadasemana:dateaux.getDay(),
            hoursMarked:{
                hours:hoursAgendasabado[index].hours,
                minutes:hoursAgendasabado[index].minutes
            },
            typeapplication:"",
            modeapplcation:"",
            vaccines:[{}],
            dataforuser:{
                name:"",
                rg:"",
                cpf:"",
                phone:"",
                email:""
            },
                location :{
                    street:"",
                    district:"",
                    city:"",
                    country:"",
                    postcode:"",
                    zone:""
                },
                marked:false
          } 

       }
    }
    }

    else

    if(dateaux.getDay()  <= 0  ){
       
        if(hoursAgendadomingo != undefined){
        for (let index = 0; index < hoursAgendadomingo.length; index++) {
     
         arrayorder[index] = {
            diadasemana:dateaux.getDay(),
            
             hoursMarked:{
                 hours:hoursAgendadomingo[index].hours,
                 minutes:hoursAgendadomingo[index].minutes
             },
             typeapplication:"",
             modeapplcation:"",
             vaccines:[{}],
             dataforuser:{
                 name:"",
                 rg:"",
                 cpf:"",
                 phone:"",
                 email:""
             },
                 location :{
                     street:"",
                     district:"",
                     city:"",
                     country:"",
                     postcode:"",
                     zone:""
                 },
                 marked:false,
                 clinica:""
           } 
 
        }
        }
    
     }


       

       array[i] = {
        nameMonth,
        dia:i,
        QuantidadeVacinaClinica:"",
        QuantidadeVacinaExpress:"",
        QuantidadeVacinaHomeCare:"",
        IntervaloVacina:"",
        UnidadeClinica:"",
        order_today:arrayorder,
        daymarked:true
        }
      
         
    await firebase.firestore().collection(`${nameMonth}_Agendamento${date.getFullYear()}_${clinica}`).doc(`${i}`).set(array[i]).then(() =>{
   
        response = {
            "type":"sucess",
            "message": `agenda criada na collection ${nameMonth}_Agendamento${date.getFullYear()}_${clinica}`
        }
        
    }).catch((err) =>{
          response = {
              "type": "error",
              "message":err
          }
       })


       arrayorder = []
    }

   
    
    return response
   }

}



