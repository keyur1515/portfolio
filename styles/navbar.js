const List = document.querySelectorAll('.list');

function activeLink() {
  List.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active');
}

List.forEach((item) =>
item.addEventListener('click',activeLink));
