
import firebase from 'firebase';

export const returnDocuments = 
            (snapshot:firebase.firestore.QuerySnapshot) =>{

    const documents: any[] = [];
    
    snapshot.forEach( snapHijo => {
        documents.push({
            id: snapHijo.id,
            ...snapHijo.data()
        });
    });
    console.log(documents);
     return documents;

}