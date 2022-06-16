$(document).ready(function () {
    let i = 1;
    $("#btnadd").click(function () {
      let newHtml = GetHtml().replace("$[Id]", i++).
        replace("$[ATitle]", $("#txtATitle ").val()).
        replace("$[SFName]", $("#txtSFName").val()).
        replace("$[SLName]", $("#txtSLName").val()).
        replace("$[CTitle]", $("#txtCTitle").val()).
        replace("$[action]", "Edit");
      $("#table_td").append(newHtml);
    });

    $("#btnUpdate").click(function () {
      let newHtml = GetHtml().replace("$[Id]", $("#txtId").val()).
        replace("$[ATitle]", $("#txtATitle").val()).
        replace("$[SFName]", $("#txtSFName").val()).
        replace("$[SLName]", $("#txtSLName").val()).
        replace("$[CTitle]", $("#txtCTitle").val()).
        replace("$[action]", "Edit");
      $("#table_td").append(newHtml);
      $("#btnadd").show();
      $("#btnUpdate").hide();
      $("#txtId").val('');
      $("#txtATitle").val('');
      $("#txtSFName").val('');
      $("#txtSLName").val('');
      $("#txtCTitle").val('')

    });

    $(document).on("click", "#A_Edit", function () {
      $("#btnadd").hide();
      $("#btnUpdate").show();
      $("#txtId").show();
      $("#txtId").val($(this).parent().parent().find('.Id').html());
      $("#txtCTitle").val($(this).parent().parent().find('.ATitle').html());
      $("#txtSFName").val($(this).parent().parent().find('.SFName').html());
      $("#txtSLName").val($(this).parent().parent().find('.SLName').html());
      $("#txtCTitle").val($(this).parent().parent().find('.CTitle').html());
      $(this).parents("tr").remove();
      $("#btnUpdate").focus();

    });
    document.getElementById("year").innerHTML = new Date().getFullYear();
  });

  function GetHtml() {
    return "<tr><td class='Id'>$[Id]</td>"
      + "<td class='ATitle'>$[ATitle]</td>"
      + "<td class='SFName'>$[SFName]</td>"
      + "<td class='SLName'>$[SLName]</td>"
      + "<td class='CTitle'>$[CTitle]</td>"
      + "<td class='action'><a href='#' id='A_Edit'> $[action] </a> </td></tr>";
  }