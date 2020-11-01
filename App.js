import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
      isSearchPressed:false,
      word: "",
      lexicalCatergory: '',
      examples: [],
      defination: "",
    };
  }

  getWord=(word)=>{

    var searchKeyword=word.toLowerCase();
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+ keyword + ".json"

    return fetch(url)

    .then((data)=>{
      if(data.status === 200){
        return data.json()
      }
      else{
        return null
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'green'}
          centerComponent={{
            text: 'DICTIONARY APP',
            style: { color: '#fff' },
          }}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 5,
            marginTop: 80,
            textAlign: 'center',
          }}
          onChangeText={(text) => {
            this.setState({ 
            text: text,
            isSearchPressed:false,
            word : "Loading...",
            lexicalCatergory: '',
            examples: [],
            defination: "",
           });
          }}
          value={this.state.text}
        />
        <Text style={styles.tstyle}>{this.state.displayText}</Text>
        <TouchableOpacity
          style={styles.bstyle}

          onPress={() => this.setState({ isSearchPressed: true }),
          
          this.getWord(this.state.text)}>

          <Text>Search</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bstyle: {
    alignSelf: 'center',
    marginTop: 180,
    borderWidth: 3,
    backgroundColor: 'pink',
  },

  tstyle: {
    alignSelf: 'center',
    marginTop: 90,
  },
});