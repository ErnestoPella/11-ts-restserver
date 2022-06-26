import {Request, Response} from 'express';
import UsuarioRol from '../models/usuario_rol';
import Rol from '../models/rol';

export const getUsuarioRoles = async (req:Request,res:Response) =>{
    
    const usuarioRoles = await UsuarioRol.findAll();

    res.json(usuarioRoles);

}

export const getUsuarioRol = async (req:Request,res:Response) => {

    const {username} = req.params;
    try {
        const usuarioRol = await UsuarioRol.findOne({
            where:{
                username:username
            }
        });
        res.json(usuarioRol);
    } catch (error) {
        res.status(404).json({
            msg: `No existe un usuario con ese username${username}`
        });
    }
}

export const postUsuarioRol = async (req:Request,res:Response) =>{

    const {body} = req;

    try {
        const existeUsuarioRol = await UsuarioRol.findOne({
            where:{
                username: body.username,
                rol: body.rol
            }
        });

        if (existeUsuarioRol) {
            return res.status(400).json({
                msg: `Ya existe un usuario llamado ${body.username}`
            });
        }

        const usuarioRol = new UsuarioRol(body);
        await usuarioRol.save();
        res.json(usuarioRol);

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}

export const putUsuarioRol = async (req:Request, res:Response) =>{

    const {username} = req.params;
    const {body} = req;

    try {
        const usuarioRol = await UsuarioRol.findOne({
            where:{
                username:username
            }
        });
        if (!usuarioRol) {
            return res.status(404).json({
                msg: `No existe el usuario ${username}`
            });
        }

        await usuarioRol.update(body);
        res.json(usuarioRol)
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}

export const deleteUsuarioRol = async (req:Request,res:Response) =>{

    const {username} = req.params;

    const usuarioRol = await UsuarioRol.findOne({
        where:{
            username:username
        }
    });
    if(!usuarioRol){
        return res.status(404).json({
            msg:`No existe el usuario ${username}`
        });
    }

    await usuarioRol.destroy();
    res.json({
        msg: `Usuario eliminado`
    });
}