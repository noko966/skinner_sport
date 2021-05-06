class Skinner {
  constructor(cssCb, jsCb) {
    this.skinnerContainer = this.createControlsWrapper();

    this.cssCb = cssCb;
    this.jsCb = jsCb;
    this.skin = {};

    this.generateConfigColor("primary", "#161616");
    this.generateConfigColor("widget", "#333333");
    this.generateConfigColor("accent", "#ffb700");
    this.generateConfigColor("brand", "#f14100");
    this.generateConfigColor("leftMenuLevel_A", "#333333");
    this.generateConfigColor("leftMenuLevel_B", "#424242");
    this.generateConfigColor("leftMenuLevel_C", "#424242");
    this.generateConfigColor("header", "#333333");
    this.generateConfigColor("popupHeader", "#262626");
    this.generateConfigColor("popup", "#333333");
    this.generateConfigColor("subHeader", "#161616");
    this.generateConfigColor("activeTab", "#333333");
    this.generateConfigColor("tab", "#2b2b2b");
    this.generateConfigColor("sideBarActiveTab", "#333333");
    this.generateConfigColor("sideBarTab", "#2b2b2b");
    this.generateConfigColor("singleGame", "#333333");
    this.generateConfigColor("odd", "#161616");
    this.generateConfigColor("showMore", "#242424");
    this.generateConfigColor("input", "#333333");
    this.generateConfigColor("widgetInput", "#2b2b2b");
    this.generateConfigColor("betSlip", "#333333", 40);
    this.generateConfigColor("betSlipStake", "#444444");
    this.generateConfigColor("betSlipInput", "#262626");
    this.generateConfigColor("betSlipButton", "#1A1A1A");
    this.generateConfigBorderRadius("borderRadius", "0");
    this.generateConfigBorderRadius("inputBorderRadius", "0");
    this.generateConfigBorderRadius("buttonBorderRadius", "0");
    this.generateConfigCheckBox("retroView");
    this.generateConfigCheckBox("futureView");

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

  modifyKey(key, value) {
    this.skin[key] = value;
    this.applyInitialValues();
    this.generateTheme();
    this.cssCb(this.skin);
  }

  generateConfigBorderRadius(name, value) {
    let _name = name;
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName;
    let _nameVal = name + "Val";
    let _value = value || "0";
    this.skin[_isName] = false;
    this.skin[_nameVal] = _value;
  }

  generateConfigCheckBox(name) {
    let _name = name;
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName;
    this.skin[_isName] = false;
  }

  generateConfigColor(name, color, initialTextShift) {
    let _initialTextShift = initialTextShift || 0;
    let _color = color || "#333333";
    let _name = name;
    let _nameBg = name + "Bg";
    let _nameBg_g = _nameBg + "_g";
    let _nameBg_g2 = _nameBg_g + "2";
    let _nameG = name + "G";
    let _nameG2 = _nameG + "2";
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
    let _isCustomTxt = "isCustom" + _upperCaseName + "Txt";
    let _customTxt = "custom" + _upperCaseName + "Txt";
    let _isNameDark = "is" + _upperCaseName + "BgDark";

    this.skin[_isNameDark] = false;
    this.skin[_isName] = false;
    this.skin[_isCustomTxt] = false;
    this.skin[_nameBg] = _color;
    this.skin[_nameBg_g] = this.skin[_isNameDark] ?
      tinycolor(this.skin[_nameBg]).darken(6).toString() :
      tinycolor(this.skin[_nameBg]).lighten(6).toString();
    this.skin[_nameG] = _color;
    this.skin[_nameBg2] = this.skin[_isNameDark] ?
      tinycolor(this.skin[_nameBg]).darken(6).toString() :
      tinycolor(this.skin[_nameBg]).lighten(6).toString();
    this.skin[_nameG2] = this.skin[_nameBg2];
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

  generateBorderRadiusLogick(name, fallBack) {
    let _name = name;
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName;
    let _nameVal = name + "Val";

    let _fallback = fallBack;
    let _upperCaseFallBack = _fallback[0].toUpperCase() + _fallback.substring(1);
    let _isFallBack = "is" + _upperCaseFallBack;
    let _fallbackVal = _fallback + "Val";

    if (!this.skin[_isName]) {
      this.skin[_nameVal] = this.skin[_fallbackVal];
    }

  }

  generateColorLogick(name, fallBack, color) {
    let _color = color;
    let _name = name;
    let _nameBg = _name + "Bg";
    let _nameBgL = _nameBg + "L";
    let _nameBgD = _nameBg + "D";
    let _nameBg2 = _name + "Bg2";
    let _nameBg_g = _nameBg + "_g";
    let _nameG = name + "G";
    let _nameG2 = _nameG + "2";
    let _nameBgHov = _nameBg + "Hov";
    let _nameBg2Hov = _nameBg2 + "Hov";
    let _nameBg3 = _nameBg + "3";
    let _nameBg3Hov = _nameBg3 + "Hov";
    let _nameTxt = name + "Txt";
    let _nameTxt2 = _nameTxt + "2";
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName + "Bg";
    let _isGradient = "is" + _upperCaseName + "Gradient";
    let _isGradientInvert = "is" + _upperCaseName + "GradientInvert";
    let _isNameDark = "is" + _upperCaseName + "BgDark";
    let _isCustomNameTxt = "isCustom" + _upperCaseName + "Txt";
    let _customNameTxt = "custom" + _upperCaseName + "Txt";

    let _fallback = fallBack;
    let _upperCaseFallBack = _fallback[0].toUpperCase() + _fallback.substring(1);
    let _isFallBackGradient = "is" + _upperCaseFallBack + "Gradient";
    let _fallbackBg = _fallback + "Bg";
    let _fallbackBg2 = _fallback + "Bg2";
    let _isCustomFallbackTxt = "isCustom" + _upperCaseFallBack + "Txt";
    let _customFallbackTxt = "custom" + _upperCaseFallBack + "Txt";

    let _fallbackBg_g = _fallbackBg + "_g";
    let _fallbackG = _fallback + "G";
    let _isFallbackDark = "is" + _upperCaseFallBack + "BgDark";

    if (this.skin[_isName]) {
      this.skin[_nameG] = this.skin[_nameBg];
      if (this.skin[_isCustomNameTxt]) {
        this.skin[_nameTxt] = this.skin[_customNameTxt];
        this.skin[_nameTxt2] = this.skin[_nameTxt];
      } else {
        this.skin[_nameTxt] = guessVisibleColor(this.skin[_nameBg]);
        this.skin[_nameTxt2] =
          this.skin[_nameTxt] === "#000" ?
          tinycolor(this.skin[_nameTxt]).lighten(20).toString() :
          tinycolor(this.skin[_nameTxt]).darken(20).toString();
      }

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
      this.skin[_nameBgL] = tinycolor(this.skin[_nameBg]).lighten(3).toString();
      this.skin[_nameBgD] = tinycolor(this.skin[_nameBg]).darken(3).toString();
      if (this.skin[_isGradient]) {
        if(this.skin[_isGradientInvert]){
          this.skin[_nameG] = `linear-gradient(0deg, ${this.skin[_nameBg_g]} 0%, ${this.skin[_nameBg]} 100%)`;
        }
        else{
          this.skin[_nameG] = `linear-gradient(0deg, ${this.skin[_nameBg]} 0%, ${this.skin[_nameBg_g]} 100%)`;
        }

      }
    } else {
      this.skin[_nameBg] = _color ? this.skin[_fallback + _color] : this.skin[_fallbackBg2];
      this.skin[_nameG] = this.skin[_nameBg];

      if (this.skin[_isCustomFallbackTxt]) {
        this.skin[_nameTxt] = this.skin[_customFallbackTxt];
        this.skin[_nameTxt2] = this.skin[_nameTxt]
      } else {
        this.skin[_nameTxt] = guessVisibleColor(this.skin[_nameBg]);
        this.skin[_nameTxt2] =
          this.skin[_nameTxt] === "#000" ?
          tinycolor(this.skin[_nameTxt]).lighten(20).toString() :
          tinycolor(this.skin[_nameTxt]).darken(20).toString();
      }

      this.skin[_nameBg2] = this.skin[_isFallbackDark] ?
        tinycolor(this.skin[_nameBg]).darken(6).toString() :
        tinycolor(this.skin[_nameBg]).lighten(6).toString();
      this.skin[_nameBgL] = tinycolor(this.skin[_nameBg]).lighten(8).toString();
      this.skin[_nameBgD] = tinycolor(this.skin[_nameBg]).darken(8).toString();


      if (this.skin[_isFallBackGradient]) {
        this.skin[_nameG] = _color ?
          `linear-gradient(0deg, ${this.skin[_fallback + _color]} 0%, ${this.skin[_fallbackBg_g]} 100%)` :
          `linear-gradient(0deg, ${this.skin[_fallbackBg2]} 0%, ${this.skin[_fallbackBg_g]} 100%)`
      }
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

    this.skin.accentTxt = guessVisibleColor(this.skin.accentBg);
    this.skin.accentBg2 = this.skin.isAccentDark ?
      tinycolor(this.skin.accentBg).darken(10).toString() :
      tinycolor(this.skin.accentBg).lighten(10).toString();

    this.generateColorLogick("widget", "primary");
    this.generateColorLogick("brand", "accent");
    this.generateColorLogick("odd", "primary", "Bg");
    this.generateColorLogick("header", "widget", "Bg");
    this.generateColorLogick("betSlip", "widget", "Bg");
    this.generateColorLogick("betSlipStake", "widget");
    this.generateColorLogick("betSlipInput", "betSlip");
    this.generateColorLogick("betSlipButton", "odd");
    this.generateColorLogick("showMore", "primary", "Bg");
    this.generateColorLogick("input", "widget", "Bg");
    this.generateColorLogick("widgetInput", "primary", "Bg");
    this.generateColorLogick("activeTab", "widget", "Bg");
    this.generateColorLogick("tab", "widget");
    this.generateColorLogick("sideBarActiveTab", "activeTab", "Bg");
    this.generateColorLogick("sideBarTab", "tab");
    this.generateColorLogick("subHeader", "primary", "Bg");
    this.generateColorLogick("popupHeader", "widget");
    this.generateColorLogick("popup", "widget", "Bg");
    this.generateColorLogick("singleGame", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_A", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_B", "widget");
    this.generateColorLogick("leftMenuLevel_C", "widget");
    this.generateBorderRadiusLogick("inputBorderRadius", "borderRadius");
    this.generateBorderRadiusLogick("buttonBorderRadius", "borderRadius");
  }

  modifyControls(name) {
    let _name = name;
    let _nameBg = name + "Bg";
    let _nameBg_g = _nameBg + "_g";
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName + "Bg";
    let _isGradient = "is" + _upperCaseName + "Gradient";
    let _isNameDark = "is" + _upperCaseName + "BgDark";
    let _isCustomTxt = "isCustom" + _upperCaseName + "Txt";

    if (this[_nameBg].checkBoxIsDark) {
      this[_nameBg].checkBoxIsDark.checked = this.skin[_isNameDark];
    }
    if (this[_nameBg].pickerTxtChb) {
      this[_nameBg].pickerTxtChb.checked = this.skin[_isCustomTxt];
    }

    this[_nameBg].checkBox.checked = this.skin[_isName];
    this[_nameBg].checkBox2.checked = this.skin[_isGradient];

    // this[_nameBg].picker.value = this.skin[_nameBg];
    // this[_nameBg].picker2.value = this.skin[_nameBg_g];

    this[_nameBg].picker.style.background = this.skin[_nameBg];
    this[_nameBg].picker2.style.background = this.skin[_nameBg_g];

    this.skin[_isName] ?
      (this[_nameBg].picker.disabled = false) :
      (this[_nameBg].picker.disabled = true);
    this.skin[_isName] && this.skin[_isGradient] ?
      (this[_nameBg].picker2.disabled = false) :
      (this[_nameBg].picker2.disabled = true);
    if (this[_nameBg].pickerTxtChb) {
      this.skin[_isName] && this.skin[_isCustomTxt] ?
        (this[_nameBg].pickerTxtColor.disabled = false) :
        (this[_nameBg].pickerTxtColor.disabled = true);
    }

  }

  modifyRange(name) {
    let _name = name;
    let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
    let _isName = "is" + _upperCaseName;
    let _nameVal = name + "Val";

    this[_name].checkBox.checked = this.skin[_isName];
    this[_name].range.value = this.skin[_nameVal];

    this.skin[_isName] ?
      (this[_name].range.disabled = false) :
      (this[_name].range.disabled = true);

  }

  applyInitialValues() {

    this.modifyControls("widget");
    this.modifyControls("brand");
    this.modifyControls("accent");
    this.modifyControls("odd");
    this.modifyControls("header");
    this.modifyControls("showMore");
    this.modifyControls("input");
    this.modifyControls("widgetInput");
    this.modifyControls("activeTab");
    this.modifyControls("tab");
    this.modifyControls("sideBarActiveTab");
    this.modifyControls("sideBarTab");
    this.modifyControls("subHeader");
    this.modifyControls("popupHeader");
    this.modifyControls("popup");
    this.modifyControls("betSlip");
    this.modifyControls("betSlipStake");
    this.modifyControls("betSlipInput");
    this.modifyControls("betSlipButton");
    this.modifyControls("singleGame");
    this.modifyControls("leftMenuLevel_A");
    this.modifyControls("leftMenuLevel_B");
    this.modifyControls("leftMenuLevel_C");
    this.modifyRange("borderRadius");
    this.modifyRange("inputBorderRadius");
    this.modifyRange("buttonBorderRadius");

  }

  createHTML() {

    this.primaryBg = this.createControl(
      "primary",
      this.skinnerContainer,
      null,
      null,
      (e) => {
        this.modifyKey("primaryBg", e.detail.color.hex);
      },
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
        this.modifyKey("widgetBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("widgetBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isWidgetBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomWidgetTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customWidgetTxt", e.detail.color.hex);
      }
    );

    this.accentBg = this.createControl(
      "accent",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isAccentBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isAccentGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("accentBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("accentBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isAccentBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomAccentTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customAccentTxt", e.detail.color.hex);
      }
    );

    this.brandBg = this.createControl(
      "brand",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isBrandBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isBrandGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("brandBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("brandBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isBrandBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomBrandTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customBrandTxt", e.detail.color.hex);
      }
    );

    this.inputBg = this.createControl(
      "input",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isInputBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isInputGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("inputBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("inputBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomInputTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customInputTxt", e.detail.color.hex);
      }
    );

    this.widgetInputBg = this.createControl(
      "widgetInput",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isWidgetInputBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isWidgetInputGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("widgetInputBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("widgetInputBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomWidgetInputTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customWidgetInputTxt", e.detail.color.hex);
      }
    );

    this.oddBg = this.createControl(
      "odd",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isOddBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isOddGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("oddBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("oddBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomOddTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customOddTxt", e.detail.color.hex);
      }
    );

    this.showMoreBg = this.createControl(
      "showMore",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isShowMoreBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isShowMoreGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("showMoreBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("showMoreBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomShowMoreTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customShowMoreTxt", e.detail.color.hex);
      }
    );

    this.headerBg = this.createControl(
      "header",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isHeaderBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isHeaderGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("headerBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("headerBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomHeaderTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customHeaderTxt", e.detail.color.hex);
      }
    );

    this.betSlipBg = this.createControl(
      "betSlip",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isBetSlipBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isBetSlipGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("betSlipBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("betSlipBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isBetSlipBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomBetSlipTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customBetSlipTxt", e.detail.color.hex);
      }
    );

    this.betSlipStakeBg = this.createControl(
      "betSlipStake",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isBetSlipStakeBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isBetSlipStakeGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("betSlipStakeBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("betSlipStakeBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isBetSlipStakeBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomBetSlipStakeTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customBetSlipStakeTxt", e.detail.color.hex);
      }
    );

    this.betSlipInputBg = this.createControl(
      "betSlipInput",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isBetSlipInputBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isBetSlipInputGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("betSlipInputBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("betSlipInputBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isBetSlipInputBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomBetSlipInputTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customBetSlipInputTxt", e.detail.color.hex);
      }
    );

    this.betSlipButtonBg = this.createControl(
      "betSlipButton",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isBetSlipButtonBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isBetSlipButtonGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("betSlipButtonBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("betSlipButtonBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isBetSlipButtonBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomBetSlipButtonTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customBetSlipButtonTxt", e.detail.color.hex);
      }
    );

    this.activeTabBg = this.createControl(
      "activeTab",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isActiveTabBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isActiveTabGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("activeTabBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("activeTabBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomActiveTabTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customActiveTabTxt", e.detail.color.hex);
      }
    );

    this.tabBg = this.createControl(
      "tab",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isTabBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isTabGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("tabBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("tabBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomTabTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customTabTxt", e.detail.color.hex);
      }

    );

    this.sideBarActiveTabBg = this.createControl(
        "sideBarActiveTab",
        this.skinnerContainer,
        (e) => {
          this.modifyKey("isSideBarActiveTabBg", e.target.checked);
        },
        (e) => {
          this.modifyKey("isSideBarActiveTabGradient", e.target.checked);
        },
        (e) => {
          this.modifyKey("sideBarActiveTabBg", e.detail.color.hex);
        },
        (e) => {
          this.modifyKey("sideBarActiveTabBg_g", e.detail.color.hex);
        },
        null,
        (e) => {
          this.modifyKey("isCustomSideBarActiveTabTxt", e.target.checked);
        },
        (e) => {
          this.modifyKey("customSideBarActiveTabTxt", e.detail.color.hex);
        }
    );

    this.sideBarTabBg = this.createControl(
        "sideBarTab",
        this.skinnerContainer,
        (e) => {
          this.modifyKey("isSideBarTabBg", e.target.checked);
        },
        (e) => {
          this.modifyKey("isSideBarTabGradient", e.target.checked);
        },
        (e) => {
          this.modifyKey("sideBarTabBg", e.detail.color.hex);
        },
        (e) => {
          this.modifyKey("sideBarTabBg_g", e.detail.color.hex);
        },
        null,
        (e) => {
          this.modifyKey("isCustomSideBarTabTxt", e.target.checked);
        },
        (e) => {
          this.modifyKey("customSideBarTabTxt", e.detail.color.hex);
        }

    );

    this.subHeaderBg = this.createControl(
      "subHeader",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isSubHeaderBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isSubHeaderGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("subHeaderBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("subHeaderBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomSubHeaderTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customSubHeaderTxt", e.detail.color.hex);
      }
    );

    this.popupHeaderBg = this.createControl(
      "popupHeader",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isPopupHeaderBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isPopupHeaderGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("popupHeaderBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("popupHeaderBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomPopupHeaderTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customPopupHeaderTxt", e.detail.color.hex);
      }
    );

    this.popupBg = this.createControl(
      "popup",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isPopupBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isPopupGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("popupBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("popupBg_g", e.detail.color.hex);
      },
      null,
      (e) => {
        this.modifyKey("isCustomPopupTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customPopupTxt", e.detail.color.hex);
      }
    );

    this.singleGameBg = this.createControl(
      "singleGame",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isSingleGameBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isSingleGameGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("singleGameBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("singleGameBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isSingleGameBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomSingleGameTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customSingleGameTxt", e.detail.color.hex);
      }
    );

    this.leftMenuLevel_ABg = this.createControl(
      "leftMenuLevel_A",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isLeftMenuLevel_ABg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isLeftMenuLevel_AGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("leftMenuLevel_ABg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("leftMenuLevel_ABg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isLeftMenuLevel_ABgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomLeftMenuLevel_ATxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customLeftMenuLevel_ATxt", e.detail.color.hex);
      }
    );

    this.leftMenuLevel_BBg = this.createControl(
      "leftMenuLevel_B",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isLeftMenuLevel_BBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isLeftMenuLevel_BGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("leftMenuLevel_BBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("leftMenuLevel_BBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isLeftMenuLevel_BBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomLeftMenuLevel_BTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customLeftMenuLevel_BTxt", e.detail.color.hex);
      }
    );

    this.leftMenuLevel_CBg = this.createControl(
      "leftMenuLevel_C",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isLeftMenuLevel_CBg", e.target.checked);
      },
      (e) => {
        this.modifyKey("isLeftMenuLevel_CGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("leftMenuLevel_CBg", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("leftMenuLevel_CBg_g", e.detail.color.hex);
      },
      (e) => {
        this.modifyKey("isLeftMenuLevel_CBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomLeftMenuLevel_CTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customLeftMenuLevel_CTxt", e.detail.color.hex);
      }
    );

    this.borderRadius = this.createRangeControl(
      "borderRadius",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isBorderRadius", e.target.checked);
      },
      (e) => {
        this.modifyKey("borderRadiusVal", e.target.value);
      }
    );

    this.inputBorderRadius = this.createRangeControl(
      "inputBorderRadius",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isInputBorderRadius", e.target.checked);
      },
      (e) => {
        this.modifyKey("inputBorderRadiusVal", e.target.value);
      }
    );

    this.buttonBorderRadius = this.createRangeControl(
      "buttonBorderRadius",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isButtonBorderRadius", e.target.checked);
      },
      (e) => {
        this.modifyKey("buttonBorderRadiusVal", e.target.value);
      }
    );

    this.retroView = this.createCheckboxControl(
      "retro view",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isRetroView", e.target.checked);
      }
    );

    this.retroView = this.createCheckboxControl(
      "future view",
      this.skinnerContainer,
      (e) => {
        this.modifyKey("isFutureView", e.target.checked);
      }
    );

  }

  createControlsWrapper() {
    let toolbox = document.createElement("div");
    toolbox.className = "skinner_toolbox";
    let toolboxWrapper = document.createElement("div");
    toolboxWrapper.className = "skinner_toolbox_wrapper";
    let main = document.createElement("div");
    main.className = "nik_skinner_control_wrapper";
    let header = document.createElement("div");
    header.className = "nik_skinner_header";
    toolbox.appendChild(toolboxWrapper);
    toolboxWrapper.appendChild(header);

    let headerControl1 = document.createElement("div");
    headerControl1.className = "nik_skinner_header_control nik_skinner_header_control_name";
    headerControl1.innerText = "name";

    let headerControl2 = document.createElement("div");
    headerControl2.className = "nik_skinner_header_control";
    headerControl2.innerText = "enabled";

    let headerControl3 = document.createElement("div");
    headerControl3.className = "nik_skinner_header_control";
    headerControl3.innerText = "gradient";

    let headerControl4 = document.createElement("div");
    headerControl4.className = "nik_skinner_header_control";
    headerControl4.innerText = "background";

    let headerControl5 = document.createElement("div");
    headerControl5.className = "nik_skinner_header_control";
    headerControl5.innerText = "background second";

    let headerControl6 = document.createElement("div");
    headerControl6.className = "nik_skinner_header_control";
    headerControl6.innerText = "invert";

    let headerControl7 = document.createElement("div");
    headerControl7.className = "nik_skinner_header_control";
    headerControl7.innerText = "is custom text";

    let headerControl8 = document.createElement("div");
    headerControl8.className = "nik_skinner_header_control";
    headerControl8.innerText = "custom text color";

    header.appendChild(headerControl1);
    header.appendChild(headerControl2);
    header.appendChild(headerControl3);
    header.appendChild(headerControl4);
    header.appendChild(headerControl5);
    header.appendChild(headerControl6);
    header.appendChild(headerControl7);
    header.appendChild(headerControl8);

    toolboxWrapper.appendChild(main);

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

  createCheckboxControl(label, parent, checkboxCallback) {
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

    let isEnabledWrapper = document.createElement("div");
    isEnabledWrapper.className = "nik_skinner_checkbox_wrapper";

    wrapper.appendChild(_label);
    wrapper.appendChild(isEnabledWrapper);

    if (checkboxCallback) {
      isEnabledWrapper.appendChild(checkBox);
    }
    parent.appendChild(wrapper);

    return {
      checkBox
    };
  }

  createRangeControl(label, parent, checkboxCallback, rangeCallback) {
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

    let range = document.createElement("input");
    let rangeWrapper = document.createElement("div");
    rangeWrapper.className = "nik_skinner_checkbox_wrapper";

    range.type = "range";
    range.min = 0;
    range.max = 40;

    range.className = "nik_skinner_control_group_range";

    range.id = label;
    range.addEventListener("change", rangeCallback);

    let isEnabledWrapper = document.createElement("div");
    isEnabledWrapper.className = "nik_skinner_checkbox_wrapper";

    wrapper.appendChild(_label);
    wrapper.appendChild(isEnabledWrapper);

    if (checkboxCallback) {
      isEnabledWrapper.appendChild(checkBox);
    }
    wrapper.appendChild(range);
    parent.appendChild(wrapper);

    return {
      checkBox,
      range,
    };
  }

  createControl(
    label,
    parent,
    checkboxCallback,
    gradientCallback,
    pickerCallback,
    picker2Callback,
    isDarkCallback,
    isCustomTextCallback,
    picker3Callback
  ) {

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

    let pickerEl = document.createElement("input");
    let p = new ColorPicker(pickerEl);
    pickerEl.className = "nik_skinner_control_group_picker";
    pickerEl.addEventListener("colorChange", pickerCallback);

    let picker2El, checkBox2, p2;
    if (gradientCallback) {
      checkBox2 = document.createElement("input");
      checkBox2.type = "checkbox";
      checkBox2.className = "nik_skinner_control_group_checkbox";
      checkBox2.id = label + "_g";
      checkBox2.addEventListener("change", gradientCallback);

      picker2El = document.createElement("input");
      p2 = new ColorPicker(picker2El);
      picker2El.className = "nik_skinner_control_group_picker";
      wrapper.appendChild(picker2El);
      picker2El.addEventListener("colorChange", picker2Callback);
    }

    let checkBoxInvertGradient = document.createElement("input");
    checkBoxInvertGradient.type = "checkbox";
    checkBoxInvertGradient.className = "nik_skinner_control_group_checkbox";
    checkBoxInvertGradient.id = label + "_g_i";
    checkBoxInvertGradient.addEventListener("change", gradientCallback);

    let pickerTxtChb, pickerTxtColorEl, p3;
    if (isCustomTextCallback && picker3Callback) {
      pickerTxtChb = document.createElement("input");
      pickerTxtChb.type = "checkbox";
      pickerTxtChb.className = "nik_skinner_control_group_checkbox";
      pickerTxtChb.id = label + "_gg";
      pickerTxtChb.addEventListener("change", isCustomTextCallback);


      pickerTxtColorEl = document.createElement("input");
      p3 = new ColorPicker(pickerTxtColorEl);
      pickerTxtColorEl.className = "nik_skinner_control_group_picker";
      pickerTxtColorEl.addEventListener("colorChange", picker3Callback);
    }

    let isEnabledWrapper = document.createElement("div");
    isEnabledWrapper.className = "nik_skinner_checkbox_wrapper";
    let isGradientEnabledWrapper = document.createElement("div");
    isGradientEnabledWrapper.className = "nik_skinner_checkbox_wrapper";
    let mainColorWrapper = document.createElement("div");
    mainColorWrapper.className = "nik_skinner_checkbox_wrapper";
    let secondaryColorWrapper = document.createElement("div");
    secondaryColorWrapper.className = "nik_skinner_checkbox_wrapper";
    let invertWrapper = document.createElement("div");
    invertWrapper.className = "nik_skinner_checkbox_wrapper";
    let isCustomTextWrapper = document.createElement("div");
    isCustomTextWrapper.className = "nik_skinner_checkbox_wrapper";
    let customTextWrapper = document.createElement("div");
    customTextWrapper.className = "nik_skinner_checkbox_wrapper";

    wrapper.appendChild(_label);
    wrapper.appendChild(isEnabledWrapper);
    wrapper.appendChild(isGradientEnabledWrapper);
    wrapper.appendChild(mainColorWrapper);
    wrapper.appendChild(secondaryColorWrapper);
    wrapper.appendChild(invertWrapper);
    wrapper.appendChild(isCustomTextWrapper);
    wrapper.appendChild(customTextWrapper);

    if (checkboxCallback) {
      isEnabledWrapper.appendChild(checkBox);
    }
    if (gradientCallback) {
      isGradientEnabledWrapper.appendChild(checkBox2);
    }
    mainColorWrapper.appendChild(pickerEl);
    if (gradientCallback) {
      secondaryColorWrapper.appendChild(picker2El);
    }
    if (isDarkCallback) {
      invertWrapper.appendChild(checkBoxIsDark);
    }
    if (isCustomTextCallback && picker3Callback) {
      isCustomTextWrapper.appendChild(pickerTxtChb);
      customTextWrapper.appendChild(pickerTxtColorEl);
    }

    parent.appendChild(wrapper);

    return {
      picker: pickerEl,
      picker2: picker2El,
      checkBox,
      checkBox2,
      checkBoxIsDark,
      pickerTxtChb,
      pickerTxtColor: pickerTxtColorEl,
    };
  }
}

var head = document.getElementsByTagName("head")[0];
var style = document.createElement("style");
style.setAttribute("type", "text/css");
head.appendChild(style);

let _createJs = window.createJs ? window.createJs : null;

var SkinnerInstance = new Skinner(createCss, _createJs);

SkinnerInstance.init();

function addActiveClassToNavigation() {
  let nav = document.querySelectorAll(".nik_skinner_link");

  for (let i = 0; i < nav.length; i++) {
    if (`/${nav[i].href.split("/")[3]}` === window.location.pathname) {
      nav[i].classList.add("nik_skinner_link-active");
    }
  }
}

addActiveClassToNavigation();