// Simple student registration service
const students = [];

function registerStudent(name, email, age) {
  if (!name || !email) {
    return { success: false, message: 'Name and email are required' };
  }

  const student = { id: students.length + 1, name, email, age };
  students.push(student);

  return { success: true, student };
}

function listStudents() {
  return students;
}

module.exports = { registerStudent, listStudents };
