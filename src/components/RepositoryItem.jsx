import React from 'react';
import '../index.css';


export function RepositoryItem({repository}) {


  return(
      <ul>
        <li>
          <strong>{repository.name ?? 'Deafult'}</strong>
          <p>{repository.description ?? 'Default'}</p>
          <a href="">
           {repository.link ?? 'Default'}
          </a>
        </li>
      </ul>
  );
}

