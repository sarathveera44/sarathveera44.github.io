 //create class
 class FormValidate
 {
    formValues = 
    {
        name:"",
        email:"",
        pass:"",
        cpass:""
    }
    errorValues = 
    {
        nameErr :"",
        emailErr :"",
        passErr :"",
        cpassErr :""
    }
    showErrorMsg(index,msg)
    {
        const form_control = document.getElementsByClassName('form-control')[index];
        form_control.classList.add('error');
        form_control.getElementsByTagName('span')[0].textContent = msg;
    }
    showSuccessMsg(index)
    {
        const form_control = document.getElementsByClassName('form-control')[index];
        form_control.classList.remove('error');
        form_control.classList.add('success');
    }
    getInputs()
    {
        this.formValues.name =document.getElementById('name').value.trim();
        this.formValues.email =document.getElementById('mail').value.trim();
        this.formValues.pass =document.getElementById('password').value.trim();
        this.formValues.cpass =document.getElementById('cpassword').value.trim();
    }
    validateName()
    {
        if (this.formValues.name === "") 
        {
            this.errorValues.nameErr = "* Please Enter your Name"
            this.showErrorMsg(0,this.errorValues.nameErr)
        }
        else if (this.formValues.name.length<=4) 
        {
            this.errorValues.nameErr = "* Name must be atleast 5 char"
            this.showErrorMsg(0,this.errorValues.nameErr)
        } else 
        {
            this.errorValues.nameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateEmail()
    {
        //abc@gmail.com.in
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if (this.formValues.email === "") 
        {
            this.errorValues.emailErr ="* Please Enter User Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        }
        else if(!(regExp.test(this.formValues.email)))
        {
            this.errorValues.emailErr ="* Email is InValid "
            this.showErrorMsg(1,this.errorValues.emailErr)
        }
        else 
        {
            this.errorValues.emailErr =""
            this.showSuccessMsg(1)
        }
    }
    validatePassword(){
        //const a =ds;
        if(this.formValues.pass ===""){
            this.errorValues.passErr ="* Enter a Password"
            this.showErrorMsg(2,this.errorValues.passErr)
        }
        else if(this.formValues.pass.length<8 | this.formValues.pass.length>16){
            this.errorValues.passErr ="* Enter Password size 8 to 16 length"
            this.showErrorMsg(2,this.errorValues.passErr)
        }
        else{
            this.errorValues.passErr = ""
            this.showSuccessMsg(2)
        }
    }
    validateConformPassword(){
        if(this.formValues.cpass === "")
        {
            this.errorValues.cpassErr ="* Enter a Conform Password"
            this.showErrorMsg(3,this.errorValues.cpassErr)
        }
        else if(this.formValues.cpass === this.formValues.pass && this.errorValues.passErr ==="")
        {
            this.errorValues.cpassErr =""
            this.showSuccessMsg(3)
        }
        else if(this.errorValues.cpassErr){
            this.errorValues.cpassErr ="* Password does not Match"
            this.showErrorMsg(3,this.errorValues.cpassErr)
        }
        else{
            this.errorValues.cpassErr="* Password Must Match"
            this.showErrorMsg(3,this.errorValues.cpassErr)
        }
    }
    alertMessage()
    {
        const {nameErr,emailErr,passErr,cpassErr} = this.errorValues
        if (nameErr ==="" && emailErr ==="" && passErr ==="" && cpassErr ==="") 
        {
            swal("Register Sucessful","Thank you , "+this.formValues.name,"success")
            console.log(this.formValues);    
        }
        else{
            swal("Give Me Valid Inputs","Click OK","error")
        }
    } 
    removeInputs()
    {

    }
 }
 
//object creation and call all methods
 const validateUserInputs = new FormValidate();

 document.getElementsByClassName('form')[0].addEventListener('submit',event=>
 {
    event.preventDefault();
    validateUserInputs.getInputs();
    validateUserInputs.validateName();
    validateUserInputs.validateEmail();
    validateUserInputs.validatePassword();
    validateUserInputs.validateConformPassword();
    validateUserInputs.alertMessage();
    validateUserInputs.removeInputs();
 })
