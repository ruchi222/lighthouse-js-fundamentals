function diceroller(num){
	for (var i = 0; i <= num-1;  i++) {
		var ranDice = Math.floor(6*Math.random())+1;
		console.log(ranDice)
	};
};
diceroller(5);
