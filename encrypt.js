// function Encrypt(){
//     var input = document.getElementById("name").value;
// 		var enc = "";
// 		var str = "";
// 		// make sure that input is string
// 		str = input.toString();
// 		for (var i = 0; i < str.length; i++) {
// 			// create block
// 			var a = str.charCodeAt(i);
// 			// bitwise XOR
// 			var b = a ^ 3;
// 			enc = enc + String.fromCharCode(b);
//         }
//         document.getElementById("encrypt").innerHTML= enc;
// 		return false;

// }

// function Encrypt(){
// 	var input = document.getElementById("name").value;
// 	input = input.toUpperCase();
// 	var enc="";
// 	var results =[];
// 	for(var i =0; i<input.length;i++)
// 	{
// 		var num = input.charCodeAt(i);
		
// 		if(num >=65 && num <=75){
// 			num += 13;
// 		}

// 		else if(num >=76 && num <= 90){
// 			num += 13;
// 		}

// 		results.push(String.fromCharCode(num));
// 	}
// 	var enc = results.join('');
// 	document.getElementById("encrypt").innerHTML= enc;
// 		return false;

// }

// function Encrypt(){
// 	var num =3 ;
// 	var str = document.getElementById("name").value;
// 	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split();
// 	var lowerCaseStr = str.toLowerCase();
// 	var newStr ='';
	
// 	for(var i= 0;i < lowerCaseStr.length; i++)
// 	{
// 		var currentLetter = lowerCaseStr[i];
// 		if(currentLetter === '')
// 		{
// 			newStr += currentLetter;
// 			continue;
// 		}
// 		var currentIndex = alphabet.indexOf(currentLetter);
// 		var newIndex = currentIndex +num;
// 		if(newIndex > 25){
// 			newIndex = newIndex-26;
// 		}
// 		if(newIndex < 0){
// 			newIndex = newIndex + 26;
// 		}	

// 		if(str[i] === str[i].toUpperCase){
// 			newStr += alphabet[newIndex].toUpperCase();
// 		}
// 		else{
// 			newStr += alphabet[newIndex];
// 		}

// 	}
// 	document.getElementById("encrypt").innerHTML= newStr;
// 	return false;
// }


function Encrypt(){
	var input = document.getElementById("name").value;
		var enc = "";
		var str = "";
		var bit = "";
		var arr = "";
		// make sure that input is string
		str = input.toString();
		for (var i = 0; i < str.length; i++) 
		{
			// create block
			bit = "";
			arr = "";
			var a = str.charCodeAt(i);
			console.log(a);
			var b = a.toString(2);
			console.log(b);
			if(b.length<16)
			{
				var t = 16 - b.length;
				console.log(t);
				// console.log(bit.fill(0,0,t));
				while(t>0)
				{
					b = '0' +b;	
					t--;
				}

			}
			enc = enc + b;
			console.log(enc);
        }
        document.getElementById("encrypt").innerHTML= enc;
		return false;
}