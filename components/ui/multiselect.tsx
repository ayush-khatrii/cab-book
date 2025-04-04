// Example update for the Multiselect component
import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import { XCircle } from 'lucide-react';

interface MultiselectProps {
	cities: string[];
	onCitiesChange: (cities: string[]) => void;
	onAddCity?: (city: string) => void;
	onRemoveCity?: (city: string) => void;
}

const Multiselect = ({ cities, onCitiesChange, onAddCity, onRemoveCity }: MultiselectProps) => {
	const [inputValue, setInputValue] = useState('');

	const handleAddCity = () => {
		if (inputValue.trim()) {
			if (onAddCity) {
				onAddCity(inputValue.trim());
			} else {
				onCitiesChange([...cities, inputValue.trim()]);
			}
			setInputValue('');
		}
	};

	const handleRemoveCity = (city: string) => {
		if (onRemoveCity) {
			onRemoveCity(city);
		} else {
			onCitiesChange(cities.filter((c) => c !== city));
		}
	};

	return (
		<div className="space-y-4">
			<div className="flex gap-2 mt-2">
				<Input
					placeholder="Add city"
					value={inputValue}
					className='text-sm'
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							handleAddCity();
						}
					}}
				/>
				<Button type="button" onClick={handleAddCity}>
					Add
				</Button>
			</div>
			<div className="flex flex-wrap gap-2">
				{cities.map((city, index) => (
					<div
						key={index}
						className="flex items-center bg-accent px-3 py-1 rounded-full"
					>
						<span className='text-sm'>{city}</span>
						<XCircle
							className="ml-2 h-4 w-4 cursor-pointer"
							onClick={() => handleRemoveCity(city)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Multiselect;