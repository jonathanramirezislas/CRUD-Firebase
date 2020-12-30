import db from './firebase/config';
import {returnDocuments} from './helpers/showdocuments';

const usuario = {
    nombre: 'Jonathan',
    activo: true,
    salario:4550

}



//insert
db.collection('usuarios')
    .add(usuario)
    .then(docRef => console.log('Id user:', docRef.id))
    .catch(e => console.log('error', e))


const usuariosRef = db.collection('usuarios')

//Update
usuariosRef.doc('yourId')//ID from firebase Store
    .update({ activo: false })//there is another method delete the data and set a new one
    .then(response => console.log(response))
    .catch(error => console.log('error', error))

//Delete
usuariosRef.doc('###')//ID from firebase Store
    .delete()
    .then(() => console.log('Deleted'))
    .catch(error => console.log('error', error))


//Select * from usarios
//with snapshot any change in the database will be reload the page 
usuariosRef.onSnapshot(returnDocuments)

//Whit get name if the database suffer any change this will not change the state
usuariosRef.get()
            .then(returnDocuments)
            .catch(e=>console.log('error',e))


// WHERE
usuariosRef.where('activo','==','true')
            .get()
            .then(returnDocuments)
            .catch(e=>console.log('error',e))


// multiple where if throw a error make a indice in database
usuariosRef.where('activo','==',true)
            .where('nombre','==','Jonathan')
            .get()
            .then(returnDocuments)


//ORDER BY
usuariosRef.orderBy('nombre','desc')
            .orderBy('salario')
            .get()
            .then(returnDocuments)


            
//ORDER BY NOTE ther is a another method called startAfter that helps two bring the next documents like pagination
const query=usuariosRef.orderBy('nombre')

query.limit(4).get().then(returnDocuments);
