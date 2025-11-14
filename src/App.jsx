import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/detalhes/:id" element={<Details />} />
                <Route path="/" element={<Search />} />
                <Route path="*" element={<div>Página não encontrada</div>} />
            </Routes>
        </Router>
    );
}