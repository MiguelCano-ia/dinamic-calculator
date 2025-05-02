export type Operations =
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "sqrt"
  | "power";

export interface Node {
  operation: Operations;
  params: number[];
}

export interface NodeResult extends Node {
  response: number | null;
}

export const processNode = (node: Node): NodeResult => {
  const { operation, params } = node;

  if (!params.every((param) => typeof param === "number")) {
    throw new Error("All parameters must be numbers");
  }

  if (!params || params.length === 0) {
    return { ...node, response: null };
  }

  let response: number;

  switch (operation) {
    case "add":
      response = params.reduce((acc, curr) => acc + curr, 0);
      break;
    case "subtract":
      response = params.reduce((acc, curr) => acc - curr);
      break;
    case "multiply":
      response = params.reduce((acc, curr) => acc * curr, 1);
      break;
    case "divide":
      response = params.reduce((acc, curr) => acc / curr);
      break;
    case "sqrt":
      response = Math.sqrt(params[0]);
      break;
    case "power":
      response = Math.pow(params[0], params[1]);
      break;
    default:
      throw new Error("Invalid operation");
  }

  return { ...node, response };
};
