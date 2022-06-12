var document  = document
for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        document.write(i + "*" + j + "=" + i * j + "&nbsp&nbsp;");
        if (i == j) {
            document.write("<br/>");
            break;
        }
    }
}
