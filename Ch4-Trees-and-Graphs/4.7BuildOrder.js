/*
You are given a list of projects and a list of dependencies(which is a list of pairs of projects, where the first project is dependent on the second project).

All of a project's dependencies must be built before the project is.

Find a build order that will allow the projects to be built.

If there is no valid build order, return an error.

EXAMPLE

Input:
projects: a, b, c, d, e, f
dependencies: (d, a), (b, f), (d, b), (a, f), (c, d)

Output: f, e, a, b, d, c
*/

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }
}

function dfs(node, visited = new Set(), res = []) {
  if (!node || visited.has(node)) return;

  visited.add(node);

  for (const neighbor of node.neighbors) {
    dfs(neighbor, visited, res);
  }

  if (!res.includes(node.value)) {
    res.unshift(node.value); // Push the value to the beginning of the result array
  }
}

function buildOrder(projects, dependencies) {
  const nodeMap = new Map(); // Map to store nodes by project name
  let res = [];

  // Create nodes for all projects
  for (const project of projects) {
    nodeMap.set(project, new Node(project));
  }

  // Build the graph by adding neighbors based on dependencies
  for (const [dependent, dependency] of dependencies) {
    const dependentNode = nodeMap.get(dependent);
    const dependencyNode = nodeMap.get(dependency);
    dependentNode.addNeighbor(dependencyNode);
  }

  // Create a set to keep track of visited nodes during DFS
  const visited = new Set();
  const visiting = new Set(); // Track nodes in the current traversal path

  // Perform DFS starting from each project node
  for (const project of projects) {
    const node = nodeMap.get(project);

    if (!visited.has(node)) {
      const cycle = dfs(node, visited, visiting, res);

      if (cycle) {
        return "Error: Circular dependency detected. No valid build order exists.";
      }
    }
  }

  // Check if all projects were included in the result
  if (res.length !== projects.length) {
    return "Error: No valid build order exists.";
  }

  return res.reverse(); // Reverse the result to get the correct build order
}

function dfs(node, visited, visiting, res) {
  if (visiting.has(node)) {
    return true; // Circular dependency detected
  }

  if (visited.has(node)) {
    return false; // Node has already been visited and processed
  }

  visiting.add(node);

  for (const neighbor of node.neighbors) {
    const cycle = dfs(neighbor, visited, visiting, res);
    if (cycle) {
      return true; // Propagate the circular dependency detection
    }
  }

  visiting.delete(node);
  visited.add(node);
  res.unshift(node.value); // Push the value to the beginning of the result array
  return false;
}

const projects = ["a", "b", "c", "d", "e", "f"];
const dependencies = [
  ["d", "a"],
  ["b", "f"],
  ["d", "b"],
  ["a", "f"],
  ["c", "d"],
];

console.log(buildOrder(projects, dependencies));

const projects2 = ["a", "b", "c"];
const dependencies2 = [
  ["a", "b"],
  ["b", "c"],
  ["c", "a"],
];

console.log(buildOrder(projects2, dependencies2));
