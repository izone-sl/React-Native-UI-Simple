import React, { Component } from 'react';
import { Text, View,StyleSheet,ImageBackground,Image,TextInput,TouchableOpacity,KeyboardAvoidingView,ScrollView  } from 'react-native';  

 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import bgimage from '../images/bgImage.png';
import logo from '../images/logo.png';


        const intiState = {
            staffID: '', 
            staffName: '',  
            items:[], 
        }
        
export default class Login extends Component {
    constructor(props){
        super(props); 
        this.state =intiState; 
    }
    componentDidMount(){
        
    }
    
    onPressSubmit = () =>{
         // code 
    }
    
    render() {
        return (
           
            <KeyboardAvoidingView style={styles.container}  behavior="padding" >
            <ScrollView>
                <ImageBackground source={bgimage} style={styles.Backgroundcontainer}>

                         <View style={styles.logoContainer}>
                             <Image source={logo} style={styles.logo}></Image>
                             <Text style={styles.logoText}>Alexa</Text>
                         </View>

                          

                         <View style={styles.InputContainer}>
                             <MaterialCommunityIcons name="email"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'First Name...'}
                                 placeholderTextColor={'gray'}
                                 returnKeyType='next'
                                 underlineColorAndroid='transparent'
                             ></TextInput>
                         </View>
                         <View style={styles.InputContainer}>
                             <MaterialCommunityIcons name="email"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'Last Name...'}
                                 placeholderTextColor={'gray'}
                                 returnKeyType='next'
                                 underlineColorAndroid='transparent'
                             ></TextInput>
                         </View>
                         <View style={styles.InputContainer}>
                             <MaterialCommunityIcons name="email"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'Phone Number...'}
                                 placeholderTextColor={'gray'}
                                 returnKeyType='next'
                                 underlineColorAndroid='transparent'
                             ></TextInput>
                         </View>
                         <View style={styles.InputContainer}>
                             <MaterialCommunityIcons name="email"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'Email...'}
                                 placeholderTextColor={'gray'}
                                 returnKeyType='next'
                                 underlineColorAndroid='transparent'
                             ></TextInput>
                         </View>
                         <View  style={styles.InputContainer}>
                             <MaterialCommunityIcons name="textbox-password"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'Password'}
                                 secureTextEntry={true}
                                 placeholderTextColor={'gray'}
                                 underlineColorAndroid='transparent'
                             ></TextInput> 
                         </View>
                         <View  style={styles.InputContainer}>
                             <MaterialCommunityIcons name="textbox-password"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'Confirm Password'}
                                 secureTextEntry={true}
                                 placeholderTextColor={'gray'}
                                 underlineColorAndroid='transparent'
                             ></TextInput> 
                         </View>
                         <View  style={styles.InputContainer}>
                             <MaterialCommunityIcons name="textbox-password"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'text 01'}
                                 secureTextEntry={true}
                                 placeholderTextColor={'gray'}
                                 underlineColorAndroid='transparent'
                             ></TextInput> 
                         </View>
                         <View  style={styles.InputContainer}>
                             <MaterialCommunityIcons name="textbox-password"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'text 02'}
                                 secureTextEntry={true}
                                 placeholderTextColor={'gray'}
                                 underlineColorAndroid='transparent'
                             ></TextInput> 
                         </View>
                         <View  style={styles.InputContainer}>
                             <MaterialCommunityIcons name="textbox-password"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'text 03'}
                                 secureTextEntry={true}
                                 placeholderTextColor={'gray'}
                                 underlineColorAndroid='transparent'
                             ></TextInput> 
                         </View>
                         <View  style={styles.InputContainer}>
                             <MaterialCommunityIcons name="textbox-password"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'text 04'}
                                 secureTextEntry={true}
                                 placeholderTextColor={'gray'}
                                 underlineColorAndroid='transparent'
                             ></TextInput> 
                         </View>
                         <View  style={styles.InputContainer}>
                             <MaterialCommunityIcons name="textbox-password"  style={styles.icon} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.Input}
                                 placeholder={'text 05'}
                                 secureTextEntry={true}
                                 placeholderTextColor={'gray'}
                                 underlineColorAndroid='transparent'
                             ></TextInput> 
                         </View>
                         <View  style={styles.InputContainer}>
                             <MaterialCommunityIcons name="message"  style={styles.iconMessage} size={20} color="white" />
                    
                             <TextInput
                                 style={styles.InputMessage}
                                 placeholder={'Write Your Message ...'}
                                 placeholderTextColor={'gray'}
                                 multiline
                                 underlineColorAndroid='transparent'
                             ></TextInput> 
                         </View>

                         <TouchableOpacity   style={styles.btnLogin}>
                            <Text style={{color:'#fff'}}> Login </Text>
                                 
                        </TouchableOpacity>
                        <View style={{ height: 60 }} />
                </ImageBackground>
                </ScrollView>
                </KeyboardAvoidingView>
               
               
                
             );
            }
        }
        
        
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff', 
        justifyContent: 'center',
    },

    Backgroundcontainer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        width:null,
        height:null
  },
  logoContainer:{
    marginTop:50,
    alignItems: 'center',
    marginBottom: 50,
  },
  logo:{
      width:120,
      height:120,
      opacity:0.3
  },
  logoText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'500',
    opacity:0.3
  },
  InputContainer:{
    marginTop:10
  },
  Input:{
      width:300,
      borderWidth:1,
      borderColor:'#fff',
      height:40,
      borderRadius:25,
      paddingLeft:56,
      paddingTop:8,
      paddingBottom:8,
      paddingRight:8,
      color:'#fff'
  },
  InputMessage:{
      width:300,
      borderWidth:1,
      borderColor:'#fff',
      height:70,
      borderRadius:25,
      paddingLeft:56,
      paddingTop:8,
      paddingBottom:8,
      paddingRight:8,
      color:'#fff'
  },
  icon:{
      position:'absolute',
      top: 8,
      left:15 
  },
  iconMessage:{
      position:'absolute',
      top: 25,
      left:15 
  },
  btnLogin:{
      marginTop:10,
      backgroundColor:'#273c75',
      width:300,
      borderRadius:25,
      alignItems:'center',
      padding: 10,
  },
  errorText:{
      padding:10,
      color:'#fff',
      backgroundColor:'red',
      borderRadius:25,
      marginTop:10
  }
});