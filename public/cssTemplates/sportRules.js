function createCss(c) {
  let css = `
    /* Rules page */
    .logo {
        background: url('images/ClientLogo/${c.fileName}/big.png') no-repeat;
        width: 115px;
        height: 36px;
        background-size: contain;
    }
    @media screen and (max-width: 1024px) {
        .logo {
            background: url('images/ClientLogo/${c.fileName}/sm.png') no-repeat;
            width: 30px;
            height: 30px;
            background-size: contain;
        }
    }
    body {
        background-color: ${c.primaryBg};
    }
    header{ 
        background: ${c.headerG}; 
        box-shadow: 3px 1px 4px #000;
    }
    .languages .select-list,
    .langRow{ 
        background-color: ${c.widgetBg2}; 
    }
    .langRow .txt{
        color: ${c.widgetTxt2};
    }
    .langRow:hover{ 
         background-color: ${c.widgetBg3};
    }
    .languages #selLang > a {
        border-radius: ${c.borderRadius}px;
    }
    .expandable-list{ 
         background-color: ${c.primaryBg}; 
    }
    .main-col {
        background: ${c.widgetG};
        color: ${c.widgetTxt};
    }
    .expandable-list .menuleft .menuleftа {
        background: ${c.leftMenuLevel_AG}; 
        color: ${c.leftMenuLevel_ATxt};
    }
    .expandable-list .menuleft .menuleftа:hover{
        background: ${c.leftMenuLevel_ABg2};
    }
    .expandable-list .menuleft ul li a{ 
        background-color: ${c.leftMenuLevel_BG}; 
        color: ${c.leftMenuLevel_BTxt};
    }
    .expandable-list .menuleft ul li a:hover{
        background-color: ${c.leftMenuLevel_BBg2};
    }
    .expandable-list .menuleft ul li.active a{
        background-color: ${c.leftMenuLevel_CG}; 
    }
    .content-head{ 
        color: ${c.accentBg};
    }
    .mob_nav{
        color: ${c.widgetTxt2};  
    }
    .subMenu .arrow,
    .languages #selLang > a:after{
        color: ${c.widgetTxt2};
    }
  
  `;

  style.innerHTML = css;

  return css;
}
