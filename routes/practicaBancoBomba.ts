import { Router } from "express"; 
import { getPracticasBancoBomba,getPracticaBancoBomba,postPracticaBancoBomba,putPracticaBancoBomba,deletePracticaBancoBomba } from "../controllers/practicaBancoBombas";

const router = Router();

router.get('/',getPracticasBancoBomba);
router.get('/:nombre',getPracticaBancoBomba);
router.post('/',postPracticaBancoBomba);
router.put('/:nombre',putPracticaBancoBomba);
router.delete('/:nombre',deletePracticaBancoBomba);


export default router;
