 
        let allStudents = JSON.parse(localStorage.getItem('students')) || [];

        function performSearch() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const tableBody = document.querySelector('#resultsTable tbody');
            const noResults = document.getElementById('noResults');
            
            tableBody.innerHTML = ''; 
            noResults.style.display = 'none';

            const filteredStudents = allStudents.filter(student => 
                student.name.toLowerCase().includes(query) || 
                student.level.toString().includes(query)
            );

            if (filteredStudents.length === 0) {
                noResults.style.display = 'block';
                return;
            }

            filteredStudents.forEach(student => {
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

        document.getElementById('searchBtn').addEventListener('click', performSearch);// search after click button

        document.getElementById('searchInput').addEventListener('input', performSearch);// search when write 