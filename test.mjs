import { Buffer } from "node:buffer";
import { fileURLToPath } from "url";
import { dirname } from "path";
import EventEmitter from "events";
import fs from "fs";
import http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log("Hello, Node.js!");

// const { stdout } = process;
// stdout.write("Hohoho");

// const { stdin, stdout } = process;
// stdin.on("data", (data) => stdout.write("STDOUT:" + data));

// const { stdout } = process;
// process.on("exit", () => stdout.write("Good luck!"));

// const { stdout, stderr } = process;
// process.on("exit", (errCode) => {
//   if (errCode == 0) {
//     stderr.out.write("Good luck");
//   } else {
//     stderr.write("Smth went wrong");
//   }
// });

////Ask name, sayHi, exit and sayBye/////
// const { stdout, stdin } = process;
// stdout.write("Please introduce yourself:   ");
// stdin.on("data", (data) => {
//   stdout.write("Hi, " + data);
//   process.exit();
//   // stdin.destroy();
// });
// process.on("exit", () => stdout.write("Bye"));
////Ask name, sayHi, exit and sayBye/////

//////Buffer/////
// const myBuffer = Buffer.from("Hello, World");
// console.log(myBuffer);
// const myBufferString = myBuffer.toString();
// console.log(myBufferString);

//////Buffer/////

///to UpperCase////
// const { stdin, stdout } = process;

// stdin.on("data", (data) => {
//   const myDataBuffer = Buffer.from(data);
//   stdout.write("Upper case: ");
//   stdout.write(myDataBuffer.toString().toUpperCase());
// });
///to UpperCase////

////reverse Innput /////
// const { stdin, stdout } = process;
// stdout.write("Your name: \n");
// stdin.on("data", (data) => {
//   const userNameString = Buffer.from(data).toString();
//   const userNameArrReverse = userNameString.split("").reverse();
//   const output = userNameArrReverse.join("");
//   stdout.write("\n Your name reversed: " + output);
//   process.exit(1);
// });
////reverse Innput /////

/////////////Arguments////////////////////
// console.log(process.argv.slice(2));

// const flagIndex = process.argv.indexOf("-f");
// if (flagIndex != -1) {
//   const message = process.argv[flagIndex + 1];
//   console.log(message);
// } else {
//   console.log("flag does not exist");
// }
/////////////Arguments////////////////////

/////CLI//////
// const protoObj = {
//   sayHi() {
//     console.log("Hi!");
//   },
// };
// const obj = {};
// obj.__proto__ = protoObj;
// obj.sayHi();
/////CLI//////

///////Variables/////

// const variable = process.env.MODE;
// console.log(variable);

// if (variable === "dev") {
//   console.log("We are in dev mode");
// } else if (variable === "prod") {
//   console.log("We are in prod mode");
// } else {
//   console.log("Invalid type of mode");
// }

// const { stdin, stdout } = process;
// stdout.write("Введите 2 числа\n");
// stdin.on("data", (data) => {
//   const flagS = process.argv.indexOf("-s");
//   const flagM = process.argv.indexOf("-m");
//   if (flagS != -1) {
//     const dataArr = Buffer.from(data).toString().split("");
//     const sum = +dataArr[0] + +dataArr[1];
//     console.log(`${dataArr[0]} + ${dataArr[1]} = ${sum}`);
//   } else if (flagM != -1) {
//     const dataArr = Buffer.from(data).toString().split("");
//     const prod = +dataArr[0] * +dataArr[1];
//     console.log(`${dataArr[0]} * ${dataArr[1]} = ${prod}`);
//   } else {
//     console.log("Invalid flag type");
//   }
// });

///////Variables/////

// const { stdout, stdin, exit } = process;

// const flag = process.argv[2];
// const allowedFlags = ["-m", "-s"];
// if (!allowedFlags.includes(flag)) {
//   stdout.write("Попробуйте ещё раз запустить файл с флагом -s или -m");
//   exit();
// }
// stdout.write("Введите, пожалуйста, два числа\n");
// stdin.on("data", (data) => {
//   const numString = data.toString();
//   const numStringsArray = numString.split(" ");
//   const hasIncorrectLength = numStringsArray.length !== 2;
//   const hasIncorrectValues = numStringsArray.some((numStr) =>
//     Number.isNaN(+numStr)
//   );
//   if (hasIncorrectLength || hasIncorrectValues) {
//   stdout.write("Нужно ввести 2 числа, разделенных пробелом");
//   exit();
// }
// const [firstNum, secondNum] = numStringsArray.map((numStr) => +numStr);
// if (flag === "-s") {
//   const sum = firstNum + secondNum;
//   stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
//

////////Access files/////
// console.log(__dirname);
// console.log(__filename);

// const flagIndexF = process.argv.indexOf("-f");
// const flagIndexD = process.argv.indexOf("-d");

// if (flagIndexF !== -1) {
//   console.log(__filename);
// } else if (flagIndexD !== -1) {
//   console.log(__dirname);
// } else {
//   console.log("Please indicate -f or -d to run the script");
// }
////////Access files/////

///COLORS/////
// import "colors";
// const text =
//   "Hello, world!Hello, world!Hello, world!Hello, world!, world!Hello, world!Hello, world!";
// console.log(text.rainbow);
///COLORS/////

/////Emit events////
// const emitter = new EventEmitter();
// emitter.once("start", ({ times, message }) =>
//   console.log(message + " " + times)
// );
// emitter.on("start", ({ times, message }) => console.log(times + times + times));
// emitter.emit("start", { message: "Custom message", times: 3 });
// emitter.emit("start", { message: "New msg", times: 5 });
/////Emit events////

//////WriteStream/////
// const { stdin } = process;
// const output = fs.createWriteStream("written_via_terminal.txt");
// stdin.on("data", (chunk) => {
//   output.write(chunk);
//   process.exit();
// });
//////WriteStream/////

/////SERVER//////

// http.createServer((req, res) => res.end("Hello Sasha")).listen(3000);

// const hello = "Hello everyone";
// const bye = "Bye-bye";

// http
//   .createServer((req, res) => {
//     // "req" is a part in URL after localhost:3000/....
//     res.setHeader("Content-Type", "application/json");

// if (req.url === "/hello") {
//   return res.end(hello);
// } else if (req.url === "/bye") {
//   return res.end(JSON.stringify(bye));
// } else if (req.url === "/") {
//     return res.end(
//       fs.readFileSync("///Users/markil/Documents/node-js-training/index.html")
//     );
//   }

//   res.statusCode = 404;
//   return res.end(JSON.stringify({ error: "Not found" }));
// })
// .listen(3000);
/////SERVER//////
