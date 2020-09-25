

// // ================== TEST1 ===================

	const changeBg = document.getElementById('changeBg');
	changeBg.addEventListener('click',function(){
		document.body.classList.toggle('dark-bg')
	})



	// // ================== TEST2 ===================

	const cRed = document.querySelector('input[name=cRed]');
	const cBlue = document.querySelector('input[name=cBlue]');
	const cGreen = document.querySelector('input[name=cGreen]');

	cRed.addEventListener('input',function(){
		const red = cRed.value;
		console.log(red);
		const green = cGreen.value;
		const blue = cBlue.value;
		// console.log(red);
		document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
	})



	cGreen.addEventListener('input',function(){
		const red = cRed.value;
		const green = cGreen.value;
		const blue = cBlue.value;
		// console.log(red);
		document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
	})


	cBlue.addEventListener('input',function(){
		const red = cRed.value;
		const green = cGreen.value;
		const blue = cBlue.value;
		// console.log(red);
		document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
	})



// ================== TEST3 ===================
	const touchOn = document.getElementById('touchOn');


	touchOn.addEventListener('click',function(){
		const testingTiga = document.getElementsByClassName('testing3')
		testingTiga[0].style.backgroundColor = 'orange';
	})

	const touchOff = document.getElementById('touchOff');


	touchOff.addEventListener('click',function(){
		const testingTiga = document.getElementsByClassName('testing3')
		testingTiga[0].style.backgroundColor = 'white';
	})

	touchOff.addEventListener('click',function(){
		const testingTiga = document.getElementsByClassName('testing3')
		testingTiga[0].style.backgroundColor = 'red';
	})






