//Data fetch
window.onload = () => {
    var title = document.getElementById('title');
    title.innerHTML = '<p class="edit-text">' + sessionStorage.getItem('title') + '</p>';
    var writer = document.getElementById('writer');
    writer.innerHTML = '<p class="edit-text">' + sessionStorage.getItem('writer') + '</p>'
    var content = document.getElementById('contents');
    content.innerHTML = '<p class="edit-text">' + sessionStorage.getItem('content') + '</p>'
};

//Edit function
document.addEventListener('click', (po) => {
    if (po.target.id === 'edit-btn') {
        var btn = document.getElementById('edit-btn');
        //When the Edit Button is pressed.
        if (btn.innerText.trim() === 'Edit') {
            btn.innerHTML = 'Save <i class="eb eb-save"></i>';
            var editableContents = document.querySelectorAll('.edit-text');
            Array.from(editableContents).forEach((editableContent, index) => {
                editableContent.classList.add('editEnabled');
                editableContent.setAttribute('contenteditable', true);
            });
        }
        //When the save Button is pressed.
        else if (btn.innerText.trim() === 'Save') {
            btn.innerHTML = 'Edit <i class="eb eb-edit"></i>';
            var editableContents = document.querySelectorAll('.edit-text');
            Array.from(editableContents).forEach((editableContent, index) => {
                editableContent.classList.remove('editEnabled');
                editableContent.setAttribute('contenteditable', false);
            });
        }
    }
});

var likeCount = 0;
// Event Listener for Like  button
document.getElementById('like-btn').addEventListener('click', (po) => {
    po.target.innerHTML = '<i class="eb eb-thumbs-up"></i> Liked';
    likeCount++;
    if (likeCount == 1) {
        document.querySelector('.likeSec .likeCount').innerHTML = '1 person likes this!';
    }
    else {
        document.querySelector('.likeSec .likeCount').innerHTML = likeCount + ' people like this!';
    }
});

//Add comments
document.getElementById('postComment').addEventListener('click', (po) => {
    if (po.target.id == 'comment-btn') {
        var commentText = document.getElementById('txt-comment').value;
        var commentBox = document.querySelector('.viewComment .comments');
        if (commentText.trim() != '') {
            if (commentBox.style.display = "none") {
                commentBox.style.display = "block";
            }
            commentBox.innerHTML = '<div>' + commentText + '</div>' + commentBox.innerHTML;
            document.getElementById('txt-comment').value = '';
        }
        else {
            alert("Comment cannot be empty");
            document.getElementById('txt-comment').value = '';
        }
    }
});