export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDeptIndex < departments.length) {
        const department = departments[currentDeptIndex];
        const employees = allEmployees[department];
        if (currentEmployeeIndex < employees.length) {
          const result = { value: employees[currentEmployeeIndex], done: false };
          currentEmployeeIndex++;
          return result;
        } else {
          currentEmployeeIndex = 0;
          currentDeptIndex++;
          return this.next();
        }
      } else {
        return { done: true };
      }
    }
  };
}
