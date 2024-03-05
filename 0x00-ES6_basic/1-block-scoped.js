export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;  // Remove 'var' here
    task2 = false;  // Remove 'var' here
  }

  return [task, task2];
}
