import * as fs from "fs";
import { processMultipleNodes } from "./processMultipleNodes";
import { Node } from "./processNode";

const file = fs.readFileSync("./nodes.json", "utf-8");
const inputNodes = JSON.parse(file) as Node[];

const output = processMultipleNodes(inputNodes);

output.forEach((op) => {
  console.log(JSON.stringify(op));
});
