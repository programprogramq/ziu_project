import { useReducer, useState } from 'react';
import type { Todo, FilterType } from './types/todo.type';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoItem } from './components/TodoItem';
import { FilterBar } from './components/FilterBar';
import { todoReducer } from './reducers/todoReducer';

import { Container, Typography, Paper } from '@mui/material';

export default function App() {
    const [todos, dispatch] = useReducer(todoReducer, [] as Todo[]);
    const [filter, setFilter] = useState<FilterType>('all');

    const handleAdd = (title: string) => {
        dispatch({ type: 'ADD', payload: title });
    };

    const handleToggle = (id: string) => {
        dispatch({ type: 'TOGGLE', payload: id });
    };

    const handleDelete = (id: string) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const activeCount = todos.filter(t => !t.completed).length;

    return (
        <Container maxWidth="sm" className="mt-10">
            <Paper className="p-6 shadow-xl rounded-2xl">
                <Typography variant="h4" className="mb-4 text-center">
                    Todo App
                </Typography>

                <AddTodoForm onAdd={handleAdd} />

                <div className="mt-4 flex justify-between items-center">
                    <FilterBar
                        activeFilter={filter}
                        onFilterChange={setFilter}
                    />
                    <Typography variant="body2">
                        {activeCount} active
                    </Typography>
                </div>

                <ul className="mt-4 space-y-2">
                    {filteredTodos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            </Paper>
        </Container>
    );
}