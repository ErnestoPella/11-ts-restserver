import { Request,Response } from 'express';
import Traza from '../models/traza';

export const getTrazas = async (req: Request, res:Response) => {

    const trazas = await Traza.findAll();

    res.json(trazas);
}

export const getTraza = async (req: Request, res:Response) => {

    const {id} = req.params;

    try {
        const traza = await Traza.findByPk(id);
        res.json(traza);
    } catch (error) {
        res.status(404).json({
            msg:`No existe una traza con el id ${id}`
        });
    }
    
}

export const postTraza = async (req: Request, res:Response) => {

    const { body } = req;

    try {
        
        const traza = new Traza(body);
        await traza.save();
        
        res.json(traza);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
  
}

export const putTraza = async (req: Request, res:Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const traza = await Traza.findByPk(id);
        if(!traza){
            return res.status(400).json({
                msg: `No existe una traza con ese id ${id}`
            });
        }

        await traza.update(body);
        res.json(traza);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}
export const deleteTraza = async (req: Request, res:Response) => {

    const {id} = req.params;

    const traza = await Traza.findOne({
        where:{
            id: id
        }
    });
    if(!traza){
        return res.status(400).json({
            msg: `No existe una traza con ese id ${id}`
        });
    }

    await traza.destroy();
    res.json({
        msg: `Traza eliminada`
    });
}