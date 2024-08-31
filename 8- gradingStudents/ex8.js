function gradingStudents(grades) {    
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
    
        if (grade >= 38) {
            let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
            let difference = nextMultipleOfFive - grade;
    
            if (difference < 3) {
                grades[i] = nextMultipleOfFive;
            }
        }
    }
    
    return grades;
    }