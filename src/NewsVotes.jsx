import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, onValue, set, remove } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { db, auth } from './firebase';

// Лайк / дизлайк под новостью. Голоса: newsVotes/{newsId}/{uid} = 1 | -1
export default function NewsVotes({ id }) {
  const [votes, setVotes] = useState({});
  const [uid, setUid] = useState(auth.currentUser?.uid || null);
  const navigate = useNavigate();

  useEffect(() => onAuthStateChanged(auth, (u) => setUid(u?.uid || null)), []);
  useEffect(() => {
    const off = onValue(ref(db, `newsVotes/${id}`), (s) => setVotes(s.val() || {}));
    return () => off();
  }, [id]);

  const list = Object.values(votes);
  const likes = list.filter((v) => v === 1).length;
  const dislikes = list.filter((v) => v === -1).length;
  const mine = uid ? votes[uid] : 0;

  const vote = async (val) => {
    if (!uid) return navigate('/reg'); // голосовать могут только вошедшие
    const r = ref(db, `newsVotes/${id}/${uid}`);
    try {
      if (mine === val) await remove(r); // повторный клик снимает голос
      else await set(r, val);
    } catch (e) {
      console.error(e);
    }
  };

  const btn = (active, color) => ({
    display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 999,
    border: `1px solid ${active ? color : '#e0e0e6'}`, background: active ? color : '#fff',
    color: active ? '#fff' : '#555', fontSize: 14, cursor: 'pointer', transition: 'all .15s',
  });

  return (
    <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
      <button type="button" onClick={() => vote(1)} aria-pressed={mine === 1} style={btn(mine === 1, '#6a0bd6')}>
        <ThumbsUp size={16} /> {likes}
      </button>
      <button type="button" onClick={() => vote(-1)} aria-pressed={mine === -1} style={btn(mine === -1, '#d92d20')}>
        <ThumbsDown size={16} /> {dislikes}
      </button>
    </div>
  );
}
