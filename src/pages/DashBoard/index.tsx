import React from 'react';

import { useAuth } from '../../hooks/Auth';

import Button from '../../components/Button';
import { Container, Title } from './styles';

const DashBoard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>DashBoard</Title>
      <Button onPress={() => signOut()}>Sair</Button>
    </Container>
  );
};

export default DashBoard;
