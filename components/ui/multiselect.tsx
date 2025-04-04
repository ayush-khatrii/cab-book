// Example update for the Multiselect component
import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import { XCircle } from 'lucide-react';

interface MultiselectProps {
	cities: string[];
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
	onAddCity?: (city: string) => void;
	onRemoveCity?: (city: string) => void;
}

const Multiselect = ({ cities, setCities, onAddCity, onRemoveCity }: MultiselectProps) => {
	const [inputValue, setInputValue] = useState('');

	const handleAddCity = () => {
		if (inputValue.trim()) {
			if (onAddCity) {
				onAddCity(inputValue.trim());
			} else {
				setCities((prev) => [...prev, inputValue.trim()]);
			}
			setInputValue('');
		}
	};

	const handleRemoveCity = (city: string) => {
		if (onRemoveCity) {
			onRemoveCity(city);
		} else {
			setCities((prev) => prev.filter((c) => c !== city));
		}
	};

	return (
		<div className="space-y-4">
			<div className="flex gap-2">
				<Input
					placeholder="Add city"
					value={inputValue}
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
						<span>{city}</span>
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