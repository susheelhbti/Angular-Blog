import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  posts: Array<any>

  constructor(private db: AngularFirestore, private router: Router) { }

  getPosts() {
    return this.db.collection('posts').valueChanges();
  }

  getPost(postId) {
    return this.db.collection('posts').doc(postId).valueChanges();
  }

  createPost(post, id) {
    this.db.collection('posts').doc(id).set(post).then(
      () => this.router.navigate(['post', id])
    );
  }

}