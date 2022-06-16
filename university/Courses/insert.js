$(document).ready(function () {
  let i = 1;
  $("#btnAdd").click(function () {
    let newHtml = GetHtml().replace("$[Id]", i++).
      replace("$[Title]", $("#txtTitle").val()).
      replace("$[Stream]", $("#txtStream ").val()).
      replace("$[Type]", $("#ddlType option:selected").val()).
      replace("$[Start_Date]", $("#txtStart_Date ").val()).
      replace("$[End_Date]", $("#txtEnd_Date").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
  });

  $("#btnUpdate").click(function () {
    let newHtml = GetHtml().replace("$[Id]", $("#txtId").val()).
      replace("$[Title]", $("#txtTitle").val()).
      replace("$[Stream]", $("#txtStream").val()).
      replace("$[Type]", $("#ddlType option:selected").val()).
      replace("$[Start_Date]", $("#txtStart_Date").val()).
      replace("$[End_Date]", $("#txtEnd_Date").val()).
      replace("$[action]", "Edit");
    $("#table_td").append(newHtml);
    $("#btnAdd").show();
    $("#btnUpdate").hide();
    $("#txtId").val('');
    $("#txtTitle").val('');
    $("#txtStream").val('');
    $("#ddlType option:selected").val('Select');
    $("#txtStart_Date").val('');
    $("#txtEnd_Date").val('')


  });

  $(document).on("click", "#A_Edit", function () {
    $("#btnAdd").hide();
    $("#btnUpdate").show();
    $("#txtId").show();
    $("#txtId").val($(this).parent().parent().find('.Id').html());
    $("#txtTitle").val($(this).parent().parent().find('.Title').html());
    $("#txtStream").val($(this).parent().parent().find('.Stream').html());
    $("#ddlType option:selected").val($(this).parent().parent().find('.rType').html())
    $("#txtStart_Date ").val($(this).parent().parent().find('.Start_Date ').html());
    $("#txtEnd_Date ").val($(this).parent().parent().find('.End_Date ').html());
    $(this).parents("tr").remove();
    $("#btnUpdate").focus();

  });
  document.getElementById("year").innerHTML = new Date().getFullYear();
});

function GetHtml() {
  return "<tr><td class='Id'>$[Id]</td>"
    + "<td class='Title'>$[Title]</td>"
    + "<td class='Stream'>$[Stream]</td>"
    + "<td class='Type'>$[Type]</td>"
    + "<td class='Start_Date'>$[Start_Date]</td>"
    + "<td class='End_Date'>$[End_Date]</td>"
    + "<td class='action'><a href='#' id='A_Edit'> $[action] </a> </td></tr>";
}