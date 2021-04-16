// function createCss(c) {
//   let css = `
//     /*${c.fileName} skinning*/
//
//     /*coupon*/
//     .tg_widget_bg_2 {
//         background: ${c.betSlipBg};
//         color: ${c.betSlipTxt};
//     }
//     .tg--cashout-body, .tg__cashout_popup, .booking_number {
//         background-color: ${c.betSlipBg};
//         color: ${c.betSlipTxt};
//     }
//     .tg--coupon-bg {
//         background: ${c.betSlipBg};
//         color: ${c.betSlipTxt}
//     }
//
//     .tg__btn-coupon {
//         background: ${c.betSlipButtonG};
//         color: ${c.betSlipButtonTxt};
//     }
//     .tg__btn-coupon:hover{
//       color: ${c.accentBg};
//       box-shadow: 0 0 3px 0 ${c.accentBg};
//     }
//     .tg__coupon .tg_input {
//         background: ${c.betSlipInputG};
//         color: ${c.betSlipInputTxt};
//     }
//
//     .stake_item_panel {
//       background: ${c.betSlipStakeG};
//       color: ${c.betSlipTxt};
//       border-color: ${c.betSlipBg};
//     }
//     .coupon_sport_name_container {
//       color: ${c.betSlipStakeTxt};
//     }
//     /*input inside widgetBg3*/
//     .tg_widget_bg_2 .tg__dropdown_coupon{
//       background-color: ${c.betSlipBg};
//       color: ${c.betSlipTxt2};
//     }
//     .tab_cupon{
//       background-color: ${c.betSlipBg2};
//       color: ${c.betSlipTxt2};
//     }
//     .tab_cupon.tab_selected,
//     .tab_cupon:hover {
//       background-color: ${c.activeTabG};
//       color: ${c.primaryTxt};
//     }
//     .tg__coupon_factor,
//     .tg__coupon_square{
//       background-color: ${c.betSlipBg};
//       color: ${c.betSlipTxt};
//     }
//
//     /*mainBg*/
//     .tg_bg,
//     .tg__modal_close,
//     .tg--close,
//     .tg__info_panel .selector_panel {
//         background-color: ${c.primaryBg};
//         color: ${c.primaryTxt};
//     }
//
//     .gameContentTitle.tg_widget_header{
//       background: ${c.headerG};
//       color: ${c.headerTxt};
//     }
//     .gameContentTitle.tg_widget_header .tg-ico-arrow{
//       color: ${c.headerTxt};
//     }
//
//     .tg_widget_heading{
//         background: ${c.subHeaderG};
//         color: ${c.subHeaderTxt};
//     }
//
//       /*sidebar*/
//     .tg__left_menu_item:hover{
//       background:${c.widgetBgHov};
//     }
//     .tg__left_menu_item.tg__left_menu_item-active {
//       background:${c.accentG};
//       color:${c.accentTxt};
//     }
//     .liveGameSelected .liveSportNamesContainer,
//     .left_menu_line_active .tg__left_menu_item_text {
//       color: ${c.accentBg};
//     }
//     .tg__left_menu_item.tg__left_menu_item-active .tg_sidebar_text_akcent,
//     .liveGameSelected .tg_sidebar_bg_3 .tg_sidebar_text_akcent,
//     .left_menu_line_active .tg_sidebar_text_akcent{
//       color:${c.accentBg};
//     }
//     .tg_sidebar_text_akcent,
//     .tg-bg_transparent .teamName,
//     .tg-bg_transparent .tg_team_name,
//     .tg__open_event_img .tg-clr-akcent2.tg_score{
//       color: ${c.accentBg};
//     }
//         .tg__left_menu_item--lvl1 {
//         background:${c.leftMenuLevel_AG};
//         color:${c.leftMenuLevel_ATxt};
//     }
//     .tg__left_menu_item--lvl2 {
//         background:${c.leftMenuLevel_BG};
//         color:${c.leftMenuLevel_BTxt};
//     }
//     .tg__left_menu_item--lvl3 {
//         background:${c.leftMenuLevel_CG};
//         color:${c.leftMenuLevel_CTxt};
//     }
//     /*end of sidebar*****************************************/
//
//     .tg--issue {
//       background-color: #fff;
//       color: #000;
//     }
//     .tg__left_menu_item,
//     .live_menu_item_left{
//         border-bottom-color: ${c.primaryBg};
//     }
//     .tsModalContent,
//     .tg__dropdown_content,
//     .tg__modal_big,
//     .tg--express_combination{
//       -webkit-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
//       -moz-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
//       box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
//     }
//     .tg__banner__date{
//       color: ${c.primaryTxt2};
//     }
//
//     .tg__submenu__item{
//       color: ${c.widgetTxt};
//       border-radius: ${c.borderRadiusVal}px;
//     }
//
//       ${
//         c.makeMenuTabBackground
//           ? `
//     /* make Submenu tabs visible on bright background */
//      .tg__submenu__item {
//       background-color: ${c.widgetBg2};
//     }`
//           : ``
//       }
//
//     .tg__submenu__item.active,
//     .tg__submenu__item:hover{
//       color: ${c.primaryTxt};
//     }
//
//     .tg_team_name,
//     .tg__open_event_img .title {
//       color: ${c.widgetTxt2};
//     }
//     .tab_selector{
//         background-color: ${c.tabG};
//         color: ${c.tabTxt};
//     }
//
//     .ss__step_slider .ss__ruller > div.off{
//       background-color: ${c.primaryBg};
//     }
//     #line_tabs .selectorWrapper, #live_tabs_header .selectorWrapper{
//         background-color: ${c.primaryBg};
//     }
//
//     .tg__banner__heading,
//     .tg__open_event_img .tg_score {
//       color: ${c.widgetTxt};
//     }
//
//     .tab_selector.tab_selector_active,
//     .tab_selector:hover{
//       background: ${c.activeTabG};
//       color: ${c.tabTxt};
//     }
//
//     .tg__step_slider,
//     .tg_widget_bg {
//       background-color: ${c.widgetBg};
//       color: ${c.widgetTxt2};
//     }
//
//     .tg_subheader_btn,
//     .tg__live_filter_item.checked {
//         background: ${c.tabG};
//         color: ${c.widgetTxt2};
//     }
//
//     .tg__one_game,
//     .live_menu_item,
//     .tg__multi_game,
//     .prematch_event_odds_container {
//       background: ${c.singleGameG};
//       color: ${c.singleGameTxt};
//     }
//     .tg__one_game_team {
//         color:${c.singleGameTxt};
//     }
//
//     .tg_widget_row {
//           border-bottom: 1px solid ${c.primaryBg};
//     }
//     .tg__match_item_stake,
//     .tg--pos_comb_row,
//     .tg__coupon_switches .tg__switch_cont,
//     .tg--border-bot-1{
//         border-color: ${c.primaryBg};
//     }
//
//     /*sidebar*/
//     .tg_sidebar_bg_2.tg__step_slider{
//         background-color: ${c.subHeaderBg};
//         color: ${c.subHeaderTxt};
//     }
//     .ss__step_slider .ss__slider,
//     .ss__step_slider .ss__ruller > div{
//         background: ${c.widgetTxt};
//     }
//
//     .tg_widget_header{
//       background-color: ${c.headerBg};
//       color: ${c.headerTxt};
//     }
//     .tg_widget_header .tg-ico-arrow{
//       color: ${c.headerTxt};
//     }
//
//     .tg_widget_sub_row,
//     .tg_input,
//     .posCombItem,
//     .tg__slider__btn:hover,
//     #calc_new .tg__btn {
//           background-color: ${c.widgetBg2};
//           color: ${c.widgetTxt2};
//     }
//
//     .calc_content, .simpleCalc {
//         background-color: ${c.singleGameBg};
//     }
//
//     .tg_input_coupon_amount{
//       color:${c.widgetTxt};
//     }
//     .tg__dropdown__item{
//       background-color: ${c.widgetBg2};
//     }
//     .tg__dropdown__item:hover,
//     .tg__dropdown__item.activeItem{
//       color:${c.widgetTxt};
//     }
//     .tg__input:focus,
//     .tg_input:focus{
//       outline: 0;
//       box-shadow: 0 0 0 2px ${c.primaryBgTransparent};
//     }
//     .tg__modal_wrapper{
//       background-color: ${c.primaryBgTransparent};
//     }
//     .tg-ico-date{
//       color: ${c.widgetTxt};
//     }
//     .tg__score_box{
//         background-color: ${c.primaryBg};
//     }
//     .tg__more{
//       background: ${c.showMoreG};
//       color: ${c.showMoreTxt};
//     }
//     .tg__more:hover{
//         background: ${c.showMoreG};
//         color: ${c.accentBg};
//     }
//     .tg--cashout-row,
//     .tg--cashout-pagination-item,
//     .tg__match_header.tg_widget_header,
//     .tg__prematch_header.tg_widget_bg,
//     .lineEventHeaderWide.tg_widget_bg,
//     .tg__live_list_header.tg_widget_header,
//     .tg__multiview_header.tg_widget_header,
//     .tg__calendar_header.tg_widget_heading,
//     .tg__results_header.tg_widget_bg {
//         background-color: ${c.headerG};
//         color: ${c.headerTxt};
//     }
//
//     .tg_widget_header_2 {
//         background-color: ${c.widgetG};
//     }
//      .tg__multiview_header.tg_widget_header .tg__one_game_team{
//       color: ${c.headerTxt};
//      }
//
//      .tg_widget_header_2 .tab_selector_active{
//         background: ${c.activeTabG} !important;
//         color: ${c.activeTabTxt} !important;
//      }
//
//     .tg__accordion__header,
//     .tg__info_panel .tg_betslip_header {
//         background: ${c.accordionHeaderG};
//         color: ${c.accordionHeaderTxt};
//     }
//
//     .l_od,
//     .l_od_empty{
//           background: ${c.oddG};
//           color: ${c.oddTxt};
//     }
//     .l_od:hover,
//     .odCnt:hover .l_od,
//     .l_od.selectedOdd, .tg--cashout-item-cashout, .tg--cashout-pagination-item.active{
//       background: ${c.brandG};
//       color: ${c.brandTxt};
//     }
//     .tab_selector.tab_selector_active .tg__badge_live{
//       background-color: #CB0000;
//       color: #fff;
//     }
//     .tab_selector .tg__badge_live{
//       background-color: ${c.widgetBg};
//       color: ${c.widgetTxt2};
//     }
//     .tg_widget_tab_text,
//     .tg__srv{
//       color: ${c.brandBg};
//     }
//     .tg__fix_btn{
//       color: ${c.headerTxt};
//     }
//     .tg_widget_bg_2 .tg__fix_btn{
//       color: ${c.primaryTxt};
//     }
//     .tg_widget_text_akcent{
//       color: ${c.accentBg};
//     }
//     .tg__fix_btn.checked{
//       color: ${c.accentBg};
//     }
//      .tg_widget_bg .tg-ico.active{
//       color: ${c.accentBg} !important;
//      }
//     #calc_new .tg__btn-ternary,
//     .tg__btn-ternary{
//       background: ${c.brandG};
//       color: ${c.brandTxt};
//     }
//     .tg_widget_bg .tg__btn .tg-ico{
//       color: ${c.brandTxt};
//     }
//     #calc_new .tg__btn-ternary:hover,
//     .tg__btn-ternary:hover{
//       background-color: ${c.brandBg2};
//       color: ${c.brandTxt};
//     }
//     .digi_scroll_dragger{
//       background-color: ${c.accentG};
//     }
//
//     .tg_widget_row .tg__one_game_icons,
//     .tg_widget_row .tg__home_game_time,
//     .tg-ico-arrow{
//       color: ${c.widgetTxt2};
//     }
//     .tg-bg_transparent{
//       background-color: ${c.primaryBgTransparent};
//     }
//     .tg__switch .tg__switch_ico{
//       background-color: #999;
//     }
//     .tg__switch .tg__switch_ico:before{
//       background-color: #fff;
//     }
//     .tg__switch input:checked + .tg__switch_ico:before{
//       background: ${c.brandG};
//     }
//     /*calendar*/
//     .ui-widgetBg-content {
//       background: ${c.widgetBg2};
//       color: ${c.widgetTxt2};
//     }
//     .ui-widgetBg-header {
//       background: ${c.widgetBg2};
//       color: ${c.widgetTxt2};
//     }
//     .ui-state-default, .ui-widgetBg-content .ui-state-default, .ui-widgetBg-header .ui-state-default {
//       background: ${c.widgetBg3};
//       color: ${c.widgetTxt2};
//     }
//     .ui-state-highlight, .ui-widgetBg-content .ui-state-highlight, .ui-widgetBg-header .ui-state-highlight {
//       background: ${c.brandG};
//       color: ${c.brandTxt};
//     }
//     .ui-state-active, .ui-widgetBg-content .ui-state-active, .ui-widgetBg-header .ui-state-active {
//       background-color: ${c.brandBg2};
//       color: ${c.brandTxt};
//     }
//     /*calendar end*/
//
//     /*border radius (roundness)*/
//     .tab_selector_active, .tab_selector:hover{
//         border-radius: ${c.borderRadiusVal}px ${c.borderRadiusVal}px 0 0;
//     }
//     .tg__btn,
//     .l_od_empty,
//     .l_od,
//     .tg__dropdown_value,
//     .tg__dropdown_content,
//     .tg__dropdown_control,
//     .tg_input{
//       border-radius: ${c.borderRadiusVal}px;
//     }
//
//     .tg__input,
//     .tg__input-ico {
//         background: ${c.widgetG};
//         color: ${c.widgetTxt};
//     }
//
//     @keyframes lightbox {
//       from {
//           color: ${c.widgetTxt};
//       }
//
//       to {
//           color: ${c.brandBg}
//       }
//     }
//
//     .tg__tournament_ico_switch .tg__switch_text:before {
//       color: ${c.brandBg}
//     }
//
//     .tg_coin {
//       background: ${c.brandG};
//       color: ${c.brandTxt};
//     }
//
//     .tg__match_item_btn {
//         background-color: ${c.primaryBg};
//         color: ${c.primaryTxt};
//     }
//
//     .overviewEventSlider .tg__btn_arrow {
//       background-color: ${c.headerBg};
//       color: ${c.headerTxt};
//     }
//
//     /* Bet history */
//     .tg__bet_history_row .tg-clr-akcent,
//     .tg__list_row_sub .tg-clr-akcent2,
//     .tg__partial_cashout--icon,
//     .tg-ico-cheque_redact.tg-clr-akcent2{
//       color: ${c.accentBg};
//     }
//     .tg__bet_history .tg__list_row.tg_sticky_bot {
//       background-color: ${c.primaryBg};
//     }
//
//       /* book a bet skinning */
//     .tg__modal_book_bet {
//         background-color: ${c.widgetBg};
//         color: ${c.widgetTxt2};
//     }
//     .tg__modal_book_bet .tg__modal_header{
//         background-color: ${c.headerBg};
//         color: ${c.headerTxt};
//     }
//     .tg__modal_book_bet .tg__list_bg{
//         background-color: ${c.primaryBg};
//     }
//     .tg__modal_book_bet .tg__list_row {
//         background-color: ${c.widgetBg2};
//     }
//     .tg__modal_book_bet .tg__list_row:nth-child(even) {
//         background-color: ${c.widgetBg};
//     }
//     .tg__modal_book_bet .tg__border--color-akcent{
//         border-color: ${c.brandBg};
//     }
//     .tg__modal_book_bet .tg-clr-akcent{
//         color: ${c.brandBg};
//     }
//
//      /* Right banner styles */
//     .tg__custom_rightBanner_line,
//     .tg__custom_rightBanner_desc {
//         border-top-color: ${c.brandBg};
//     }
//     .tg__rightBanner_seeMore {
//        background: ${c.brandG};
//        color: ${c.brandTxt};
//     }
//
//     .component_tax_data {
//       background-color: ${c.primaryBg};
//       color: ${c.widgetTxt2};
//     }
//     .component_tax_data .tg-ico {
//         color:${c.accentBg};
//     }
//     .component_tax_data_wrapper .component_tax_data_row strong {
//       color: ${c.widgetTxt};
//     }
//
//     .tg__show_title[data-title]:hover:after {
//       background-color: ${c.primaryBg};
//       color: ${c.widgetTxt};
//     }
//
//     .tg_badge_transparent{
//       background-color:rgba(0,0,0,0.5);
//       color:#fff;
//     }
//
//     .tg__coupon_switches {
//       border-bottom-color: ${c.primaryBg};
//     }
//
//     /*paper view skinning*/
//
//       /*paper view headers bg*/
//       .paperView .es__home_bet_header,
//       .paperView .es__live_page .es__text_heading,
//       .paperView .es__event_detail_header {
//           background: ${c.headerG};
//           color: ${c.headerTxt};
//       }
//
//       /*paper view widgetBg bg*/
//       .paperView .es__home_bet_item,
//       .paperView .es--Live_page_collapse_panel,
//       .paperView .es__live_sub_item_event,
//       .paperView .es__home_one_game,
//       .paperView .es__home_bet_show_hide,
//       .paperView .es__event_row,
//       .paperView .es--live_ingame_odds_cont,
//       .paperView .es__fixed_panel,
//       .paperView .es__event_detail_item,
//       .paperView .es__paper_odds,
//       .paperView .es__home_bet_item .es__event_row,
//       .paperView .es__home_bet_item .es__home_tab,
//       .paperView .es__home_bet_item .tab_selector,
//       .paperView .live_tabs_header .selectorWrapper {
//           background: ${c.widgetBg};
//           color: ${c.widgetTxt};
//       }
//
//       .paperView .es__home_bet_item .tab_selector.tab_selector_active,
//       .paperView .es__home_bet_item .tab_selector:hover,
//       .paperView .es__home_bet_item .es__event_subhead,
//       .paperView .es__paper_name,
//       .paperView .es__filter_container {
//           background: ${c.subHeaderBg};
//           color: ${c.subHeaderTxt};
//       }
//
//       .paperView .es__filter_container .tg__dropdown_value{
//         background: ${c.widgetBgHov};
//         color: ${c.widgetTxt};
//       }
//
//       .paperView .es__event_subhead,
//       .paperView .es--live_tabular_sub_row {
//           background: ${c.widgetBg2};
//           color: ${c.widgetTxt2};
//       }
//
//       .paperView .es__home_one_game_header{
//          background: ${c.widgetBg2};
//          color: ${c.widgetTxt};
//       }
//
//       /*paper view headers bg*/
//       .paperView .es__expanded_heading,
//       .paperView .es__live_expanded_row,
//       .paperView .es__expanded_info_left,
//       .paperView .es__paper_name,
//       .paperView .es__header_with_border,
//       .paperView .es__event_sub_row {
//           background: ${c.widgetBg3};
//           color: ${c.widgetTxt2};
//       }
//
//       /*paper view border bg*/
//       .paperView .stakeContainer + .stakeContainer,
//       .paperView .es__live_expanded_row + .es__live_expanded_row,
//       .paperView .EU-li-cont + .EU-li-cont,
//       .paperView .es__paper_name,
//       .paperView .es__live_page .es__expanded_info_cont,
//       .paperView .es__header_with_border,
//       .paperView .es__home_row + .es__home_row,
//       .paperView .es--live_sport_row_cont,
//       .paperView .es__filter_container,
//       .paperView .paper_home_games_wrapper > div > div + div {
//           border-color: ${c.primaryBg};
//       }
//
//       /*paper view odds*/
//       .paperView .component_odd_empty,
//       .paperView .component_odd,
//       .paperView .component_odd.selectedOdd{
//           background: ${c.oddG};
//           color: ${c.oddTxt};
//       }
//       .paperView .component_odd:hover,
//       .paperView .component_odd_empty:hover,
//       .paperView .EUodds:hover,
//       .paperView .EUodds.selectedOdd,
//       .paperView .component_odd.selectedOdd {
//           background: ${c.brandG};
//           color: ${c.brandTxt};
//       }
//
//       .paperView .es__show_more_btn .tg__chb_text {
//           background: ${c.brandG};
//           color: ${c.brandTxt};
//           border-radius: ${c.borderRadiusVal}px;
//       }
//       .paperView .es__show_more_btn .tg__chb_text:hover {
//           background: ${c.brandBg2};
//           color: ${c.brandTxt};
//       }
//
//       /* AfricanView */
//
//       .africanView .tg__home2_game_heading,
//       .africanView .SBhead {
//           background: ${c.subHeaderG};
//           color: ${c.subHeaderTxt};
//       }
//
//       .africanView .tg__live_list_header {
//           background: ${c.widgetG};
//           color: ${c.widgetTxt};
//       }
//
//       .africanView .tg--home2__stakeTypes {
//           background: ${c.widgetG};
//       }
//
//       .africanView .tg--home2__stakeItem {
//           background: ${c.headerG};
//       }
//
//       .africanView .tg--home2__stakeItem:hover {
//           background: ${c.brandG};
//       }
//
//       .africanView .tg_widget_heading {
//           background: ${c.widgetG};
//       }
//
//       .sportLeftPane .liveFilterContainer{
//             background-color: ${c.primaryBg};
//             color: ${c.primaryTxt};
//         }
//
//       /*temp*/
//       .sportHeaderPaneUpperRow,
//       .sportHeaderPaneLowerRow,
//       .tg__footer  {
//         display:none;
//       }
//
//       /* Bet History */
//       .tg__bet_history .tg__filter {
//           background: ${c.widgetG};
//       }
//
//       .tg__bet_history .tg__home_game_heading,
//       .tg__bonus .tg__home_game_heading {
//           background: ${c.subHeaderG};
//       }
//
//       .tg__bet_history .tg__list_row:nth-child(odd) {
//           background: ${c.singleGameG};
//       }
//
//       .tg__bet_history .tg__list_row:nth-child(even) {
//           background: ${c.singleGameBg2};
//       }
//
//   ${
//     c.makeTournamentBackground
//       ? `
//   /*make tournament icons visible on bright background*/
//     [class^='digi_tournament_']:before,
//     [class*=' digi_tournament_']:before {
//       border-radius: 3px;
//       border: 2px solid ${c.widgetBg3};
//       box-sizing: content-box;
//       background-repeat: no-repeat;
//       background-color: ${c.widgetBg2};
//   }`
//       : ``
//   }`;
//
//   style.innerHTML = css;
//
//   return css;
// }
function createCss(c) {
  let css = `
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
    .paperView .champ_list:last-child {
        border-color:${c.primaryBg};
    }

    .tg__submenu__item {
        color: ${c.primaryTxt2};
    }
    .tg__submenu__item.active,
    .tg__submenu__item:hover {
        color: ${c.primaryTxt};
    }
    
    /* - - - - Widget - - - - - */
    .tg__live_list_header {
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
    .ss__step_slider .ss__ruller > div{
        background: ${c.widgetTxt};
    }

    /* - - - - Left Menu Level 2 - - - - */
    .tg__left_menu_item--lvl2,
    .tg_bet_history_order_row_sub {
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
    .tg__dropdown_control,
    .tg_input,
    .tg_subheader_btn,
    .tg_live_center-wrapper .selectorWrapper,
    .tg__live_filter_item.checked{
      background: ${c.activeTabG};
      color: ${c.activeTabTxt};
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
    .tg__modal_header,
    .tg__modal_heading,
    .tg_bet_history_order_row {
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
    .tg__banner,
    .prematch_event_odds_container,
    .tg__multi_game,
    .live_menu_item_left .tg--left_live_odds,
    .tg__calendar_item,
    .dg1,
    .overviewEventBody,
    .tg_popup_body_static,
    .tg__modal,
    .tg_bet_history_order_row:nth-child(even) {
        background: ${c.singleGameG};
        color: ${c.singleGameTxt2};
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
    .tg_widget_text_akcent,
    .tg__coupon_square {
        color: ${c.accentBg};
    }
    
    .tg_popup_body_static .tab_selector_active {
        border-bottom: 2px solid ${c.accentBg};
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
    .africanView .tg--home2__stakeItem:hover {
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
    
    /* - - - - DropDown - - - - */
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

    .es__stepped_slider_cont {
        background: ${c.subHeaderG};
        color: ${c.subHeaderTxt};
    }
    
    /* Colors we can't change */
    .tg__badge_live {
        background-color: #CB0000;
        color: #fff;
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
        border-top-color: ${c.betSlipStakeBgL};
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
  style.innerHTML = css;

  return css;
}
