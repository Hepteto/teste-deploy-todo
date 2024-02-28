import { View, ActivityIndicator } from 'react-native'
                // componente do react native para spinner
import { styles } from './styles'
import { theme } from '../../theme'

// criando o loading
export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={50} color={theme.colors.brand.purple_yam}/>
            {/* spinner */}              {/* cor do tema */}
        </View>
    )
}
