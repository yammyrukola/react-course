import { ChangeEvent, Component } from 'react';
import { Nothing, Starship } from '../../types/types';
import SearchMenu from '../search-menu/search-menu';
import { fetchAllStarships } from '../../api/api';
import StarshipList from '../starship-list/StarhipList';
import classNames from 'classnames';
import Spinner from '../spinner/spinner';
interface MainBoxState {
  starhips: Starship[];
  search: string;
  isLoading: boolean;
}

export default class MainBox extends Component<object, MainBoxState> {
  constructor(props: Nothing) {
    super(props);
    this.state = {
      starhips: [],
      search: localStorage.getItem('sw-0-search') || '',
      isLoading: false,
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const search = e.target.value;
    this.setState({ search });
  }

  async handleSearchClick() {
    localStorage.setItem('sw-0-search', this.state.search.trim());
    this.setState({
      isLoading: true,
    });
    const starhispRow = await fetchAllStarships();
    console.log('>>>>>>>', starhispRow);
    this.setState({ starhips: starhispRow });
    this.setState({ isLoading: false });
  }

  render() {
    const { search, starhips, isLoading } = this.state;
    const contentClass = classNames({ ['search-content-spinner']: isLoading });
    return (
      <div className="container">
        <SearchMenu
          onClick={this.handleSearchClick}
          onChange={this.handleSearchChange}
          search={search}
        />
        <div className={contentClass}>
          {isLoading ? <Spinner /> : <StarshipList starhips={starhips} />}
        </div>
      </div>
    );
  }
}
