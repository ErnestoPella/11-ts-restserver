import { Request, Response } from 'express';
import Rol from '../models/rol';

export const getRoles = async (req:Request, res:Response) =>{
    
    const roles = await Rol.findAll();

    res.json(roles);

}

export const getRol = async (req:Request,res:Response) =>{

    const {descripcion} = req.params;
    try {
        const rol = await Rol.findOne({
            where:{
                descripcion: descripcion
            }
        });
        res.json(rol);
    } catch (error) {
        res.status(404).json({
            msg: `No existe un rol con ese nombre ${descripcion}`
        });
    }
}

export const postRol = async (req:Request, res:Response) => {

    const {body} = req;

    try {
        const existeRol = await Rol.findOne({
            where: {
                descripcion: body.descripcion
            }
        });

        if (existeRol) {
            return res.status(400).json({
                msg:`Ya existe un rol llamado ${body.descripcion}`
            });
        }

        const rol = new Rol(body);
        await rol.save();
        res.json(rol);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}

export const putRol = async (req: Request, res:Response) =>{

    const {descripcion} = req.params;
    const {body} = req;

    try {
        const rol = await Rol.findOne({
            where: {
                descripcion: descripcion
            }
        });
        if (!rol) {
            return res.status(404).json({
                msg:`No existe el rol ${descripcion}`
            });
        }

        await rol.update(body);
        res.json(rol);

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}

export const deleteRol = async (req:Request,res:Response) => {

    const {descripcion} = req.params;

    const rol = await Rol.findOne({
        where:{
            descripcion: descripcion
        }
    });
    if(!rol){
        return res.status(404).json({
            msg:`No existe el rol ${descripcion}`
        });
    }

    await rol.destroy();
    res.json({
        msg:`Rol eliminado`
    });
}
