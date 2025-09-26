import React from "react";
import { useSearchParams } from "react-router-dom";

function useNotes(noteMode) {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(searchParams.get("keyword") || "");
  const [status, setStatus] = React.useState('loading');

  React.useEffect(() => {
    const fetchNotesData = async () => {
      const { data } = await noteMode();
      data ? (setNotes(data), setStatus('success')) : setStatus('notfound');
    }

    fetchNotesData();
  }, [noteMode]);

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return { filteredNotes, keyword, onKeywordChangeHandler, status };
}

export default useNotes;