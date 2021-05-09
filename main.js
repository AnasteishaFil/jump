if (document.documentElement.clientWidth > 600){
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
let isJumping = false	
let gravity = 0.9
let GameOver = false

$('.button').on('click', function(){
	window.location.reload();
})

function control(e) {
	if (!GameOver){
			if (!isJumping){
				isJumping = true
				jump()
			}
	}
}
document.addEventListener('keydown', control)
function controlm(e) {
	if (!GameOver){
			if (!isJumping){
				isJumping = true
				jump()
			}
		}
}
document.addEventListener('touchstart', controlm)



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
		if (meteorPosition > -10 && meteorPosition < 100 && position < 111){
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
}

else{
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
	let isJumping = false	
	let gravity = 0.9
	let GameOver = false
	
	$('.button').on('click', function(){
		window.location.reload();
	})
	
	function controlm(e) {
		if (!GameOver){
				if (!isJumping){
					isJumping = true
					jump()
				}
			}
	}
	document.addEventListener('touchstart', controlm)
	
	
	let position = 0
	function jump(){
		let count = 0
		let timerId = setInterval(function(){
			if(count == 10){
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
				}, 22)
			}
		count++
		position += 20
		position = position * gravity
		astronaut.style.bottom = position + 'px'
		}, 22)
	}
	
	function generateMeteor(){
		let randomTime = (Math.random() * 2100) + 1000
		let meteorPosition = 600
		const meteor = document.createElement('div')
		if (!GameOver) meteor.classList.add('meteor')
		game.appendChild(meteor)
		meteor.style.left = meteorPosition + 'px'
	
		let timerId = setInterval(function(){
			if (meteorPosition > 0 && meteorPosition < 50 && position < 70){
				clearInterval(timerId)
				loser.innerHTML = 'Game Over!'
				GameOver = true
			}
			meteorPosition -=10
			meteor.style.left = meteorPosition + 'px'
		}, 22)
		if(!GameOver) setTimeout(generateMeteor, randomTime)
	}
	generateMeteor()
	})
}
