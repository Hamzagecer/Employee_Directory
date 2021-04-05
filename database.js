const personelList = [{
        personelName: "James King",
        personelDistance: "President And CEO",
        personelImage: "img/adad.png",
    },
    {
        personelName: "Julie Taylor",
        personelDistance: "VP of Marketing",
        personelImage: "img/adad.png",
    },
    {
        personelName: "Eugene Lee",
        personelDistance: "CFO",
        personelImage: "img/adad.png",
    },
    {
        personelName: "John Williams",
        personelDistance: "VP of Engineering",
        personelImage: "img/adad.png",
    },
    {
        personelName: "Ray More",
        personelDistance: "VP of Sales",
        personelImage: "img/adad.png",
    },
    {
        personelName: "Paul Jonas",
        personelDistance: "QA Menager",
        personelImage: "img/adad.png",
    },

]

let dataabaseinclude=personelList.map((personel)=>{
return` <ul>
<li class="item_wrap male online">
  <div class="item">
    <div class="item_left">
      <div class="img">
        <img src="${personel.personelImage}" alt="">
      </div>
      <div class="data">
        <p class="name">${personel.personelName}</p>
        <p class="distance">${personel.personelDistance}</p>
      </div>
    </div>

  </div>
</li>
</ul>`

}).join("")
document.querySelector("#databaseinclude").innerHTML=databaseinclude;