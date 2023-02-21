import { View, Text, TouchableOpacity } from 'react-native';

import { Octicons as Icon } from '@expo/vector-icons'

import { styles } from './styles';

type Props = {
    name: string;
    done: boolean;
    onDone: () => void;
    onRemove: () => void;
}

export function Task({ name, done, onDone, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onDone}>
                <Icon
                    name={done ? "check-circle-fill" : "circle"}
                    style={styles.checkIcon}
                />
            </TouchableOpacity>
            <Text style={[
                styles.name,
                { 
                    textDecorationLine: done 
                    ? "line-through" 
                    : "none" 
                }
            ]}>
                {name}
            </Text>
            <TouchableOpacity onPress={onRemove}>
                <Icon
                    name="trash"
                    style={styles.trashIcon}
                />
            </TouchableOpacity>
        </View>
    );
}