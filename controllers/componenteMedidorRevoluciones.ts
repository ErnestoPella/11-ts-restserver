import { Request, Response } from 'express';
import ComponenteMedidorRevoluciones from '../models/componenteMedidorRevolucion';


export const getComponentesMedidorRevoluciones = async (req:Request,res:Response) => {

    const componentes = await ComponenteMedidorRevoluciones.findAll();

    res.json(componentes);
}

export const getComponenteMedidorRevoluciones = async (req:Request,res:Response) => {

    const {id} = req.params;

    try {
        const componenteMedidorRevoluciones = await ComponenteMedidorRevoluciones.findOne({
            where:{
                id:id
            }
        });
        res.json(componenteMedidorRevoluciones);
    } catch (error) {
        res.status(404).json({
            msg:`El medidor de revoluviones con el i ${id} no existe`
        });
    }
}

export const postComponenteMedidorRevoluciones = async (req:Request, res:Response) => {

    const {body} = req;

    try {
        const existeMedidor = await ComponenteMedidorRevoluciones.findOne({
            where:{
                id:body.id
            }
        });
        if(existeMedidor){
            return res.status(400).json({
                msg: `El medidor de revoluciones ya existe`
            });
        }
        const componenteMedidorRevoluciones = new ComponenteMedidorRevoluciones(body);
        await componenteMedidorRevoluciones.save();
        res.json({
            msg:`Medidor agregado`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });   
    }
}

export const putComponenteMedidorRevoluciones = async (req:Request,res:Response) => {
    
    const {id} = req.params;
    const {body} = req;

    try {
        const componenteMedidorRevoluciones = await ComponenteMedidorRevoluciones.findOne({
            where:{
                id:id
            }
        });
        if(!componenteMedidorRevoluciones){
            return res.status(400).json({
                msg: `El medidor de revoluciones ${id} no existe`
            });
        }

        await componenteMedidorRevoluciones.update(body);
        res.json({
            msg:`Medidor actualizado`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });   
    }

}

export const deleteComponenteMedidorRevoluciones = async (req:Request, res:Response) => {

    const {id} = req.params;

    const componenteMedidorRevoluciones = await ComponenteMedidorRevoluciones.findOne({
        where:{
            id:id
        }
    });
    if(!componenteMedidorRevoluciones){
        return res.status(400).json({
            msg: `El medidor de revoluciones ${id} no existe`
        });
    }

    await componenteMedidorRevoluciones.destroy();
    res.json({
        msg:`Medidor eliminado`
    });
}