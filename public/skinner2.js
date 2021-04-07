class Skinner {
  constructor(cssCb, jsCb) {
    this.skinnerContainer = this.createControlsWrapper();

    this.cssCb = cssCb;
    this.jsCb = jsCb;
    this.skin = {};

    this.generateConfigColor("primary", "#161616");
    this.generateConfigColor("widget", "#333333");
    this.generateConfigColor("accent", "#ffb700", null, true);
    this.generateConfigColor("brand", "#f14100");
    this.generateConfigColor("leftMenuLevel_A", "#333333");
    this.generateConfigColor("leftMenuLevel_B", "#333333");
    this.generateConfigColor("leftMenuLevel_C", "#333333");
    this.generateConfigColor("header", "#333333");
    this.generateConfigColor("accordionHeader", "#161616");
    this.generateConfigColor("subHeader", "#161616");
    this.generateConfigColor("activeTab", "#333333");
    this.generateConfigColor("passiveTab", "#2b2b2b");
    this.generateConfigColor("singleGame", "#333333");
    this.generateConfigColor("odd", "#161616");
    this.generateConfigColor("showMore", "#161616");
    this.generateConfigColor("dropDown", "#2b2b2b");
    this.generateConfigColor("sections", "#161616");
    this.generateConfigColor("betSlip", "#333333", 40);
    this.generateConfigColor("betSlipLine", "#333333");
    this.generateConfigColor("betSlipInput", "#262626");
    this.generateConfigColor("betSlipButton", "#1A1A1A");

    this.modifyColor = this.modifyColor.bind(this);
    this.modifyKey = this.modifyKey.bind(this);

    this.cssCb(this.skin);
    this.jsCb && this.jsCb(this.skin);
  }

  init() {
    this.createHTML();
    this.applyInitialValues();
    this.createDownloadButton();
    this.createCloseButton();
  }

  async modifyColor(key, value) {
    this.skin[key] = value;
    this.applyInitialValues();
    this.generateTheme();
    this.cssCb(this.skin);
  }

  modifyKey(key, value) {
    this.skin[key] = value;
    this.generateTheme();
    this.applyInitialValues();
    this.cssCb(this.skin);
  }

  generateConfigColor(name, color, initialTextShift, isMandatory) {
    let _isMandatory = isMandatory;
    let _initialTextShift = initialTextShift || 0;
    let _color = color || "#333333";
    let _name = name;
    let _nameBg = name + "Bg";
    let _nameBg_g = _nameBg + "_g";
    let _nameG = name + "G";
    let _nameBgHov = _nameBg + "Hov";
    let _nameBg2 = _nameBg + "2";
    let _nameBg2Hov = _nameBg2 + "Hov";
    let _nameBg3 = _nameBg + "3";
    let _nameBg3Hov = _nameBg3 + "Hov";
    let _nameTxt = name + "Txt";
    let _nameTxt2 = _nameTxt + "2";
    let _nameTxt3 = _nameTxt + "3";
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName + "Bg";
    let _isGradient = "is" + _upperCaseName + "Gradient";
    let _isCustomTxt = "is" + _upperCaseName + "Txt";
    let _isNameDark = "is" + _upperCaseName + "BgDark";

    this.skin[_isNameDark] = false;
    this.skin[_isNameDark] = false;

    if(_isMandatory){
      this.skin[_isName] = true;
    }
    else{
      this.skin[_isName] = false;
    }
    
    this.skin[_isCustomTxt] = false;
    this.skin[_nameBg] = _color;
    this.skin[_nameBg_g] = this.skin[_isNameDark] ?
      tinycolor(this.skin[_nameBg]).darken(6).toString() :
      tinycolor(this.skin[_nameBg]).lighten(6).toString();
    this.skin[_nameG] = _color;
    this.skin[_nameBg2] = this.skin[_isNameDark] ?
      tinycolor(this.skin[_nameBg]).darken(6).toString() :
      tinycolor(this.skin[_nameBg]).lighten(6).toString();
    this.skin[_nameBg3] = this.skin[_isNameDark] ?
      tinycolor(this.skin[_nameBg]).darken(9).toString() :
      tinycolor(this.skin[_nameBg]).lighten(9).toString();
    this.skin[_nameTxt] = guessVisibleColor(this.skin[_nameBg]) === "#000" ?
      tinycolor(guessVisibleColor(this.skin[_nameBg])).lighten(_initialTextShift).toString() :
      tinycolor(guessVisibleColor(this.skin[_nameBg])).darken(_initialTextShift).toString();
    this.skin[_nameTxt2] =
      this.skin[_nameTxt] === "#000" ?
      tinycolor(this.skin[_nameTxt]).lighten(20).toString() :
      tinycolor(this.skin[_nameTxt]).darken(20).toString();
  }

  generateColorLogick(name, fallback, color, initialTextShift) {
    let _initialTextShift = initialTextShift || 0;
    let _name = name;
    let _nameBg = name + "Bg";
    let _nameBg_g = _nameBg + "_g";
    let _nameG = name + "G";
    let _nameBgHov = _nameBg + "Hov";
    let _nameBg2 = _nameBg + "2";
    let _nameBg2Hov = _nameBg2 + "Hov";
    let _nameBg3 = _nameBg + "3";
    let _nameBg3Hov = _nameBg3 + "Hov";
    let _nameTxt = name + "Txt";
    let _nameTxt2 = _nameTxt + "2";
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName + "Bg";
    let _isGradient = "is" + _upperCaseName + "Gradient";
    let _isNameDark = "is" + _upperCaseName + "BgDark";
    let _isCustomTxt = "is" + _upperCaseName + "Txt";

    let _fallbackBg = fallback + (color ? color : "Bg2");
    let _fallbackG = fallback + "G";

    if (this.skin[_isName]) {
      this.skin[_nameG] = this.skin[_nameBg];
      this.skin[_nameTxt] = this.skin[_isCustomTxt] ?
        this.skin[_nameTxt] :
        (guessVisibleColor(this.skin[_nameBg]) === "#000" ?
        tinycolor(guessVisibleColor(this.skin[_nameBg])).lighten(_initialTextShift).toString() :
        tinycolor(guessVisibleColor(this.skin[_nameBg])).darken(_initialTextShift).toString());
      this.skin[_nameTxt2] =
        this.skin[_nameTxt] === "#000" ?
        tinycolor(this.skin[_nameTxt]).lighten(20).toString() :
        tinycolor(this.skin[_nameTxt]).darken(20).toString();
      this.skin[_nameBg2] = this.skin[_isNameDark] ?
        tinycolor(this.skin[_nameBg]).darken(6).toString() :
        tinycolor(this.skin[_nameBg]).lighten(6).toString();
      this.skin[_nameBg3] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(9).toString() :
        tinycolor(this.skin[_nameBg]).lighten(9).toString();
      this.skin[_nameBgHov] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(2).toString() :
        tinycolor(this.skin[_nameBg]).lighten(2).toString();
      this.skin[_nameBg2Hov] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(7).toString() :
        tinycolor(this.skin[_nameBg]).lighten(7).toString();
      this.skin[_nameBg3Hov] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(2).toString() :
        tinycolor(this.skin[_nameBg]).lighten(2).toString();
      if (this.skin[_isGradient]) {
        this.skin[
          _nameG
        ] = `linear-gradient(0deg, ${this.skin[_nameBg]} 0%, ${this.skin[_nameBg_g]} 100%)`;
      }
    } else {
      this.skin[_nameBg] = this.skin[_fallbackBg];
      this.skin[_nameG] = this.skin[_nameBg];
      this.skin[_nameTxt] = this.skin[_isCustomTxt] ?
        this.skin[_nameTxt] :
        guessVisibleColor(this.skin[_nameBg]);
      this.skin[_nameTxt2] =
        this.skin[_nameTxt] === "#000" ?
        tinycolor(this.skin[_nameTxt]).lighten(20).toString() :
        tinycolor(this.skin[_nameTxt]).darken(20).toString();
      this.skin[_nameBg2] = this.skin[_isNameDark] ?
        tinycolor(this.skin[_nameBg]).darken(6).toString() :
        tinycolor(this.skin[_nameBg]).lighten(6).toString();
      this.skin[_nameBg3] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(9).toString() :
        tinycolor(this.skin[_nameBg]).lighten(9).toString();
      this.skin[_nameBgHov] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(2).toString() :
        tinycolor(this.skin[_nameBg]).lighten(2).toString();
      this.skin[_nameBg2Hov] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(7).toString() :
        tinycolor(this.skin[_nameBg]).lighten(7).toString();
      this.skin[_nameBg3Hov] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(2).toString() :
        tinycolor(this.skin[_nameBg]).lighten(2).toString();
    }
  }

  generateTheme() {
    this.skin.primaryTxt = guessVisibleColor(this.skin.primaryBg);
    this.skin.primaryBg2 = this.skin.isDark ?
      tinycolor(this.skin.primaryBg).darken(10).toString() :
      tinycolor(this.skin.primaryBg).lighten(10).toString();
    this.skin.primaryTxt2 =
      this.skin.primaryTxt === "#000" ?
      tinycolor(this.skin.primaryTxt).lighten(20).toString() :
      tinycolor(this.skin.primaryTxt).darken(20).toString();

    this.generateColorLogick("widget", "primary");
    // this.generateColorLogick("accent", "primary");
    this.generateColorLogick("brand", "accent");
    this.generateColorLogick("odd", "primary", "Bg");
    this.generateColorLogick("header", "widget");
    this.generateColorLogick("betSlip", "widget", null, 40);
    this.generateColorLogick("betSlipLine", "widget", "Bg");
    this.generateColorLogick("betSlipInput", "passiveTab", "Bg");
    this.generateColorLogick("betSlipButton", "odd");
    this.generateColorLogick("showMore", "primary", "Bg");
    this.generateColorLogick("dropDown", "singleGame", "Bg");
    this.generateColorLogick("sections", "widget", "Bg");
    this.generateColorLogick("activeTab", "widget");
    this.generateColorLogick("passiveTab", "primary");
    this.generateColorLogick("subHeader", "primary");
    this.generateColorLogick("accordionHeader", "primary", "Bg");
    this.generateColorLogick("singleGame", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_A", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_B", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_C", "widget", "Bg");
  }

  modifyControls(name) {
    let _name = name;
    let _nameBg = name + "Bg";
    let _nameBg_g = _nameBg + "_g";
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName + "Bg";
    let _isGradient = "is" + _upperCaseName + "Gradient";
    let _isNameDark = "is" + _upperCaseName + "BgDark";
    let _isCustomTxt = "is" + _upperCaseName + "Txt";

    if (this[_nameBg].checkBoxIsDark) {
      this[_nameBg].checkBoxIsDark.checked = this.skin[_isNameDark];
    }
    this[_nameBg].pickerTxtChb.checked = this.skin[_isCustomTxt];

    this[_nameBg].checkBox.checked = this.skin[_isName];
    this[_nameBg].checkBox2.checked = this.skin[_isGradient];
    this[_nameBg].picker.value = this.skin[_nameBg];
    this[_nameBg].picker2.value = this.skin[_nameBg_g];

    this.skin[_isName] ?
      (this[_nameBg].picker.disabled = false) :
      (this[_nameBg].picker.disabled = true);
    this.skin[_isName] && this.skin[_isGradient] ?
      (this[_nameBg].picker2.disabled = false) :
      (this[_nameBg].picker2.disabled = true);
    this.skin[_isName] && this.skin[_isCustomTxt] ?
      (this[_nameBg].pickerTxtColor.disabled = false) :
      (this[_nameBg].pickerTxtColor.disabled = true);
  }

  applyInitialValues() {
    this.primaryBg.picker.value = this.skin.primaryBg;
    this.primaryBg.checkBoxIsDark.checked = this.skin.isDark;

    this.modifyControls("widget");
    this.modifyControls("accent");
    this.modifyControls("brand");
    this.modifyControls("odd");
    this.modifyControls("header");
    this.modifyControls("showMore");
    this.modifyControls("dropDown");
    this.modifyControls("sections");
    this.modifyControls("activeTab");
    this.modifyControls("passiveTab");
    this.modifyControls("subHeader");
    this.modifyControls("accordionHeader");
    this.modifyControls("betSlip");
    this.modifyControls("betSlipLine");
    this.modifyControls("betSlipInput");
    this.modifyControls("betSlipButton");
    this.modifyControls("singleGame");
    this.modifyControls("leftMenuLevel_A");
    this.modifyControls("leftMenuLevel_B");
    this.modifyControls("leftMenuLevel_C");
  }

  createHTML() {
    this.primaryBg = this.createControl(
      "primary",
      this.skinnerContainer,
      null,
      null,
      null,
      null,
      (e) => {
        this.modifyKey("isDark", e.target.checked);
      }
    );

    this.widgetBg = this.createControl(
      "widget",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isWidgetBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isWidgetGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("widgetBg", e.target.value);
      },
      (e) => {
        this.modifyColor("widgetBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isWidgetBgDark", e.target.checked);
      }
    );

    this.accentBg = this.createControl(
      "accent",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isAccentBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isAccentGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("accentBg", e.target.value);
      },
      (e) => {
        this.modifyColor("accentBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isAccentBgDark", e.target.checked);
      }
    );

    this.brandBg = this.createControl(
      "brand",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isBrandBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isBrandGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("brandBg", e.target.value);
      },
      (e) => {
        this.modifyColor("brandBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isBrandBgDark", e.target.checked);
      }
    );

    this.oddBg = this.createControl(
      "odd",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isOddBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isOddGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("oddBg", e.target.value);
      },
      (e) => {
        this.modifyColor("oddBg_g", e.target.value);
      }
    );

    this.headerBg = this.createControl(
      "header",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isHeaderBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isHeaderGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("headerBg", e.target.value);
      },
      (e) => {
        this.modifyColor("headerBg_g", e.target.value);
      }
    );

    this.betSlipBg = this.createControl(
      "betSlip",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isBetSlipBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isBetSlipGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("betSlipBg", e.target.value);
      },
      (e) => {
        this.modifyColor("betSlipBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isBetSlipBgDark", e.target.checked);
      }
    );

    this.betSlipLineBg = this.createControl(
      "betSlipLine",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isBetSlipLineBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isBetSlipLineGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("betSlipLineBg", e.target.value);
      },
      (e) => {
        this.modifyColor("betSlipLineBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isBetSlipLineBgDark", e.target.checked);
      }
    );

    this.betSlipInputBg = this.createControl(
      "betSlipInput",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isBetSlipInputBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isBetSlipInputGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("betSlipInputBg", e.target.value);
      },
      (e) => {
        this.modifyColor("betSlipInputBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isBetSlipInputBgDark", e.target.checked);
      }
    );

    this.betSlipButtonBg = this.createControl(
      "betSlipButton",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isBetSlipButtonBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isBetSlipButtonGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("betSlipButtonBg", e.target.value);
      },
      (e) => {
        this.modifyColor("betSlipButtonBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isBetSlipButtonBgDark", e.target.checked);
      }
    );

    this.showMoreBg = this.createControl(
      "showMore",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isShowMoreBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isShowMoreGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("showMoreBg", e.target.value);
      },
      (e) => {
        this.modifyColor("showMoreBg_g", e.target.value);
      }
    );

    this.dropDownBg = this.createControl(
      "dropDown",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isDropDownBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isDropDownGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("dropDownBg", e.target.value);
      },
      (e) => {
        this.modifyColor("dropDownBg_g", e.target.value);
      }
    );

    this.sectionsBg = this.createControl(
      "sections",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isSectionsBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isSectionsGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("sectionsBg", e.target.value);
      },
      (e) => {
        this.modifyColor("sectionsBg_g", e.target.value);
      }
    );

    this.activeTabBg = this.createControl(
      "activeTab",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isActiveTabBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isActiveTabGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("activeTabBg", e.target.value);
      },
      (e) => {
        this.modifyColor("activeTabBg_g", e.target.value);
      }
    );

    this.passiveTabBg = this.createControl(
      "passiveTab",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isPassiveTabBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isPassiveTabGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("passiveTabBg", e.target.value);
      },
      (e) => {
        this.modifyColor("passiveTabBg_g", e.target.value);
      }
    );

    this.subHeaderBg = this.createControl(
      "subHeader",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isSubHeaderBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isSubHeaderGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("subHeaderBg", e.target.value);
      },
      (e) => {
        this.modifyColor("subHeaderBg_g", e.target.value);
      }
    );

    this.accordionHeaderBg = this.createControl(
      "accordionHeader",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isAccordionHeaderBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isAccordionHeaderGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("accordionHeaderBg", e.target.value);
      },
      (e) => {
        this.modifyColor("accordionHeaderBg_g", e.target.value);
      }
    );

    this.singleGameBg = this.createControl(
      "singleGame",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isSingleGameBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isSingleGameGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("singleGameBg", e.target.value);
      },
      (e) => {
        this.modifyColor("singleGameBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isSingleGameBgDark", e.target.checked);
      }
    );

    this.leftMenuLevel_ABg = this.createControl(
      "leftMenuLevel_A",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isLeftMenuLevel_ABg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isLeftMenuLevel_AGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("leftMenuLevel_ABg", e.target.value);
      },
      (e) => {
        this.modifyColor("leftMenuLevel_ABg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isLeftMenuLevel_ABgDark", e.target.checked);
      }
    );

    this.leftMenuLevel_BBg = this.createControl(
      "leftMenuLevel_B",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isLeftMenuLevel_BBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isLeftMenuLevel_BGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("leftMenuLevel_BBg", e.target.value);
      },
      (e) => {
        this.modifyColor("leftMenuLevel_BBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isLeftMenuLevel_BBgDark", e.target.checked);
      }
    );

    this.leftMenuLevel_CBg = this.createControl(
      "leftMenuLevel_C",
      this.skinnerContainer,
      (e) => {
        this.modifyColor("isLeftMenuLevel_CBg", e.target.checked);
      },
      (e) => {
        this.modifyColor("isLeftMenuLevel_CGradient", e.target.checked);
      },
      (e) => {
        this.modifyColor("leftMenuLevel_CBg", e.target.value);
      },
      (e) => {
        this.modifyColor("leftMenuLevel_CBg_g", e.target.value);
      },
      (e) => {
        this.modifyColor("isLeftMenuLevel_CBgDark", e.target.checked);
      }
    );

    this.borderRadius = this.createRangeControl(
      "borderRadius",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("borderRadius", e.target.value);
      }
    );
    this.makeTournamentBackground = this.createRangeControl(
      "tournaments bg",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("makeTournamentBackground", e.target.checked);
      },
      "range"
    );
    this.makeMenuTabBackground = this.createRangeControl(
      "Submenu tab bg",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("makeMenuTabBackground", e.target.checked);
      },
      "checkbox"
    );
  }

  createControlsWrapper() {
    let toolbox = document.createElement("div");
    toolbox.className = "skinner_toolbox";
    let main = document.createElement("div");
    main.className = "nik_skinner_control_wrapper";
    toolbox.appendChild(main);
    document.body.appendChild(toolbox);
    return main;
  }

  createDownloadButton() {
    this.btnWrapper = document.createElement("div");
    this.btnWrapper.className = "nik_skinner_download_button_wrapper";
    let downloadBtn = document.createElement("button");
    downloadBtn.innerText = "download css";
    downloadBtn.className = "nik_skinner_download_button";
    this.skinnerContainer.appendChild(this.btnWrapper);
    this.btnWrapper.appendChild(downloadBtn);
    downloadBtn.addEventListener("click", () => {
      this.makeDownloadRequest(this.cssCb, this.skin);
    });
  }

  createCloseButton() {
    this.toolBox = document.querySelector(".skinner_toolbox");
    this.closeBtn = document.createElement("button");
    this.closeBtn.innerHTML = '<i class="tg-ico-arrow">Ã</i>';
    this.closeBtn.setAttribute("class", "color_controls_toggle tg-ico-arrow");
    this.closeBtn.addEventListener("click", () => {
      if (this.toolBox.classList.contains("skinner_toolbox-hidden")) {
        this.toolBox.classList.remove("skinner_toolbox-hidden");
      } else {
        this.toolBox.classList.add("skinner_toolbox-hidden");
      }
    });
    this.toolBox.appendChild(this.closeBtn);
  }

  async makeDownloadRequest(cssCb, argument) {
    const css = cssCb(argument);
    // const scss = this.scssCb && this.scssCb(argument);
    const js = this.jsCb && this.jsCb(argument);

    try {
      const data = await fetch(`/req` + window.location.pathname, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          css: css,
          // scss: this.scssCb && scss,
          js: this.jsCb && js,
        }),
      });
      if (data.status === 200) {
        window.location.replace(`/download` + window.location.pathname);
      }
    } catch (error) {
      console.log(error);
    }
  }

  createRangeControl(label, parent, checkboxCallback, type) {
    let _type = type;
    let _label = document.createElement("label");
    _label.className = "nik_skinner_control_group_label";
    _label.htmlFor = label;
    _label.innerText = label;

    this.wrapper = document.createElement("div");
    this.wrapper.className = "nik_skinner_control_group";

    let range = document.createElement("input");
    if (_type) {
      range.type = "checkbox";
      range.className = "nik_skinner_control_group_checkbox";
    } else {
      range.type = "range";
      range.className = "nik_skinner_control_group_range";
    }

    range.id = label;
    range.addEventListener("change", checkboxCallback);

    this.wrapper.appendChild(_label);
    this.wrapper.appendChild(range);
    parent.appendChild(this.wrapper);
  }

  createControl(
    label,
    parent,
    checkboxCallback,
    gradientCallback,
    pickerCallback,
    picker2Callback,
    isDarkCallback
  ) {
    let _name = label;
    let _nameBg = _name + "Bg";
    let _nameBg_g = _nameBg + "_g";
    let _nameG = _name + "G";
    let _nameBgHov = _nameBg + "Hov";
    let _nameBg2 = _nameBg + "2";
    let _nameBg2Hov = _nameBg2 + "Hov";
    let _nameBg3 = _nameBg + "3";
    let _nameBg3Hov = _nameBg3 + "Hov";
    let _nameTxt = _name + "Txt";
    let _nameTxt2 = _nameTxt + "2";
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName + "Bg";
    let _isGradient = "is" + _upperCaseName + "Gradient";
    let _isCustomTxt = "is" + _upperCaseName + "Txt";
    let _isNameDark = "is" + _upperCaseName + "BgDark";
    let _t = this;

    let _label = document.createElement("label");
    _label.className = "nik_skinner_control_group_label";
    _label.htmlFor = label;
    _label.innerText = label;

    let wrapper = document.createElement("div");
    wrapper.className = "nik_skinner_control_group";

    let checkBox;
    if (checkboxCallback) {
      checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.className = "nik_skinner_control_group_checkbox";
      checkBox.id = label;
      checkBox.addEventListener("change", checkboxCallback);
    }

    let checkBoxIsDark;
    if (isDarkCallback) {
      checkBoxIsDark = document.createElement("input");
      checkBoxIsDark.type = "checkbox";
      checkBoxIsDark.className = "nik_skinner_control_group_checkbox";
      checkBoxIsDark.id = label + "dark";
      checkBoxIsDark.addEventListener("change", isDarkCallback);
    }

    let picker = document.createElement("input");
    picker.type = "color";
    picker.className = "nik_skinner_control_group_picker";
    picker.addEventListener("input", pickerCallback);

    let picker2, checkBox2;
    if (gradientCallback) {
      checkBox2 = document.createElement("input");
      checkBox2.type = "checkbox";
      checkBox2.className = "nik_skinner_control_group_checkbox";
      checkBox2.id = label + "_g";
      checkBox2.addEventListener("change", gradientCallback);

      picker2 = document.createElement("input");
      picker2.type = "color";
      picker2.className = "nik_skinner_control_group_picker";
      wrapper.appendChild(picker2);
      picker2.addEventListener("input", picker2Callback);
    }

    let pickerTxtChb;
    pickerTxtChb = document.createElement("input");
    pickerTxtChb.type = "checkbox";
    pickerTxtChb.className = "nik_skinner_control_group_checkbox";
    pickerTxtChb.id = label + "_gg";
    pickerTxtChb.addEventListener("change", (e) =>
      _t.modifyKey(_isCustomTxt, e.target.checked)
    );

    let pickerTxtColor;
    pickerTxtColor = document.createElement("input");
    pickerTxtColor.type = "color";
    pickerTxtColor.className = "nik_skinner_control_group_picker";
    pickerTxtColor.addEventListener("input", (e) =>
      _t.modifyColor(_nameTxt, e.target.value)
    );

    wrapper.appendChild(_label);
    if (checkboxCallback) {
      wrapper.appendChild(checkBox);
    }

    if (gradientCallback) {
      wrapper.appendChild(checkBox2);
    }
    wrapper.appendChild(picker);
    if (gradientCallback) {
      wrapper.appendChild(picker2);
    }
    if (isDarkCallback) {
      wrapper.appendChild(checkBoxIsDark);
    }
    wrapper.appendChild(pickerTxtChb);
    wrapper.appendChild(pickerTxtColor);

    parent.appendChild(wrapper);

    return {
      picker,
      picker2,
      checkBox,
      checkBox2,
      checkBoxIsDark,
      pickerTxtChb,
      pickerTxtColor,
    };
  }
}

var head = document.getElementsByTagName("head")[0];
var style = document.createElement("style");
style.setAttribute("type", "text/css");
head.appendChild(style);

let _createJs = window.createJs ? window.createJs : null;

var s = new Skinner(createCss, _createJs);

s.init();

function addActiveClassToNavigation() {
  let nav = document.querySelectorAll(".nik_skinner_link");

  for (let i = 0; i < nav.length; i++) {
    if (`/${nav[i].href.split("/")[3]}` === window.location.pathname) {
      nav[i].classList.add("nik_skinner_link-active");
    }
  }
}

addActiveClassToNavigation();