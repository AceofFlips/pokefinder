import {Text, View, ScrollView, Pressable} from "react-native";
import { Link } from 'expo-router';
import { useTheme } from '../../components/themes/context';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Sidebar from "../../components/Sidebar";
import UI from "../../components/UI";
export default function Home()  {

  return (
    <ScrollView className="flex h-screen bg-background">
      <UI/>
    </ScrollView>
  );};

