import {createNativeStackNavigator} from "@react-navigation/native-stack"; //importa a biblioteca
import { Home } from "../screens/home"; //importa o acesso para navegar pela tela
import { Menu } from "../screens/menu";

const {Screen, Navigator} = createNativeStackNavigator(); // cria a navegação em pilha

export function StackRoutes(){ //faça rotas para cada contexto da aplicação
    return(
        <Navigator>
            <Screen
                name = "Home" // quando esta rotafor chamadaé 
                component = {Home} //define qual tela terá que renderizar
            />

            <Screen
            name = "Menu"
            component = {Menu}
             />
        </Navigator>
    );
}
