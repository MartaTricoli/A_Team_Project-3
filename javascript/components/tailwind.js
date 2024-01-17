tailwind.config = {
    darkMode: 'class',
    theme: {
        screens: {
            //ANCHOR - FRANCESCO-media-query
            "screen_1200": "1200px",
            "screen_1080": "1080px",
            'mq1': '1075px',
            'mq2': '1023px',
            "screen_970": "970px",
            'mq3': '967px',
            "screen_860": "860px",
            'mq4': '851px',
            //-----------------------------
          },
        extend: {
            colors: {
                color_primary: '#7d4ed2',
                color_fourth: '#27262c',
                color_inverse: '#1fc7d4ff',
                color_hover: '#a8a1c8',
                color_hover_nav: '#353547',
                color_secondary: '#faf9fa',
                color_tertiary: '#ffffff',
                color_text: '#280d5f',
                color_text_sub: '#7a6eaa',
                color_inverse_hover: '#6ddbe3',
                color_secondary_dm: '#08060b',
                color_text_dm: '#eef4ff',
                color_inverse_hover_dm: '#228f99',
                //ANCHOR - FRANCESCO-color
                color_net: '#eff4f5',
                color_nav_top: '#492287',
                color_nav_top_inner: '#492e75',
                color_nav_hover: '#eff4f5',
                color_warning_top: '#ffb237',
                color_warning_center: '#bdc2c4',
                color_warning_mobile_up: '#5b3f91',
                color_warning_mobile_down: '#3c2563',
                color_title_settings: '#7645d9',
                color_top_settings: '#eeeff4',
                color_btn_settings: '#eff4f5',
                color_darkM_button_net: '#353547',
                color_darkM_text_nav: '#b8add2',
                color_darkM_border_nav: '#383241',
                color_darkM_hover: '#353547',
                color_ethereum: '#627AD8',
                linear_gradient_home3_white: 'bg-gradient-to-b from-white to-[#d7cbec]',
                //-----------------------------
            },
            fontSize: {
                fs_xxxl: '88px',
                fs_xxl: '40px',
                fs_xl: '32px',
                fs_lg: '24px',
                fs_md: '20px',
                fs_sm: '16px',
                fs_xs: '14px',
                fs_xxs: '12px',
                fs_xxxs: ' 9px',
                fs_l: "28px",
                fs_Spain: '64px',
            },
            fontFamily: {
                Kanit: ['Kanit'],
            },
            boxShadow: {
                "bs_sha": '0px 1px 0px 0px rgba(14, 14, 14,0.4)',
                //ANCHOR - FRANCESCO-boxShadow
                "net_sha": '0px 2px 0px 0px rgba(215, 219, 220, 1)',
                "net_shaD": '0px 2px 0px 0px rgba(48, 48,64, 1)',
                //-----------------------------
            },
            spacing: {
                //ANCHOR - FRANCESCO-spacing
                '6.5': '1.625rem',
                '7.5': '1.875rem',
                '14,5' : '3.563rem',
                '17': '4.25rem',
                '17,5' : '4.375rem',
                '17,9': '4.469rem',
                '23' : '5.75rem',
                '30,25' : '7.563rem',
                '31,5' : '7.875rem',
                '34': '8.3rem',
                '37,644' : '9.411rem',
                '49' : '12.25rem',
                '50': '12.5rem',
                '66,875' : '16.719rem',
                '69,5' : '17.375rem',
                '87,933' : '21.983rem',
                '92' : '23rem',
                '111,218' : '27.805rem',
                '120,75' : '30.188rem',
                '126,257' : '31.564rem',
                '134,75' : '33.688rem',
                '162': '40.5rem',
                '200': '50rem',//800px
                '277,75' : '69.438rem',
                '6,4': '75rem',
                '95%' : '95%',
                '99%' : '99%',
                //-----------------------------
            },
            zIndex: {
                //ANCHOR - FRANCESCO-zindex
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '996': '996',
                '997': '997',
                '998': '998',
                //-----------------------------
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 38s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-100%)' },
                }
            }
        }
    }
}