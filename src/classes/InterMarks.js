class InterMarks{
    
    static passMarks=35;
    
    static raviDetails=()=>{
        console.log("Hi this is Static and Array methods class");
    }
    constructor(Ravi,Age,Study,Phone,email){
this.Nameame = 0;
this.Age = 0;
this.Study = 0;
this.Phone = 0;
this.email = 0;
this.Phone = 0;



    }
    calculateResult=()=>{
        if(this.Ravi>= InterMarks.passMarks &&
            this.Age>= InterMarks.passMarks  &&
            this .Study>= InterMarks.passMarks &&
            this.Phone>= InterMarks.passMarks &&
            this.email>=  InterMarks.passMarks){
console.log("Student has passed in the exams")
        }else{
            console.log("Student has failed in the exams")
        }
    }
}
export default InterMarks;