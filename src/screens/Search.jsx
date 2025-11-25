import { Button } from "../common-components/Button/Button.jsx";

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
