import { UserList } from './components/Users/UserList/UserList';
import { userData } from './userData';
import { useState } from 'react';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { FormControl } from './components/Forms/FormControl/FormControl';
import { FormSelect } from './components/Forms/FormSelect/FormSelect';

export const App = () => {
  const [users, setUsers] = useState(userData);
  const [query, setQuery] = useState('');

  const sortingOptions = [
    { value: 'all', label: 'All' },
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ]

  const filterUsers = (query) => userData.filter(({ name }) => {
    return name.toLowerCase().includes(query.toLowerCase());
  })

  const sortByType = {
    'all': () => filterUsers(query),
    'asc': () => [...filterUsers(query)].sort((u1, u2) => u1.age - u2.age),
    'desc': () => [...filterUsers(query)].sort((u1, u2) => u2.age - u1.age),
  }

  const sortHandler = (type) => {
    setUsers(sortByType[type]());
  }

  const searchHandler = (query) => {
    setQuery(query);
    setUsers(filterUsers(query));
  }

  return (
    <div>
      <Header>
        <FormControl
          type="search"
          id="search-users"
          onChange={searchHandler}
          placeholder="Query"
          label="Search users"
          name="users_search"
        />
        <FormSelect
          name="users_sort"
          onSelect={sortHandler}
          options={sortingOptions}
        />
      </Header>
      <Main>
        <UserList users={users}/>
      </Main>
    </div>
  )
}
