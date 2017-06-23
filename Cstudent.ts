
 export default class StudentClass{
    private _fName:string;
    private _lName:string;

    constructor(lname,fname)
    {
        this._lName = lname;
        this._fName = fname;
    }

    GEtFullName():string
    {
        return this._fName +" " + this._lName;
    }
}
