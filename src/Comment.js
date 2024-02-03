// Comment.js
import React, { useState, useEffect } from 'react';
import { firestore } from './firebase'
import firebase from  'firebase/compat/app';



const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const unsubscribe = firestore
      .collection('comments')
      .where('postId', '==', postId)
      .onSnapshot((snapshot) => {
        const newComments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })); 
        setComments(newComments);
      });

    return () => unsubscribe();
  }, [postId]);

  const addComment = async () => {
    if (newComment.trim() !== '') {
      await firestore.collection('comments').add({
        postId,
        text: newComment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setNewComment('');
    }
  };

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default Comment;
