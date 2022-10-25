import { MouseEventHandler } from 'react';
//  components/Card.tsx --props
export interface CardProps {
    img: string,
    name: string,
    info: {
        title: string,
        description: string
    }[],
    onClick: MouseEventHandler<HTMLElement>
};