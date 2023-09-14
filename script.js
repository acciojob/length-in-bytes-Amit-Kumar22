let count=0;
const byteSize = (str) => {
  // write your code here
	const bytes = new Blob([str]);
  return bytes.size;

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str))
