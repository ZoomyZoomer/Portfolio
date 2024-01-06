@author: Kamil Wisniewski

Overview:

This program is a custom shell implementation in C. It includes features like command
execution, directory navigation ('cd'), displaying the current working directory ('pwd'), file
redirection, piping, and wildcard pattern matching. The shell operates in either batch
or interactive mode.

Features:
- Command Execution: Runs standard commands located in system paths.
- Built-in Commands: Includes cd, pwd, and which.
- Redirection: Supports input ('<') and output ('>') redirection.
- Piping: Implements piping ('|') between commands.
- Wildcard Pattern Matching: Matches filenames using wildcards.
- Batch Mode: Executes commands from a file.
- Interactive Mode: Accepts commands from the user in a terminal session.


Usage:

MakeFile
To compile the program using the Makefile, follow these steps:

Run Make Command:
Open a terminal in the directory containing your source code and the Makefile.
Type the command 'make' and press Enter.
This will compile the source files and create the executable named 'mysh'.

~~~~Test cases located in main function... runnable with '_testcase_' parameter as argv[1]~~~~

Test 1: Execution of an external command (ls)
- Our program will execute an external function using the execv command while within a child process as to not interrupt the parent process

Test 2: Using 'cd' to change directory
- Our program will change the current working directory to a different one. This will be verified when we run the pwd command next

Test 3: Using 'pwd' to print current directory
- Our program will display the path to the current working directory using chdir()

Test 4: Redirection with 'echo'
- Our program will test the redirection token '>' combined with an external commands (echo). Our test will echo the string "Hello World" into a file called "testfile.txt"

Test 5: Using 'which' with a wildcard pattern
- Our program will test the which function paired with a wildcard pattern, showing the paths to programs meeting the wildcard criteria

Test 6: Piping between two commands
- Our program will test the pipe function by having the output of "echo hi" be used as the input for "echo test"

Test 7: Functionality of the 'then' token
- Our program will test the functionality of the 'then' token by having a successful pwd call beforehand, allowing for the token subsequence 'then echo hi' to be executed

Interactive Mode:
To use the shell in interactive mode:

1. Start the Shell:
    - run the shell by typing './mysh' in the terminal.
2. Use Commands:
    - Once the shell is running, type commands as you would in a standard shell.
3. Built-in Commands:
    - Execute built-in commands like 'cd', 'pwd', or 'which' by typing them followed by their arguments (if any).
4. File Redirection:
    - For file redirection, use the '<' and '>' symbols after the command and specify the file name.
5. Piping:
    - To use piping, place a '|' between commands.
6. Wildcard Pattern Matching:
    - Use wildcard like '*' for pattern matching in commands.
7. Exit Shell:
    - To exit the shell, type 'exit'.

Batch Mode
To run the shell in batch mode:

1. Execute Script File:
    - Run the shell with a script file by typing './mysh [script_file]' in the terminal, 
      where '[script_file]' is the path to the script file containing the commands to be executed.
2. Sequential Execution:
    - The shell will execute all commands in the script file sequentially.

Built-in Commands
cd [directory]: Changes the current directory to [directory].
pwd: Prints the current working directory.
which [pattern]: Lists files in the current directory that match [pattern].

