"use strict";
exports.__esModule = true;
var CStudent_1 = require("./CStudent");
console.log("Hello ExcuteAutomation");
var languageKnown;
(function (languageKnown) {
    languageKnown[languageKnown["English"] = 0] = "English";
    languageKnown[languageKnown["Hindi"] = 1] = "Hindi";
    languageKnown[languageKnown["Gujarati"] = 2] = "Gujarati";
})(languageKnown || (languageKnown = {}));
var student = {
    Name: "Niti",
    Age: 30,
    Phone: 937654556,
    Language: languageKnown[languageKnown.Gujarati]
};
var studentList = [
    { Name: "Mitesh", Age: 33, Phone: 123456789, Language: languageKnown[languageKnown.English] },
    { Name: "Nayana", Age: 53, Phone: 123456789, Language: languageKnown[languageKnown.Gujarati] },
    { Name: "Aashray", Age: 3, Phone: 123456789, Language: languageKnown[languageKnown.Hindi] }
];
for (var i = 0; i < studentList.length; i++) {
    var element = studentList[i];
    console.log(element);
}
//###############Function Advanced##############################//
var studentName = function (lname, fname) {
    return fname + " " + lname;
};
console.log(studentName("Parikh", "Niti"));
//#################Arrow Function###############################//
var studentArrow = function (lname, fname) {
    return fname + " " + lname;
};
console.log(studentArrow("Parikh", "NitiArrow"));
//####################Interface#################################//
//Declaring student
var Interfacestudent = {
    Name: "Niti",
    Age: 30,
    Phone: 9376545756789,
    Language: languageKnown[languageKnown.English]
};
var InterfaceStudentList = [
    { Name: "Interface-Mitesh", Age: 33, Phone: 123456789, Language: languageKnown[languageKnown.English] },
    { Name: "Interface-Niti", Age: 30, Phone: 123456789, Language: languageKnown[languageKnown.Gujarati] }
];
var GenericsStudentList = [
    { Name: "Generics-Mitesh", Age: 33, Phone: 123456789, Language: languageKnown[languageKnown.English] },
    { Name: "Generics-Niti", Age: 30, Phone: 123456789, Language: languageKnown[languageKnown.Gujarati] }
];
InterfaceStudentList.push(student);
console.log(InterfaceStudentList);
//##################CLASS######################################//
var s = new CStudent_1["default"]("Niti", "Parikh");
console.log(s.GEtFullName());
//########################### Generics ########################################//
function getStudentListGenerics(student) {
    student.forEach(function (element) {
        console.log("Age: " + element.Age + " Name: " + element.Name);
    });
}
getStudentListGenerics(GenericsStudentList);
//# sourceMappingURL=app.js.map