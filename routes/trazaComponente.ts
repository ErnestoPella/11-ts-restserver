import { Router } from "express";
import { getTrazasComponentes,getTrazaComponente,postTrazaComponente,putTrzaComponente,deleteTrazaComponente } from "../controllers/trazaComponentes";

const router = Router();

router.get('/',getTrazasComponentes);
router.get('/:id',getTrazaComponente);
router.post('/',postTrazaComponente);
router.put('/:id',putTrzaComponente);
router.delete('/:id',deleteTrazaComponente);


export default router;