import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import clipboard from '../../assets/clipboard.png';

export function EmptyList() {
    return (
        <View style={styles.container}>
            <Image 
                source={clipboard} 
                style={styles.img}
            />
            <Text style={[styles.text, styles.strong]}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.text}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    );
}