import { View, Text,Image,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import InputText from '../components/InputText'
import ButtonGlobal from '../components/ButtonGlobal'
import {loginApi} from '../api/user'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../hooks/useAuth'
import { Button } from 'react-native-paper'
// import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const {login} = useAuth()
  const formik = useFormik({
    initialValues: {
      username:"",
      password:""
    },
    validationSchema:Yup.object(validationSchema()),
    onSubmit: async (formData)=>{
      setLoading(true)
      try {
        console.log(formData);
        const response = await loginApi(formData);  
        console.log('esta es la respuesta',response);  
        if(response.statusCode) throw "Usuario o email no encontrado"
        login(response)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      console.log(formData)
    }
  })
  return (
    <View style={styles.container}>
      <Image
        style={{height:200}}
        source={{uri:'https://media-exp1.licdn.com/dms/image/C4D0BAQGP-ejhVfKdDg/company-logo_200_200/0/1629499461903?e=2147483647&v=beta&t=-8AtlhwWmoVBkE9oXMRpNw-1CHhPkNzYeVRRrSyGhmM'}}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.titulo}>Login</Text>
        <InputText
          label = 'Nombre de usuario'
          secure = {false}
          name = 'username'
          onChangeText={(text)=>formik.setFieldValue("username",text)}
          error ={formik.errors.username}
          values={formik.values.username} 
        /> 
        <InputText
          label = 'Contraseña'
          name = 'password'
          secure = {true}
          onChangeText={(text)=>formik.setFieldValue("password",text)}
          error ={formik.errors.password}
          values={formik.values.password}
        /> 

        {/* <ButtonGlobal
          onPress={formik.handleSubmit}
          loading={loading}
          label={'ingresar'}
        />        */}
        <Button 
          color='#005650'
          style = {styles.buttonStyle}
          mode='contained'
          onPress={formik.handleSubmit}
          loading={loading}
        >
          Ingresar
        </Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  cardContainer:{
    flex:1,
    paddingHorizontal:20
  },
  titulo:{
    fontSize:30,
    textAlign:'center',
    marginVertical:20,
    color:'#005650'
  },
  buttonStyle:{
    marginVertical:20,
    height:40
  }
})

function validationSchema(){
  return {
    username:Yup.string().required(true),
    password:Yup.string().required(true)
  }
}