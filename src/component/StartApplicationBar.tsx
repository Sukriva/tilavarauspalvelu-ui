import { Button as HDSButton, IconArrowRight } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';

import {
  SelectionsListContext,
  SelectionsListContextType,
} from '../context/SelectionsListContext';

const BackgroundContainer = styled.div`
  background-color: var(--color-bus);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
`;

const ReservationUnitCount = styled.div`
  font-size: var(--fontsize-body-xl);
  font-weight: 500;
`;

const Button = styled(HDSButton)`
  font-family: HelsinkiGrotesk-Bold, var(--font-default);
  background-color: white;
  margin-left: var(--spacing-m);
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: var(--color-white);
`;

const StartApplicationBar = (): JSX.Element | null => {
  const { t } = useTranslation();
  const { reservationUnits } = React.useContext(
    SelectionsListContext
  ) as SelectionsListContextType;
  const history = useHistory();
  if (reservationUnits.length === 0) {
    return null;
  }

  return (
    <BackgroundContainer>
      <Container style={{ padding: 'var(--spacing-m) var(--spacing-m)' }}>
        <InnerContainer>
          <ReservationUnitCount id="reservationUnitCount">
            {t('shoppingCart.count', { count: reservationUnits.length })}
          </ReservationUnitCount>
          <Button
            id="startApplicationButton"
            variant="supplementary"
            iconRight={<IconArrowRight />}
            onClick={() => history.push(`/application/1/new/page1`)}>
            {t('shoppingCart.next')}
          </Button>
        </InnerContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default StartApplicationBar;
