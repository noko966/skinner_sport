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
    let _isCustomTxt = "isCustom" + _upperCaseName + "Txt";
    let _customTxt = "custom" + _upperCaseName + "Txt";
    let _isNameDark = "is" + _upperCaseName + "BgDark";

    this.variables.push(_name);

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
    let _isGradientInvert = "is" + _upperCaseName + "GradientInvert";
    let _isNameDark = "is" + _upperCaseName + "BgDark";
    let _isCustomNameTxt = "isCustom" + _upperCaseName + "Txt";
    let _customNameTxt = "custom" + _upperCaseName + "Txt";

    let _fallback = fallBack;
    // let _upperCaseFallBack, _isFallBackGradient, _fallbackBg, _fallbackBg2, _isCustomFallbackTxt, _customFallbackTxt
    // _fallbackBg_g, _fallbackG, _isFallbackDark;
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
        this.skin[_nameG] = `linear-gradient(0deg, ${this.skin[_nameBg]} 0%, ${this.skin[_nameBg_g]} 100%)`;
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
    this.skin.primaryBg2 = this.skin.isDark ?
      tinycolor(this.skin.primaryBg).darken(10).toString() :
      tinycolor(this.skin.primaryBg).lighten(10).toString();

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
    this.generateColorLogick("subHeader", "primary", "Bg");
    this.generateColorLogick("singleGame", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_A", "widget", "Bg");
    this.generateColorLogick("leftMenuLevel_B", "widget");
    this.generateColorLogick("leftMenuLevel_C", "widget");
    this.generateColorLogick("betSlip", "widget", "Bg");
    this.generateColorLogick("betSlipStake", "widget");
    this.generateColorLogick("betSlipInput", "betSlip");
    this.generateColorLogick("betSlipButton", "odd");
    this.generateColorLogick("popupHeader", "widget");
    this.generateColorLogick("popup", "widget", "Bg");
    this.generateColorLogick("activeTab", "widget", "Bg");
    this.generateColorLogick("tab", "widget");
    this.generateColorLogick("sideBarActiveTab", "activeTab", "Bg");
    this.generateColorLogick("sideBarTab", "tab");
    this.generateColorLogick("input", "widget", "Bg");
    this.generateColorLogick("widgetInput", "primary", "Bg");

    this.generateBorderRadiusLogick("inputBorderRadius", "borderRadius");
    this.generateBorderRadiusLogick("buttonBorderRadius", "borderRadius");
  }

  modifyControls(name, alwaysOn, noGradient) {
    let _alwaysOn = alwaysOn;
    let _noGradient = noGradient;

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

    if(!_alwaysOn){
      this[_nameBg].checkBox.checked = this.skin[_isName];
    }
    if(!noGradient){
      this[_nameBg].checkBox2.checked = this.skin[_isGradient];
      this[_nameBg].picker2.style.background = this.skin[_nameBg_g];

      this.skin[_isName] && this.skin[_isGradient] ?
      (this[_nameBg].picker2.disabled = false) :
      (this[_nameBg].picker2.disabled = true);
    }

    this[_nameBg].picker.style.background = this.skin[_nameBg];

    this.skin[_isName] ?
      (this[_nameBg].picker.disabled = false) :
      (this[_nameBg].picker.disabled = true);

    

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
      (e) => {
        this.modifyKey("primaryBg", e.detail.color.hex);
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

    for (let i = 2; i < this.variables.length; i++) {
      let _name = this.variables[i];
      let _nameBg = _name + "Bg";
      let _nameBg_g = _nameBg + "_g";
      let _upperCaseName = _name[0].toUpperCase() + _name.substring(1);
      let _isName = "is" + _upperCaseName + "Bg";
      let _isGradient = "is" + _upperCaseName + "Gradient";
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
          this.modifyKey(_nameBg, e.detail.color.hex);
        },
        (e) => {
          this.modifyKey(_nameBg_g, e.detail.color.hex);
        },
        (e) => {
          this.modifyKey(_isNameBgDark, e.target.checked);
        },
        (e) => {
          this.modifyKey(_isCustomTxt, e.target.checked);
        },
        (e) => {
          this.modifyKey(_customTxt, e.detail.color.hex);
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

    let headerControl4 = document.createElement("div");
    headerControl4.className = "nik_skinner_header_control";
    headerControl4.innerText = "invert";

    let headerControl5 = document.createElement("div");
    headerControl5.className = "nik_skinner_header_control";
    headerControl5.innerText = "text";


    header.appendChild(headerControl1);
    header.appendChild(headerControl2);
    header.appendChild(headerControl3);
    header.appendChild(headerControl4);
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

    let checkBoxWrapper, checkBoxImitator, checkBox;
    if (checkboxCallback) {
      checkBoxWrapper =  document.createElement("label");
      checkBoxWrapper.className = "nik_skinner_control_group_checkbox_wrapper";
      checkBoxWrapper.htmlFor = label;
      checkBoxImitator =  document.createElement("i");
      checkBoxImitator.className = "nik_skinner_control_group_checkbox_imitator";
      checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.className = "nik_skinner_control_group_checkbox";
      checkBox.id = label;
      checkBox.addEventListener("change", checkboxCallback);
      checkBoxWrapper.appendChild(checkBox);
      checkBoxWrapper.appendChild(checkBoxImitator);
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

    let picker2El, checkBox2, checkBox2Wrapper, checkBox2Imitator, p2;
    if (gradientCallback) {
      checkBox2Wrapper =  document.createElement("label");
      checkBox2Wrapper.className = "nik_skinner_control_group_checkbox_wrapper";
      checkBox2Wrapper.htmlFor = label + "_g";
      checkBox2Imitator =  document.createElement("i");
      checkBox2Imitator.className = "nik_skinner_control_group_checkbox_imitator";
      checkBox2 = document.createElement("input");
      checkBox2.type = "checkbox";
      checkBox2.className = "nik_skinner_control_group_checkbox";
      checkBox2.id = label + "_g";
      checkBox2.addEventListener("change", gradientCallback);
      checkBox2Wrapper.appendChild(checkBox2);
      checkBox2Wrapper.appendChild(checkBox2Imitator);

      picker2El = document.createElement("input");
      p2 = new ColorPicker(picker2El);
      picker2El.className = "nik_skinner_control_group_picker";
      wrapper.appendChild(picker2El);
      picker2El.addEventListener("colorChange", picker2Callback);
    }

    let pickerTxtChb, pickerTxtChbWrapper, pickerTxtChbImitator, pickerTxtColorEl, p3;
    if (isCustomTextCallback && picker3Callback) {
      pickerTxtChbWrapper =  document.createElement("label");
      pickerTxtChbWrapper.className = "nik_skinner_control_group_checkbox_wrapper";
      pickerTxtChbWrapper.htmlFor = label + "_gg";
      pickerTxtChbImitator =  document.createElement("i");
      pickerTxtChbImitator.className = "nik_skinner_control_group_checkbox_imitator";
      pickerTxtChb = document.createElement("input");
      pickerTxtChb.type = "checkbox";
      pickerTxtChb.className = "nik_skinner_control_group_checkbox";
      pickerTxtChb.id = label + "_gg";
      pickerTxtChb.addEventListener("change", isCustomTextCallback);
      pickerTxtChbWrapper.appendChild(pickerTxtChb);
      pickerTxtChbWrapper.appendChild(pickerTxtChbImitator);


      pickerTxtColorEl = document.createElement("input");
      p3 = new ColorPicker(pickerTxtColorEl);
      pickerTxtColorEl.className = "nik_skinner_control_group_picker";
      pickerTxtColorEl.addEventListener("colorChange", picker3Callback);
    }

    let isEnabledWrapper = document.createElement("div");
    isEnabledWrapper.className = "nik_skinner_checkbox_wrapper nik_skinner_checkbox_wrapper-controls";
    let isGradientEnabledWrapper = document.createElement("div");
    isGradientEnabledWrapper.className = "nik_skinner_checkbox_wrapper nik_skinner_checkbox_wrapper-controls";
    let invertWrapper = document.createElement("div");
    invertWrapper.className = "nik_skinner_checkbox_wrapper";
    let isCustomTextWrapper = document.createElement("div");
    isCustomTextWrapper.className = "nik_skinner_checkbox_wrapper nik_skinner_checkbox_wrapper-controls";

    wrapper.appendChild(_label);
    wrapper.appendChild(isEnabledWrapper);
    wrapper.appendChild(isGradientEnabledWrapper);
    wrapper.appendChild(invertWrapper);
    wrapper.appendChild(isCustomTextWrapper);

    if (checkboxCallback) {
      isEnabledWrapper.appendChild(checkBoxWrapper);
    }
    isEnabledWrapper.appendChild(pickerEl);
    if (gradientCallback) {
      isGradientEnabledWrapper.appendChild(checkBox2Wrapper);
      isGradientEnabledWrapper.appendChild(picker2El);
    }
    if (isDarkCallback) {
      invertWrapper.appendChild(checkBoxIsDark);
    }
    if (isCustomTextCallback && picker3Callback) {
      isCustomTextWrapper.appendChild(pickerTxtChbWrapper);
      isCustomTextWrapper.appendChild(pickerTxtColorEl);
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