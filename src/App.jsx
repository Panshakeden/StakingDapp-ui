import { Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import Stake from "./component/Stake";


configureWeb3Modal();



function App() {



    return (
        <Container>
            <Header />
            <main className="mt-6">
                <div className="flex flex-col gap-2 mb-4 mt-2">
                    <p className="text-gray-500">Stake here.</p>
                </div>
                <Stake />
            </main>
        </Container>
    );
}

export default App;
