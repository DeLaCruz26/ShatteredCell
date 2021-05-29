import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Text, Image, Button } from './CardStyles';

export function DeviceCard({ classes, children, ...props }) {
    return (
        <Container className={classNames('card', classes)} {...props}>
            {children}
        </Container>
    )
}

DeviceCard.Body = function DeviceCardBody({ classes, children, ...props }) {
    return (
        <Body className={classNames('card__body', classes)} {...props}>
            {children}
        </Body>
    )
}

DeviceCard.Title = function DeviceCardTitle({ classes, children, ...props }) {
    return (
        <Title className={classNames('card__title', classes)} {...props}>
            {children}
        </Title>
    )
}

DeviceCard.Text = function DeviceCardText({ classes, children, ...props }) {
    return (
        <Text className={classNames('card__text', classes)} {...props}>
            {children}
        </Text>
    )
}

DeviceCard.Image = function DeviceCardImage({ src, alt, classes, children, ...props }) {
    return (
        <Image 
            src={src}
            alt={alt}
            className={classNames('card__image', classes)}
            {...props}
        />
    )
}

DeviceCard.Button = function DeviceCardButton({ classes, children, ...props }) {
    return (
        <Button 
            type='button'
            className={classNames('card__body', classes)} 
            {...props}
        >
            {children}
        </Button>
    )
}
