import { Request, Response } from 'express';
import ComponenteTanque from '../models/componenteTanque';


export const getComponentesTanques = async (req:Request, res:Response) => {

    const componentes = await ComponenteTanque.findAll();

    res.json(componentes);

}

export const getComponenteTanque = async (req: Request, res: Response) => {

    const {id} = req.params;

    try {
        const componenteTanque = await ComponenteTanque.findOne({
            where:{
                id_componente: id
            }
        });
        res.json(componenteTanque);
    } catch (error) {
        res.status(404).json({
            msg: `No existe un tanque con el id ${id}`
        });
    }

}

export const postComponenteTanque = async (req:Request, res: Response) => {

    const {body} = req;

    try {
        const existeTanque = await ComponenteTanque.findOne({
            where:{
                id_componente: body.id_componente
            }
        });

        if(existeTanque){
            return res.status(400).json({
                msg: `Ya existe un tanque con el id ${body.id_componente}`
            });
        }
        const componenteTanque = new ComponenteTanque(body);
        await componenteTanque.save();
        res.json({
            msg: `Tanque agregado`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });  
    }

}

export const putComponenteTanque = async (req:Request,res:Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const componenteTanque = await ComponenteTanque.findOne({
            where:{
                id_componente:id
            }
        });
        if(!componenteTanque){
            return res.json({
                msg: `El componente con el ${id} no existe`
            });
        }

        await componenteTanque.update(body);
        res.json({
            msg: `Tanque actualizado`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });  
    }
}

export const deleteComponenteTaque = async (req:Request, res:Response) => {

    const {id} = req.params;

    const componenteTanque = await ComponenteTanque.findOne({
        where:{
            id_componente:id
        }
    });
    if(!componenteTanque){
        return res.status(404).json({
            msg:`El tanque con el id ${id} no existe`
        });
    }

    await componenteTanque.destroy();
    res.json({
        msg: `Tanque${id} eliminada`
    });
}