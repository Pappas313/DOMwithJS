//validators
function regvalidate()

{
if((document.form1.txtATitle.value=="")&&(document.form1.txtSFName.value==""))
 {
  document.getElementById('une').innerHTML = "First name or Second name should not be empty";
  form1.txtATitle.focus();
  return(false);
 }

if(document.form1.txtSLName.value=="")
  {
  document.getElementById('une').innerHTML = "User name field should not be empty";
  form1.txtSLName.focus();
  return(false);
 }

if(document.registerationform.emailtxt.value=="")
  {
  document.getElementById('une').innerHTML = "Email id requered";
  registerationform.emailtxt.focus();
  return(false);
  }

if(document.registerationform.pwdtxt.value=="")
   {
  document.getElementById('une').innerHTML = "Please type a password";
  registerationform.pwdtxt.focus();
  return(false);
   }

if((document.registerationform.pwdtxt.value) != (document.registerationform.cpwdtxt.value))
   {
  document.getElementById('une').innerHTML = "Password Must be equal";
  registerationform.pwdtxt.value = "";
  registerationform.cpwdtxt.value = "";
  registerationform.pwdtxt.focus();
  return(false);
  }
else
   {
   return(true);
   }
}
txtATitle
txtSFName
txtSLName
txtCTitle