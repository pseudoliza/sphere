import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Container, { Slides, Slide, Inner } from './styled';
import Button, { ButtonGroup } from './../Button';
import ChangeText from './../ChangeText';

const texts = [
  'бухгалтера',
  'юриста',
  'курьера или почты',
  'кадровика'
];

const p = [
  'Посчитаем налоги по УСН 6% и 15% и отправим налоговую декларацию. Напомним, когда нужно платить налоги, чтобы сэкономить.',
  'Сформируем юридически правильный договор с использованием более 1400 шаблонов, сэкономим время и деньги на подготовке первички.',
  'Сделаем вам электронную подпись бесплатно, чтобы подписывать и отправлять и получать документы от клиентов и контрагентов онлайн.',
  'Рассчитываем зарплату и налоги, формируем платежные поручения, напоминаем об оплате зарплаты.',
];

const inner = (
  <Inner>
    <h5>Рекомендуем заплатить страховые взносы за I квартал</h5>
    <Row>
      <Col xs={12} lg={7}>
        <small>
          Оплатите страховые взносы до 31 марта 2018 года на сумму 8 096,25₽, чтобы уменьшить сумму авансового платежа за I квартал.
        </small>
      </Col>
      <Col xs={12} lg={5} style ={{ display: 'flex', justifyContent: 'flex-end'}} >
        <ButtonGroup>
          <Button style={{padding: '13px 38px'}} inactive disabled outline type="button">Оплатить</Button>
          <Button inactive disabled outline small type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            &#8226; &#8226; &#8226;
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Inner>
);

export default () => (
  <Container id="slides" >
    <h2>
      Можно работать без{' '}
      <span className='animate-flicker'>
        <ChangeText texts={texts} />
      </span>
    </h2>
    <p>
      Посчитаем налоги и отправим отчетность. Напомним когда <br/> нужно заплатить налоги и взносы, чтобы сэкономить.
    </p>
    <Slides>
      <Slide className="back-slide" >
        {inner}
        <Button disabled footer type="button">Оплатить</Button>
      </Slide>
      <Slide className="center-slide" >
        {inner}
        <Button disabled footer type="button">Оплатить</Button>
      </Slide>
      <Slide className="front-slide" >
        {inner}
        <Button disabled footer type="button">Оплатить</Button>
      </Slide>
    </Slides>
  </Container>
);