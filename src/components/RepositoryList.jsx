import React from 'react';
import '../index.css';
import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'react',
  description: 'A JavaScript library for building user interfaces',
  link: '#',
}


export function RepositoryList() {
  return(
    <section className='repo-list'>
      <h1>Lista de repositórios</h1>
 
      <RepositoryItem 
      repository={repository} 
      />
      
    </section>
  );
}

