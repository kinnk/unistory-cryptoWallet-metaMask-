import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ListItem = () => {
  const list = useSelector(state => state.data.list)
  return (
    <ul>
      {
        list.map(item => 
          <Item key={item.email} username={item.username} email={item.email} address={item.address}/>
          )
      }
    </ul>
  );
}

export default ListItem;
