"use strict";
exports.__esModule = true;
var StudentClass = (function () {
    function StudentClass(lname, fname) {
        this._lName = lname;
        this._fName = fname;
    }
    StudentClass.prototype.GEtFullName = function () {
        return this._fName + " " + this._lName;
    };
    return StudentClass;
}());
exports["default"] = StudentClass;
//# sourceMappingURL=CStudent.js.map