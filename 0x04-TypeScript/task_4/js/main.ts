// defined the interfaces and classes as per the previous tasks

import { Cpp, Java, React } from './js/subjects';
import { cTeacher } from './js/teachers';

// Create constants for Cpp, Java, and React subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Set cTeacher as the teacher for each subject
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

// Log the requirements and available teacher for each subject
console.log("Cpp:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("\nJava:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("\nReact:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
