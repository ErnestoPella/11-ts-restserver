import { Router } from "express";
import { getComponentesMiras,getComponenteMira,postComponenteMira,putComponenteMira,deleteComponenteMira} from "../controllers/componenteMiras";


const router = Router();

router.get('/',getComponentesMiras);
router.get('/:id',getComponenteMira);
router.post('/',postComponenteMira);
router.put('/:id',putComponenteMira);
router.delete('/:id',deleteComponenteMira);


export default router;