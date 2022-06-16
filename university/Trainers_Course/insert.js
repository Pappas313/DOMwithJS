$(document).ready(function () {
  let i = 1;
  $("#btnAdd").click(function () {
    let newHtml = GetHtml().replace("$[Id]", i++).
      replace("$[TFirstName]", $("#txtTFirstName").val()).
      replace("$[TLastName]", $("#txtTLastName").val()).
      replace("$[CTitle]", $("#ddlCTitle option:selected").val()).
      replace("$[CType]", $("#ddlCType option:selected").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
  });

  $("#btnUpdate").click(function () {
    let newHtml = GetHtml().replace("$[Id]", $("#txtId").val()).
      replace("$[TFirstName]", $("#txtTFirstName").val()).
      replace("$[TLastName]", $("#txtTLastName").val()).
      replace("$[CTitle]", $("#ddlCTitle option:selected").val()).
      replace("$[CType]", $("#ddlCType option:selected").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
    $("#btnAdd").show();
    $("#btnUpdate").hide();
    $("#txtId").val('');
    $("#txtSFirstName").val('');
    $("#txtSLastName").val('');
    $("#ddlCTitle option:selected").val('Select');
    $("#ddlCType option:selected").val('Select')
    $("#txtSTuitionFees").val('');
  });

  $(document).on("click", "#A_Edit", function () {
    $("#btnAdd").hide();
    $("#btnUpdate").show();
    $("#txtId").show();
    $("#txtId").val($(this).parent().parent().find('.Id').html());
    $("#txtTFirstName").val($(this).parent().parent().find('.TFirstName').html());
    $("#txtTLastName").val($(this).parent().parent().find('.TLastName').html());
    $("#ddlCTitle option:selected").val($(this).parent().parent().find('.CTitle').html())
    $("#ddlCType option:selected").val($(this).parent().parent().find('.CType').html())
    $(this).parents("tr").remove();
    $("#btnUpdate").focus();

  });

  document.getElementById("year").innerHTML = new Date().getFullYear();

});

function GetHtml() {
  return "<tr><td class='Id'>$[Id]</td>"
    + "<td class='TFirstName'>$[TFirstName]</td>"
    + "<td class='TLastName'>$[TLastName]</td>"
    + "<td class='CTitle'>$[CTitle]</td>"
    + "<td class='CType'>$[CType]</td>"
    + "<td class='action'><a href='#' id='A_Edit'> $[action]</a></td></tr>";
}