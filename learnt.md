TIME COMPLEXITY based:

BIG O 
- performance of an algorithm 

constant, linear, quadratic, logarithmic, exponential 

Arrays 
- simplest data structure 
- Static vs Dynamic 
- 0(1) - lookup by index, 0(n) - lookup by value, insert, delete 
- good when you know how many items you wanna store in them
- added or deleted with organizing the entire data structure 

Linked Lists
- group of nodes in sequence
- value/address of next + head and tail (first and last)
- 0(n) - lookup by value/index, insert/delete at middle, delete at tail (traverse the list)
- 0(1) - insert at head/tail, delete at head
- easily removed or added without reorganizing the entire data structure
- lookup by index is slower than in arrays 
- single(next), double(next,previous), circle(tail points to head)

Arrays vs LinkedLists 
- Static Arrays have a fixed size, Dynamic increase by 50-100%, wastes memory! 
- Linked lists don't waste memory, but each node takes more space, as it has this.next 

Two Pointer Approach 
- allows us to reduce time complexity to O(n). 
- Types - opposite , same direction 