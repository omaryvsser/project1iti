document.getElementById('studentForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const student = {
                name: document.getElementById('name').value,
                dob: document.getElementById('dob').value,
                level: document.getElementById('level').value,
                grades: {
                    arabic: document.getElementById('arabic').value,
                    english: document.getElementById('english').value,
                    maths: document.getElementById('maths').value,
                    french: document.getElementById('french').value
                }
            };

            let students = JSON.parse(localStorage.getItem('students')) || [];
            students.push(student);
            localStorage.setItem('students', JSON.stringify(students));

            
            window.location.href = 'studentDetails.html';
        });