# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## My Runtime

For my runtime complexity, $n$ represents the quantity of nodes in the input
graph, and $m$ represents the quantity of edges in the input.  

The first segment of code in my algorithm that doesn't perform some constant
time work would be within dfsAugmentingPath. Every time dfsAugmentingPath is
called on a new current, we mark it as visited, and push it onto the path. In
the worst case scenario, we'll do this for every node one time, resulting in
$\Theta(n)$. Additionally, for each node we visit, we loop over each of its
outgoing edges, eventually checking all edges within the graph, resulting in
$\Theta(m)$.  

This gives us a combined total worst case runtime complexity of $\Theta(m + n)$.  

## Sources

I watched the following to suplement my understanding of the Ford-Fulkerson
algorithm:  

https://www.youtube.com/watch?v=LdOnanfc5TM  

I read through the following page for a general source of knowledge, and
references lines 14-32 of their implementation of the Ford-Fulkerson
algorithm to help figure out how to implement my DFS Augmenting Path code:  

https://www.w3schools.com/dsa/dsa_algo_graphs_fordfulkerson.php  

## Plagirism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
