import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="bg-blue-500 p-8 pt-16">
        <Text className="text-white text-3xl font-bold text-center">
          Uniwind Test
        </Text>
        <Text className="text-blue-100 text-center mt-2">
          Testing Tailwind CSS with Uniwind in React Native
        </Text>
      </View>

      {/* Content Section */}
      <View className="p-6">
        <View className="bg-gray-100 rounded-lg p-4 mb-4">
          <Text className="text-gray-800 text-lg font-semibold mb-2">
            🎉 Uniwind is Working!
          </Text>
          <Text className="text-gray-600">
            If you can see styled components with colors and spacing, Uniwind is properly configured.
          </Text>
        </View>

        {/* Test Cards */}
        <View className="space-y-4">
          <View className="bg-green-500 p-4 rounded-xl shadow-lg">
            <Text className="text-white font-bold text-xl">Success Card</Text>
            <Text className="text-green-100 mt-1">Green background with rounded corners</Text>
          </View>

          <View className="bg-purple-500 p-4 rounded-xl shadow-lg">
            <Text className="text-white font-bold text-xl">Purple Card</Text>
            <Text className="text-purple-100 mt-1">Purple background with shadow</Text>
          </View>

          <View className="bg-orange-500 p-4 rounded-xl shadow-lg">
            <Text className="text-white font-bold text-xl">Orange Card</Text>
            <Text className="text-orange-100 mt-1">Orange background with padding</Text>
          </View>
        </View>

        {/* Button-like View */}
        <View className="mt-8">
          <View className="bg-indigo-600 py-4 px-6 rounded-full">
            <Text className="text-white text-center font-semibold text-lg">
              Tap to Test (Demo Button)
            </Text>
          </View>
        </View>

        {/* Status Text */}
        <View className="mt-8 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
          <Text className="text-yellow-800 font-medium">
            ✅ If all these elements are styled correctly, Uniwind is working perfectly!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
