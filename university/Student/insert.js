$(document).ready(function () {
  let i = 1;
  $("#btnAdd").click(function () {
    let newHtml = GetHtml().replace("$[Id]", i++).
      replace("$[FirstName]", $("#txtFirstName").val()).
      replace("$[LastName]", $("#txtLastName").val()).
      replace("$[DateOfBirth]", $("#txtDateOfBirth").val()).
      replace("$[TuitionFees]", $("#txtTuitionFees").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
  });


  $("#btnUpdate").click(function () {
    let newHtml = GetHtml().replace("$[Id]", $("#txtId").val()).
      replace("$[FirstName]", $("#txtFirstName").val()).
      replace("$[LastName]", $("#txtLastName").val()).
      replace("$[DateOfBirth]", $("#txtDateOfBirth").val()).
      replace("$[TuitionFees]", $("#txtTuitionFees").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
    $("#btnAdd").show();
    $("#btnUpdate").hide();
    $("#txtId").val('');
    $("#txtFirstName").val('');
    $("#txtLastName").val('');
    $("#txtDateOfBirth").val('');
    $("#txtTuitionFees").val('');
  });

  $(document).on("click", "#A_Edit", function () {
    $("#btnAdd").hide();
    $("#btnUpdate").show();
    $("#txtId").show();
    $("#txtId").val($(this).parent().parent().find('.Id').html());
    $("#txtFirstName").val($(this).parent().parent().find('.FirstName').html());
    $("#txtLastName").val($(this).parent().parent().find('.LastName').html());
    $("#txtDateOfBirth").val($(this).parent().parent().find('.DateOfBirth').html());
    $("#txtTuitionFees").val($(this).parent().parent().find('.TuitionFees').html());
    $(this).parents("tr").remove();
    $("#btnUpdate").focus();

  });
  document.getElementById("year").innerHTML = new Date().getFullYear();
});

function GetHtml() {
  return "<tr><td class='Id'>$[Id]</td>"
    + "<td class='FirstName'>$[FirstName]</td>"
    + "<td class='LastName'>$[LastName]</td>"
    + "<td class='DateOfBirth'>$[DateOfBirth]</td>"
    + "<td class='TuitionFees'>$[TuitionFees]</td>"
    + "<td class='action'><a href='#' id='A_Edit'> $[action] </a></td></tr>";
}