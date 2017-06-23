/// <reference path="./typings/index.d.ts" />


import StudentClass from './CStudent';

import * as webDriver from "selenium-webdriver"

console.log("Hello ExcuteAutomation");
enum languageKnown{English, Hindi,Gujarati}

let student = {
    Name:"Niti",
    Age:30,
    Phone:937654556,
    Language: languageKnown[languageKnown.Gujarati]
}

let studentList =[
    {Name:"Mitesh",Age:33, Phone:123456789,Language:languageKnown[languageKnown.English]},
    {Name:"Nayana",Age:53, Phone:123456789, Language:languageKnown[languageKnown.Gujarati]},
    {Name:"Aashray",Age:3, Phone:123456789,Language:languageKnown[languageKnown.Hindi]}
]
for(var i=0;i<studentList.length;i++)
{
    var element = studentList[i];
    console.log(element);
}

//###############Function Advanced##############################//

let studentName = function(lname:string,fname:string){
    return fname + " " + lname;
}

console.log(studentName("Parikh","Niti"));

//#################Arrow Function###############################//
let studentArrow = (lname:string,fname:string)=>
{
    return fname + " " + lname;
}
console.log(studentArrow("Parikh","NitiArrow"));

//####################Interface#################################//

//Declaring student
let Interfacestudent:IstudentInfo=
{
    Name:"Niti",
    Age:30,
    Phone:9376545756789,
    Language:languageKnown[languageKnown.English]
}
let InterfaceStudentList:IstudentInfo[] =[
{ Name: "Interface-Mitesh", Age: 33, Phone: 123456789, Language: languageKnown[languageKnown.English] },
{ Name: "Interface-Niti", Age: 30, Phone: 123456789, Language: languageKnown[languageKnown.Gujarati]}
]
let GenericsStudentList:Array<IstudentInfo> =[
{ Name: "Generics-Mitesh", Age: 33, Phone: 123456789, Language: languageKnown[languageKnown.English] },
{ Name: "Generics-Niti", Age: 30, Phone: 123456789, Language: languageKnown[languageKnown.Gujarati]}
]
InterfaceStudentList.push(student);
console.log(InterfaceStudentList);

//##################CLASS######################################//

let s = new StudentClass("Niti","Parikh")
console.log(s.GEtFullName());

//########################### Generics ########################################//
function getStudentListGenerics(student:Array<IstudentInfo>)
{
    student.forEach(element =>
    {
        console.log("Age: "+ element.Age +" Name: "+ element.Name);
    })
}

getStudentListGenerics(GenericsStudentList);
