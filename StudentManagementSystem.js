var numberOfStudents = 0;
var students=[];

function addStudent(firstName, lastName){
    numberOfStudents++;
    students.push(createFullName(firstName, lastName));
    numberOfStudents = students.length;
}
function getNumberOfStudent(){
    return numberOfStudents;
}

addStudent('skan');
addStudent('yasmine');
addStudent('khadouj');
addStudent('karouis');
addStudent('kiki');
console.log(students);
console.log(getNumberOfStudent());

function clearStudents(){
    students = [];
    numberOfStudents = 0;
}

function createFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

console.log(createFullName('Khadija', 'Mzabi'))

console.log(addStudent('skander', 'lahbaiel'));
console.log(addStudent('amine', 'Karoui'));
console.log(addStudent('kenza', 'Farhat'));
console.log(addStudent('fatma', 'Mehrez'));
console.log(addStudent('yassine', 'Mouelhi'));
console.log(students);

var studentName = [];
var initial;
/*function getStudentByInitials(studentName, initial)
{
    if (studentName[0]== initial){
        return true;
    }
    else{
        return false;
    }   
}*/

//console.log(getStudentByInitials('khadija', 'm'))

var prenom;

function isFullName(prenom){
    if (prenom.split(1)){
        return true;
    }
    else{
        return false;
    }
}

/*console.log((isFullName("khadija mzabi")))
console.log((isFullName("khadija")))*/

//delete getStudentByInitials();

var initial;
var A = [];

function getStudentsByInitial(initial){
    
    var i= 0;

    while (i<students.length){
        if (students[i][0] == initial){
            A.push(students[i]);
        }
        i++;
    }
    
return A;
}

console.log(getStudentsByInitial('f'));

