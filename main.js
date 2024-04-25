"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_js_1 = __importDefault(require("./student.js"));
const teacher_js_1 = __importDefault(require("./teacher.js"));
let teacher = new teacher_js_1.default();
console.log(teacher.data);
let student = new student_js_1.default();
console.log(student.data);
