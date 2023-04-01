import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';


const ScreenHome = () => {
  const [isFetchData, setIsFetchData] = useState(false);
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('');
  const [borderColour, setBorderColour] = useState('grey')

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
      setData(json);
      setIsFetchData(true);
    })
  }

  const renderItem = ({item: {title, thumbnailUrl}}) => {
    return (
      <View style={styles.wrapperItem}>
        <View style={styles.row}>
          <View style={styles.wrapperImage}>
            <Image source={{uri: thumbnailUrl}} style={styles.image} resizeMode={'cover'} />
          </View>
          <View style={{width: 140}}>
            <Text style={styles.textTitle} numberOfLines={1} >{title}</Text>
            <Text style={styles.textDesc} numberOfLines={1}>{title}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonJoin}>
          <Text style={styles.texJoin}>Join</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const onChange = (value) => {
    if (value.length > 0) {
      const filterData = data.filter(item => item.title.toLowerCase().substring(0, 3) === value.toLowerCase());

      return setData(filterData);
    }

    return fetchData();
  }

  const handleChange = (value) => {
    setInputText(value)
    setTimeout(() => {
      onChange(value)
    }, 2000);
  }

  const onFocus = () => {
    setBorderColour('blue');
  }

  const onBlur = () => {
    setBorderColour('grey');
  }
  
  return (
    <View style={styles.container}>
       {!isFetchData && (
        <View style={styles.wrapperContent}>
        <TouchableOpacity style={styles.button} onPress={fetchData}>
          <Text style={styles.textButton}>
            Fetch data
          </Text>
        </TouchableOpacity>
      </View>
      )}
      {isFetchData && (
      <>
        <Input styleContainer={styles.wrapperHeader} styleTextInput={[styles.textInput, {borderColor: borderColour}]} onBlur={onBlur} onFocus={onFocus} value={inputText} onChange={handleChange} />
        <FlatList
          ItemSeparatorComponent={() => <View style={{height: 8, width: '100%'}} />}
          contentContainerStyle={styles.wrapperList}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </>
      )}
    </View>
  )
}

export default ScreenHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  textButton: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  wrapperItem: {
   backgroundColor: 'white',
   borderRadius: 8,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   overflow: 'hidden',
   paddingRight: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  wrapperImage: {
    width: 90,
    height: 80,
    marginRight: 8,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  wrapperList: {
    padding: 16
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'green',
    marginBottom: 8
  },
  textDesc: {
    fontSize: 14,
    fontWeight: '500'
  },
  buttonJoin: {
    width: 80,
    height: 40,
    borderRadius: 18,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 8
  },
  texJoin: {
    color: 'white',
    fontSize: 18,
  },
  wrapperHeader: {
    margin: 16,
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 8,
  }
})