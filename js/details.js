 function loadStudents() {
            const students = JSON.parse(localStorage.getItem('students')) || [];
            const tableBody = document.querySelector('#studentsTable tbody');
            tableBody.innerHTML = ''; 

            students.forEach(student => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = student.name;
                row.insertCell(1).textContent = student.dob;
                row.insertCell(2).textContent = student.level;
                row.insertCell(3).textContent = student.grades.arabic;
                row.insertCell(4).textContent = student.grades.english;
                row.insertCell(5).textContent = student.grades.maths;
                row.insertCell(6).textContent = student.grades.french;
            });
        }

        window.addEventListener('load', loadStudents);