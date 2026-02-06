import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';
import { useThemeStore } from '@/constants/themes/useThemeStore';

export default function RootLayout() {
  const colors = useThemeStore((state) => state.colors);

  return (
    <View style={{ flex: 1, backgroundColor: colors.neutral.white }}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.neutral.white },
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}