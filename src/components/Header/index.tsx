import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AsyncStorageKeyEnum } from '../../enums/AsyncStorageKeyEnum';
import { RouteNameEnum } from '../../enums/RouteNameEnum';

import { removeItem } from '../../services/AsyncStorage';

import {
  CaretLeftIcon,
  Container,
  Content,
  CustomStatusBar,
  GoBackButton,
  SignOutButton,
  SignOutButtonIcon,
  Title,
} from './styles';

interface HeaderProps {
  text: string;
  backgroundColor?: string;
  canGoBack?: boolean;
  canSignOut?: boolean;
}

export function Header({
  text,
  backgroundColor,
  canGoBack = false,
  canSignOut = false,
}: HeaderProps) {
  const { goBack, reset } = useNavigation();

  const handleSignOut = useCallback(async () => {
    await removeItem(AsyncStorageKeyEnum.TOKEN);
    reset({
      index: 0,
      routes: [
        {
          name: RouteNameEnum.SIGN_IN,
        },
      ],
    });
  }, [reset]);

  return (
    <>
      <CustomStatusBar />
      <Container backgroundColor={backgroundColor}>
        <Content>
          {canGoBack ? (
            <GoBackButton onPress={goBack}>
              <CaretLeftIcon />
              <Title>{text}</Title>
            </GoBackButton>
          ) : (
            <Title>{text}</Title>
          )}
          {canSignOut && (
            <SignOutButton onPress={handleSignOut}>
              <SignOutButtonIcon />
            </SignOutButton>
          )}
        </Content>
      </Container>
    </>
  );
}
