import { ChangeEvent, Component } from 'react';
import { Nothing } from '../../types/types';

interface SearchMenuProps {
  onClick: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

export default class SearchMenu extends Component<SearchMenuProps, Nothing> {
  constructor(props: SearchMenuProps) {
    super(props);
  }
  render() {
    const { onClick, onChange, search } = this.props;
    return (
      <>
        <form className="search-menu">
          <label htmlFor="search-input">Поиск:</label>
          <input
            className="search-input"
            id="search-input"
            type="text"
            onChange={onChange}
            value={search}
          />
          <button type="submit" onClick={onClick}>
            Поиск
          </button>
        </form>
        <div className="tip">
          To check the search feature, you can try, for example, entering the
          combination “con” or “al”
        </div>
      </>
    );
  }
}
