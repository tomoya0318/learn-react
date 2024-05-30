import { ChakraProvider } from '@chakra-ui/react';
import Todo from "./components/Todo"

const App: React.FC = () => {
    return (
        <>
            <ChakraProvider>
                <Todo />
            </ChakraProvider>
        </>
    )
}

export default App
