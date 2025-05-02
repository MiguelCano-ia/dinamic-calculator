import { Node, NodeResult, processNode } from "./processNode";

export function processMultipleNodes(nodes: Node[]): NodeResult[] {
  return nodes.map((node) => processNode(node));
}
