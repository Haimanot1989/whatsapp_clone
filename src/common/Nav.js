import styled from "styled-components";

const Container = styled.div`
  margin: 30px auto;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 80% repeat(2, 1fr);
  list-style: none;
  background-color: #28957f;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  color: #fff;
  font-family: sans-serif;
`;

const ListItem = styled.li`
  padding: 10px 0px;
  &:first-of-type {
    border-top: none;
  }
`;

const Title = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
`;
const navItems = [
  {
    id: 1,
    title: "NextConnect",
  },
  {
    id: 2,
    title: "Profile",
  },
  {
    id: 3,
    title: "Sign out",
  },
];
const Nav = () => (
  <Container>
    <List>
      {navItems.map(({ id, title }) => (
        <ListItem key={id}>
          <Title>{title.toUpperCase()}</Title>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Nav;
