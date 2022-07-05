import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(public af: AngularFirestore) { }

  getEductionList() {
    return this.af.collection('education').snapshotChanges();
  }

   getexpeList() {
    return this.af.collection('exper').snapshotChanges();
   }
   getSkillsList() {
    return this.af.collection('skills').snapshotChanges();
  }

  getInfoList() {
    return this.af.collection('info').snapshotChanges();
  }

  getexprtext() {
    return this.af.collection('exText').snapshotChanges();
  }
}
