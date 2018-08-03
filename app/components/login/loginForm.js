import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    Image, 
    Dimensions, 
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
        }
    }

    // async logInFB() {
    //     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('311969105966201', {
    //         permissions: ['public_profile', 'email'],
    //       });
    //     if (type === 'success') {
    //       // Get the user's name using Facebook's Graph API
    //       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}?fields=id,name,email`)
    //                              .then(res => res.json())
    //                              .then(user => this.setState({ userInfo: user }))
    //                              .catch((e) => console.log(e));      
    //     }
    //   }




    static navigationOptions = {
        tabBarLabel: "Login",
        drawerIcon: () => {
          return (
            <MaterialIcons
                name="add-circle"
                size={24}
                color="black"
            >
            </MaterialIcons>
          );
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Welcome</Text> 
                    </View>
                </View>
            <View style={styles.photoContainer}>
                <Image
                    style={{ width: 200, height: 120 }}
                    source={require('../../../media/Logo.png')}
                ></Image>
                <Text style={styles.logoFontRed}>e-
                    <Text style={styles.logoFontBlue}>Contribution Card</Text>
                </Text>
            </View>
            <TouchableOpacity 
                style={styles.fbButton}>
                <Image
                    style={{ width: 29, height: 29 }}
                    source={require('../../../media/FB-f-Logo__white_29.png')}
                ></Image>
                <Text style={styles.btnText}>Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.gButton}>
                <Image
                    style={{ width: 52, height: 52, padding: 0, margin: 0 }}
                    source={require('../../../media/btn_google_light_focus_ios.png')}
                ></Image>
                <Text style={styles.btnTextG}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signButton}>
                <Text style={styles.signUp}>Don't have an Account yet? Sign Up</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const Window = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    header: {
      flexDirection: 'row',
      backgroundColor: "red",
      alignItems: 'center',
      justifyContent: 'center',
      width: Window.width,
      height: 70,
    },
    iconContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    photoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300
    },
    logoFontRed: {
        marginTop: 15,  
        fontSize: 35,
        color: 'red'
    },
    logoFontBlue: {
        marginTop: 15,  
        fontSize: 35,
        color: 'blue'
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 20
    },
    fbButton: {
        flexDirection: "row",
        elevation: 4,
        height: 50,
        width: 260,
        backgroundColor:'#3C5894',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0,
    },
    gButton: {
        elevation: 4,
        flexDirection: "row",
        height: 50,
        width: 260,
        backgroundColor:'#5086EC',
        justifyContent: "flex-start",
        alignItems: "center",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0,
        marginTop: 15
    },
    signButton: {
        elevation: 4,
        flexDirection: "row",
        height: 50,
        width: 260,
        backgroundColor:'#fff',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'blue',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0
    },
    btnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10
    },
    btnTextG: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15
    },
    signUp: {
        color: 'blue',
    }
});


export default LoginForm;