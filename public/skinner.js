class Skinner {
  constructor(cssCb, jsCb) {
    this.skinnerContainer = this.createControlsWrapper();

    this.cssCb = cssCb;
    this.jsCb = jsCb;
    this.skin = {};

    this.variables = [];

    this.generateConfigColor("primary", "#161616");
    this.generateConfigColor("accent", "#ffb700");

    this.skin.isPrimaryBg = true;
    this.skin.isAccentBg = true;

    this.generateConfigColor("widget", "#333333");
    this.generateConfigColor("brand", "#f14100");
    this.generateConfigColor("odd", "#161616");
    this.generateConfigColor("showMore", "#242424");
    this.generateConfigColor("header", "#333333");
    this.generateConfigColor("subHeader", "#161616");

    this.generateConfigColor("singleGame", "#333333");
    this.generateConfigColor("leftMenuLevel_A", "#333333");
    this.generateConfigColor("leftMenuLevel_B", "#424242");
    this.generateConfigColor("leftMenuLevel_C", "#424242");
    this.generateConfigColor("betSlip", "#333333");
    this.generateConfigColor("betSlipStake", "#444444");
    this.generateConfigColor("betSlipInput", "#262626");
    this.generateConfigColor("betSlipButton", "#1A1A1A");
    this.generateConfigColor("popupHeader", "#262626");
    this.generateConfigColor("popup", "#333333");
    this.generateConfigColor("activeTab", "#333333");
    this.generateConfigColor("tab", "#2b2b2b");
    this.generateConfigColor("sideBarActiveTab", "#333333");
    this.generateConfigColor("sideBarTab", "#2b2b2b");
    this.generateConfigColor("input", "#333333");
    this.generateConfigColor("widgetInput", "#2b2b2b");

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

  generateConfigColor(name, color) {
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
    let _isGradientReversed = _isGradient + "Reversed";

    let _isCustomTxt = "isCustom" + _upperCaseName + "Txt";
    let _customTxt = "custom" + _upperCaseName + "Txt";
    let _isNameDark = "is" + _upperCaseName + "BgDark";

    this.variables.push(_name);

    this.skin[_isNameDark] = false;
    this.skin[_isName] = false;
    this.skin[_isCustomTxt] = false;
    this.skin[_isGradientReversed] = false;
    this.skin[_nameBg] = _color;
    this.skin[_nameBg_g] = this.skin[_isNameDark] ?
      tinycolor(this.skin[_nameBg]).darken(10).toString() :
      tinycolor(this.skin[_nameBg]).lighten(10).toString();
    this.skin[_nameG] = _color;
    this.skin[_nameBg2] = this.skin[_isNameDark] ?
      tinycolor(this.skin[_nameBg]).darken(10).toString() :
      tinycolor(this.skin[_nameBg]).lighten(10).toString();
    this.skin[_nameG2] = this.skin[_nameBg2];
    this.skin[_nameBg3] = this.skin[_isNameDark] ?
      tinycolor(this.skin[_nameBg]).darken(12).toString() :
      tinycolor(this.skin[_nameBg]).lighten(15).toString();

    this.skin[_nameTxt] = guessVisibleColor(this.skin[_nameBg]) === "#000" ?
      tinycolor(guessVisibleColor(this.skin[_nameBg])).lighten(0).toString() :
      tinycolor(guessVisibleColor(this.skin[_nameBg])).darken(0).toString();
    this.skin[_nameTxt2] =
      this.skin[_nameTxt] === "#000" ?
      tinycolor(this.skin[_nameTxt]).lighten(20).toString() :
      tinycolor(this.skin[_nameTxt]).darken(20).toString();

    this.skin[_customTxt] = this.skin[_nameTxt];
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
    let _isGradientReversed = _isGradient + "Reversed";
    let _isNameDark = "is" + _upperCaseName + "BgDark";
    let _isCustomNameTxt = "isCustom" + _upperCaseName + "Txt";
    let _customNameTxt = "custom" + _upperCaseName + "Txt";

    let _fallback = fallBack;
    let _upperCaseFallBack = _fallback[0].toUpperCase() + _fallback.substring(1);
    let _isFallBackGradient = "is" + _upperCaseFallBack + "Gradient";
    let _isFallBackGradientReversed = _isFallBackGradient + "Reversed";
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
        tinycolor(this.skin[_nameBg]).darken(10).toString() :
        tinycolor(this.skin[_nameBg]).lighten(10).toString();
      this.skin[_nameBg3] = this.skin.isWidgetBgDark ?
        tinycolor(this.skin[_nameBg]).darken(12).toString() :
        tinycolor(this.skin[_nameBg]).lighten(15).toString();
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
        if (this.skin[_isGradientReversed]) {
          this.skin[_nameG] = `linear-gradient(0deg, ${this.skin[_nameBg_g]} 0%, ${this.skin[_nameBg]} 100%)`;
        } else {
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
        tinycolor(this.skin[_nameBg]).darken(10).toString() :
        tinycolor(this.skin[_nameBg]).lighten(10).toString();
      this.skin[_nameBg3] = this.skin[_isFallbackDark] ?
        tinycolor(this.skin[_nameBg]).darken(12).toString() :
        tinycolor(this.skin[_nameBg]).lighten(15).toString();
      this.skin[_nameBgL] = tinycolor(this.skin[_nameBg]).lighten(8).toString();
      this.skin[_nameBgD] = tinycolor(this.skin[_nameBg]).darken(8).toString();


      if (this.skin[_isFallBackGradient]) {

        if (this.skin[_isFallBackGradientReversed]) {
          this.skin[_nameG] = _color ?
            `linear-gradient(0deg, ${this.skin[_fallbackBg_g]} 0%, ${this.skin[_fallback + _color]} 100%)` :
            `linear-gradient(0deg, ${this.skin[_fallbackBg_g]} 0%, ${this.skin[_fallbackBg2]} 100%)`;
        } else {
          this.skin[_nameG] = _color ?
            `linear-gradient(0deg, ${this.skin[_fallback + _color]} 0%, ${this.skin[_fallbackBg_g]} 100%)` :
            `linear-gradient(0deg, ${this.skin[_fallbackBg2]} 0%, ${this.skin[_fallbackBg_g]} 100%)`;
        }

      }

    }
  }

  generateTheme() {
    this.skin.primaryBg2 = this.skin.isPrimaryBgDark ?
      tinycolor(this.skin.primaryBg).darken(10).toString() :
      tinycolor(this.skin.primaryBg).lighten(10).toString();

    this.skin.primaryBg3 = this.skin.isPrimaryBgDark ?
      tinycolor(this.skin.primaryBg).darken(12).toString() :
      tinycolor(this.skin.primaryBg).lighten(15).toString();

    if (this.skin.isCustomPrimaryTxt) {
      this.skin.primaryTxt = this.skin.customPrimaryTxt;
      this.skin.primaryTxt2 = this.skin.primaryTxt;
    } else {
      this.skin.primaryTxt = guessVisibleColor(this.skin.primaryBg);
      this.skin.primaryTxt2 =
        this.skin.primaryTxt === "#000" ?
        tinycolor(this.skin.primaryTxt).lighten(20).toString() :
        tinycolor(this.skin.primaryTxt).darken(20).toString();
    }

    this.skin.accentBg2 = this.skin.isAccentDark ?
      tinycolor(this.skin.accentBg).darken(10).toString() :
      tinycolor(this.skin.accentBg).lighten(10).toString();
    this.skin.accentTxt = guessVisibleColor(this.skin.accentBg);


    this.generateColorLogick("widget", "primary");
    this.generateColorLogick("brand", "accent");
    this.generateColorLogick("odd", "primary", "Bg");
    this.generateColorLogick("showMore", "primary", "Bg");
    this.generateColorLogick("header", "widget", "Bg");
    this.generateColorLogick("subHeader", "widget");
    this.generateColorLogick("singleGame", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_A", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_B", "widget");
    this.generateColorLogick("leftMenuLevel_C", "widget");
    this.generateColorLogick("betSlip", "widget", "Bg");
    this.generateColorLogick("betSlipStake", "widget");
    this.generateColorLogick("betSlipInput", "betSlip");
    this.generateColorLogick("betSlipButton", "betSlip");
    this.generateColorLogick("popupHeader", "widget");
    this.generateColorLogick("popup", "widget", "Bg");
    this.generateColorLogick("activeTab", "widget", "Bg");
    this.generateColorLogick("tab", "widget");
    this.generateColorLogick("sideBarActiveTab", "activeTab", "Bg");
    this.generateColorLogick("sideBarTab", "tab");
    this.generateColorLogick("input", "widget", "Bg");
    this.generateColorLogick("widgetInput", "primary", "Bg3");

    this.generateBorderRadiusLogick("inputBorderRadius", "borderRadius");
    this.generateBorderRadiusLogick("buttonBorderRadius", "borderRadius");
  }

  modifyControls(name, alwaysOn, noGradient) {
    let _alwaysOn = alwaysOn;
    let _noGradient = noGradient;

    let _name = name;
    let _nameBg = name + "Bg";
    let _nameTxt = name + "Txt";
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

    this[_nameBg].picker.applyColor(this.skin[_nameBg]);

    if (!_alwaysOn) {
      this[_nameBg].checkBox.checked = this.skin[_isName];
    }
    if (!noGradient) {
      this[_nameBg].checkBox2.checked = this.skin[_isGradient];
      // this[_nameBg].picker2.setColor(this.skin[_nameBg_g]);
      this[_nameBg].picker2.applyColor(this.skin[_nameBg_g]);

      this.skin[_isName] && this.skin[_isGradient] ?
        (this[_nameBg].picker2.enable()) :
        (this[_nameBg].picker2.disable());
    }


    this.skin[_isName] ?
      (this[_nameBg].picker.enable()) :
      (this[_nameBg].picker.disable());

    if (this[_nameBg].pickerTxtChb) {
      this[_nameBg].pickerTxtColor.applyColor(this.skin[_nameTxt]);
      this.skin[_isName] && this.skin[_isCustomTxt] ?
        (this[_nameBg].pickerTxtColor.enable()) :
        (this[_nameBg].pickerTxtColor.disable());
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
    this.modifyControls("primary", true, true);
    this.modifyControls("accent", true);
    this.modifyControls("widget");
    this.modifyControls("brand");
    this.modifyControls("odd");
    this.modifyControls("showMore");
    this.modifyControls("header");
    this.modifyControls("subHeader");
    this.modifyControls("singleGame");
    this.modifyControls("leftMenuLevel_A");
    this.modifyControls("leftMenuLevel_B");
    this.modifyControls("leftMenuLevel_C");
    this.modifyControls("betSlip");
    this.modifyControls("betSlipStake");
    this.modifyControls("betSlipInput");
    this.modifyControls("betSlipButton");
    this.modifyControls("popupHeader");
    this.modifyControls("popup");
    this.modifyControls("activeTab");
    this.modifyControls("tab");
    this.modifyControls("sideBarActiveTab");
    this.modifyControls("sideBarTab");
    this.modifyControls("input");
    this.modifyControls("widgetInput");

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
      null,
      (e) => {
        this.modifyKey("primaryBg", e.toHEXA().toString());
      },
      null,
      (e) => {
        this.modifyKey("isPrimaryBgDark", e.target.checked);
      },
      null,
      null,
    );

    this.accentBg = this.createControl(
      "accent",
      this.skinnerContainer,
      null,
      (e) => {
        this.modifyKey("isAccentGradient", e.target.checked);
      },
      (e) => {
        this.modifyKey("isAccentGradientReversed", e.target.checked);
      },
      (e) => {
        this.modifyKey("accentBg", e.toHEXA().toString());
      },
      (e) => {
        this.modifyKey("accentBg_g", e.toHEXA().toString());
      },
      (e) => {
        this.modifyKey("isAccentBgDark", e.target.checked);
      },
      (e) => {
        this.modifyKey("isCustomAccentTxt", e.target.checked);
      },
      (e) => {
        this.modifyKey("customAccentTxt", e.toHEXA().toString());
      }
    );

    for (let i = 2; i < this.variables.length; i++) {
      let _name = this.variables[i];
      let _nameBg = _name + "Bg";
      let _nameBg_g = _nameBg + "_g";
      let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
      let _isName = "is" + _upperCaseName + "Bg";
      let _isGradient = "is" + _upperCaseName + "Gradient";
      let _isGradientReversed = _isGradient + "Reversed";
      let _isCustomTxt = "isCustom" + _upperCaseName + "Txt";
      let _customTxt = "custom" + _upperCaseName + "Txt";
      let _isNameBgDark = "is" + _upperCaseName + "BgDark";

      this[_nameBg] = this.createControl(
        _name,
        this.skinnerContainer,
        (e) => {
          this.modifyKey(_isName, e.target.checked);
        },
        (e) => {
          this.modifyKey(_isGradient, e.target.checked);
        },
        (e) => {
          this.modifyKey(_isGradientReversed, e.target.checked);
        },
        (e) => {
          this.modifyKey(_nameBg, e.toHEXA().toString());
        },
        (e) => {
          this.modifyKey(_nameBg_g, e.toHEXA().toString());
        },
        (e) => {
          this.modifyKey(_isNameBgDark, e.target.checked);
        },
        (e) => {
          this.modifyKey(_isCustomTxt, e.target.checked);
        },
        (e) => {
          this.modifyKey(_customTxt, e.toHEXA().toString());
        }
      );

    }


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
    headerControl2.innerText = "background";

    let headerControl3 = document.createElement("div");
    headerControl3.className = "nik_skinner_header_control";
    headerControl3.innerText = "gradient";

    let headerControl5 = document.createElement("div");
    headerControl5.className = "nik_skinner_header_control";
    headerControl5.innerText = "text";


    header.appendChild(headerControl1);
    header.appendChild(headerControl2);
    header.appendChild(headerControl3);
    header.appendChild(headerControl5);

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
    this.closeBtn.innerHTML = '<i class="nik-ico-arrow">Ã</i>';
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
    reverseGradientCallback,
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

    let pickerMainColor = this.skin[label + "Bg"];
    let pickerGradientColor = this.skin[label + "Bg_g"];
    let pickerTextColor = this.skin[label + "Txt"];

    let wrapper = document.createElement("div");
    wrapper.className = "nik_skinner_control_group";

    let checkBoxWrapper, checkBoxImitator, checkBox;
    checkBoxWrapper = document.createElement("label");
    checkBoxWrapper.className = "nik_skinner_control_group_checkbox_wrapper";
    if (checkboxCallback) {
      checkBoxWrapper.htmlFor = label;
      checkBoxImitator = document.createElement("i");
      checkBoxImitator.className = "nik_skinner_control_group_checkbox_imitator";
      checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.className = "nik_skinner_control_group_checkbox";
      checkBox.id = label;
      checkBox.addEventListener("change", checkboxCallback);
      checkBoxWrapper.appendChild(checkBox);
      checkBoxWrapper.appendChild(checkBoxImitator);
    }


    let checkBoxIsDark, checkBoxIsDarkWrapper, checkBoxIsDarkImitator;
    if (isDarkCallback) {
      checkBoxIsDarkWrapper = document.createElement("label");
      checkBoxIsDarkWrapper.className = "nik_skinner_control_group_checkbox_wrapper nik_skinner_control_group_checkbox_wrapper-invert";
      checkBoxIsDarkWrapper.htmlFor = label + "dark";
      checkBoxIsDarkImitator = document.createElement("i");
      checkBoxIsDarkImitator.className = "nik_skinner_control_group_checkbox_imitator";
      checkBoxIsDark = document.createElement("input");
      checkBoxIsDark.type = "checkbox";
      checkBoxIsDark.className = "nik_skinner_control_group_checkbox";
      checkBoxIsDark.id = label + "dark";
      checkBoxIsDark.addEventListener("change", isDarkCallback);
      checkBoxIsDarkWrapper.appendChild(checkBoxIsDark);
      checkBoxIsDarkWrapper.appendChild(checkBoxIsDarkImitator);
    }

    let pickerEl = document.createElement("div");
    pickerEl.className = "nik_skinner_control_group_picker";



    let picker2El, checkBox2, checkBox2Wrapper, checkBox2Imitator;
    let checkBoxRevertGradient, checkBoxRevertGradientWrapper, checkBoxRevertGradientImitator;
    if (gradientCallback) {
      checkBox2Wrapper = document.createElement("label");
      checkBox2Wrapper.className = "nik_skinner_control_group_checkbox_wrapper";
      checkBox2Wrapper.htmlFor = label + "_g";
      checkBox2Imitator = document.createElement("i");
      checkBox2Imitator.className = "nik_skinner_control_group_checkbox_imitator";
      checkBox2 = document.createElement("input");
      checkBox2.type = "checkbox";
      checkBox2.className = "nik_skinner_control_group_checkbox";
      checkBox2.id = label + "_g";
      checkBox2.addEventListener("change", gradientCallback);
      checkBox2Wrapper.appendChild(checkBox2);
      checkBox2Wrapper.appendChild(checkBox2Imitator);

      picker2El = document.createElement("div");
      picker2El.className = "nik_skinner_control_group_picker";
      wrapper.appendChild(picker2El);

      checkBoxRevertGradientWrapper = document.createElement("label");
      checkBoxRevertGradientWrapper.className = "nik_skinner_control_group_checkbox_wrapper nik_skinner_control_group_checkbox_wrapper-invert";
      checkBoxRevertGradientWrapper.htmlFor = label + "_invert";
      checkBoxRevertGradientImitator = document.createElement("i");
      checkBoxRevertGradientImitator.className = "nik_skinner_control_group_checkbox_imitator";
      checkBoxRevertGradient = document.createElement("input");
      checkBoxRevertGradient.type = "checkbox";
      checkBoxRevertGradient.className = "nik_skinner_control_group_checkbox";
      checkBoxRevertGradient.id = label + "_invert";
      checkBoxRevertGradient.addEventListener("change", reverseGradientCallback);
      checkBoxRevertGradientWrapper.appendChild(checkBoxRevertGradient);
      checkBoxRevertGradientWrapper.appendChild(checkBoxRevertGradientImitator);
    }

    let pickerTxtChb, pickerTxtChbWrapper, pickerTxtChbImitator, pickerTxtColorEl;
    if (isCustomTextCallback && picker3Callback) {
      pickerTxtChbWrapper = document.createElement("label");
      pickerTxtChbWrapper.className = "nik_skinner_control_group_checkbox_wrapper";
      pickerTxtChbWrapper.htmlFor = label + "_gg";
      pickerTxtChbImitator = document.createElement("i");
      pickerTxtChbImitator.className = "nik_skinner_control_group_checkbox_imitator";
      pickerTxtChb = document.createElement("input");
      pickerTxtChb.type = "checkbox";
      pickerTxtChb.className = "nik_skinner_control_group_checkbox";
      pickerTxtChb.id = label + "_gg";
      pickerTxtChb.addEventListener("change", isCustomTextCallback);
      pickerTxtChbWrapper.appendChild(pickerTxtChb);
      pickerTxtChbWrapper.appendChild(pickerTxtChbImitator);


      pickerTxtColorEl = document.createElement("div");
      pickerTxtColorEl.className = "nik_skinner_control_group_picker";
    }

    let isEnabledWrapper = document.createElement("div");
    isEnabledWrapper.className = "nik_skinner_checkbox_wrapper nik_skinner_checkbox_wrapper-controls";
    let isGradientEnabledWrapper = document.createElement("div");
    isGradientEnabledWrapper.className = "nik_skinner_checkbox_wrapper nik_skinner_checkbox_wrapper-controls";
    let isCustomTextWrapper = document.createElement("div");
    isCustomTextWrapper.className = "nik_skinner_checkbox_wrapper nik_skinner_checkbox_wrapper-controls";

    wrapper.appendChild(_label);
    wrapper.appendChild(isEnabledWrapper);
    wrapper.appendChild(isGradientEnabledWrapper);
    wrapper.appendChild(isCustomTextWrapper);

    isEnabledWrapper.appendChild(checkBoxWrapper);
    isEnabledWrapper.appendChild(pickerEl);
    if (isDarkCallback) {
      isEnabledWrapper.appendChild(checkBoxIsDarkWrapper);
    }
    if (gradientCallback) {
      isGradientEnabledWrapper.appendChild(checkBox2Wrapper);
      isGradientEnabledWrapper.appendChild(picker2El);
      isGradientEnabledWrapper.appendChild(checkBoxRevertGradientWrapper);
    }

    if (isCustomTextCallback && picker3Callback) {
      isCustomTextWrapper.appendChild(pickerTxtChbWrapper);
      isCustomTextWrapper.appendChild(pickerTxtColorEl);
      let chbDummy = document.createElement("label");
      chbDummy.className = "nik_skinner_control_group_checkbox_wrapper";
      isCustomTextWrapper.appendChild(chbDummy);
    }

    parent.appendChild(wrapper);

    let p = Pickr.create({
      el: pickerEl,
      theme: "classic",
      comparison: false,
      default: pickerMainColor,
      components: {
        preview: true,
        hue: true,
        interaction: {
          input: true,
          save: true
        }
      }
    });

    p.on("change", pickerCallback);

    let p2;
    if (gradientCallback) {
      p2 = Pickr.create({
        el: picker2El,
        theme: "classic",
        comparison: false,
        default: pickerGradientColor,
        components: {
          preview: true,
          hue: true,
          interaction: {
            input: true,
            save: true
          }
        }
      });

      p2.on("change", picker2Callback);
    }

    let p3;
    if (isCustomTextCallback && picker3Callback) {
      p3 = Pickr.create({
        el: pickerTxtColorEl,
        theme: "classic",
        comparison: false,
        default: pickerTextColor,
        components: {
          preview: true,
          hue: true,
          interaction: {
            input: true,
            save: true
          }
        }
      });

      p3.on("change", picker3Callback);
    }

    return {
      picker: p,
      picker2: p2,
      checkBox,
      checkBox2,
      checkBoxRevertGradient,
      checkBoxIsDark,
      pickerTxtChb,
      pickerTxtColor: p3,
    };
  }
}





function addActiveClassToNavigation() {
  let nav = document.querySelectorAll(".nik_skinner_link");

  for (let i = 0; i < nav.length; i++) {
    if (`/${nav[i].href.split("/")[3]}` === window.location.pathname) {
      nav[i].classList.add("nik_skinner_link-active");
    }
  }
}

addActiveClassToNavigation();