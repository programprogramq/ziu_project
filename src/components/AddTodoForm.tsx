import { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface AddTodoFormProps {
    onAdd: (title: string) => void;
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedValue = inputValue.trim();
        if (!trimmedValue) return;

        onAdd(trimmedValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <TextField
                fullWidth
                size="small"
                label="Dodaj zadanie"
                value={inputValue}
                onChange={(e:any) => setInputValue(e.target.value)}
            />

            <Button
                type="submit"
                variant="contained"
                disabled={!inputValue.trim()}
            >
                Dodaj
            </Button>
        </form>
    );
}