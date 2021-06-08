import { newAgendamento } from '../repositories/newAgendamento'
import { CriaAgenda } from '../repositories/createAgenda'
import { getCEPController } from '../controller/getCEPController'
import { getLatLongController }  from '../controller/getLatLongController'
import { createAgendaController } from '../controller/createAgendaController'
import {createFindClinicController} from '../controller/findClinicController'


const newAgendamentos = new newAgendamento();
const CriaAgendas = new CriaAgenda();
const getCEPControler = new getCEPController(newAgendamentos);
const getLatLongControler = new getLatLongController(newAgendamentos);
const createAgendaControler = new createAgendaController(CriaAgendas);
const findClinicControler = new createFindClinicController(newAgendamentos)

export {getCEPControler , getLatLongControler, CriaAgendas,createAgendaControler, findClinicControler}