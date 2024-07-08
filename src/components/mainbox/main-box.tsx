import { Component, ReactNode } from 'react';
import { Nothing, Starship } from '../../types/types';
import SearchMenu from '../search-menu/search-menu';
import { fetchAllStarships } from '../../api/api';
import StarshipList from '../starship-list/StarhipList';
interface MainBoxState {
  starhips: Starship[];
}

export default class MainBox extends Component<object, MainBoxState> {
  constructor(props: Nothing) {
    super(props);
    this.state = { starhips: [] };
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  async handleSearchClick() {
    const starhispRow = await fetchAllStarships();
    console.log('>>>>>>>', starhispRow);
    this.setState({ starhips: starhispRow });
  }

  render(): ReactNode {
    return (
      <>
        <SearchMenu onClick={this.handleSearchClick} />
        <StarshipList starhips={this.state.starhips} />
      </>
    );
  }
}
