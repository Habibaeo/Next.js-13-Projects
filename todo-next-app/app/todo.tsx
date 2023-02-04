"use client";
import React, { useState } from "react";
import {
  Flex,
  Text,
  Box,
  HStack,
  Button,
  Input,
  List,
  ListItem,
  Checkbox,
} from "@chakra-ui/react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    { todoText: "todo 1", completed: false },
    { todoText: "todo 2", completed: true },
    { todoText: "todo 3", completed: false },
    { todoText: "todo 4", completed: false },
    { todoText: "todo 5", completed: true },
  ]);

  const onChangeHandler = (myele: any) => {
    const newTodo = todoList.map((todo) => {
      if (todo.todoText == myele.todoText) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    setTodoList(newTodo);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todoList, newTodo];
    setTodoList(newTodos);
    setTodo("");
  };
  const deleteTodo = (myTodo: any) => {
    const newTodos1 = todoList.filter((todo) => {
      if (todo.todoText == myTodo.todoText) return false;
      return true;
    });
    setTodoList(newTodos1);
  };
  return (
    <Flex
      direction="column"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      
      bgGradient='linear(to-r, gray.300, cyan.400, purple.200)'
    >
      <Flex direction="column" minW='200' minH='350' boxShadow='dark-lg'
      bgGradient='linear(red.100 0%, green.100 25%, blue.100 50%)' p="32px" rounded={15}>
        <HStack mt='-1' mr='-2' mb="20px">
          <Input
            background="gray.300"
            placeholder="Enter Todo Task"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <Button
            h="6"
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, teal.500, green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
            colorScheme="teal"
            onClick={addTodo}
          >
            Add
          </Button>
        </HStack>

        <Box >
          <List >
            {todoList.map((ele) => {
              return (
                <Flex>
                  <ListItem
                    alignItems="start"
                    ml="5px"
                    style={{
                      color: ele.completed ? "green" : "red",
                      fontStyle: "normal",
                      fontWeight: '500'
                      
                    }}
                    key={ele.todoText}
                  >
                    <Checkbox
                      bg="grey"
                      mr={2}
                      type={"checkbox"}
                      defaultChecked={ele.completed}
                      onChange={() => {
                        onChangeHandler(ele);
                      }}
                    />
                    {ele.todoText}
                    <Button
                      h="6"
                      ml="80px"
                      mb="10px"
                      color="white"
                      fontWeight="bold"
                      borderRadius="md"
                      bgGradient="linear(to-r, teal.500, green.500)"
                      _hover={{
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                      onClick={() => {
                        deleteTodo(ele);
                      }}
                    >
                      Delete
                    </Button>
                  </ListItem>
                </Flex>
              );
            })}
          </List>
        </Box>
      </Flex>
    </Flex>
  );
}
