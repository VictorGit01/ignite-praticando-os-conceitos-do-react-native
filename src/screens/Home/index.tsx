import { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    FlatList,
    Alert,
} from 'react-native';
import { getRandomBytes } from 'expo-random';

import { styles } from './styles';
import { colors } from '../../styles/colors';
import { AntDesign as Icon } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import { EmptyList } from '../../components/EmptyList';

type TaskProps = {
    id: string;
    name: string;
    done: boolean;
    created_at: Date;
}

export function Home() {
    const [ tasks, setTasks ] = useState<TaskProps[]>([]);
    const [ taskName, setTaskName ] = useState("");
    const [ createdCounter, setCreatedCounter ] = useState(0);
    const [ doneCounter, setDoneCounter ] = useState(0);

    function handleTaskAdd() {
        const taskAlreadyExists = tasks.find(task => {
            return task.name.trim().toLowerCase() === taskName.trim().toLowerCase();
        });

        if (!taskName.trim()) {
            return Alert.alert("Tarefa sem nome!", "Por favor digite um nome para sua tarefa!");
        }
        
        if (taskAlreadyExists) {
            return Alert.alert("Tarefa existente!", "Ops!!! Parece que você já possui essa tarefa na lista.");
        }

        const task = {
            id: getRandomBytes(24).toString(),
            name: taskName,
            done: false,
            created_at: new Date(),
        }

        setTasks(prevState => [...prevState, task]);
        setTaskName("");

        setCreatedCounter(prevState => prevState += 1);
    }

    function handleTaskDone({ id, done }: TaskProps) {
        const updatedTasks = tasks.filter(task => {
            if (task.id === id) {
                task.done = !task.done;
            }

            return task;
        });

        setTasks(updatedTasks);

        setDoneCounter(prevState => !done ? prevState += 1 : prevState -= 1);
    }

    function handleTaskRemove({ id, done }: TaskProps) {
        Alert.alert("Remover tarefa", "Deseja mesmo remover essa tarefa da sua lista?", [
            {
                text: "Sim",
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task.id !== id));
                    setCreatedCounter(prevState => prevState -= 1);
                    setDoneCounter(prevState => prevState > 0 && done ? prevState -= 1 : prevState);
                },
            },
            {
                text: "Não",
                style: "cancel",
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Header />
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={colors.gray_300}
                    cursorColor={colors.white}
                    value={taskName}
                    onChangeText={setTaskName}
                />
                
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleTaskAdd}
                    activeOpacity={.6}
                >
                    <Icon
                        name='pluscircleo'
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tasksContainer}>
                <View style={styles.infoContainer}>
                    <View style={styles.createdDoneContainer}>
                        <Text style={styles.createdName}>
                            Criadas
                        </Text>
                        
                        <View style={styles.counter}>
                            <Text style={styles.counterText}>
                                {createdCounter}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.createdDoneContainer}>
                        <Text style={styles.doneName}>
                            Concluídas
                        </Text>

                        <View style={styles.counter}>
                            <Text style={styles.counterText}>
                                {doneCounter}
                            </Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Task
                            name={item.name}
                            done={item.done}
                            onDone={() => handleTaskDone(item)}
                            onRemove={() => handleTaskRemove(item)}
                        />
                    )}
                    ListEmptyComponent={() => <EmptyList />}
                />
            </View>

        </View>
    );
}