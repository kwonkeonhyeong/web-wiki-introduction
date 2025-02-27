console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("comment");
  const textarea = form.querySelector("textarea");
  const commentList = document.querySelector(".comment-list");
  const submitButton = form.querySelector("button[type='button']");
  const resetButton = form.querySelector("button[type='reset']");

  submitButton.addEventListener("click", () => {
    const commentText = textarea.value.trim();

    if (commentText === "") {
      alert("댓글을 입력해주세요.");
      return;
    }

    const commentItem = document.createElement("li");
    commentItem.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지"/>
          <span>방문자</span>
        </div>
        <div class="comment-content">
          ${commentText}
        </div>
      </div>
    `;

    commentList.appendChild(commentItem);
    textarea.value = "";
  });

  resetButton.addEventListener("click", () => {
    textarea.value = "";
  });
});
