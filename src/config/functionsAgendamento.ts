import { newAgendamento } from '../repositories/newAgendamento'
import { CriaAgenda } from '../repositories/createAgenda'
import { getCEPController } from '../controller/getCEPController'
import { getLatLongController }  from '../controller/getLatLongController'
import { createAgendaController } from '../controller/createAgendaController'


const newAgendamentos = new newAgendamento();
const CriaAgendas = new CriaAgenda();
const getCEPControler = new getCEPController(newAgendamentos);
const getLatLongControler = new getLatLongController(newAgendamentos);
const createAgendaControler = new createAgendaController(CriaAgendas);

export {getCEPControler , getLatLongControler, CriaAgendas,createAgendaControler}