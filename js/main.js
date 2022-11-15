function scrollTop(ele) {
  const target = document.getElementById(ele);
  target.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
scrollTop("scrollTop");


const target = document.getElementById("hamburger");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById('nav');
  nav.classList.toggle('in');
});


const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});

const names = document.getElementById('name');
const email = document.getElementById('email');
const inquiry = document.getElementById('inquiry');
const submitBtn=document.getElementById('submitBtn')
submitBtn.addEventListener('click', () => {
    if (names == "") {
      alert("❗️このフィールドを入力してください。");
      return false;
    } else if (email == "") {
      alert("❗️このフィールドを入力してください。");
      return false;
    } else if (email !== "/.+@.+\..+/") {
      alert("メールアドレスに「@」を挿入してください。「" + email + "」内に「@]がありません。")
      return false;
    } else if (inquiry == "") {
      alert("❗️このフィールドを入力してください。");
      return false;
    } else {
      return true;
    }     
  });
