var count = 1;
$("img[src$='/images/flags/us.png'").parent().next().children(".username-light").each(function() {
  console.log(count + ":" + $(this).text());
  count++;
})
