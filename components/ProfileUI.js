import React, { Component } from 'react';
import { Text, View,StyleSheet,ScrollView,Alert } from 'react-native';  
        const intiState = {
            staffID: '', 
            staffName: '',  
            items:[], 
        }
        
export default class Profile extends Component {
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
                <View style={styles.container}>
                    <View style={styles.Top}>
                        <View style={styles.ProfileImage}></View>
                    </View>

                    <View style={styles.center}>
                        <Text>Profile Name</Text>
                    </View>

 
                    <View style={styles.Bottom}>
                         <View style={styles.Item}> 
                            <Text>Item 01</Text>
                         </View>

                         <View style={styles.Item}> 
                            <Text>Item 02</Text>
                         </View>

                         <View style={styles.Item}> 
                            <Text>Item 03</Text>
                         </View>

                         <View style={styles.Item}> 
                            <Text>Item 04</Text>
                         </View>
                    </View>






                </View>
             );
            }
        }
        
        
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  Top:{
      height:'45%',
      backgroundColor:'#2f3640',
      justifyContent:'center',
      alignItems: 'center',
  },
  ProfileImage:{
      width:140,
      height:140,
      borderRadius:100,
      borderWidth:4,
      borderColor:'#fff',
      backgroundColor:'#8c7ae6',
  },
  center:{
    height:'10%',
    backgroundColor:'#44bd32',
    justifyContent:'center', 
    paddingLeft: 40,
  },
  Bottom:{
    height:'45%',
    backgroundColor:'#2f3640', 
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  Item:{
      margin:15,
      backgroundColor:'#8c7ae6',
      height:'40%',
      width:'40%',
      justifyContent:'center',
      alignItems: 'center',
  }


});