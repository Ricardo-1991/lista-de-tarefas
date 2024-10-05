import { View, Text, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../../types/navigation';

import { HeaderApp } from '../../components/Header';
import { Container, HeaderTask, InputContainer, Main, TextTitle } from './style';
import { Input } from './style';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TaskItem } from './Components/TaskItem';
import { TaskContext } from '../../context/TaskContext';
import { useContext, useState } from 'react';

export function Tasks() {
  const { tasks } = useContext(TaskContext);
  const [searchText, setSearchText] = useState(''); 
  const navigation = useNavigation<RootNavigationProp>();

  
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <HeaderApp>
        <HeaderTask>
          <TextTitle>LISTA DE TAREFAS</TextTitle>
          <InputContainer>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name="search1" size={20} color="#aaa" style={{ position: 'absolute', left: 10, zIndex: 1 }} />
              <Input 
                placeholder='Buscar' 
                value={searchText} 
                onChangeText={text => setSearchText(text)}
              />
            </View>
            <AntDesign onPress={() => navigation.navigate('FormRegisterScreen')} name="pluscircle" size={50} color='#00B37E' />
          </InputContainer>
        </HeaderTask>
      </HeaderApp>
      <Main>
        <FlatList 
          data={filteredTasks} 
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TaskItem task={item} />}
          ListEmptyComponent={() => <Text style={{ textAlign: 'center', marginTop: 20, color: '#FFFFFF'}}>Nenhuma tarefa cadastrada</Text>}
        />
      </Main>
    </Container>
  );
}
