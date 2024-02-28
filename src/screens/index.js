import { View, Text } from 'react-native'
import { styles } from './styles'
import { Header } from '../components/Header'

// criando a tela Home
export function HomeScreen() {
   // criar uma view que será a "container" principal
   return (       // estilos da tela home
      <View style={styles.container}>
         <Header />
      </View>
   )
}
