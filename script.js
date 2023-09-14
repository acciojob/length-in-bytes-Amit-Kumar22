let count=0;
const byteSize = (str) => {
  // write your code here
	for(let i=0; i<str.length; i++){
		count++;
	}
	if(str==""){
		count=0;
	}
	return count;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
