export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let employee;
  while ((employee = reportWithIterator.next().value) !== undefined) {
    result += employee + ' | ';
  }
  // Remove the trailing ' | ' if there are employees
  if (result.length > 0) {
    result = result.slice(0, -3);
  }
  return result;
}
