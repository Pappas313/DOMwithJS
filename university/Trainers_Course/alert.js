//validators

function validateName(nameId, errorId) {
  isValid = true;
  name = document.getElementById(nameId).value;
  if (name == "") {
      isValid = false;
      document.getElementById(errorId).classList.remove("hide");
  }
  else if (name.length > 25 || name.length < 3)
      {
          isValid = false;
          document.getElementById(errorId).classList.remove("hide");
      }
  else if (!/^[A-Za-z]/.test(name))
      {
          isValid = false;
          document.getElementById(errorId).classList.remove("hide");
      }
   else {
       if (!document.getElementById(errorId).classList.contains("hide"))
          document.getElementById(errorId).classList.add("hide");
      }
  return isValid;
}
function validateTitle(titleId, errorId) {
  isValid = true;
  title = document.getElementById(titleId).value;
  if (title == "") {
      isValid = false;
      document.getElementById(errorId).classList.remove("hide");
  }
  else if (title.length > 25 || title.length < 3)
      {
          isValid = false;
          document.getElementById(errorId).classList.remove("hide");
      }
  else {
       if (!document.getElementById(errorId).classList.contains("hide"))
          document.getElementById(errorId).classList.add("hide");
      }
  return isValid;
}
function validateNotNull(itemId, errorId) {
  isValid = true;
  item = document.getElementById(itemId).value;
  if (item == "") {
      isValid = false;
      document.getElementById(errorId).classList.remove("hide");
  }
  else {
       if (!document.getElementById(errorId).classList.contains("hide"))
          document.getElementById(errorId).classList.add("hide");
      }
  return isValid;
}