import { Request,Response} from 'express';
import PracticaBancoPiezometrico from '../models/practicaBancoPiezometrico';

export const getPracticasBancoPieazometrico = async (req:Request,res:Response) => {

    const practicaBancoPiezometrico = await PracticaBancoPiezometrico.findAll();

    res.json(practicaBancoPiezometrico);
}

export const getPracticaBancoPieazometrico = async (req:Request,res:Response) => {

    const {nombre} = req.params;
    try {
        const practicaBancoPiezometrico = await PracticaBancoPiezometrico.findOne({
            where:{
                nombre:nombre
            }
        });
        res.json(practicaBancoPiezometrico);
    } catch (error) {
        res.status(404).json({
            msg: `No existe una practica de tipo banco piezometrico con el nombre ${nombre}`
        });
    }

}

export const postPracticaBancoPieazometrico = async (req:Request,res:Response) => {

    const {body} = req;

    try {
        const existePracticaBancoP = await PracticaBancoPiezometrico.findOne({
            where: {
                nombre: body.nombre
            }
        });
        
        if(existePracticaBancoP){
            return res.status(400).json({
                msg: `Ya existe una practica con ese nombre ${body.nombre}`
            });
        }

        const practicaBancoPiezometrico = new PracticaBancoPiezometrico(body);
        await practicaBancoPiezometrico.save();
        res.json(practicaBancoPiezometrico);    
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}

export const putPracticaBancoPieazometrico = async (req:Request,res:Response) => {

    const { nombre } = req.params;
    const {body} = req;

    try {
        const practicaBancoPiezometrico = await PracticaBancoPiezometrico.findOne({
            where: {
                nombre: nombre
            }
        });
        if(!practicaBancoPiezometrico){
            return res.status(404).json({
                msg: `La practica con el nombre ${nombre} no existe`
            });
        }

        await practicaBancoPiezometrico.update(body);
        res.json(practicaBancoPiezometrico);    
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}

export const deletePracticaBancoPieazometrico = async (req:Request,res:Response) => {

    const { nombre } = req.params;

    
    const practicaBancoPiezometrico = await PracticaBancoPiezometrico.findOne({
        where: {
            nombre: nombre
        }
    });
    if(!practicaBancoPiezometrico){
        return res.status(404).json({
            msg: `La practica con el nombre ${nombre} no existe`
        });
    }

    await practicaBancoPiezometrico.destroy();
    res.json({
        msg: `Practica ${nombre} eliminada`
    });   
}