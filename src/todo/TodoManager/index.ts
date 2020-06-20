import { TodoPayload } from '../../payloads/TodoPayload';

const KEY = 'TODO';

export const isEmpty = (): boolean => {
    return !localStorage.getItem(KEY);
};

export const entriesTodo = (): TodoPayload[] => {
    if (isEmpty()) return [];
    return JSON.parse(localStorage.getItem(KEY)!!);
};

export const getTodo = (index: number): TodoPayload => {
    return JSON.parse(localStorage.getItem(KEY)!!)[index];
};

export const setTodo = (data: TodoPayload[]): void => {
    localStorage.setItem(KEY, JSON.stringify(data));
};

export const addTodo = (content: string, done: boolean = false): void => {
    if (isEmpty()) localStorage.setItem(KEY, JSON.stringify([]));
    const prev = entriesTodo();
    const data = {
        content,
        date: new Date().getTime(),
        done,
    };
    setTodo([data, ...prev]);
};

export const removeTodo = (index: number): boolean => {
    const prev = entriesTodo();
    prev.slice(index, 1);
    setTodo(prev);
    return true;
};
