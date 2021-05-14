var images=["https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png",
" https://img.favpng.com/6/7/14/clip-art-portable-network-graphics-father-s-day-transparency-png-favpng-1TQ24NmeUeaLBEjr1dD4FRYpq.jpg",
"https://previews.123rf.com/images/irwanjos/irwanjos1602/irwanjos160200013/52404087-happy-cute-girl-cartoon.jpg",
"https://www.pngkit.com/png/detail/258-2587144_welcome-teenage-girl-cartoon-png.png"]

var names=["My Family Book", "Smita Chelamchela", "Anil Chelamchela", "Anisha Chelamchela", "Aditi Chelamchela"]

var i = 0;
function update()
{
    i++
    var numbers_of_family_member = 4
    if(i > numbers_of_family_member)
    {
        i = 0;
    }
    var updatedImg = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_img").src = updatedImg;
    document.getElementById("family_member_name").innerHTML = updatedName;
}       