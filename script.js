'use strict'

const sidebarModal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const showSidebarBtn = document.querySelector('.show-sidebar')

function toggleSidebarModal() {
  sidebarModal.classList.toggle('open')
  overlay.classList.toggle('open')

  if (sidebarModal.classList.contains('open')) showSidebarBtn.classList.add('opened')
  else showSidebarBtn.classList.remove('opened')
}

showSidebarBtn.addEventListener('click', toggleSidebarModal)
overlay.addEventListener('click', toggleSidebarModal)
