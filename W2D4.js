//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.
function sameLength(str1,str2){
	if (str1.length === str2.length){
		return true
	}
}
console.log sameLength("meena","meena")

//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough (str){
if (str.length >= 4){
  	return true 
}
}
 passwordLongEnough ('meena44')

//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
function  rentalCar ( str , num ){
	if (str=== "meena"&& num>= 21){
		return "Have fun driving"
	}
	return 'You cannot have the keys'
}
rentalCar ( "meena" , 22 )

// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.
function max(num1,num2){
	if (num1.lingth > num2.lingth ){
		return num1 
	}
	 return num2 
}
max(1,2)


// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.
function min(num1,num2){
	if (num1.lingth < num2.lingth ){
		return num2 
	}
	 return num1 
}
min(1,2)
