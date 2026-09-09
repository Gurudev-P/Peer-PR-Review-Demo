const { registerStudent, listStudents } = require('./student');

describe('student registration', () => {
  test('registers a student', () => {
    const result = registerStudent('Ananya', 'ananya@example.com', 20);
    expect(result.success).toBe(true);
    expect(result.student.name).toBe('Ananya');
  });

  test('rejects missing email', () => {
    const result = registerStudent('Rahul', '', 21);
    expect(result.success).toBe(false);
  });

  test('lists registered students', () => {
    expect(listStudents().length).toBeGreaterThan(0);
  });
});
