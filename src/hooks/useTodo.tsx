import React, { createContext, useContext, useEffect, useState } from 'react';
import { TodoPayload } from '../payloads/TodoPayload';
import { entriesTodo } from '../todo/TodoManager';

const context = createContext<any>([]);

export const TodoContext: React.FC = ({ children }) => {
    const todoState = useState<TodoPayload[]>([]);

    useEffect(() => {
        todoState[1](entriesTodo);
    }, []);

    return <context.Provider value={todoState}>{children}</context.Provider>;
};

export const useTodo = () => useContext(context);
