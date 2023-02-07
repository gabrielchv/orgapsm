import { AlertDialog, Box, Button, Input, Slider, Text } from "native-base";
import React from "react";
import { useState } from "react";
import { Task } from "../../utils/types";

const DialogSimpleTask = ({
  isOpen,
  setIsOpen,
  setTasks,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const cancelRef = React.useRef(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [importance, setImportance] = useState(0);

  const resetData = () => {
    setName("");
    setDescription("");
    setImportance(0);
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={() => setIsOpen(false)}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Adicionar task simples</AlertDialog.Header>
        <AlertDialog.Body>
          <Input
            isInvalid={name === "" && submitted}
            invalidOutlineColor="red.500"
            bgColor={name === "" && submitted ? "red.50" : undefined}
            onChangeText={(text) => {
              setName(text);
            }}
            placeholder="Nome da task"
          />
          <Input
            isInvalid={description === "" && submitted}
            invalidOutlineColor="red.500"
            bgColor={description === "" && submitted ? "red.50" : undefined}
            mt="2"
            onChangeText={(text) => {
              setDescription(text);
            }}
            placeholder="Descrição da task"
          />
          <Box mt="2">
            <Text textAlign="center">Selecionar nível da task</Text>
            <Box flexDir="row">
              <Button
                flex="1"
                mr="1"
                onPress={() => setImportance(1)}
                backgroundColor={
                  importance === 1 ? "warmGray.600" : "warmGray.400"
                }
                _pressed={{ backgroundColor: "warmGray.500" }}
              >
                1
              </Button>
              <Button
                backgroundColor={
                  importance === 2 ? "warmGray.600" : "warmGray.400"
                }
                _pressed={{ backgroundColor: "warmGray.500" }}
                flex="1"
                mx="1"
                onPress={() => setImportance(2)}
              >
                2
              </Button>
              <Button
                backgroundColor={
                  importance === 3 ? "warmGray.600" : "warmGray.400"
                }
                _pressed={{ backgroundColor: "warmGray.500" }}
                flex="1"
                ml="1"
                onPress={() => setImportance(3)}
              >
                3
              </Button>
            </Box>
          </Box>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              colorScheme="danger"
              onPress={() => {
                setIsOpen(false);
                resetData();
              }}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="green"
              onPress={() => {
                setIsOpen(false);
                resetData();
                setTasks((oldTasks) => [
                  ...oldTasks,
                  { name: name, date: new Date(), importance: importance },
                ]);
              }}
            >
              Criar
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default DialogSimpleTask;
