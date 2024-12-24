function toggleNewPost() {
    const newPostDiv = document.getElementById('new-post');
    newPostDiv.style.display = newPostDiv.style.display === 'none' ? 'block' : 'none';
}
function addPost() {
    const postTitle = document.getElementById('post-title').value.trim();
    const postContent = document.getElementById('post-content').value.trim();

    if (!postTitle || !postContent) {
        alert('Both title and content are required!');
        return;
    }

    const postsDiv = document.getElementById('posts');

    const newPost = document.createElement('div');
    newPost.classList.add('blog-post');
    newPost.innerHTML = `
        <h2>${postTitle}</h2>
        <p>${postContent}</p>
    `;

    postsDiv.appendChild(newPost);
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    toggleNewPost();
}
