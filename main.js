$('.menu_btn').on('click', function (e) {
	e.preventDefault;
	$(this).toggleClass('menu_btn_active');
	$('.slide_menu').toggleClass('slide_menu_active');
	$('.nav_menu').toggleClass('nav_menu_active');
	$('.poloska1').toggleClass('poloska_active');
	$('.poloska2').toggleClass('poloska_active');
	$('.poloska3').toggleClass('poloska_active');
});
$('.menu_link_btn').on('click', function (e) {
	e.preventDefault;
	$('.planet_list').toggleClass('planet_list_active');
	$('.arrow').toggleClass('arrow_active');
	$('.poloska_active').toggleClass('poloska_act');
	$('.poloska_active').toggleClass('poloska_act');
	$('.poloska_active').toggleClass('poloska_act');
});

document.addEventListener('DOMContentLoaded', () =>{
const astronaut = document.querySelector('.astronaut')
const game = document.querySelector('.game')
const loser = document.getElementById('loser')
const prig = document.querySelector('.prig_skok')
let isJumping = false	
let gravity = 0.9
let GameOver = false
let mobile = false
if (document.documentElement.clientWidth < 900) {mobile = true}

function control(e) {
	if (!GameOver){
		if (e.keyCode == 32){
			if (!isJumping){
				isJumping = true
				jump()
			}
		}
	}
}
document.addEventListener('keyup', control)
function controlm(e) {
	if (mobile = true && !GameOver){
			if (!isJumping){
				isJumping = true
				jump()
			}
		}
}
prig.addEventListener('click', controlm)

$('.button').on('click', function(){
	window.location.reload();
})

let position = 0
function jump(){
	let count = 0
	let timerId = setInterval(function(){
		if(count == 15){
			clearInterval(timerId)
			let downTimerId = setInterval(function(){
				if (count == 0){
					clearInterval(downTimerId)
					isJumping = false
				}
				position -= 5
				count--
				position = position * gravity
				astronaut.style.bottom = position + 'px';
			}, 20)
		}
	count++
	position += 30
	position = position * gravity
	astronaut.style.bottom = position + 'px'
	}, 20)
}

function generateMeteor(){
	let randomTime = (Math.random() * 3000) + 1000
	let meteorPosition = 2000
	const meteor = document.createElement('div')
	if (!GameOver) meteor.classList.add('meteor')
	game.appendChild(meteor)
	meteor.style.left = meteorPosition + 'px'

	let timerId = setInterval(function(){
		if (meteorPosition > -10 && meteorPosition < 90 && position < 120){
			clearInterval(timerId)
			loser.innerHTML = 'Game Over!'
			GameOver = true
		}
		meteorPosition -=10
		meteor.style.left = meteorPosition + 'px'
	}, 20)
	if(!GameOver) setTimeout(generateMeteor, randomTime)
}
generateMeteor()
})