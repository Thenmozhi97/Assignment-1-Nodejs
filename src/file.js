const file = require("./index");
file.myFileWriter("file.txt","Hello");
file.myFileUpdater("file.txt", " World");
file.myFileReader("file.txt");
file.myFileDeleter("file.txt");