// Simple student registration service
const students = [];

function registerStudent(name, email, age) {
  if (!name || !email) {
    return { success: false, message: 'Name and email are required' };
  }

  // Keep IDs stable even when a student is removed later.
  const student = { id: students.length + 1, name, email, age };
  students.push(student);

  // A student can only be registered once with the same email.
  if (students.some(s => s.email === email)) {
    return { success: false, message: 'Email already registered' };
  }

  return { success: true, student };
}

function listStudents() {
  return students;
}

module.exports = { registerStudent, listStudents };
