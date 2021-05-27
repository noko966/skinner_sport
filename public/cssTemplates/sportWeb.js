function createCss(c) {
  let css = `
    .tg_widget_heading_1{
        margin-top: 0;
    }
    .tg__multi_game {
        padding: 0 !important;
    }
    .tg_input::placeholder{
        color: ${c.inputTxt2};
    }
    /* - - - - Primary - - - - */

    body,
    .tg_bg,
    .tg__result_item,
    .tg__live_filter_item {
        background-color: ${c.primaryBg};
        color: ${c.primaryTxt}
    }
    .tg__left_menu_item,
    .live_menu_item_left,
    .live_menu_item_left .tg--left_live_odds,
    .tg__one_game,
    .paperView .champ_list:last-child,
    .tg__match_item_stake,
    .tg--pos_comb_row,
    .tg--border-bot-1 {
        border-color:${c.primaryBg};
    }

    .tg__submenu__item {
        color: ${c.primaryTxt2};
    }
    .tg__submenu__item.active,
    .tg__submenu__item:hover {
        color: ${c.primaryTxt};
    }

    #line_tabs .selectorWrapper, 
    #live_tabs_header .selectorWrapper, 
    #line_tabs .tabsWithMarketFilter, 
    #live_tabs_header .tabsWithMarketFilter{
        background-color: ${c.primaryBg};
    }
    
    /* - - - - Widget - - - - - */
    .tg__live_list_header,
    .tg__multiview_content {
        background-color: ${c.widgetBg};
        color: ${c.widgetTxt};
    }

    .tg-hero{
        background-color: ${c.widgetBg};
        color: ${c.widgetTxt};
    }

    /* - - - - Left Menu Level 1 - - - - */
    .tg__left_menu_item--lvl1 {
        background: ${c.leftMenuLevel_AG};
        color: ${c.leftMenuLevel_ATxt};
    }
    .tg__left_menu_item--lvl1 .tg__left_menu_item_text,
    .tg__left_menu_item--lvl1  .tg-ico-arrow {
        color: ${c.leftMenuLevel_ATxt2};
    }
    
    .ss__step_slider .ss__slider,
    .ss__step_slider .ss__ruller > div {
        background: ${c.widgetTxt2};
    }
    
    .ss__step_slider .ss__slider:hover {
        background: ${c.accentBg};
    }
    
    .ss__step_slider .ss__ruller > .off {
        background: ${c.widgetBg};
    }
    
    /* - - - - Left Menu Level 2 - - - - */
    .tg__left_menu_item--lvl2{
        background: ${c.leftMenuLevel_BG};
        color: ${c.leftMenuLevel_BTxt};
    }
    .tg__left_menu_item--lvl2 .tg__left_menu_item_text,
    .tg__left_menu_item--lvl2  .tg-ico-arrow {
        color: ${c.leftMenuLevel_BTxt2};
    }
    
    /* africanView */
    .africanView .SBhead {
        background: ${c.headerG};
        color: ${c.headerTxt};
    }

    .africanView .gameContentTitle {
        background: ${c.primaryBg};
        color: ${c.primaryTxt};
    }

    .africanView .champCont{
        background: ${c.singleGameG};
        color: ${c.singleGameTxt};
    }
    
    .africanView .tg_left_tabs {
        background: ${c.subHeaderG};
        color: ${c.subHeaderTxt2};
        border-bottom-color: ${c.accentBg};
    }
    
    .africanView .tg_left_filter_tabs_active {
        color: ${c.accentBg};
    }

    /* - - - - Left Menu Level 3 - - - - */
    .tg__left_menu_item--lvl3,
    .tg__list_row_heading,
    .tg_bet_history_order_row_sub:nth-child(even) {
        background: ${c.leftMenuLevel_CG};
        color: ${c.leftMenuLevel_CTxt};
    }
    .tg__left_menu_item--lvl3 .tg__left_menu_item_text,
    .tg__left_menu_item--lvl3  .tg-ico-arrow {
        color: ${c.leftMenuLevel_CTxt2};
    }
    
    /* - - - - Passive Tab - - - - */
    .tab_selector {
        background: ${c.tabG};
        color: ${c.tabTxt2};
        border-top-left-radius: ${c.borderRadiusVal}px;
        border-top-right-radius: ${c.borderRadiusVal}px;
    }
    
     .sportLeftPane .tab_selector  {
        background: ${c.sideBarTabG};
        color: ${c.sideBarTabTxt};
    } 

    .tab_cupon {
        background: ${c.tabG};
        color: ${c.tabTxt2};
        border-top-left-radius: ${c.borderRadiusVal}px;
        border-top-right-radius: ${c.borderRadiusVal}px;
    }

    .tab_cupon.tab_selected,
    .tab_cupon:hover {
        background: ${c.activeTabG};
        color: ${c.activeTabTxt};
    }

    /* - - - - Active Tab - - - - */
    .tab_selector.tab_selector_active,
    .tab_selector:hover,
    .tg_input,
    .tg_subheader_btn,
    .tg_live_center-wrapper .selectorWrapper,
    .tg__live_filter_item.checked{
      background: ${c.activeTabG};
      color: ${c.activeTabTxt};
    }

    .tg__dropdown_control{
        background: ${c.inputG};
        color: ${c.inputTxt};
    }
    
     .sportLeftPane .tab_selector.tab_selector_active  {
        background: ${c.sideBarActiveTabG};
        color: ${c.sideBarActiveTabTxt};
    } 

    /* - - - - Header - - - - */
    .gameContentTitle,
    .tg__result_group_heading {
        background: ${c.headerG};
        color: ${c.headerTxt};
    }
    
    /* africanView */
    .africanView .tg--home2__stakeItem {
        background: ${c.tabG};
        color: ${c.tabTxt};    
    }
    .africanView .champCont {
        margin: 0px;
    }

    .tg--selected_prem_game{
        border-color: ${c.accentBg}; 
    }

    .tg__list_row{
        margin: 0;
        border-top:1px solid ${c.primaryBg};
    }
    .ds--myacc-history_list .tg_bet_history_order_row{
        background: ${c.widgetBg2};
        color: ${c.widgetTxt};
        border:0 !important;
    }
    .ds--myacc-history_list .tg_bet_history_order_row:nth-child(Odd){
        background: ${c.widgetBg};
        color: ${c.widgetTxt};
    }
    .tg_bet_history_order_row .tg-clr-akcent{
        color: ${c.accentBg};
    }
    .tg_bet_history_order_row_sub {
        background: ${c.widgetBg2};
        color: ${c.widgetTxt};
    }
    .tg__list_row_sub{
        background: ${c.widgetBg3};
        color: ${c.widgetTxt};
        border-bottom: 1px solid ${c.primaryBg};
    }
    
    /* - - - - SubHeader - - - - */
    .tg__match_header,
    .tg__prematch_header,
    .live_sport_list .tg__left_menu_item--lvl3,
    .tg__calendar_header,
    .tg__calendar_cont,
    .tg__results_header,
    .tg__res_rus,
    .tg__multibet_heading,
    .tg__score_box,
    .overViewDataDanel .tg__btn_arrow,
    .tg__step_slider,
    .liveFilterContainer  {
        background: ${c.subHeaderG};
        color: ${c.subHeaderTxt};
    }
    .tg__home_game_heading {
        background: ${c.subHeaderG};
        color: ${c.subHeaderTxt2};
        border-top: 1px solid ${c.widgetBg};
    }

    /* - - - - Single Game - - - - */
    .tg__one_game,
    .tg__match_item_stake,
    .tg__banner,
    .prematch_event_odds_container,
    .tg__multi_game,
    .live_menu_item_left .tg--left_live_odds,
    .tg__calendar_item,
    .dg1,
    .overviewEventBody,
    .tg_onegame_chb {
        background: ${c.singleGameG};
        color: ${c.singleGameTxt2};
    }

    /*popups*/
    .tg_popup_body_static,
    .tg__modal,
    .tg__modal_big,
    .tg__cashout--wrapper{
        background: ${c.widgetBg};
        color: ${c.widgetTxt};
    }
    .tg__modal_header,
    .tg__modal_heading,
    .tg__cashout--header{
        background: ${c.subHeaderG};
        color: ${c.subHeaderTxt};
    }
    .tg__custom-range-slider{
        color: ${c.accentBg};
    }
    .tg--close{
        background: ${c.primaryBg};
        color: ${c.primaryTxt};
    }
    .tg__modal .tg__dropdown_control,
    .tg_popup_body_static .tg__dropdown_control,
    .tg__modal .tg_input,
    .tg_popup_body_static .tg_input,
    .tg__cashout--wrapper .tg_input{
        background: ${c.widgetInputG};
        color: ${c.widgetInputTxt};
    }

    .ui-widget-content {
        border-color: ${c.widgetBg2};
        background: ${c.widgetBg};
        color: ${c.widgetTxt};
    }
    .ui-widget-header{
        border:0;
        background: ${c.widgetG};
        color: ${c.widgetTxt};
    }
    .ui-state-default, 
    .ui-widget-content .ui-state-default, 
    .ui-widget-header .ui-state-default,
    .ui-datepicker-title select {
        border:0;
        background: ${c.primaryBg};
        color: ${c.primaryTxt};
    }
    .ui-state-highlight, 
    .ui-widget-content .ui-state-highlight, 
    .ui-widget-header .ui-state-highlight,
    .ui-state-active, 
    .ui-widget-content .ui-state-active, 
    .ui-widget-header .ui-state-active,
    .ui-datepicker-calendar .ui-state-hover{
        background: ${c.accentG};
        color: ${c.accentTxt};
    }
    

    .tg__btn-text{
        background: ${c.widgetInputG};
        color: ${c.widgetInputTxt};
    }

    .tg__one_game_team {
        color: ${c.singleGameTxt};
    }
    
    .tg__one_game_col,
    .tg__home_game_time,
    .tg__one_game_icons,
    .tg__one_game .maIcons {
        color: ${c.singleGameTxt2};
    }
    
    .posCombItem {
      background: ${c.subHeaderG};
    }

    /* - - - - Odd - - - - */
    .l_od,
    .l_od_empty {
        background: ${c.oddG};
        color: ${c.oddTxt};
    }

    /* - - - - Show More - - - - */
    .tg__more {
        background: ${c.showMoreG};
        color: ${c.showMoreTxt};
    }

    /* - - - - Betslip Header - - - - */
    .tg__block_header,
    .tg__info_panel .selectorWrapper {
        background: ${c.popupHeaderG};
        color: ${c.popupHeaderTxt};
    }

    /* - - - - Accent - - - - */
    .tg_sidebar_text_akcent,
    .liveGameSelected .liveSportNamesContainer,
    .left_menu_line_active .tg__left_menu_item_text,
    .tg_widget_text_akcent {
        color: ${c.accentBg};
    }
    
    .tg-ico-cheque_redact.tg-clr-akcent2 {
       color: ${c.accentBg};
    }
    
    .tg_popup_body_static .tab_selector_active {
        border-bottom: 2px solid ${c.accentBg};
    }
    
    .tg-ico-fav.active {
        color: ${c.accentBg};
    }
    
    .tg__fix_btn.checked, .tg__fix_btn:hover {
        color: ${c.accentBg};
    }

    /* - - - - Brand - - - - */
    .l_od:hover,
    .l_od.selectedOdd,
    .tg__btn-ternary {
        background: ${c.brandG};
        color: ${c.brandTxt};
    }

    .tabSelectorHeading {
        color: ${c.brandBg};
    }
    
    /* africanView */
    .africanView .tg--home2__stakeItem:hover,
    .africanView .active .tg--home2__stakeItem,
    .africanView .tg--home2__stakeItem.stItem_active {
        background: ${c.brandG};
        color: ${c.brandTxt};
    }

    /* - - - - BetSlip - - - - */
    .tg__coupon {
        background: ${c.betSlipBg};
        color: ${c.betSlipTxt2}
    }
    .stake_item_panel {
      background: ${c.betSlipStakeG};
      color: ${c.betSlipStakeTxt2};
      border-color: ${c.primaryBg};
      border-top: 0;
    }
    .coupon_sport_name_container {
      color: ${c.betSlipStakeTxt};
    }
    
    .tg__btn-coupon {
        background: ${c.betSlipButtonG};
        color: ${c.betSlipButtonTxt};
    }
    
    .tg--cashout-body, .tg__cashout_popup, .booking_number, .betchecker, .scout_panel, .bet_generator_wrapper  {
        background: ${c.popupG};
        color: ${c.popupTxt};
    }
    
    .tg_coin {
        background: ${c.accentBg};
        color: ${c.accentTxt};
    }
    
    .tg__match_item_btn {
        background: ${c.showMoreG};
        color: ${c.showMoreTxt};
    }
    .tg--selected_prem_game .tg__match_item_btn{
        background: ${c.accentG};
        color: ${c.accentTxt};
    }
     
    .tg__modal_book_bet .tg__border--color-akcent{
        border-color: ${c.accentBg};
    }

     .tg__modal_book_bet .tg-clr-akcent{
        color: ${c.accentBg};
     }
    
    /* - - - - DropDown - - - - */
    .tg__dropdown_content{
        background: ${c.primaryBg};
    }
    .tg__input,
    .tg__info_panel .tg__dropdown_control,
    .tg__dropdown__item,
    .sportRightPane .tg_input {
        background: ${c.widgetInputG};
        color: ${c.widgetInputTxt};
        border-radius: ${c.inputBorderRadiusVal}px;
    }
    .sportRightPane .tg_input::placeholder{
        color: ${c.widgetInputTxt2};
    }
    .tg__search_cont .tg__input{
        background: ${c.inputG};
        color: ${c.inputTxt};
    }
    .sportRightPaneRow .tg_subheader_btn {
        background: ${c.inputG};
        color: ${c.inputTxt};
    }
    .tg__search_cont .tg__input::placeholder{
        color: ${c.inputTxt2};
    }
    .tg__search_cont .tg__input-ico{
        color: ${c.inputTxt};
    }
    .tg__info_panel .tg_input_coupon_amount {
        background: ${c.betSlipInputG};
        color: ${c.betSlipInputTxt};
      }
    
    .tg__dropdown_content {
        background: ${c.dropdDownBg2};
    }

    /* - - - - Input - - - - */
    .tg__input {
      background: ${c.inputG};
      color: ${c.inputTxt};
    }

    /* - - - - Accent - - - - */
    .tg_sidebar_text_akcent,
    .liveGameSelected .liveSportNamesContainer,
    .left_menu_line_active .tg__left_menu_item_text,
    .tg_widget_text_akcent,
    .tg__coupon_square,
    .tg__score_box,
    .tg__more:hover,
    .tg__btn-coupon:hover {
        color: ${c.accentBg};
    }
    
    .tg__coupon_square{
       background: ${c.betSlipInputG};
    }
    
    .tg__coupon_factor {
       background: ${c.betSlipButtonBg2};
       color: ${c.betSlipButtonTxt}
    }

    .es__stepped_slider_cont {
        background: ${c.subHeaderG};
        color: ${c.subHeaderTxt};
    }
    
     .tg__badge_live {
        background-color: ${c.widgetBg};
        color: ${c.widgetTxt};
       
    }
    
    .tg-ico-date{
        color: ${c.widgetTxt};
    }
    
    .tg__switch input:checked + .tg__switch_ico:before {
        background: ${c.brandG};
     }
    
    /* Colors we can't change */
    .tab_selector_active .tg__badge_live {
         background-color: #CB0000;
         color: #fff;
    }
    
    .tg__switch .tg__switch_ico {
        background-color: #999;
    }

    .tg__switch .tg__switch_ico:before {
       background-color: #fff;
    }



    .tg--coupon-container.tg--coupon-single-tab .tab_selector_active {
        background: transparent !important;
        color: ${c.popupHeaderTxt};
    }

    ${c.makeTournamentBackground ? `
    [class^='digi_tournament_']:before,
    [class*=' digi_tournament_']:before {
    border-radius: 3px;
    border: 2px solid ${c.widgetBg3};
    box-sizing: content-box;
    background-repeat: no-repeat;
    background-color: ${c.widgetBg2};
    }`
      : ``
    }

    ${c.isRetroView ? `
    .sportLeftPane .selectorWrapper{
        margin-bottom: 0;
    }
    .cp_builder.tg--pad--bot-2{
        padding: 0;
        border-bottom: 1px solid  ${c.betSlipBgD};
        border-top: 1px solid  ${c.betSlipBgL};

    }
    .tg__left_menu_item,
    .tg__one_game {
        border-top: 1px solid;
        border-bottom: 1px solid;
    }
    .tg__left_menu_item--lvl1 {
        border-bottom-color: ${c.leftMenuLevel_ABgD};
        border-top-color: ${c.leftMenuLevel_ABgL};
    }
    .tg__left_menu_item--lvl2 {
        border-bottom-color: ${c.leftMenuLevel_BBgD};
        border-top-color: ${c.leftMenuLevel_BBgL};
    }
    .tg__left_menu_item--lvl3 {
        border-bottom-color: ${c.leftMenuLevel_CBgD};
        border-top-color: ${c.leftMenuLevel_CBgL};
    }
    .tg__one_game{
        border-bottom-color: ${c.singleGameBgD};
        border-top-color: ${c.singleGameBgL};
    }
    .stake_item_panel{
        border-bottom-color: ${c.betSlipStakeBgD};
        border-top: 1px solid ${c.betSlipStakeBgL};
    }
    .tab_selector{
        border-top: 1px solid ${c.tabBgL};
    }
    .tab_selector.tab_selector_active, .tab_selector:hover{
        border-top: 1px solid ${c.activeTabBgL};
    }   
    .africanView .tg--home2__stakeItem {
        border-top: 1px solid ${c.tabBgL};
        border-bottom: 1px solid ${c.tabBgD};
    }
    .africanView .tg--home2__stakeItem:hover {
        border-top-color: ${c.brandBgL};
        border-bottom-color: ${c.brandBgD};
    }
    .tg__btn-ternary {
        border-top: 1px solid ${c.brandBgL};
        border-bottom: 1px solid ${c.brandBgD};
    }
    .africanView .SBhead {
        border-top: 1px solid ${c.headerBgL};
        border-bottom: 1px solid ${c.headerBgD};
    }
    .tg__block_header,
    .tg__info_panel .selectorWrapper {
        border-top: 1px solid ${c.popupHeaderBgL};
        border-bottom: 1px solid ${c.popupHeaderBgD};
    }
    .tg_input{
        border-top: 1px solid ${c.activeTabBgD};
        border-bottom: 1px solid ${c.activeTabBgL};
    }
    .gameContentTitle,
    .tg__result_group_heading {
        border-top: 1px solid ${c.headerBgL};
        border-bottom: 1px solid ${c.headerBgD};
    }
    .tg__btn-coupon {
        border-top: 1px solid ${c.betSlipButtonBgL};
        border-bottom: 1px solid ${c.betSlipButtonBgD};
    }
    .l_od, .l_od_empty,
    .paperView .component_odd_empty,
    .paperView .component_odd,
    .paperView .component_odd.selectedOdd {
        border-top: 1px solid ${c.oddBgL};
        border-bottom: 1px solid ${c.oddBgD};
    }
    .paperView .champ_list:last-child{
        border:0;
    }
    `
      : ``
    }

    ${c.isFutureView ? `

    .tab_selector > i {
        transform: skew(5deg, 0);
    }
    .selector_panel,
    .tg__coupon_tabs_cont {
        padding: 0px 8px;
    }
    .tg__btn,
    .tg_input,
    .africanView .tg--home2__stakeItem,
    .tab_cupon,
    .tab_selector {
        transform: skew(-5deg, 0);
    }
    .gameContentTitle,
    .tg__block_header, .tg__info_panel .selectorWrapper,
    .paperView .es__home_bet_header{
        background: linear-gradient(90deg, ${c.headerBg} 0%, ${c.primaryBg} 100%);
    }
    .gameContentTitle > div:last-child{
        color: ${c.primaryTxt};
    }
    .tab_selector{
        background: linear-gradient(90deg, ${c.primaryBg} 0%, ${c.tabBg} 30%, ${c.tabBg} 100%);
    }
    .tg__one_game,
    .tg__left_menu_item--lvl1,
    .tg__left_menu_item--lvl2,
    .tg__left_menu_item--lvl3,
    .stake_item_panel {
        background: transparent !important;
        transform: skew(-10deg, 0);
        border-bottom: 2px solid !important;
        border-right: 2px solid !important;  
    }
    .tg__left_menu_item--lvl1 .tg__left_menu_item_text,
    .tg__left_menu_item--lvl1 .tg-ico-arrow,
    .tg__left_menu_item--lvl2 .tg__left_menu_item_text,
    .tg__left_menu_item--lvl2 .tg-ico-arrow,
    .tg__left_menu_item--lvl3 .tg__left_menu_item_text,
    .tg__left_menu_item--lvl3 .tg-ico-arrow,
    .tg__one_game_team,
    .tg__one_game,
    .coupon_sport_name_container,
    .stake_item_panel {
        color: ${c.primaryTxt} !important;
    }
    .tg__one_game {
        border-color: ${c.singleGameBg} !important;
    }
    
    .tg__left_menu_item--lvl1 {
        border-color: ${c.leftMenuLevel_ABg} !important; 
    }
    .tg__left_menu_item--lvl2 {
        border-color: ${c.leftMenuLevel_BBg} !important; 
    }
    .tg__left_menu_item--lvl3 {
        border-color: ${c.leftMenuLevel_CBg} !important; 
    }

    .tg--coupon-container .body_panel{
        background: ${c.primaryBg} !important;
        border: 2px solid !important;
        border-color: ${c.betSlipBg} !important;
    }
    .tg__coupon {
        background: transparent !important;
        color: ${c.primaryTxt} !important;
    }
    .stakes_panel{
        padding: 0 10px;
    }
    .stake_item_panel {
        border-top: 0 !important;
        border-color: ${c.betSlipStakeBg} !important;
    }

    .tg__btn,
    .l_od,
    .l_od_empty,
    .paperView .component_odd_empty,
    .paperView .component_odd,
    .paperView .component_odd.selectedOdd{
        background: transparent !important;
        transform: skew(-10deg, 0);
        border-top: 2px solid !important;
        border-left: 2px solid !important;
        border-color: ${c.oddBg} !important; 
        color: ${c.primaryTxt} !important;   
    }
    .l_od:hover,
    .l_od.selectedOdd,
    .tg__btn-ternary {
        border-color: ${c.brandBg} !important;  
        color: ${c.primaryTxt} !important;   
    }

    `
      : ``
    }
  
  .paperView .es__home_bet_header{
    background: ${c.headerG};
    color: ${c.headerTxt};
  }
  /*paper view odds*/
 .paperView .component_odd_empty,
 .paperView .component_odd,
 .paperView .component_odd.selectedOdd{
     background: ${c.oddG};
     color: ${c.oddTxt};
 }
 .paperView .component_odd:hover,
 .paperView .component_odd_empty:hover,
 .paperView .EUodds:hover,
 .paperView .EUodds.selectedOdd,
 .paperView .component_odd.selectedOdd {
     background: ${c.brandG};
     color: ${c.brandTxt};
 }
 .showC {
    background: ${c.leftMenuLevel_AG};
    color: ${c.leftMenuLevel_ATxt};
 }


 /*border radius*/
 .tg__btn,
 .l_od, .l_od_empty,
 .paperView .component_odd_empty,
 .paperView .component_odd,
 .paperView .component_odd.selectedOdd{
    border-radius: ${c.buttonBorderRadiusVal}px;
 }


 .sportHeaderPane,
 #header_fix,
 .tg__footer {
    display: none !important;
 }

  
  `;
  window.SportFrame && SportFrame.setCssAsText(css);
//   style.innerHTML = css;

  return css;
}
