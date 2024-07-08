import { Component } from 'react';
import { Nothing, Starship } from '../../types/types';
import StarhipItem from '../starship-item/starhip-item';

interface StarhipListProps {
  starhips: Starship[];
}

export default class StarshipList extends Component<StarhipListProps, Nothing> {
  constructor(props: StarhipListProps) {
    super(props);
  }

  render() {
    const { starhips } = this.props;
    return (
      <>
        {starhips && (
          <div>
            {starhips.map((ship) => (
              <StarhipItem key={ship.name} ship={ship} />
            ))}
          </div>
        )}
      </>
    );
  }
}
