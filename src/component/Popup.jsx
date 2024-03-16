import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";

const Popup = ({ name, setName }) => {
    const [rate, setRate] = useState(0)
    const handlePool = useCreatePool()

    return (<Dialog.Root>
        <Dialog.Trigger className="bg-blue-600 text-white text-center text-lg py-2">
            <Button>Create Pool</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Create Staking Pool</Dialog.Title>

            <Flex direction="column" gap="3">
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Pool&apos;s Name
                    </Text>
                    <TextField.Input
                        defaultValue={name}
                        placeholder="Enter the name of your pool"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Pool&apos;s Reward Rate
                    </Text>
                    <TextField.Input
                        defaultValue={rate}
                        placeholder="Enter reward rate"
                        onChange={(e) => setRate(e.target.value)}
                    />
                </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                        Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button variant="soft"
                        color="blue"
                        onClick={() => handlePool(rate)}
                    >Create</Button>
                </Dialog.Close>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>)
};
export default Popup;