import {render} from '@testing-library/react';
import React from 'react';
// import '@testing-library/jest-dom';

import PlayerCard from './PlayerCard';

const players = [
    {
        id: 0,
        name: 'michael',
        country: 'usa'
    },
    {
        id: 1,
        name: 'Henry',
        country:'belgium'
    }
]

describe('PlayerCard', () => {
    it('PlayerCard renders and finds the data without crashing', () => {
        const {getbyText, getByTestId, container} = render(<PlayerCard players={players} />)
        const playerName = getByTestId('player-card-michael');
        const playerCountry = getByTestId('player-card-usa');
        expect(playerName.innerHTML).toBe('michael')
        expect(playerCountry.innerHTML).toBe('usa')
    })
})