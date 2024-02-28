import { View, Image, TextInput, TouchableOpacity} from 'react-native'
import { stylesHeader } from './styles'

import TAREFANDOO from '../../assets/TAREFANDOO.png' // importando o logo

// REMOVER APÓS
//import { TextInput, TouchableOpacity } from 'react-native-web'

// criando o componente Header
export function Header() {
    return (
        <View style={stylesHeader.headerContainer}>
            {/* logo */}
            <Image source={TAREFANDOO} style={{height: '5rem', width: '23.875rem'}}/>
                                            {/* definindo os tamanhos do logo */}
            {/* definindo os estilos do formulário a partir do componente View */}
            <View style={stylesHeader.form}>
                {/* Input */}
                <TextInput style={stylesHeader.input}/>
                {/* Botão */}
                <TouchableOpacity style={stylesHeader.button}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
