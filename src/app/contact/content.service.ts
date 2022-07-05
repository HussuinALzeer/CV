import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(public af: AngularFirestore) { }

  createPost(post:Post) {
    return new Promise<any>((resolve, reject) => {
      this.af.collection('posts')
        .add(post)
        .then(response => {  }
        ),(error: any) =>reject(error);
    })
  }


  
}
