import { StyleSheet } from 'react-native'
import { theme } from '../theme'

// criando  a estilização do componente de acordo com as informações passadas por parâmetro.
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.base.ghost_white,
    },
    // titulo
    title: {
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.lg // tamanho da fonte
    }
})