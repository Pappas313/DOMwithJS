$(document).ready(function () {
  let i = 1;
  $("#btnAdd").click(function () {
    let newHtml = GetHtml().replace("$[Id]", i++).
      replace("$[ATitle]", $("#txtATitle").val()).
      replace("$[CTitle]", $("#txtCTitle").val()).
      replace("$[CType]", $("#ddlCType option:selected").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
  });

  $("#btnUpdate").click(function () {
    let newHtml = GetHtml().replace("$[Id]", $("#txtId").val()).
      replace("$[ATitle]", $("#txtATitle").val()).
      replace("$[CTitle]", $("#txtCTitle").val()).
      replace("$[CType]", $("#ddlCType option:selected").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
    $("#btnAdd").show();
    $("#btnUpdate").hide();
    $("#txtId").val('');
    $("#txtATitle").val('');
    $("#txtCTitle").val('');
    $("#ddlCType option:selected").val('Select')
  });

  $(document).on("click", "#A_Edit", function () {
    $("#btnAdd").hide();
    $("#btnUpdate").show();
    $("#txtId").show();
    $("#txtId").val($(this).parent().parent().find('.Id').html());
    $("#txtATitle").val($(this).parent().parent().find('.ATitle').html());
    $("#txtCTitle").val($(this).parent().parent().find('.CTitle').html());
    $("#ddlCType option:selected").val($(this).parent().parent().find('.CType').html())
    $(this).parents("tr").remove();
    $("#btnUpdate").focus();

  });
  document.getElementById("year").innerHTML = new Date().getFullYear();
});
function GetHtml() {
  return "<tr><td class='Id'>$[Id]</td>"
    + "<td class='ATitle'>$[ATitle]</td>"
    + "<td class='CTitle'>$[CTitle]</td>"
    + "<td class='CType'>$[CType]</td>"
    + "<td class='action'><a href='#' id='A_Edit'> $[action] </a></td></tr>";
}