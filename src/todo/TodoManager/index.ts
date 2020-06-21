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

export const toggleTodo = (index: number) => {
    const allTodo = entriesTodo();
    allTodo[index].done = !getTodo(index).done;
    setTodo(allTodo);
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

export const removeTodoByDate = (date: number): TodoPayload[] => {
    const prev = entriesTodo();
    const index = prev.findIndex((v) => v.date === date);
    prev.splice(index, 1);
    setTodo(prev);
    return entriesTodo();
};
