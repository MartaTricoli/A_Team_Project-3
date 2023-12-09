tailwind.config = {
    theme: {
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
            },
            fontFamily: {
                Kanit: ['Kanit'],
            },
            boxShadow: {
                "bs_sha": '0px 1px 0px 0px rgba(14, 14, 14,0.4)',
                //ANCHOR - FRANCESCO-boxShadow
                "net_sha": '0px 2px 0px 0px rgba(215, 219, 220, 1)',
                //-----------------------------
            },
            spacing: {
                //ANCHOR - FRANCESCO-spacing
                '17,5' : '4.375rem',
                '17,9': '4.469rem',
                '23' : '5.75rem',
                '30,25' : '7.563rem',
                '37,644' : '9.411rem',
                '49' : '12.25rem',
                '66,875' : '16.719rem',
                '69,5' : '17.375rem',
                '87,933' : '21.983rem',
                '92' : '23rem',
                '111,218' : '27.805rem',
                '126,257' : '31.564rem',
                '277,75' : '69.438rem',
                '99%' : '99%',
                //-----------------------------
            },
            zIndex: {
                //ANCHOR - FRANCESCO-zindex
                '996': '996',
                '997': '997',
                '998': '998',
                //-----------------------------
            }
        }
    }
}