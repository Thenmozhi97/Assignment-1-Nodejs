const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		 await fs.writeFile(fileName, fileContent)
	}catch(e){
		console.log(e);
	}
}
// myFileWriter("File.txt","Hello")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const data = await fs.readFile(fileName,{encoding:"utf-8"})
		console.log(data);
	}catch(e){
		console.log(e);
	}
}
// myFileReader("File.txt")

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		 await fs.appendFile(fileName, fileContent)
	}catch(e){
		console.log(e);
	}
	
}
// myFileUpdater("File.txt"," World")
const myFileDeleter = async (fileName) => {
	// write code here
	try{
			await fs.unlink(fileName)
	}catch(e){
		console.log(e);
	}	
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }