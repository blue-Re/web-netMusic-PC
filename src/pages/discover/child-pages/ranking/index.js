import React, { memo, useState } from 'react'
import PlayListAllSong from './components/play-list';
import SpecialList from './components/special-list';

import { Content, RankingLeft, RankingRight, RankingWrapper } from './style';


const Ranking = memo((props) => {

  const [currentSongListId, setCurrentSongListId] = useState(19723756);

  const getCurrentSongListId = (id) => {
    // console.log(id);
    setCurrentSongListId(id)
  }

  return (
    <RankingWrapper>
      <Content>
        <RankingLeft>
          <SpecialList getCurrentSongListId={getCurrentSongListId}/>
        </RankingLeft>
        <RankingRight>
          <PlayListAllSong currentSongListId={currentSongListId}/>
        </RankingRight>
      </Content>
    </RankingWrapper>
  )
})

export default Ranking