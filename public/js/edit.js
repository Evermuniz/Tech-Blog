// javascript code to handle updates to an existing post or delete it
// the request is sent to the server and the server updates the database

const updatePost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#update-title').value.trim();
  const content = document.querySelector('#update-content').value.trim();
  const id = document.querySelector('[data-id]').dataset.id;

  if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};

const delButtonHandler = async (event) => {
    const id = document.querySelector('[data-id]').dataset.id;

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
;

// hide the update and delete buttons and show the update form for usability
const hideButtons = async (event) => {
  event.preventDefault();

  const updateForm = document.querySelector('#form');
  const buttons = document.querySelector('#actionBtns');

  updateForm.style.display = 'flex';
  buttons.style.display = 'none';
};

document.querySelector('#action').addEventListener('click', hideButtons);

document.querySelector('#submit-update').addEventListener('click', updatePost);

document
  .querySelector('#delete-post')
  .addEventListener('click', delButtonHandler);
