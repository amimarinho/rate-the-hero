import { Button } from "../common-componentes/Button/Button";
import { Caption } from "../common-componentes/Caption/Caption";
import { Card } from "../common-componentes/Card/Card";
import { Description } from "../common-componentes/Description/Description";
import { Header } from "../common-componentes/Header/Header";
import { HeadingOne } from "../common-componentes/HeadingOne/HeadingOne";
import { HeadingTwo } from "../common-componentes/HeadingTwo/HeadingTwo";
import { SearchField } from "../common-componentes/SearchField/SearchField";
import { Subtitle } from "../common-componentes/Subtitle/Subtitle";
export function Search() {
  return (
    <div>
      <Header />
      <SearchField placeholder="Digite um nome de herói ou heroína" />
      <Button ghost={true}>Buscar</Button>
      <Card>
        <HeadingOne>Heading One</HeadingOne>
        <HeadingTwo>Heading Two</HeadingTwo>
        <div>
          <Subtitle>Subtitle</Subtitle>
        </div>
        <Description>Description</Description>
        <div>
          <Caption>Caption</Caption>
        </div>
      </Card>
    </div>
  );
}
