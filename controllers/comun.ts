import {Request, Response} from 'express';
import Comun from '../models/comun';

export const getComunes = async (req:Request,res:Response)=>{

    const comunes = await Comun.findAll();

    res.json(comunes);

}

export const getComun = async (req:Request,res:Response) =>{

    const {id_componente} = req.params;

    try {
        const comun = await Comun.findOne({
            where:{
                id_componente: id_componente
            }
        });

       res.json(comun);
    } catch (error) {
        res.status(404).json({
            msg: `No existe el componente${id_componente}`
        });
    }
}

export const postComun = async (req:Request,res:Response)=>{

    const {body} = req;

    try {
        const existeComun = await Comun.findOne({
            where:{
                id_componente: body.id_componente
            }
        });

        if(existeComun){
            return res.status(400).json({
                msg: `Ya existe ${body.id_componente}`
            });
        }

        const comun = new Comun(body);
        await comun.save();
        res.json(comun);

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}

export const putComun = async (req:Request, res:Response)=>{

    const {id_componente} = req.params;
    const {body} = req;

    try {
        const comun = await Comun.findOne({
            where:{
                id_componente:id_componente
            }
        });
        if(!comun){
            return res.status(404).json({
                msg: `No existe el componente ${id_componente}`
            });
        }

        await comun.update(body);
        res.json(comun);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}

export const deleteComun = async (req:Request,res:Response)=> {

    const {id_componente} = req.params;

    const comun = await Comun.findOne({
        where:{
            id_componente: id_componente
        }
    });
    if(!comun){
        return res.status(404).json({
            msg:`No existe el componente ${id_componente}`
        });
    }

    await comun.destroy();
    res.json({
        msg: `Usuario eliminado`
    });
}
