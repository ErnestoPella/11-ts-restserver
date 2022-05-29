import {Request, Response} from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async (req: Request,res: Response) =>{

    const usuarios = await Usuario.findAll();

    res.json(usuarios);

}

export const getUsuario = async (req: Request,res: Response) =>{

    const {username} = req.params;
    try {
        const usuario = await Usuario.findOne({
            where:{
                username: username
            }
        });
        res.json(usuario);    
    } catch (error) {
        res.status(404).json({
            msg: `No existe un usuario con ese username${username}`
        });
    }
    
}

export const postUsuario = async (req: Request,res: Response) =>{

    const { body } = req;

    try {

        const existeUsuario = await Usuario.findOne({
            where: {
                username: body.username
            }
        });
        
        if(existeUsuario){
            return res.status(400).json({
                msg: `Ya existe un usuario llamado ${body.username}`
            });
        }

        const usuario = new Usuario(body);
        await usuario.save();

        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
   

}

export const putUsuario = async (req: Request,res: Response) =>{

    const {username} = req.params;
    const {body} = req;
    try {

        const usuario = await Usuario.findOne({
            where: {
                username: username
            }
        });
        if(!usuario){
            return res.status(404).json({
                msg: `No existe el usuario ${username}`
            })
        }
        
        
        await usuario.update(body);
        res.json(usuario);

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}

export const deleteUsuario = async (req: Request,res: Response) =>{

    const {username} = req.params;
    
    const usuario  = await Usuario.findOne({
        where:{
            username: username
        }
    });
    if(!usuario){
        return res.status(404).json({
            msg:`No existe el usuario ${username}`
        });
    }

    await usuario.destroy();
    res.json({
        msg: `Usuario eliminado`
    });
}