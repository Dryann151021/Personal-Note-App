import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data.js';
import NoteDetail from '../components/NoteDetail.jsx';
import DetailPageAction from '../components/DetailPageAction.jsx';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState(null);
  const [status, setStatus] = React.useState('loading');

  React.useEffect(() => {
    const fetchNote = async () => {
      const { data } = await getNote(id);
      data ? (setNote(data), setStatus('success')) : setStatus('notfound'); 
    }

    fetchNote();
  }, [id]);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    navigate('/');
  }

  const onArchiveHandler = async (id) => {
    if (note.archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    navigate('/');
  }

  if (status === 'loading') {
    return <p>Loading....</p>
  }

  if (status === 'notfound') {
    navigate('*');
  }

  return(
    <section className='detail-page'>
      <NoteDetail {...note} />
      <DetailPageAction 
        id={note.id} 
        archived={note.archived} 
        onDelete={onDeleteHandler} 
        onArchive={onArchiveHandler} 
      />
    </section>
  )
}

export default DetailPage;