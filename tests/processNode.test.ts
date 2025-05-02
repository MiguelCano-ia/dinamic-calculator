import { Node, processNode } from "../src/processNode";

describe("processNode", () => {
  it("should throw error for invalid operation", () => {
    expect(() => {
      processNode({ operation: "invalid" as any, params: [1, 2] });
    }).toThrow("Invalid operation");
  });

  it("should throw null for empty params", () => {
    const result = processNode({ operation: "sqrt", params: [] });
    expect(result).toEqual({
      operation: "sqrt",
      params: [],
      response: null,
    });
  });

  it("should process a node with addition", () => {
    const node: Node = {
      operation: "add",
      params: [1, 2, 3],
    };
    const result = processNode(node);
    expect(result.response).toBe(6);
  });

  it("should process a node with subtraction", () => {
    const node: Node = {
      operation: "subtract",
      params: [10, 5, 2],
    };
    const result = processNode(node);
    expect(result.response).toBe(3);
  });

  it("should process a node with multiplication", () => {
    const node: Node = {
      operation: "multiply",
      params: [2, 3, 4],
    };
    const result = processNode(node);
    expect(result.response).toBe(24);
  });

  it("should process a node with division", () => {
    const node: Node = {
      operation: "divide",
      params: [20, 5, 2],
    };
    const result = processNode(node);
    expect(result.response).toBe(2);
  });

  it("should process a node with square root", () => {
    const node: Node = {
      operation: "sqrt",
      params: [16],
    };
    const result = processNode(node);
    expect(result.response).toBe(4);
  });

  it("should process a node with power", () => {
    const node: Node = {
      operation: "power",
      params: [2, 3],
    };
    const result = processNode(node);
    expect(result.response).toBe(8);
  });

  it("should process multiple nodes, case 1", () => {
    const nodes: Node[] = [
      { operation: "add", params: [1, 2, 3] },
      { operation: "multiply", params: [4, 5] },
    ];
    const results = nodes.map(processNode);
    expect(results[0].response).toBe(6);
    expect(results[1].response).toBe(20);
  });

  it("should process multiple nodes, case 2", () => {
    const nodes: Node[] = [
      { operation: "add", params: [1, 2] },
      { operation: "subtract", params: [10, 5] },
      { operation: "multiply", params: [3, 3] },
      { operation: "divide", params: [8, 2] },
      { operation: "sqrt", params: [16] },
      { operation: "power", params: [3, 2] },
    ];
    const results = nodes.map(processNode);
    expect(results[0].response).toBe(3);
    expect(results[1].response).toBe(5);
    expect(results[2].response).toBe(9);
    expect(results[3].response).toBe(4);
    expect(results[4].response).toBe(4);
    expect(results[5].response).toBe(9);
  });
});
