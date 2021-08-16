const teams = document.querySelectorAll('.team');
const dinamo = document.querySelector('.team--dinamo');
const tver = document.querySelector('.team--tver');
const links = document.querySelectorAll('.team-lineups__link');

const point = 1;

let opacityUp = (block) => {
  block.style.opacity = 1;
  console.log(block.style.opacity);
}

const getTeam = (point) => {
  let i;
  for (i = 0; i < teams.length; i++){
    teams[i].classList.add('visually-hidden');
  }
  teams[point - 1].classList.remove('visually-hidden');
  setTimeout(opacityUp(teams[point - 1]), 20000);
}
getTeam(point);

links.forEach((item) => {
  item.addEventListener('click', () => {
    let i;
    for (i = 0; i < teams.length; i++){
      links[i].classList.remove('team-lineups__link--active');
    }
    item.classList.add('team-lineups__link--active');
    getTeam(item.id);
  })
})
