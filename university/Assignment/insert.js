$(document).ready(function () {
  let i = 1;
  $("#btnAdd").click(function () {
    let newHtml = GetHtml().replace("$[Id]", i++).
      replace("$[Title]", $("#txtTitle").val()).
      replace("$[Description]", $("#txtDescription").val()).
      replace("$[SubDateTime]", $("#txtSubDateTime").val()).
      replace("$[OralMark]", $("#txtOralMark").val()).
      replace("$[TotalMar]", $("#txtTotalMar").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
  });

  $("#btnUpdate").click(function () {
    let newHtml = GetHtml().replace("$[Id]", $("#txtId").val()).
      replace("$[Title]", $("#txtTitle").val()).
      replace("$[Description]", $("#txtDescription").val()).
      replace("$[SubDateTime]", $("#txtSubDateTime").val()).
      replace("$[OralMark]", $("#txtOralMark").val()).
      replace("$[TotalMar]", $("#txtTotalMar").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
    $("#btnAdd").show();
    $("#btnUpdate").hide();
    $("#txtId").val('');
    $("#txtTitle").val('');
    $("#txtDescription").val('');
    $("#txtSubDateTime").val('');
    $("#txtOralMark").val('');
    $("#txtTotalMar").val('');
  });

  $(document).on("click", "#A_Edit", function () {
    $("#btnAdd").hide();
    $("#btnUpdate").show();
    $("#txtId").show();
    $("#txtId").val($(this).parent().parent().find('.Id').html());
    $("#txtTitle").val($(this).parent().parent().find('.Title').html());
    $("#txtDescription").val($(this).parent().parent().find('.Description').html());
    $("#txtSubDateTime").val($(this).parent().parent().find('.SubDateTime').html());
    $("#txtOralMark").val($(this).parent().parent().find('.OralMark').html());
    $("#txtTotalMar").val($(this).parent().parent().find('.TotalMar').html());
    $(this).parents("tr").remove();
    $("#btnUpdate").focus();
  });
  document.getElementById("year").innerHTML = new Date().getFullYear();
});

function GetHtml() {
  return "<tr><td class='Id'>$[Id]</td>"
    + "<td class='Title'>$[Title]</td>"
    + "<td class='Description'>$[Description]</td>"
    + "<td class='SubDateTime'>$[SubDateTime]</td>"
    + "<td class='OralMark'>$[OralMark]</td>"
    + "<td class='TotalMar'>$[TotalMar]</td>"
    + "<td class='action'><a href='#' id='A_Edit'> $[action] </a> </td></tr>";
}
new Date().getFullYear()