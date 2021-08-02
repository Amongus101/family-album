var reason=["1. Charli Damilio","2. Dixie Damilio" ," 3. Mark Damilio","4. Heidi Damelio"];
var images=["https://yt3.ggpht.com/mbzqWGh9gW-z5iSO68qa9C5ZrMG2JbeOINMpegkMDGH-gAuizT68kISt2yJKOsmtDqzZ-naz=s900-c-k-c0x00ffffff-no-rj","https://see.news/wp-content/uploads/2020/10/Dixie-D%E2%80%99Amelio-MN2S.jpg","https://s.hdnux.com/photos/67/22/26/14493058/3/1200x0.jpg","https://www.famousbirthdays.com/faces/d-amelio-heidi-image.jpg"];
var i=0;
function slidenext(){
  document.getElementById("reasontext").innerHTML=reason[i];
 document.getElementById("album").src=images[i];
  i++;
  if (i == 4)
{
i=0;
}
}


