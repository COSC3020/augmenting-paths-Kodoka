function augmentingPath(graph, start, end)
{
    // If start and end nodes exist, and are the same, return that.
    if(start == end)
    {
        return [start];
    }

    // Track visited nodes.
    var visited = {};
    // Path from DFS.
    var path = [];

    // Start recursion search. If call returns true, add augmenting path to
    // path.
    if(dfsAugmentingPath(graph, start, end, visited, path))
    {
        return path;
    }

    // No augmenting path available.
    return [];
}

function dfsAugmentingPath(graph, current, end, visited, path)
{
    // Current becoems visited, and pushed to path.
    visited[current] = true;
    path.push(current);

    // If sink is found, current, unwind recursion and return true.
    if(current == end)
    {
        return true;
    }

    // For each edge to neighbor...
    for(var neighbor in graph[current])
    {
        var capacity = graph[current][neighbor];
        // If residual capacity > 0, and it's unvisited...
        if(capacity > 0 && !visited[neighbor])
        {
            // Recurse to see if sink can be reached.
            if(dfsAugmentingPath(graph, neighbor, end, visited, path))
            {
                return true;
            }
        }
    }

    // Bad path, remove current from path, and backtrack path.
    path.pop();
    return false;
}
