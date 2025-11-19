import { Button } from '../common-componentes/button/button';
import { Header } from '../common-componentes/Header/Header';

export function Search() {
	return (
		<div>
			<Header />
			<Button ghost={true}>Buscar</Button>
		</div>
	);
}