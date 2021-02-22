let selectedPost;


redirectPost = () => {
    let writer = selectedPost.querySelector(".writer p").innerText.trim();
    let title = selectedPost.querySelector(".title p").innerText.trim();
    let content = selectedPost.querySelector(".content").innerText.trim();

    sessionStorage.setItem('writer', writer);
    sessionStorage.setItem('title', title);
    sessionStorage.setItem('content', content);

    window.location.href = '../html/post.html'
};


deletePost = () => {
    selectedPost.remove();
};


getPostData = (po) => {
    if (po.target.classList.contains('fa-trash')) {
        selectedPost = (po.target.parentElement.parentElement.parentElement.parentElement);
    }

    if (po.target.classList.contains('fa-ellipsis-h')) {
        selectedPost = (po.target.parentElement.parentElement.parentElement);
        redirectPost();
    }
};


document.getElementById("postCtr").addEventListener("click", getPostData);