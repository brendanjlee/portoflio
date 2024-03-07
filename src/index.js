import createProjectCardElem from "./modules/loadProjectCards"
import battleship from '../assets/projectAssets/project-battleship.png'

const workContainer = document.querySelector('.projectCardsContainer')
const desc = 'A recreation of the classic Battleship game. Play against a computer on a randomized board.'
const bs = createProjectCardElem(
  'Battleship',
  desc,
  battleship,
  'https://github.com/brendanjlee/battleship',
  'https://brendanjlee.github.io/battleship/'
)

const b2 = createProjectCardElem(
  'Battleship',
  desc,
  battleship,
  'https://github.com/brendanjlee/battleship',
  'https://brendanjlee.github.io/battleship/'
)

const b3 = createProjectCardElem(
  'Battleship',
  desc,
  battleship,
  'https://github.com/brendanjlee/battleship',
  'https://brendanjlee.github.io/battleship/'
)

const b4 = createProjectCardElem(
  'Battleship',
  desc,
  battleship,
  'https://github.com/brendanjlee/battleship',
  'https://brendanjlee.github.io/battleship/'
)

const b5 = createProjectCardElem(
  'Battleship',
  desc,
  battleship,
  'https://github.com/brendanjlee/battleship',
  'https://brendanjlee.github.io/battleship/'
)

const b6 = createProjectCardElem(
  'Battleship',
  desc,
  battleship,
  'https://github.com/brendanjlee/battleship',
  'https://brendanjlee.github.io/battleship/'
)

workContainer.appendChild(bs)
workContainer.appendChild(b2)
workContainer.appendChild(b3)
workContainer.appendChild(b4)
workContainer.appendChild(b5)
workContainer.appendChild(b6)