import type { FilterType } from '../types/todo.type';
import { ButtonGroup, Button } from '@mui/material';

interface FilterBarProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
    const filters: FilterType[] = ['all', 'active', 'completed'];

    return (
        <ButtonGroup size="small" variant="outlined">
            {filters.map((f) => (
                <Button
                    key={f}
                    variant={activeFilter === f ? 'contained' : 'outlined'}
                    onClick={() => onFilterChange(f)}
                >
                    {f}
                </Button>
            ))}
        </ButtonGroup>
    );
}