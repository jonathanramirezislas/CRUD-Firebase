import db from './firebase/config';

const usuario = {
    nombre: 'Jonathan',
    activo: true,

}

var id='';

//insert
db.collection('usuarios')
    .add(usuario)
    .then( docRef=> console.log('Id user:',docRef.id))
    .catch(e => console.log('error', e))

//Update
    const usuariosRef=db.collection('usuarios');
    usuariosRef.doc('a8rh0tMsLq53wFSuHUZB')//ID from firebase Store
                .update({activo:false})//there is another method delete the data and set a new one
                