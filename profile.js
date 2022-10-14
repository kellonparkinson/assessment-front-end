const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

const colorAlert = () => {
    alert('"My favorite color is light tan." - Sister Encarnacion')
}
colorBtn.addEventListener('click', colorAlert)

const placeAlert = () => {
    alert('Fly me to the moon.')
}
placeBtn.addEventListener('click', placeAlert)

const ritualAlert = () => {
    alert('Wake up. Poop. Exercise.')
}
ritualBtn.addEventListener('click', ritualAlert)