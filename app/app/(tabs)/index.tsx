import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  return (
   <SafeAreaView>
     <Pressable>
      <View style=''>
        <Text> hell there </Text>
        <Button size='medium' buttonType='primary' >hello there dd</Button>
        <Input state='error' placeholder='hello there '/>
      </View>
    </Pressable>
   </SafeAreaView>
  );
}
