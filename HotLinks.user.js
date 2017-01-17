// ==UserScript==
  // @name HotLinks
  // @description Ссылки заездов
  // @author kasiveyser
  // @license https://creativecommons.org/licenses/by-sa/4.0/
  // @version 1.0
// @match http://klavogonki.ru/*
// @grant none
// ==/UserScript==

window.onload = function() {
divr = document.createElement('div');
divr.id = 'hotlinks';
divr.class = 'navmenu';
divr.innerHTML = "\
  <style>\
    .minwidth_container li a {text-decoration: none;}\
    #logo {display: none;}\
    #xrust.open {display:block;}\
    #linki.open, #en.open, #adin.open {border-top:1px solid black;}\
    #hotlinks ul {float: left; display: inline-block; margin: 0; padding: 0;list-style: none;}\
    #hotlinks {float: left;}\
    .navmenu li{display: inline-block;float: left;}\
    #hotlinks li, #linki li, #xrust, #en li, #adin li {display:none;}\
    #linki.open li, #en.open li, #adin.open li{display:inline-block;margin-bottom: 2px; padding-left: 6px;}\
    .bar {background: none}\
    .minwidth_container {border-bottom: 1px solid rgba(0, 0, 0, 0.4);}\
    .login-block {padding: 0 30px 0 0; position: absolute; top: 0px; width: 100%;}\
    #head .right .menu a { transition: all ease 0.5s; text-decoration: none; color: #46810b; font-size: 14px; float: right; position: relative; display: block; padding: 17px 20px; text-align: center; width: auto; height: auto;}\
    #head .right .menu a:hover {color: #46810b;background: rgba(0, 0, 0, 0.15);}\
    #head .right .menu a.active {color: #e3039e; text-decoration: none; background: none;  margin-top: 0; padding-top: 17px;}\
    #head .right {padding: 0;}\
    #head .right .menu {margin: 0px 14px 0 0;}\
  </style>\
    <span class='navmenu'>\
    <ul class='menu'><img src='http://donnaconcetta.com/StyleSheet/img/menu-mobile.png' alt='odin' height='50px'>\
    </ul>\
  <ul class='kiber'><img src='https://csdrive.srru.ac.th/55122420235/texture/text/k.png' alt='odin' height='50px'>\
    <br><li><a href='http://klavogonki.ru/create/?gametype=voc&voc=35139&type=practice&level_from=1&level_to=9&timeout=5&submit=1'>МБ</a></li>\
        <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=40933&type=practice&level_from=1&level_to=9&timeout=5'>Ghost</a></li>\
    <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=16001&type=practice&level_from=1&level_to=9&timeout=5'>Радость</a></li>\
        <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=27969&type=practice&level_from=1&level_to=9&timeout=5'>Не тому</a></li>\
  </ul>\
    <ul class='xrust'><img src='http://www.clker.com/cliparts/c/i/R/i/U/Y/letter-x-hi.png' alt='odin' height='50px'>\
    </ul>\
    <ul class='en'><img src='https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/64/En.png' alt='odin' height='50px'>\
    </ul>\
    <ul class='adin'><img src='http://www.free-pictogram.com/wp-content/uploads/2011/01/21_yellow_black_1.png' alt='odin' height='50px'>\
    </ul>\
  </span>";

var list = document.getElementsByClassName("minwidth_container")[0];
list.insertBefore(divr, list.children[0]);

    div2 = document.createElement('div');
    div2.id = 'linki';
    //div2.class = 'navmenu';
    div2.innerHTML = "<li><a href='http://klavogonki.ru/create/?gametype=voc&voc=35139&type=practice&level_from=1&level_to=9&timeout=5&submit=1'>МБ</a></li>\
        <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=40933&type=practice&level_from=1&level_to=9&timeout=5'>Ghost</a></li>\
    <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=16001&type=practice&level_from=1&level_to=9&timeout=5'>Радость</a></li>\
        <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=27969&type=practice&level_from=1&level_to=9&timeout=5'>Не тому</a></li>";
        
    var list = document.getElementsByClassName("minwidth_container")[0];
    list.insertBefore(div2, list.children[4]);
    
    var menuElem = document.getElementById('hotlinks');
    var titleElem = menuElem.querySelector('.kiber');
    var linki = document.getElementById('linki');

    titleElem.onclick = function() {
    //menuElem.classList.toggle('open');
    linki.classList.toggle('open');
  };
    
    // попытка впихнуть хрустлайн
    
    divs = document.createElement('div');
    divs.id = 'xrust';
    divs.innerHTML = '<p style="margin: 0; background: #fff; padding-bottom: 0px;"><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13571&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%"><img src="http://flamber.ru/files/photos/1146224120/1149261961_c_s.jpg" alt="Упражнение 1" width="4%" ></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13572&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/46/06/460654ead4d8cb281a97f11cff2b0433.jpg" alt="Упражнение 2" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13573&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/c4/ad/c4adf88133a0198489afff1fd6bc2428.jpg" alt="Упражнение 3" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13574&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/fe/73/fe73f29a9ba75b32ef7d607628235e56.jpg" alt="Упражнение 4" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13583&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/63/48/63485cb35c9b5bcde2ec20da7fdcdecf.jpg" alt="Упражнение 5" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13584&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/66/a5/66a5f8a25add9be52fb6c2eaf9d136f4.png" alt="Упражнение 6" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13585&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/ce/f8/cef8529431e5b13d53599962623732b2.jpg" alt="Упражнение 7" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13654&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/5a/42/5a4258433eadd0e19e2db8e716f8711f.gif" alt="Упражнение 8" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13656&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/b7/2b/b72bf5c8cf86feb9a08a6dbdcd4d3411.jpg" alt="Упражнение 9" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13659&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/d6/7e/d67e9cd8ab338bb9a2857ac4aaac12f2.jpg" alt="Упражнение 10" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13661&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/1b/3b/1b3b0cbab3084e047d075849ac312549.jpg" alt="Упражнение 11" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13663&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/b3/b3/b3b3f27f038143fd6d72770026a1735e.png" alt="Упражнение 12" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13664&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/df/3e/df3e88479521d6f77b8ff7c6b9b73ad7.jpg" alt="Упражнение 13" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=16346&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/41/4e/414e24480d56ebc2d44106793a627933.jpg" alt="Упражнение 14" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=16759&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/3b/a2/3ba24b46fb1bae9895d6c238d1b8a882.jpg" alt="Упражнение 15" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=16762&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/c8/20/c820b0846070509118c2517d052d55c3.jpg" alt="Упражнение 16" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=17495&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/64/bc/64bc13a50789053b24516a88bb2d80c0.jpg" alt="Упражнение 17" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=17497&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/f7/b8/f7b878bce5e3e0a2a0cb9678d8381c7d.jpg" alt="Упражнение 18" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=17498&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/75/4d/754d7fcbea8967e265439318903c41ef.gif" alt="Упражнение 19" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=17499&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/32/f4/32f49a7fa7f399a87513c389b806d6fe.gif" alt="Упражнение 20" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=32013&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/5e/b7/5eb7c160e6cb456fc4c54271fe3b37af.png" alt="Упражнение 21" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=32014&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/50/fe/50fea6640e821c5785af3b73a8d3228e.jpg" alt="Упражнение 22" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=32015&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/12/7f/127fbf6fde45ed0b0a23bf31affad382.jpg" alt="Упражнение 23" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=32016&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://jpegshare.net/images/ac/af/acaf104c4c73db165e0c98f1807901a6.jpg" alt="Упражнение Заключительное" width="4%"></a><a href="http://klavogonki.ru/create/?gametype=normal&amp;type=practice&amp;level_from=1&amp;level_to=9&amp;timeout=5&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C"><img src="http://cs7010.vk.me/c312729/v312729578/5ac4/jBohmQ1ndrQ.jpg" width="4%"></a><br></p>';

    var list = document.getElementsByClassName("minwidth_container")[0];
    list.insertBefore(divs, list.children[4]);
    
    var menuElem = document.getElementById('hotlinks');
    var titleElem = menuElem.querySelector('.xrust');
    var xrust = document.getElementById('xrust');
    
    titleElem.onclick = function() {
    //menuElem.classList.toggle('open');
    xrust.classList.toggle('open');
    };

    // En
    divEn = document.createElement('div');
    divEn.id = 'en';
    divEn.innerHTML = "\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=62586&type=practice&level_from=1&level_to=9&timeout=5'>100</a></li>\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=1432&type=practice&level_from=1&level_to=9&timeout=5'>част</a></li>\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=63374&type=practice&level_from=1&level_to=9&timeout=5'>част2</a></li>\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=731&type=practice&level_from=1&level_to=9&timeout=5'>250</a></li>\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=31&type=practice&level_from=1&level_to=9&timeout=5'>500</a></li>\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=5874&type=practice&level_from=1&level_to=9&timeout=5'>850</a></li>\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=14878&type=practice&level_from=1&level_to=9&timeout=5'>short</a></li>\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=5539&type=practice&level_from=1&level_to=9&timeout=5'>Обычный</a></li>\
      <li><a href='http://klavogonki.ru/create/?gametype=voc&voc=100139&type=practice&level_from=1&level_to=9&timeout=5&submit=1'>HTML&CSS</a></li>\
      <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=64497&type=practice&level_from=1&level_to=9&timeout=5'>th, ch, sh</a></li>\
      <li><a href='#'>#</a></li>\
    <li><a href='#'>#</a></li>";

    var list = document.getElementsByClassName("minwidth_container")[0];
    list.insertBefore(divEn, list.children[4]);
    
    var menuElem = document.getElementById('hotlinks');
    var titleElem = menuElem.querySelector('.en');
    var en = document.getElementById('en');
    
    titleElem.onclick = function() {
    //menuElem.classList.toggle('open');
    en.classList.toggle('open');
    };

    // adin
    divEn = document.createElement('div');
    divEn.id = 'adin';
    divEn.innerHTML = "\
    <li><a href='http://klavogonki.ru/create/?gametype=voc&voc=25856&type=practice&level_from=1&level_to=9&timeout=5&submit=1'>100</a></li>\
    <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=192&type=practice&level_from=1&level_to=9&timeout=5'>част</a></li>\
    <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=931&type=practice&level_from=1&level_to=9&timeout=5'>ч2</a></li>\
    <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=935&type=practice&level_from=1&level_to=9&timeout=5'>ч3</a></li>\
    <li><a href='http://klavogonki.ru/create/?submit=1&gametype=voc&voc=1789&type=practice&level_from=1&level_to=9&timeout=5'>короткие</a></li>\
    <li><a href='#'>#</a></li>\
    <li><a href='#'>#</a></li>\
    <li><a href='#'>#</a></li>\
    <li><a href='#'>#</a></li>";

    var list = document.getElementsByClassName("minwidth_container")[0];
    list.insertBefore(divEn, list.children[4]);
    
    var menuElem = document.getElementById('hotlinks');
    var titleElem = menuElem.querySelector('.adin');
    var adin = document.getElementById('adin');
    
    titleElem.onclick = function() {
    //menuElem.classList.toggle('open');
    adin.classList.toggle('open');
    };
};



/* добавить стили для нав
#logo{
    display:none;
}
#head .right{
    padding:0;
}
#head .right .menu {
  margin: 0px 10px 0 0;
  }*/

