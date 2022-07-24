import styled from "styled-components";
import { TopArea } from "./TopArea";
import LinksArea from "./LinksArea";
import { StartArea } from "./StartArea";
import { UserDataProps } from "../../types";

export const Index = ({ user }: UserDataProps) => {
  return (
    <Container>
      <Pfp src={user.pfp} alt={user.name} />

      <SideArea>
        <TopArea
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          pfp={user.pfp}
        />

        <StartArea
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />

        <LinksArea links={user.links}/>
      </SideArea>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};

  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;

  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  a {
    all: unset;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Pfp = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;

const SideArea = styled.div`
  width: 100%;
`;
