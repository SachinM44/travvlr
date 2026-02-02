import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 pt-16">
        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Explore
        </Text>
        <Text className="text-gray-600 mb-8">
          This is the explore tab with Uniwind styling
        </Text>

        {/* Feature Cards */}
        <View className="space-y-4">
          <View className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <Text className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Ready for Development
            </Text>
            <Text className="text-gray-600">
              Your app is now set up with Uniwind and ready for large-scale development.
            </Text>
          </View>

          <View className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <Text className="text-xl font-semibold text-gray-800 mb-2">
              🎨 Tailwind CSS Classes
            </Text>
            <Text className="text-gray-600">
              Use any Tailwind CSS class directly in your React Native components with Uniwind.
            </Text>
          </View>

          <View className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <Text className="text-xl font-semibold text-gray-800 mb-2">
              📱 Cross Platform
            </Text>
            <Text className="text-gray-600">
              Works seamlessly on iOS, Android, and Web platforms.
            </Text>
          </View>
        </View>

        {/* Status Indicator */}
        <View className="mt-8 bg-green-100 p-4 rounded-lg border border-green-200">
          <Text className="text-green-800 font-medium text-center">
            ✅ Uniwind is successfully configured!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}