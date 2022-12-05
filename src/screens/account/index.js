import React from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../../components/Auth/LoginForm';
import UserData from '../../components/Auth/userData';
import useAuth from '../../hooks/useAuth';

export default function Account() {
  const  { auth } = useAuth();
  return (
    <SafeAreaView>
      {auth ? <UserData/> : <LoginForm/>}
    </SafeAreaView>
  );
}
