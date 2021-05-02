import React from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetails() {
  let { slug } = useParams();
  return <div>{slug}</div>;
}
