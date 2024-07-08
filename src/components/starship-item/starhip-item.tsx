import { Component } from 'react';
import { Nothing, Starship } from '../../types/types';

interface StarhipItemProps {
  ship: Starship;
}

export default class StarhipItem extends Component<StarhipItemProps, Nothing> {
  constructor(props: StarhipItemProps) {
    super(props);
  }

  render() {
    const { ship } = this.props;

    return (
      <article className="item">
        <h2 className="item-title">{ship.name}</h2>
        <div className="item-content">
          <p className="field">
            <span className="field-label">cargo capacity:</span>
            <span className="field-text">{ship.cargo_capacity}</span>
          </p>
          <p className="field">
            <span className="field-label">consumables:</span>
            <span className="field-text">{ship.consumables}</span>
          </p>
          <p className="field">
            <span className="field-label">cost:</span>
            <span className="field-text">{ship.cost_in_credits} credits</span>
          </p>
          <p className="field">
            <span className="field-label">crew:</span>
            <span className="field-text">{ship.crew}</span>
          </p>
          <p className="field">
            <span className="field-label">hyperdrive rating:</span>
            <span className="field-text">{ship.hyperdrive_rating}</span>
          </p>
          <p className="field">
            <span className="field-label">length:</span>
            <span className="field-text">{ship.length}</span>
          </p>
          <p className="field">
            <span className="field-label">manufacturer:</span>
            <span className="field-text">{ship.manufacturer}</span>
          </p>
          <p className="field">
            <span className="field-label">max atmosphering speed:</span>
            <span className="field-text">{ship.max_atmosphering_speed}</span>
          </p>
          <p className="field">
            <span className="field-label">model:</span>
            <span className="field-text">{ship.model}</span>
          </p>
          <p className="field">
            <span className="field-label">passengers:</span>
            <span className="field-text">{ship.passengers}</span>
          </p>
          <p className="field">
            <span className="field-label">starship class:</span>
            <span className="field-text">{ship.starship_class}</span>
          </p>
        </div>
      </article>
    );
  }
}
