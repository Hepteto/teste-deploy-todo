import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

// criando  a estilização do componente de acordo com as informações passadas por parâmetro.
export const stylesHeader = StyleSheet.create({
    headerContainer: {
        backgroundColor: theme.colors.brand.purple_yam,
        alignItems: 'center', // centralizar os itens do container
        justifyContent: 'center', //  distribuir os itens do container
    },
    form: {
        width: '100%', 
        height: '5rem', 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center'
    },

    input:{
        width: '100%', 
        height: '75%',
        backgroundColor: theme.colors.base.white,
        borderRadius: 25,
        padding: 16,
        fontSize: theme.font_size.xl,
    },

    // sombra IOS
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    // sombra Android
    elevation: {
        elevation: 20,
        shadowColor: '#000000',
    },

    button: {
        height: 54,
        width: 54,
        borderRadius: 25,
        backgroundColor: theme.colors.brand.naples_yellow,
        alignItems: 'center',
        justifyContent: 'center',

    }
    // logo: {
    //     width: 1242,
    //     height: 260,
    // },
})