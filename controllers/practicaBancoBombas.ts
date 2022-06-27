import { Request, Response } from 'express';
import PracticaBancoBomba from '../models/practicaBancoBomba';

export const getPracticasBancoBomba = async (req: Request, res: Response) => {

    const practicaBancoBomba = await PracticaBancoBomba.findAll();

    res.json(practicaBancoBomba);
}

export const getPracticaBancoBomba = async (req:Request, res:Response) => {

    const { nombre } = req.params;

    try {
        const existepracticaCanal = await PracticaBancoBomba.findOne({
            where: {
                nombre: nombre
            }
        });
        res.json(existepracticaCanal);    
    } catch (error) {
        res.status(404).json({
            msg: `No existe una practica con ese nombre${nombre}`
        });
    }


}
export const postPracticaBancoBomba = async (req:Request, res:Response) => {
    
    const {body} = req;

    try {
        const existepracticaBancoB = await PracticaBancoBomba.findOne({
            where: {
                nombre: body.nombre
            }
        });
        
        if(existepracticaBancoB){
            return res.status(400).json({
                msg: `Ya existe una practica con ese nombre ${body.nombre}`
            });
        }

        const practicaBancoBomba = new PracticaBancoBomba(body);
        await practicaBancoBomba.save();
        res.json(practicaBancoBomba);    
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}
export const putPracticaBancoBomba = async (req:Request, res:Response) => {
    const { nombre } = req.params;
    const {body} = req;

    try {
        const practicaBancoBomba = await PracticaBancoBomba.findOne({
            where: {
                nombre: nombre
            }
        });
        if(!practicaBancoBomba){
            return res.status(404).json({
                msg: `La practica con el nombre ${nombre} no existe`
            });
        }

        await practicaBancoBomba.update(body);
        res.json(practicaBancoBomba);    
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}
export const deletePracticaBancoBomba = async (req:Request, res:Response) => {
    const { nombre } = req.params;

    
    const practicaBancoBomba = await PracticaBancoBomba.findOne({
        where: {
            nombre: nombre
        }
    });
    if(!practicaBancoBomba){
        return res.status(404).json({
            msg: `La practica con el nombre ${nombre} no existe`
        });
    }

    await practicaBancoBomba.destroy();
    res.json({
        msg: `Practica ${nombre} eliminada`
    });    
   
}