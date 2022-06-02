import { Router } from "express";
import { getComponentesMedidorRevoluciones,getComponenteMedidorRevoluciones,postComponenteMedidorRevoluciones,putComponenteMedidorRevoluciones,deleteComponenteMedidorRevoluciones } from "../controllers/componenteMedidorRevoluciones";


const router = Router();

router.get('/',getComponentesMedidorRevoluciones);
router.get('/:id',getComponenteMedidorRevoluciones);
router.post('/',postComponenteMedidorRevoluciones);
router.put('/:id',putComponenteMedidorRevoluciones);
router.delete('/:id',deleteComponenteMedidorRevoluciones);


export default router;