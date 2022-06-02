import { Router } from "express";
import { getComponentesTanques,getComponenteTanque,postComponenteTanque,putComponenteTanque,deleteComponenteTaque } from '../controllers/componenteTanques';

const router = Router();

router.get('/',getComponentesTanques);
router.get('/:id',getComponenteTanque);
router.post('/',postComponenteTanque);
router.put('/:id',putComponenteTanque);
router.delete('/:id',deleteComponenteTaque);

export default router;