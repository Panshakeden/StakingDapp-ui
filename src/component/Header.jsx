import { Flex } from "@radix-ui/themes";
import Popup from "./Popup";

export default function Header({ name, setName }) {
    return (
        <div className="flex justify-between items-center mt-2">
            <h1 className="text-3xl font-bold">Staking</h1>
            <Flex gap={"4"} align={"center"}>
                <Popup name={name} setName={setName} />
                <w3m-button />
            </Flex>
        </div>
    );
}