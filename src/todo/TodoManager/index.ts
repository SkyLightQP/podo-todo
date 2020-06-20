import { TodoPayload } from '../../payloads/TodoPayload';

const KEY = 'TODO';

export const isEmpty = (): boolean => {
    return localStorage.length > 0;
};

export const entriesTodo = (): TodoPayload[] => {
    return JSON.parse(localStorage.getItem(KEY)!!);
};

export const getTodo = (index: number): TodoPayload => {
    return JSON.parse(localStorage.getItem(KEY)!!)[index];
};

export const setTodo = (data: TodoPayload[]): void => {
    localStorage.setItem(KEY, JSON.stringify(data));
};

export const addTodo = (content: string, done: boolean = false): void => {
    if (isEmpty()) localStorage.setItem(KEY, JSON.stringify({}));
    const prev = entriesTodo();
    prev.push({
        content,
        date: new Date().getTime(),
        done,
    });
    setTodo(prev);
};

export const removeTodo = (index: number): boolean => {
    const prev = entriesTodo();
    prev.slice(index, 1);
    setTodo(prev);
    return true;
};
