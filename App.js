import React, { useState, useEffect } from 'react';
//import plus from './assets/plus.png'

import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator, // spinner
  TextInput, 
  //Button,
  Pressable, // Botão Personalizado
  Image,
} from 'react-native';

                              // componente do react native para spinner
// import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

// import { Header } from './src/components/Header';
// import { stylesHeader } from './src/components/Header/styles';
// import TAREFANDOO from './assets/TAREFANDOO.png' // importando o logo

// fonte usada
import {
  useFonts, 
  Inter_400Regular
} from '@expo-google-fonts/inter'

import { stylesButton, stylesHomeScreen, stylesTasks } from './src/screens/Home/styles';
import { theme } from './src/theme';

const plua = require('./src/assets/plus.png'); 

const API_URL = 'https://todo-xfvj.onrender.com/todo';

// const Header = () => {
//   return (
//     <View style={stylesHeader.headerContainer}>
//         {/* logo */}
//         <Image source={TAREFANDOO} style={{height: '5rem', width: '23.875rem'}}/>
//                                         {/* definindo os tamanhos do logo */}
//         {/* definindo os estilos do formulário a partir do componente View */}
//         <View style={stylesHeader.form}>
//             {/* Input */}
//             <TextInput style={stylesHeader.input}/>
//             {/* Botão */}
//             <TouchableOpacity style={stylesHeader.button}>
//                 <Text></Text>
//             </TouchableOpacity>
//         </View>
//     </View>
// )
// }

const Button = (props) => {
  const { onPress, title = 'Nova tarefaAAAAA' } = props;
  return(
  <Pressable style={stylesButton.button} onPress={onPress}>
  <Text style={stylesButton.text}>{title}</Text>
  <Image source={require('./src/assets/plus.png')} style={{height:25, width:25}}/>
  </Pressable>
  )
}


const HomeScreen = () => {
  // Carrega a fonte do google fonts
          // desestruturando
                        // passando a fonte em objeto para o hook
  const  [fontsLoaded] = useFonts({
    Inter_400Regular
  })

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskType, setTaskType] = useState('');
  const [taskSituaction, setTaskSituaction] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // ADICIONAR
  const addTask = async () => {
    if (newTask.trim() === '') {
      alert('Por favor, insira um nome para a tarefa.');
      return;
    }
    try {
      const response = await axios.post(API_URL, {
        tarefa: newTask,
        desc: taskDesc,
        categoria: taskType,
        situacao: taskSituaction,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // DELETAR
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTask = async (taskId) => {
    try {
      await axios.put(`${API_URL}/${taskId}`, {
        tarefa: newTask,
        desc: taskDesc,
        categoria: taskType,
        situacao: taskSituaction,
      })
      setTasks([...tasks, response.data]);
      setNewTask('');

      <View key={task.id}>
          {/* <Button title={task.tarefa} onPress={() => getTask(task.id)}>*/}
          <Text>{task.tarefa}</Text>
          {/* </Button> */}
          <Text>{task.desc}</Text>
          <Text>{task.categoria}</Text>
          <Text>{task.situacao}</Text>
          <Button title="Excluir" onPress={() => deleteTask(task.id)} />
          <Button title="Editar" onPress={() => updateTask(task.id)} />
        </View>
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }

  // FAAAZEEEEERRRRRR AAAQUUIIIIIIIII!!!!!!!!!!!!!!!!!!!! ~~~~~~~~~~~~~~~~~~~~
  const getTask = async (taskId) => {
    try {
      await axios.get(`${API_URL}/${taskId}`);
      setTasks( tasks.map(
        tasks.filter(task => task.id !== taskId)));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <View style={stylesHomeScreen.container}>
      {/* se as fontes não foram carregadas */}
      {!fontsLoaded ? ( 
      <ActivityIndicator size={50} />
      ) : (
        // se foi carregado
        <>
        
          {/* TODAS AS TAREFAS + EXCLUIR */}
          <Text style={stylesHomeScreen.title}>Minhas Listas</Text>
          {tasks.map(task => (
            <View key={task.id}>
              {/* <Button title={task.tarefa} onPress={() => getTask(task.id)}>*/}
              <View style={[stylesTasks.container, stylesTasks.shadowProp]}>
                <Text style={[stylesTasks.text]}>{task.tarefa}</Text>
              </View>
              
              {/* </Button> */}
              {/* <Text style={stylesTasks.text}>{task.desc}</Text>
              <Text style={stylesTasks.text}>{task.categoria}</Text>
              <Text style={stylesTasks.text}>{task.situacao}</Text> */}
              <Button title="Excluir" onPress={() => deleteTask(task.id)} />
              <Button title="Editar" onPress={() => updateTask(task.id)} />
            </View>
          ))}


          {/* Nova tarefa */}
          <Text>================================================================</Text>
          <Text>== Nova Tarefa ==</Text>

          <TextInput
            placeholder="Nome da tarefa"
            value={newTask}
            onChangeText={text => setNewTask(text)}
          />

          <TextInput
            placeholder="Descrição da tarefa"
            value={taskDesc}
            onChangeText={text => setTaskDesc(text)}
          />

          <TextInput
            placeholder="Categoria da tarefa"
            value={taskType}
            onChangeText={text => setTaskType(text)}
          />
      {/* 'Casa', 'Trabalho', 'Outros', 'Estudos' */}

          {/* <Button title="Adicionar Tarefa" onPress={addTask} color={theme.colors.brand.naples_yellow}/> */}

            <Button></Button>

          <Text>================================================================</Text>
          <Text>== Editar Tarefa ==</Text>

        </>
      )}
    </View>
  );
};

export default HomeScreen;
