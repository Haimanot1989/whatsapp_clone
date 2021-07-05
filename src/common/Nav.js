import styled from "styled-components";
import { FiShare2 } from "react-icons/fi";

const Container = styled.div`
  margin: 30px auto;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 10px;
  list-style: none;
  background-color: #28957f;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  color: #fff;
  font-family: sans-serif;
  height: 55px;
  align-items: center;
  .col-1 {
    grid-column: 1/2;
  }
  .col-2 {
    grid-column: 2/10;
  }
  .col-3 {
    grid-column: 10/11;
  }
  .col-4 {
    grid-column: 11/12;
  }
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
    id: 2,
    title: "NextConnect",
  },
  {
    id: 3,
    title: "Profile",
  },
  {
    id: 4,
    title: "Sign out",
  },
];
const Nav = () => (
  <Container>
    <List>
      <ListItem className="col-1">
        <FiShare2></FiShare2>
      </ListItem>
      {navItems.map(({ id, title }) => (
        <ListItem key={id} className={`col-${id}`}>
          <Title>{title.toUpperCase()}</Title>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Nav;
