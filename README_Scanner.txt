@author: Kamil Wisniewski

Running the code:

You can run this program by utilizing the given Makefile:

- make
- ./words (arg1)


Details: 

This program first analyzes the given parameters to check if it's a directory or a txt file. If it's a txt file, we read from it, tokenize every single word adhering to
the given guidelines, and then finally sort the tokenized array by occurrance and then by alphabet before printing it to StdOut.
If the given parameter is a directory(s), the program will analyze the given directory, parsing any txt files it finds, and concurrently open any subdirectories it finds to
then scan for more txt files and subdirectories etc.


Test Plan:

Uncomment the test cases in the main function to run them.

Test 1: In the first test we check if simple characters such as '.' , ',' , etc. are able to separate different words within a given textfile.

Test 2: In the second test, we check if dashes (-) and apostrophes (') are able to connect words together to form a singular word (Ex: tes-t)
We also make sure to check if an apostrophes and dash is placed side by side, that the proper output is given (Ex: test-'t should print test and 't)

Test 3: In the third test, we check if the program is able to scan a directory (without traversing subdirectories) for txt files, open them, and then process them

Test 4: In the third and final test, we check to see if the program can traverse subdirectories and parse the txt files within them.

[Directories and subdirectories used for testing are included in the .tar file]





