@author: Kamil Wisniewski

*************Overview*************
The purpose of this project was to create my mymalloc() and myfree() functions, mimicking the built-in C ones;
however, I also wanted to add additional correctness-checking in an attempt to improve malloc and free as the original functions
don't warn the user if they've made probable errors (Passing an invalid pointer into free.. etc.)

-----------------------------------------------------------------

*************Test Plan*************

<><>Reporting Errors<><>

In order to build up on the current capabilites of malloc() and free(), I added error detection for various cases which will
notify the user with a print statement, subsequently returning from the function so the user can analyze the error and make their corrections. 
Let's go over some of the Errors we're keeping track of:

1. Returning NULL if the user calls malloc(bytes) where bytes > the largest available chunk of free space in memory
- This was a simple implement... if my while loop reaches the end of memory it will automatically print an error message: 'Not enough memory'
followed by a line number and function name. If the entirety of memory was scanned and no return was called before then, it must mean there are no
large enough available freed blocks for the given data size.

2. Printing an error if free() is called with an address that is outside the scope of the given memory
- In order to handle this case, we have a simple if statement at the start of my free() which compares the user-passed pointer, ptr, to the upper
and lower bounds of my given memory. We compare the address that is ptr with the lower bound, and the upper bound of my memory addresses. This is
a simple way to check if the user-given pointer is outside of the scope of memory. 
- If the pointer happens to be outside of the scope, we set a flag, which soon triggers a "true" evaluation in another if-statement, printing an
error message: 'myfree called with an address not obtained from malloc' with a line number and file name, and returning from free() right after.

3. Printing an error if free() is called with an address that is in the scope of malloc, but not at the start of a data block
- Since my previous error detection (checking if the address is outside of the scope of memory) has already been checked... if the while loop finished 
an no returns were made, it must mean the user-given address is inside the scope of malloc, but is not at the start of a data block. As we traverse through
memory with my heapStart pointer, we are constantly making comparisons to check if the current or adjacent data block we are on (heapStart + 2 * sizeof(int))
is equivalent to the user-given ptr. Since we are hopping from datablock to data block, if no match is found, it must mean the user provided a pointer that
isn't located at the start of a data block. We print an error message: 'Pointer is not referencing a valid data block' with a line number and file name, and then
we return from free().

4. Printer an error is the user tries to free() and already freed pointer
- In my if-statement where we check to see if my current data block is equivalent to the user-given ptr, we run a safety check, checking to see if 
the current data block's isFree metadata variable is equivalent to 0 (meaning it is free space in my program). If it is equivalent to 0, then that means
the user-given ptr's isFree metadata variable is also 0 as currentDataBlock == ptr. 
- If the metadata variable isFree is 0 (free space), we print an error message: 'Cannnot free an already freed pointer' followed by a line number and file name,
returning from free() right after.


<><>Correctness Testing<><>

I took a more 'mathematical' approach to testing the correctness of my program. We formatted each test (apart from the 1st one which was given in memtest.c) in a way similiar to a mathematical proof. I thought this approach would be more intuitive and logical in proving the correctness of my program.

--All Tests are conducted with 4096 byte memory--

1. (a) malloc() reserves unallocated memory [CorrectnessTesting1]
   (b) When successful, malloc() return a pointer to an object that does not overlap with any other allocated object
   (c) This program was provided to us in memtest.c; however, I will explain how it proves (a). This program fills my memory with distinct objects such as '0000' or '1111' when
   performing malloc() calls. It then reads back from the beginning of memory, noting if any of the distinct bits are missing, if so, it'll output that we had 'incorrect bytes'

2. (a) free() deallocates memory [CorrectnessTesting2]
   (b) When successful, free() should change the isFree metadata variable on the given ptr to 0 (implying it's free), allowing for a malloc() call to be able to be successfully called
   in said space
   (c) Given a malloc() call considering that the total bytes in memory are 4096: void* ptr = malloc(4080);
            - This will allocate all of the bytes in memory (4080 + metadata (8) + metadata following the newly created datablock (8))
       Let's free(ptr)
            - If free() were to be successful, it should allow for another malloc() call (taking up the entirety of memory's bytes) of the same byte number without error
            - If an error message is displayed in the console when another malloc(4080) is called, it would mean free() did not deallocate memory as there would be no room for the malloc() call

3. (a) malloc() and free() arrange so that adjacent free blocks are coalesced [CorrectnessTesting3]
   (b) When successful, two adjacent free blocks should coalesce and combine into a singular free block (size composed of the two added together). A malloc() call should be able to be successfully called
   without error that is of the size of the new coalesced freed block.
   (c) Let us define two pointers and consider the size of memory to be 4096 bytes:
                void* ptr1 = malloc(2000);  
                void* ptr2 = malloc(2000); 
        - If we were to free the two pointers in succession: free(ptr1); free(ptr2); 
              ... without coalescense, they would be two freed 2000 byte chunks, taking up the majority of the given 4096 bytes
        - In such case, if coalescense in my program did not occur, a malloc(4000) call would result in and error message: "Not enough memory" as neither of the 2000 byte chunks would be able to hold 4000 bytes
        - However, as demonstrated when the correctnessTest is run, no error is printed and the malloc(4000) call is successfully called, implying the coalescense was successful between the two 2000 byte chunks

4. (a) Errors mentioned in '<><>Reporting Errors<><> are detected and reported [CorrectnessTesting4]
   (b) When successful, the errors listed in '<><>Reporting Errors<><>' 1 - 4 will be printed out when said error occurs
   (c) For the first error [1].. let's: malloc(4000);
        - Considering the size of my memory in this example is 4096 bytes, this malloc call will work properly
        - However, if we were to subsequently call malloc(4000); again...
        - An error should display, stating that there isn't enough memory as 4000 bytes + 4000 bytes > 4096 bytes

       For the second error [2].. lets create an int x;
        - Since the creation of this variable was not done in memory, its address will not exist within it.
        - Therefore, if we call free(&x), we should get an error message telling us that the pointer is not in the scope of memory
       For the third error [3].. let's: char *f = malloc(sizeof(int)*2);

        - Where f is a pointer to an address of a datablock in memory returned by malloc(sizeof(int)*2);
        - If we were to free(f+1), we would be freeing an address 1 byte past the given datablock
        - This should not be allowed, so an error message should be printed describing the mistake

       For the fourth error [4].. let's: int *p = malloc(sizeof(int)*100);  and  set: int *q = p;
        - If we were to free(p) and simultaniously free(q), we would be freeing the same pointer twice
        - As we are not allowed to re-free an address, an error message should print describing the issue  

<><>Performance Testing<><>

1. For my first custom performance test (test4), I decided to test the performance of an absurd amount of adjacent merging when
currBlock is equal to the user-given ptr and the nextBlock is free. Here we assign two pointers, ptr1 and ptr2, a malloc(1000).
By freeing ptr2 first: free(ptr2) and then free ptr1 second, free(ptr1), it forces the second free call free(ptr1) to merge with the
recently freed block from ptr2. We run this loop 120 times and conduct it 50 times total (120 * 50 times).

2. For my second custom performance test (test5), I decided to alternate between intentionally causing a random error, and calling
malloc() with a random byte value and free() successfully. We can't prevent the error messages from showing, so it'll flood the console
a little bit, but the run time will be displayed at the very end.

        
