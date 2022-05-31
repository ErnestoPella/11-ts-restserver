import {Request,Response} from 'express';
import TrazaComponente from '../models/trazaComponente';

export const getTrazasComponentes = async (req:Request,res:Response) => {

    const trazasComponentes = await TrazaComponente.findAll();

    res.json(trazasComponentes);
}

export const getTrazaComponente = async (req:Request,res:Response) => {

    const {id} = req.params;

    try {
        const trazaComponente = await TrazaComponente.findOne({
            where:{
                id: id
            }
        });
        res.json(trazaComponente);    
    } catch (error) {
        res.status(404).json({
            msg: `No existe la traza con id ${id}`
        });
    }
    
}

export const postTrazaComponente = async (req:Request,res:Response) => {

    const {body} = req;

    try {
        const existetrazaComponente = await TrazaComponente.findOne({
            where:{
                id: body.id
            }
        });
        if(existetrazaComponente){
            return res.status(400).json({
                msg: `Ya existe una traza con el id ${body.id}`
            });
        }
        
        const trazaComponente = new TrazaComponente(body);
        await trazaComponente.save();

        res.json(trazaComponente);
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
    
}


export const putTrzaComponente = async (req: Request, res: Response) => {

    const { id } = req.params;
    const {body} = req;

    try {
        const trazaComponente = await TrazaComponente.findOne({
            where:{
                id: id
            }
        });
        if(!trazaComponente){
            return res.status(404).json({
                msg: `No existe la traza ${id}`
            });
        }

        await trazaComponente.update(body);
        res.json(trazaComponente);

    } catch (error) {
        res.status(500).json({
            msg:`Hable con el admin`
        });
    }
}


export const deleteTrazaComponente = async (req:Request,res:Response) => {
    const {id} = req.params;

    
    const trazaComponente = await TrazaComponente.findOne({
        where:{
            id: id
        }
    });
    if(!trazaComponente){
        return res.status(400).json({
            msg: `No existe una traza con el id ${id}`
        });
    }
    
    
    await trazaComponente.destroy();
    res.json({
        msg: `Traza eliminada`
    });
}