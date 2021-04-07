function createCss(c) {
  let css = `
         .dm__odd-skin,
         .dm__market_odd {
            background: ${c.oddG};
            color: ${c.oddTxt};
        }
        .dm__odd-selected {
            background: ${c.accentG};
            color: ${c.accentTxt};
        }
        .eXsTpK{
            background-color: ${c.widgetBg};
            box-shadow: 0 2px 2px rgba(0,0,0,0.1);
        }
        .eXsTpK > a.active, .eXsTpK > a[data-active] {
            color: ${c.accentBg} !important;
        }
        .eXsTpK > a {
            color: ${c.widgetTxt2} !important;
        }
        .ckDZSk {
            background-color: ${c.primaryBg};
        }
        .JhGiQ {
            color: ${c.primaryTxt2};
        }
        .kZNLtc {
            color: ${c.primaryTxt2};
        }
        .jjVbBO {
            color: ${c.accentBg};
        }
        .dDpXlZ {
            background: ${c.primaryBg};
            border-bottom: 2px solid ${c.primaryBg};
        }
        .iGlHTV {
            background: ${c.widgetG};
            color: ${c.widgetTxt};
        }
        .dm--clr53 {
            background: ${c.tabG};
            color: ${c.tabTxt};
        }
        .kuFoHL,
        .ddwFJy {
            border-color: ${c.singleGameG};
        }
        */
#dm-main-container .dm-color--akcent,
#dm-main-container .dm__font_cup,
#dm-main-container .dm__scores-akcented,
#dm-main-container .dm__calendar__time,
#dm-main-container .dm__multibet_bonus_count,
#dm-main-container .dm__image_header .dm--color-akcent,
#dm-main-container .dm__image_header .dm__image_header_comments_cont .dm--akcented,
#dm-main-container .dm__image_header__score .dm--akcented,
#dm-main-container .dm__betslip__bet__factor .dm__bf,
#dm-main-container .dm--possible-winning-count,
#dm-main-container .dm__system_calc__footer-item .dm--akcent,
#dm-main-container .dm__mybets-res-header .dm-table-l .dm__mybets-res-row .dm-table-r.dm--akcent,
#dm-main-container .dm__mybets_game__info .dm--akcented,
#dm-main-container .dm__promo_logo {
      color: ${c.accentBg};
}
#dm-main-container .dm__image_header-devider {
      border-color: ${c.accentBg};
}
#dm-main-container .dm__h2h,
#dm-main-container .dm--tv,
#dm-main-container .dm__go_back,
#dm-main-container .dm__time,
#dm-main-container .dm__more,
#dm-main-container .dm__calendar-row__champ-name,
#dm-main-container .dm__mybets_game__date {
      color: #999999;
}
#dm-main-container.dm__wrapper {
      background-color: #292929;
}
#dm-main-container .dm__font-checkbox {
      color: #666666;
}
#dm-main-container .dm__checkbox__text {
      color: #999999;
}
#dm-main-container .dm__font-fav {
      color: ${c.widgetTxt2};
}
#dm-main-container .dm__font-fav.dm__favorite-added {
      color: ${c.accentBg};
}
#dm-main-container .dm-count-bubble {
      background-color: #666666;
      color: #111111;
}
#dm-main-container .dm__cashout_badge {
      background-color: #202020;
      color: #999999;
}
#dm-main-container .dm__collapse__home {
      background-color: #393838;
      border-color: ${c.accentBg};
      color: ${c.accentBg};
}
#dm-main-container .dm__collapse__home .dm__ico_arrow {
      color: #cccccc;
}
#dm-main-container .dm__homepage__sport_section__item {
      background-color: #393838;
      color: #ffffff;
}
#dm-main-container .dm__homepage__sport_section__market_head,
#dm-main-container .dm__homepage__sport_section__market_head .dm--input-select-value {
      background-color: #111111;
      color: #cccccc;
}
#dm-main-container .dm__homepage__sport_tournament_heading,
#dm-main-container .dm__custom_select__heading,
#dm-main-container .dm__homepage__multibet_heading {
      background-color: #010101;
      color: #999999;
}
#dm-main-container .dm__homepage__sport_singlegames,
#dm-main-container .dm__homepage__sport_singlegames_cont {
      background-color: #020202;
}
#dm-main-container .dm__single_game_cont {
      background-color: ${c.widgetBg2};
}
#dm-main-container .dm__single_game {
      background-color: #202020;
}
#dm-main-container .dm__single_game__link {
      color: #ffffff;
}
#dm-main-container .dm__custom_select__wrapper--live {
      background-color: #333333;
      color: #cccccc;
}
#dm-main-container .dm__custom_select__wrapper--live .dm__font_arrows {
      color: #cccccc;
}
#dm-main-container .dm__radio-slider {
      background-color: #999999;
}
#dm-main-container .dm__radio-slider:after {
      background-color: #ffffff;
}
#dm-main-container .dm__radio-slider-cont .dm__radio-hide:checked + .dm__radio-slider:after {
      background-color: ${c.accentBg};
}
#dm-main-container .dm__live_game_notice {
      background-color: #000000;
      color: #999999;
}
#dm-main-container .dm__custom_select__button {
      background-color: #000000;
      color: #999999;
}
#dm-main-container .dm__tabs_container {
      background-color: #111111;
      border-bottom-color: #393838;
}
#dm-main-container .dm__tabs_container .dm__tabs__item {
      color: #999999;
}
#dm-main-container .dm__tabs_container .dm__tabs__item.dm__tabs__item-active {
      background-color: #393838;
      color: ${c.accentBg};
}
#dm-main-container .dm__tabs_container .dm__tabs__item.dm__tabs__item-active .dm-count-bubble {
      background-color: ${c.accentBg};
      color: #111111;
}
#dm-main-container .dm__tabs_container .dm__tabs__item.dm__tabs__item-active .dm__calendar_tab_day,
#dm-main-container .dm__tabs_container .dm__tabs__item.dm__tabs__item-active .dm__calendar_tab_events {
      color: #666666;
}
#dm-main-container .dm__tabs_container .dm__tabs__item .dm__tab_sub_name {
      color: ${c.accentBg};
}
#dm-main-container .dm__tabs_container .dm__calendar_tab_day,
#dm-main-container .dm__tabs_container .dm__calendar_tab_events {
      color: #666666;
}
#dm-main-container .dm--tabs-event.dm__market_collapser {
      background-color: #111111;
      border-bottom-color: #393838;
}
#dm-main-container .dm--tabs-event.dm__market_collapser .dm__font_arrows {
      color: #cccccc;
}
#dm-main-container .dm__market_collapser {
      background-color: #393838;
      color: #ffffff;
}
#dm-main-container .dm__market {
      background-color: #666666;
}
#dm-main-container .dm__championship__header {
      background-color: #393838;
      color: #cccccc;
}
#dm-main-container .dm__event_row-championships,
#dm-main-container .dm__event_row-flags-sub {
      background-color: #111111;
      color: #cccccc;
}
#dm-main-container .dm__event_row-championships .dm__event_row_c,
#dm-main-container .dm__event_row-flags-sub .dm__event_row_c {
      color: #cccccc;
}
#dm-main-container .dm__event_row-flags {
      background-color: #393838;
      color: #cccccc;
}
#dm-main-container .dm__event_row-flags .dm__ico_arrow {
      color: #cccccc;
}
#dm-main-container .dm__popup-bg,
#dm-main-container .dm__betslip--single {
      background-color: #000000;
      color: #cccccc;
}
#dm-main-container .dm--input,
#dm-main-container .dm--input-calendar input,
#dm-main-container .dm--input-imit,
#dm-main-container .dm__keyboard_trigger {
      background-color: #111111 !important;
      color: #ffffff !important;
}
#dm-main-container .dm--input-calendar input:after,
#dm-main-container .dm__input_wrapper .dm__input_ico {
      color: #ffffff !important;
}
#dm-main-container .dm--input::placeholder,
#dm-main-container .dm--input-calendar input::placeholder {
      color: #666666 !important;
}
#dm-main-container .dm--input-select_wrapper::after {
      border-top-color: #ffffff;
}
#dm-main-container .dm__betslip_btn {
      background-color: #fdfcfc;
      color: #696969;
      border-right-color: ${c.accentBg};
}
#dm-main-container .dm__betslip_btn__count {
      background: linear-gradient(180deg, #bb9700 0%, ${c.accentBg} 50%, #bb9700 100%);
      border-color: #ffffff;
      color: #262626;
}
#dm-main-container .dm__betslip_btn__odds .dm__total_odds {
      color: #333333;
}
#dm-main-container .dm__betslip__bet {
      background-color: #202020;
}
#dm-main-container .dm__betslip__bet__name .dm__tn {
      color: #ffffff;
}
#dm-main-container .dm__betslip__bet__remove {
      color: #666666;
}
#dm-main-container .dm__betslip__stake_name {
      color: #999999;
}
#dm-main-container .dm__betslip_tour {
      background-color: #333333;
      color: ${c.accentBg};
}
#dm-main-container .dm__betslip_stake_trigger_panel,
#dm-main-container .dm__multibet_total_container {
      background-color: #262626;
      color: #666666;
}
#dm-main-container .dm__betslip_stake_trigger_text .dm__dtt__number,
#dm-main-container .dm__multibet_total_factor {
      background-color: #333333;
      color: ${c.accentBg};
}
#dm-main-container .dm__btn--betslip {
      background-color: #393838 !important;
      color: #ffffff !important;
}
#dm-main-container .dm__btn--betslip.dm__btn--betslip--active {
      background-color: linear-gradient(180deg, #bb9700 0%, ${c.accentBg} 50%, #bb9700 100%) !important;
      color: #1a1a1a !important;
}
#dm-main-container .dm__btn--keyboard {
      background-color: #393838;
      color: #ffffff;
}
#dm-main-container .dm--keyboard--betslip .dm__keyboard .dm__keyboard__row .dm__btn1 {
      border-color: #111111;
}
#dm-main-container .dm__system_calc__variant_number {
      color: #ffffff;
}
#dm-main-container .dm__system_calc__footer-item,
#dm-main-container .dm__mybets-res-row {
      background-color: #393838;
      color: #cccccc;
}
#dm-main-container .dm__system_calc__footer-item .dm-table-r,
#dm-main-container .dm__mybets-res-row .dm-table-r {
      color: #ffffff;
}
#dm-main-container .dm__issue_cont {
      color: #393838;
}
#dm-main-container .dm__mybets-res-header,
#dm-main-container .dm__mybets__item,
#dm-main-container .dm__bonus_heading {
      background-color: #111111;
      color: #cccccc;
}
#dm-main-container .dm__mybets_game__info {
      background-color: #202020;
      color: #ffffff;
}
#dm-main-container .dm__mybets_game__info i,
#dm-main-container .dm__mybets_game__info .dm__result_more__score,
#dm-main-container .dm__mybets_game__team,
#dm-main-container .dm__mybets__more,
#dm-main-container .dm__mybets__more .dm--svg-icon,
#dm-main-container .dm__calendar-row i,
#dm-main-container .dm__single_game_ico {
      color: #ffffff;
      fill: #ffffff;
}
#dm-main-container .dm__btn--primary,
#dm-main-container .dm__btn--primary a,
#dm-main-container .dm__btn-bet {
      background-color: #00912c !important;
      color: #ffffff !important;
}
#dm-main-container .dm__btn--history,
#dm-main-container .dm__tournament-prize,
#dm-main-container .dm__btn--confirm {
      background: #f1c033 !important;
      color: #000000 !important;
}
#dm-main-container .dm__btn--secundary {
      background-color: #262626 !important;
      color: #cccccc !important;
}
#dm-main-container .dm__btn--cancel {
      background-color: #d60000 !important;
      color: #ffffff !important;
}
#dm-main-container .dm__btn--ternary {
      background-color: #666666 !important;
      color: #cccccc !important;
}
#dm-main-container .dm__btn--random {
      background-color: #666 !important;
      color: #ccc !important;
}
#dm-main-container .dm__btn--footer {
      background-color: #333 !important;
      color: #ccc !important;
}
#dm-main-container .dm__btn--footer2 {
      background-color: transparent !important;
      color: #ccc !important;
      border: 1px solid #333 !important;
}
#dm-main-container .dm__calendar-row,
#dm-main-container .dm__custom_select__item {
      background-color: #202020;
      color: #ffffff;
}
#dm-main-container .dm__calendar-row.active,
#dm-main-container .dm__custom_select__item.dm--selected {
      background-color: #111111;
}
#dm-main-container .dm__refresh .dm__font:after,
#dm-main-container .dm__filter_btn {
      background-color: ${c.accentBg};
      fill: #262626;
      color: #262626;
}
#dm-main-container .dm__result_more_item p:nth-child(odd) {
      background-color: #202020;
}
#dm-main-container .dm__tournament-bg {
      background-color: #202020;
}
#dm-main-container .dm_collapser_with_text_header {
      background-color: #393838;
      color: #ffffff;
}
#dm-main-container .dm_collapser_with_text {
      background-color: #202020;
      color: #cccccc;
}
#dm-main-container .dm_collapser_with_text svg {
      fill: #cccccc;
}
      `;

  style.innerHTML = css;

  return css;
}

function createJs(c) {
  let js = `
    window.digiAppSkinning = {
        colors: {
            primary: '${c.accentBg}'
        },
        secondaryMenu: {
            innerContainerBgColor: '#1A1A1A',
            bonusBalanceLabelColor: '#FFFFFF',
            bonusBalanceAmountColor: '#2E8F3D',
            listItemBgColor: '#333333',
            listItemColor: '#CCCCCC'
        },
        mainMenu: {
            MainMenuBackground: '#262626',
            MainMenuItemColor: '#999999',
            MainMenuItemColorActive: '#2E8F3D'
        },
        popup: {
            popupHeaderBackground: '#000000',
            popupHeaderColor: '#999999',
            popupHeaderUserBalanceColor: '#2E8F3D'
        },
        slider: {
            isShadowExist: true,
            sliderShadowColor: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(20, 19, 19, 1) 100%)',
            sliderBackground: '#1A1A1A',
            sliderItemColor: '#CCCCCC',
            sliderItemActiveColor: '#2E8F3D',
            sliderItemSportCount: '#666666',
    
            sliderInlineShadowColor: 'linear-gradient(to right, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 1) 100%)',
            sliderInlineBackground: '#262626',
            sliderInlineColor: '#999999',
            sliderInlineActiveBackground: '#333333',
            sliderInlineActiveColor: '#FFFFFF',
            sliderInlineBorderColor: '#333333',
            sliderInlineIconColor: '#FFFFFF'
        },
        banner: {
            bannerSlideOddContainerBackground: '#4D4D4D',
            bannerSlidesPaginationBackground: '#1A1A1A',
            bannerSlidesPaginationItemBackground: '#4D4D4D',
            bannerSlidesPaginationItemBackgroundActive: '#999999'
        },
        odd: {
            OddBackground: '${c.oddG}',
            OddColor: '${c.oddTxt}',
            OddNameColor: '#999999',
            OddBackgroundActive: '${c.accentG}',
            OddColorActive: '${c.accentTxt}',
            OddNameColorActive: '#FFFFFF'
        },
        oddGridElement: {
            borderColor: '#4D4D4D'
        },
        search: {
            SearchBackground: '#333333',
            SearchInputBackground: '#1A1A1A',
            SearchInputPlaceholderColor: '#666666',
            SearchInputColor: '#FFFFFF',
            SearchInputIconColor: '#666666'
        },
        orderInfo: {
            orderInfoBackground: '#000000',
            orderInfoColor: '#CCCCCC',
            orderInfoRightColor: '#FFFFFF'
        },
        activeServeIcon: {
            bgColor: '#2E8F3D'
        }
    };
    `;
  return js;
}
