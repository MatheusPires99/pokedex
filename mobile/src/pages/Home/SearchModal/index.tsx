import React from 'react';

import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import { useSearch } from '../../../hooks/search';

type SearchModalProps = {
  setSearchValue: (value: string) => void;
};

const SearchModal = ({ setSearchValue }: SearchModalProps) => {
  const { handleToggleSearch } = useSearch();

  return (
    <Modal handleCloseModal={handleToggleSearch}>
      <Input
        icon="search"
        placeholder="Search for a Pokemon name"
        setValue={setSearchValue}
      />
    </Modal>
  );
};

export default SearchModal;
