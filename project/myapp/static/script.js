const comments = [];

function displayComments() {
  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = '';

  comments.forEach((comment, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="comment-info">Comment ${index + 1} - ${new Date(comment.timestamp).toLocaleString()}</div>
      <div class="comment-text">${comment.text}</div>
      <div class="comment-actions">
        <button onclick="likeComment(${index})">Like (${comment.likes})</button>
        <button onclick="dislikeComment(${index})">Dislike (${comment.dislikes})</button>
      </div>
    `;
    commentsList.appendChild(li);
  });
}

function addComment(commentText) {
  comments.push({
    text: commentText,
    timestamp: Date.now(),
    likes: 0,
    dislikes: 0,
  });

  displayComments();
}

function likeComment(index) {
  comments[index].likes++;
  displayComments();
}

function dislikeComment(index) {
  comments[index].dislikes++;
  displayComments();
}

document.getElementById('comment-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();

  if (commentText !== '') {
    addComment(commentText);
    commentInput.value = '';
  }
});
