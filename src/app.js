import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const ImageProfileGithub = 'https://avatars.githubusercontent.com/u/107804949?s=96&v=4'
const urlToMyGithub = 'https://github.com/ggkelly'

const App = () => {
    const handlePressGoToGithub = async ()=>{
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res){
            console.log('Link aprovado');
            console.log('Abrindo link...');
            await Linking.openURL(urlToMyGithub);
        }
    }
    return (
    <SafeAreaView style = {style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle= "light-content">
        </StatusBar>
        <View style={style.content}>
          <Image accessibilityLabel='Grace Meu Quarto'
           style={style.avatar} source={{uri: ImageProfileGithub}}/> 
           <Text 
           accessibilityLabel= "Nome: Grace Kelly" 
           style={[style.defaultText, style.name]}>Grace Kelly
           </Text>
           <Text 
           accessibilityLabel= "Nickname: ggkelly" 
           style={[style.defaultText, style.nickname]}>ggkelly
           </Text>
           <Text 
           accessibilityLabel= "Descrição: Estudante de Análise e desenvolvimento de Sistemas" 
           style={[style.defaultText, style.description]}>Estudante de Análise e desenvolvimento de Sistemas
           </Text>
           <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>
                Open in Github
                </Text>
            </View>
           </Pressable>
        </View>   
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',//alinhar ítens no centro
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color:colorFontGithub,

    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        color:colorDarkFontGithub,
        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
