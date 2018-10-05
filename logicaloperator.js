// &&- And operator- both sides need to be true
// ||- Or operator - one side need to be true



let isVerfied = true
let isLoggedin = true
let hasPayementtoken = true
let isGuest = true


if(isVerfied && isLoggedin && hasPayementtoken){
	console.log('greeting message to user')
	console.log('grant access to paid cources')
}
else if(isVerfied || isGuest){
	console.log('greeting message to guest')
	console.log('allow free previews')
}
else{
	console.log('please register')
}
	

