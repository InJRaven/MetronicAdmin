/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx,scss}", // Adjust paths to your project structure
    ],
    darkMode: "class", // Enable dark mode using the class strategy
    theme: {
      extend: {
        base: {
            colors: {
                gray: {
                    light: {
                        100: '#F9F9F9',
                        200: '#F1F1F4',
                        300: '#DBDFE9',
                        400: '#C4CADA',
                        500: '#99A1B7',
                        600: '#78829D',
                        700: '#4B5675',
                        800: '#252F4A',
                        900: '#071437',
                    },
                    dark: {
                        100: '#1B1C22',
                        200: '#26272F',
                        300: '#363843',
                        400: '#464852',
                        500: '#636674',
                        600: '#808290',
                        700: '#9A9CAE',
                        800: '#B5B7C8',
                        900: '#F5F5F5'
                    }
                },
                contextual: {
                    light: { 
                        brand: {
                            default: '#FF6F1E',
                            active: '#F15700',
                            light: '#FFF5EF',
                            clarity: 'rgba(255, 111, 30, 0.20)',
                            inverse: '#ffffff'
                        },
                        primary: {
                            default: '#1B84FF',
                            active: '#056EE9',
                            light: '#EFF6FF',
                            clarity: 'rgba(27, 132, 255, 0.20)',
                            inverse: '#ffffff'
                        },
                        success: {
                            default: '#17C653',
                            active: '#04B440',
                            light: '#EAFFF1',
                            clarity: 'rgba(23, 198, 83, 0.20)',
                            inverse: '#ffffff'
                        },
                        info: {
                            default: '#7239EA',
                            active: '#5014D0',
                            light: '#F8F5FF',
                            clarity: 'rgba(114, 57, 234, 0.20)',
                            inverse: '#ffffff'
                        },
                        danger: {
                            default: '#F8285A',
                            active: '#D81A48',
                            light: '#FFEEF3',
                            clarity: 'rgba(248, 40, 90, 0.20)',
                            inverse: '#ffffff'
                        },
                        warning: {
                            default: '#F6B100',
                            active: '#DFA000',
                            light: '#FFF8DD',
                            clarity: 'rgba(246, 177, 0, 0.20)',
                            inverse: '#ffffff'
                        },
                        dark: {
                            default: '#1E2129',
                            active: '#111318',
                            light: '#F9F9F9',
                            clarity: 'rgba(30, 33, 41, 0.20)',
                            inverse: '#ffffff'
                        },
                        light: {
                            default: '#ffffff',
                            active: '#FCFCFC',
                            light: '#ffffff',
                            clarity: 'rgba(255, 255, 255, 0.20)',
                            inverse: '#4B5675'
                        },
                        secondary: {
                            default: '#F9F9F9',
                            active: '#F9F9F9',
                            light: '#F9F9F9',
                            clarity: 'rgba(249, 249, 249, 0.20)',
                            inverse: '#4B5675'
                        }
                    },
                    dark: {
                        brand: {
                            default: '#D74E00',
                            active: '#F35700',
                            light: '#272320',
                            clarity: 'rgba(215, 78, 0, 0.20)',
                            inverse: '#ffffff',
                        },
                        primary: {
                            default: '#006AE6',
                            active: '#107EFF',
                            light: '#172331',
                            clarity: 'rgba(0, 106, 230, 0.20)',
                            inverse: '#ffffff'
                        },
                        success: {
                            default: '#00A261',
                            active: '#01BF73',
                            light: '#1F2623',
                            clarity: 'rgba(0, 162, 97, 0.20);',
                            inverse: '#ffffff'
                        },
                        info: {
                            default: '#883FFF',
                            active: '#9E63FF',
                            light: '#272134',
                            clarity: 'rgba(136, 63, 255, 0.20)',
                            inverse: '#ffffff'
                        },
                        danger: {
                            default: '#E42855',
                            active: '#FF3767',
                            light: '#302024',
                            clarity: 'rgba(228, 40, 85, 0.20)',
                            inverse: '#ffffff'
                        },
                        warning: {
                            default: '#C59A00',
                            active: '#D9AA00',
                            light: '#242320',
                            clarity: 'rgba(197, 154, 0, 0.20)',
                            inverse: '#ffffff'
                        },
                        dark: {
                            default: '#272A34',
                            active: '#2D2F39',
                            light: '#1E2027',
                            clarity: 'rgba(39, 42, 52, 0.20)',
                            inverse: '#ffffff'
                        },
                        light: {
                            default: '#1F212A',
                            active: '#1F212A',
                            light: '#1F212A',
                            clarity: 'rgba(31, 33, 42, 0.20)',
                            inverse: '#9A9CAE'
                        },
                        secondary: {
                            default: '#363843',
                            active: '#464852',
                            light: '#363843',
                            clarity: 'rgba(54, 56, 67, 0.20)',
                            inverse: '#9A9CAE'
                        },
                    }
                }
            },
            boxShadows: {
                light: {
                    default: '0px 4px 12px 0px rgba(0, 0, 0, 0.09)',
                    light: '0px 3px 4px 0px rgba(0, 0, 0, 0.03)',
                    primary: '0px 4px 12px 0px rgba(40, 132, 239, 0.35)',
                    success: '0px 4px 12px 0px rgba(53, 189, 100, 0.35)',
                    danger: '0px 4px 12px 0px rgba(241, 65, 108, 0.35)',
                    info: '0px 4px 12px 0px rgba(114, 57, 234, 0.35)',
                    warning: '0px 4px 12px 0px rgba(246, 192, 0, 0.35)',
                    dark: '0px 4px 12px 0px rgba(37, 47, 74, 0.35)'
                },
                dark: {
                    default: 'none',
                    light: 'none',
                    primary: 'none',
                    success: 'none',
                    danger: 'none',
                    info: 'none',
                    warning: 'none',
                    dark: 'none'
                }
            }
        },
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        colors: {
            gray: {
                100: 'var(--tw-gray-100)',
                200: 'var(--tw-gray-200)',
                300: 'var(--tw-gray-300)',
                400: 'var(--tw-gray-400)',
                500: 'var(--tw-gray-500)',
                600: 'var(--tw-gray-600)',
                700: 'var(--tw-gray-700)',
                800: 'var(--tw-gray-800)',
                900: 'var(--tw-gray-900)',
            },
            primary: {
                DEFAULT: 'var(--tw-primary)',
                active: 'var(--tw-primary-active)',
                light: 'var(--tw-primary-light)',
                clarity: 'var(--tw-primary-clarity)',
                inverse: 'var(--tw-primary-inverse)',
            },
            success: {
                DEFAULT: 'var(--tw-success)',
                active: 'var(--tw-success-active)',
                light: 'var(--tw-success-light)',
                clarity: 'var(--tw-success-clarity)',
                inverse: 'var(--tw-success-inverse)',
            },
            warning: {
                DEFAULT: 'var(--tw-warning)',
                active: 'var(--tw-warning-active)',
                light: 'var(--tw-warning-light)',
                clarity: 'var(--tw-warning-clarity)',
                inverse: 'var(--tw-warning-inverse)',
            },
            danger: {
                DEFAULT: 'var(--tw-danger)',
                active: 'var(--tw-danger-active)',
                light: 'var(--tw-danger-light)',
                clarity: 'var(--tw-danger-clarity)',
                inverse: 'var(--tw-danger-inverse)',
            },
            info: {
                DEFAULT: 'var(--tw-info)',
                active: 'var(--tw-info-active)',
                light: 'var(--tw-info-light)',
                clarity: 'var(--tw-info-clarity)',
                inverse: 'var(--tw-info-inverse)',
            },
            dark: {
                DEFAULT: 'var(--tw-dark)',
                active: 'var(--tw-dark-active)',
                light: 'var(--tw-dark-light)',
                clarity: 'var(--tw-dark-clarity)',
                inverse: 'var(--tw-dark-inverse)',
            },
            secondary: {
                DEFAULT: 'var(--tw-secondary)',
                active: 'var(--tw-secondary-active)',
                light: 'var(--tw-secondary-light)',
                clarity: 'var(--tw-secondary-clarity)',
                inverse: 'var(--tw-secondary-inverse)',
            },
            light: {
                DEFAULT: 'var(--tw-light)',
                active: 'var(--tw-light-active)',
                light: 'var(--tw-light-light)',
                clarity: 'var(--tw-light-clarity)',
                inverse: 'var(--tw-light-inverse)',
            },
            brand: {
                DEFAULT: 'var(--tw-brand)',
                active: 'var(--tw-brand-active)',
                light: 'var(--tw-brand-light)',
                clarity: 'var(--tw-brand-clarity)',
                inverse: 'var(--tw-brand-inverse)',
            },
            coal: {
                100: '#15171C',
                200: '#13141A',
                300: '#111217',
                400: '#0F1014',
                500: '#0D0E12',
                600: '#0B0C10',
                black: '#000000',
                clarity: 'rgba(24, 25, 31, 0.50)',
            }
        },
        boxShadow: {
            card: 'var(--tw-card-box-shadow)',
            default: 'var(--tw-default-box-shadow)',
            light: 'var(--tw-light-box-shadow)',
            primary: 'var(--tw-primary-box-shadow)',
            success: 'var(--tw-success-box-shadow)',
            danger: 'var(--tw-danger-box-shadow)',
            info: 'var(--tw-info-box-shadow)',
            warning: 'var(--tw-warning-box-shadow)',
            dark: 'var(--tw-dark-box-shadow)',
        },
        fontSize: {
            '4xs': [
                '0.5625rem', 								// 9px
                {
                    lineHeight: '0.6875rem' 	// 11px
                }
            ],
            '3xs': [
                '0.625rem',									// 10px
                {						
                    lineHeight: '0.75rem' 		// 12px
                }
            ],
            '2xs': [
                '0.6875rem',								// 11px
                {						
                    lineHeight: '0.75rem', 		// 12px
                }
            ],
            '2sm': [
                '0.8125rem',								// 13px
                {						
                    lineHeight: '1.125rem' 		// 18px
                }
            ],
            'md': [
                '0.9375rem',								// 15px
                {						
                    lineHeight: '1.375rem' 		// 22px
                }
            ],
            '1.5xl': [
                '1.375rem',									// 22px
                {						
                    lineHeight: '1.8125rem' 	// 29px
                }
            ],
            '2.5xl': [
                '1.625rem',									// 26px
                {						
                    lineHeight: '2.125rem' 		// 34px
                }
            ]
        },
        lineHeight: {
            '0': '0', 					// 0px
            '5.5': '1.375rem', 	// 22px
        },
        zIndex: {
            1: '1',
            5: '5',
            15: '15',
            25: '25',
        },
        borderWidth: {
            3: '3px',
        },
        spacing: {
            0.75: '0.1875rem', 	// 3px
            1.25: '0.3rem',		 	// 5px
            1.75: '0.4375rem', 	// 7px
            2.25: '0.563rem', 	// 9px
            2.75: '0.688rem', 	// 11px
            4.5: '1.125rem', 		// 18px
            5.5: '1.375rem', 		// 22px
            6.5: '1.625rem', 		// 26px
            7.5: '1.875rem', 		// 30px
            12.5: '3.125rem', 	// 40px
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        }
    },
    },
    plugins: [],
  };
  