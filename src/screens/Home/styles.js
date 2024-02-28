import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

// criando  a estilização do componente de acordo com as informações passadas por parâmetro.
// TELA HOME
export const stylesHomeScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.base.ghost_white,
        padding: theme.spacing.lg, // espaçamento entre os componentes internos
        marginTop: theme.spacing.sm,
    },
    // titulo
    title: {
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.xl, // tamanho da fonte
        marginBottom: theme.spacing.lg,
    },

    // form: {
    //     width: '100%', 
    //     height: '5rem', 
    //     flexDirection: 'row',
    //     alignItems: 'center', 
    //     justifyContent: 'center'
    // },

    // input:{
    //     width: '100%', 
    //     height: '75%',
    //     backgroundColor: theme.colors.base.white,
    // }


    //tarefas
})

// Tarefas
export const stylesTasks = StyleSheet.create({
    container: {
        width: '100%', 
        //height: '5rem', 
        backgroundColor: theme.colors.base.white_smoke,
        borderRadius: theme.borderRadius.tasks,
        
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs,
        
        marginBottom: theme.spacing.md,
        elevation: 3
    },
    // titulo
    text: {
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.md, // tamanho da fonte
    },

    // ios
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },      
})

// Botões
export const stylesButton = StyleSheet.create({
    button: {
        //display: inline-block, ______ AQUIIIIII
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.brand.naples_yellow,

        paddingVertical: theme.spacing.xs,
        marginBottom: theme.spacing.md,

        borderRadius: 15,
        elevation: 3,
      },
    text:{
        fontSize: theme.font_size.md,
    },

    // ios
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },    
    // android
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
})