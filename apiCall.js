async function getComments() {
    let comments
    const response = await fetch(getCommentsUrl, {
        headers:{
            'Content-Type': 'application/json',
            'apiKey': apiKey,
            'Access-Control-Allow-Origin': '*'
        }
    })
    comments = await response.json()
    return comments
}

let jsonDataPromise
jsonDataPromise = getComments()
const commentSection = document.getElementById("comment-section");

jsonDataPromise.then(data => {
    data.message.forEach(item => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
  
      const emailPara = document.createElement("p");
      emailPara.textContent = "Email: " + item.email;
  
      const commentPara = document.createElement("p");
      commentPara.textContent = "Comment: ";
  
      const commentText = document.createElement("span");
      if (item.comment.length > 255) {
        commentText.textContent = item.comment.slice(0, 255);
        const expandButton = document.createElement("span");
        expandButton.textContent = " ...Read More";
        expandButton.classList.add("expand-button");
        expandButton.addEventListener("click", () => {
          commentText.textContent = item.comment;
          expandButton.style.display = "none";
        });
        commentPara.appendChild(commentText);
        commentPara.appendChild(expandButton);
      } else {
        commentText.textContent = item.comment;
        commentPara.appendChild(commentText);
      }
  
      commentDiv.appendChild(emailPara);
      commentDiv.appendChild(commentPara);
  
      commentSection.appendChild(commentDiv);
    });
  });