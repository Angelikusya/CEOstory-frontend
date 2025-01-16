import { useState, useEffect } from "react";
import './SearchLine.css';

const SearchLine = ({ setFilteredData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const debounce = setTimeout(() => {
            // Вызов функции фильтрации здесь
            setFilteredData(searchTerm);
        }, 300);

        return () => clearTimeout(debounce);
    }, [searchTerm, setFilteredData]);

    return (
        <div className="SearchLine">
            <input
                autoFocus
                type="text"
                autoComplete="off"
                placeholder="Поиск"
                onChange={(e) => setSearchTerm(e.target.value)}
                className=""
            />
        </div>
    );
};

export default SearchLine;
