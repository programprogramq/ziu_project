import type { Todo } from '../types/todo.type';
import { Checkbox, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <Paper className="flex items-center justify-between p-2">
            <div className="flex items-center">
                <Checkbox
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />

                <span
                    className={`ml-2 ${
                        todo.completed ? 'line-through text-gray-400' : ''
                    }`}
                >
                    {todo.title}
                </span>
            </div>

            <IconButton onClick={() => onDelete(todo.id)}>
                <DeleteIcon />
            </IconButton>
        </Paper>
    );
}