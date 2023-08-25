const forwardArrow = document.querySelector('.forward_arrow').addEventListener('click', showNextComment);
const backArrow = document.querySelector('.back_arrow').addEventListener('click', showPreviousComment);

var comments = document.querySelectorAll('.student_comment');
var currentCommentIndex = 0;

function showNextComment() {
  comments[currentCommentIndex].style.display = 'none';

  // Increment the current index or go back to the first comment if the last
  // one is reached
  currentCommentIndex = (currentCommentIndex + 1) % comments.length;

  comments[currentCommentIndex].style.display = 'flex';
}

function showPreviousComment() {
  comments[currentCommentIndex].style.display = 'none';

  // Decrement the current index or go to the last comment if the first one is reached
  currentCommentIndex = (currentCommentIndex - 1 + comments.length) % comments.length;

  comments[currentCommentIndex].style.display = 'flex';
}

