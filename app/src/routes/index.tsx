import {NavigationContainer} from "@react-navigation/native"; // permite integração de rotas
import {StackRoutes} from "./stack.routes"; //importa a funcionalidade de rotas

export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}