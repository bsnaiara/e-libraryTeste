import React, {Component} from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaPesquisa from './screens/TelaPesquisa';
import TelaTransacao from './screens/TelaTransacao';

const Tab = createBottomTabNavigator();

export default class BotaoTabNavegador extends Component{
    render(){
        return(
          <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Transação" component={TelaTransacao}/>
                <Tab.Screen name="Pesquisa" component={TelaPesquisa}/>
            </Tab.Navigator>
          </NavigationContainer>
        );
    }
}